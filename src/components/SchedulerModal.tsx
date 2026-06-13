'use client'

import FormErrorMessage from '@/components/FormErrorMessage'
import SchedulerPhoneField from '@/components/booking/SchedulerPhoneField'
import {
  bookingContactInitialValues,
  bookingContactValidationSchema,
  type BookingContactValues,
} from '@/components/booking/bookingFormConfig'
import type { IQueryMutationErrorResponse } from '@/interfaces/queryMutationErrorResponse'
import { useCreateBookingMutation, useGetBookedSlotsQuery } from '@/redux/features/booking/booking.api'
import {
  displaySlotTo24h,
  formatDateISO,
  formatSlotTimeRange,
  getInitialCalendarState,
  isDayInPast,
  isSlotUnavailable,
  parseDurationMinutes,
} from '@/utils/bookingSlots'
import { cn } from '@/utils/cn'
import { Form, Formik } from 'formik'
import { Calendar as CalendarIcon, Check, ExternalLink, Globe, Loader, Sun, Sunrise, Sunset, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useMemo, useState } from 'react'
import { toast } from 'sonner'

interface SchedulerModalProps {
  isOpen: boolean
  onClose: () => void
}

const DEFAULT_TIMEZONE = () =>
  (typeof Intl !== 'undefined' && Intl.DateTimeFormat().resolvedOptions().timeZone) || 'Asia/Dhaka'

const bookingFieldClassName =
  'bg-[#12131b] border border-white/5 focus:border-[#bca374]/40 rounded-full px-4 py-2.5 text-xs text-white placeholder:text-gray-500 outline-none w-full h-10 font-light transition-all'

const bookingFieldWrapClassName = 'flex-1 min-w-0'

const bookingFieldErrorClassName = 'min-h-4 mt-1'

const bookingSubmitButtonClassName =
  'inline-flex h-10 items-center justify-center gap-2 px-6 bg-[#bca374] hover:bg-white text-black hover:text-black font-bold uppercase tracking-widest rounded-full text-[9px] shrink-0 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'

const shouldShowBookingFieldError = (value: string, touched: boolean | undefined, error: string | undefined) =>
  Boolean(error) && (Boolean(touched) || value.length > 0)

function SchedulerSlotSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={`slot-skeleton-${index}`}
          className="flex h-13 animate-pulse items-center justify-center rounded-xl border border-white/5 bg-[#12131b]"
        >
          <div className="h-3 w-16 rounded-full bg-white/10" />
        </div>
      ))}
    </>
  )
}

