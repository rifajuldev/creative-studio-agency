'use client'

import {
  ArrowRight,
  BarChart,
  Battery,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  Facebook,
  FileText,
  Heart,
  Infinity as InfinityIcon,
  Instagram,
  Layers,
  MessageCircle,
  PenTool,
  PhoneCall,
  RefreshCcw,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Wifi,
  X,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { createElement, useEffect, useRef, useState } from 'react'

const services = [
  {
    icon: Facebook,
    title: 'Facebook Ads Campaign Setup',
    desc: 'Expert pixel structure, catalog mapping, and high-CTR custom campaign architectures.',
    category: 'strategy',
    badge: 'Meta Core',
    deliverables: [
      'Complete campaign structure audit and target audience alignments',
      'Dynamic Product Ads (DPA) setup & advanced catalog integration',
      'Broad, interest-based, and custom custom audiences mapping',
      'Direct-response funnel setup designed for scaling ROAS',
    ],
    impact:
      "Forms the bedrock of all scaling efforts, ensuring Meta's machine learning optimizes for real sales from day one.",
  },
  {
    icon: Instagram,
    title: 'Instagram Ads Management',
    desc: 'Visual, immersive Stories, Reels, and Feed formats engineered to convert feed scrollers.',
    category: 'strategy',
    badge: 'Mobile-First',
    deliverables: [
      'Reels & Stories mobile-first specific formatting alignment',
      'Creator-style natural content positioning & influencer integration',
      'Interactive formats (polling, shopping tags) campaign setups',
      'High-engagement feed placement strategy and copy alignment',
    ],
    impact:
      'Captures high-intent social traffic in their natural browsing environments, turning casual views into active interest.',
  },
  {
    icon: Search,
    title: 'Audience Research & Targeting',
    desc: 'Demographic auditing and psychographic modeling to laser-target highest-lifetime-value buyers.',
    category: 'strategy',
    badge: 'Precision',
    deliverables: [
      'Deep competitor analysis & market opportunity intelligence mapping',
      'LTV & repeat buyer profiling using existing customer data',
      'Detailed psychographic and interest stacking configurations',
      'Audience overlap checks to prevent budget self-cannibalization',
    ],
    impact:
      'Stops budget waste by ensuring your ad dollars only show ads to the exact groups highly primed to purchase.',
  },
  {
    icon: PenTool,
    title: 'Ad Creative Design & Copywriting',
    desc: 'Direct-response ad copy combined with custom attention-grabbing visual design layouts.',
    category: 'creative',
    badge: 'High-CTR',
    deliverables: [
      'High-performance hook-oriented ad copywriting',
      'Direct-response visual layout design (static, GIFs, motion graphics)',
      'User-Generated Content (UGC) scripting and visual editing',
      'Continuous rapid creative testing iteration frameworks',
    ],
    impact: 'The absolute #1 lever for lowering CPA. Incredible creative grabs immediate attention and forces clicks.',
  },
  {
    icon: RefreshCcw,
    title: 'Retargeting Ads Campaigns',
    desc: 'Capture lost revenue with custom high-retention sequential social proof sequences.',
    category: 'strategy',
    badge: 'Revenue Saver',
    deliverables: [
      'Sequential funnel retargeting (3-day, 7-day, 14-day customer journeys)',
      'Overcoming buyer friction with custom dynamic social proof ads',
      'Cart abandonment recovery and exclusive offer campaign setups',
      'Frequency capping structures to eliminate ad fatigue',
    ],
    impact: 'Recovers up to 40% of lost cart visits, capturing highly motivated buyers who just needed a final nudge.',
  },
  {
    icon: Target,
    title: 'Conversion Tracking Setup',
    desc: 'Secure multi-step conversion events configurations to assure pristine reporting data.',
    category: 'technical',
    badge: 'Data-Driven',
    deliverables: [
      'Full web event configuration & custom parameters optimization',
      'Offline conversions mapping and CRM system integrations',
      'Accurate value attribution modeling diagnostics',
      'Multi-touch funnel alignment across devices',
    ],
    impact:
      'Provides the precise tracking required to prove exactly which ads are generating revenue and which need work.',
  },
  {
    icon: Users,
    title: 'Lookalike Audience Creation',
    desc: 'Leverage advanced Meta AI algorithms to multiply scale with mirroring profiles.',
    category: 'creative',
    badge: 'AI-Powered',
    deliverables: [
      'Value-Based Lookalikes targeting high-value active customer lists',
      'Engagement-based lookalike expansion (video viewers, page interactions)',
      'Multi-percentage tests (1%, 2%, 5%) for broad scale expansion',
      'Custom excluded-lists hygiene setup to target new users only',
    ],
    impact:
      'Expands your reach to millions of high-potential prospects who share identical behavioral traits with existing buyers.',
  },
  {
    icon: BarChart,
    title: 'A/B Testing & Optimization',
    desc: 'Pragmatic multivariate testing models to continuously drive down cost per conversion.',
    category: 'technical',
    badge: 'Scientific',
    deliverables: [
      'Rigorous multivariate split testing of headlines, hooks, & landing pages',
      'Budget pacing optimization (CBO vs ABO tactical checks)',
      'Audience & placement level cost performance monitoring',
      'Data-driven weekly scaling or pausing execution models',
    ],
    impact:
      'Ensures your strategy is based on strict, undeniable data instead of gut-feelings or guesses, boosting efficiency.',
  },
  {
    icon: FileText,
    title: 'Performance Reporting',
    desc: 'Clean, transparent live reporting analytics paired with high-impact video overviews.',
    category: 'creative',
    badge: 'Transparent',
    deliverables: [
      'Live interactive data dashboards (updated in real-time)',
      'Loom video walk-throughs breaking down exact weekly findings',
      'Clear return on ad spend (ROAS) & customer acquisition cost (CAC) reports',
      'Direct access to your dedicated Slack agency team for fast chat',
    ],
    impact:
      'Provides ultimate transparency, letting you know exactly where every single dollar is invested and what it yields.',
  },
  {
    icon: Code,
    title: 'Pixel Setup & Integration',
    desc: 'Advanced Conversions API (CAPI) server integrations to bypass modern cookie limitations.',
    category: 'technical',
    badge: 'Server-Side',
    deliverables: [
      'Meta Pixel installation and complete duplicate event deduction',
      'Server-Side Conversions API setup via Shopify, WooCommerce, or Custom',
      'Bypassing modern browser cookie & iOS 14+ reporting blocks',
      "Signal Quality Score optimizations to improve Meta's matching matching",
    ],
    impact: 'Future-proofs your data pipelines, preserving high matching quality scores and lower advertising costs.',
  },
]

export default function FacebookAdsService() {
  const router = useRouter()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mockupTab, setMockupTab] = useState<'analytics' | 'creative'>('analytics')
  const [activeStep, setActiveStep] = useState(0)
  const [isPlayingProcess, setIsPlayingProcess] = useState(true)
  const [isProcessInView, setIsProcessInView] = useState(false)
  const [activeCategory, setActiveCategory] = useState<'all' | 'strategy' | 'creative' | 'technical'>('all')
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const processSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const element = processSectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsProcessInView(entry.isIntersecting)
      },
      { threshold: 0.15 }
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isProcessInView || !isPlayingProcess) return

    // Acceleration of steps: Audit (6s) -> Strategy (4.5s) -> Launch (3s) -> Optimize (2s) -> Scale (1s)
    const stepDurations = [6000, 4500, 3000, 2000, 1000]
    const duration = stepDurations[activeStep] || 4000

    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, duration)

    return () => clearTimeout(timer)
  }, [isProcessInView, isPlayingProcess, activeStep])

  return (
    <div className="min-h-screen w-full bg-slate-50 pb-20 font-sans text-slate-900 transition-colors duration-500 selection:bg-[#1877F2]/30 selection:text-white dark:bg-[#06080b] dark:text-white">
      {/* Sub-Header */}
      <div className="sticky top-[80px] z-40 w-full border-b border-slate-200 bg-slate-50/80 px-6 py-4 backdrop-blur-md transition-colors duration-500 md:px-12 dark:border-stone-800 dark:bg-[#06080b]/80">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <button
            onClick={() => router.push('/services/marketing')}
            className="flex cursor-pointer items-center gap-2 text-xs font-bold tracking-widest text-slate-500 uppercase transition-colors hover:text-[#1877F2] dark:text-stone-400 dark:hover:text-[#4a7cf6]"
          >
            <ChevronLeft size={14} />
            Back to Marketing
          </button>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#1877F2]" />
            <span className="text-[10px] font-bold tracking-widest text-[#1877F2] uppercase">AdThrive Ads Agency</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F7FF] to-slate-50 px-6 pt-16 pb-20 transition-colors duration-500 md:px-12 md:pt-24 dark:from-[#0a0c10] dark:to-[#06080b]">
        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-7">
            <div className="flex w-fit items-center gap-2 rounded-full border border-transparent bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1877F2] dark:border-[#1877F2]/20 dark:bg-[#1877F2]/10 dark:text-[#4a7cf6]">
              <InfinityIcon size={20} />
              Meta Business Partner
            </div>

            <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 transition-colors sm:text-5xl lg:text-[3.5rem] dark:text-white">
              Get More Leads.
              <br />
              More Sales.
              <br />
              <span className="text-[#1877F2] dark:text-[#4a7cf6]">
                Grow Your Business
                <br />
                with Facebook Ads.
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-slate-600 transition-colors dark:text-stone-400">
              We create, manage & scale high-performing Facebook & Instagram ads that bring qualified leads, increase
              sales and maximize ROI.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                'More Qualified Leads',
                'Expert Ad Management',
                'Lower Cost Per Lead',
                'Audience Targeting',
                'Higher ROI',
                'Conversion Tracking',
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors dark:text-stone-300"
                >
                  <CheckCircle2 size={18} className="text-[#1877F2] dark:text-[#4a7cf6]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="flex items-center gap-2 rounded-xl bg-[#1877F2] px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 dark:hover:bg-[#4a7cf6]/90">
                Get Free Ads Audit <ExternalLink size={18} />
              </button>
              <button className="flex items-center gap-2 rounded-xl border-2 border-[#1877F2] bg-white px-8 py-4 font-bold text-[#1877F2] transition-colors hover:bg-blue-50 dark:border-[#4a7cf6] dark:bg-[#0e1117] dark:text-[#4a7cf6] dark:hover:bg-[#4a7cf6]/10">
                <PhoneCall size={18} /> Book Strategy Call
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 border-t border-slate-200 pt-8 transition-colors dark:border-stone-800">
              <div className="flex items-center gap-3">
                <InfinityIcon size={28} className="text-[#1877F2] dark:text-[#4a7cf6]" />
                <div className="text-xs leading-tight font-bold text-slate-900 dark:text-white">
                  Meta
                  <br />
                  <span className="font-normal text-slate-500 dark:text-stone-400">Business Partner</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#1877F2] dark:bg-blue-900/30 dark:text-[#4a7cf6]">
                  <Facebook size={20} fill="currentColor" className="border-none" />
                </div>
                <div className="text-xs leading-tight font-bold text-slate-900 dark:text-white">
                  700+
                  <br />
                  <span className="font-normal text-slate-500 dark:text-stone-400">Successful Campaigns</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <div className="text-xs leading-tight font-bold text-slate-900 dark:text-white">
                  <br />
                  <span className="font-normal text-slate-500 dark:text-stone-400">on Star Rated</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={28} className="text-green-500 dark:text-emerald-400" />
                <div className="text-xs leading-tight font-bold text-slate-900 dark:text-white">
                  100%
                  <br />
                  <span className="font-normal text-slate-500 dark:text-stone-400">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Elegant Interactive Smartphone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 flex w-full justify-center lg:col-span-5"
          >
            {/* Realistic Smartphone Frame Container (Selector 1) */}
            <div className="group relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[3.5rem] border-[6px] border-slate-200/95 bg-[#0d121f] p-3 shadow-[0_30px_70px_-15px_rgba(24,119,242,0.18)] ring-1 ring-slate-400/20 transition-all duration-500 hover:scale-[1.03] dark:border-[#1e293b] dark:bg-[#07090e] dark:shadow-[0_35px_90px_-10px_rgba(0,0,0,0.85)] dark:ring-white/15">
              {/* Speaker Ear Piece & Camera Notch (Dynamic Island - Selector 4) */}
              <div className="absolute top-5 left-1/2 z-50 flex h-6 w-28 -translate-x-1/2 items-center justify-between rounded-full bg-[#030508] px-3 shadow-[inset_0_1px_3px_rgba(255,255,255,0.12)] ring-1 ring-white/10">
                <div className="flex h-2 w-2 items-center justify-center overflow-hidden rounded-full border border-[#334155]/60 bg-[#1e293b]">
                  <div className="h-1 w-1 animate-pulse rounded-full bg-indigo-500/80" />
                </div>
                <div className="h-0.5 w-10 rounded-full border-t border-white/5 bg-slate-900/90" />
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </div>

              {/* Smartphone Screen Canvas (Selector 2) */}
              <div className="relative z-10 flex w-full flex-col overflow-hidden rounded-[2.8rem] bg-slate-50 pt-8 pb-4 shadow-inner transition-colors duration-500 dark:bg-[#06080d]">
                {/* Status Bar */}
                <div className="z-40 flex items-center justify-between px-6 pt-1 pb-2 font-mono text-[10px] font-bold text-slate-500 select-none dark:text-stone-400">
                  <span className="tracking-tight">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <Wifi size={10} className="stroke-[2.5]" />
                    <span className="text-[9px]">5G</span>
                    <Battery size={12} className="stroke-[2.5]" />
                  </div>
                </div>

                {/* Phone App Frame Header */}
                <div className="z-30 flex items-center justify-between border-b border-slate-100 bg-white/80 px-5 py-3 backdrop-blur-md transition-colors dark:border-stone-900/60 dark:bg-[#0a0d14]/80">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#1877F2] to-blue-600 text-white shadow-md shadow-blue-500/20">
                      <Facebook size={11} fill="currentColor" className="border-none" />
                    </div>
                    <span className="text-[11px] font-black tracking-tight text-slate-800 dark:text-slate-100">
                      Meta Suite
                    </span>
                  </div>

                  {/* Inner App Tab Selector */}
                  <div className="flex rounded-full border border-slate-200/20 bg-slate-100/80 p-0.5 dark:border-stone-800/40 dark:bg-[#121622]">
                    <button
                      onClick={() => setMockupTab('analytics')}
                      className={`cursor-pointer rounded-full px-3 py-1 text-[9px] font-black transition-all duration-300 ${mockupTab === 'analytics' ? 'bg-gradient-to-r from-[#1877F2] to-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:text-stone-400 dark:hover:text-white'}`}
                    >
                      Stats
                    </button>
                    <button
                      onClick={() => setMockupTab('creative')}
                      className={`cursor-pointer rounded-full px-3 py-1 text-[9px] font-black transition-all duration-300 ${mockupTab === 'creative' ? 'bg-gradient-to-r from-[#1877F2] to-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800 dark:text-stone-400 dark:hover:text-white'}`}
                    >
                      Creative
                    </button>
                  </div>
                </div>

                {/* App Screen Content area */}
                <div className="max-h-[425px] min-h-[385px] flex-1 scrollbar-none overflow-y-auto bg-slate-50/40 px-4 py-4 dark:bg-[#05070c]">
                  <AnimatePresence mode="wait">
                    {mockupTab === 'analytics' ? (
                      <motion.div
                        key="analytics"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        {/* ROAS Banner */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1877F2] via-blue-600 to-indigo-700 p-4.5 text-white shadow-[0_12px_25px_-5px_rgba(24,119,242,0.3)]">
                          <div className="pointer-events-none absolute top-0 right-0 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                          <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-blue-400/10 blur-xl" />
                          <div className="relative z-10 flex items-center justify-between">
                            <div>
                              <div className="mb-1 text-[8px] font-extrabold tracking-[0.15em] text-blue-100/80 uppercase">
                                Average Campaign ROAS
                              </div>
                              <div className="font-mono text-3xl leading-none font-black tracking-tight text-white">
                                8.65x
                              </div>
                            </div>
                            <div className="flex flex-col items-end text-right">
                              <span className="flex animate-pulse items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-400/25 px-2.5 py-0.5 text-[9px] font-black text-emerald-300 shadow-sm">
                                ▲ 152%
                              </span>
                              <div className="mt-1.5 text-[8px] font-medium text-blue-100/70">vs last month</div>
                            </div>
                          </div>
                        </div>

                        {/* Compact Mobile Stats */}
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { title: 'Leads Gen', val: '12,850', trend: '▲ 64.2%' },
                            { title: 'Ad Impression', val: '215,430', trend: '▲ 78.6%' },
                            { title: 'Conversions', val: '1,243', trend: '▲ 72.5%' },
                            { title: 'CPA Avg.', val: '$3.45', trend: '▼ 32.6%' },
                          ].map((stat, sIdx) => (
                            <div
                              key={sIdx}
                              className="rounded-xl border border-slate-100/90 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-blue-500/20 hover:shadow-md dark:border-stone-800/95 dark:bg-[#0d1017]"
                            >
                              <div className="mb-1 text-[8px] font-extrabold tracking-wider text-slate-400 uppercase dark:text-stone-500">
                                {stat.title}
                              </div>
                              <div className="mb-1.5 font-mono text-base leading-none font-black tracking-tight text-slate-800 dark:text-slate-100">
                                {stat.val}
                              </div>
                              <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[8px] font-extrabold text-emerald-500">
                                {stat.trend}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Small Chart */}
                        <div className="rounded-xl border border-slate-100/90 bg-white p-4 shadow-sm dark:border-stone-800/95 dark:bg-[#0d1017]">
                          <div className="mb-4 flex items-center justify-between">
                            <span className="text-[10px] font-black tracking-wider text-slate-700 uppercase dark:text-stone-300">
                              Growth Performance
                            </span>
                            <div className="flex gap-2 text-[8px] font-extrabold">
                              <span className="flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#1877F2]"></span> Leads
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]"></span> Conv.
                              </span>
                            </div>
                          </div>

                          <div className="relative h-24 w-full border-b border-l border-slate-200/40 dark:border-stone-800/40">
                            <svg className="h-full w-full" viewBox="0 0 300 80" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#1877F2" stopOpacity="0.25" />
                                  <stop offset="100%" stopColor="#1877F2" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="greenGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              {/* Filled Area Gradients */}
                              <path
                                d="M0,65 Q15,45 30,55 T60,35 T90,45 T120,20 T150,30 T180,5 T210,25 T240,15 T270,30 T300,5 L300,80 L0,80 Z"
                                fill="url(#blueGrad)"
                              />
                              <path
                                d="M0,75 Q15,65 30,70 T60,55 T90,60 T120,45 T150,50 T180,30 T210,40 T240,35 T270,50 T300,25 L300,80 L0,80 Z"
                                fill="url(#greenGrad)"
                              />
                              {/* Stroke Paths */}
                              <path
                                d="M0,65 Q15,45 30,55 T60,35 T90,45 T120,20 T150,30 T180,5 T210,25 T240,15 T270,30 T300,5"
                                fill="none"
                                stroke="#1877F2"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M0,75 Q15,65 30,70 T60,55 T90,60 T120,45 T150,50 T180,30 T210,40 T240,35 T270,50 T300,25"
                                fill="none"
                                stroke="#10B981"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="creative"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-3"
                      >
                        {/* Mock Instagram/Facebook sponsored post */}
                        <div className="overflow-hidden rounded-2xl border border-slate-100/80 bg-white shadow-sm transition-colors dark:border-stone-800/80 dark:bg-[#0d1017]">
                          {/* Feed Header */}
                          <div className="flex items-center justify-between border-b border-slate-100/80 p-3.5 dark:border-stone-800/50">
                            <div className="flex items-center gap-2.5">
                              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-500 via-[#1877F2] to-indigo-600 p-[1.5px] shadow-sm">
                                <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-[10px] font-black tracking-tighter text-[#1877F2] dark:bg-[#0d1017]">
                                  AT
                                </div>
                              </div>
                              <div>
                                <div className="flex items-center gap-1 text-[10px] leading-none font-black text-slate-800 dark:text-slate-100">
                                  adthrive.agency
                                  <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-[#1877F2] text-[7px] font-bold text-white">
                                    ✓
                                  </span>
                                </div>
                                <div className="mt-0.5 text-[8px] font-medium text-slate-400 dark:text-stone-500">
                                  Sponsored
                                </div>
                              </div>
                            </div>
                            <span className="cursor-pointer text-xs font-bold text-slate-400 hover:text-slate-600 dark:text-stone-500">
                              •••
                            </span>
                          </div>

                          {/* Feed Image/Video Screen */}
                          <div className="relative flex aspect-video flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0e172a] via-[#1e293b] to-[#0f172a] p-4.5">
                            <div className="pointer-events-none absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1877F2]/20 blur-3xl" />
                            <div className="absolute inset-0 bg-[#1877F2]/5 mix-blend-overlay" />
                            <div className="relative z-10 text-right">
                              <span className="rounded-full bg-[#1877F2] px-2.5 py-0.5 text-[7px] font-black tracking-[0.15em] text-white uppercase shadow-sm">
                                Scale Active
                              </span>
                            </div>

                            <div className="relative z-10 space-y-1">
                              <span className="block text-[9px] font-extrabold tracking-[0.2em] text-emerald-400 uppercase">
                                PROVEN METASUITE SYSTEM
                              </span>
                              <h4 className="text-lg leading-tight font-black tracking-tight text-white">
                                3.8x Average ROAS
                                <br />
                                For Brand Scale.
                              </h4>
                            </div>

                            <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-2 text-[8px] font-bold text-white/95">
                              <span className="opacity-80">Audience: Broad Lookalike</span>
                              <span className="font-mono text-emerald-400">CTR: 4.82%</span>
                            </div>
                          </div>

                          {/* Interactive Action Bar */}
                          <div className="flex items-center justify-between border-t border-slate-100 bg-[#f8fafc] px-4 py-3 dark:border-stone-800/50 dark:bg-[#0d121c]/60">
                            <div>
                              <span className="mb-0.5 block text-[7px] font-extrabold tracking-widest text-slate-400 uppercase dark:text-stone-500">
                                ADTHRIVE AGENCY
                              </span>
                              <span className="text-[10px] font-black tracking-tight text-slate-800 dark:text-slate-100">
                                Explosive eCommerce Scaling
                              </span>
                            </div>
                            <button className="cursor-pointer rounded-lg bg-gradient-to-r from-[#1877F2] to-blue-600 px-3.5 py-1.5 text-[9px] font-black tracking-wider text-white uppercase shadow-sm transition-all hover:from-blue-600 hover:to-blue-700">
                              Apply
                            </button>
                          </div>

                          {/* Feed Footer / Interactions */}
                          <div className="border-t border-slate-100/80 p-4 pt-3 font-sans text-[10px] text-slate-600 dark:border-stone-800/50 dark:text-stone-400">
                            <div className="mb-2.5 flex gap-4.5 text-slate-700 dark:text-stone-300">
                              <Heart
                                size={15}
                                className="cursor-pointer transition-transform hover:scale-115 hover:text-red-500"
                              />
                              <MessageCircle
                                size={15}
                                className="cursor-pointer transition-transform hover:scale-115 hover:text-[#1877F2]"
                              />
                              <Send
                                size={15}
                                className="cursor-pointer transition-transform hover:scale-115 hover:rotate-12"
                              />
                            </div>
                            <span className="font-black text-slate-800 dark:text-slate-100">1,482 likes</span>
                            <p className="mt-1.5 text-[9px] leading-relaxed text-slate-600 dark:text-stone-400">
                              <span className="mr-1.5 font-sans font-black text-slate-800 dark:text-slate-100">
                                adthrive.agency
                              </span>
                              We specialize in scaling ecommerce brands with our high-performing Meta suite.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Phone Home Indicator Bar */}
                <div className="mx-auto mt-2 h-1 w-32 rounded-full bg-slate-300 transition-colors dark:bg-stone-800" />
              </div>

              {/* Specular glare glass reflection & physical side buttons overlay (Selector 3) */}
              <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden rounded-[3.25rem] border border-white/5">
                {/* Diagonal high-gloss light beam reflection */}
                <div className="pointer-events-none absolute -inset-[50%] rotate-[35deg] bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent transition-transform duration-1000 group-hover:translate-x-12 dark:via-white/[0.015]" />
                {/* Subtle edge metallic gleam */}
                <div className="pointer-events-none absolute inset-0.5 rounded-[3.15rem] border border-white/[0.08] dark:border-white/[0.03]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className="overflow-hidden bg-[#0A2254] px-6 py-20 text-white transition-colors duration-500 md:px-12 dark:bg-[#071330]">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 xl:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="mb-6 text-3xl leading-tight font-bold tracking-tight md:text-5xl">
              Real Results. Real Growth.
            </h2>
            <p className="mb-12 text-lg font-medium text-blue-200">
              We deliver measurable results that drive real business impact.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-transparent bg-white p-6 text-center shadow-lg transition-colors dark:border-stone-800 dark:bg-[#0e1117]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-[#1877F2] dark:border-blue-900/50 dark:bg-blue-900/30 dark:text-[#4a7cf6]">
                  <TrendingUp size={24} />
                </div>
                <div className="mb-2 text-3xl font-extrabold text-[#1877F2] dark:text-[#4a7cf6]">350%</div>
                <div className="text-[11px] leading-snug font-bold tracking-widest text-slate-600 uppercase dark:text-stone-400">
                  Increase in Leads
                </div>
              </div>
              <div className="rounded-2xl border border-transparent bg-white p-6 text-center shadow-lg transition-colors dark:border-stone-800 dark:bg-[#0e1117]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50 text-[#10B981] dark:border-emerald-900/50 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <span className="text-xl font-bold">$</span>
                </div>
                <div className="mb-2 text-3xl font-extrabold text-[#10B981] dark:text-emerald-400">40%</div>
                <div className="text-[11px] leading-snug font-bold tracking-widest text-slate-600 uppercase dark:text-stone-400">
                  Lower Cost Per Lead
                </div>
              </div>
              <div className="rounded-2xl border border-transparent bg-white p-6 text-center shadow-lg transition-colors dark:border-stone-800 dark:bg-[#0e1117]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-100 bg-yellow-50 text-[#F59E0B] dark:border-yellow-900/50 dark:bg-yellow-900/30 dark:text-amber-400">
                  <BarChart size={24} />
                </div>
                <div className="mb-2 text-3xl font-extrabold text-[#F59E0B] dark:text-amber-400">220%</div>
                <div className="text-[11px] leading-snug font-bold tracking-widest text-slate-600 uppercase dark:text-stone-400">
                  Increase in Conversion Rate
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-transparent bg-white p-6 text-center shadow-lg transition-colors dark:border-stone-800 dark:bg-[#0e1117]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50 text-[#EF4444] dark:border-rose-900/50 dark:bg-rose-900/30 dark:text-rose-400">
                  <Users size={24} />
                </div>
                <div className="mt-1 mb-2 text-xl font-extrabold text-[#EF4444] dark:text-rose-400">Thousands</div>
                <div className="text-[11px] leading-snug font-bold tracking-widest text-slate-600 uppercase dark:text-stone-400">
                  Of Qualified Leads Generated
                </div>
              </div>
            </div>
          </div>

          {/* Right - Before & After */}
          <div className="relative flex flex-col items-center gap-0 sm:flex-row sm:gap-4">
            {/* Before Card */}
            <div className="relative z-10 w-full flex-1 rounded-[2rem] border border-slate-100 bg-white p-8 text-slate-900 shadow-2xl transition-colors dark:border-stone-800 dark:bg-[#0e1117] dark:text-white">
              <h3 className="mb-6 rounded-lg bg-slate-50 py-2 text-center text-sm font-bold text-slate-800 dark:bg-stone-800/50 dark:text-stone-200">
                Before Facebook Ads
              </h3>
              <div className="mb-6 flex justify-between">
                <div>
                  <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase dark:text-stone-500">
                    Leads
                  </div>
                  <div className="text-3xl font-extrabold text-slate-800 dark:text-white">120</div>
                </div>
                <div className="text-right">
                  <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase dark:text-stone-500">
                    Cost Per Lead
                  </div>
                  <div className="text-3xl font-extrabold text-slate-800 dark:text-white">$12.45</div>
                </div>
              </div>
              <svg className="h-24 w-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                <path
                  d="M0,40 Q20,30 40,50 T80,20 T120,40 T160,30 T200,45"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Center Arrow */}
            <div className="z-20 -my-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-[#0A2254] bg-[#1877F2] text-white shadow-xl transition-colors sm:-mx-6 sm:my-0 dark:border-[#071330] dark:bg-[#4a7cf6]">
              <ArrowRight size={24} strokeWidth={3} />
            </div>

            {/* After Card */}
            <div className="relative z-10 w-full flex-1 rounded-[2rem] border border-slate-100 bg-white p-8 text-slate-900 shadow-2xl transition-colors dark:border-stone-800 dark:bg-[#0e1117] dark:text-white">
              <h3 className="mb-6 rounded-lg bg-green-50 py-2 text-center text-sm font-bold text-[#10B981] dark:bg-emerald-900/20 dark:text-emerald-400">
                After Facebook Ads
              </h3>
              <div className="mb-6 flex justify-between">
                <div>
                  <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase dark:text-stone-500">
                    Leads
                  </div>
                  <div className="text-3xl font-extrabold text-[#10B981] dark:text-emerald-400">480</div>
                </div>
                <div className="text-right">
                  <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase dark:text-stone-500">
                    Cost Per Lead
                  </div>
                  <div className="text-3xl font-extrabold text-[#10B981] dark:text-emerald-400">$4.21</div>
                </div>
              </div>
              <svg className="h-24 w-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                <path
                  d="M0,50 Q20,40 40,45 T80,30 T120,20 T160,10 T200,5"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative overflow-hidden bg-slate-50 px-6 py-24 transition-colors duration-500 md:px-12 dark:bg-[#040609]">
        {/* Subtle abstract glow spots */}
        <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-indigo-500/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 text-xs font-bold tracking-[0.25em] text-[#1877F2] uppercase dark:text-[#4a7cf6]"
            >
              Our Services
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-[2.75rem] dark:text-white"
            >
              Complete Meta Ads Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mx-auto mb-10 max-w-2xl text-lg text-slate-500 dark:text-stone-400"
            >
              End-to-end, high-performance advertising solutions custom-built to aggressively grow and scale your brand.
            </motion.p>

            {/* Category Filter Pills (Premium Interactive UX) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-200/50 bg-slate-100/80 p-1.5 backdrop-blur-md sm:gap-3 dark:border-stone-800/60 dark:bg-[#0c101b]/60"
            >
              {[
                { id: 'all', label: 'All Solutions', icon: Layers },
                { id: 'strategy', label: 'Strategy & Growth', icon: Rocket },
                { id: 'creative', label: 'Creative & Copy', icon: PenTool },
                { id: 'technical', label: 'Pixel & Tracking', icon: Code },
              ].map((tab) => {
                const TabIcon = tab.icon
                const isActive = activeCategory === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as any)}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl px-4.5 py-2.5 text-xs font-black tracking-wider uppercase transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#1877F2] to-blue-600 text-white shadow-md shadow-blue-500/10'
                        : 'text-slate-500 hover:bg-slate-200/50 hover:text-slate-800 dark:text-stone-400 dark:hover:bg-stone-900/40 dark:hover:text-white'
                    }`}
                  >
                    <TabIcon size={14} />
                    {tab.label}
                  </button>
                )
              })}
            </motion.div>
          </div>

          {/* Filtered Services Grid */}
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {(() => {
              const list = [
                {
                  icon: Facebook,
                  title: 'Facebook Ads Campaign Setup',
                  desc: 'Expert pixel structure, catalog mapping, and high-CTR custom campaign architectures.',
                  category: 'strategy',
                  badge: 'Meta Core',
                  deliverables: [
                    'Complete campaign structure audit and target audience alignments',
                    'Dynamic Product Ads (DPA) setup & advanced catalog integration',
                    'Broad, interest-based, and custom custom audiences mapping',
                    'Direct-response funnel setup designed for scaling ROAS',
                  ],
                  impact:
                    "Forms the bedrock of all scaling efforts, ensuring Meta's machine learning optimizes for real sales from day one.",
                },
                {
                  icon: Instagram,
                  title: 'Instagram Ads Management',
                  desc: 'Visual, immersive Stories, Reels, and Feed formats engineered to convert feed scrollers.',
                  category: 'strategy',
                  badge: 'Mobile-First',
                  deliverables: [
                    'Reels & Stories mobile-first specific formatting alignment',
                    'Creator-style natural content positioning & influencer integration',
                    'Interactive formats (polling, shopping tags) campaign setups',
                    'High-engagement feed placement strategy and copy alignment',
                  ],
                  impact:
                    'Captures high-intent social traffic in their natural browsing environments, turning casual views into active interest.',
                },
                {
                  icon: Search,
                  title: 'Audience Research & Targeting',
                  desc: 'Demographic auditing and psychographic modeling to laser-target highest-lifetime-value buyers.',
                  category: 'strategy',
                  badge: 'Precision',
                  deliverables: [
                    'Deep competitor analysis & market opportunity intelligence mapping',
                    'LTV & repeat buyer profiling using existing customer data',
                    'Detailed psychographic and interest stacking configurations',
                    'Audience overlap checks to prevent budget self-cannibalization',
                  ],
                  impact:
                    'Stops budget waste by ensuring your ad dollars only show ads to the exact groups highly primed to purchase.',
                },
                {
                  icon: PenTool,
                  title: 'Ad Creative Design & Copywriting',
                  desc: 'Direct-response ad copy combined with custom attention-grabbing visual design layouts.',
                  category: 'creative',
                  badge: 'High-CTR',
                  deliverables: [
                    'High-performance hook-oriented ad copywriting',
                    'Direct-response visual layout design (static, GIFs, motion graphics)',
                    'User-Generated Content (UGC) scripting and visual editing',
                    'Continuous rapid creative testing iteration frameworks',
                  ],
                  impact:
                    'The absolute #1 lever for lowering CPA. Incredible creative grabs immediate attention and forces clicks.',
                },
                {
                  icon: RefreshCcw,
                  title: 'Retargeting Ads Campaigns',
                  desc: 'Capture lost revenue with custom high-retention sequential social proof sequences.',
                  category: 'strategy',
                  badge: 'Revenue Saver',
                  deliverables: [
                    'Sequential funnel retargeting (3-day, 7-day, 14-day customer journeys)',
                    'Overcoming buyer friction with custom dynamic social proof ads',
                    'Cart abandonment recovery and exclusive offer campaign setups',
                    'Frequency capping structures to eliminate ad fatigue',
                  ],
                  impact:
                    'Recovers up to 40% of lost cart visits, capturing highly motivated buyers who just needed a final nudge.',
                },
                {
                  icon: Target,
                  title: 'Conversion Tracking Setup',
                  desc: 'Secure multi-step conversion events configurations to assure pristine reporting data.',
                  category: 'technical',
                  badge: 'Data-Driven',
                  deliverables: [
                    'Full web event configuration & custom parameters optimization',
                    'Offline conversions mapping and CRM system integrations',
                    'Accurate value attribution modeling diagnostics',
                    'Multi-touch funnel alignment across devices',
                  ],
                  impact:
                    'Provides the precise tracking required to prove exactly which ads are generating revenue and which need work.',
                },
                {
                  icon: Users,
                  title: 'Lookalike Audience Creation',
                  desc: 'Leverage advanced Meta AI algorithms to multiply scale with mirroring profiles.',
                  category: 'creative',
                  badge: 'AI-Powered',
                  deliverables: [
                    'Value-Based Lookalikes targeting high-value active customer lists',
                    'Engagement-based lookalike expansion (video viewers, page interactions)',
                    'Multi-percentage tests (1%, 2%, 5%) for broad scale expansion',
                    'Custom excluded-lists hygiene setup to target new users only',
                  ],
                  impact:
                    'Expands your reach to millions of high-potential prospects who share identical behavioral traits with existing buyers.',
                },
                {
                  icon: BarChart,
                  title: 'A/B Testing & Optimization',
                  desc: 'Pragmatic multivariate testing models to continuously drive down cost per conversion.',
                  category: 'technical',
                  badge: 'Scientific',
                  deliverables: [
                    'Rigorous multivariate split testing of headlines, hooks, & landing pages',
                    'Budget pacing optimization (CBO vs ABO tactical checks)',
                    'Audience & placement level cost performance monitoring',
                    'Data-driven weekly scaling or pausing execution models',
                  ],
                  impact:
                    'Ensures your strategy is based on strict, undeniable data instead of gut-feelings or guesses, boosting efficiency.',
                },
                {
                  icon: FileText,
                  title: 'Performance Reporting',
                  desc: 'Clean, transparent live reporting analytics paired with high-impact video overviews.',
                  category: 'creative',
                  badge: 'Transparent',
                  deliverables: [
                    'Live interactive data dashboards (updated in real-time)',
                    'Loom video walk-throughs breaking down exact weekly findings',
                    'Clear return on ad spend (ROAS) & customer acquisition cost (CAC) reports',
                    'Direct access to your dedicated Slack agency team for fast chat',
                  ],
                  impact:
                    'Provides ultimate transparency, letting you know exactly where every single dollar is invested and what it yields.',
                },
                {
                  icon: Code,
                  title: 'Pixel Setup & Integration',
                  desc: 'Advanced Conversions API (CAPI) server integrations to bypass modern cookie limitations.',
                  category: 'technical',
                  badge: 'Server-Side',
                  deliverables: [
                    'Meta Pixel installation and complete duplicate event deduction',
                    'Server-Side Conversions API setup via Shopify, WooCommerce, or Custom',
                    'Bypassing modern browser cookie & iOS 14+ reporting blocks',
                    "Signal Quality Score optimizations to improve Meta's matching matching",
                  ],
                  impact:
                    'Future-proofs your data pipelines, preserving high matching quality scores and lower advertising costs.',
                },
              ]

              const filtered = list.filter((srv) => activeCategory === 'all' || srv.category === activeCategory)

              return filtered.map((srv, i) => {
                const originalIdx = list.findIndex((item) => item.title === srv.title)
                return (
                  <motion.div
                    key={srv.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedService(originalIdx)}
                    className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/50 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_20px_50px_rgba(24,119,242,0.06)] dark:border-[#1e293b]/60 dark:bg-[#0c101b]/80 dark:hover:border-blue-500/30 dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
                  >
                    {/* Cinematic top glowing line */}
                    <div className="absolute top-0 right-0 left-0 h-[3px] origin-left scale-x-0 transform bg-gradient-to-r from-[#1877F2] to-indigo-500 transition-transform duration-300 group-hover:scale-x-100" />

                    <div>
                      <div className="mb-6 flex items-start justify-between">
                        {/* Icon sphere */}
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100/80 bg-slate-50 text-[#1877F2] shadow-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#1877F2] group-hover:to-blue-600 group-hover:text-white dark:border-stone-800 dark:bg-stone-900/60 dark:text-[#4a7cf6]">
                          <srv.icon size={22} className="transition-transform group-hover:scale-110" />
                        </div>

                        {/* Service badge */}
                        <span className="rounded-md border border-slate-200/20 bg-slate-100 px-2.5 py-1 text-[9px] font-extrabold text-slate-500 uppercase dark:border-stone-800/40 dark:bg-stone-900/80 dark:text-stone-400">
                          {srv.badge}
                        </span>
                      </div>

                      <h3 className="mb-3 text-sm leading-tight font-black whitespace-pre-line text-slate-800 transition-colors group-hover:text-[#1877F2] dark:text-stone-100 dark:group-hover:text-[#4a7cf6]">
                        {srv.title}
                      </h3>
                      <p className="mb-6 text-xs leading-relaxed font-medium text-slate-500 dark:text-stone-400">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 border-t border-slate-100/60 pt-3 text-[10px] font-extrabold tracking-widest text-slate-400 uppercase transition-colors group-hover:text-[#1877F2] dark:border-stone-800/40 dark:text-stone-500 dark:group-hover:text-[#4a7cf6]">
                      Explore Detail{' '}
                      <ArrowRight size={12} className="transform transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                )
              })
            })()}
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section
        ref={processSectionRef}
        className="relative overflow-hidden bg-white px-6 py-24 transition-colors duration-500 md:px-12 dark:bg-[#080a0e]"
      >
        {/* Decorative grid pattern background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#1877f2_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.015] dark:opacity-[0.03]" />

        <div className="mx-auto max-w-[1200px]">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-bold tracking-[0.25em] text-[#1877F2] uppercase dark:text-[#4a7cf6]">
              Our Process
            </span>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-slate-900 md:text-[2.75rem] dark:text-white">
              Our 5-Step Proven Road to Scale
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-500 dark:text-stone-400">
              A hyper-focused, scientific system designed to reliably acquire, nurture, and multiply your active
              customer base.
            </p>
          </div>

          {/* Stepper Selection Timeline Bar */}
          <div
            className="relative mx-auto mb-12 max-w-4xl"
            onMouseEnter={() => setIsPlayingProcess(false)}
            onMouseLeave={() => setIsPlayingProcess(true)}
          >
            {/* Progress background line */}
            <div className="absolute top-[2.25rem] right-[5%] left-[5%] z-0 h-1 rounded-full bg-slate-100 dark:bg-stone-800/80" />
            {/* Filled active blue status bar */}
            <motion.div
              className="absolute top-[2.25rem] left-[5%] z-0 h-1 rounded-full bg-gradient-to-r from-[#1877F2] to-indigo-500"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStep / 4) * 90}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />

            <div className="relative z-10 flex items-center justify-between">
              {[
                { step: '01', label: 'Audit' },
                { step: '02', label: 'Strategy' },
                { step: '03', label: 'Launch' },
                { step: '04', label: 'Optimize' },
                { step: '05', label: 'Scale' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="group flex cursor-pointer flex-col items-center border-none bg-transparent focus:outline-none"
                >
                  <motion.div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-300 sm:h-12 sm:w-12 sm:text-sm ${
                      activeStep === idx
                        ? 'border-[#1877F2] bg-[#1877F2] text-white shadow-lg shadow-blue-500/20'
                        : 'border-slate-200 bg-white text-slate-500 hover:border-[#1877F2]/50 hover:text-[#1877F2] dark:border-stone-800 dark:bg-[#0b0e14] dark:text-stone-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.step}
                  </motion.div>
                  <span
                    className={`mt-3 text-[10px] font-extrabold tracking-wider uppercase transition-colors duration-300 sm:text-xs ${activeStep === idx ? 'text-[#1877F2] dark:text-[#4a7cf6]' : 'text-slate-400 group-hover:text-slate-600 dark:text-stone-500 dark:group-hover:text-stone-300'}`}
                  >
                    {item.label}
                  </span>

                  {/* Elegant Progress Ticker Bar under active item */}
                  <div className="relative mt-2 h-[3px] w-8 overflow-hidden rounded-full bg-slate-100 dark:bg-stone-900/60">
                    {activeStep === idx && (
                      <motion.div
                        className="absolute top-0 bottom-0 left-0 bg-[#1877F2] dark:bg-[#4a7cf6]"
                        initial={{ width: '0%' }}
                        animate={{ width: isPlayingProcess && isProcessInView ? '100%' : '0%' }}
                        transition={{ duration: isPlayingProcess && isProcessInView ? 4 : 0, ease: 'linear' }}
                        key={`${idx}-${isPlayingProcess}-${isProcessInView}`}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Showcase Dynamic Panel */}
          <div
            className="mx-auto max-w-4xl"
            onMouseEnter={() => setIsPlayingProcess(false)}
            onMouseLeave={() => setIsPlayingProcess(true)}
          >
            <AnimatePresence mode="wait">
              {[
                {
                  num: '01',
                  title: 'In-Depth Research & Ad Account Audit',
                  desc: 'We analyze your business metrics, previous ad accounts history, pixel data integrity, and cross-examine direct competitors to locate precise marketing gaps and cost bottlenecks.',
                  icon: Search,
                  color: 'text-[#1877F2] dark:text-[#4a7cf6]',
                  bg: 'bg-blue-50 dark:bg-blue-950/20',
                  border: 'border-blue-100 dark:border-blue-900/40',
                  timeline: 'First 5 Days',
                  impact: 'Efficiency Gap Location',
                  deliverables: [
                    'Competitor Creative Breakdowns',
                    'Pixel/CAPI Verification Audit',
                    'Demographic Funnel Leak Report',
                    'Tailored Offer Strategy Matrix',
                  ],
                },
                {
                  num: '02',
                  title: 'Strategic Funnel Architecture & Planning',
                  desc: 'We build a hyper-detailed custom media planning blueprint mapping precise ad spend, customer journeys, target conversion metrics, and sequential creatives across high, mid, and low intent streams.',
                  icon: Target,
                  color: 'text-[#10B981] dark:text-emerald-400',
                  bg: 'bg-emerald-50 dark:bg-emerald-950/20',
                  border: 'border-emerald-100 dark:border-emerald-900/40',
                  timeline: 'Days 5 - 10',
                  impact: 'Target ROI Alignment',
                  deliverables: [
                    'Comprehensive Budget Allocation Sheets',
                    'Custom Landing Page Recommendations',
                    'A/B Testing Target Schedules',
                    'Broad Lookalike Setup Layouts',
                  ],
                },
                {
                  num: '03',
                  title: 'Creative Production & Systematic Launch',
                  desc: 'With strategy locked, we construct high-converting direct response copywriting formulas and elite creative assets. Campaigns are officially launched utilizing modern scientific testing frameworks.',
                  icon: Rocket,
                  color: 'text-[#8B5CF6] dark:text-purple-400',
                  bg: 'bg-purple-50 dark:bg-purple-950/20',
                  border: 'border-purple-100 dark:border-purple-900/40',
                  timeline: 'Days 10 - 14',
                  impact: 'Live Creative Proofing',
                  deliverables: [
                    'Creative Hook & Visual Asset Delivery',
                    'Clean Consolidated Ad Account Build',
                    'Lookalike & Custom Audience Setup',
                    'Initial Performance Stress Testing',
                  ],
                },
                {
                  num: '04',
                  title: 'Multi-Variable Optimization & Micro-Tweaks',
                  desc: 'Data floods in, and the optimization begins. We prune underperforming segments, optimize bidding thresholds, test dynamic hooks, and swap low-converting landing page creatives.',
                  icon: TrendingUp,
                  color: 'text-[#F59E0B] dark:text-amber-400',
                  bg: 'bg-amber-50 dark:bg-amber-950/20',
                  border: 'border-amber-100 dark:border-amber-900/40',
                  timeline: 'Ongoing (Daily)',
                  impact: 'Consistent CPA Reductions',
                  deliverables: [
                    'Negative Audience Exclusion Audits',
                    'Creative Hook Rotations & Swaps',
                    'Bidding Adjustments',
                    'Weekly Performance Screen Video Summary',
                  ],
                },
                {
                  num: '05',
                  title: 'Aggressive Scaling & Omnichannel Growth',
                  desc: 'Once a winning formula cements itself, we scale budgets horizontally and vertically, unlock fresh lookalike tiers, introduce retargeting sequences, and secure long-term client revenue.',
                  icon: FileText,
                  color: 'text-[#EF4444] dark:text-rose-400',
                  bg: 'bg-rose-50 dark:bg-rose-950/20',
                  border: 'border-rose-100 dark:border-rose-900/40',
                  timeline: 'Scale Phase (Weekly)',
                  impact: 'Exponential ROI Growth',
                  deliverables: [
                    'Horizontal Mirror Audience Launches',
                    'CBO Campaign Scaling Implementation',
                    'Omnichannel Cross-Pollination Plan',
                    'Pragmatic Long-Term Budget Projection',
                  ],
                },
              ].map(
                (step, i) =>
                  activeStep === i && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.98, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -15 }}
                      transition={{ duration: 0.4 }}
                      className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-slate-200/60 bg-slate-50 p-6 text-left shadow-xl sm:p-10 md:grid-cols-12 dark:border-stone-800/80 dark:bg-[#0b0e14] dark:shadow-2xl"
                    >
                      {/* Panel Left: Visual Step Indicator */}
                      <div className="flex flex-col items-center justify-center border-b border-slate-200/60 pb-6 text-center md:col-span-4 md:border-r md:border-b-0 md:pr-8 md:pb-0 dark:border-stone-800/80">
                        <div
                          className={`h-20 w-20 rounded-2xl ${step.bg} ${step.color} border border-transparent dark:${step.border} mb-4 flex items-center justify-center shadow-sm`}
                        >
                          <step.icon size={40} className="stroke-[1.5]" />
                        </div>
                        <span className="mb-1 text-[10px] font-extrabold tracking-[0.2em] text-[#1877F2] uppercase dark:text-[#4a7cf6]">
                          Process Node
                        </span>
                        <h4 className="text-3xl font-black text-slate-800 dark:text-white">{step.num}</h4>
                        <div className="mt-3 rounded-full bg-slate-200/50 px-4 py-1.5 text-[10px] font-black tracking-wider text-slate-600 uppercase dark:bg-stone-800 dark:text-stone-300">
                          {step.timeline}
                        </div>
                      </div>

                      {/* Panel Right: Info, Deliverables, & Metrics */}
                      <div className="space-y-6 md:col-span-8">
                        <div>
                          <div className="mb-2 text-[10px] font-bold tracking-wider text-[#10B981] uppercase">
                            Target Impact: {step.impact}
                          </div>
                          <h3 className="text-xl leading-snug font-black text-slate-900 sm:text-2xl dark:text-white">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed font-medium text-slate-500 dark:text-stone-400">
                            {step.desc}
                          </p>
                        </div>

                        <div>
                          <div className="mb-3 text-xs font-extrabold tracking-widest text-slate-800 uppercase dark:text-stone-200">
                            Key Deliverables
                          </div>
                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                            {step.deliverables.map((deliv, dIdx) => (
                              <div
                                key={dIdx}
                                className="flex items-center gap-2.5 text-xs font-bold text-slate-600 dark:text-stone-300"
                              >
                                <CheckCircle2 size={14} className="shrink-0 text-emerald-500" />
                                <span>{deliv}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="relative overflow-hidden border-t border-stone-800 bg-[#0a0c10] px-4 pt-[55px] pb-[56px] transition-colors duration-500 sm:px-6 md:px-12 md:pt-[80px] md:pb-[80px]">
        {/* Abstract background elements */}
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#1251e6]/5 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#10b981]/5 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Content Column: Trust Score & Navigation */}
            <div className="space-y-8 text-center lg:col-span-5 lg:text-left">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1251e6]/20 bg-[#1251e6]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#4a7cf6] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4a7cf6]"></span>
                  CLIENT SATISFACTION
                </div>
                <h2 className="font-display text-3xl leading-tight font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
                  What Our Partners <br className="hidden lg:block" />
                  <span className="font-medium text-[#4a7cf6]">Say About Us</span>
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-stone-400 sm:text-base lg:mx-0">
                  We don’t just run ads—we build durable client pipelines. Read verified, real-world growth stories from
                  our outstanding business partners.
                </p>
              </div>

              {/* Google Verified Trust Widget */}
              <div className="mx-auto flex max-w-sm items-center gap-5 rounded-2xl border border-stone-800/80 bg-[#0e1117] p-6 text-left shadow-lg lg:mx-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#1877F2] to-blue-400 shadow-[0_0_15px_rgba(24,119,242,0.2)]">
                  <Facebook size={24} className="border-none text-white" fill="currentColor" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-lg font-bold text-white">4.9 / 5.0</span>
                    <div className="flex text-[#facc15]">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={12} fill="currentColor" stroke="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="font-mono text-xs text-stone-500">Based on 200+ Client Results</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider text-emerald-400 uppercase">
                    <CheckCircle2 size={10} /> 100% Verified Partners
                  </span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-center gap-4 lg:justify-start">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? 4 : prev - 1))}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-stone-800 bg-[#0e1117] text-stone-400 shadow-md transition-all hover:-translate-x-0.5 hover:border-[#1251e6]/40 hover:text-white"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Visual Dot Steppers */}
                <div className="flex gap-2">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentTestimonial === idx ? 'w-6 bg-[#4a7cf6]' : 'w-2 bg-stone-800 hover:bg-stone-700'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === 4 ? 0 : prev + 1))}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-stone-800 bg-[#0e1117] text-stone-400 shadow-md transition-all hover:translate-x-0.5 hover:border-[#1251e6]/40 hover:text-white"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Right Interactive Testimonial Slider Panel */}
            <div className="relative flex min-h-[380px] items-center sm:min-h-[350px] lg:col-span-7">
              <AnimatePresence mode="wait">
                {[
                  {
                    quote:
                      "Before AdThrive, we were throwing money away on Facebook Ads. Within 30 days, our cost per lead dropped by 60% and we're seeing our highest ROI ever. Absolute game-changer!",
                    author: 'Jason T.',
                    role: 'E-commerce Founder',
                    location: 'Austin, TX',
                    metric: '3.5x ROAS Increase',
                    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
                  },
                  {
                    quote:
                      'As a real estate agency, high-quality leads are everything. Their targeted ad campaigns brought us over 150 qualified buyer leads in just two months.',
                    author: 'Sarah M.',
                    role: 'Real Estate Broker',
                    location: 'Miami, FL',
                    metric: '150+ Qualified Leads',
                    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
                  },
                  {
                    quote:
                      'Our local fitness studio grew by 80 members in one month thanks to their localized Meta ad strategy. The foot traffic increase has been phenomenal.',
                    author: 'David L.',
                    role: 'Gym Owner',
                    location: 'Chicago, IL',
                    metric: '+80 New Members',
                    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
                  },
                  {
                    quote:
                      'Finding a reliable ad agency is tough, but these guys delivered beyond expectation. We scaled our ad spend profitably from $1k to $10k/mo.',
                    author: 'Michael R.',
                    role: 'DTC Brand Owner',
                    location: 'Denver, CO',
                    metric: 'Profitably Scaled 10x',
                    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
                  },
                  {
                    quote:
                      'The ad creatives and copy they provided were sensational. We are seeing our highest click-through rates ever and our CPA has dropped by 65%.',
                    author: 'Elena S.',
                    role: 'SaaS Marketing Dir.',
                    location: 'Seattle, WA',
                    metric: '65% Drop in CPA',
                    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
                  },
                ].map((t, idx) => {
                  if (currentTestimonial !== idx) return null
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 50, scale: 0.98 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -50, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="relative flex w-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-stone-800/80 bg-[#0e1117] p-8 text-left shadow-2xl transition-colors hover:border-stone-700/80 sm:p-10"
                    >
                      {/* Giant Quote SVG Icon */}
                      <div className="pointer-events-none absolute top-8 right-8 text-stone-800/25">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <div className="relative z-10 space-y-6">
                        {/* Highlights Indicator */}
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="flex gap-1 text-[#facc15]">
                            {[...Array(5)].map((_, s) => (
                              <Star key={s} size={14} fill="currentColor" stroke="currentColor" />
                            ))}
                          </div>
                          <span className="h-1 w-1 rounded-full bg-stone-700" />
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1251e6]/20 bg-[#1251e6]/10 px-3 py-1 font-mono text-[10px] font-bold text-[#4a7cf6] uppercase">
                            <TrendingUp size={12} /> {t.metric}
                          </span>
                        </div>

                        {/* Testimonial Quote Text */}
                        <p className="text-base leading-relaxed font-light text-stone-200 italic sm:text-lg">
                          "{t.quote}"
                        </p>
                      </div>

                      {/* Author Card Footer */}
                      <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-stone-800/60 pt-6">
                        <img
                          src={t.img}
                          alt={t.author}
                          className="h-14 w-14 rounded-full border-2 border-stone-800 object-cover shadow-md"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base leading-snug font-semibold text-white sm:text-lg">{t.author}</h4>
                            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" title="Verified Client" />
                          </div>
                          <p className="mt-0.5 text-xs text-stone-400">
                            {t.role} •{' '}
                            <span className="font-mono text-[10px] tracking-wide text-stone-500">{t.location}</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-white px-6 py-24 transition-colors duration-500 md:px-12 dark:border-stone-800 dark:bg-[#06080b]">
        {/* Animated background highlights to make it cinematic */}
        <div className="pointer-events-none absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-[#1877F2]/5 blur-[120px] dark:bg-[#1877F2]/10" />
        <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/3 blur-[150px] dark:bg-indigo-500/5" />

        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 lg:grid-cols-12 xl:gap-24">
          {/* Left - Futuristic Dashboard Mockup representing Campaign Optimization */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex flex-col justify-center overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200/50 p-8 shadow-2xl transition-all sm:p-10 dark:border-stone-800/80 dark:from-stone-900/60 dark:to-stone-950/40"
            >
              {/* Visual Decorative grid backdrops */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Meta Optimization Badge */}
              <div className="relative z-10 mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-stone-400">
                    Live Performance Optimizer
                  </span>
                </div>
                <div className="rounded-md border border-[#1877F2]/20 bg-[#1877F2]/10 px-2.5 py-1 font-mono text-[10px] font-bold text-[#1877F2] uppercase dark:text-[#4a7cf6]">
                  v4.1 Active
                </div>
              </div>

              {/* Main Graph Card */}
              <div className="group relative z-10 mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all duration-300 hover:border-[#1877F2]/30 dark:border-stone-800 dark:bg-[#0c1017]">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="mb-1 block text-[10px] font-bold tracking-widest text-slate-400 uppercase dark:text-stone-500">
                      Conversion Scale
                    </span>
                    <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">Acquisition ROI</h4>
                  </div>
                  <span className="flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 font-mono text-sm font-bold text-emerald-500 dark:text-emerald-400">
                    +182%
                  </span>
                </div>

                {/* Customized SVG graph illustration with glow */}
                <div className="relative h-28 w-full">
                  <svg className="h-full w-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient-blue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1877F2" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#1877F2" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Area */}
                    <path d="M0,85 Q40,90 80,60 T160,50 T240,20 T300,5 L300,100 L0,100 Z" fill="url(#gradient-blue)" />
                    {/* Path Line */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      d="M0,85 Q40,90 80,60 T160,50 T240,20 T300,5"
                      fill="none"
                      stroke="#1877F2"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    {/* Interactive Dot */}
                    <circle cx="300" cy="5" r="5" fill="#1877F2" className="animate-ping" />
                    <circle cx="300" cy="5" r="4" fill="#4a7cf6" />
                  </svg>
                </div>
              </div>

              {/* Staggered mini KPI details */}
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md dark:border-stone-800 dark:bg-[#0c1017]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1877F2] dark:bg-blue-900/20 dark:text-[#4a7cf6]">
                    <Target size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase dark:text-stone-500">
                      CTR Max
                    </span>
                    <span className="font-mono text-sm font-extrabold text-slate-900 dark:text-white">5.24%</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [-4, 0, -4] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md dark:border-stone-800 dark:bg-[#0c1017]"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-slate-400 uppercase dark:text-stone-500">
                      ROAS Avg
                    </span>
                    <span className="font-mono text-sm font-extrabold text-slate-900 dark:text-white">8.65x</span>
                  </div>
                </motion.div>
              </div>

              {/* Floater element */}
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-indigo-500/10 blur-2xl dark:bg-indigo-500/20" />
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 lg:col-span-7">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1877F2]/20 bg-[#1877F2]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#1877F2] uppercase dark:text-[#4a7cf6]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1877F2] dark:bg-[#4a7cf6]"></span>
                UNMATCHED PERFORMANCE
              </div>
              <h2 className="font-display text-3xl leading-tight font-light tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                We Don’t Just Run Ads,
                <br />
                <span className="font-semibold text-[#1877F2] dark:text-[#4a7cf6]">We Grow Businesses.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-stone-400">
                Our custom-tailored marketing ecosystems turn random viewers into lifelong loyal clients. We integrate
                data optimization, beautiful visual creative production, and relentless scaling.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2">
              {[
                {
                  icon: BarChart,
                  title: 'Data-Driven Strategies',
                  desc: 'Every campaign built on hard analytics & rigorous competitive research.',
                },
                {
                  icon: Target,
                  title: 'ROI Focused Approach',
                  desc: 'We align all spend metrics with direct bottom-line revenue goals.',
                },
                {
                  icon: Users,
                  title: 'Expert Ad Managers',
                  desc: 'Certified advertising strategists who live and breathe performance.',
                },
                {
                  icon: FileText,
                  title: 'Transparent Reporting',
                  desc: 'Clear, fully accessible performance dashboards with zero fluff.',
                },
                {
                  icon: PenTool,
                  title: 'High-Converting Creatives',
                  desc: 'Scroll-stopping photography, cinematic videos, and compelling copy.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Dedicated Support',
                  desc: 'Personal account manager coordinating daily optimizations.',
                },
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group flex gap-5 rounded-[1.5rem] border border-slate-200/60 bg-slate-50 p-6 transition-all duration-300 hover:border-[#1877F2]/30 hover:shadow-xl dark:border-stone-800/80 dark:bg-[#0c1017] dark:hover:border-stone-700/80"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#1877F2] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1877F2] group-hover:text-white dark:border-stone-800 dark:bg-[#07090d] dark:text-[#4a7cf6] dark:group-hover:bg-[#4a7cf6]">
                    <feat.icon size={22} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-base font-extrabold text-slate-900 transition-colors group-hover:text-[#1877F2] dark:text-white dark:group-hover:text-[#4a7cf6]">
                      {feat.title}
                    </h3>
                    <p className="text-xs leading-relaxed font-medium text-slate-500 dark:text-stone-400">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        id="bottom-cta-section"
        className="relative overflow-hidden border-t border-slate-200 bg-slate-950 px-6 py-24 text-white transition-colors duration-500 md:px-12 dark:border-stone-800 dark:bg-gradient-to-b dark:from-[#0a0c10] dark:to-[#040608]"
      >
        {/* Cinematic Grid pattern & glows */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="pointer-events-none absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#1251e6]/15 blur-[140px]" />

        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
              <span className="h-1.5 w-1.5 animate-ping rounded-full bg-emerald-400"></span>
              FREE PERFORMANCE AUDIT
            </div>

            <h2 className="font-display text-4xl leading-[1.05] font-light tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Ready to Grow Your Business <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 via-[#4a7cf6] to-emerald-400 bg-clip-text font-extrabold text-transparent">
                with Facebook Ads?
              </span>
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
              Claim your comprehensive, fully customized Meta Ads audit today. We’ll expose leakages, review creative
              opportunities, and map out a concrete multi-million dollar growth roadmap.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 text-xs font-bold text-stone-400">
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 size={12} />
                </div>
                100% Free Audit
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 size={12} />
                </div>
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 size={12} />
                </div>
                Actionable Insights Map
              </div>
            </div>
          </div>

          {/* Floating Live KPI Interactive CTA Widget & Buttons on Right */}
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-12 lg:col-span-5">
            {/* Dynamic Buttons Container */}
            <div className="flex w-full flex-col gap-4 sm:col-span-6">
              <button className="group relative flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-[1.25rem] bg-gradient-to-r from-[#1877F2] to-blue-600 px-8 py-5 text-sm font-bold tracking-wide text-white shadow-[0_0_30px_rgba(24,119,242,0.3)] transition-all hover:-translate-y-0.5 hover:from-blue-600 hover:to-indigo-600 hover:shadow-[0_0_40px_rgba(24,119,242,0.5)]">
                <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative flex items-center gap-2">
                  Get Free Ads Audit <ExternalLink size={16} />
                </span>
              </button>
              <button className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 px-8 py-5 text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
                <PhoneCall size={16} className="text-[#4a7cf6]" /> Book Strategy Call
              </button>
            </div>

            {/* Cinematic Live Mockup Widget on Right */}
            <div className="relative hidden justify-end sm:col-span-6 sm:flex">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full max-w-[240px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
              >
                {/* Glowing backlight */}
                <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-[#1877F2]/30 blur-2xl" />

                {/* Tiny stats representation */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-600/20 text-[#4a7cf6]">
                    <Facebook size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-wide text-white">FB Campaign</h4>
                    <span className="font-mono text-[10px] font-bold text-emerald-400">Scaling Active</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <span className="mb-0.5 block text-[9px] tracking-widest text-stone-400 uppercase">Total ROI</span>
                    <span className="font-mono text-lg leading-none font-extrabold text-white">312.4%</span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                    <span className="mb-0.5 block text-[9px] tracking-widest text-stone-400 uppercase">
                      Leads Generated
                    </span>
                    <span className="font-mono text-lg leading-none font-extrabold text-white">4,821</span>
                  </div>
                </div>

                {/* Verified badge */}
                <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-4">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span className="font-mono text-[10px] font-semibold text-stone-300">Verified Results</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES MODAL DETAIL OVERLAY */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md md:p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl dark:border-stone-800 dark:bg-[#0c101b]"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-[#1877F2] to-indigo-500" />

              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 cursor-pointer rounded-xl bg-slate-100 p-2 text-slate-500 transition-colors hover:text-slate-800 dark:bg-stone-900 dark:text-stone-400 dark:hover:text-white"
              >
                <X size={18} />
              </button>

              <div className="space-y-8 p-8 md:p-10">
                {/* Header info */}
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 text-[#1877F2] shadow-sm dark:border-stone-800 dark:bg-stone-900/60 dark:text-[#4a7cf6]">
                    {createElement(services[selectedService].icon, { size: 26 })}
                  </div>
                  <div>
                    <span className="mb-2 inline-block rounded-md bg-[#1877F2]/10 px-2.5 py-1 text-[10px] font-extrabold text-[#1877F2] uppercase dark:bg-[#4a7cf6]/10 dark:text-[#4a7cf6]">
                      {services[selectedService].badge}
                    </span>
                    <h3 className="text-xl leading-tight font-black text-slate-900 md:text-2xl dark:text-white">
                      {services[selectedService].title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed font-medium text-slate-600 md:text-base dark:text-stone-300">
                  {services[selectedService].desc}
                </p>

                {/* Deliverables / Scope list */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black tracking-widest text-slate-400 uppercase dark:text-stone-500">
                    What's Included / Key Deliverables
                  </h4>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {services[selectedService].deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-xl border border-slate-100/40 bg-slate-50 p-3 dark:border-stone-800/40 dark:bg-stone-900/40"
                      >
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                        <span className="text-xs leading-normal font-semibold text-slate-600 dark:text-stone-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance impact */}
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 dark:border-blue-900/30 dark:bg-blue-950/10">
                  <div className="mb-2 flex items-center gap-2">
                    <Sparkles size={16} className="text-[#1877F2] dark:text-[#4a7cf6]" />
                    <span className="text-xs font-black tracking-wider text-slate-700 uppercase dark:text-stone-300">
                      Performance Impact
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed font-semibold text-slate-500 dark:text-stone-400">
                    {services[selectedService].impact}
                  </p>
                </div>

                {/* Action button */}
                <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-stone-800/60">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400 uppercase dark:text-stone-500">
                    Interested in this solution?
                  </span>
                  <button
                    onClick={() => {
                      setSelectedService(null)
                      const ctaSection = document.querySelector('#bottom-cta-section')
                      if (ctaSection) {
                        ctaSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#1877F2] px-6 py-3.5 text-xs font-extrabold tracking-wider text-white uppercase shadow-md shadow-blue-500/10 transition-all hover:bg-blue-600 hover:shadow-blue-500/20"
                  >
                    Request Free Audit <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
