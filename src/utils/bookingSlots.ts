import type { BookedSlotRow } from '@/interfaces/booking.interface'
import { BOOKING_DURATIONS } from '@/interfaces/meetingBooking'

export const SLOT_GRID_MINUTES = 20

export type BusyInterval = {
  startMinutes: number
  endMinutes: number
}

export function formatDateISO(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, '0')
  const d = String(day).padStart(2, '0')
  return `${year}-${m}-${d}`
}

export function parseDurationMinutes(duration: string): number {
  const value = parseInt(duration.replace(/\D/g, ''), 10)
  return BOOKING_DURATIONS.includes(value as (typeof BOOKING_DURATIONS)[number]) ? value : 20
}

export function time24ToMinutes(time24: string): number {
  const [h, m] = time24.split(':').map(Number)
  return h * 60 + m
}

export function minutesToTime24(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60) % 24
  const m = totalMinutes % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

export function displaySlotTo24h(slot: string, is24Hour: boolean): string {
  if (is24Hour) return slot

  const match = slot.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  if (!match) return slot

  let hour = parseInt(match[1], 10)
  const minute = match[2]
  const period = match[3].toUpperCase()

  if (period === 'AM' && hour === 12) hour = 0
  if (period === 'PM' && hour !== 12) hour += 12

  return `${String(hour).padStart(2, '0')}:${minute}`
}

export function format24hForDisplay(time24: string, is24Hour: boolean): string {
  if (is24Hour) return time24

  const [hStr, mStr] = time24.split(':')
  let hour = parseInt(hStr, 10)
  const period = hour >= 12 ? 'PM' : 'AM'

  if (hour === 0) hour = 12
  else if (hour > 12) hour -= 12

  return `${hour}:${mStr} ${period}`
}

export function formatSlotTimeRange(slotTime24: string, durationMinutes: number, is24Hour: boolean): string {
  const startMinutes = time24ToMinutes(slotTime24)
  const endMinutes = startMinutes + durationMinutes
  const startLabel = format24hForDisplay(slotTime24, is24Hour)
  const endLabel = format24hForDisplay(minutesToTime24(endMinutes), is24Hour)
  return `${startLabel} – ${endLabel}`
}

function getZonedNowParts(timeZone: string) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date())

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '00'

  return {
    year: get('year'),
    month: get('month'),
    day: get('day'),
    hour: parseInt(get('hour'), 10) % 24,
    minute: parseInt(get('minute'), 10),
  }
}

export function isDayInPast(year: number, month: number, day: number, timeZone: string): boolean {
  const dateISO = formatDateISO(year, month, day)
  const now = getZonedNowParts(timeZone)
  const todayISO = `${now.year}-${now.month}-${now.day}`
  return dateISO < todayISO
}

export function isSlotInPast(dateISO: string, time24: string, timeZone: string): boolean {
  const now = getZonedNowParts(timeZone)
  const todayISO = `${now.year}-${now.month}-${now.day}`

  if (dateISO < todayISO) return true
  if (dateISO > todayISO) return false

  const slotMinutes = time24ToMinutes(time24)
  const nowMinutes = now.hour * 60 + now.minute
  return slotMinutes <= nowMinutes
}

export function rangesOverlap(startA: number, endA: number, startB: number, endB: number): boolean {
  return startA < endB && endA > startB
}

/** Merge consecutive booked grid cells into continuous busy blocks. */
export function buildBusyIntervalsFromBookedSlots(bookedSlots: BookedSlotRow[]): BusyInterval[] {
  const booked = bookedSlots
    .filter((slot) => slot.booked)
    .map((slot) => {
      const startMinutes = time24ToMinutes(slot.time)
      return {
        startMinutes,
        endMinutes: startMinutes + SLOT_GRID_MINUTES,
      }
    })
    .sort((a, b) => a.startMinutes - b.startMinutes)

  if (booked.length === 0) return []

  const merged: BusyInterval[] = [{ ...booked[0] }]

  for (let i = 1; i < booked.length; i += 1) {
    const last = merged[merged.length - 1]
    const current = booked[i]

    if (current.startMinutes <= last.endMinutes) {
      last.endMinutes = Math.max(last.endMinutes, current.endMinutes)
    } else {
      merged.push({ ...current })
    }
  }

  return merged
}

/**
 * A slot is unavailable when the full [start, start + duration) window
 * overlaps any existing busy interval (another user's reserved range).
 */
export function isSlotUnavailable(
  slotTime24: string,
  durationMinutes: number,
  bookedSlots: BookedSlotRow[],
  dateISO: string,
  timeZone: string
): boolean {
  if (isSlotInPast(dateISO, slotTime24, timeZone)) return true

  const startMinutes = time24ToMinutes(slotTime24)
  const endMinutes = startMinutes + durationMinutes
  const busyIntervals = buildBusyIntervalsFromBookedSlots(bookedSlots)

  return busyIntervals.some((interval) =>
    rangesOverlap(startMinutes, endMinutes, interval.startMinutes, interval.endMinutes)
  )
}

export function getInitialCalendarState(timeZone: string) {
  const now = getZonedNowParts(timeZone)
  return {
    year: parseInt(now.year, 10),
    month: parseInt(now.month, 10) - 1,
    day: parseInt(now.day, 10),
  }
}