export default function SchedulerModal({ isOpen, onClose }: SchedulerModalProps) {
  const [meetingType] = useState('Google Meet')
  const [duration, setDuration] = useState('20m')
  const [timezone, setTimezone] = useState(DEFAULT_TIMEZONE)

  const initialCalendar = useMemo(() => getInitialCalendarState(DEFAULT_TIMEZONE()), [])
  const [currentYear, setCurrentYear] = useState(initialCalendar.year)
  const [currentMonth, setCurrentMonth] = useState(initialCalendar.month)
  const [selectedDay, setSelectedDay] = useState<number | null>(initialCalendar.day)
  const [activePeriod, setActivePeriod] = useState<'morning' | 'afternoon' | 'evening'>('morning')
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)

  const [is24Hour, setIs24Hour] = useState(false)

  const [isBooked, setIsBooked] = useState(false)
  const [bookedParticipantName, setBookedParticipantName] = useState('')
  const [meetLink, setMeetLink] = useState('')

  const [createBooking, { isLoading: isSubmitting }] = useCreateBookingMutation()

  const selectedDateISO = selectedDay ? formatDateISO(currentYear, currentMonth, selectedDay) : ''

  const {
    data: bookedSlotsData,
    isFetching: isFetchingSlots,
    isLoading: isLoadingSlots,
    refetch: refetchBookedSlots,
  } = useGetBookedSlotsQuery(
    { date: selectedDateISO, timeZone: timezone },
    {
      skip: !isOpen || !selectedDateISO,
      pollingInterval: isOpen && selectedDateISO ? 10000 : 0,
    }
  )

  const durationMinutes = parseDurationMinutes(duration)
  const bookedSlots = bookedSlotsData?.slots ?? []
  const hasCurrentSlotData = bookedSlotsData?.date === selectedDateISO
  const showSlotSkeleton = isLoadingSlots || (isFetchingSlots && !hasCurrentSlotData)

  const selectedSlotRange = useMemo(() => {
    if (!selectedTimeSlot) return null
    const time24 = displaySlotTo24h(selectedTimeSlot, is24Hour)
    return formatSlotTimeRange(time24, durationMinutes, is24Hour)
  }, [selectedTimeSlot, durationMinutes, is24Hour])

  const isSelectedSlotUnavailable = useMemo(() => {
    if (!selectedTimeSlot || !selectedDateISO) return false
    const time24 = displaySlotTo24h(selectedTimeSlot, is24Hour)
    return isSlotUnavailable(time24, durationMinutes, bookedSlots, selectedDateISO, timezone)
  }, [selectedTimeSlot, selectedDateISO, durationMinutes, bookedSlots, timezone, is24Hour])

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  // Calculate grid of days
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay()

  useEffect(() => {
    setSelectedTimeSlot(null)
  }, [selectedDay, currentMonth, currentYear, timezone])

  useEffect(() => {
    if (!selectedTimeSlot || !selectedDateISO) return

    const time24 = displaySlotTo24h(selectedTimeSlot, is24Hour)
    if (isSlotUnavailable(time24, durationMinutes, bookedSlots, selectedDateISO, timezone)) {
      setSelectedTimeSlot(null)
    }
  }, [duration, durationMinutes, bookedSlots, selectedTimeSlot, selectedDateISO, timezone, is24Hour])

  useEffect(() => {
    if (!isOpen) {
      setIsBooked(false)
      setSelectedTimeSlot(null)
      setBookedParticipantName('')
      setMeetLink('')
    }
  }, [isOpen])

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear((prev) => prev - 1)
    } else {
      setCurrentMonth((prev) => prev - 1)
    }
    setSelectedDay(null)
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear((prev) => prev + 1)
    } else {
      setCurrentMonth((prev) => prev + 1)
    }
    setSelectedDay(null)
  }

  // Curated, beautiful slots per period - absolutely NO SCROLL REQUIRED
  const getCuratedSlots = () => {
    if (activePeriod === 'morning') {
      return is24Hour ? ['09:00', '10:00', '10:45', '11:30'] : ['9:00 AM', '10:00 AM', '10:45 AM', '11:30 AM']
    } else if (activePeriod === 'afternoon') {
      return is24Hour ? ['13:30', '14:15', '15:00', '16:30'] : ['1:30 PM', '2:15 PM', '3:00 PM', '4:30 PM']
    } else {
      return is24Hour ? ['17:15', '18:00', '19:30', '20:15'] : ['5:15 PM', '6:00 PM', '7:30 PM', '8:15 PM']
    }
  }

  const getDayName = (dayNum: number) => {
    const date = new Date(currentYear, currentMonth, dayNum)
    return date.toLocaleDateString('en-US', { weekday: 'short' })
  }

  const resetBookingForm = () => {
    setIsBooked(false)
    setSelectedTimeSlot(null)
    setBookedParticipantName('')
    setMeetLink('')
  }

  const handleConfirmBooking = async (values: BookingContactValues) => {
    if (!selectedDay || !selectedTimeSlot) {
      toast.error('Please select a date and time slot.')
      return
    }

    const time24 = displaySlotTo24h(selectedTimeSlot, is24Hour)
    const date = formatDateISO(currentYear, currentMonth, selectedDay)

    const freshResult = await refetchBookedSlots()
    const latestSlots = freshResult.data?.slots ?? bookedSlots

    if (isSlotUnavailable(time24, durationMinutes, latestSlots, date, timezone)) {
      toast.error('That time range is already reserved. Please choose another slot.')
      return
    }

    const res = await createBooking({
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      message: 'Design consultation session booked via portal.',
      date,
      time: time24,
      durationInMinutes: durationMinutes,
      timeZone: timezone,
    })

    const error = res.error as IQueryMutationErrorResponse | undefined
    if (error) {
      toast.error(error.data?.message || 'Failed to create booking.')
      return
    }

    if (!res.data?.success) {
      toast.error(res.data?.message || 'Failed to create booking.')
      return
    }

    setBookedParticipantName(values.name.trim())
    setMeetLink(res.data.meetLink)
    setIsBooked(true)
    toast.success(res.data.message || 'Meeting booked successfully.')
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 leading-none select-none sm:p-6 md:p-8">
        {/* Sleek Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#090a10]/85 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Main Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-50 flex max-h-[92vh] w-full max-w-[1020px] flex-col overflow-hidden rounded-4xl border border-white/5 bg-[#0d0e15] text-white shadow-2xl md:max-h-[82vh]"
        >
          {/* Subtle Accent Glows for Luxury Depth */}
          <div className="pointer-events-none absolute top-0 left-10 h-96 w-96 -translate-y-1/2 rounded-full bg-[#bca374]/5 blur-[100px]" />
          <div className="pointer-events-none absolute right-10 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-[#bca374]/3 blur-[120px]" />

          {/* Header Block */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/5 px-8 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#bca374]/20 bg-[#bca374]/10">
                <CalendarIcon className="h-4 w-4 text-[#bca374]" />
              </div>
              <div>
                <h2 className="font-display text-base font-light tracking-wide uppercase md:text-lg">
                  Design Consult <span className="font-serif text-[#bca374] italic">Portal</span>
                </h2>
                <p className="mt-1 font-mono text-[10px] tracking-wider text-gray-500 uppercase">Sync Engine v2.0</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/5 bg-white/5 text-white transition-all hover:border-[#bca374]/20 hover:bg-white/10"
            >
              <X size={16} />
            </button>
          </div>

          <div className="relative z-10 flex flex-1 flex-col overflow-y-auto p-0">
            {!isBooked ? (
              <div className="grid flex-1 grid-cols-1 lg:grid-cols-12">
                {/* COLUMN 1: Settings (Meeting Details) */}
                <div className="flex flex-col gap-6 border-b border-white/5 bg-white/1 p-6 md:p-8 lg:col-span-3 lg:border-r lg:border-b-0">
                  <div>
                    <label className="mb-2 block font-mono text-[9px] font-bold tracking-widest text-gray-500 uppercase">
                      Meeting Type
                    </label>
                    <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-[#12131b] px-4 py-3 text-xs text-white">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#bca374] opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#bca374]"></span>
                      </span>
                      <span className="font-medium text-gray-200">{meetingType}</span>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-[9px] font-bold tracking-widest text-gray-500 uppercase">
                      Session Length
                    </label>
                    <div className="relative">
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full cursor-pointer appearance-none rounded-xl border border-white/5 bg-[#12131b] px-4 py-3 text-xs text-white transition-all outline-none focus:border-[#bca374]/40"
                      >
                        <option value="20m">20 Minutes Brief</option>
                        <option value="30m">30 Minutes Intake</option>
                        <option value="45m">45 Minutes Strategy</option>
                        <option value="60m">60 Minutes Deep-Dive</option>
                      </select>
                      <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                        <svg className="h-3.5 w-3.5 fill-none stroke-current opacity-60" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-[9px] font-bold tracking-widest text-gray-500 uppercase">
                      Target Timezone
                    </label>
                    <div className="relative">
                      <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full cursor-pointer appearance-none truncate rounded-xl border border-white/5 bg-[#12131b] py-3 pr-8 pl-10 text-xs font-light text-white transition-all outline-none focus:border-[#bca374]/40"
                      >
                        <option value="Asia/Dhaka">Asia/Dhaka (GMT+6)</option>
                        <option value="America/New_York">America/New_York (GMT-4)</option>
                        <option value="Europe/London">Europe/London (GMT+1)</option>
                        <option value="Asia/Tokyo">Asia/Tokyo (GMT+9)</option>
                        <option value="Australia/Sydney">Australia/Sydney (GMT+10)</option>
                      </select>
                      <div className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#bca374]/60">
                        <Globe className="h-3.5 w-3.5" />
                      </div>
                      <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                        <svg className="h-3.5 w-3.5 fill-none stroke-current opacity-60" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto hidden flex-col gap-2 rounded-xl border border-white/5 bg-white/1 p-4 lg:flex">
                    <span className="font-mono text-[8px] tracking-widest text-[#bca374]/70 uppercase">Next Steps</span>
                    <p className="text-[11px] leading-relaxed font-light text-gray-500">
                      Select date and premium session window to establish system communication slots.
                    </p>
                  </div>
                </div>

                {/* COLUMN 2: Calendar Grid */}
                <div className="flex flex-col border-b border-white/5 bg-[#0f1017] p-6 md:p-8 lg:col-span-5 lg:border-r lg:border-b-0">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-display text-base font-light text-gray-200">
                      {months[currentMonth]} <span className="font-mono font-medium text-[#bca374]">{currentYear}</span>
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={handlePrevMonth}
                        className="cursor-pointer rounded-lg border border-white/5 bg-[#14151e] p-1.5 text-white transition-all hover:border-[#bca374]/30 hover:bg-[#1a1b26] md:p-2"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={handleNextMonth}
                        className="cursor-pointer rounded-lg border border-white/5 bg-[#14151e] p-1.5 text-white transition-all hover:border-[#bca374]/30 hover:bg-[#1a1b26] md:p-2"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Day Names Row */}
                  <div className="mb-3 grid grid-cols-7 gap-1 text-center font-mono text-[9px] font-bold tracking-wider text-gray-500">
                    {daysOfWeek.map((day) => (
                      <div key={day} className="py-1.5">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Days Numeric Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center text-xs font-light md:gap-1.5 md:text-sm">
                    {/* Empty Slots */}
                    {Array.from({ length: firstDayIndex }).map((_, idx) => (
                      <div key={`empty-${idx}`} className="pointer-events-none py-2 opacity-0" />
                    ))}

                    {/* Numeric Days */}
                    {Array.from({ length: daysInMonth }).map((_, idx) => {
                      const dayNumber = idx + 1
                      const isSelected = selectedDay === dayNumber
                      const isPast = isDayInPast(currentYear, currentMonth, dayNumber, timezone)
                      return (
                        <button
                          key={`day-${dayNumber}`}
                          type="button"
                          disabled={isPast}
                          onClick={() => !isPast && setSelectedDay(dayNumber)}
                          className={`group relative flex aspect-square flex-col items-center justify-center rounded-xl px-1 py-2 transition-all ${
                            isPast ? 'cursor-not-allowed text-gray-600 opacity-30' : 'cursor-pointer'
                          } ${
                            isSelected
                              ? 'scale-102 bg-[#bca374] font-bold text-black shadow-lg'
                              : isPast
                                ? ''
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span className="leading-none">{dayNumber}</span>
                          <div
                            className={`mt-1 h-1 w-1 rounded-full transition-colors ${
                              isSelected ? 'bg-black' : 'bg-transparent group-hover:bg-[#bca374]/50'
                            }`}
                          />
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* COLUMN 3: Modern Curated Time Slot Column (NO SCROLL BAR) */}
                <div className="flex flex-col bg-[#0b0c10] p-6 md:p-8 lg:col-span-4">
                  <div className="mb-5 flex shrink-0 items-center justify-between gap-3">
                    <span className="font-display text-sm font-light tracking-tight text-gray-300">
                      {selectedDay ? `${getDayName(selectedDay)} ${selectedDay}` : 'Date Index'}
                    </span>
                    {/* 12h/24h toggle */}
                    <div className="flex gap-0.5 rounded-lg border border-white/5 bg-[#12131a] p-0.5 font-mono text-[9px]">
                      <button
                        onClick={() => setIs24Hour(false)}
                        className={`cursor-pointer rounded px-1.5 py-0.5 transition-all ${!is24Hour ? 'bg-[#bca374] font-semibold text-black' : 'text-gray-400 hover:text-white'}`}
                      >
                        12h
                      </button>
                      <button
                        onClick={() => setIs24Hour(true)}
                        className={`cursor-pointer rounded px-1.5 py-0.5 transition-all ${is24Hour ? 'bg-[#bca374] font-semibold text-black' : 'text-gray-400 hover:text-white'}`}
                      >
                        24h
                      </button>
                    </div>
                  </div>

                  {/* ACTIVE TIME SELECTION BOX */}
                  <div className="mb-5 shrink-0 rounded-xl border border-white/5 bg-[#12131b] p-3">
                    <span className="font-mono text-[8px] tracking-widest text-gray-500 uppercase">
                      Reserved window
                    </span>
                    <p className="mt-1 truncate pr-1 text-xs font-semibold tracking-wide text-[#bca374]">
                      {selectedSlotRange ? `${selectedSlotRange} (${duration}, ${timezone})` : 'Choose a block below'}
                    </p>
                  </div>

                  {/* Period selection pills - Absolutely fits without scrolling */}
                  <div className="mb-5 grid shrink-0 grid-cols-3 gap-1 rounded-xl border border-white/5 bg-[#12131b] p-1">
                    <button
                      onClick={() => setActivePeriod('morning')}
                      className={`flex cursor-pointer flex-col items-center gap-1 rounded-lg px-1 py-2 text-[9px] font-medium tracking-wider uppercase transition-all ${
                        activePeriod === 'morning'
                          ? 'border border-white/5 bg-white/5 text-white shadow-sm'
                          : 'border border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      <Sunrise size={11} className={activePeriod === 'morning' ? 'text-[#bca374]' : 'text-gray-400'} />
                      <span>Morning</span>
                    </button>
                    <button
                      onClick={() => setActivePeriod('afternoon')}
                      className={`flex cursor-pointer flex-col items-center gap-1 rounded-lg px-1 py-2 text-[9px] font-medium tracking-wider uppercase transition-all ${
                        activePeriod === 'afternoon'
                          ? 'border border-white/5 bg-white/5 text-white shadow-sm'
                          : 'border border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      <Sun size={11} className={activePeriod === 'afternoon' ? 'text-[#bca374]' : 'text-gray-400'} />
                      <span>Noon</span>
                    </button>
                    <button
                      onClick={() => setActivePeriod('evening')}
                      className={`flex cursor-pointer flex-col items-center gap-1 rounded-lg px-1 py-2 text-[9px] font-medium tracking-wider uppercase transition-all ${
                        activePeriod === 'evening'
                          ? 'border border-white/5 bg-white/5 text-white shadow-sm'
                          : 'border border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      <Sunset size={11} className={activePeriod === 'evening' ? 'text-[#bca374]' : 'text-gray-400'} />
                      <span>Eve</span>
                    </button>
                  </div>

                  {/* Modern grid layout containing slots - Absolutely static size, NEVER overflows or scrolls */}
                  <div className="flex flex-1 flex-col justify-center">
                    {selectedDay ? (
                      <div className="grid grid-cols-2 gap-2.5">
                        {showSlotSkeleton ? (
                          <SchedulerSlotSkeleton />
                        ) : (
                          getCuratedSlots().map((slot) => {
                            const isActive = selectedTimeSlot === slot
                            const time24 = displaySlotTo24h(slot, is24Hour)
                            const unavailable = Boolean(
                              selectedDateISO &&
                              isSlotUnavailable(time24, durationMinutes, bookedSlots, selectedDateISO, timezone)
                            )
                            return (
                              <button
                                key={slot}
                                type="button"
                                disabled={unavailable}
                                title={unavailable ? 'This time range is already reserved' : undefined}
                                onClick={() => !unavailable && setSelectedTimeSlot(slot)}
                                className={`rounded-xl border px-3 py-4 text-center text-xs font-semibold tracking-wide transition-all outline-none ${
                                  unavailable
                                    ? 'cursor-not-allowed border-white/5 bg-[#12131b]/50 text-gray-600 line-through opacity-50'
                                    : 'cursor-pointer'
                                } ${
                                  !unavailable && isActive
                                    ? 'scale-102 border-[#bca374] bg-[#bca374] font-bold text-black shadow-lg'
                                    : !unavailable
                                      ? 'border-white/5 bg-[#12131b] text-gray-300 hover:bg-[#161823] hover:text-white'
                                      : ''
                                }`}
                              >
                                {slot}
                              </button>
                            )
                          })
                        )}
                      </div>
                    ) : (
                      <div className="py-8 text-center text-xs leading-relaxed font-light text-gray-500">
                        Pick a day from the calendar grid to initialize parameters.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* BOOKED CONFIRMATION SUCCESS VIEW */
              <div className="relative z-10 mx-auto flex h-full min-h-[460px] max-w-lg flex-col justify-center space-y-6 p-8 text-center md:p-14">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#bca374]/20 bg-[#bca374]/10 text-[#bca374] shadow-inner">
                  <Check size={28} className="stroke-3" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl leading-tight font-light tracking-tight text-white md:text-3xl">
                    Meeting scheduled <br />
                    <span className="font-serif text-[#bca374] italic">successfully!</span>
                  </h3>
                  <p className="text-xs leading-relaxed font-light text-gray-400">
                    A secure calendar invitation session link has been logged for transmission.
                  </p>
                </div>

                <div className="space-y-3.5 rounded-2xl border border-white/5 bg-[#12131b]/90 p-5 text-left">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">Participant</span>
                    <span className="max-w-[200px] truncate font-semibold text-white">
                      {bookedParticipantName || 'Executive Client'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">Medium</span>
                    <span className="font-semibold text-[#bca374]">{meetingType}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 text-xs">
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">Reserved Slot</span>
                    <span className="font-semibold text-white">
                      {selectedDay && months[currentMonth]} {selectedDay}, {currentYear} @ {selectedTimeSlot}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">Timezone</span>
                    <span className="max-w-[180px] truncate font-semibold text-gray-400">{timezone}</span>
                  </div>
                  {meetLink ? (
                    <a
                      href={meetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-[#bca374]/30 bg-[#bca374]/15 py-3 text-[10px] font-bold tracking-widest text-[#bca374] uppercase transition-colors hover:bg-[#bca374]/25"
                    >
                      <ExternalLink size={12} />
                      Join Google Meet
                    </a>
                  ) : null}
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="button"
                    onClick={resetBookingForm}
                    className="cursor-pointer rounded-full border border-[#bca374]/20 bg-[#bca374]/10 px-6 py-3 text-[10px] font-bold tracking-widest text-[#bca374] uppercase transition-colors hover:bg-[#bca374]/25"
                  >
                    Schedule Another Session
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Footer for Modal container */}
          {!isBooked && (
            <div className="relative z-10 flex min-h-35 shrink-0 flex-col gap-3 border-t border-white/5 bg-[#0b0c10] px-6 py-5 md:px-8">
              {selectedDay && selectedTimeSlot ? (
                <Formik
                  key={isOpen ? 'scheduler-booking-open' : 'scheduler-booking-closed'}
                  initialValues={bookingContactInitialValues}
                  validationSchema={bookingContactValidationSchema}
                  validateOnChange
                  validateOnBlur
                  onSubmit={handleConfirmBooking}
                >
                  {({ values, errors, touched, handleChange, handleBlur, setFieldTouched }) => {
                    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(event)
                      void setFieldTouched(event.target.name, true, false)
                    }

                    return (
                      <Form className="flex w-full flex-col gap-3">
                        <div className="flex w-full items-start gap-2">
                          <div className={bookingFieldWrapClassName}>
                            <input
                              type="text"
                              name="name"
                              value={values.name}
                              onChange={handleFieldChange}
                              onBlur={handleBlur}
                              placeholder="Your name"
                              className={cn(
                                bookingFieldClassName,
                                shouldShowBookingFieldError(values.name, touched.name, errors.name) &&
                                  'border-red-500/65'
                              )}
                            />
                            <div className={bookingFieldErrorClassName}>
                              {shouldShowBookingFieldError(values.name, touched.name, errors.name) ? (
                                <FormErrorMessage message={errors.name!} className="mt-0" />
                              ) : null}
                            </div>
                          </div>
                          <div className={bookingFieldWrapClassName}>
                            <input
                              type="email"
                              name="email"
                              value={values.email}
                              onChange={handleFieldChange}
                              onBlur={handleBlur}
                              placeholder="Your email"
                              className={cn(
                                bookingFieldClassName,
                                shouldShowBookingFieldError(values.email, touched.email, errors.email) &&
                                  'border-red-500/65'
                              )}
                            />
                            <div className={bookingFieldErrorClassName}>
                              {shouldShowBookingFieldError(values.email, touched.email, errors.email) ? (
                                <FormErrorMessage message={errors.email!} className="mt-0" />
                              ) : null}
                            </div>
                          </div>
                          <SchedulerPhoneField timeZone={timezone} className={bookingFieldWrapClassName} />
                          <button
                            type="submit"
                            disabled={isSubmitting || isSelectedSlotUnavailable}
                            className={bookingSubmitButtonClassName}
                          >
                            Log Session
                            {isSubmitting ? <Loader size={14} className="shrink-0 animate-spin" aria-hidden /> : null}
                          </button>
                        </div>

                        {selectedSlotRange ? (
                          <p className="text-[11px] leading-relaxed font-light text-gray-400">
                            Confirm{' '}
                            <strong className="font-medium text-white">
                              {months[currentMonth]} {selectedDay}
                            </strong>{' '}
                            from <strong className="font-medium text-white">{selectedSlotRange}</strong> ({duration}) —
                            this full window will be reserved for you only.
                          </p>
                        ) : null}
                      </Form>
                    )
                  }}
                </Formik>
              ) : (
                <>
                  <div className="flex w-full gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 cursor-pointer rounded-full border border-white/5 px-6 py-3 text-[10px] font-bold tracking-widest text-white uppercase transition-all hover:border-white/15"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      disabled
                      className="flex-1 cursor-not-allowed rounded-full bg-white/5 px-8 py-3 text-[10px] font-bold tracking-widest text-gray-500 uppercase"
                    >
                      Proceed
                    </button>
                  </div>
                  <p className="text-[11px] leading-relaxed font-light text-gray-500">
                    Please click a day from the grid and choose a curated time segment to proceed.
                  </p>
                </>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
