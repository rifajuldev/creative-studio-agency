'use client'

import { openCookiePreferences } from '@/lib/cookies/consent'
import { BarChart, Cookie, Settings } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useLanguage } from './context/LanguageContext'

const EXTRA_SECTIONS = [
  {
    title: '4. Types of cookies we may use',
    body: 'Essential cookies keep core site functions working (security, load balancing, form sessions). Preference cookies remember language or theme choices. Analytics cookies help us understand which pages perform well in Google Search Console and Google Analytics. Marketing cookies may be set by Google Ads, Meta (Facebook/Instagram), LinkedIn, TikTok, or Twitter/X when you arrive from paid or social campaigns so we can measure conversions and improve creative.',
  },
  {
    title: '5. Third-party cookies and pixels',
    body: 'When you interact with NextCreavo ads or share buttons, third parties may process device identifiers and event data under their own policies. We use these technologies to attribute leads from Google, Facebook, Instagram, LinkedIn, TikTok, and other channels. We do not control every cookie set by embedded third-party scripts, so review those providers’ privacy notices for full details.',
  },
  {
    title: '6. How to manage or disable cookies',
    body: 'Use the cookie banner on this site to Accept All or Reject analytics and marketing cookies. You can reopen preferences anytime with “Manage cookie preferences” on this page. Most browsers also let you block or delete cookies in settings. Disabling analytics or marketing cookies will not stop the website from loading, but it may limit our ability to measure performance and improve campaigns. Essential cookies are required for secure form submission and basic browsing.',
  },
  {
    title: '7. Updates and contact',
    body: 'We may update this Cookie Policy as our analytics stack, ad platforms, or legal requirements change. The “last updated” date at the top reflects the latest revision. Questions about cookies on nextcreavo.com can be sent to info@nextcreavo.com. For personal data rights, see our Privacy Policy.',
  },
]

export default function CookiesPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-primary min-h-screen px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
          <header className="space-y-4">
            <div className="border-border-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest text-[#bca374] uppercase">
              {t('cookies_page.legal_directive')}
            </div>
            <h1 className="font-display text-primary text-5xl font-light tracking-tight md:text-7xl">
              {t('cookies_page.title')}{' '}
              <span className="text-secondary font-serif italic">{t('cookies_page.title_italic')}</span>
            </h1>
            <p className="text-secondary text-lg font-light">{t('cookies_page.last_updated')}</p>
            <p className="text-secondary max-w-3xl text-base leading-relaxed font-light md:text-lg">
              This Cookie Policy describes how NextCreavo uses cookies and similar technologies on nextcreavo.com to
              operate the site, understand traffic, and measure marketing from Google Ads, Facebook, Instagram,
              LinkedIn, TikTok, and Twitter/X. It should be read together with our{' '}
              <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="mt-2 rounded-xl border border-[#bca374]/30 bg-[#bca374]/10 px-5 py-3 text-[10px] font-bold tracking-widest text-[#bca374] uppercase transition-colors hover:bg-[#bca374]/20"
            >
              {t('cookies.manage')}
            </button>
          </header>

          <div className="border-border-primary grid grid-cols-1 gap-8 border-y py-10 md:grid-cols-3">
            {[
              { icon: Cookie, title: t('cookies_page.stat1.title'), desc: t('cookies_page.stat1.desc') },
              { icon: BarChart, title: t('cookies_page.stat2.title'), desc: t('cookies_page.stat2.desc') },
              { icon: Settings, title: t('cookies_page.stat3.title'), desc: t('cookies_page.stat3.desc') },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <item.icon className="text-[#bca374]" size={20} />
                <h3 className="font-display text-primary text-xs font-medium tracking-widest uppercase">
                  {item.title}
                </h3>
                <p className="text-secondary text-xs leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-invert text-secondary max-w-none space-y-8 leading-relaxed font-light">
            <section className="space-y-4">
              <h2 className="text-primary font-display text-2xl tracking-tight">{t('cookies_page.section1.title')}</h2>
              <p>{t('cookies_page.section1.desc')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-primary font-display text-2xl tracking-tight">{t('cookies_page.section2.title')}</h2>
              <p>{t('cookies_page.section2.desc')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-primary font-display text-2xl tracking-tight">{t('cookies_page.section3.title')}</h2>
              <p>{t('cookies_page.section3.desc')}</p>
            </section>

            {EXTRA_SECTIONS.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-primary font-display text-2xl tracking-tight">{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
