'use client'

import { AlertCircle, FileText, Scale } from 'lucide-react'
import { motion } from 'motion/react'
import { useLanguage } from './context/LanguageContext'

const EXTRA_SECTIONS = [
  {
    title: '4. Intellectual property and portfolio rights',
    body: 'Unless otherwise agreed in writing, NextCreavo retains ownership of pre-existing tools, frameworks, design systems, and know-how. Upon full payment, clients receive the agreed license or assignment for final deliverables defined in the statement of work. We may display completed work in our portfolio, case studies, and social channels unless a mutual NDA or contract forbids public disclosure.',
  },
  {
    title: '5. Marketing, ads, and platform accounts',
    body: 'For Google Ads, Meta (Facebook/Instagram), LinkedIn, TikTok, Twitter/X, SEO, and social media retainers, clients remain the owners of their ad accounts, Business Manager assets, and domain properties. NextCreavo requires appropriate access to execute campaigns. Media spend is typically paid directly to the platforms and is separate from agency fees unless the contract states otherwise.',
  },
  {
    title: '6. Revisions, timelines, and client responsibilities',
    body: 'Project timelines depend on timely feedback, content, brand assets, and approvals. Round of revisions are defined per proposal. Delays caused by missing inputs, third-party platforms, or scope changes may adjust delivery dates and fees. Clients are responsible for the legality of products, claims, and advertising copy they approve for publication.',
  },
  {
    title: '7. Limitation of liability and warranties',
    body: 'Digital marketing results, search rankings, and advertising ROAS vary by market competition, budget, creative quality, and seasonality. NextCreavo provides professional services on a commercially reasonable basis but does not guarantee specific rankings, lead volumes, or revenue outcomes. Liability under any engagement is limited to fees paid for the specific service giving rise to the claim, except where prohibited by law.',
  },
  {
    title: '8. Termination and governing terms',
    body: 'Either party may terminate according to the written agreement (often with notice for retainers). Upon termination, fees for work completed remain due, and access credentials should be rotated. These Terms, together with any signed proposal, form the agreement between you and NextCreavo. Questions: info@nextcreavo.com.',
  },
]

export default function TermsPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-primary min-h-screen px-6 pt-32 pb-20">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
          <header className="space-y-4">
            <div className="border-border-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest text-[#bca374] uppercase">
              {t('terms.legal_directive')}
            </div>
            <h1 className="font-display text-primary text-5xl font-light tracking-tight md:text-7xl">
              {t('terms.title')} <span className="text-secondary font-serif italic">{t('terms.title_italic')}</span>
            </h1>
            <p className="text-secondary text-lg font-light">{t('terms.last_updated')}</p>
            <p className="text-secondary max-w-3xl text-base leading-relaxed font-light md:text-lg">
              These Terms of Service govern your use of the NextCreavo website and creative studio services — including
              web development, digital marketing, paid ads, SEO, social media, UI/UX design, animation, mobile apps, and
              AI integrations. By submitting a brief or signing a proposal, you agree to these terms.
            </p>
          </header>

          <div className="border-border-primary grid grid-cols-1 gap-8 border-y py-10 md:grid-cols-3">
            {[
              { icon: Scale, title: t('terms.stat1.title'), desc: t('terms.stat1.desc') },
              { icon: FileText, title: t('terms.stat2.title'), desc: t('terms.stat2.desc') },
              { icon: AlertCircle, title: t('terms.stat3.title'), desc: t('terms.stat3.desc') },
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
              <h2 className="text-primary font-display text-2xl tracking-tight">{t('terms.section1.title')}</h2>
              <p>{t('terms.section1.desc')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-primary font-display text-2xl tracking-tight">{t('terms.section2.title')}</h2>
              <p>{t('terms.section2.desc')}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-primary font-display text-2xl tracking-tight">{t('terms.section3.title')}</h2>
              <p>{t('terms.section3.desc')}</p>
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
