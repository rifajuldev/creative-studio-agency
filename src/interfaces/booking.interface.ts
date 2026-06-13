export type CreateBookingBody = {
  name: string
  email: string
  phone: string
  message: string
  date: string
  time: string
  durationInMinutes: number
  timeZone?: string
}

export type CreateBookingSuccessData = {
  meetLink: string
  bookingId: string
}

export type CreateBookingSuccess = {
  success: true
  message: string
  meetLink: string
  bookingId: string
}

export type CreateBookingFailure = {
  success: false
  message: string
}

export type CreateBookingResult = CreateBookingSuccess | CreateBookingFailure

export type BookedSlotRow = {
  time: string
  booked: boolean
}

export type GetBookedSlotsResult = {
  date: string
  slots: BookedSlotRow[]
}
