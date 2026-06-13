'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code,
  Gauge,
  Layers,
  Layout,
  Megaphone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Video,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface ServiceDetail {
  id: string
  title: string
  shortDesc: string
  longDesc: string
  icon: React.ComponentType<any>
  accentColor: string
  deliverables: string[]
  techStack: string[]
  pricing: {
    growth: string
    enterprise: string
  }
  metrics: { label: string; value: string; desc: string }[]
  process: { phase: string; title: string; desc: string }[]
  caseCorrelation: { title: string; id: string }[]
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'animation',
    title: '2D Animation',
    shortDesc: 'Logo Animation, Book Animation, and custom animated assets to bring your brand to life.',
    longDesc:
      'Our motion studio creates programmatic vector animations, tactile page-flip interactive book graphics, and high-performance WebGL overlays. We avoid heavy video wrappers—implementing sleek Lottie animations and SVG timelines that weight less than 150KB and execute at beautiful 60FPS.',
    icon: Video,
    accentColor: '#FF3366',
    deliverables: [
      'High-Performance Lottie/JSON Vector Packages',
      'Dynamic CSS SVG Animation Timelines',
      'Interactive Canvas-Based Motion Frames',
      'Cinematic Explainer Video Assets',
      'Mobile App Launch Micro-interactions',
    ],
    techStack: ['After Effects', 'Lottie SDK', 'Anime.js', 'Spline 3D', 'Bodymovin'],
    pricing: {
      growth: 'Starting at $2,500',
      enterprise: 'Custom Quote / Suite',
    },
    metrics: [
      { label: 'BANDWIDTH SHAVED', value: '-95%', desc: 'Payload file compression comparing to GIF/MP4' },
      { label: 'MOBILE ACCURACY', value: '60 FPS', desc: 'Flawless render execution on standard mobile devices' },
      { label: 'CONVERSION FLOW', value: '+18%', desc: 'Average increase in click interactions' },
    ],
    process: [
      {
        phase: '01. BRIEF',
        title: 'Conceptual Storyboarding',
        desc: 'Framing sequence arcs, keyframes, and motion behaviors',
      },
      {
        phase: '02. FORMULA',
        title: 'Vector Asset Drafting',
        desc: 'Handcrafting custom high-contrast SVG assets and paths',
      },
      {
        phase: '03. MOTION',
        title: 'Physics & Interpolation',
        desc: 'Setting easing curves, momentum coefficients, and velocity variables',
      },
      {
        phase: '04. VELOCITY',
        title: 'Metadata Packing',
        desc: 'Shrinking keyframe files and testing response speeds',
      },
    ],
    caseCorrelation: [
      { title: 'Lumina Fluid Motion Systems', id: 'lumina-logo' },
      { title: 'The Alchemist Interactive Book', id: 'alchemist-book' },
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    shortDesc: 'GMB optimization (Map Ranking), Google Ads & Facebook Ads, Social Media management.',
    longDesc:
      'Durable growth structured through real tracking and local ranking dominance. We audit duplicate citations, automate multi-channel search syncs, optimize high-converting landing pages, and structure high-ROI retargeting funnels that drop client acquisition costs.',
    icon: Megaphone,
    accentColor: '#10B981',
    deliverables: [
      'Top-3 GMB Map Pack Local Optimization',
      'Multi-Channel Paid Search & Social Systems',
      'Automated Citation Synchronicity Indexing',
      'High-Conversion Landing Page Blueprinting',
      'B2B SaaS Content Syndication Framework',
    ],
    techStack: ['Google Ads', 'Facebook Business SDK', 'SEMrush SDK', 'Zapier Automation', 'HubSpot API'],
    pricing: {
      growth: '$1,800 / month',
      enterprise: 'Starting at $4,500 / month',
    },
    metrics: [
      { label: 'CAC REDUCTION', value: '-42%', desc: 'Average savings on cost of acquiring clients' },
      { label: 'LOCAL VISIBILITY', value: '+340%', desc: 'Average increase in active local map search actions' },
      { label: 'AVERAGE ROAS', value: '5.2x', desc: 'Stable blended return on target ad investments' },
    ],
    process: [
      {
        phase: '01. BRIEF',
        title: 'Landscape Competitor Audits',
        desc: 'Evaluating market gaps, search intents, page weights',
      },
      {
        phase: '02. FORMULA',
        title: 'High-Converting Copies',
        desc: 'Crafting responsive copy structures and creative elements',
      },
      {
        phase: '03. MOTION',
        title: 'Strategic Account Assembly',
        desc: 'Structuring campaign hierarchies and tag conversion pixels',
      },
      {
        phase: '04. VELOCITY',
        title: 'Weekly Iterations Lab',
        desc: 'A/B testing, budget weight controls, and real-time tweaks',
      },
    ],
    caseCorrelation: [
      { title: 'GMB Map Ranking Dominance', id: 'gmb-omnimap' },
      { title: 'Scale 360 Ads Optimizer', id: 'scale-ads-funnel' },
    ],
  },
  {
    id: 'webdev',
    title: 'Web Development',
    shortDesc: 'Frontend, Backend & Full-Stack. Shopify, Webflow, WordPress, Squarespace, Headless CMS.',
    longDesc:
      'Decoupled, high-performance static websites built on contemporary modular frameworks. By pairing headless custom front-ends to headless commerce channels (Sanity CMS, Shopify, webhooks), we produce pages that load in under 1 second and rank perfectly green on core web vitals.',
    icon: Code,
    accentColor: '#6366F1',
    deliverables: [
      'Next.js & React Clean App Deployments',
      'Headless Shopify E-Commerce Systems',
      'Pixel-Perfect Interactive Webflow Experiences',
      'Modular REST & Socket API Backends',
      'Custom WordPress Headless Architectures',
    ],
    techStack: ['React', 'NextJS', 'Vite', 'Shopify Storefront API', 'Sanity CMS', 'TailwindCSS'],
    pricing: {
      growth: 'Starting at $5,000',
      enterprise: 'Starting at $12,000',
    },
    metrics: [
      { label: 'LIGHTHOUSE INDEX', value: '99/100', desc: 'Page Speed performative benchmark rating' },
      { label: 'LOADING INDEX', value: '< 1s', desc: 'Interactive server response and paint timelines' },
      { label: 'SEO DOMINANCE', value: '100/100', desc: 'Fully compliant semantic structures rank' },
    ],
    process: [
      {
        phase: '01. BRIEF',
        title: 'Database & Route Architectures',
        desc: 'Structuring databases, API endpoints, and caching models',
      },
      {
        phase: '02. FORMULA',
        title: 'Pixel Engineering Work',
        desc: 'Implementing clean React classes with Tailwind parameters',
      },
      {
        phase: '03. MOTION',
        title: 'Component Assembly',
        desc: 'Adding micro-interactions, smooth scroll triggers, hook states',
      },
      {
        phase: '04. VELOCITY',
        title: 'Edge Performance Pacing',
        desc: 'Shaving heavy bundles, setting header caches, Vercel deployments',
      },
    ],
    caseCorrelation: [
      { title: 'Nexus Headless Commerce Platform', id: 'nexus-headless-shopify' },
      { title: 'Empower Corporate Webflow Portal', id: 'empower-corporate-digital' },
    ],
  },
  {
    id: 'appdev',
    title: 'App Development',
    shortDesc: 'Cross-platform and native mobile application development tailored for your needs.',
    longDesc:
      'Performant iOS and Android mobile software engineered using React Native and Flutter. We move critical processes to native background layers, minimizing battery runtime drains, caching telemetry coordinates, and delivering slick 60FPS fluid screen navigation.',
    icon: Smartphone,
    accentColor: '#EC4899',
    deliverables: [
      'React Native Cross-Platform Applications',
      'Performant Flutter Crypto & Finance Wallets',
      'Native Swift iOS Development Patterns',
      'Local Core Data & SQLite Persistences',
      'Secure Bluetooth BLE & Biometric Integrations',
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Rust Secure Core', 'SQLite', 'HealthKit'],
    pricing: {
      growth: 'Starting at $8,000',
      enterprise: 'Starting at $18,000',
    },
    metrics: [
      { label: 'BATTERY SAVED', value: '-65%', desc: 'Minimized background thread processing drainage' },
      { label: 'STORE SUCCESS', value: '4.8★', desc: 'Excellent customer reviews across App/Play Stores' },
      { label: 'INTERACTIVE RATE', value: '60 FPS', desc: 'Completely fluid screens translation transitions' },
    ],
    process: [
      {
        phase: '01. BRIEF',
        title: 'Layout UI & Device Blueprints',
        desc: 'Formulating view flows, authentication, offline patterns',
      },
      {
        phase: '02. FORMULA',
        title: 'Native Thread Optimization',
        desc: 'Writing modular codebases with custom memory channels',
      },
      {
        phase: '03. MOTION',
        title: 'Active UI Fluid Assembly',
        desc: 'Adding swipe-to-delete grids, modal drawers, sensor tracks',
      },
      {
        phase: '04. VELOCITY',
        title: 'Store Auditing Cycles',
        desc: 'Preparing builds, running simulators, and security reviews',
      },
    ],
    caseCorrelation: [
      { title: 'Zenith Smart Fitness', id: 'zenith-fitness-app' },
      { title: 'Velo Delivery Native iOS App', id: 'velo-express-app' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Integrations',
    shortDesc: 'AI Agentic features, AI API integration, and advanced automation.',
    longDesc:
      'We build autonomous agent workflows utilizing state-of-the-art Gemini LLMs. By designing constrained JSON parameters, semantic vector indexing databases (RAG), and custom webhooks processing, we eliminate manual clerical workloads safely.',
    icon: Bot,
    accentColor: '#8B5CF6',
    deliverables: [
      'Gemini API Multi-Agent CRM Automations',
      'Vector Databases Case Retrieval Integrations',
      'Semantic Search and Legal Grounding Vectors',
      'HubSpot, Slack & Salesforce Pipeline Syncs',
      'Cognitive Parsing of Unstructured Contracts',
    ],
    techStack: ['Gemini API SDK', 'Pinecone Vector Core', 'NodeJS Orchestrator', 'HubSpot API', 'Salesforce SDK'],
    pricing: {
      growth: 'Starting at $6,000',
      enterprise: 'Starting at $15,000',
    },
    metrics: [
      { label: 'CLERICAL REDUCTION', value: '82%', desc: 'Automation of standard customer CRM processing data' },
      { label: 'GROUNDING PRECISION', value: '99.4%', desc: 'Strict data constraints eliminate hallucinations' },
      { label: 'RESPONSE SPEEDS', value: '< 2s', desc: 'Real-time contextual data synthesis pipeline response' },
    ],
    process: [
      {
        phase: '01. BRIEF',
        title: 'Unstructured Data Analysis',
        desc: 'Reviewing data parameters, API payloads, vector scopes',
      },
      {
        phase: '02. FORMULA',
        title: 'System Directive Formulations',
        desc: 'Drafting strict custom LLM guidelines and JSON schema parameters',
      },
      {
        phase: '03. MOTION',
        title: 'Connector Orchestration',
        desc: 'Developing automated background cron channels, Webhook queues',
      },
      {
        phase: '04. VELOCITY',
        title: 'Data Grounding Audits',
        desc: 'Rigorous security isolation and test pipeline processing',
      },
    ],
    caseCorrelation: [
      { title: 'Cognitive Hub CRM Automator', id: 'cognitive-crm-agents' },
      { title: 'Gemini Dense Knowledge Hub', id: 'gemini-legal-search' },
    ],
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    shortDesc: 'User-centric interface design and engaging user experiences for web and mobile.',
    longDesc:
      'Clean typography pairings, precise desktop-first grids, comfortable margins, and cohesive style guides. We design structured interfaces that reduce navigation fatigue and capture instant engagement.',
    icon: Layout,
    accentColor: '#F59E0B',
    deliverables: [
      'Advanced Figma Blueprint Design Systems',
      'High-Fidelity Interactive Layout Components',
      'Mobile Accessibility & Contrast Audits',
      'E-commerce High-Conversion Checkout Overhauls',
      'Logistics Dispatch Eye-Tracking Optimizations',
    ],
    techStack: ['Figma Pro', 'Adobe Creative Suite', 'Principle Interactive', 'FigJam Maps', 'Contrast WCAG Specs'],
    pricing: {
      growth: 'Starting at $3,500',
      enterprise: 'Starting at $9,000',
    },
    metrics: [
      { label: 'REDUCTION IN ERRORS', value: '-27%', desc: 'Clutter-free panels prevent data entry mistakes' },
      { label: 'VISUAL FATIGUE', value: '-45%', desc: 'Balanced negative space accommodates long work shifts' },
      { label: 'CART CONVERSION', value: '+28%', desc: 'Checkout streamlining drops user abandonment' },
    ],
    process: [
      {
        phase: '01. BRIEF',
        title: 'User Research Metrics',
        desc: 'Observing user behaviors, tracking entry clicks, analyzing drops',
      },
      {
        phase: '02. FORMULA',
        title: 'Structured Skeleton Layouts',
        desc: 'Developing clean high-level digital wireframes and hierarchy bounds',
      },
      {
        phase: '03. MOTION',
        title: 'Visual Theme Assembly',
        desc: 'Pairing modern display typography with balanced scale palettes',
      },
      {
        phase: '04. VELOCITY',
        title: 'Component Library Shipping',
        desc: 'Providing layered layouts and pixel assets to coding teams',
      },
    ],
    caseCorrelation: [
      { title: 'Helios Smart Home UX System', id: 'helios-smart-house' },
      { title: 'Aero Flight Logistics Console', id: 'aero-logistics-dashboard' },
    ],
  },
]

export default function Services() {
  const params = useParams()
  const id = typeof params.id === 'string' ? params.id : undefined
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(id || 'animation')
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll to top when dynamic ID route updates
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (id && SERVICES_DATA.find((s) => s.id === id)) {
      setActiveTab(id)
    }
  }, [id])

  useGSAP(
    () => {
      gsap.from('.srv-hero-reveal', {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1.4,
        ease: 'expo.out',
      })

      gsap.from('.srv-bento-card', {
        scrollTrigger: {
          trigger: '.srv-interactive-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'expo.out',
      })
    },
    { scope: containerRef, dependencies: [id] }
  )

  const activeService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0]
  const ActiveIcon = activeService.icon

  // Single Page Deep Dive Focus mode
  if (id) {
    const serviceDetail = SERVICES_DATA.find((s) => s.id === id)
    if (serviceDetail) {
      const DetailIcon = serviceDetail.icon
      return (
        <div
          ref={containerRef}
          className="bg-primary text-primary min-h-screen w-full pb-32 transition-colors duration-700"
        >
          {/* Executive Sub-Header controller */}
          <div className="bg-primary/95 border-border-primary/80 sticky top-[80px] z-30 w-full border-b px-6 py-4 backdrop-blur-md md:px-12">
            <div className="mx-auto flex max-w-[1400px] items-center justify-between">
              <button
                onClick={() => router.push('/services')}
                className="text-primary hover:text-secondary group flex items-center gap-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
              >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Solutions
              </button>
              <div className="text-secondary/70 flex items-center gap-4 font-mono text-[10px] tracking-wider lowercase">
                Service Sector ID: <span className="text-primary font-bold">{serviceDetail.id}</span>
              </div>
            </div>
          </div>

          {/* Deep Service Banner Stage */}
          <section className="bg-primary relative px-6 pt-24 pb-16 md:px-12 md:pt-32">
            <div className="relative z-10 mx-auto w-full max-w-[1400px]">
              <div className="bg-secondary text-secondary border-border-primary/45 srv-hero-reveal mb-8 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] uppercase">
                <Sparkles size={11} className="text-secondary" />
                Core Solution Suite
              </div>

              <div className="mt-6 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
                <div className="srv-hero-reveal space-y-6 lg:col-span-8">
                  <div className="mb-4 flex items-center gap-4">
                    <span
                      className="text-primary rounded-2xl border p-4"
                      style={{
                        borderColor: `${serviceDetail.accentColor}33`,
                        backgroundColor: `${serviceDetail.accentColor}11`,
                      }}
                    >
                      <DetailIcon className="h-8 w-8" style={{ color: serviceDetail.accentColor }} />
                    </span>
                    <h1 className="font-display lg:text-7.5xl text-primary text-4xl leading-[1.05] font-light tracking-tight md:text-6xl">
                      {serviceDetail.title}
                    </h1>
                  </div>
                  <p className="text-secondary max-w-4xl pt-4 text-lg leading-relaxed font-light md:text-xl">
                    {serviceDetail.longDesc}
                  </p>
                </div>

                <div className="srv-hero-reveal border-border-primary bg-secondary/15 space-y-6 rounded-3xl border p-8 lg:col-span-4">
                  <span className="text-secondary/50 block text-[9px] font-bold tracking-[0.22em] uppercase">
                    Service Value metrics
                  </span>
                  <div className="space-y-4">
                    <div>
                      <span className="text-secondary mb-1 block text-[10px] tracking-widest uppercase">
                        Scale Investment
                      </span>
                      <span className="font-display text-primary text-lg font-semibold">
                        {serviceDetail.pricing.growth}
                      </span>
                    </div>
                    {serviceDetail.pricing.enterprise && (
                      <div className="border-border-primary/40 border-t pt-4">
                        <span className="text-secondary mb-1 block text-[10px] tracking-widest uppercase">
                          Enterprise Suite
                        </span>
                        <span className="font-display text-primary text-lg font-semibold">
                          {serviceDetail.pricing.enterprise}
                        </span>
                      </div>
                    )}
                    <div className="border-border-primary/40 border-t pt-6">
                      <Link
                        href="/contact"
                        className="bg-invert text-invert hover:text-primary border-invert hover:border-primary inline-flex w-full items-center justify-center rounded-full border py-3.5 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-transparent"
                      >
                        Launch Project Brief
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Majestic Service Performance Telemetry */}
          <section className="bg-primary px-6 py-8 md:px-12">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 md:grid-cols-3">
              {serviceDetail.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="border-border-primary bg-secondary/20 group relative overflow-hidden rounded-3xl border p-8"
                >
                  <div className="bg-invert/5 absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full blur-2xl" />
                  <span className="text-secondary/60 mb-2 block text-[9px] font-semibold tracking-[0.22em] uppercase">
                    {m.label}
                  </span>
                  <div
                    className="font-display lg:text-5.5xl text-primary mb-4 text-4xl font-light tracking-tighter"
                    style={{ color: serviceDetail.accentColor }}
                  >
                    {m.value}
                  </div>
                  <p className="text-secondary text-xs leading-relaxed font-light">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Strategy Details Grid */}
          <section className="bg-primary px-6 py-16 md:px-12">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-12 lg:grid-cols-12">
              {/* Detailed deliverables list */}
              <div className="border-border-primary bg-secondary/10 space-y-6 rounded-3xl border p-8 md:p-10 lg:col-span-7">
                <div className="border-border-primary/35 flex items-center gap-3 border-b pb-4">
                  <span className="text-secondary bg-primary border-border-primary/40 flex h-7 w-7 items-center justify-center rounded-full border font-mono text-xs font-bold">
                    01
                  </span>
                  <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                    Key Deliverables Architecture
                  </span>
                </div>
                <p className="text-secondary text-xs leading-relaxed font-light">
                  Every project iteration ships a collection of verified digital assets, tested contrast reports, and
                  responsive logic.
                </p>
                <div className="mt-6 space-y-3.5">
                  {serviceDetail.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="bg-primary/50 border-border-primary/30 flex items-center gap-3 rounded-xl border p-4"
                    >
                      <span className="bg-secondary text-secondary flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold">
                        <CheckCircle2 size={11} style={{ color: serviceDetail.accentColor }} />
                      </span>
                      <span className="text-secondary text-xs font-light md:text-sm">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow timelines */}
              <div className="space-y-6 lg:col-span-5">
                {/* Tech toolkit */}
                <div className="border-border-primary bg-secondary/15 space-y-4 rounded-3xl border p-8">
                  <h4 className="text-secondary/60 text-[10px] font-bold tracking-widest uppercase">
                    Technology Toolkit
                  </h4>
                  <p className="text-secondary text-xs font-light">
                    We assemble robust pipelines with contemporary industry frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {serviceDetail.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-primary border-border-primary text-secondary rounded-xl border px-3.5 py-2 text-xs font-semibold tracking-wider uppercase"
                        style={{ borderLeftColor: serviceDetail.accentColor, borderLeftWidth: '3px' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case studies links */}
                <div className="border-border-primary bg-secondary/15 space-y-4 rounded-3xl border p-8">
                  <h4 className="text-secondary/60 text-[10px] font-bold tracking-widest uppercase">
                    Correlated Showcase Projects
                  </h4>
                  <p className="text-secondary text-xs font-light">
                    See our engineering in actions with real-world deployments.
                  </p>
                  <div className="space-y-2.5 pt-2">
                    {serviceDetail.caseCorrelation.map((project, pIdx) => (
                      <Link
                        key={pIdx}
                        href={`/portfolio/${project.id}`}
                        className="group bg-primary border-border-primary/60 hover:bg-secondary/40 flex items-center justify-between rounded-xl border p-3.5 transition-colors"
                      >
                        <span className="text-primary group-hover:text-secondary text-xs font-medium transition-all group-hover:translate-x-0.5">
                          {project.title}
                        </span>
                        <ArrowRight
                          size={12}
                          className="text-secondary transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Pipeline */}
          <section className="bg-primary px-6 py-12 md:px-12">
            <div className="border-border-primary/40 mx-auto max-w-[1400px] border-t pt-16">
              <span className="text-secondary mb-4 block text-[9px] font-bold tracking-[0.25em] uppercase">
                ENGINEERING PROGRESSION
              </span>
              <h2 className="font-display md:text-4.5xl text-primary mb-12 text-3xl font-light tracking-tight">
                Our custom development <span className="text-secondary font-serif italic">workflow lifecycle.</span>
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                {serviceDetail.process.map((step, sIdx) => (
                  <div key={sIdx} className="bg-secondary/25 border-border-primary/50 space-y-4 rounded-2xl border p-6">
                    <span className="text-secondary/50 block font-mono text-[9px] font-bold">{step.phase}</span>
                    <h4 className="font-display text-primary text-sm font-semibold">{step.title}</h4>
                    <p className="text-secondary text-xs leading-relaxed font-light">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )
    }
  }

  // Multi-view exploratory Directory
  return (
    <div
      ref={containerRef}
      className="bg-primary text-primary min-h-screen w-full pb-32 transition-colors duration-700"
    >
      {/* 1. HIGH-ESTHETIC HEADER */}
      <section className="bg-primary relative px-6 pt-32 pb-12 sm:pt-40 sm:pb-16 md:px-12 md:pt-52">
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="grid grid-cols-1 items-end gap-8 md:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="srv-hero-reveal text-secondary border-border-primary/80 mb-6 inline-flex items-center gap-2 rounded-full border px-4.5 py-2 text-xs font-semibold tracking-[0.25em] uppercase sm:mb-8 md:text-sm">
                <Sparkles size={12} className="text-secondary" />
                NextCreavo Competencies
              </span>
              <h1 className="font-display lg:text-8.5xl text-primary text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl md:text-7xl md:leading-none">
                Our craft suite
                <br />
                <span className="text-secondary font-serif font-light italic">capabilities.</span>
              </h1>
            </div>
            <div className="pb-2 lg:col-span-4 lg:pl-6">
              <p className="srv-hero-reveal text-secondary text-base leading-relaxed font-light md:text-lg">
                Operating with pixel perfection, clean layout structures, and smart agent automations. Select a
                specialization sector to inspect deliverables and telemetry data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES TAB DISPATCHER & CORE WORKSPACE VIEW */}
      <section className="srv-interactive-grid bg-primary px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          {/* LEFT: Sector Selectors */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {SERVICES_DATA.map((service) => {
              const isActive = activeTab === service.id
              const SvgIcon = service.icon
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`rounded-2.5xl group relative flex w-full items-start gap-5 overflow-hidden border p-6 text-left transition-all duration-500 md:p-8 ${
                    isActive
                      ? 'bg-secondary border-transparent shadow-md'
                      : 'bg-secondary/40 border-border-primary/45 hover:bg-secondary'
                  }`}
                >
                  <span
                    className={`shrink-0 rounded-xl border p-3 transition-colors ${
                      isActive ? 'bg-primary border-transparent' : 'bg-secondary border-border-primary'
                    }`}
                  >
                    <SvgIcon
                      className="text-secondary h-5 w-5"
                      style={{ color: isActive ? service.accentColor : undefined }}
                    />
                  </span>
                  <div className="space-y-1 pr-6">
                    <span className="text-secondary/40 block font-mono text-[8px] tracking-widest">
                      SECTOR: {service.id.toUpperCase()}
                    </span>
                    <h3 className="font-display text-primary text-lg font-semibold md:text-xl">{service.title}</h3>
                    <p className="text-secondary/80 max-w-xs truncate text-xs font-light">{service.shortDesc}</p>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`text-secondary/40 group-hover:text-primary absolute top-1/2 right-6 -translate-y-1/2 transition-all ${isActive ? 'translate-x-[2px]' : ''}`}
                  />
                </button>
              )
            })}
          </div>

          {/* RIGHT: Big Interactive Panel Display */}
          <div className="bg-secondary border-border-primary relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-8 md:p-12 lg:col-span-7">
            <div className="bg-invert/5 absolute top-0 right-0 h-64 w-64 rounded-full blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="my-auto space-y-8"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="bg-primary/40 block rounded-2xl border p-3.5"
                    style={{ borderColor: `${activeService.accentColor}33` }}
                  >
                    <ActiveIcon className="h-8 w-8" style={{ color: activeService.accentColor }} />
                  </span>
                  <div>
                    <span className="text-secondary/60 block font-mono text-[9px] tracking-widest uppercase">
                      CORE SPECIALIZATION
                    </span>
                    <h3 className="font-display md:text-4.5xl text-primary text-3xl font-light tracking-tight">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-secondary max-w-2xl text-sm leading-relaxed font-light md:text-base">
                  {activeService.longDesc}
                </p>

                <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-3">
                  {activeService.metrics.map((met, mIdx) => (
                    <div key={mIdx} className="bg-primary/50 border-border-primary/50 rounded-xl border p-4.5">
                      <span className="text-secondary/50 mb-1 block font-mono text-[8px] tracking-widest uppercase">
                        {met.label}
                      </span>
                      <span
                        className="font-display block text-xl font-bold tracking-tight md:text-2xl"
                        style={{ color: activeService.accentColor }}
                      >
                        {met.value}
                      </span>
                      <p className="text-secondary mt-1.5 text-[10px] leading-tight font-light">{met.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="border-border-primary/30 space-y-2 border-t pt-6">
                  <h4 className="text-secondary/60 font-mono text-[9px] tracking-widest uppercase">
                    Selected Deliverables
                  </h4>
                  <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
                    {activeService.deliverables.slice(0, 4).map((del, dKey) => (
                      <div key={dKey} className="flex items-center gap-2">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: activeService.accentColor }}
                        />
                        <span className="text-secondary truncate text-xs">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="border-border-primary/40 mt-12 flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center">
              <span className="text-secondary/60 font-mono text-[9px] leading-none tracking-widest uppercase">
                Pricing: <span className="text-primary font-bold">{activeService.pricing.growth}</span>
              </span>
              <button
                onClick={() => router.push(`/services/${activeService.id}`)}
                className="text-secondary hover:text-primary inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-transform hover:translate-x-0.5"
              >
                Inquire Deep Solution
                <ArrowRight size={12} style={{ color: activeService.accentColor }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERT STANDARDS CAPABILITY MATRIX */}
      <section className="bg-primary px-6 py-24 md:px-12">
        <div className="border-border-primary mx-auto max-w-[1400px] border-t pt-16 md:pt-24">
          <div className="srv-bento-card mb-16 grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
            <h2 className="font-display md:text-5.5xl text-primary text-4xl leading-tight font-light">
              What sets our digital <br />
              <span className="text-secondary font-serif italic">crafting apart.</span>
            </h2>
            <p className="text-secondary max-w-lg text-sm leading-relaxed font-light">
              We avoid templates, heavy code wrappers, and layout clutter. NextCreavo establishes solid performance
              profiles so your site converts visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Gauge,
                title: 'Edge-Caching Speeds',
                desc: 'We deliver compiled files through globally distributed static edge layers, guaranteeing rapid visual displays.',
              },
              {
                icon: Layers,
                title: 'Decoupled Architectures',
                desc: 'Protect critical transactions by splitting presentation panels safely away from backend database nodes.',
              },
              {
                icon: ShieldCheck,
                title: 'Contrast Accessibility',
                desc: 'Every contrast value matches high corporate compliance, making readability comfortable for everyone.',
              },
            ].map((card, idx) => {
              const SvgIcon = card.icon
              return (
                <div
                  key={idx}
                  className="srv-bento-card bg-secondary/35 border-border-primary/60 rounded-2.5xl border p-8 transition-transform duration-500 hover:scale-[1.01]"
                >
                  <span className="bg-primary border-border-primary/50 text-secondary mb-6 inline-block rounded-xl border p-3">
                    <SvgIcon className="text-secondary h-5 w-5" />
                  </span>
                  <h3 className="font-display text-primary mb-3 text-lg font-semibold">{card.title}</h3>
                  <p className="text-secondary text-xs leading-relaxed font-light">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
