'use client'

import { BarChart, Cookie, Settings } from 'lucide-react'
import { motion } from 'motion/react'
import { useLanguage } from './context/LanguageContext'

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
          </div>
        </motion.div>
      </div>
    </div>
  )
}
