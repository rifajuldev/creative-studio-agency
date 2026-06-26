'use client'

import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function GmbOptimizationService() {
  const router = useRouter()
  const [activeNiche, setActiveNiche] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [simulateRank, setSimulateRank] = useState(1) // 1, 3, 5, 8

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const rankValues = {
    8: {
      title: 'Rank 8+ (Invisible)',
      status: 'Buried on Page 2+',
      statusColor: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
      calls: '+0%',
      clicks: '+0%',
      revenue: '+$0/mo',
      visibility: '0%',
      radarClass: 'bg-rose-500/5 border-rose-500/20',
      nodes: [
        { r: '8', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '9', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '11', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '10', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '8', c: 'bg-rose-500/20 border-rose-500/40 text-rose-400 font-bold' },
        { r: '12', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '13', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '11', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '14', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
      ],
    },
    5: {
      title: 'Rank 5 (Below Fold)',
      status: 'Requires Page 2 Click',
      statusColor: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      calls: '+22%',
      clicks: '+15%',
      revenue: '+$850/mo',
      visibility: '15%',
      radarClass: 'bg-amber-500/5 border-amber-500/20 scale-110',
      nodes: [
        { r: '6', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '5', c: 'bg-amber-500/15 border-amber-500/30 text-amber-400' },
        { r: '7', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '5', c: 'bg-amber-500/15 border-amber-500/30 text-amber-400' },
        { r: '5', c: 'bg-amber-500/25 border-amber-500/50 text-amber-400 font-bold' },
        { r: '6', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '8', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
        { r: '5', c: 'bg-amber-500/15 border-amber-500/30 text-amber-400' },
        { r: '9', c: 'bg-rose-500/15 border-rose-500/30 text-rose-400' },
      ],
    },
    3: {
      title: 'Rank 3 (Local 3-Pack)',
      status: 'Map Pack Placement',
      statusColor: 'text-[#4a7cf6] bg-[#1251e6]/10 border-[#1251e6]/25',
      calls: '+118%',
      clicks: '+164%',
      revenue: '+$6,200/mo',
      visibility: '72%',
      radarClass: 'bg-[#1251e6]/5 border-[#1251e6]/20 scale-125',
      nodes: [
        { r: '3', c: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' },
        { r: '3', c: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' },
        { r: '4', c: 'bg-amber-500/15 border-amber-500/30 text-amber-400' },
        { r: '2', c: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' },
        { r: '3', c: 'bg-emerald-500/25 border-emerald-500/50 text-emerald-400 font-bold' },
        { r: '3', c: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' },
        { r: '5', c: 'bg-amber-500/15 border-amber-500/30 text-amber-400' },
        { r: '3', c: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' },
        { r: '5', c: 'bg-amber-500/15 border-amber-500/30 text-amber-400' },
      ],
    },
    1: {
      title: 'Rank 1 (Top Spotlight)',
      status: '🥇 Golden #1 Spotlight',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25 animate-pulse',
      calls: '+215%',
      clicks: '+280%',
      revenue: '+$24,800/mo',
      visibility: '100%',
      radarClass: 'bg-emerald-500/10 border-emerald-500/30 scale-150 shadow-[0_0_30px_rgba(16,185,129,0.1)]',
      nodes: [
        {
          r: '1',
          c: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-bold shadow-[0_0_8px_rgba(16,185,129,0.2)] animate-pulse',
        },
        {
          r: '1',
          c: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-bold shadow-[0_0_8px_rgba(16,185,129,0.2)]',
        },
        {
          r: '1',
          c: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-bold shadow-[0_0_8px_rgba(16,185,129,0.2)]',
        },
        {
          r: '1',
          c: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-bold shadow-[0_0_8px_rgba(16,185,129,0.2)]',
        },
        {
          r: '1',
          c: 'bg-emerald-500/30 border-emerald-500/60 text-emerald-300 font-black shadow-[0_0_12px_rgba(16,185,129,0.3)] scale-110',
        },
        {
          r: '1',
          c: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-bold shadow-[0_0_8px_rgba(16,185,129,0.2)]',
        },
        {
          r: '1',
          c: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-bold shadow-[0_0_8px_rgba(16,185,129,0.2)]',
        },
        {
          r: '1',
          c: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-bold shadow-[0_0_8px_rgba(16,185,129,0.2)]',
        },
        {
          r: '1',
          c: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400 font-bold shadow-[0_0_8px_rgba(16,185,129,0.2)]',
        },
      ],
    },
  }

  const activeConfig = rankValues[simulateRank as 1 | 3 | 5 | 8]

  return (
    <div className="min-h-screen w-full bg-white pb-20 font-sans text-slate-900 transition-colors duration-500 selection:bg-[#bca374]/30 dark:bg-[#06080b] dark:text-white">
      {/* Sub-Header */}
      <div className="sticky top-[80px] z-40 w-full border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-md transition-colors md:px-12 dark:border-stone-800/80 dark:bg-[#06080b]/90">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <button
            onClick={() => router.push('/services/marketing')}
            className="flex cursor-pointer items-center gap-2 text-xs font-bold tracking-widest text-slate-500 uppercase transition-colors hover:text-slate-900 dark:text-stone-400 dark:hover:text-white"
          >
            <ChevronLeft size={14} />
            Back to Marketing
          </button>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#10b981]" />
            <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase dark:text-stone-400">
              Accepting New Clients
            </span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50/50 px-6 pt-16 pb-20 transition-colors duration-500 md:px-12 md:pt-24 dark:bg-transparent">
        {/* Background glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1251e6]/4 blur-[140px]" />

        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-8 text-left lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3.5 py-1.5 text-amber-600 dark:text-amber-400"
            >
              <Trophy size={13} className="shrink-0 text-amber-500" />
              <span className="font-mono text-[10px] leading-none font-bold tracking-widest uppercase">
                700+ Proven Results
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-[4rem] dark:text-white">
                I HELP BUSINESSES <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-[#4a7cf6]">
                  RANK HIGHER
                </span>{' '}
                <br />
                IN GOOGLE MAP PACK
              </h1>
              <p className="text-lg leading-relaxed font-medium text-slate-600 sm:text-xl dark:text-stone-300">
                More Visibility. More Calls. <span className="font-bold text-emerald-500">More Customers.</span>
              </p>
            </motion.div>

            {/* Left Box & Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-stretch gap-6 sm:flex-row"
            >
              {/* Google Verified Review Widget */}
              <div className="group relative flex w-full shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-xl shadow-slate-100/50 transition-all duration-300 hover:border-blue-500/50 sm:w-56 dark:border-stone-800 dark:bg-[#0c0e12] dark:shadow-none dark:hover:border-blue-500/30">
                <div className="pointer-events-none absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-blue-500/5 blur-xl transition-transform duration-500 group-hover:scale-150 dark:bg-blue-500/5" />

                <div className="mb-3.5 flex items-center justify-between gap-3">
                  {/* Stylized Google G Logo */}
                  <div className="flex items-center gap-1.5">
                    <svg className="h-4.5 w-4.5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22.81-.6z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z"
                      />
                    </svg>
                    <span className="font-mono text-[9px] font-black tracking-wider text-slate-500 uppercase dark:text-stone-400">
                      Reviews
                    </span>
                  </div>

                  {/* Micro Google Guaranteed */}
                  <span className="rounded border border-emerald-500/15 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[7px] font-black tracking-widest text-emerald-500 uppercase">
                    Guaranteed
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl.5 font-display font-black tracking-tight text-slate-950 dark:text-white">
                      4.9
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 dark:text-stone-500">/5.0</span>
                  </div>

                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={11}
                        fill="currentColor"
                        stroke="currentColor"
                        className="transition-transform duration-300 hover:scale-120"
                      />
                    ))}
                  </div>

                  <p className="text-[9.5px] leading-snug font-semibold text-slate-500 dark:text-stone-400">
                    Trusted by <span className="font-bold text-slate-800 dark:text-white">700+ local companies</span>{' '}
                    worldwide.
                  </p>

                  {/* Avatar Overlap Stack */}
                  <div className="flex items-center gap-2 border-t border-slate-100 pt-2 dark:border-stone-900">
                    <div className="flex items-center -space-x-1.5">
                      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-white bg-[#1251e6] text-[7px] font-black text-white shadow-sm dark:border-[#0c0e12]">
                        JD
                      </div>
                      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-white bg-emerald-500 text-[7px] font-black text-white shadow-sm dark:border-[#0c0e12]">
                        MK
                      </div>
                      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-white bg-purple-500 text-[7px] font-black text-white shadow-sm dark:border-[#0c0e12]">
                        TL
                      </div>
                      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full border border-white bg-amber-500 text-[7px] font-black text-white shadow-sm dark:border-[#0c0e12]">
                        +7k
                      </div>
                    </div>
                    <span className="font-mono text-[7.5px] font-black tracking-widest text-slate-400 uppercase dark:text-stone-500">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
              {/* Checklist */}
              <div className="flex w-full flex-1 flex-col justify-center space-y-3 rounded-3xl border border-slate-200/60 bg-slate-100/50 p-5 text-left shadow-sm backdrop-blur-sm sm:p-6 dark:border-stone-800/55 dark:bg-stone-900/40">
                {[
                  'Google Map Pack Ranking',
                  'Local SEO Optimization',
                  'Increased Visibility',
                  'More Calls & Website Traffic',
                  'Real Results for Real Businesses',
                ].map((text, idx) => (
                  <div key={idx} className="group/item flex items-center gap-3">
                    <div className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 transition-all duration-300 group-hover/item:bg-emerald-500 group-hover/item:text-white">
                      <CheckCircle2 size={12} className="stroke-[3]" />
                    </div>
                    <span className="text-slate-850 text-sm font-semibold tracking-tight transition-colors duration-200 group-hover/item:text-slate-950 dark:text-stone-200 dark:group-hover/item:text-white">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6 pt-4 sm:flex-row"
            >
              <div className="flex-1 space-y-2">
                <Link
                  href="/contact"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-[#1251e6] px-6 py-4.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  <Search size={16} />
                  Get Free Local SEO Audit
                </Link>
                <p className="text-center font-mono text-[10px] text-slate-500 dark:text-slate-400">
                  No Obligation. 100% Free.
                </p>
              </div>
              <div className="flex-1 space-y-2">
                <Link
                  href="/contact"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4.5 text-xs font-bold tracking-widest text-white uppercase shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  <Calendar size={16} />
                  Book a Strategy Call
                </Link>
                <p className="text-center font-mono text-[10px] text-slate-500 dark:text-slate-400">
                  Let's Grow Your Business.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Map Rank Mockup & Badges List */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-12 lg:col-span-7"
          >
            {/* Column 1-7: Phone Mockup */}
            <div className="md:col-span-7">
              <div className="group/phone relative flex h-full flex-col gap-3.5 overflow-hidden rounded-[2.75rem] border border-slate-300 bg-slate-100 p-4 shadow-2xl dark:border-stone-800 dark:bg-[#111318]">
                {/* Shiny glass overlay highlight */}
                <div className="pointer-events-none absolute inset-0 z-30 -translate-y-1/2 scale-150 rotate-12 transform bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-30 dark:opacity-25" />

                {/* Phone Speaker/Notch (Dynamic Island Sim) */}
                <div className="relative z-25 mx-auto flex h-4.5 w-24 items-center justify-center overflow-hidden rounded-full border border-white/5 bg-slate-900 shadow-sm dark:bg-black">
                  <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500/60"></span>
                  <span className="h-1 w-1 rounded-full bg-neutral-800"></span>
                </div>

                {/* Search bar inside the phone mockup */}
                <div className="relative z-20 flex items-center justify-between rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-stone-800 dark:bg-[#1a1d24]">
                  <div className="flex items-center gap-2">
                    <svg className="h-4.5 w-4.5 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.08H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.92l2.85-2.22.81-.6z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.08l3.66 2.84c.87-2.6 3.3-4.54 6.16-4.54z"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-slate-700 dark:text-stone-300">Plumber near me</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-4.5 w-4.5 text-slate-400 dark:text-stone-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.42 2.72 6.2 6 6.7V21h2v-3.3c3.28-.5 6-3.28 6-6.7h-1.7z" />
                    </svg>
                  </div>
                </div>

                {/* Businesses dropdown selection */}
                <div className="relative z-20 flex items-center justify-between px-1">
                  <span className="text-slate-850 text-xs font-bold dark:text-stone-200">Local Listings</span>
                  <span className="flex items-center gap-1 rounded-md border border-slate-300/40 bg-slate-200/60 px-2 py-0.5 text-[10px] font-medium text-slate-500 dark:border-stone-700/40 dark:bg-stone-800/60 dark:text-stone-400">
                    Filters ▼
                  </span>
                </div>

                {/* Custom Map with red pins */}
                <div className="group/map relative flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-[#e3ecfc] shadow-inner dark:border-stone-800/70 dark:bg-[#151922]">
                  {/* Simple grid of paths representing roads */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.14]"
                    style={{
                      backgroundImage: 'radial-gradient(#1251e6 1.5px, transparent 1.5px)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <div className="absolute left-1/3 h-full w-0.5 bg-slate-300 dark:bg-[#252c3c]" />
                  <div className="absolute left-2/3 h-full w-0.5 bg-slate-300 dark:bg-[#252c3c]" />
                  <div className="absolute top-1/2 h-0.5 w-full bg-slate-300 dark:bg-[#252c3c]" />
                  <div className="absolute top-1/4 h-0.5 w-full bg-slate-300 dark:bg-[#252c3c]" />

                  {/* Three Map Pins */}
                  {/* Pin 1: Your Business */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute top-[40%] left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  >
                    <div className="mb-0.5 origin-bottom scale-95 rounded-md border border-white bg-emerald-500 px-2 py-0.5 text-[8px] font-black tracking-wider whitespace-nowrap text-white uppercase shadow-md">
                      Your Business
                    </div>
                    <MapPin size={22} className="fill-emerald-500 text-emerald-500 drop-shadow-sm filter" />
                  </motion.div>

                  {/* Pin 2: Competitor A */}
                  <div className="absolute top-[60%] left-[20%] flex flex-col items-center">
                    <MapPin size={16} className="fill-slate-400 text-slate-500" />
                  </div>

                  {/* Pin 3: Competitor B */}
                  <div className="absolute top-[30%] right-[20%] flex flex-col items-center">
                    <MapPin size={16} className="fill-slate-400 text-slate-500" />
                  </div>
                </div>

                {/* Business Listings */}
                <div className="relative z-20 flex flex-col gap-2">
                  {/* Item 1: Your Business */}
                  <div className="relative flex gap-3 overflow-hidden rounded-2xl border-2 border-emerald-500 bg-emerald-500/[0.04] p-3 text-left shadow-[0_8px_30px_rgb(16,185,129,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(16,185,129,0.12)] dark:bg-emerald-500/[0.02]">
                    <div className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-black text-white shadow-md">
                      1
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="truncate text-xs font-black text-slate-900 dark:text-white">Your Business</h5>
                      <div className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-500 dark:text-stone-400">
                        <span className="font-bold text-amber-500">4.9</span>
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={8} fill="currentColor" stroke="currentColor" />
                          ))}
                        </div>
                        <span className="font-mono font-medium">(255)</span>
                      </div>
                      <p className="mt-1 text-[9px] font-semibold text-slate-500 dark:text-stone-400">
                        0.2 mi • Open • Closes 6 PM
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col justify-center gap-1.5">
                      <div className="flex gap-1.5">
                        <div className="flex h-7 w-7 cursor-pointer flex-col items-center justify-center rounded-xl border border-slate-200/60 bg-blue-50 text-[#4a7cf6] transition-all hover:scale-105 hover:bg-blue-100 dark:border-stone-800/40 dark:bg-[#1251e6]/10 dark:hover:bg-[#1251e6]/20">
                          <MousePointerClick size={10} />
                          <span className="mt-0.5 font-mono text-[6px] leading-none font-black tracking-wide uppercase">
                            Web
                          </span>
                        </div>
                        <div className="flex h-7 w-7 cursor-pointer flex-col items-center justify-center rounded-xl border border-slate-200/60 bg-blue-50 text-[#4a7cf6] transition-all hover:scale-105 hover:bg-blue-100 dark:border-stone-800/40 dark:bg-[#1251e6]/10 dark:hover:bg-[#1251e6]/20">
                          <MapPin size={10} />
                          <span className="mt-0.5 font-mono text-[6px] leading-none font-black tracking-wide uppercase">
                            Dir
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 2: Competitor A */}
                  <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 text-left shadow-sm transition-all duration-300 hover:bg-white dark:border-stone-800 dark:bg-[#161920]/60 dark:hover:bg-[#161920]/90">
                    <div className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-slate-300 text-[10px] font-bold text-slate-700 dark:bg-stone-800 dark:text-stone-300">
                      2
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="truncate text-xs font-bold text-slate-800 dark:text-stone-300">Competitor A</h5>
                      <div className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-500 dark:text-stone-400">
                        <span className="font-bold text-amber-500">4.4</span>
                        <div className="flex text-amber-500">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} size={8} fill="currentColor" stroke="currentColor" />
                          ))}
                          <Star size={8} stroke="currentColor" />
                        </div>
                        <span className="font-mono font-medium">(128)</span>
                      </div>
                      <p className="mt-1 text-[9px] text-slate-500 dark:text-stone-400">0.6 mi • Open • Closes 6 PM</p>
                    </div>
                    <div className="flex shrink-0 flex-col justify-center gap-1.5">
                      <div className="flex gap-1 opacity-70">
                        <div className="flex h-7 w-7 flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-500 dark:border-stone-800/50 dark:bg-stone-900">
                          <MousePointerClick size={10} />
                          <span className="mt-0.5 font-mono text-[6px] leading-none font-bold tracking-wide uppercase">
                            Web
                          </span>
                        </div>
                        <div className="flex h-7 w-7 flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-500 dark:border-stone-800/50 dark:bg-stone-900">
                          <MapPin size={10} />
                          <span className="mt-0.5 font-mono text-[6px] leading-none font-bold tracking-wide uppercase">
                            Dir
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item 3: Competitor B */}
                  <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white/80 p-3 text-left shadow-sm transition-all duration-300 hover:bg-white dark:border-stone-800 dark:bg-[#161920]/60 dark:hover:bg-[#161920]/90">
                    <div className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-slate-300 text-[10px] font-bold text-slate-700 dark:bg-stone-800 dark:text-stone-300">
                      3
                    </div>
                    <div className="min-w-0 flex-1">
                      <h5 className="truncate text-xs font-bold text-slate-800 dark:text-stone-300">Competitor B</h5>
                      <div className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-500 dark:text-stone-400">
                        <span className="font-bold text-amber-500">4.2</span>
                        <div className="flex text-amber-500">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} size={8} fill="currentColor" stroke="currentColor" />
                          ))}
                          <Star size={8} stroke="currentColor" />
                        </div>
                        <span className="font-mono font-medium">(98)</span>
                      </div>
                      <p className="mt-1 text-[9px] text-slate-500 dark:text-stone-400">0.8 mi • Open • Closes 6 PM</p>
                    </div>
                    <div className="flex shrink-0 flex-col justify-center gap-1.5">
                      <div className="flex gap-1 opacity-70">
                        <div className="flex h-7 w-7 flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-500 dark:border-stone-800/50 dark:bg-stone-900">
                          <MousePointerClick size={10} />
                          <span className="mt-0.5 font-mono text-[6px] leading-none font-bold tracking-wide uppercase">
                            Web
                          </span>
                        </div>
                        <div className="flex h-7 w-7 flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-500 dark:border-stone-800/50 dark:bg-stone-900">
                          <MapPin size={10} />
                          <span className="mt-0.5 font-mono text-[6px] leading-none font-bold tracking-wide uppercase">
                            Dir
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 8-12: Badges Stack */}
            <div className="relative flex flex-col justify-between gap-4 pl-4 text-left md:col-span-5 md:pl-0">
              {/* Vertical accent timeline trace line on the left (only visible on mobile to connect elements nicely) */}
              <div className="absolute top-6 bottom-6 left-0 w-0.5 bg-slate-200/60 md:hidden dark:bg-stone-800/60" />

              {[
                {
                  icon: Trophy,
                  color:
                    'bg-amber-500/10 text-amber-500 border-amber-500/20 group-hover/badge:bg-amber-500 group-hover/badge:text-white',
                  glowColor: 'shadow-amber-500/10 dark:shadow-amber-500/5',
                  text: 'Top 3 Position',
                  sub: 'in Google Map Pack',
                  textClass: 'text-amber-600 dark:text-amber-400',
                  pill: 'Pack Spot',
                  pillClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
                  progPercent: '95%',
                },
                {
                  icon: TrendingUp,
                  color:
                    'bg-blue-500/10 text-blue-500 border-blue-500/20 group-hover/badge:bg-blue-600 group-hover/badge:text-white',
                  glowColor: 'shadow-blue-500/10 dark:shadow-blue-500/5',
                  text: '+187% Lift',
                  sub: 'Local Search Visibility',
                  textClass: 'text-blue-600 dark:text-blue-400',
                  pill: 'Peak Reach',
                  pillClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
                  progPercent: '88%',
                },
                {
                  icon: Phone,
                  color:
                    'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 group-hover/badge:bg-emerald-500 group-hover/badge:text-white',
                  glowColor: 'shadow-emerald-500/10 dark:shadow-emerald-500/5',
                  text: '+92% Growth',
                  sub: 'Inbound Phone Calls',
                  textClass: 'text-emerald-600 dark:text-emerald-400',
                  pill: 'Direct Leads',
                  pillClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
                  progPercent: '92%',
                },
                {
                  icon: MousePointerClick,
                  color:
                    'bg-orange-500/10 text-orange-500 border-orange-500/20 group-hover/badge:bg-orange-500 group-hover/badge:text-white',
                  glowColor: 'shadow-orange-500/10 dark:shadow-orange-500/5',
                  text: '+143% Traffic',
                  sub: 'Website Click-Throughs',
                  textClass: 'text-orange-600 dark:text-orange-400',
                  pill: 'Clicks Boost',
                  pillClass: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
                  progPercent: '84%',
                },
                {
                  icon: Star,
                  color:
                    'bg-yellow-500/10 text-yellow-500 border-yellow-500/20 group-hover/badge:bg-yellow-400 group-hover/badge:text-slate-950',
                  glowColor: 'shadow-yellow-500/10 dark:shadow-yellow-500/5',
                  text: '4.9 ★ Rating',
                  sub: 'Average Rating Lift',
                  textClass: 'text-yellow-600 dark:text-yellow-400',
                  pill: 'Elite Trust',
                  pillClass: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
                  progPercent: '98%',
                },
              ].map((badge, bIdx) => (
                <div
                  key={bIdx}
                  className={`flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/85 p-3.5 shadow-sm backdrop-blur-md dark:border-stone-800/80 dark:bg-[#111318]/90 ${badge.glowColor} hover:border-slate-350 group/badge relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:hover:border-stone-700/80`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Timeline Dot (mobile only) */}
                      <div className="absolute top-[26px] left-[-21px] h-2.5 w-2.5 rounded-full border-2 border-slate-50 bg-slate-300 transition-colors group-hover/badge:bg-emerald-500 md:hidden dark:border-stone-950 dark:bg-stone-700" />

                      {/* Icon container */}
                      <div
                        className={`h-9.5 w-9.5 rounded-xl border ${badge.color} flex shrink-0 items-center justify-center shadow-sm transition-all duration-300`}
                      >
                        <badge.icon size={15} className="stroke-[2.5]" />
                      </div>

                      <div className="min-w-0">
                        <span className={`block text-sm leading-tight font-black tracking-tight ${badge.textClass}`}>
                          {badge.text}
                        </span>
                        <span className="mt-0.5 block text-[9px] leading-none font-bold tracking-wider text-slate-500 uppercase dark:text-stone-400">
                          {badge.sub}
                        </span>
                      </div>
                    </div>

                    {/* Micro Pill Badge */}
                    <span
                      className={`rounded border px-2 py-0.5 font-mono text-[7.5px] font-black tracking-widest uppercase ${badge.pillClass}`}
                    >
                      {badge.pill}
                    </span>
                  </div>

                  {/* Micro Progress Bar visualizer to show actual "impact growth level" */}
                  <div className="mt-0.5 h-1 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-stone-900/60">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 transition-all duration-500 dark:from-blue-500 dark:to-emerald-400`}
                      style={{ width: badge.progPercent }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TWO COLUMN SECTION */}
      <section className="relative overflow-hidden border-y border-slate-200 bg-slate-100/50 px-4 pt-[55px] pb-[56px] transition-colors duration-500 sm:px-6 md:px-12 md:pt-[80px] md:pb-[80px] dark:border-stone-800 dark:bg-[#0a0c10]">
        {/* Background Gradients */}
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#1251e6]/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-[#10b981]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: Why Local SEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10 text-left"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1251e6]/20 bg-[#1251e6]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#4a7cf6] uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4a7cf6]"></span>
                THE POWER OF LOCAL SEO
              </div>
              <h2 className="font-display mb-6 text-3xl leading-tight font-light text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                Why <span className="font-medium text-[#4a7cf6]">Local SEO</span> Matters For Your Business
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-stone-400">
                When people search for products or services near them, 76% of people who conduct a local search on their
                smartphone visit a business within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { icon: MapPin, title: 'Increased Visibility', desc: 'Appear in local search when it matters most.' },
                { icon: Users, title: 'More Customers', desc: 'Drive more qualified leads and walk-ins.' },
                { icon: ShieldCheck, title: 'Build Trust', desc: 'High rankings and reviews build credibility.' },
                { icon: TrendingUp, title: 'Higher ROI', desc: 'Long-term results compared to paid ads.' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm backdrop-blur-sm transition-all hover:border-[#1251e6]/30 hover:bg-slate-50 hover:shadow-xl hover:shadow-[#1251e6]/5 dark:border-stone-800/80 dark:bg-[#0e1117]/80 dark:hover:bg-[#12161f]"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#1251e6]/20 bg-[#1251e6]/10 text-[#4a7cf6] transition-colors duration-300 group-hover:bg-[#1251e6] group-hover:text-white">
                    <item.icon size={20} />
                  </div>
                  <h4 className="mb-2 text-base font-bold text-slate-900 transition-colors group-hover:text-[#4a7cf6] dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-stone-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: GBP Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-10 text-left"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#10b981]/20 bg-[#10b981]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#10b981] uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#10b981]"></span>
                GOOGLE BUSINESS PROFILE
              </div>
              <h2 className="font-display mb-6 text-3xl leading-tight font-light text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                A Fully Optimized GBP Brings More <span className="font-medium text-[#10b981]">Customers</span>
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-slate-600 dark:text-stone-400">
                We handle everything from optimization to review management, ensuring your profile stands out in the map
                pack.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Complete Profile Optimization',
                  desc: 'We optimize every detail of your GBP for maximum local visibility.',
                },
                {
                  icon: Search,
                  title: 'Keyword Optimization',
                  desc: 'Targeting the exact phrases your customers are searching for.',
                },
                {
                  icon: Star,
                  title: 'Review Growth Strategy',
                  desc: 'Proven systems to generate more 5-star reviews automatically.',
                },
                {
                  icon: MessageCircle,
                  title: 'Active Management',
                  desc: 'We handle Q&A, posts, photos, and updates to keep you relevant.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all hover:border-[#10b981]/30 hover:bg-slate-50 dark:border-stone-800/50 dark:bg-[#0e1117]/50 dark:hover:bg-[#0e1117]"
                >
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#10b981]/20 bg-[#10b981]/10 text-[#10b981] transition-colors group-hover:bg-[#10b981] group-hover:text-white">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-base font-bold text-slate-900 transition-colors group-hover:text-[#10b981] dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-stone-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPLETE LOCAL SEO SOLUTIONS (Grid) */}
      <section className="relative overflow-hidden bg-white px-4 pt-[55px] pb-[56px] transition-colors duration-500 sm:px-6 md:px-12 md:pt-[80px] md:pb-[80px] dark:bg-[#06080b]">
        {/* Ambient Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{ backgroundImage: 'radial-gradient(#1251e6 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
        />
        <div className="pointer-events-none absolute top-1/3 left-1/4 h-[600px] w-[600px] rounded-full bg-[#1251e6]/3 blur-[130px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-1/3 h-[600px] w-[600px] rounded-full bg-[#10b981]/3 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center sm:mb-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1251e6]/25 bg-[#1251e6]/10 px-3 py-1 text-[#4a7cf6]">
              <Sparkles size={12} className="animate-pulse" />
              <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
                Comprehensive Capabilities
              </span>
            </div>
            <h2 className="font-display text-3xl leading-tight font-extralight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              A COMPLETE{' '}
              <span className="bg-gradient-to-r from-blue-600 via-[#4a7cf6] to-emerald-500 bg-clip-text font-normal text-transparent dark:from-blue-400 dark:via-[#4a7cf6] dark:to-emerald-400">
                SEO ENGINE
              </span>{' '}
              <br />
              ENGINEERED FOR DOMINANCE
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed font-light text-slate-600 sm:text-base dark:text-stone-400">
              We replace guesswork with full-stack synchronization. Every facet of your local digital footprint is
              refined for organic conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* CARD 1: Local Keyword Research */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/80 p-8 text-left shadow-2xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(18,81,230,0.04)] dark:border-stone-800 dark:bg-[#0c0e12]/90 dark:hover:border-stone-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1251e6]/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#4a7cf6] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1251e6] group-hover:text-white dark:border-stone-800 dark:bg-[#12161f]">
                    <Search size={20} />
                  </div>
                  <span className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider text-slate-500 uppercase dark:border-stone-800 dark:bg-stone-900/60 dark:text-stone-500">
                    Phase 1: Research
                  </span>
                </div>

                <div>
                  <h3 className="mb-2.5 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#4a7cf6] dark:text-white">
                    Local Keyword Intelligence
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-stone-400">
                    We discover high-intent transactional search terms used by active, qualified buyers in your exact
                    neighborhood blocks.
                  </p>
                </div>
              </div>

              {/* Furnished Visual: Micro Keyword Search Component */}
              <div className="relative z-10 mt-8 space-y-2.5 border-t border-slate-200 pt-6 dark:border-stone-900">
                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 font-mono text-[10px] dark:border-stone-800 dark:bg-[#12161f]/80">
                  <span className="text-slate-700 dark:text-stone-300">"hvac technician near me"</span>
                  <span className="rounded border border-emerald-500/10 bg-emerald-500/10 px-2 py-0.5 font-bold text-emerald-500 dark:text-emerald-400">
                    3.2k Vol
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-200/60 bg-white/60 p-3 font-mono text-[10px] opacity-60 transition-opacity duration-300 group-hover:opacity-100 dark:border-stone-800/60 dark:bg-[#12161f]/40">
                  <span className="text-slate-500 dark:text-stone-400">"emergency plumber"</span>
                  <span className="rounded border border-emerald-500/10 bg-emerald-500/10 px-2 py-0.5 font-bold text-emerald-500">
                    1.8k Vol
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: GBP Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/80 p-8 text-left shadow-2xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(16,185,129,0.04)] dark:border-stone-800 dark:bg-[#0c0e12]/90 dark:hover:border-stone-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#10b981] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#10b981] group-hover:text-white dark:border-stone-800 dark:bg-[#12161f]">
                    <FileText size={20} />
                  </div>
                  <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider text-emerald-600 uppercase dark:border-emerald-500/10 dark:bg-emerald-500/5 dark:text-emerald-400">
                    Phase 2: Authority
                  </span>
                </div>

                <div>
                  <h3 className="mb-2.5 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#10b981] dark:text-white">
                    GBP Authority Optimization
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-stone-400">
                    Complete setup and tuning of services, categories, operating hours, micro-regions, and conversion
                    pathways.
                  </p>
                </div>
              </div>

              {/* Furnished Visual: Circular Progress Metric & Verification Badge */}
              <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-stone-900">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center">
                    <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
                      <path
                        className="text-slate-200 dark:text-stone-800"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="animate-pulse text-[#10b981]"
                        strokeDasharray="98, 100"
                        strokeWidth="3"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute font-mono text-[8px] font-bold text-slate-800 dark:text-white">98%</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-800 dark:text-stone-300">
                      GBP Profile Score
                    </span>
                    <span className="block font-mono text-[8px] text-slate-500">Optimal Configuration Set</span>
                  </div>
                </div>
                <span className="flex items-center gap-1 rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] font-bold text-[#10b981]">
                  ✓ VERIFIED
                </span>
              </div>
            </motion.div>

            {/* CARD 3: On-Page Local SEO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/80 p-8 text-left shadow-2xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(18,81,230,0.04)] dark:border-stone-800 dark:bg-[#0c0e12]/90 dark:hover:border-stone-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1251e6]/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#4a7cf6] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1251e6] group-hover:text-white dark:border-stone-800 dark:bg-[#12161f]">
                    <Target size={20} />
                  </div>
                  <span className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider text-slate-500 uppercase dark:border-stone-800 dark:bg-stone-900/60 dark:text-stone-500">
                    Phase 3: Schema
                  </span>
                </div>

                <div>
                  <h3 className="mb-2.5 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#4a7cf6] dark:text-white">
                    Geospatial Schema Alignment
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-stone-400">
                    We inject structural microdata schema, geospatial localized tags, and regional neighborhood landing
                    page copy.
                  </p>
                </div>
              </div>

              {/* Furnished Visual: Clean Code Block Visualizer */}
              <div className="relative z-10 mt-8 border-t border-slate-200 pt-6 dark:border-stone-900">
                <div className="overflow-x-hidden rounded-xl border border-slate-200 bg-slate-100 p-3 font-mono text-[9px] leading-tight text-slate-700 dark:border-stone-800 dark:bg-[#12161f]/90 dark:text-stone-400">
                  <span className="text-amber-600 dark:text-amber-400">"@context"</span>:{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">"https://schema.org"</span>,
                  <br />
                  <span className="text-amber-400">"@type"</span>:{' '}
                  <span className="text-emerald-600 dark:text-emerald-400">"LocalBusiness"</span>,
                  <br />
                  <span className="text-amber-400">"geo"</span>: &#123;{' '}
                  <span className="text-blue-600 dark:text-blue-400">"lat"</span>: 34.05,{' '}
                  <span className="text-blue-600 dark:text-blue-400">"lng"</span>: -118.24 &#125;
                </div>
              </div>
            </motion.div>

            {/* CARD 4: Local Citations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/80 p-8 text-left shadow-2xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(18,81,230,0.04)] dark:border-stone-800 dark:bg-[#0c0e12]/90 dark:hover:border-stone-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1251e6]/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#4a7cf6] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1251e6] group-hover:text-white dark:border-stone-800 dark:bg-[#12161f]">
                    <MapPin size={20} />
                  </div>
                  <span className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider text-slate-500 uppercase dark:border-stone-800 dark:bg-stone-900/60 dark:text-stone-500">
                    Ongoing Sync
                  </span>
                </div>

                <div>
                  <h3 className="mb-2.5 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#4a7cf6] dark:text-white">
                    Symmetric Citation Networks
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-stone-400">
                    Verify and deploy 100% accurate, synced NAP (Name, Address, Phone) registry entries across 120+ key
                    local search index.
                  </p>
                </div>
              </div>

              {/* Furnished Visual: Local Sync Status Indicator */}
              <div className="relative z-10 mt-8 border-t border-slate-200 pt-6 dark:border-stone-900">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-wider text-slate-500 uppercase dark:text-stone-500">
                    Network Coverage
                  </span>
                  <span className="font-mono text-[9px] font-bold text-[#10b981]">120+ Syncing Live</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Google Maps', 'Apple Maps', 'Bing Local', 'Yelp Network', 'Foursquare'].map((dir, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 rounded border border-slate-200 bg-white px-2 py-0.5 font-mono text-[8px] font-bold text-slate-700 dark:border-stone-800 dark:bg-[#12161f] dark:text-stone-300"
                    >
                      <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-500"></span>
                      {dir}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CARD 5: Google Maps Ranking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/80 p-8 text-left shadow-2xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(16,185,129,0.04)] dark:border-stone-800 dark:bg-[#0c0e12]/90 dark:hover:border-stone-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#10b981] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#10b981] group-hover:text-white dark:border-stone-800 dark:bg-[#12161f]">
                    <Award size={20} />
                  </div>
                  <span className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider text-emerald-600 uppercase dark:border-emerald-500/10 dark:bg-emerald-500/5 dark:text-emerald-400">
                    Top 3 Focus
                  </span>
                </div>

                <div>
                  <h3 className="mb-2.5 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#10b981] dark:text-white">
                    Map Pack Domination
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-stone-400">
                    Move your business pin up the algorithmic hierarchy to anchor within the organic map block on
                    desktop and mobile.
                  </p>
                </div>
              </div>

              {/* Furnished Visual: Micro 3-pack Ranking Showcase */}
              <div className="relative z-10 mt-8 border-t border-slate-200 pt-6 dark:border-stone-900">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px]">
                    <span className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-white">
                      <span className="text-emerald-500 dark:text-emerald-400">1st</span> Your Spot
                    </span>
                    <span className="font-mono text-[8px] font-bold tracking-wider text-emerald-500 uppercase dark:text-emerald-400">
                      ▲ SPOTLIGHT
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-100/40 px-3 py-1.5 text-[10px] opacity-40 dark:border-stone-800 dark:bg-[#12161f]/40">
                    <span className="text-slate-500 dark:text-stone-400">2nd Competitor Corp</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 6: Review Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/80 p-8 text-left shadow-2xl transition-all duration-500 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(18,81,230,0.04)] dark:border-stone-800 dark:bg-[#0c0e12]/90 dark:hover:border-stone-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1251e6]/3 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#4a7cf6] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1251e6] group-hover:text-white dark:border-stone-800 dark:bg-[#12161f]">
                    <Star size={20} />
                  </div>
                  <span className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-[9px] font-bold tracking-wider text-slate-500 uppercase dark:border-stone-800 dark:bg-stone-900/60 dark:text-stone-500">
                    Growth Loop
                  </span>
                </div>

                <div>
                  <h3 className="mb-2.5 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#4a7cf6] dark:text-white">
                    Review Growth & Response
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-stone-400">
                    Automated client follow-up campaigns and responsive review coordination to cultivate premium
                    authority signals.
                  </p>
                </div>
              </div>

              {/* Furnished Visual: Micro Reputation Bar */}
              <div className="relative z-10 mt-8 border-t border-slate-200 pt-6 dark:border-stone-900">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#facc15]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" stroke="currentColor" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] font-bold font-semibold text-slate-800 dark:text-white">
                    4.9 / 5 Rating
                  </span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-stone-950">
                  <div className="h-full rounded-full bg-[#facc15]" style={{ width: '96%' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-slate-100/50 px-4 pt-[55px] pb-[56px] transition-colors duration-500 sm:px-6 md:px-12 md:pt-[80px] md:pb-[80px] dark:border-stone-800 dark:bg-[#0a0c10]">
        {/* Background glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-1/2 w-3/4 -translate-x-1/2 rounded-full bg-[#1251e6]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-24">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1251e6]/20 bg-[#1251e6]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#4a7cf6] uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4a7cf6]"></span>
              OUR PROVEN ROADMAP
            </div>
            <h2 className="font-display text-3xl leading-tight font-light text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              A Structured, High-Conversion <br className="hidden sm:block" />
              <span className="font-medium text-[#4a7cf6]">3-Phase Local SEO Blueprint</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600 sm:text-base dark:text-stone-400">
              No guesswork. Just a flawless performance blueprint designed to scale your local visibility and convert
              map searchers into lifelong paying customers.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-3">
            {[
              {
                phase: '01',
                title: 'Audit & Intelligence',
                subtitle: 'Phase 01: Audit & Strategy',
                desc: 'We start by uncovering local search bottlenecks and mapping out a high-intent target keyword plan.',
                bullets: [
                  {
                    label: 'Deep SEO & GMB Audit',
                    detail: 'Analyzing 30+ ranking factors, competitor density, and profile integrity.',
                  },
                  {
                    label: 'High-Intent Keywords',
                    detail: 'Pinpointing exact localized search phrases buyers actively use.',
                  },
                  {
                    label: 'Geo-Targeting Strategy',
                    detail: 'Structuring service zones to capture high-value nearby micro-markets.',
                  },
                ],
                glowColor: 'hover:shadow-[#1251e6]/5',
                borderColor: 'group-hover:border-[#1251e6]/30',
                textColor: 'text-[#4a7cf6]',
              },
              {
                phase: '02',
                title: 'Optimize & Amplify',
                subtitle: 'Phase 02: Advanced Execution',
                desc: 'We overhaul your local business listings, build high-authority citations, and fine-tune your map authority signals.',
                bullets: [
                  {
                    label: 'Profile Domination',
                    detail: 'Structuring complete, keyword-enriched information optimized for Google pack.',
                  },
                  {
                    label: 'Citations & NAP Sync',
                    detail: 'Creating clean directory citations with perfect Name, Address, Phone alignment.',
                  },
                  {
                    label: 'Local Content & Schema',
                    detail: 'Integrating local-optimized schema signals and content on your web properties.',
                  },
                ],
                glowColor: 'hover:shadow-[#10b981]/5',
                borderColor: 'group-hover:border-[#10b981]/30',
                textColor: 'text-[#10b981]',
              },
              {
                phase: '03',
                title: 'Authority & Dominance',
                subtitle: 'Phase 03: Growth & Analytics',
                desc: 'We implement automated systems to grow 5-star reviews and continuously scale local rankings.',
                bullets: [
                  {
                    label: 'Review Acquisition Systems',
                    detail: 'Deploying seamless review automation loops to gain customer feedback.',
                  },
                  {
                    label: 'Maps Authority Campaigns',
                    detail: 'Fueling Google maps with continuous active geo-signals for maximum retention.',
                  },
                  {
                    label: 'Transparent ROI Dashboards',
                    detail: 'Providing clear, visual metrics tracking calls, clicks, and rank growth.',
                  },
                ],
                glowColor: 'hover:shadow-[#facc15]/5',
                borderColor: 'group-hover:border-[#facc15]/30',
                textColor: 'text-[#facc15]',
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 text-left shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-slate-50 sm:p-10 dark:border-stone-800/80 dark:bg-[#0e1117]/40 dark:hover:bg-[#0e1117] ${p.glowColor}`}
              >
                {/* Large Background Phase Indicator */}
                <span className="absolute top-6 right-8 font-mono text-7xl font-black text-slate-100 transition-colors select-none group-hover:text-slate-200 sm:text-8xl dark:text-stone-800/10 dark:group-hover:text-stone-800/20">
                  {p.phase}
                </span>

                <div className="relative z-10 space-y-6">
                  <div>
                    <span
                      className={`font-mono text-[10px] font-bold tracking-widest uppercase ${p.textColor} mb-2 block`}
                    >
                      {p.subtitle}
                    </span>
                    <h3 className="font-display text-xl font-medium text-slate-900 transition-colors group-hover:text-slate-950 sm:text-2xl dark:text-white dark:group-hover:text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-stone-400">{p.desc}</p>
                  </div>

                  {/* Bullet points container */}
                  <div className="space-y-4 border-t border-slate-100 pt-4 dark:border-stone-800/60">
                    {p.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-3 text-left">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle2 size={14} className={p.textColor} />
                        </div>
                        <div>
                          <h4 className="text-xs leading-snug font-semibold text-slate-800 sm:text-sm dark:text-stone-200">
                            {b.label}
                          </h4>
                          <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500 sm:text-xs dark:text-stone-500">
                            {b.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner Decorative Hover Indicator */}
                <div
                  className={`absolute right-0 bottom-0 left-0 h-[2px] bg-slate-200 transition-all duration-300 dark:bg-stone-800/80 ${p.borderColor} border-b`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL RESULTS STATS - INTERACTIVE LIFT DASHBOARD */}
      <section className="relative overflow-hidden bg-white px-4 pt-[55px] pb-[56px] transition-colors duration-500 sm:px-6 md:px-12 md:pt-[80px] md:pb-[80px] dark:bg-[#06080b]">
        {/* Background ambient glow matching current niche color */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06] blur-[160px] transition-all duration-1000 dark:opacity-20"
          style={{
            background: [
              'rgba(16,185,129,0.3)', // healthcare green
              'rgba(74,124,246,0.3)', // legal blue
              'rgba(250,204,21,0.3)', // contracting yellow
              'rgba(244,63,94,0.3)', // retail/dining rose
            ][activeNiche],
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="mb-12 max-w-3xl text-center sm:mb-20 lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1251e6]/20 bg-[#1251e6]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#4a7cf6] uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4a7cf6]"></span>
              OUR COMPREHENSIVE LIFT METRICS
            </div>
            <h2 className="font-display text-3xl leading-[1.1] font-light tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Compounding Growth. <br />
              <span className="font-medium text-[#4a7cf6]">Real Local Dominance.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm text-slate-600 sm:text-base dark:text-stone-400">
              Select your specific business sector below to see how our targeted Google Map Pack optimization turns
              nearby searches into direct booked revenue.
            </p>
          </div>

          {/* Interactive Bento Workspace */}
          <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Sidebar Niche Selector (Left) */}
            <div className="space-y-4 lg:col-span-4">
              {[
                {
                  title: 'Healthcare & Dental',
                  tagline: 'Patient Acquisition Engine',
                  color: 'border-[#10b981]/20 hover:border-[#10b981]/40 text-[#10b981]',
                  glowColor: 'bg-[#10b981]',
                },
                {
                  title: 'Law Firms & Attorneys',
                  tagline: 'High-Intent Client Generator',
                  color: 'border-[#4a7cf6]/20 hover:border-[#4a7cf6]/40 text-[#4a7cf6]',
                  glowColor: 'bg-[#4a7cf6]',
                },
                {
                  title: 'Home Services & Contractors',
                  tagline: 'Emergency Booking Accelerator',
                  color: 'border-[#facc15]/20 hover:border-[#facc15]/40 text-[#facc15]',
                  glowColor: 'bg-[#facc15]',
                },
                {
                  title: 'Premium Retail & Dining',
                  tagline: 'Foot-Traffic & Reservations Boost',
                  color: 'border-[#f43f5e]/20 hover:border-[#f43f5e]/40 text-[#f43f5e]',
                  glowColor: 'bg-[#f43f5e]',
                },
              ].map((niche, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveNiche(idx)}
                  className={`group relative w-full cursor-pointer overflow-hidden rounded-[1.5rem] border p-6 text-left transition-all duration-500 ${
                    activeNiche === idx
                      ? 'border-slate-300 bg-slate-100 shadow-xl dark:border-stone-700 dark:bg-[#0e1117] dark:shadow-black/40'
                      : 'border-slate-200 bg-white hover:bg-slate-50 dark:border-stone-900/60 dark:bg-[#0e1117]/40 dark:hover:bg-[#0e1117]/75'
                  }`}
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="space-y-1.5">
                      <span
                        className={`font-mono text-[9px] font-bold tracking-wider uppercase ${
                          activeNiche === idx ? niche.color.split(' ').pop() : 'text-slate-500 dark:text-stone-500'
                        }`}
                      >
                        SECTOR 0{idx + 1}
                      </span>
                      <h3
                        className={`font-display text-base transition-colors sm:text-lg ${
                          activeNiche === idx
                            ? 'font-medium text-slate-900 dark:text-white'
                            : 'text-slate-500 group-hover:text-slate-700 dark:text-stone-400 dark:group-hover:text-stone-200'
                        }`}
                      >
                        {niche.title}
                      </h3>
                      <p className="line-clamp-1 text-xs font-light text-slate-500 transition-colors group-hover:text-slate-700 dark:text-stone-500 dark:group-hover:text-stone-400">
                        {niche.tagline}
                      </p>
                    </div>

                    {/* Status pulsing indicator */}
                    <div className="mt-1 flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full transition-all duration-500 ${
                          activeNiche === idx
                            ? `${niche.glowColor} animate-pulse shadow-[0_0_8px_currentColor]`
                            : 'bg-slate-200 dark:bg-stone-800'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Dynamic background lighting card highlight on active */}
                  {activeNiche === idx && (
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#4a7cf6] to-transparent opacity-50" />
                  )}
                </button>
              ))}
            </div>

            {/* Dashboard Visualizer Panel (Right) */}
            <div className="lg:col-span-8">
              {[
                {
                  id: 'healthcare',
                  title: 'Healthcare & Dental',
                  tagline: 'Patient Acquisition Engine',
                  desc: "Patients searching 'dentist near me' or 'urgent care clinic' act fast. Map pack ranking is the single greatest driver of high-value appointments.",
                  roi: '$14,500+',
                  roiLabel: 'Est. Monthly Value Lift',
                  conversionRate: 84,
                  accentColor: '#10b981',
                  accentClass: 'text-[#10b981]',
                  bgGlow: 'rgba(16,185,129,0.1)',
                  stats: [
                    { val: '+240%', label: 'Map Visibility Boost', desc: 'Higher local search exposure' },
                    { val: '+135%', label: 'Inbound Patient Calls', desc: 'Direct booking inquiries' },
                    { val: '+164%', label: 'Website Click Rate', desc: 'Clinic info views' },
                    { val: '+88%', label: 'Direction Requests', desc: 'Active travel to clinic' },
                  ],
                },
                {
                  id: 'legal',
                  title: 'Law Firms & Attorneys',
                  tagline: 'High-Intent Client Generator',
                  desc: 'High-value clients searching for local representation make immediate calls. Visibility in the Google local 3-pack is critical for legal dominance.',
                  roi: '$22,800+',
                  roiLabel: 'Est. Settlement Pipeline Lift',
                  conversionRate: 76,
                  accentColor: '#4a7cf6',
                  accentClass: 'text-[#4a7cf6]',
                  bgGlow: 'rgba(74,124,246,0.1)',
                  stats: [
                    { val: '+195%', label: 'Local Search priority', desc: 'Top 3-pack position' },
                    { val: '+112%', label: 'Inbound Client Calls', desc: 'Immediate case intake' },
                    { val: '+148%', label: 'Contact Form Leads', desc: 'Website inbound submissions' },
                    { val: '+64%', label: 'Office Consultations', desc: 'In-person map visits' },
                  ],
                },
                {
                  id: 'services',
                  title: 'Home Services & Contractors',
                  tagline: 'Emergency Booking Accelerator',
                  desc: 'From emergency plumbing to roofing, local service requests originate on maps. Perfect NAP alignment ensures you get the first call.',
                  roi: '$16,200+',
                  roiLabel: 'Est. Monthly Dispatch Revenue',
                  conversionRate: 91,
                  accentColor: '#facc15',
                  accentClass: 'text-[#facc15]',
                  bgGlow: 'rgba(250,204,21,0.1)',
                  stats: [
                    { val: '+280%', label: 'Service Area Reach', desc: 'Local community coverage' },
                    { val: '+160%', label: 'Emergency Dispatches', desc: 'Direct calls from maps' },
                    { val: '+192%', label: 'Quote Request Rate', desc: 'Leads from Google Profile' },
                    { val: '+114%', label: 'Direct Service Bookings', desc: 'Jobs scheduled online' },
                  ],
                },
                {
                  id: 'dining',
                  title: 'Premium Retail & Dining',
                  tagline: 'Foot-Traffic & Reservations Boost',
                  desc: 'Foot traffic and table reservations are won directly in Google Maps. Dynamic photo integration and stellar reviews keep your tables packed.',
                  roi: '$9,800+',
                  roiLabel: 'Est. Walk-In Revenue Lift',
                  conversionRate: 95,
                  accentColor: '#f43f5e',
                  accentClass: 'text-[#f43f5e]',
                  bgGlow: 'rgba(244,63,94,0.1)',
                  stats: [
                    { val: '+310%', label: 'Nearby Explorer Reach', desc: 'Discovered by nearby users' },
                    { val: '+85%', label: 'Table Reservations', desc: 'Direct booking actions' },
                    { val: '+215%', label: 'In-Store Foot Traffic', desc: 'Directions to store/café' },
                    { val: '+185%', label: 'Review Interactions', desc: 'Compounding social proof' },
                  ],
                },
              ].map((niche, nIdx) => {
                if (activeNiche !== nIdx) return null

                const radius = 42
                const circumference = 2 * Math.PI * radius
                const strokeDashoffset = circumference - (niche.conversionRate / 100) * circumference

                return (
                  <motion.div
                    key={niche.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/90 p-6 shadow-2xl backdrop-blur-md sm:p-10 dark:border-stone-800/80 dark:bg-[#0e1117]/60"
                  >
                    {/* Header bar within dashboard */}
                    <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center dark:border-stone-800/60">
                      <div className="text-left">
                        <span
                          className={`font-mono text-[10px] font-bold tracking-widest uppercase ${niche.accentClass}`}
                        >
                          {niche.tagline}
                        </span>
                        <h3 className="font-display mt-1 text-xl font-medium text-slate-900 sm:text-2xl dark:text-white">
                          {niche.title} Performance Gained
                        </h3>
                      </div>
                      <p className="max-w-sm text-left text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-stone-400">
                        {niche.desc}
                      </p>
                    </div>

                    {/* Interactive Stats Grid */}
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                      {/* Left: Conversion Rate Dial & Monthly ROI Booster Meter */}
                      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-center md:col-span-5 dark:border-stone-800/40 dark:bg-[#07090d]/60">
                        <div className="relative mb-5 flex h-36 w-36 items-center justify-center">
                          {/* Radial Progress Gauge */}
                          <svg className="h-full w-full -rotate-90 transform">
                            <circle
                              cx="72"
                              cy="72"
                              r={radius}
                              stroke="rgba(0,0,0,0.03)"
                              className="dark:stroke-white/[0.03]"
                              strokeWidth="8"
                              fill="transparent"
                            />
                            <motion.circle
                              cx="72"
                              cy="72"
                              r={radius}
                              stroke={niche.accentColor}
                              strokeWidth="8"
                              fill="transparent"
                              strokeDasharray={circumference}
                              initial={{ strokeDashoffset: circumference }}
                              animate={{ strokeDashoffset }}
                              transition={{ duration: 1, ease: 'easeOut' }}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="font-display text-3xl font-bold text-slate-900 dark:text-white">
                              {niche.conversionRate}%
                            </span>
                            <span className="font-mono text-[9px] font-bold tracking-widest text-slate-400 uppercase dark:text-stone-500">
                              CONVERTED
                            </span>
                          </div>
                        </div>

                        {/* Estimated ROI Box */}
                        <div className="relative z-10 mt-2 w-full space-y-1">
                          <p className="font-mono text-[9px] leading-none font-bold tracking-wider text-slate-500 uppercase dark:text-stone-500">
                            {niche.roiLabel}
                          </p>
                          <h4 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            {niche.roi}
                          </h4>
                          <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-600 uppercase dark:text-emerald-400">
                            <TrendingUp size={12} /> High Yield Lift
                          </span>
                        </div>
                      </div>

                      {/* Right: Detailed Lift Breakdown */}
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-7">
                        {niche.stats.map((st, sIdx) => (
                          <div
                            key={sIdx}
                            className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition-colors hover:border-slate-300 dark:border-stone-800/40 dark:bg-[#07090d]/30 dark:hover:border-stone-800"
                          >
                            <div className="flex items-start justify-between">
                              <h4 className={`font-display text-2xl font-bold sm:text-3xl ${niche.accentClass}`}>
                                {st.val}
                              </h4>
                              <div
                                className={`rounded-lg border border-slate-200 bg-slate-100 p-1.5 dark:border-stone-800 dark:bg-stone-900/80 ${niche.accentClass}`}
                              >
                                <TrendingUp size={14} />
                              </div>
                            </div>
                            <h5 className="mt-3 text-xs font-semibold tracking-wider text-slate-800 uppercase dark:text-stone-200">
                              {st.label}
                            </h5>
                            <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500 dark:text-stone-500">
                              {st.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Action Blocks */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="https://wa.me/923012345678"
              target="_blank"
              rel="noreferrer"
              className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-[11px] font-bold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(37,211,102,0.2)] transition-all hover:-translate-y-1 hover:bg-[#128C7E] sm:w-auto sm:text-xs"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#1251e6] to-[#0a3bb3] px-8 py-4 text-[11px] font-bold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(18,81,230,0.3)] transition-all hover:-translate-y-1 hover:brightness-110 sm:w-auto sm:text-xs"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-slate-100/50 px-4 pt-[55px] pb-[56px] transition-colors duration-500 sm:px-6 md:px-12 md:pt-[80px] md:pb-[80px] dark:border-stone-800 dark:bg-[#0a0c10]">
        {/* Abstract background elements */}
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#1251e6]/3 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#10b981]/2 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Content Column: Trust Score & Navigation */}
            <div className="space-y-8 text-center lg:col-span-5 lg:text-left">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1251e6]/20 bg-[#1251e6]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#4a7cf6] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4a7cf6]"></span>
                  CLIENT SATISFACTION
                </div>
                <h2 className="font-display text-3xl leading-tight font-light tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                  What Our Partners <br className="hidden lg:block" />
                  <span className="font-medium text-[#4a7cf6]">Say About Us</span>
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base lg:mx-0 dark:text-stone-400">
                  We don’t just build visibility—we build durable client pipelines. Read verified, real-world growth
                  stories from our outstanding business partners.
                </p>
              </div>

              {/* Google Verified Trust Widget */}
              <div className="mx-auto flex max-w-sm items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-lg lg:mx-0 dark:border-stone-800/80 dark:bg-[#0e1117]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  <span className="font-display text-xl font-bold text-white">G</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-lg font-bold text-slate-900 dark:text-white">4.9 / 5.0</span>
                    <div className="flex text-[#facc15]">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={12} fill="currentColor" stroke="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p className="font-mono text-xs text-slate-400 dark:text-stone-500">
                    Based on 140+ Google Business Reviews
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                    <CheckCircle2 size={10} /> 100% Verified Partners
                  </span>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-center gap-4 lg:justify-start">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? 4 : prev - 1))}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all hover:-translate-x-0.5 hover:border-[#1251e6]/40 hover:text-slate-900 dark:border-stone-800 dark:bg-[#0e1117] dark:text-stone-400 dark:hover:text-white"
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
                        currentTestimonial === idx
                          ? 'w-6 bg-[#4a7cf6]'
                          : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-stone-800 dark:hover:bg-stone-700'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev === 4 ? 0 : prev + 1))}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all hover:translate-x-0.5 hover:border-[#1251e6]/40 hover:text-slate-900 dark:border-stone-800 dark:bg-[#0e1117] dark:text-stone-400 dark:hover:text-white"
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
                      "Before Local Rank SEO, we weren't even in the top 20 on Google Maps. Within 60 days, we hit the 3-Pack for 'emergency plumber Dallas'. Our phone hasn't stopped ringing. Absolute game-changer!",
                    author: 'Jason T.',
                    role: 'Plumbing Business Owner',
                    location: 'Dallas, TX',
                    metric: '312% Call Volume Increase',
                    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
                  },
                  {
                    quote:
                      'As a dental clinic, trust is everything. Their review generation system helped us acquire over 120 verified 5-star reviews in under 3 months, completely dominating local Denver pack.',
                    author: 'Dr. Sarah M.',
                    role: 'Family Dentist',
                    location: 'Denver, CO',
                    metric: '185 New Leads/Month Generated',
                    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
                  },
                  {
                    quote:
                      "Our restaurant's local foot traffic has grown by 70%. Customers tell us they found us via Google Maps searching 'best dining near me'. Our map optimization is paying for itself 20x over.",
                    author: 'David L.',
                    role: 'Restaurant Group Director',
                    location: 'Chicago, IL',
                    metric: '+215% Foot Traffic Hike',
                    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
                  },
                  {
                    quote:
                      'Finding a reliable SEO agency is tough, but these guys delivered beyond expectation. We went from invisible on local search to holding the rank #1 spot in Orlando. Genuinely recommended.',
                    author: 'Michael R.',
                    role: 'Roofing Contractor',
                    location: 'Orlando, FL',
                    metric: '$45,000+ Monthly Pipeline Gain',
                    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
                  },
                  {
                    quote:
                      'The local search authority they built for our firm has been sensational. We are ranking for some of the most competitive legal terms in Boston, and our cost-per-lead has dropped by 65%.',
                    author: 'Elena S.',
                    role: 'Boutique Law Partner',
                    location: 'Boston, MA',
                    metric: '65% Drop in CPA Leads',
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
                      className="relative flex w-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 text-left shadow-2xl transition-colors hover:border-slate-300 sm:p-10 dark:border-stone-800/80 dark:bg-[#0e1117] dark:hover:border-stone-700/80"
                    >
                      {/* Giant Quote SVG Icon */}
                      <div className="pointer-events-none absolute top-8 right-8 text-slate-100 dark:text-stone-800/25">
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
                          <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-stone-700" />
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1251e6]/20 bg-[#1251e6]/10 px-3 py-1 font-mono text-[10px] font-bold text-[#4a7cf6] uppercase">
                            <TrendingUp size={12} /> {t.metric}
                          </span>
                        </div>

                        {/* Testimonial Quote Text */}
                        <p className="text-base leading-relaxed font-light text-slate-800 italic sm:text-lg dark:text-stone-200">
                          "{t.quote}"
                        </p>
                      </div>

                      {/* Author Card Footer */}
                      <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100 pt-6 dark:border-stone-800/60">
                        <img
                          src={t.img}
                          alt={t.author}
                          className="h-14 w-14 rounded-full border-2 border-slate-200 object-cover shadow-md dark:border-stone-800"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base leading-snug font-semibold text-slate-900 sm:text-lg dark:text-white">
                              {t.author}
                            </h4>
                            <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" title="Verified Client" />
                          </div>
                          <p className="mt-0.5 text-xs text-slate-600 dark:text-stone-400">
                            {t.role} •{' '}
                            <span className="font-mono text-[10px] tracking-wide text-slate-400 dark:text-stone-500">
                              {t.location}
                            </span>
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

      {/* BOTTOM CTA */}
      <section className="mt-8 border-t border-slate-200 bg-slate-50 pt-[55px] pb-[56px] transition-colors duration-500 sm:mt-12 md:pt-[80px] md:pb-[80px] dark:border-stone-800 dark:bg-gradient-to-b dark:from-[#0a0c10] dark:to-[#06080b]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12">
          <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl sm:p-12 lg:flex-row lg:gap-12 dark:border-stone-800 dark:bg-[#0e1117]">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#f97316]/5 blur-[80px]" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#1251e6]/5 blur-[80px]" />

            <div className="relative z-10 max-w-2xl space-y-4 text-center lg:text-left">
              <h2 className="font-display text-2xl leading-tight font-medium text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
                Ready To Rank Higher & Get More Local Customers?
              </h2>
              <p className="text-sm text-slate-600 sm:text-base dark:text-stone-400">
                Get a free local SEO audit and see how we can grow your business! No obligations.
              </p>
            </div>

            <div className="relative z-10 flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#f97316] to-[#ea580c] px-8 py-4 text-[11px] font-bold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all hover:-translate-y-1 hover:brightness-110 sm:w-auto sm:text-xs"
              >
                Get Free Audit
              </Link>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-slate-100 px-8 py-4 text-[11px] font-bold tracking-widest text-slate-800 uppercase transition-all hover:-translate-y-1 hover:bg-slate-200 sm:w-auto sm:text-xs dark:border-stone-700 dark:bg-[#12161f] dark:text-white dark:hover:bg-stone-800"
              >
                <Phone size={14} /> Book a Call
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-10 lg:justify-start">
            {[
              { text: 'No Long-Term Contracts' },
              { text: '100% Transparent Work' },
              { text: 'Monthly Reporting' },
              { text: 'Dedicated Support' },
            ].map((ft, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#10b981]" />
                <span className="text-xs text-slate-800 sm:text-sm dark:text-stone-300">{ft.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
