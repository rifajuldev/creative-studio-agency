import { getCountries, type CountryCode } from 'libphonenumber-js'

const SUPPORTED_COUNTRIES = new Set<CountryCode>(getCountries())

export const FALLBACK_VISITOR_COUNTRY: CountryCode = 'BD'

export const isSupportedCountryCode = (code: string): code is CountryCode =>
  SUPPORTED_COUNTRIES.has(code as CountryCode)

const TIMEZONE_COUNTRY: Record<string, CountryCode> = {
  'Africa/Cairo': 'EG',
  'America/Chicago': 'US',
  'America/Denver': 'US',
  'America/Los_Angeles': 'US',
  'America/New_York': 'US',
  'America/Sao_Paulo': 'BR',
  'America/Toronto': 'CA',
  'Asia/Bangkok': 'TH',
  'Asia/Dhaka': 'BD',
  'Asia/Dubai': 'AE',
  'Asia/Hong_Kong': 'HK',
  'Asia/Jakarta': 'ID',
  'Asia/Karachi': 'PK',
  'Asia/Kolkata': 'IN',
  'Asia/Kuala_Lumpur': 'MY',
  'Asia/Manila': 'PH',
  'Asia/Riyadh': 'SA',
  'Asia/Seoul': 'KR',
  'Asia/Shanghai': 'CN',
  'Asia/Singapore': 'SG',
  'Asia/Tokyo': 'JP',
  'Australia/Melbourne': 'AU',
  'Australia/Sydney': 'AU',
  'Europe/Amsterdam': 'NL',
  'Europe/Berlin': 'DE',
  'Europe/Istanbul': 'TR',
  'Europe/London': 'GB',
  'Europe/Madrid': 'ES',
  'Europe/Paris': 'FR',
  'Europe/Rome': 'IT',
  'Pacific/Auckland': 'NZ',
}

export const countryFromTimeZone = (timeZone: string | undefined): CountryCode | undefined => {
  if (!timeZone?.trim()) {
    return undefined
  }

  const code = TIMEZONE_COUNTRY[timeZone.trim()]
  return code && isSupportedCountryCode(code) ? code : undefined
}

export const countryFromNavigatorLocale = (): CountryCode | undefined => {
  if (typeof navigator === 'undefined') {
    return undefined
  }

  const candidates = [navigator.language, ...(navigator.languages ?? [])]

  for (const locale of candidates) {
    try {
      const region = new Intl.Locale(locale).region?.toUpperCase()
      if (region && isSupportedCountryCode(region)) {
        return region
      }
    } catch {
      const segments = locale.split('-')
      const region = segments.length >= 2 ? segments[segments.length - 1]?.toUpperCase() : undefined
      if (region && isSupportedCountryCode(region)) {
        return region
      }
    }
  }

  return undefined
}

export const resolveVisitorCountryClient = (timeZone?: string): CountryCode =>
  countryFromTimeZone(timeZone) ?? countryFromNavigatorLocale() ?? FALLBACK_VISITOR_COUNTRY
