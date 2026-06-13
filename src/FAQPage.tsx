'use client'

import { gsapScopeOptions } from '@/hooks/useScrollTriggerRefresh'
import { clearRevealStyles, reveal } from '@/utils/gsapReveal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, HelpCircle, MessageSquare, Minus, Plus, Search, Sparkles } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useLanguage } from './context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

interface FAQItem {
  id: string
  category: 'general' | 'services' | 'technology' | 'billing'
  tags: string[]
}

const FAQ_DATA: FAQItem[] = [
  // General
  { id: 'timeline', category: 'general', tags: ['timeline', 'delivery', 'milestones'] },
  { id: 'kickoff', category: 'general', tags: ['workflow', 'kickoff', 'brief'] },
  { id: 'comms', category: 'general', tags: ['reporting', 'slack', 'updates'] },
  // Services
  { id: 'figma', category: 'services', tags: ['figma', 'assets', 'design'] },
  { id: 'shopify', category: 'services', tags: ['shopify', 'e-commerce', 'speed'] },
  { id: 'gmb', category: 'services', tags: ['seo', 'gmb', 'local'] },
  // Technology
  { id: 'headless', category: 'technology', tags: ['headless', 'react', 'security'] },
  { id: 'security', category: 'technology', tags: ['security', 'tokens', 'backend'] },
  { id: 'motion', category: 'technology', tags: ['animation', 'gsap', 'performance'] },
  // Billing
  { id: 'billing_structure', category: 'billing', tags: ['payments', 'contracts', 'cost'] },
  { id: 'maintenance', category: 'billing', tags: ['support', 'retainer', 'maintenance'] },
]

