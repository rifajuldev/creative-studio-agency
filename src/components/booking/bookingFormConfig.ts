import { isValidPhoneNumber } from 'libphonenumber-js'
import * as Yup from 'yup'

export const bookingContactInitialValues = {
  name: '',
  email: '',
  phone: '',
}

export type BookingContactValues = typeof bookingContactInitialValues

export const bookingContactValidationSchema = Yup.object().shape({
  name: Yup.string().trim().required('Your name is required').min(2, 'Name is too short'),
  email: Yup.string().trim().email('Enter a valid email address').required('Email is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .test('valid-phone', 'Enter a valid phone number', (value) => {
      if (!value) {
        return false
      }
      return isValidPhoneNumber(value)
    }),
})
