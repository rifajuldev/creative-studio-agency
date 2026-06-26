'use client'

import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  FileText,
  Key,
  Layout,
  MapPin,
  MonitorPlay,
  Phone,
  RefreshCcw,
  Search,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const graphData = [
  { name: 'Apr 1', clicks: 200, conv: 120 },
  { name: 'Apr 8', clicks: 350, conv: 200 },
  { name: 'Apr 15', clicks: 280, conv: 180 },
  { name: 'Apr 22', clicks: 450, conv: 300 },
  { name: 'Apr 29', clicks: 580, conv: 400 },
]

const beforeData = [
  { name: '1', value: 100 },
  { name: '2', value: 120 },
  { name: '3', value: 90 },
  { name: '4', value: 140 },
  { name: '5', value: 110 },
  { name: '6', value: 160 },
  { name: '7', value: 130 },
]

const afterData = [
  { name: '1', value: 200 },
  { name: '2', value: 280 },
  { name: '3', value: 250 },
  { name: '4', value: 350 },
  { name: '5', value: 320 },
  { name: '6', value: 450 },
  { name: '7', value: 500 },
]

export default function GoogleAdsService() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqs = [
    {
      q: 'How quickly will I see results?',
      a: 'Most campaigns start generating data within days. Depending on your industry, you can expect noticeable results in 2-4 weeks.',
    },
    {
      q: 'Do you work with local businesses?',
      a: 'Yes, we specialize in local SEO and local Google Ads campaigns to drive foot traffic and calls.',
    },
    {
      q: 'Can you manage existing campaigns?',
      a: 'Absolutely. We can audit and restructure your current campaigns to improve ROI and eliminate wasted spend.',
    },
    {
      q: 'Do you provide reports?',
      a: 'We provide detailed monthly reports and live dashboards so you always know where your money is going.',
    },
    {
      q: 'What budget do I need to get started?',
      a: 'We recommend a minimum ad spend of $1,000/month for effective testing and optimization, but it varies by industry.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-900 transition-colors duration-500 selection:bg-blue-500/30 selection:text-white dark:bg-[#06080b] dark:text-white">
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

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f0f7ff] to-white pt-24 pb-32 dark:from-[#06080b] dark:to-[#0a0c10]">
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 origin-top-right -skew-x-12 transform bg-blue-600/5 dark:bg-blue-500/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm dark:border-stone-800/80 dark:bg-[#0e1117] dark:text-stone-300">
                <span className="text-lg leading-none font-bold text-red-500">G</span>
                <span>Google Ads Experts | ROI-Focused Results</span>
              </div>

              <h1 className="text-5xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-white">
                Get More Leads & <br />
                Sales with <br />
                <span className="text-blue-600 dark:text-blue-500">Google Ads</span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-slate-600 dark:text-stone-400">
                We create, optimize, and scale profitable Google Ads campaigns that bring qualified customers to your
                business.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  'More Leads & Phone Calls',
                  'Conversion Tracking Setup',
                  'Higher ROI & Lower Cost Per Click',
                  'Monthly Performance Reports',
                  'Expert Campaign Management',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400" />
                    <span className="text-sm font-medium text-slate-700 dark:text-stone-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500">
                  Get Free Google Ads Audit <FileText className="h-4 w-4" />
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-8 py-4 font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500">
                  <Phone className="h-4 w-4" /> Book Strategy Call
                </button>
              </div>
            </motion.div>

            {/* Right Dashboard Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-200/50 dark:border-stone-800/80 dark:bg-[#0e1117] dark:shadow-none">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-bold text-slate-800 dark:text-white">Google Ads Overview</h3>
                  <div className="flex cursor-pointer items-center gap-1 rounded-md border border-slate-100 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-500 dark:border-stone-800 dark:bg-[#06080b] dark:text-stone-400">
                    Last 30 Days <ChevronDown className="h-3 w-3" />
                  </div>
                </div>

                {/* Metric Cards */}
                <div className="mb-6 grid grid-cols-4 gap-3">
                  <div className="rounded-lg bg-blue-600 p-3 text-white">
                    <div className="mb-1 text-[10px] font-medium opacity-80">Clicks</div>
                    <div className="mb-1 text-xl font-bold">12,850</div>
                    <div className="flex items-center gap-1 text-[10px]">
                      <TrendingUp className="h-3 w-3" /> 54.2%
                    </div>
                  </div>
                  <div className="rounded-lg bg-red-500 p-3 text-white">
                    <div className="mb-1 text-[10px] font-medium opacity-80">Conversions</div>
                    <div className="mb-1 text-xl font-bold">1,243</div>
                    <div className="flex items-center gap-1 text-[10px]">
                      <TrendingUp className="h-3 w-3" /> 68.7%
                    </div>
                  </div>
                  <div className="rounded-lg bg-yellow-500 p-3 text-white">
                    <div className="mb-1 text-[10px] font-medium opacity-80">Cost / Conv.</div>
                    <div className="mb-1 text-xl font-bold">$18.45</div>
                    <div className="flex items-center gap-1 text-[10px]">
                      <TrendingUp className="h-3 w-3 rotate-180" /> 32.8%
                    </div>
                  </div>
                  <div className="rounded-lg bg-emerald-500 p-3 text-white">
                    <div className="mb-1 text-[10px] font-medium opacity-80">Cost</div>
                    <div className="mb-1 text-xl font-bold">$22,910</div>
                    <div className="flex items-center gap-1 text-[10px]">
                      <TrendingUp className="h-3 w-3" /> 21.4%
                    </div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="relative h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={graphData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 10, fill: '#94a3b8' }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                      <Tooltip />
                      <Line type="monotone" dataKey="clicks" stroke="#3b82f6" strokeWidth={3} dot={false} />
                      <Line type="monotone" dataKey="conv" stroke="#10b981" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>

                  {/* Floating ROI Badge */}
                  <div className="animate-bounce-slow absolute right-0 bottom-10 flex flex-col items-center rounded-lg border border-slate-100 bg-white p-3 shadow-lg dark:border-stone-800 dark:bg-[#0e1117] dark:shadow-none">
                    <div className="text-xs font-bold tracking-wide text-slate-500 uppercase dark:text-stone-400">
                      ROI
                    </div>
                    <div className="text-2xl font-black text-slate-800 dark:text-white">358%</div>
                    <div className="text-[10px] font-bold text-green-500 dark:text-green-400">Increase</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 -right-12 -z-10 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/10" />
            </motion.div>

            {/* Mobile Dashboard Graphic */}
            <div className="mx-auto mt-10 w-full max-w-sm lg:hidden">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-xl dark:border-stone-800 dark:bg-[#0e1117]">
                <h3 className="mb-4 font-bold text-slate-800 dark:text-white">Google Ads Snapshot</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-blue-600 p-4 text-white">
                    <div className="text-[10px] font-medium opacity-80">Clicks</div>
                    <div className="text-xl font-bold">12k+</div>
                  </div>
                  <div className="rounded-lg bg-red-500 p-4 text-white">
                    <div className="text-[10px] font-medium opacity-80">Convs</div>
                    <div className="text-xl font-bold">1.2k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="border-y border-slate-200 bg-white py-6 dark:border-stone-800/80 dark:bg-[#06080b]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 opacity-70">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-stone-300">
            <Users className="h-5 w-5 text-blue-600 dark:text-blue-500" /> 700+ Successful Campaigns
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-stone-300">
            <Target className="h-5 w-5 text-blue-600 dark:text-blue-500" /> ROI Focused Proven Strategy
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-stone-300">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              G
            </div>
            Google Partner
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-stone-300">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              A
            </div>
            Google Ads Certified
          </div>
        </div>
      </div>

      {/* 2. PROVEN RESULTS */}
      <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <span className="mb-2 block text-sm font-bold tracking-wider text-blue-600 uppercase dark:text-blue-500">
              Real Business Growth
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">700+ Proven Results</h2>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Stats Left */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm dark:border-stone-800/80 dark:bg-[#0e1117]">
                <TrendingUp className="mx-auto mb-3 h-8 w-8 text-blue-600 dark:text-blue-500" />
                <div className="mb-1 text-3xl font-black text-slate-800 dark:text-white">350%</div>
                <div className="text-xs font-medium text-slate-500 dark:text-stone-400">Increased Leads</div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm dark:border-stone-800/80 dark:bg-[#0e1117]">
                <DollarSign className="mx-auto mb-3 h-8 w-8 text-green-500 dark:text-green-400" />
                <div className="mb-1 text-3xl font-black text-slate-800 dark:text-white">40%</div>
                <div className="text-xs font-medium text-slate-500 dark:text-stone-400">Reduced CPC</div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm dark:border-stone-800/80 dark:bg-[#0e1117]">
                <Target className="mx-auto mb-3 h-8 w-8 text-orange-500 dark:text-orange-400" />
                <div className="mb-1 text-3xl font-black text-slate-800 dark:text-white">220%</div>
                <div className="text-xs font-medium text-slate-500 dark:text-stone-400">Improved Conversion Rate</div>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm dark:border-stone-800/80 dark:bg-[#0e1117]">
                <Users className="mx-auto mb-3 h-8 w-8 text-red-500 dark:text-red-400" />
                <div className="mb-1 text-3xl font-black text-slate-800 dark:text-white">Thousands</div>
                <div className="text-xs font-medium text-slate-500 dark:text-stone-400">Of Qualified Leads</div>
              </div>
            </div>

            {/* Graphs Right */}
            <div className="flex flex-col items-center gap-6 sm:flex-row lg:col-span-7">
              <div className="relative w-full flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/40 dark:border-stone-800/80 dark:bg-[#0e1117] dark:shadow-none">
                <div className="absolute -top-3 left-6 rounded-full bg-slate-800 px-3 py-1 text-[10px] font-bold text-white dark:bg-stone-800">
                  Before Campaign
                </div>
                <div className="mt-2 mb-4 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-stone-400">Clicks</div>
                    <div className="text-xl font-bold dark:text-white">1,240</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-stone-400">Conversions</div>
                    <div className="text-xl font-bold dark:text-white">28</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-stone-400">Cost / Conv</div>
                    <div className="text-xl font-bold text-red-500 dark:text-red-400">$96.45</div>
                  </div>
                </div>
                <div className="h-24 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={beforeData}>
                      <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="hidden shrink-0 rounded-full border border-transparent bg-blue-50 p-2 text-blue-600 sm:flex dark:border-stone-800/80 dark:bg-[#0e1117] dark:text-blue-500">
                <ArrowRight className="h-6 w-6" />
              </div>

              <div className="relative w-full flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/40 dark:border-stone-800/80 dark:bg-[#0e1117] dark:shadow-none">
                <div className="absolute -top-3 left-6 rounded-full bg-green-500 px-3 py-1 text-[10px] font-bold text-white dark:bg-green-600">
                  After Optimization
                </div>
                <div className="mt-2 mb-4 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-stone-400">Clicks</div>
                    <div className="text-xl font-bold dark:text-white">4,810</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-stone-400">Conversions</div>
                    <div className="text-xl font-bold dark:text-white">156</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 dark:text-stone-400">Cost / Conv</div>
                    <div className="text-xl font-bold text-green-500 dark:text-green-400">$24.15</div>
                  </div>
                </div>
                <div className="h-24 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={afterData}>
                      <defs>
                        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#10b981"
                        fillOpacity={1}
                        fill="url(#colorGreen)"
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="bg-white py-24 dark:bg-[#0a0c10]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-2 block text-sm font-bold tracking-wider text-blue-600 uppercase dark:text-blue-500">
              Our Google Ads Services
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Complete Google Ads Solutions</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                icon: Search,
                title: 'Search Ads Management',
                color: 'text-blue-600 dark:text-blue-500',
              },
              {
                icon: MapPin,
                title: 'Local Service Ads',
                color: 'text-green-500 dark:text-green-400',
              },
              {
                icon: Layout,
                title: 'Display Advertising',
                color: 'text-orange-500 dark:text-orange-400',
              },
              {
                icon: MonitorPlay,
                title: 'YouTube Ads',
                color: 'text-red-500 dark:text-red-400',
              },
              {
                icon: ShoppingCart,
                title: 'Shopping Ads',
                color: 'text-blue-500 dark:text-blue-400',
              },
              {
                icon: RefreshCcw,
                title: 'Remarketing Campaigns',
                color: 'text-emerald-500 dark:text-emerald-400',
              },
              {
                icon: Target,
                title: 'Conversion Tracking Setup',
                color: 'text-red-500 dark:text-red-400',
              },
              {
                icon: Layout,
                title: 'Landing Page Optimization',
                color: 'text-blue-600 dark:text-blue-500',
              },
              {
                icon: Users,
                title: 'Competitor Analysis',
                color: 'text-green-600 dark:text-green-500',
              },
              {
                icon: Key,
                title: 'Keyword Research',
                color: 'text-yellow-600 dark:text-yellow-500',
              },
            ].map((s, i) => (
              <div
                key={i}
                className="group flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/50 p-4 transition-all hover:border-blue-300 hover:bg-white hover:shadow-md dark:border-stone-800/80 dark:bg-[#0e1117] dark:hover:border-blue-500/50 dark:hover:bg-[#12161f]"
              >
                <s.icon className={`h-6 w-6 ${s.color} transition-transform group-hover:scale-110`} />
                <span className="text-sm font-bold text-slate-700 dark:text-stone-300">{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-slate-50 py-24 dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              {/* Abstract Target Graphic */}
              <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[40px] border-blue-100 dark:border-blue-900/30" />
                <div className="absolute inset-[60px] rounded-full border-[40px] border-blue-300 dark:border-blue-800/50" />
                <div className="absolute inset-[120px] flex items-center justify-center rounded-full bg-blue-600 shadow-xl dark:bg-blue-600">
                  <Target className="h-16 w-16 text-white" />
                </div>
                {/* Arrow */}
                <div className="absolute top-1/2 left-0 z-10 h-4 w-1/2 origin-right -translate-y-1/2 -rotate-12 skew-x-12 transform rounded-l-full bg-yellow-400 shadow-lg dark:bg-yellow-500" />
                {/* Floating G icon */}
                <div className="absolute bottom-12 left-12 flex h-16 w-16 rotate-12 items-center justify-center rounded-2xl border border-transparent bg-white text-3xl font-black text-blue-600 shadow-xl dark:border-stone-800/80 dark:bg-[#0e1117] dark:text-blue-500">
                  G
                </div>
              </div>
            </div>

            <div>
              <span className="mb-2 block text-sm font-bold tracking-wider text-blue-600 uppercase dark:text-blue-500">
                Why Choose Us
              </span>
              <h2 className="mb-8 text-4xl leading-tight font-extrabold text-slate-900 dark:text-white">
                We Don&apos;t Just Run Ads — <br />
                We Grow Businesses
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  'Competitor Analysis',
                  'Daily Campaign Monitoring',
                  'Target Audience Research',
                  'A/B Testing',
                  'High-Converting Ad Copy',
                  'Conversion Tracking',
                  'Strategic Keyword Selection',
                  'ROI Reporting',
                  'Budget Optimization',
                  'Dedicated Account Manager',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-stone-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="relative overflow-hidden border-t border-stone-800/50 bg-[#06080b] py-24 sm:py-32">
        {/* Cinematic Background Elements */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-[#1251e6]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-6">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1251e6]/20 bg-[#1251e6]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#4a7cf6] uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4a7cf6]"></span>
              Execution Strategy
            </div>
            <h2 className="font-display mb-6 text-4xl leading-tight font-light tracking-tight text-white md:text-5xl">
              Our Proven <span className="font-medium text-[#4a7cf6]">Process</span>
            </h2>
            <p className="text-lg leading-relaxed font-light text-stone-400">
              We take a data-driven, systematic approach to scaling your business. No guesswork, just tested frameworks
              that deliver measurable ROI.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/2 left-0 z-0 hidden h-[1px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-stone-700 to-transparent lg:block" />

            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
              {[
                {
                  id: '01',
                  title: 'Discovery & Audit',
                  desc: 'Deep dive into your current accounts, identifying wasted ad spend and uncovering growth opportunities.',
                  icon: Search,
                  color: 'from-blue-500 to-[#4a7cf6]',
                },
                {
                  id: '02',
                  title: 'Strategy Formulation',
                  desc: 'We build a custom roadmap tailored to your specific market, competitors, and revenue goals.',
                  icon: Target,
                  color: 'from-emerald-400 to-emerald-600',
                },
                {
                  id: '03',
                  title: 'Campaign Architecture',
                  desc: 'Deploying hyper-targeted search and display campaigns with compelling copy and high-converting landing pages.',
                  icon: Layout,
                  color: 'from-blue-500 to-[#4a7cf6]',
                },
                {
                  id: '04',
                  title: 'Launch & Optimize',
                  desc: 'We go live, meticulously monitoring data, adjusting bids, and running A/B tests to maximize performance.',
                  icon: RefreshCcw,
                  color: 'from-emerald-400 to-emerald-600',
                },
                {
                  id: '05',
                  title: 'Scale & Report',
                  desc: 'Once profitable, we scale the budget. You receive transparent, live dashboards showing exact ROI.',
                  icon: TrendingUp,
                  color: 'from-blue-500 to-[#4a7cf6]',
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="flex h-full flex-col items-center rounded-3xl border border-stone-800 bg-[#0e1117] p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:border-stone-700 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] md:p-8">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 rounded-full border border-stone-800 bg-[#06080b] px-3 py-1 font-mono text-xs text-stone-400 transition-colors group-hover:border-stone-600 group-hover:text-white">
                      Phase {step.id}
                    </div>

                    <div
                      className={`relative z-10 mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-stone-800 bg-[#06080b] transition-colors duration-500 group-hover:border-transparent`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}
                      />
                      <step.icon className="relative z-10 h-7 w-7 text-stone-400 transition-colors duration-500 group-hover:text-white" />
                    </div>

                    <h3 className="mb-3 text-lg leading-snug font-medium text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed font-light text-stone-500 transition-colors group-hover:text-stone-400">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
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
                  <Search size={24} className="border-none text-white" strokeWidth={3} />
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
                      "Before AdThrive, we were throwing money away on Google Ads. Within 30 days, our cost per lead dropped by 60% and we're seeing our highest ROI ever. Absolute game-changer!",
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
                      'Our local fitness studio grew by 80 members in one month thanks to their localized search ad strategy. The foot traffic increase has been phenomenal.',
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
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </div>

                      {/* Author Card Footer */}
                      <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-stone-800/60 pt-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
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

      {/* 8. FAQ */}
      <section className="relative overflow-hidden border-t border-stone-800/50 bg-[#06080b] py-24 sm:py-32">
        {/* Cinematic Background Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1251e6]/10 opacity-60 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1251e6]/20 bg-[#1251e6]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-[#4a7cf6] uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4a7cf6]"></span>
              KNOWLEDGE BASE
            </div>
            <h2 className="font-display mb-10 text-4xl leading-tight font-light tracking-tight text-white md:text-5xl">
              Frequently Asked <br />
              <span className="font-medium text-[#4a7cf6]">Questions</span>
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`border-b ${activeFaq === i ? 'border-[#4a7cf6]' : 'border-stone-800/80'} group bg-transparent transition-all duration-300`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="flex w-full items-center justify-between py-6 text-left focus:outline-none"
                  >
                    <span
                      className={`pr-8 text-lg font-medium transition-colors ${activeFaq === i ? 'text-white' : 'text-stone-300 group-hover:text-white'}`}
                    >
                      {faq.q}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${activeFaq === i ? 'rotate-45 bg-[#4a7cf6] text-white shadow-[0_0_15px_rgba(74,124,246,0.4)]' : 'border border-stone-800 bg-[#0e1117] text-stone-400'}`}
                    >
                      <span className="text-xl leading-none font-light">+</span>
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 text-base leading-relaxed text-stone-400">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            {/* Cinematic Data Visualization Graphic */}
            <div className="group relative flex aspect-square w-full max-w-lg flex-col justify-center overflow-hidden rounded-[2.5rem] border border-stone-800 bg-[#0a0c10] p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              {/* Abstract internal glow */}
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#4a7cf6]/10 blur-[80px] transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px] transition-transform duration-700 group-hover:scale-110" />

              <div className="relative z-10">
                <div className="mb-12 flex items-center justify-between">
                  <div>
                    <div className="mb-1 font-mono text-sm tracking-widest text-stone-400 uppercase">Live ROI Data</div>
                    <div className="font-display text-3xl font-bold text-white">+482%</div>
                  </div>
                  <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full border border-stone-800 bg-[#0e1117]">
                    <TrendingUp className="text-[#4a7cf6]" size={20} />
                  </div>
                </div>

                <div className="mb-8 flex h-48 items-end justify-between gap-3">
                  {[40, 70, 50, 90, 60, 100, 80].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: true }}
                      className="group/bar relative w-full cursor-pointer"
                    >
                      <div className="absolute inset-0 rounded-t-lg bg-stone-800/40 transition-colors group-hover/bar:bg-stone-800/80" />
                      <div
                        className={`absolute right-0 bottom-0 left-0 rounded-t-lg transition-all duration-500 ${
                          i % 2 === 0
                            ? 'bg-[#4a7cf6] group-hover/bar:shadow-[0_0_15px_rgba(74,124,246,0.6)]'
                            : 'bg-emerald-500 group-hover/bar:shadow-[0_0_15px_rgba(16,185,129,0.6)]'
                        }`}
                        style={{ height: `${h * 0.7}%` }}
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="relative z-20 flex items-center gap-4 rounded-2xl border border-stone-800 bg-[#0e1117]/60 p-5 backdrop-blur-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-stone-800 bg-[#12161f] shadow-sm">
                    <Search className="text-[#4a7cf6]" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm font-bold text-white">Search Campaigns</div>
                      <div className="font-mono text-xs font-bold text-emerald-400">Active</div>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-stone-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-[#4a7cf6]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER CTA - CINEMATIC */}
      <section className="relative overflow-hidden bg-[#06080b] py-24 transition-colors duration-500 sm:py-32">
        {/* Dynamic Cinematic Backgrounds */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0c1018] via-[#06080b] to-[#06080b]" />

        {/* Glowing Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-[30%] -right-[10%] h-[800px] w-[800px] rounded-full bg-[#1251e6]/15 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="pointer-events-none absolute -bottom-[30%] -left-[10%] h-[600px] w-[600px] rounded-full bg-[#10b981]/15 blur-[100px]"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] border border-stone-800/80 bg-[#0e1117]/80 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          >
            {/* Inner Glass border */}
            <div className="pointer-events-none absolute inset-0 rounded-[3rem] border border-white/5" />

            {/* Cinematic Gradient overlay on the card */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4a7cf6]/10 to-transparent opacity-50" />

            <div className="relative flex flex-col items-center justify-between gap-16 p-10 md:p-16 lg:flex-row lg:p-24">
              <div className="z-10 flex-1 text-center lg:text-left">
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-stone-800 bg-[#06080b]/80 px-4 py-2 shadow-sm">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs font-bold tracking-widest text-stone-300 uppercase">
                    Available for New Projects
                  </span>
                </div>

                <h2 className="font-display mb-6 text-4xl leading-[1.1] font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                  Ready To Dominate <br />
                  <span className="bg-gradient-to-r from-[#4a7cf6] to-emerald-400 bg-clip-text font-semibold text-transparent drop-shadow-[0_0_20px_rgba(74,124,246,0.3)]">
                    Your Market?
                  </span>
                </h2>

                <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed font-light text-stone-400 sm:text-xl lg:mx-0">
                  Stop wasting ad spend. Get a comprehensive Google Ads Audit and discover the exact strategies to scale
                  your revenue exponentially.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                  <button className="flex w-full transform items-center justify-center gap-3 rounded-2xl bg-[#4a7cf6] px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-[0_0_20px_rgba(74,124,246,0.3)] transition-all hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(74,124,246,0.5)] sm:w-auto">
                    <Search className="h-5 w-5" />
                    Claim Free Audit
                  </button>
                  <button className="flex w-full transform items-center justify-center gap-3 rounded-2xl border border-stone-700 bg-[#12161f] px-8 py-4 text-sm font-bold tracking-widest text-white uppercase shadow-sm transition-all hover:-translate-y-1 hover:bg-stone-800 hover:shadow-md sm:w-auto">
                    <Phone className="h-5 w-5 text-stone-400" />
                    Let&apos;s Talk
                  </button>
                </div>
              </div>

              {/* Right side floating graphics */}
              <div className="relative hidden w-full justify-center lg:flex lg:w-5/12">
                <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4a7cf6]/20 blur-[80px]" />

                <div className="relative w-full max-w-sm">
                  {/* Floating Metric Card 1 */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute -top-10 -left-12 z-20 rounded-2xl border border-stone-800 bg-[#06080b]/90 p-5 shadow-xl backdrop-blur-md"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                        <TrendingUp className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div className="font-mono text-xs text-stone-400 uppercase">Conversion</div>
                    </div>
                    <div className="font-display text-2xl font-bold text-white">+124%</div>
                  </motion.div>

                  {/* Main Center Piece */}
                  <div className="relative z-10 overflow-hidden rounded-3xl border border-stone-800 bg-[#0a0c10] p-8 shadow-2xl">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                    <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-white">
                        <Target className="h-4 w-4 text-[#4a7cf6]" />
                        Campaign ROI
                      </div>
                      <div className="font-mono text-xs text-emerald-400">Live</div>
                    </div>

                    <div className="flex h-32 items-end justify-between gap-2">
                      {[30, 45, 25, 60, 50, 85, 100].map((h, i) => (
                        <div key={i} className="group relative w-full">
                          <div className="absolute inset-0 rounded-t-sm bg-white/5" />
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className={`w-full rounded-t-sm ${i === 6 ? 'bg-emerald-500' : 'bg-[#4a7cf6]'}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Metric Card 2 */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                    className="absolute -right-8 -bottom-6 z-20 flex items-center gap-4 rounded-2xl border border-stone-800 bg-[#06080b]/90 p-4 shadow-xl backdrop-blur-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4a7cf6]/20">
                      <CheckCircle2 className="h-5 w-5 text-[#4a7cf6]" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">A+</div>
                      <div className="font-mono text-[10px] text-stone-400 uppercase">Audit Score</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust indicators below card */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 font-mono text-xs font-medium text-stone-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#4a7cf6]" />
              No Obligation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#4a7cf6]" />
              100% Free Strategy
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#4a7cf6]" />
              Data-Driven
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
