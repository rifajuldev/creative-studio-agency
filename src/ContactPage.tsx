'use client'

import { gsapScopeOptions } from '@/hooks/useScrollTriggerRefresh'
import { clearRevealStyles, reveal } from '@/utils/gsapReveal'
import { useGSAP } from '@gsap/react'
import { CheckCircle, Mail, MapPin, Phone, Shield } from 'lucide-react'
import { useRef } from 'react'
import ContactForm from './components/contact/ContactForm'
import { useLanguage } from './context/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      reveal('.contact-title-fade', {
        from: { y: 35 },
        duration: 1.2,
        stagger: 0.12,
        delay: 0.05,
        scrollTrigger: false,
      })

      reveal('.contact-form-fade', {
        from: { y: 45 },
        duration: 1.4,
        delay: 0.35,
        scrollTrigger: false,
      })

      return () => clearRevealStyles('.contact-title-fade, .contact-form-fade')
    },
    { scope: containerRef, ...gsapScopeOptions }
  )

  return (
    <div
      ref={containerRef}
      className="bg-primary relative min-h-screen overflow-hidden px-6 pt-36 pb-32 transition-colors duration-700 md:px-12"
    >
      {/* Decorative ambient blurred vector elements in gold and bronze colorways */}
      <div className="pointer-events-none absolute top-[10%] left-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#bca374]/3 blur-[130px] dark:bg-[#bca374]/5" />
      <div className="pointer-events-none absolute right-0 bottom-[10%] h-[500px] w-[500px] translate-x-1/3 rounded-full bg-[#bca374]/2 blur-[150px] dark:bg-[#bca374]/4" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Modern Intro Greeting Header */}
        <div className="mb-16 max-w-3xl lg:mb-20">
          <div className="contact-title-fade border-border-primary text-secondary bg-secondary/5 mb-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#bca374] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#bca374]"></span>
            </span>
            {t('contact.tagline')}
          </div>
          <h1 className="contact-title-fade font-display text-primary mb-6 text-[10vw] leading-[1.05] font-light tracking-tight sm:text-[7vw] lg:text-[4.2rem]">
            {t('contact.title1')} <br />
            <span className="font-serif font-light text-[#bca374] italic">{t('contact.title_italic')}</span>
          </h1>
          <p className="contact-title-fade text-secondary max-w-xl text-base leading-relaxed font-light opacity-90 md:text-lg">
            {t('contact.desc')}
          </p>
        </div>

        {/* Column layout: Content form & Details */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form container card (8 columns width) */}
          <div className="contact-form-fade lg:col-span-8">
            <ContactForm />
          </div>

          {/* Contact Details sidebar (4 columns width) */}
          <div className="contact-form-fade space-y-10 lg:col-span-4 lg:pl-4">
            <div className="space-y-6">
              <h3 className="font-display text-primary text-2xl font-medium">{t('contact.info.title')}</h3>
              <p className="text-secondary text-sm leading-relaxed font-light">{t('contact.info.desc')}</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-secondary/10 border-border-primary text-secondary rounded-xl border p-3">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-secondary/50 mb-1 block text-[9px] font-bold tracking-widest uppercase">
                    Direct Email
                  </span>
                  <a
                    href="mailto:brief@nextcreavo.com"
                    className="text-primary hover:text-secondary font-medium transition-colors"
                  >
                    brief@nextcreavo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-secondary/10 border-border-primary text-secondary rounded-xl border p-3">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-secondary/50 mb-1 block text-[9px] font-bold tracking-widest uppercase">
                    HQ Inquiries
                  </span>
                  <a
                    href="tel:+14041112222"
                    className="text-primary hover:text-secondary font-medium transition-colors"
                  >
                    +1 (404) 111-2222
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-secondary/10 border-border-primary text-secondary rounded-xl border p-3">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-secondary/50 mb-1 block text-[9px] font-bold tracking-widest uppercase">
                    Physical Satellite
                  </span>
                  <p className="text-primary font-medium">
                    88 Creative Way, Design District <br /> Atlanta, GA 30318
                  </p>
                </div>
              </div>
            </div>

            {/* Verification highlights card */}
            <div className="bg-secondary/5 border-border-primary/40 space-y-6 rounded-3xl border p-8">
              <div className="flex items-center gap-3">
                <Shield className="text-secondary" size={16} />
                <span className="text-primary text-[10px] font-bold tracking-widest uppercase">
                  Data Security Protocol
                </span>
              </div>
              <p className="text-secondary/70 text-[11px] leading-relaxed">
                Your briefing parameters are processed through TLS 1.3 encrypted tunnels and stored in secluded,
                firewalled database systems.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <CheckCircle className="text-emerald-500" size={14} />
                <span className="text-[9px] font-bold tracking-wider text-emerald-500/80 uppercase">
                  Verified Studio Encryption
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
