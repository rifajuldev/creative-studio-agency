'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Flag, Rocket } from 'lucide-react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface Milestone {
  phase: string
  title: string
  desc: string
  icon: any
}

const Search = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const DEFAULT_MILESTONES: Milestone[] = [
  {
    phase: 'Phase 01',
    title: 'Discovery & Brief',
    desc: 'Deep dive into brand objectives and ecosystem requirements.',
    icon: Search,
  },
  {
    phase: 'Phase 02',
    title: 'Architectural Blueprint',
    desc: 'Structuring user flows and high-fidelity interface wireframes.',
    icon: Flag,
  },
  {
    phase: 'Phase 03',
    title: 'Engineering & Craft',
    desc: 'Transformation of design into high-performance digital engines.',
    icon: Rocket,
  },
  {
    phase: 'Phase 04',
    title: 'Validation & Launch',
    desc: 'Rigorous benchmarking and global edge deployment.',
    icon: CheckCircle2,
  },
]

import { useLanguage } from '../context/LanguageContext'

export default function ProjectTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const MILESTONES: Milestone[] = [
    {
      phase: t('timeline.phase1.phase'),
      title: t('timeline.phase1.title'),
      desc: t('timeline.phase1.desc'),
      icon: Search,
    },
    {
      phase: t('timeline.phase2.phase'),
      title: t('timeline.phase2.title'),
      desc: t('timeline.phase2.desc'),
      icon: Flag,
    },
    {
      phase: t('timeline.phase3.phase'),
      title: t('timeline.phase3.title'),
      desc: t('timeline.phase3.desc'),
      icon: Rocket,
    },
    {
      phase: t('timeline.phase4.phase'),
      title: t('timeline.phase4.title'),
      desc: t('timeline.phase4.desc'),
      icon: CheckCircle2,
    },
  ]

  useGSAP(
    () => {
      // Progress line animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      )

      // Fade in milestones
      const milestones = gsap.utils.toArray('.milestone-item')
      milestones.forEach((item: any, i) => {
        gsap.from(item, {
          opacity: 0,
          x: i % 2 === 0 ? -40 : 40,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    },
    { scope: containerRef }
  )

  return (
    <section className="bg-primary overflow-hidden px-6 py-32 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24 space-y-4 text-center">
          <span className="font-mono text-[10px] font-bold tracking-[0.3em] text-[#bca374] uppercase">
            {t('timeline.tagline')}
          </span>
          <h2 className="font-display text-primary text-4xl font-light tracking-tight md:text-6xl">
            {t('timeline.title')} <span className="text-secondary font-serif italic">{t('timeline.title_italic')}</span>
          </h2>
        </div>

        <div ref={containerRef} className="relative mx-auto max-w-4xl">
          {/* Central Line */}
          <div className="bg-border-primary/30 absolute top-0 bottom-0 left-1/2 hidden w-[1px] -translate-x-1/2 md:block" />
          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 left-1/2 z-10 hidden w-[1px] origin-top -translate-x-1/2 scale-y-0 bg-[#bca374] md:block"
          />

          <div className="space-y-24 md:space-y-32">
            {MILESTONES.map((item, i) => (
              <div
                key={i}
                className={`milestone-item relative flex flex-col items-center gap-8 md:flex-row md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Node */}
                <div className="bg-primary absolute left-1/2 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#bca374] shadow-[0_0_15px_rgba(188,163,116,0.5)] md:block" />

                {/* Content */}
                <div className="w-full px-0 text-center md:w-1/2 md:px-12 md:text-left">
                  <div className={`space-y-4 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className={`flex items-center justify-center gap-3 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}
                    >
                      <item.icon size={16} className="text-[#bca374]" />
                      <span className="font-mono text-[10px] font-bold tracking-widest text-[#bca374]">
                        {item.phase}
                      </span>
                    </div>
                    <h3 className="font-display text-primary text-2xl font-medium tracking-tight md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="text-secondary mx-auto max-w-sm text-sm leading-relaxed font-light md:mx-0 md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Empty spacer for alignment */}
                <div className="hidden w-1/2 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