export default function FAQPage() {
  const { t, language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'services' | 'technology' | 'billing'>('all')
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const container = useRef<HTMLDivElement>(null)

  // Filter conditions
  const filteredFAQs = FAQ_DATA.filter((faq) => {
    const question = t(`faq.items.${faq.id}.q`)
    const answer = t(`faq.items.${faq.id}.a`)
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch =
      question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  useGSAP(
    () => {
      reveal('.faq-hero-reveal', {
        from: { y: 60 },
        duration: 1.4,
        stagger: 0.12,
        scrollTrigger: false,
      })

      reveal('.faq-item-anim', {
        from: { y: 30 },
        duration: 1.1,
        stagger: 0.08,
        scrollTrigger: { trigger: '.faq-list-container', start: 'top 85%' },
      })

      return () => clearRevealStyles('.faq-hero-reveal, .faq-item-anim')
    },
    { scope: container, ...gsapScopeOptions }
  )

  return (
    <div ref={container} className="bg-primary text-primary min-h-screen w-full pb-32 transition-colors duration-700">
      {/* 1. HERO MAIN HEADER */}
      <section className="bg-primary relative px-6 pt-32 pb-12 sm:pt-40 sm:pb-16 md:px-12 md:pt-52">
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="grid grid-cols-1 items-end gap-8 md:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="faq-hero-reveal text-secondary border-border-primary/80 mb-6 inline-flex items-center gap-2 rounded-full border px-4.5 py-2 text-xs font-semibold tracking-[0.25em] uppercase sm:mb-8 md:text-sm">
                <Sparkles size={12} className="text-secondary" />
                {t('faq.tagline')}
              </span>
              <h1 className="font-display lg:text-8.5xl text-primary text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl md:text-7xl md:leading-[1]">
                {t('faq.main_title')}
                <br />
                <span className="text-secondary font-serif font-light italic">{t('faq.title_italic_resolved')}</span>
              </h1>
            </div>
            <div className="pb-2 lg:col-span-4 lg:pl-6">
              <p className="faq-hero-reveal text-secondary text-base leading-relaxed font-light md:text-lg">
                {t('faq.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE QUERY SEARCH & FILTER ROW */}
      <section className="bg-primary border-border-primary/55 bg-primary/95 sticky top-[70px] z-30 border-t border-b px-6 py-6 backdrop-blur-md sm:py-8 md:top-[80px] md:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
          {/* Real-time search engine input field */}
          <div className="group relative w-full md:max-w-md">
            <Search className="text-secondary/50 group-focus-within:text-secondary absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 transition-colors" />
            <input
              type="text"
              placeholder={t('faq.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-secondary/35 border-border-primary text-primary placeholder-secondary/50 focus:border-secondary focus:ring-secondary/20 w-full rounded-full border py-3.5 pr-6 pl-12 font-sans text-xs transition-all focus:ring-1 focus:outline-hidden"
            />
          </div>

          {/* Dynamic Categories tabs */}
          <div className="scrollbar-hide -mx-6 flex w-full flex-nowrap items-center gap-2.5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 md:w-auto">
            {['all', 'general', 'services', 'technology', 'billing'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat as any)
                  setOpenIdx(null)
                }}
                className={`rounded-full px-5 py-2.5 text-[10px] font-bold tracking-wider whitespace-nowrap uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-invert text-invert shadow-xs'
                    : 'bg-secondary/40 border-border-primary text-secondary hover:text-primary hover:bg-secondary border'
                }`}
              >
                {cat === 'all' ? (language === 'EN' ? 'All' : 'Tous') : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACCORDION LIST CONTENT */}
      <section className="bg-primary px-6 py-16 md:px-12">
        <div className="faq-list-container mx-auto max-w-[1400px]">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, idx) => {
                const isOpen = openIdx === idx
                const question = t(`faq.items.${faq.id}.q`)
                const answer = t(`faq.items.${faq.id}.a`)
                return (
                  <div key={faq.id} className="faq-item-anim border-border-primary/40 border-b last:border-0">
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="group flex w-full items-center justify-between py-7 text-left md:py-9"
                    >
                      <h3
                        className={`font-display text-lg transition-colors duration-500 md:text-xl ${isOpen ? 'text-secondary font-medium' : 'text-primary font-light'}`}
                      >
                        {question}
                      </h3>
                      <div
                        className={`border-border-primary ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? 'bg-secondary rotate-180 border-transparent' : 'bg-primary group-hover:border-secondary'}`}
                      >
                        {isOpen ? (
                          <Minus size={14} className="text-secondary" />
                        ) : (
                          <Plus size={14} className="text-secondary" />
                        )}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pr-12 pb-8 md:pb-12">
                            <p className="text-secondary max-w-4xl text-base leading-relaxed font-light">{answer}</p>
                            <div className="mt-6 flex flex-wrap gap-2">
                              {faq.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="bg-secondary/10 border-border-primary/50 text-secondary/70 rounded border px-2 py-0.5 font-mono text-[8px] tracking-widest uppercase"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          ) : (
            /* Silent query empty state */
            <div className="border-border-primary bg-secondary/10 rounded-[2.5rem] border border-dashed py-24 text-center">
              <HelpCircle className="text-secondary/40 mx-auto mb-4 h-12 w-12" />
              <h4 className="font-display text-primary text-xl font-light">{t('faq.no_results')}</h4>
              <p className="text-secondary mx-auto mt-2 max-w-md text-xs font-light">
                {t('faq.no_results_desc').replace('{query}', searchQuery)}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="bg-primary border-border-primary text-secondary hover:bg-secondary mt-6 rounded-full border px-6 py-2.5 text-[9px] font-bold tracking-widest uppercase transition-colors"
              >
                {t('faq.clear_filters')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. SUBMIT DEEP TICKET BANNER */}
      <section className="bg-primary px-6 py-16 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="border-border-primary bg-secondary/15 relative grid grid-cols-1 items-center gap-12 overflow-hidden rounded-[2.5rem] border p-8 md:p-16 lg:grid-cols-12">
            <div className="bg-invert/5 absolute top-0 right-0 h-80 w-80 translate-x-12 -translate-y-12 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-4 lg:col-span-7">
              <span className="bg-primary text-secondary border-border-primary/35 inline-flex items-center gap-1.5 rounded-md border px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                <MessageSquare size={11} className="text-secondary" />
                {t('faq.unresolved.tag')}
              </span>
              <h2 className="font-display text-primary text-3xl leading-tight font-light md:text-5xl">
                {t('faq.unresolved.title').split(' ').slice(0, -3).join(' ')}{' '}
                <span className="text-secondary font-serif italic">
                  {t('faq.unresolved.title').split(' ').slice(-3).join(' ')}
                </span>
              </h2>
              <p className="text-secondary max-w-xl text-sm font-light">{t('faq.unresolved.desc')}</p>
            </div>

            <div className="lg:col-span-1" />

            <div className="relative z-10 space-y-4 lg:col-span-4">
              <Link
                href="/contact"
                className="bg-primary border-border-primary/60 hover:bg-secondary/40 group inline-flex w-full items-center justify-between rounded-2xl border p-6 transition-all"
              >
                <div>
                  <span className="text-secondary/50 mb-0.5 block font-mono text-[8px]">LAUNCH BRIEF</span>
                  <span className="text-primary text-sm font-semibold">{t('faq.unresolved.cta_brief')}</span>
                </div>
                <ArrowRight size={14} className="text-secondary transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="mailto:support@nextcreavo.com"
                className="bg-primary border-border-primary/60 hover:bg-secondary/40 group inline-flex w-full items-center justify-between rounded-2xl border p-6 transition-all"
              >
                <div>
                  <span className="text-secondary/50 mb-0.5 block font-mono text-[8px]">
                    {t('faq.unresolved.cta_email')}
                  </span>
                  <span className="text-primary font-mono text-sm font-semibold lowercase">support@nextcreavo.com</span>
                </div>
                <ArrowRight size={14} className="text-secondary transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
