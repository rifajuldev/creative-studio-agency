export const COOKIE_CONSENT_KEY = 'nextcreavo-cookie-consent-v2'
export const COOKIE_CONSENT_LEGACY_KEY = 'nextcreavo-cookie-consent'
export const COOKIE_PREFERENCES_EVENT = 'nextcreavo:open-cookie-preferences'

export type ConsentChoice = 'accepted' | 'rejected'

export type StoredConsent = {
  choice: ConsentChoice
  analytics: boolean
  marketing: boolean
  updatedAt: string
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function getStoredConsent(): StoredConsent | null {
  if (typeof window === 'undefined') return null

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as StoredConsent
      if (parsed?.choice === 'accepted' || parsed?.choice === 'rejected') {
        return parsed
      }
    }

    // Migrate legacy accept-only flag
    const legacy = localStorage.getItem(COOKIE_CONSENT_LEGACY_KEY)
    if (legacy === 'true') {
      const migrated = buildConsent('accepted')
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(migrated))
      return migrated
    }
  } catch {
    return null
  }

  return null
}

export function buildConsent(choice: ConsentChoice): StoredConsent {
  const granted = choice === 'accepted'
  return {
    choice,
    analytics: granted,
    marketing: granted,
    updatedAt: new Date().toISOString(),
  }
}

export function saveConsent(choice: ConsentChoice): StoredConsent {
  const consent = buildConsent(choice)
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent))
  localStorage.removeItem(COOKIE_CONSENT_LEGACY_KEY)
  applyConsentToGtag(consent)
  return consent
}

export function applyConsentToGtag(consent: StoredConsent) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return false

  const value = consent.analytics ? 'granted' : 'denied'
  const marketing = consent.marketing ? 'granted' : 'denied'

  window.gtag('consent', 'update', {
    analytics_storage: value,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    personalization_storage: marketing,
    functionality_storage: 'granted',
    security_storage: 'granted',
  })
  return true
}

/** Re-apply stored consent after gtag loads (or on hydrate). */
export function syncStoredConsentToGtag() {
  const stored = getStoredConsent()
  if (!stored) return false
  return applyConsentToGtag(stored)
}

/** Retry until gtag is ready (Accept/Reject can happen before the script loads). */
export function scheduleConsentSync(attempts = 8, intervalMs = 400) {
  if (typeof window === 'undefined') return

  let tries = 0
  const tick = () => {
    if (syncStoredConsentToGtag() || tries >= attempts) return
    tries += 1
    window.setTimeout(tick, intervalMs)
  }
  tick()
}

export function openCookiePreferences() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent(COOKIE_PREFERENCES_EVENT))
}
