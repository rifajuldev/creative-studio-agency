import type { CreateBookingBody, CreateBookingResult, GetBookedSlotsResult } from '@/interfaces/booking.interface'
import { api } from '@/redux/api/api'

type CreateBookingApiResponse = {
  success: boolean
  message: string
  data: {
    meetLink: string
    bookingId: string
  }
}

type BookedSlotsApiResponse = {
  success: boolean
  message: string
  data: GetBookedSlotsResult
}

const bookingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation<CreateBookingResult, CreateBookingBody>({
      query: (body) => ({
        url: '/booking/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['booking'],
      transformResponse: (response: CreateBookingApiResponse): CreateBookingResult => {
        if (response.success && response.data?.meetLink) {
          return {
            success: true,
            message: response.message,
            meetLink: response.data.meetLink,
            bookingId: response.data.bookingId,
          }
        }

        return {
          success: false,
          message: response.message || 'Failed to create booking.',
        }
      },
      transformErrorResponse: (response): CreateBookingResult => {
        const data = response.data as { message?: string } | undefined
        return {
          success: false,
          message: data?.message || 'Failed to create booking.',
        }
      },
    }),
    getBookedSlots: builder.query<GetBookedSlotsResult, { date: string; timeZone?: string }>({
      query: ({ date, timeZone }) => {
        const sp = new URLSearchParams({ date })
        if (timeZone?.trim()) {
          sp.set('timeZone', timeZone.trim())
        }
        return `/booking/booked-slots?${sp.toString()}`
      },
      transformResponse: (response: BookedSlotsApiResponse) => response.data,
      providesTags: ['booking'],
    }),
  }),
})

export const { useCreateBookingMutation, useGetBookedSlotsQuery, useLazyGetBookedSlotsQuery } = bookingApi
