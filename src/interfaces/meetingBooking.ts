import type { CreateBookingResult } from '@/interfaces/booking.interface'

export const BOOKING_DURATIONS = [20, 30, 45, 60] as const

export type BookingDuration = (typeof BOOKING_DURATIONS)[number]

/** Result shape shared by the floating booking widget. */
export type MeetingBookingResult = CreateBookingResult
