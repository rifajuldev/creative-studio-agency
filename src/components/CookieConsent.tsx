'use client'

import {
  COOKIE_PREFERENCES_EVENT,
  getStoredConsent,
  saveConsent,
  scheduleConsentSync,
  type ConsentChoice,
} from '@/lib/cookies/consent'
import { Cookie } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { useLanguage } from '../context/LanguageContext'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const stored = getStoredConsent()
    if (stored) {
      scheduleConsentSync()
      return
    }

    const timer = window.setTimeout(() => setIsVisible(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onOpenPreferences = () => setIsVisible(true)
    window.addEventListener(COOKIE_PREFERENCES_EVENT, onOpenPreferences)
    return () => window.removeEventListener(COOKIE_PREFERENCES_EVENT, onOpenPreferences)
  }, [])

  const handleChoice = (choice: ConsentChoice) => {
    saveConsent(choice)
    scheduleConsentSync()
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-6 bottom-6 left-6 z-[200] md:left-auto md:max-w-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0e14] p-6 shadow-2xl backdrop-blur-xl">
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-[#bca374]/5 blur-2xl" />

            <div className="relative z-10 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#bca374]/20 bg-[#bca374]/10">
                <Cookie size={20} className="text-[#bca374]" />
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <h4 id="cookie-consent-title" className="font-display text-sm font-medium tracking-tight text-white">
                    {t('cookies.title')}
                  </h4>
                  <p id="cookie-consent-desc" className="mt-1 text-xs leading-relaxed font-light text-gray-400">
                    {t('cookies.desc')}
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => handleChoice('accepted')}
                    className="flex-1 rounded-xl bg-white py-2.5 text-[10px] font-bold tracking-widest text-black uppercase transition-all duration-300 hover:bg-[#bca374]"
                  >
                    {t('cookies.accept')}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleChoice('rejected')}
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-[10px] font-bold tracking-widest text-white uppercase transition-all hover:bg-white/10"
                  >
                    {t('cookies.reject')}
                  </button>
                </div>

                <Link
                  href="/cookies"
                  className="inline-block text-[10px] font-bold tracking-widest text-gray-500 uppercase transition-colors hover:text-[#bca374]"
                >
                  {t('cookies.details')}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
