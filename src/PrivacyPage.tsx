'use client'

import { Eye, Lock, Shield } from 'lucide-react'
import { motion } from 'motion/react'
import { useLanguage } from './context/LanguageContext'

const EXTRA_SECTIONS = [
  {
    title: '4. Cookies, analytics, and advertising technologies',
    body: 'NextCreavo may use cookies and similar technologies to understand site performance, improve usability, and measure marketing effectiveness. Analytics tools such as Google Analytics help us review aggregated traffic patterns. Advertising platforms (including Google Ads, Meta/Facebook/Instagram, LinkedIn, TikTok, and Twitter/X) may set cookies when you interact with our campaigns. You can control cookies through your browser settings and our Cookie Policy.',
  },
  {
    title: '5. How we share information',
    body: 'We do not sell personal information. We may share limited data with trusted processors who help us operate the business — hosting providers, email delivery, CRM tools, payment processors, and advertising platforms — only as needed to fulfill your request or run campaigns you authorize. Each processor is expected to protect data under contractual and technical safeguards.',
  },
  {
    title: '6. Data retention and your choices',
    body: 'We retain inquiry and project records only as long as needed for client delivery, legal compliance, accounting, and legitimate business interests. You may request access, correction, or deletion of personal data by emailing info@nextcreavo.com. We will respond within a reasonable timeframe and explain if certain records must be retained for legal reasons.',
  },
  {
    title: '7. International visitors and children’s privacy',
    body: 'NextCreavo serves clients worldwide. If you contact us from outside the United States, your information may be processed in the U.S. or other countries where our providers operate. Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children.',
  },
  {
    title: '8. Contact for privacy questions',
    body: 'For privacy questions, data requests, or concerns about how NextCreavo handles personal information, contact info@nextcreavo.com. Include enough detail for us to locate your records (such as the email used in a project brief). We continuously review this policy as our products, analytics, and advertising stack evolve.',
  },
]

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-primary min-h-screen px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
          <header className="space-y-4">
            <div className="border-border-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest text-[#bca374] uppercase">
              {t('privacy.legal_directive')}
            </div>
            <h1 className="font-display text-primary text-5xl font-light tracking-tight md:text-7xl">
              {t('privacy.title')} <span className="text-secondary font-serif italic">{t('privacy.title_italic')}</span>
            </h1>
            <p className="text-secondary text-lg font-light">{t('privacy.last_updated')}</p>
            <p className="text-secondary max-w-3xl text-base leading-relaxed font-light md:text-lg">
              This Privacy Policy explains how NextCreavo Creative Studio Agency collects, uses, stores, and protects
              personal information when you browse nextcreavo.com, submit a project brief, book a meeting, or engage our
              web, marketing, design, animation, app, or AI services.
            </p>
          </header>

          <div className="border-border-primary grid grid-cols-1 gap-8 border-y py-10 md:grid-cols-3">
            {[
              { icon: Shield, title: t('privacy.stat1.title'), desc: t('privacy.stat1.desc') },
              { icon: Lock, title: t('privacy.stat2.title'), desc: t('privacy.stat2.desc') },
              { icon: Eye, title: t('privacy.stat3.title'), desc: t('privacy.stat3.desc') },
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
              <h2 className="text-primary font-display text-2xl tracking-tight">{t('privacy.section1.title')}</h2>
              <p>{t('privacy.section1.desc')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-primary font-display text-2xl tracking-tight">{t('privacy.section2.title')}</h2>
              <p>{t('privacy.section2.desc')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-primary font-display text-2xl tracking-tight">{t('privacy.section3.title')}</h2>
              <p>{t('privacy.section3.desc')}</p>
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
