'use client'

import FormErrorMessage from '@/components/FormErrorMessage'
import { useVisitorCountryCode } from '@/hooks/useVisitorCountryCode'
import { cn } from '@/utils/cn'
import { useField } from 'formik'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

type SchedulerPhoneFieldProps = {
  id?: string
  timeZone?: string | null
  className?: string
}

const SchedulerPhoneField = ({ id = 'scheduler-phone', timeZone, className }: SchedulerPhoneFieldProps) => {
  const [field, meta, helpers] = useField<string>('phone')
  const { countryCode, isResolving } = useVisitorCountryCode({ timeZone })
  const showError = Boolean(meta.error) && (Boolean(meta.touched) || Boolean(meta.value))

  return (
    <div className={cn(className, isResolving && 'opacity-90')}>
      <PhoneInput
        key={countryCode}
        id={id}
        international
        defaultCountry={countryCode}
        countryCallingCodeEditable={false}
        value={field.value || undefined}
        onChange={(value) => {
          void helpers.setValue(value ?? '', true)
          void helpers.setTouched(true, false)
        }}
        onBlur={() => helpers.setTouched(true)}
        placeholder="Phone number"
        className={cn('scheduler-phone-input h-10', showError && 'scheduler-phone-input--error')}
        numberInputProps={{
          name: field.name,
          autoComplete: 'tel',
          'aria-invalid': showError,
          'aria-busy': isResolving,
        }}
      />
      <div className="mt-1 min-h-4">
        {showError && meta.error ? <FormErrorMessage message={meta.error} className="mt-0" /> : null}
      </div>
    </div>
  )
}

export default SchedulerPhoneField
