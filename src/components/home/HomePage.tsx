'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  Code,
  Layout,
  Megaphone,
  Minus,
  Plus,
  Smartphone,
  Video,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowWeWork />
      <Projects />
      <Services />
      <Testimonials />
      <FAQ />
      <Blog />
    </main>
  )
}

function Hero() {
  const container = useRef(null)
  const { t } = useLanguage()

  useGSAP(
    () => {
      // Elegant intro animations
      gsap.from('.hero-word', {
        yPercent: 130,
        rotationZ: 4,
        scale: 0.95,
        opacity: 0,
        duration: 2.2,
        stagger: 0.15,
        ease: 'expo.out',
        delay: 0.1,
        transformOrigin: 'left bottom',
      })

      gsap.from('.hero-fade', {
        opacity: 0,
        y: 30,
        duration: 2,
        delay: 1,
        stagger: 0.2,
        ease: 'expo.out',
      })

      gsap.fromTo(
        '.hero-image',
        { filter: 'blur(12px)', opacity: 0 },
        { filter: 'blur(0px)', opacity: 1, duration: 2.5, ease: 'power2.inOut' }
      )
      gsap.fromTo('.hero-img', { scale: 1.15 }, { scale: 1.0, duration: 3, ease: 'power3.out' })

      // Parallax scrolling effects
      gsap.to('.hero-img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: { trigger: container.current, start: 'top top', end: 'bottom top', scrub: 1.2 },
      })
      gsap.to('.hero-content-parallax', {
        yPercent: 40,
        opacity: 0,
        ease: 'none',
        scrollTrigger: { trigger: container.current, start: 'top top', end: 'bottom top', scrub: 1.2 },
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      id="about"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 pb-24 md:px-12 lg:pt-40"
    >
      <div className="pointer-events-none absolute top-0 right-0 z-0 h-[130%] w-full overflow-hidden opacity-[0.2] mix-blend-multiply lg:block lg:w-1/2 dark:mix-blend-screen">
        <div className="hero-image h-full w-full origin-top">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Abstract"
            className="hero-img absolute inset-0 top-[-15%] h-[130%] w-full object-cover grayscale"
          />
        </div>
        <div className="to-primary absolute inset-0 bg-linear-to-l from-transparent via-transparent"></div>
        <div className="from-primary absolute inset-0 h-64 bg-linear-to-b via-transparent to-transparent"></div>
      </div>

      <div className="hero-content-parallax relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-1 flex-col justify-between">
        <div className="flex flex-1 flex-col justify-center">
          <div className="hero-fade border-border-primary bg-primary/20 text-secondary mb-12 inline-flex items-center gap-3 self-start rounded-full border px-4 py-2 text-[10px] tracking-widest uppercase backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-secondary relative inline-flex h-2 w-2 rounded-full"></span>
            </span>
            {t('hero.status')}
          </div>

          <h1 className="font-display text-[14vw] leading-[0.85] tracking-tighter sm:text-[12vw] lg:text-[9.5rem]">
            <div className="overflow-hidden">
              <span className="hero-word block font-light">{t('hero.title_p1')}</span>
            </div>
            <div className="mt-2 flex flex-wrap items-center overflow-hidden lg:mt-4">
              <span className="hero-word block">
                <span className="text-secondary mr-4 font-serif italic lg:mr-8">{t('hero.title_p2')}</span>
                <span className="font-light">{t('hero.title_p3').split(' ')[0]}</span>
              </span>
            </div>
            <div className="mt-2 overflow-hidden lg:mt-4">
              <span className="hero-word block font-light">{t('hero.title_p3').split(' ').slice(1).join(' ')}</span>
            </div>
          </h1>
        </div>

        <div className="border-border-primary mt-16 flex w-full flex-col items-start justify-between gap-12 border-t pt-10 md:flex-row md:items-end lg:mt-32">
          <div className="hero-fade max-w-md">
            <p className="text-secondary mb-8 text-base leading-relaxed font-light lg:text-lg">{t('hero.desc')}</p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/portfolio"
                className="group bg-invert text-invert relative overflow-hidden rounded-full px-8 py-4 text-center text-[10px] font-medium tracking-[0.2em] uppercase"
              >
                <span className="group-hover:text-primary relative z-10 transition-colors duration-500">
                  {t('hero.cta_work')}
                </span>
                <div className="bg-primary absolute inset-0 z-0 translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0"></div>
              </Link>
              <a
                href="#services"
                className="text-primary group flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-60"
              >
                <span className="before:bg-primary relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-0 before:transition-all before:duration-500 before:content-[''] hover:before:w-full">
                  {t('hero.cta_services')}
                </span>
                <div className="border-border-primary group-hover:bg-secondary group-hover:text-primary group-hover:border-secondary flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500">
                  <ArrowRight size={14} className="-rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                </div>
              </a>
            </div>
          </div>

          <div className="hero-fade text-primary flex gap-12 lg:gap-20">
            <div className="flex flex-col">
              <span className="font-display mb-2 text-4xl font-light lg:text-5xl">40+</span>
              <span className="text-secondary text-[10px] leading-tight tracking-[0.2em] uppercase">
                {t('hero.stat_startups')
                  .split(' ')
                  .map((w, i) => (
                    <React.Fragment key={i}>
                      {w}
                      <br />
                    </React.Fragment>
                  ))}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display mb-2 text-4xl font-light lg:text-5xl">12</span>
              <span className="text-secondary text-[10px] leading-tight tracking-[0.2em] uppercase">
                {t('hero.stat_awards')
                  .split(' ')
                  .map((w, i) => (
                    <React.Fragment key={i}>
                      {w}
                      <br />
                    </React.Fragment>
                  ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowWeWork() {
  const { t } = useLanguage()
  const steps = [
    { num: '01', title: t('work.step1.title'), desc: t('work.step1.desc') },
    { num: '02', title: t('work.step2.title'), desc: t('work.step2.desc') },
    { num: '03', title: t('work.step3.title'), desc: t('work.step3.desc') },
    { num: '04', title: t('work.step4.title'), desc: t('work.step4.desc') },
  ]

  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from('.animate-work-step', {
        scrollTrigger: { trigger: container.current, start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out',
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="bg-secondary px-6 py-32 transition-colors duration-700 md:px-12 md:py-48"
      id="how-we-work"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
        <div className="animate-work-step lg:col-span-4">
          <h2 className="font-display text-primary mb-8 text-5xl leading-[1.05] font-light tracking-tighter md:text-7xl lg:mb-12">
            {t('work.tagline').split(' ').slice(0, -1).join(' ')} <br />
            <span className="text-secondary font-serif italic">{t('work.tagline').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-secondary mb-10 max-w-sm text-sm leading-relaxed font-light md:text-base">
            {t('work.desc')}
          </p>
          <Link
            href="/contact"
            className="text-primary hover:text-secondary group flex w-max items-center gap-3 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors"
          >
            <span className="before:bg-border-primary hover:before:bg-primary relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:transition-colors before:content-['']">
              {t('nav.contact')}
            </span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="flex flex-col lg:col-span-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="animate-work-step border-border-primary group grid grid-cols-1 items-start gap-8 border-t py-12 md:grid-cols-12 md:py-16"
            >
              <div className="md:col-span-2">
                <span className="text-secondary/40 font-display group-hover:text-primary text-5xl font-light italic transition-colors duration-500 md:text-6xl">
                  {step.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-primary text-3xl font-light md:pt-2 md:text-4xl">{step.title}</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-secondary text-base leading-relaxed font-light md:pt-3 lg:max-w-md lg:text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const { t } = useLanguage()
  const projects = [
    {
      id: 'nexus-headless-shopify',
      title: 'Aura E-Commerce',
      desc: 'Next.js headless Shopify storefront',
      category: 'Web Development',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'zenith-fitness-app',
      title: 'Kinetix App',
      desc: 'Cross-platform fitness tracking app',
      category: 'Mobile App',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'saas-social-hub',
      title: 'Vortex SaaS Brand Social Engine',
      desc: 'Digital organic marketing strategy and content curation',
      category: 'Digital Marketing',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'alchemist-book',
      title: 'Oasis Rebrand',
      desc: 'Digital identity and 3D motion assets',
      category: 'UI/UX & Animation',
      img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const container = useRef(null)

  useGSAP(
    () => {
      gsap.from('.animate-proj', {
        scrollTrigger: { trigger: container.current, start: 'top 80%' },
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.15,
        ease: 'expo.out',
      })
    },
    { scope: container }
  )

  const handleProjEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const imgWrap = e.currentTarget.querySelector('.proj-img-wrap')
    const img = e.currentTarget.querySelector('.proj-img')
    const titleText = e.currentTarget.querySelector('.proj-title-text')
    const arrow = e.currentTarget.querySelector('.proj-arrow')

    gsap.to(imgWrap, { opacity: 1, scale: 1, duration: 0.6, ease: 'expo.out' })
    gsap.to(img, { scale: 1, duration: 0.8, ease: 'expo.out' })
    gsap.to(titleText, { fontStyle: 'italic', x: 20, duration: 0.6, ease: 'expo.out' })
    if (arrow) gsap.to(arrow, { opacity: 1, x: 0, y: 0, duration: 0.6, ease: 'back.out(1.5)' })
  }

  const handleProjLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const imgWrap = e.currentTarget.querySelector('.proj-img-wrap')
    const img = e.currentTarget.querySelector('.proj-img')
    const titleText = e.currentTarget.querySelector('.proj-title-text')
    const arrow = e.currentTarget.querySelector('.proj-arrow')

    gsap.to(imgWrap, { opacity: 0, scale: 0.8, duration: 0.5, ease: 'power2.in' })
    gsap.to(img, { scale: 1.2, duration: 0.5, ease: 'power2.in' })
    gsap.to(titleText, { fontStyle: 'normal', x: 0, duration: 0.6, ease: 'expo.out' })
    if (arrow) gsap.to(arrow, { opacity: 0, x: -16, y: 16, duration: 0.5, ease: 'power2.in' })
  }

  const handleProjMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const imgWrap = e.currentTarget.querySelector('.proj-img-wrap')
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    gsap.to(imgWrap, {
      x: x - 200,
      y: y - 140,
      duration: 0.6,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  }

  return (
    <section
      ref={container}
      className="bg-primary px-6 py-[120px] transition-colors duration-700 md:px-12"
      id="portfolio"
    >
      <div className="border-border-primary mx-auto max-w-[1400px] border-t pt-16 md:pt-24">
        <div className="animate-proj mb-20 flex flex-col items-end justify-between gap-8 sm:flex-row">
          <h2 className="font-display text-primary text-5xl leading-[1.05] font-light tracking-tight md:text-7xl xl:text-8xl">
            {t('projects.title')} <br />
            <span className="text-secondary font-serif italic">{t('projects.title_italic')}</span>
          </h2>
          <Link
            href="/portfolio"
            className="hover:text-secondary text-primary group flex items-center gap-3 pb-2 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors"
          >
            {t('projects.cta')} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="border-border-primary flex flex-col border-t border-b border-transparent">
          {projects.map((proj, idx) => (
            <Link
              key={idx}
              href={`/portfolio/${proj.id}`}
              className="animate-proj group border-border-primary relative z-10 flex cursor-pointer flex-col items-start justify-between border-b px-4 py-10 hover:z-20 md:flex-row md:items-center md:py-16"
              onMouseEnter={handleProjEnter}
              onMouseLeave={handleProjLeave}
              onMouseMove={handleProjMove}
            >
              <div className="bg-secondary/5 absolute inset-0 z-0 hidden origin-bottom scale-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:origin-top group-hover:scale-y-100 lg:block"></div>

              {/* Cursor following image */}
              <div className="proj-img-wrap pointer-events-none absolute top-0 left-0 z-30 hidden h-[280px] w-[400px] scale-50 overflow-hidden rounded-2xl opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.3)] lg:block">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="proj-img h-full w-full scale-150 object-cover grayscale"
                />
                <div className="bg-primary/10 absolute inset-0 mix-blend-overlay"></div>
              </div>

              <div className="pointer-events-none relative z-10 flex flex-1 items-center gap-6 md:gap-16">
                <span className="text-secondary/30 font-display group-hover:text-secondary text-2xl italic transition-colors duration-500 md:text-3xl">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="proj-title-text font-display text-primary origin-left text-4xl font-light tracking-tighter transition-colors duration-500 md:text-6xl">
                    {proj.title}
                  </h3>
                  <p className="text-secondary mt-3 text-xs font-medium tracking-[0.2em] uppercase md:text-sm">
                    {proj.category}
                  </p>
                </div>
              </div>

              <div className="pointer-events-none relative z-10 mt-6 flex w-full items-center justify-between gap-6 md:mt-0 md:w-auto md:justify-end">
                <p className="text-secondary max-w-[300px] flex-1 font-light opacity-80 transition-all duration-500 ease-out group-hover:opacity-100 md:mr-12 md:flex-none md:text-right">
                  {proj.desc}
                </p>
                <div className="border-border-primary group-hover:bg-invert relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-transparent transition-all duration-500 group-hover:border-transparent group-hover:shadow-lg md:h-16 md:w-16">
                  <ArrowUpRight
                    strokeWidth={1}
                    size={24}
                    className="proj-arrow text-invert absolute -translate-x-8 translate-y-8 opacity-0 transition-colors"
                  />
                  <ArrowUpRight
                    strokeWidth={1}
                    size={24}
                    className="text-primary absolute opacity-60 transition-opacity duration-300 group-hover:opacity-0"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const container = useRef(null)
  const modalBgRef = useRef<HTMLDivElement>(null)
  const modalContentRef = useRef<HTMLDivElement>(null)
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null)
  const { t } = useLanguage()

  const feats = [
    {
      icon: <Video className="h-5 w-5" strokeWidth={1.5} />,
      title: '2D Animation',
      desc: 'Logo Animation, Book Animation, and custom animated assets to bring your brand to life.',
      fullDesc:
        'Bring your brand to life with stunning 2D animations. From captivating logo reveals to comprehensive book trailers and social media assets, our animation studio crafts motion that tells your story perfectly, engaging your audience across every digital touchpoint.',
      caseStudies: ['Kinetix App Launch', 'Oasis Brand Identity'],
    },
    {
      icon: <Megaphone className="h-5 w-5" strokeWidth={1.5} />,
      title: 'Digital Marketing',
      desc: 'GMB optimization (Map Ranking), Google Ads & Facebook Ads, Social Media management.',
      fullDesc:
        'Drive measurable growth with our data-driven marketing campaigns. We specialize in local SEO to dominate map rankings, alongside high-converting paid social and search campaigns to scale your user base rapidly and sustainably.',
      caseStudies: ['Aura E-Commerce Scaling', 'Local Reach Initiative'],
    },
    {
      icon: <Code className="h-5 w-5" strokeWidth={1.5} />,
      title: 'Web Development',
      desc: 'Frontend, Backend & Full-Stack. Shopify, Webflow, WordPress, Squarespace, Headless CMS.',
      fullDesc:
        'Build lightning-fast, robust web applications. From custom React and Next.js platforms to scalable headless Shopify infrastructures and polished Webflow sites, we deliver code that performs and scales effortlessly.',
      caseStudies: ['Aura E-Commerce', 'Synth AI Dashboard'],
    },
    {
      icon: <Smartphone className="h-5 w-5" strokeWidth={1.5} />,
      title: 'App Development',
      desc: 'Cross-platform and native mobile application development tailored for your needs.',
      fullDesc:
        'Create seamless mobile experiences with our app development team. We use React Native and performant native technologies to build intuitive, high-performance applications for iOS and Android.',
      caseStudies: ['Kinetix Cross-Platform App'],
    },
    {
      icon: <Bot className="h-5 w-5" strokeWidth={1.5} />,
      title: 'AI & Integrations',
      desc: 'AI Agentic features, AI API integration, and advanced automation.',
      fullDesc:
        'Future-proof your business with cutting-edge AI integrations. We build custom LLM agents, implement smart automation workflows, and integrate state-of-the-art APIs to give you a competitive edge in efficiency and capability.',
      caseStudies: ['Synth AI Platform'],
    },
    {
      icon: <Layout className="h-5 w-5" strokeWidth={1.5} />,
      title: 'UI/UX Design',
      desc: 'User-centric interface design and engaging user experiences for web and mobile.',
      fullDesc:
        'Design interfaces that users love. Our UI/UX process focuses on deep user research, strategic wireframing, and creating polished, cohesive design systems that balance aesthetic beauty with functional clarity.',
      caseStudies: ['Oasis Rebrand', 'Synth AI'],
    },
  ]

  const { contextSafe } = useGSAP(
    () => {
      gsap.from('.feature-up', {
        scrollTrigger: { trigger: container.current, start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.1,
        ease: 'expo.out',
      })

      if (selectedServiceIndex !== null && modalBgRef.current && modalContentRef.current) {
        gsap.fromTo(modalBgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.out' })
        gsap.fromTo(
          modalContentRef.current,
          { y: 100, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.5)', delay: 0.1 }
        )
      }
    },
    { scope: container, dependencies: [selectedServiceIndex] }
  )

  const closeServiceModal = contextSafe(() => {
    if (!modalBgRef.current || !modalContentRef.current) return

    gsap.to(modalContentRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.95,
      duration: 0.4,
      ease: 'power3.in',
    })

    gsap.to(modalBgRef.current, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => setSelectedServiceIndex(null),
      delay: 0.15,
    })
  })

  const openServiceModal = (index: number) => {
    setSelectedServiceIndex(index)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const glow = e.currentTarget.querySelector('.svc-glow')
    // Center the 300x300 glow element to the cursor
    gsap.to(glow, { x: x - 150, y: y - 150, duration: 0.6, ease: 'power3.out', overwrite: 'auto' })
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>) => {
    const iconWrap = e.currentTarget.querySelector('.icon-wrap')
    const titleText = e.currentTarget.querySelector('.svc-title-text')
    const desc = e.currentTarget.querySelector('.svc-desc')
    const bg = e.currentTarget.querySelector('.svc-bg')
    const arrow = e.currentTarget.querySelector('.svc-arrow')
    const glow = e.currentTarget.querySelector('.svc-glow')
    const iconSvg = e.currentTarget.querySelector('.icon-wrap svg')

    gsap.to(e.currentTarget, { scale: 1.025, zIndex: 10, duration: 0.8, ease: 'expo.out' })
    gsap.to(glow, { opacity: 1, duration: 0.5 })
    gsap.to(bg, { yPercent: 0, duration: 0.8, ease: 'expo.out' })
    gsap.to(iconWrap, { scale: 1.15, y: -6, duration: 0.8, ease: 'back.out(1.5)' })
    if (iconSvg) {
      gsap.to(iconSvg, { rotation: 360, duration: 1.2, ease: 'elastic.out(1, 0.5)' })
      gsap.fromTo(iconSvg, { y: 0 }, { y: -4, duration: 0.3, yoyo: true, repeat: 1, ease: 'power2.out' })
    }
    gsap.to(titleText, { x: 12, duration: 0.6, ease: 'expo.out' })
    gsap.to(desc, { x: 8, opacity: 0.8, duration: 0.6, delay: 0.05, ease: 'expo.out' })
    if (arrow) gsap.to(arrow, { opacity: 1, x: 0, y: 0, duration: 0.7, ease: 'expo.out' })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>) => {
    const iconWrap = e.currentTarget.querySelector('.icon-wrap')
    const titleText = e.currentTarget.querySelector('.svc-title-text')
    const desc = e.currentTarget.querySelector('.svc-desc')
    const bg = e.currentTarget.querySelector('.svc-bg')
    const arrow = e.currentTarget.querySelector('.svc-arrow')
    const glow = e.currentTarget.querySelector('.svc-glow')
    const iconSvg = e.currentTarget.querySelector('.icon-wrap svg')

    gsap.to(e.currentTarget, { scale: 1, zIndex: 1, duration: 0.6, ease: 'power3.out' })
    gsap.to(glow, { opacity: 0, duration: 0.5 })
    gsap.to(bg, { yPercent: 101, duration: 0.7, ease: 'power3.inOut' })
    gsap.to(iconWrap, { scale: 1, y: 0, duration: 0.8, ease: 'power3.out' })
    if (iconSvg) gsap.to(iconSvg, { rotation: 0, y: 0, duration: 0.8, ease: 'power3.out' })
    gsap.to(titleText, { x: 0, duration: 0.5, ease: 'power3.out' })
    gsap.to(desc, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' })
    if (arrow) gsap.to(arrow, { opacity: 0, x: -15, y: 15, duration: 0.4, ease: 'power2.in' })
  }

  return (
    <section
      ref={container}
      className="bg-secondary px-6 py-32 transition-colors duration-700 md:px-12 md:py-48"
      id="services"
    >
      <div className="border-border-primary mx-auto max-w-[1400px] border-t pt-16 md:pt-24">
        <div className="feature-up mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="font-display text-primary mb-6 text-5xl leading-[1.05] font-light tracking-tighter md:text-6xl lg:text-7xl">
              {t('services.title')}{' '}
              <span className="text-secondary font-serif italic">{t('services.title_italic')}</span>{' '}
              <br className="hidden md:block" />
              {t('services.title_p2')}
            </h2>
          </div>
          <p className="text-secondary mb-2 max-w-sm text-sm font-light">{t('services.desc')}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {feats.map((f, i) => (
            <div
              key={i}
              className="feature-up border-border-primary bg-secondary focus-visible:ring-border-primary group relative cursor-pointer overflow-hidden rounded-3xl border p-8 transition-colors duration-500 hover:z-10 hover:border-transparent hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] focus-visible:z-10 focus-visible:border-transparent focus-visible:shadow-[0_40px_80px_rgba(0,0,0,0.15)] focus-visible:ring-2 focus-visible:outline-none md:p-12"
              style={{ willChange: 'transform' }}
              tabIndex={0}
              role="button"
              aria-labelledby={`service-title-${i}`}
              onClick={() => openServiceModal(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openServiceModal(i)
                }
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onFocus={handleMouseEnter}
              onBlur={handleMouseLeave}
            >
              <div className="svc-glow bg-invert/10 pointer-events-none absolute z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[60px]"></div>
              <div className="svc-bg bg-invert pointer-events-none absolute inset-0 z-0 translate-y-[101%] rounded-3xl"></div>
              <div className="relative z-10 mb-16 flex items-start justify-between">
                <div className="icon-wrap border-border-primary text-primary bg-secondary/80 group-hover:border-invert/30 group-hover:text-invert group-focus:border-invert/30 group-focus:text-invert flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-500 group-hover:bg-transparent group-focus:bg-transparent">
                  {f.icon}
                </div>
                <ArrowUpRight
                  className="svc-arrow text-secondary group-hover:text-invert group-focus:text-invert -translate-x-5 translate-y-5 opacity-0 transition-colors duration-500"
                  size={28}
                  strokeWidth={1}
                />
              </div>
              <div className="relative z-10">
                <h3
                  id={`service-title-${i}`}
                  className="font-display text-primary group-hover:text-invert group-focus:text-invert mb-5 flex items-center gap-2 text-2xl font-light tracking-tighter transition-colors duration-500 md:text-3xl"
                >
                  <span className="svc-title-text transition-colors duration-500 group-hover:font-serif group-hover:italic group-focus:font-serif group-focus:italic">
                    {f.title}
                  </span>
                </h3>
                <p className="svc-desc text-secondary group-hover:text-invert/80 group-focus:text-invert/80 text-base leading-relaxed font-light transition-colors duration-500">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            ref={modalBgRef}
            className="bg-primary/80 absolute inset-0 backdrop-blur-sm"
            onClick={closeServiceModal}
          ></div>
          <div
            ref={modalContentRef}
            className="bg-secondary border-border-primary relative w-full max-w-2xl overflow-hidden rounded-3xl border p-8 shadow-2xl md:p-12"
          >
            {/* Background design elements */}
            <div className="bg-invert/5 pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/2 rounded-full blur-[80px]"></div>

            <button
              onClick={closeServiceModal}
              className="bg-primary/5 hover:bg-primary/10 text-primary absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="relative z-10">
              <div className="border-border-primary text-invert bg-primary mb-8 flex h-16 w-16 items-center justify-center rounded-full border shadow-lg">
                {feats[selectedServiceIndex].icon}
              </div>

              <h3 className="font-display text-primary mb-6 text-3xl font-light tracking-tighter md:text-4xl lg:text-5xl">
                {feats[selectedServiceIndex].title}
              </h3>

              <p className="text-secondary mb-10 text-lg leading-relaxed font-light md:text-xl">
                {feats[selectedServiceIndex].fullDesc}
              </p>

              <div className="border-border-primary/45 mt-10 flex flex-col items-start justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center">
                <div>
                  <p className="text-secondary mb-3 text-[10px] font-medium tracking-[0.2em] uppercase">Related Work</p>
                  <div className="flex flex-wrap gap-2.5">
                    {feats[selectedServiceIndex].caseStudies.map((study, idx) => (
                      <span
                        key={idx}
                        className="border-border-primary text-primary bg-primary/5 rounded-full border px-3.5 py-1.5 text-xs font-light"
                      >
                        {study}
                      </span>
                    ))}
                  </div>
                </div>

                {(() => {
                  const sMap = ['animation', 'marketing', 'webdev', 'appdev', 'ai', 'uiux']
                  const serviceId = sMap[selectedServiceIndex]
                  return (
                    <Link
                      href={`/services/${serviceId}`}
                      onClick={() => setSelectedServiceIndex(null)}
                      className="text-secondary hover:text-primary group/cta inline-flex shrink-0 items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-colors"
                    >
                      Inspect pricing & deliverables
                      <ArrowRight
                        size={13}
                        className="text-secondary transition-transform group-hover/cta:translate-x-1"
                      />
                    </Link>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Testimonials() {
  const container = useRef(null)
  const { t } = useLanguage()

  useGSAP(
    () => {
      gsap.from('.test-up', {
        scrollTrigger: { trigger: container.current, start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out',
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="bg-primary relative overflow-hidden px-6 py-32 transition-colors duration-700 md:px-12 md:py-48"
    >
      <div className="border-border-primary mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-16 border-t pt-16 md:pt-24 lg:grid-cols-12 lg:gap-24">
        <div className="test-up lg:col-span-4">
          <h2 className="font-display text-primary mb-6 text-5xl leading-[1.05] font-light tracking-tighter md:text-6xl">
            {t('testimonials.title')} <br />
            <span className="text-secondary font-serif italic">{t('testimonials.title_italic')}</span>
          </h2>
          <p className="text-secondary max-w-sm text-base leading-relaxed font-light lg:text-lg">
            {t('testimonials.tagline')}
          </p>
        </div>

        <div className="test-up lg:col-span-8">
          <h3 className="font-display text-primary relative mb-16 text-3xl leading-[1.3] font-light tracking-tighter md:text-4xl lg:text-5xl">
            <span className="text-border-primary absolute -top-4 -left-6 font-serif text-4xl md:-left-8 md:text-5xl">
              "
            </span>
            The best agency we've worked with so far. They understand our product deeply and integrate{' '}
            <span className="font-serif italic">elegant</span> features with an incredible eye for detail.
          </h3>
          <div className="border-border-primary flex flex-col gap-8 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-6">
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="Jenny Wilson"
                className="border-border-primary h-14 w-14 rounded-full border object-cover grayscale"
              />
              <div>
                <p className="text-primary mb-1 text-sm font-medium tracking-widest uppercase">Jenny Wilson</p>
                <p className="text-secondary text-[10px] font-medium tracking-[0.2em] uppercase">Vice President</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="border-border-primary text-primary hover:bg-invert hover:text-invert flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300">
                <ChevronLeft size={16} strokeWidth={1.5} />
              </button>
              <button className="border-border-primary text-primary hover:bg-invert hover:text-invert flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300">
                <ChevronRight size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const container = useRef(null)
  const { t } = useLanguage()

  const faqs = [
    {
      q: 'How much time does a typical project take?',
      a: 'Most web development and branding projects span between 4 to 8 weeks, depending on the complexity and scope of the engagement.',
    },
    {
      q: 'What is your approach to modern web development?',
      a: 'We embrace a headless-first and API-driven architecture, utilizing tools like Next.js, Webflow, or Shopify to ensure high performance and scalability.',
    },
    {
      q: 'How do you communicate during the project?',
      a: 'We set up a dedicated Slack channel and hold weekly syncs via Zoom. You will have full visibility into our process.',
    },
    {
      q: 'I have a highly complex AI product. Can you handle it?',
      a: 'Absolutely. Our team specializes in AI Agentic features and complex API integrations, turning advanced backend logic into seamless, elegant UIs.',
    },
    {
      q: 'What is your pricing and payment structure?',
      a: 'We typically work on a flat-rate milestone basis, requiring 50% upfront to commence work and 50% upon final delivery.',
    },
  ]

  const [openIdx, setOpenIdx] = useState<number | null>(0)

  useGSAP(
    () => {
      gsap.from('.faq-up', {
        scrollTrigger: { trigger: container.current, start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.1,
        ease: 'expo.out',
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="bg-secondary px-6 py-32 transition-colors duration-700 md:px-12 md:py-48"
      id="faq"
    >
      <div className="border-border-primary mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-16 border-t pt-16 md:pt-24 lg:grid-cols-12 lg:gap-24">
        <div className="faq-up lg:sticky lg:top-32 lg:col-span-4">
          <h2 className="font-display text-primary mb-8 text-5xl leading-[1.05] font-light tracking-tighter md:text-6xl">
            Frequently <br />
            <span className="text-secondary font-serif italic">asked.</span>
          </h2>
          <Link
            href="/contact"
            className="text-primary hover:text-secondary group flex w-max items-center gap-3 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors"
          >
            <span className="before:bg-border-primary hover:before:bg-primary relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:transition-colors before:content-['']">
              Contact Support
            </span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="border-border-primary faq-up border-t lg:col-span-8">
          {faqs.map((f, idx) => (
            <div key={idx} className="border-border-primary border-b">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="group flex w-full items-center justify-between py-10 text-left"
              >
                <div className="flex w-full items-center gap-6 pr-8 md:gap-12">
                  <span className="text-secondary/30 font-display w-8 text-2xl italic lg:text-3xl">0{idx + 1}</span>
                  <h4
                    className={`font-display text-xl font-light tracking-tight transition-none md:text-3xl ${openIdx === idx ? 'text-primary font-serif italic' : 'text-primary group-hover:opacity-70'}`}
                  >
                    {f.q}
                  </h4>
                </div>
                <div className="text-secondary group-hover:text-primary shrink-0 transition-colors">
                  {openIdx === idx ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                </div>
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-secondary max-w-2xl pb-10 pl-14 text-sm leading-relaxed font-light md:pl-22 md:text-base">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactBlock() {
  const container = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', service: '', industry: '', details: '' })
  const { t } = useLanguage()

  useGSAP(
    () => {
      gsap.from('.contact-up', {
        scrollTrigger: { trigger: container.current, start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 1.5,
        stagger: 0.15,
        ease: 'expo.out',
      })

      gsap.to('.contact-parallax', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: container.current, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    },
    { scope: container }
  )

  const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section ref={container} className="bg-primary transition-colors duration-700" id="contact">
      <div className="bg-border-primary h-px w-full"></div>
      <div className="grid min-h-0 grid-cols-1 lg:min-h-[800px] lg:grid-cols-2">
        {/* Cover Image Half */}
        <div className="contact-up relative order-2 h-72 overflow-hidden sm:h-96 lg:order-1 lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Collaboration"
            className="contact-parallax absolute inset-0 top-[-10%] h-[120%] w-full object-cover opacity-90 grayscale transition-opacity duration-1000"
          />
          <div className="bg-primary/20 absolute inset-0 mix-blend-multiply"></div>
          <div className="from-primary absolute inset-0 flex flex-col justify-end bg-linear-to-t to-transparent p-8 sm:p-12 lg:p-24">
            <h2 className="font-display mb-6 text-4xl leading-[1.05] font-light tracking-tighter text-white sm:text-5xl md:text-7xl lg:text-8xl">
              {t('footer.tagline')} <br />
              <span className="font-serif text-white/70 italic">{t('footer.tagline_secondary')}</span>
            </h2>
          </div>
        </div>

        {/* Form Half */}
        <div className="bg-invert text-invert contact-up order-1 flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:order-2 lg:px-24 lg:py-32">
          <h3 className="font-display text-invert mb-4 text-3xl font-light tracking-tight sm:mb-6 sm:text-4xl md:text-5xl">
            Create a Brief.
          </h3>
          <p className="text-invert/60 mb-8 max-w-sm text-xs leading-relaxed font-light sm:mb-16 sm:text-sm">
            Provide details regarding your project, and our team will get back to you with a comprehensive quote.
          </p>

          <form className="flex flex-col gap-8 sm:gap-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
              <div className="group relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer border-invert/20 text-invert focus:border-invert w-full border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none"
                />
                <label className="text-invert/40 peer-focus:text-invert/80 peer-not-placeholder-shown:text-invert/80 pointer-events-none absolute top-3 left-0 text-sm font-light transition-all peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:uppercase">
                  Your Name
                </label>
              </div>
              <div className="group relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer border-invert/20 text-invert focus:border-invert w-full border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none"
                />
                <label className="text-invert/40 peer-focus:text-invert/80 peer-not-placeholder-shown:text-invert/80 pointer-events-none absolute top-3 left-0 text-sm font-light transition-all peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:uppercase">
                  Email Address
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="border-invert/20 text-invert/60 focus:border-invert cursor-pointer appearance-none rounded-none border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none"
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="animation" className="bg-invert text-invert">
                  2D Animation
                </option>
                <option value="marketing" className="bg-invert text-invert">
                  Digital Marketing
                </option>
                <option value="webdev" className="bg-invert text-invert">
                  Web Development
                </option>
                <option value="mobile" className="bg-invert text-invert">
                  Mobile App
                </option>
                <option value="ai" className="bg-invert text-invert">
                  AI & Integrations
                </option>
                <option value="design" className="bg-invert text-invert">
                  UI/UX Design
                </option>
              </select>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="border-invert/20 text-invert/60 focus:border-invert cursor-pointer appearance-none rounded-none border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none"
              >
                <option value="" disabled>
                  Select Industry
                </option>
                <option value="saas" className="bg-invert text-invert">
                  SaaS / Technology
                </option>
                <option value="ecommerce" className="bg-invert text-invert">
                  E-Commerce
                </option>
                <option value="finance" className="bg-invert text-invert">
                  Finance
                </option>
                <option value="other" className="bg-invert text-invert">
                  Other
                </option>
              </select>
            </div>

            <div className="group relative mt-4">
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder=" "
                rows={3}
                className="peer border-invert/20 text-invert focus:border-invert w-full resize-none border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none"
              />
              <label className="text-invert/40 peer-focus:text-invert/80 peer-not-placeholder-shown:text-invert/80 pointer-events-none absolute top-3 left-0 text-sm font-light transition-all peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:uppercase">
                Tell us about your project
              </label>
            </div>

            <button className="group bg-primary text-primary border-primary relative mt-4 overflow-hidden rounded-full border px-10 py-5 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 sm:mt-8 sm:px-12 sm:py-6 md:max-w-xs">
              <span className="group-hover:text-invert relative z-10 transition-colors duration-500">Send Inquiry</span>
              <div className="bg-invert absolute inset-0 z-0 translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Blog() {
  const container = useRef(null)
  const { t } = useLanguage()

  const posts = [
    {
      id: 'headless-doubled',
      date: 'April 1, 2024',
      title: 'How pivoting to a headless architecture doubled conversions.',
      img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 'ai-agentic-saas',
      date: 'March 15, 2024',
      title: 'The ultimate guide to AI Agentic features in SaaS.',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 'minimal-design-retention',
      date: 'Feb 28, 2024',
      title: 'Why minimal design drives higher user retention in 2024.',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
    },
  ]

  useGSAP(
    () => {
      gsap.from('.blog-up', {
        scrollTrigger: { trigger: container.current, start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out',
      })
    },
    { scope: container }
  )

  return (
    <section
      ref={container}
      className="bg-primary px-6 py-32 transition-colors duration-700 md:px-12 md:py-48"
      id="blog"
    >
      <div className="border-border-primary mx-auto max-w-[1400px] border-t pt-16 md:pt-24">
        <div className="blog-up mb-20 flex items-end justify-between">
          <h2 className="font-display text-primary text-6xl font-light tracking-tighter md:text-7xl lg:text-8xl">
            {t('blog.title')}
            <span className="text-secondary font-serif italic">{t('blog.title_italic')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16">
          {posts.map((p, idx) => (
            <Link
              href={`/blog/${p.id}`}
              key={idx}
              className="blog-up group border-border-primary block cursor-pointer border-t pt-8"
            >
              <div className="bg-border-primary relative mb-8 aspect-4/3 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover opacity-90 grayscale transition-all duration-[1.2s] ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-secondary/60 text-[10px] font-medium tracking-[0.2em] uppercase">{p.date}</p>
              </div>
              <h3 className="font-display text-primary mb-6 text-2xl leading-[1.3] font-light tracking-tight transition-none group-hover:font-serif group-hover:italic">
                {p.title}
              </h3>
              <div className="text-primary group-hover:text-secondary flex w-max items-center gap-3 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors">
                <span className="before:bg-secondary relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-0 before:transition-all before:content-[''] group-hover:before:w-full">
                  Read Article
                </span>
                <ArrowRight size={14} className="-rotate-45 transition-transform duration-500 group-hover:rotate-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
