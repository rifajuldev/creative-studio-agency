'use client'

import { FALLBACK_VISITOR_COUNTRY, isSupportedCountryCode, resolveVisitorCountryClient } from '@/lib/geo/visitorCountry'
import { baseUrl } from '@/redux/api/api'
import type { CountryCode } from 'libphonenumber-js'
import { useEffect, useState } from 'react'

type UseVisitorCountryCodeOptions = {
  timeZone?: string | null
}

type VisitorCountryState = {
  countryCode: CountryCode
  isResolving: boolean
}

export const useVisitorCountryCode = ({ timeZone }: UseVisitorCountryCodeOptions = {}): VisitorCountryState => {
  const [countryCode, setCountryCode] = useState<CountryCode>(() => resolveVisitorCountryClient(timeZone ?? undefined))
  const [isResolving, setIsResolving] = useState(true)

  useEffect(() => {
    let cancelled = false

    const resolve = async () => {
      const tz = timeZone?.trim()
      const sp = new URLSearchParams()
      if (tz) {
        sp.set('timeZone', tz)
      }

      try {
        const res = await fetch(`${baseUrl}/booking/visitor-country?${sp.toString()}`, {
          method: 'GET',
          headers: { Accept: 'application/json' },
          cache: 'no-store',
        })

        if (res.ok) {
          const json = (await res.json()) as {
            success?: boolean
            data?: { countryCode?: string }
          }

          const code = json.data?.countryCode?.trim().toUpperCase()
          if (code && isSupportedCountryCode(code) && !cancelled) {
            setCountryCode(code)
            return
          }
        }
      } catch {
        /* use client fallback */
      }

      if (!cancelled) {
        setCountryCode(resolveVisitorCountryClient(tz))
      }
    }

    queueMicrotask(() => {
      if (!cancelled) {
        setIsResolving(true)
      }
    })

    void resolve().finally(() => {
      if (!cancelled) {
        setIsResolving(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [timeZone])

  return { countryCode: countryCode ?? FALLBACK_VISITOR_COUNTRY, isResolving }
}
