'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Compass, Cpu, ShieldCheck, Sparkles, Target } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useRef, useState } from 'react'
import { useLanguage } from './context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const container = useRef<HTMLDivElement>(null)
  const [activeValue, setActiveValue] = useState<number>(0)
  const { t, language } = useLanguage()

  useGSAP(
    () => {
      // Intro text wipe effect
      gsap.from('.about-hero-word', {
        yPercent: 100,
        opacity: 0,
        duration: 1.4,
        stagger: 0.12,
        ease: 'expo.out',
        delay: 0.1,
      })

      // Smooth fade in for decorative tags and lines
      gsap.from('.about-fade', {
        opacity: 0,
        y: 25,
        duration: 1.3,
        delay: 0.6,
        ease: 'expo.out',
      })

      gsap.fromTo(
        '.about-hero-img',
        { filter: 'blur(8px)', opacity: 0, scale: 1.04 },
        { filter: 'blur(0px)', opacity: 1, scale: 1, duration: 1.8, ease: 'power3.out', delay: 0.4 }
      )

      // Staggered reveals for bento grids and process elements
      gsap.utils.toArray<HTMLElement>('.about-section-reveal').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 45,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out',
        })
      })

      // Process step cards cascade trigger
      gsap.from('.about-process-step', {
        scrollTrigger: {
          trigger: '.about-process-container',
          start: 'top 80%',
        },
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'expo.out',
      })

      // Team members hover card transitions
      gsap.from('.about-member-card', {
        scrollTrigger: {
          trigger: '.about-team-container',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: 'expo.out',
      })

      // Parallax scrolling triggers for immersive visual graphics
      gsap.utils.toArray<HTMLElement>('.parallax-viewport-img').forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: 'none',
            scrollTrigger: {
              trigger: img.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })
    },
    { scope: container }
  )

  const valuesList = [
    {
      title: language === 'EN' ? 'Structural Integrity' : 'Intégrité Structurelle',
      icon: ShieldCheck,
      tag: '01. FOUNDATION',
      desc:
        language === 'EN'
          ? 'We prioritize pristine database design, bulletproof security layers, and scalable code architecture.'
          : 'Nous priorisons une conception de base de données irréprochable et une architecture de code évolutive.',
    },
    {
      title: language === 'EN' ? 'Human-Centric Empathy' : "Empathie Centrée sur l'Humain",
      icon: Compass,
      tag: '02. INTERACTION',
      desc:
        language === 'EN'
          ? 'We examine behavioral maps, eye movements, and viewport boundaries to make sure interfaces represent intuitive utility.'
          : 'Nous examinons les cartes comportementales pour nous assurer que les interfaces représentent une utilité intuitive.',
    },
    {
      title: language === 'EN' ? 'Bold Aesthetic Focus' : 'Focus Esthétique Audacieux',
      icon: Target,
      tag: '03. DESIGN',
      desc:
        language === 'EN'
          ? 'We pair classic Swiss grid discipline with warm modern styling accents and balanced negative structures.'
          : 'Nous associons la discipline de la grille suisse classique à des accents de style moderne et chaleureux.',
    },
    {
      title: language === 'EN' ? 'Agentic Intelligence' : 'Intelligence Agentique',
      icon: Cpu,
      tag: '04. VELOCITY',
      desc:
        language === 'EN'
          ? 'We seamlessly weave state-of-the-art Gemini API models and context pipelines directly into your business dashboards.'
          : 'Nous tissons de manière fluide des modèles d’API Gemini de pointe directement dans vos tableaux de bord.',
    },
  ]

  return (
    <main ref={container} className="bg-primary selection:bg-invert selection:text-invert w-full overflow-hidden pb-12">
      {/* 1. HIGH-ESTHETIC HEADER & STORYTELLING STAGE */}
      <section className="bg-primary relative px-6 pt-40 pb-20 md:px-12 md:pt-52 md:pb-28">
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="about-fade text-secondary border-border-primary/80 mb-8 inline-flex items-center gap-2 rounded-full border px-4.5 py-2 text-xs font-semibold tracking-[0.25em] uppercase backdrop-blur-md md:text-sm">
                <Sparkles size={12} className="text-secondary" />
                {t('about.tagline')}
              </span>
              <h1 className="font-display lg:text-8.5xl text-primary text-5xl leading-[1] font-light tracking-tight md:text-7xl">
                <div className="overflow-hidden">
                  <div className="about-hero-word inline-block">{t('about.title1')}</div>
                </div>
                <div className="overflow-hidden">
                  <div className="about-hero-word inline-block">
                    {t('about.title2')}{' '}
                    <span className="text-secondary font-serif font-light italic">{t('about.title_italic')}</span>
                  </div>
                </div>
              </h1>
            </div>

            <div className="pb-2 lg:col-span-4 lg:pl-6">
              <p className="about-fade text-secondary text-lg leading-relaxed font-light">{t('about.desc')}</p>
            </div>
          </div>

          {/* Epic Hero Parallax Cinematic Frame */}
          <div className="bg-secondary border-border-primary group relative mt-12 h-[40vh] w-full overflow-hidden rounded-[2.5rem] border sm:mt-16 sm:h-[50vh] md:mt-24 md:h-[72vh]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2200"
              alt="NextCreavo Creative Syndicate"
              className="about-hero-img relative -top-[10%] h-[120%] w-full object-cover opacity-90 brightness-95 grayscale transition-transform duration-[1.5s]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-6 sm:p-8 md:p-12">
              <div className="flex flex-col items-start justify-between gap-6 text-white select-none md:flex-row md:items-end">
                <div>
                  <span className="mb-2 block font-mono text-[9px] tracking-[0.3em] uppercase opacity-60 sm:text-[10px]">
                    WORKSPACE CORE
                  </span>
                  <p className="font-display text-lg font-light sm:text-xl md:text-2xl">{t('about.hero_stats')}</p>
                </div>
                <span className="font-mono text-[9px] tracking-widest uppercase opacity-40 sm:text-[10px]">
                  NEXTCREAVO COLLABORATIVE SPACE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE SYSTEM / INTERACTIVE CORE PRINCIPLES BENTO BOX */}
      <section className="bg-secondary/35 border-border-primary/50 border-t border-b px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="about-section-reveal mb-16 flex flex-col items-start justify-between gap-8 md:mb-20 lg:flex-row lg:items-end">
            <div>
              <span className="text-secondary/50 mb-1 block font-mono text-xs tracking-widest uppercase">
                {t('about.values_tag')}
              </span>
              <h2 className="font-display text-primary text-4xl leading-[1.1] font-light tracking-tight md:text-5xl lg:text-6xl">
                {t('about.values_title')} <br />
                <span className="text-secondary font-serif italic">{t('about.values_italic')}</span>
              </h2>
            </div>
            <p className="text-secondary max-w-sm text-sm leading-relaxed font-light lg:text-right">
              {t('about.values_desc')}
            </p>
          </div>

          {/* Interactive Bento Swapper columns */}
          <div className="about-section-reveal grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-3 lg:col-span-5">
              {valuesList.map((val, idx) => {
                const isActive = activeValue === idx
                const Icon = val.icon
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveValue(idx)}
                    className={`rounded-2.5xl group relative flex w-full items-start gap-5 overflow-hidden border p-6 text-left transition-all duration-500 md:p-8 ${
                      isActive
                        ? 'bg-primary border-transparent shadow-md'
                        : 'bg-primary/20 border-border-primary/50 hover:bg-primary/50'
                    }`}
                  >
                    <span
                      className={`shrink-0 rounded-xl border p-3 transition-colors duration-500 ${
                        isActive ? 'bg-secondary border-transparent' : 'bg-primary border-border-primary'
                      }`}
                    >
                      <Icon size={18} className="text-secondary" />
                    </span>
                    <div>
                      <span className="text-secondary/50 mb-1 block font-mono text-[9px] tracking-widest">
                        {val.tag}
                      </span>
                      <h3 className="font-display text-primary text-lg font-medium md:text-xl">{val.title}</h3>
                    </div>
                    {isActive && (
                      <div className="bg-secondary absolute top-1/2 right-6 h-6 w-1.5 -translate-y-1/2 rounded-full" />
                    )}
                  </button>
                )
              })}
            </div>

            <div className="bg-primary border-border-primary relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-8 md:p-12 lg:col-span-7">
              <div className="bg-secondary/5 absolute top-0 right-0 h-64 w-64 rounded-full blur-3xl" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="my-auto space-y-6 md:space-y-8"
                >
                  <span className="bg-secondary text-secondary border-border-primary/40 inline-flex rounded-full border px-3.5 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                    {valuesList[activeValue].tag}
                  </span>

                  <h3 className="font-display md:text-4.5xl text-primary text-3xl leading-tight font-light tracking-tight">
                    {valuesList[activeValue].title}
                  </h3>

                  <p className="text-secondary max-w-xl text-sm leading-relaxed font-light md:text-base">
                    {valuesList[activeValue].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="border-border-primary/40 text-secondary/50 mt-12 flex items-center justify-between border-t pt-6 font-mono text-[10px] tracking-widest uppercase select-none">
                <span>NextCreavo Standards Index</span>
                <span>Active 2026 Model Suite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSIT SYSTEM / STEP-BY-STEP PIPELINE CARDS */}
      <section className="bg-primary px-6 py-24 md:px-12 md:py-32">
        <div className="about-process-container mx-auto max-w-[1400px]">
          <div className="about-section-reveal mb-16 flex flex-col items-start justify-between gap-8 md:mb-24 md:flex-row md:items-end">
            <div>
              <span className="text-secondary mb-2 block text-[11px] font-semibold tracking-[0.25em] uppercase">
                {t('about.pipeline_tag')}
              </span>
              <h2 className="font-display md:text-5.5xl text-primary text-4xl font-light tracking-tight">
                {t('about.pipeline_title')}{' '}
                <span className="text-secondary font-serif italic">{t('about.pipeline_italic')}</span>
              </h2>
            </div>
            <p className="text-secondary max-w-xs text-sm leading-relaxed font-light md:text-right">
              {t('about.pipeline_desc')}
            </p>
          </div>

          {/* Process steps with ternary for speed */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                tag: 'PHASE 01',
                title: language === 'EN' ? 'Landscape Audit' : 'Audit du Paysage',
                desc:
                  language === 'EN'
                    ? 'Deep audit into consumer behavior, competitor gaps, payload constraints, and database dependencies.'
                    : 'Audit approfondie du comportement des consommateurs, des lacunes des concurrents et des dépendances.',
                deliverables:
                  language === 'EN'
                    ? ['Behavioral map audit', 'Lighthouse baseline index', 'Tech requirements blueprint']
                    : ['Audit cartographique', 'Index Lighthouse', 'Plan technique'],
              },
              {
                tag: 'PHASE 02',
                title: language === 'EN' ? 'Interaction Wireframes' : 'Maquettage d’Interaction',
                desc:
                  language === 'EN'
                    ? 'Detailed wireframing structure planning viewport parameters, navigation maps, and click hierarchies.'
                    : 'Planification détaillée de la structure des maquettes et des cartes de navigation.',
                deliverables:
                  language === 'EN'
                    ? ['Responsive Figma prototype', 'Aesthetic typographic suite', 'Micro-interaction guides']
                    : ['Prototype Figma réactif', 'Suite typographique', 'Guides d’interaction'],
              },
              {
                tag: 'PHASE 03',
                title: language === 'EN' ? 'Aesthetic Assembly' : 'Assemblage Esthétique',
                desc:
                  language === 'EN'
                    ? 'Execution of complete graphic components, custom SVGs, typography pairing, and rich image systems.'
                    : 'Exécution des composants graphiques complets, des SVGs personnalisés et de la typographie.',
                deliverables:
                  language === 'EN'
                    ? ['High-fidelity asset library', 'Color accessibility audit', 'Unified layout containers']
                    : ['Bibliothèque d’actifs', 'Audit d’accessibilité', 'Conteneurs de mise en page'],
              },
              {
                tag: 'PHASE 04',
                title: language === 'EN' ? 'Full-Stack Integration' : 'Intégration Full-Stack',
                desc:
                  language === 'EN'
                    ? 'Decoupled system architecture wrapping lightweight state loops, secure Gemini API bridges, and responsive frameworks.'
                    : 'Architecture système découplée enveloppant des boucles d’état légères et des ponts API Gemini.',
                deliverables:
                  language === 'EN'
                    ? ['Programmatic clean code', 'Edge-caching performance', 'Uptime validation metrics']
                    : ['Code propre programmatique', 'Performance Edge-caching', 'Métriques de validation'],
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="about-process-step bg-secondary/25 border-border-primary hover:border-secondary/30 group flex flex-col justify-between rounded-[2rem] border p-7 transition-all duration-500 hover:scale-[1.01]"
              >
                <div>
                  <div className="border-border-primary/40 mb-8 flex items-center justify-between border-b pb-4">
                    <span className="text-secondary bg-primary border-border-primary/50 flex h-7 w-7 items-center justify-center rounded-full border font-mono text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-secondary/60 text-[9px] font-bold tracking-widest uppercase">{step.tag}</span>
                  </div>

                  <h3 className="font-display text-primary group-hover:text-secondary mb-3 text-xl font-semibold transition-all group-hover:translate-x-1">
                    {step.title}
                  </h3>

                  <p className="text-secondary mb-8 text-xs leading-relaxed font-light">{step.desc}</p>
                </div>

                {/* Scope deliverables */}
                <div className="border-border-primary/45 mt-auto space-y-2 border-t pt-4">
                  <span className="text-secondary/50 mb-1 block font-mono text-[8px] tracking-widest uppercase">
                    Key Deliverables
                  </span>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5">
                      <span className="bg-secondary h-1 w-1 rounded-full" />
                      <span className="text-secondary/80 block truncate text-[10px] font-medium lowercase">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPLIT FRAME MISSION & VISION STORYTELLING */}
      <section className="bg-secondary/30 border-border-primary/60 border-t border-b px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-24 md:gap-32">
          <div className="about-section-reveal grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="space-y-6 lg:col-span-6">
              <span className="bg-primary text-secondary border-border-primary/30 inline-flex rounded border px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                {t('about.mission_tag')}
              </span>
              <h2 className="font-display md:text-5.5xl lg:text-6.5xl text-primary text-4xl leading-tight font-light tracking-tight">
                {t('about.mission_title').split(',')[0]},{' '}
                <span className="text-secondary font-serif italic">{t('about.mission_title').split(',')[1]}</span>,{' '}
                {t('about.mission_title').split(',')[2]}
              </h2>
              <p className="text-secondary max-w-xl pt-2 text-base leading-relaxed font-light">
                {t('about.mission_desc')}
              </p>
            </div>

            <div className="w-full lg:col-span-6">
              <div className="border-border-primary relative aspect-[4/3] overflow-hidden rounded-[2rem] border">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
                  alt="Inspiring creative leader"
                  className="parallax-viewport-img relative -top-[10%] h-[120%] w-full object-cover opacity-90 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          <div className="about-section-reveal grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:flex-row-reverse lg:gap-20">
            <div className="space-y-6 lg:order-last lg:col-span-6">
              <span className="bg-primary text-secondary border-border-primary/30 inline-flex rounded border px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                {t('about.vision_tag')}
              </span>
              <h2 className="font-display md:text-5.5xl lg:text-6.5xl text-primary text-4xl leading-tight font-light tracking-tight">
                {t('about.vision_title').split(' ')[0]}{' '}
                <span className="text-secondary font-serif italic">{t('about.vision_title').split(' ')[1]}</span>{' '}
                {t('about.vision_title').split(' ').slice(2).join(' ')}
              </h2>
              <p className="text-secondary max-w-xl pt-2 text-base leading-relaxed font-light">
                {t('about.vision_desc')}
              </p>
            </div>

            <div className="w-full lg:col-span-6">
              <div className="border-border-primary relative aspect-[4/3] overflow-hidden rounded-[2rem] border">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
                  alt="Focused engineering group"
                  className="parallax-viewport-img relative -top-[10%] h-[120%] w-full object-cover opacity-90 grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HISTORIC METRICS & TRUSTED ALLIES ROW */}
      <section className="bg-primary px-6 py-24 md:px-12 md:py-32">
        <div className="about-section-reveal mx-auto max-w-[1400px]">
          <div className="border-border-primary/45 grid grid-cols-2 gap-x-6 gap-y-12 border-b pb-20 md:grid-cols-4 md:pb-24">
            <div>
              <span className="text-secondary/50 mb-2 block font-mono text-[8px] tracking-widest uppercase sm:text-[9px]">
                OPERATIONAL CYCLE
              </span>
              <h3 className="font-display md:text-6.5xl lg:text-7.5xl text-primary mb-2 text-4xl font-light sm:mb-3 sm:text-5xl">
                12+
              </h3>
              <p className="text-secondary text-[9px] font-bold tracking-[0.2em] uppercase sm:text-[10px]">
                {language === 'EN' ? 'Years of Innovation' : 'Années d’innovation'}
              </p>
            </div>
            <div>
              <span className="text-secondary/50 mb-2 block font-mono text-[8px] tracking-widest uppercase sm:text-[9px]">
                DELIVERED INDEX
              </span>
              <h3 className="font-display md:text-6.5xl lg:text-7.5xl text-primary mb-2 text-4xl font-light sm:mb-3 sm:text-5xl">
                150+
              </h3>
              <p className="text-secondary text-[9px] font-bold tracking-[0.2em] uppercase sm:text-[10px]">
                {language === 'EN' ? 'Bespoke Products' : 'Produits sur mesure'}
              </p>
            </div>
            <div>
              <span className="text-secondary/50 mb-2 block font-mono text-[8px] tracking-widest uppercase sm:text-[9px]">
                GLOBAL ACCREDITATION
              </span>
              <h3 className="font-display md:text-6.5xl lg:text-7.5xl text-primary mb-2 text-4xl font-light sm:mb-3 sm:text-5xl">
                42
              </h3>
              <p className="text-secondary text-[9px] font-bold tracking-[0.2em] uppercase sm:text-[10px]">
                {language === 'EN' ? 'Industry Trophies' : 'Trophées de l’industrie'}
              </p>
            </div>
            <div>
              <span className="text-secondary/50 mb-2 block font-mono text-[8px] tracking-widest uppercase sm:text-[9px]">
                TALENT POOL
              </span>
              <h3 className="font-display md:text-6.5xl lg:text-7.5xl text-primary mb-2 text-4xl font-light sm:mb-3 sm:text-5xl">
                24
              </h3>
              <p className="text-secondary text-[9px] font-bold tracking-[0.2em] uppercase sm:text-[10px]">
                {language === 'EN' ? 'UX/UI & Fullstack Masters' : 'Maîtres UX/UI & Fullstack'}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-12 pt-24 lg:flex-row lg:items-center">
            <div className="lg:w-1/3">
              <span className="text-secondary mb-4 block text-[11px] font-medium tracking-[0.25em] uppercase">
                Our Partners
              </span>
              <h4 className="font-display text-primary text-3xl leading-tight font-light tracking-tight md:text-4xl">
                {language === 'EN'
                  ? 'Trusted by forward-thinking enterprises globally.'
                  : 'Fait confiance par des entreprises avant-gardistes dans le monde.'}
              </h4>
            </div>
            <div className="text-primary flex flex-wrap justify-start gap-8 opacity-75 grayscale transition-all duration-700 hover:grayscale-0 md:gap-16 lg:w-2/3 lg:justify-end">
              <span className="hover:text-secondary cursor-default font-serif text-3xl italic transition-colors select-none md:text-4xl">
                Lumina
              </span>
              <span className="hover:text-secondary cursor-default font-sans text-3xl font-extrabold tracking-tighter transition-colors select-none md:text-4xl">
                NEXUS
              </span>
              <span className="hover:text-secondary cursor-default font-serif text-3xl italic transition-colors select-none md:text-4xl">
                Aura
              </span>
              <span className="hover:text-secondary cursor-default font-sans text-2xl font-medium tracking-[0.25em] uppercase transition-colors select-none md:text-3xl">
                KINETIX
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TEAM ROSTER WITH ELEGANT CARD LAYOUTS */}
      <section className="bg-secondary/15 border-border-primary/50 relative border-t px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="about-section-reveal mb-16 flex flex-col items-start justify-between gap-8 md:mb-24 md:flex-row md:items-end">
            <div>
              <span className="text-secondary mb-4 block text-[11px] font-medium tracking-[0.25em] uppercase">
                {t('about.team_tag')}
              </span>
              <h2 className="font-display md:text-5.5xl text-primary text-4xl font-light tracking-tight">
                {t('about.team_title')}{' '}
                <span className="text-secondary font-serif italic">{t('about.team_italic')}</span>
              </h2>
            </div>
            <p className="text-secondary max-w-xs text-sm leading-relaxed font-light md:text-right">
              {t('about.team_desc')}
            </p>
          </div>

          <div className="about-team-container grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'John Smith',
                role: 'CEO & Founder',
                bio:
                  language === 'EN'
                    ? 'A technology vanguard with over 15 years of industry experience steering digital transformation blueprinting.'
                    : 'Une avant-garde technologique avec plus de 15 ans d’expérience.',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
              },
              {
                name: 'Simon Adams',
                role: 'CTO & Principal Builder',
                bio:
                  language === 'EN'
                    ? 'An automated pipeline wizard bridging responsive layouts to secure backend environments.'
                    : 'Un magicien des pipelines automatisés reliant les mises en page réactives aux environnements sécurisés.',
                img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
              },
              {
                name: 'Paul Jones',
                role: 'Creative Design Lead',
                bio:
                  language === 'EN'
                    ? 'Award-winning Swiss layout specialist obsessed with negative spaces, micro-interactions, and visual elegance.'
                    : 'Spécialiste de la mise en page suisse obsédé par les espaces négatifs et l’élégance visuelle.',
                img: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800&auto=format&fit=crop',
              },
              {
                name: 'Sara Hardin',
                role: 'Lead Project Strategist',
                bio:
                  language === 'EN'
                    ? 'The coordinator organizing development timelines, client relations, and product releases from audit to launch.'
                    : 'La coordinatrice organisant les délais de développement et les relations clients.',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
              },
            ].map((person, i) => (
              <div key={i} className="about-member-card group flex cursor-pointer flex-col">
                <div className="border-border-primary relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-[2rem] border transition-all duration-700 group-hover:border-transparent group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)]">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="h-full w-full object-cover grayscale transition-all duration-[1.2s] group-hover:scale-102 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/35 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-xs leading-relaxed font-light text-gray-300">{person.bio}</p>
                  </div>
                </div>
                <div className="pl-1">
                  <h4 className="font-display text-primary group-hover:text-secondary text-2xl font-medium tracking-tight transition-all duration-500 group-hover:translate-x-1">
                    {person.name}
                  </h4>
                  <p className="text-secondary/60 mt-1.5 text-[10px] font-medium tracking-[0.25em] uppercase">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
