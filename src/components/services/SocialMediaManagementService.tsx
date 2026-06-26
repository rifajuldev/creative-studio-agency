'use client'

import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Play,
  Smile,
  Star,
  TrendingUp,
  Twitter,
  Users,
  Youtube,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SocialMediaManagementService() {
  const router = useRouter()
  const [activeSlide, setActiveSlide] = useState(0)

  const testimonials = [
    {
      text: "Their team completely transformed our social media presence. The content and reels are outstanding! We've seen an unprecedented surge in organic reach and engagement within the first month.",
      name: 'Sarah Khan',
      role: 'Founder & Creative Director',
      company: 'The Label Fashion',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      metric: 'Organic Reach: +320%',
      stat: '320%',
      statLabel: 'Reach Increase',
      stars: 5,
      accentColor: 'from-purple-500 to-pink-500',
    },
    {
      text: 'Their SEO-friendly captions and high-impact hashtag strategy increased our organic discoverability tremendously. We are now consistently ranking at the top of our niche hashtags.',
      name: 'Danish Ali',
      role: 'Elite Fitness Coach',
      company: 'PeakPerformance',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&h=300&fit=crop',
      metric: 'Follower Growth: +240%',
      stat: '240%',
      statLabel: 'Follower Growth',
      stars: 5,
      accentColor: 'from-blue-500 to-indigo-500',
    },
    {
      text: 'Professional, hyper-creative, and strictly result-driven team. They took time to deeply understand our brand voice, producing stunning static posts and high-converting stories.',
      name: 'Aiman Z.',
      role: 'E-commerce Director',
      company: 'Moda Glow Cosmetics',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      metric: 'Sales Conversion: +45%',
      stat: '45%',
      statLabel: 'Conversion Lift',
      stars: 5,
      accentColor: 'from-emerald-500 to-teal-500',
    },
    {
      text: 'Outstanding animations and attention-grabbing reels that brought our complex technology brand to life. They truly know how to stop the infinite scroll and command attention.',
      name: 'Bilal Ahmed',
      role: 'VP of Growth',
      company: 'Hyperion Tech Group',
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
      metric: 'Video Views: 4.2M+',
      stat: '4.2M',
      statLabel: 'Total Views',
      stars: 5,
      accentColor: 'from-rose-500 to-orange-500',
    },
  ]

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-purple-500/30 selection:text-white dark:bg-[#06080b] dark:text-white">
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
      <section className="relative overflow-hidden border-b border-white/5 bg-[#05050A] px-6 pt-16 pb-24 text-white md:px-12 md:pt-24 lg:pt-28 lg:pb-32">
        {/* Background glow effects */}
        <div className="pointer-events-none absolute top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl space-y-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 shadow-inner">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400"></span>
                <span className="text-[10px] font-bold tracking-widest text-purple-300 uppercase sm:text-xs">
                  Social Media Management Agency
                </span>
              </div>

              <h1 className="font-display text-5xl leading-[1.02] font-black tracking-tighter sm:text-6xl lg:text-[5rem]">
                We Create.
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                  You Grow.
                </span>
                <br />
                We Deliver Results.
              </h1>

              <p className="text-lg leading-relaxed font-light text-slate-400">
                High-quality content, smart strategy, and data-driven social media management that consistently grows
                your brand and drives meaningful engagement.
              </p>

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 pt-2 text-sm font-medium text-slate-300 sm:grid-cols-2">
                {[
                  'High-Quality Content',
                  'Competitor Analysis',
                  'SEO Friendly Captions',
                  'Target Audience Finding',
                  'Hashtag Management',
                  'Engaging Reels & Animations',
                ].map((feature, i) => (
                  <div key={i} className="group flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/10 transition-colors group-hover:bg-purple-500/20">
                      <CheckCircle2 size={12} className="text-purple-400" strokeWidth={3} />
                    </div>
                    <span className="transition-colors group-hover:text-white">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                <button
                  onClick={() => router.push('/contact')}
                  className="group relative flex min-h-[44px] items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-[11px] font-black tracking-widest text-[#05050A] uppercase transition-transform active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-white opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <span className="relative z-10">Let&apos;s Grow Your Brand</span>
                  <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#05050A]/10 transition-colors group-hover:bg-[#05050A]/20">
                    <Play size={10} fill="currentColor" />
                  </div>
                </button>
                <button
                  onClick={() => router.push('/portfolio')}
                  className="group flex min-h-[44px] items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-[11px] font-bold tracking-widest text-white uppercase backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 active:scale-95"
                >
                  View Our Work
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/20">
                    <Play size={10} fill="currentColor" />
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Right Hero Cinematic Composition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="relative mt-12 flex h-[500px] w-full items-center justify-center lg:mt-0 lg:h-[600px]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 via-indigo-500/10 to-transparent blur-3xl" />

              {/* Central Group Container */}
              <div className="relative aspect-square w-full max-w-[500px]">
                {/* Main Dashboard Card */}
                <div className="absolute top-1/2 left-1/2 z-20 w-[110%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A10]/80 shadow-[0_0_80px_rgba(124,58,237,0.15)] backdrop-blur-2xl md:w-[120%]">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                  <div className="flex flex-col gap-8 p-6 md:p-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="mb-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                          Audience Growth
                        </div>
                        <div className="font-display text-4xl font-black tracking-tight text-white md:text-5xl">
                          2.4M
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-400">
                        <TrendingUp size={14} /> +128%
                      </div>
                    </div>

                    <div className="relative mt-4 h-32 w-full md:h-40">
                      {/* Abstract Chart Line */}
                      <svg
                        className="h-full w-full drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                        viewBox="0 0 400 100"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,80 C40,70 80,90 120,60 C160,30 200,50 240,20 C280,-10 320,40 360,10 C380,-5 400,0 400,0"
                          fill="none"
                          stroke="url(#line-gradient)"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          vectorEffect="non-scaling-stroke"
                        />
                        <defs>
                          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="50%" stopColor="#d946ef" />
                            <stop offset="100%" stopColor="#f43f5e" />
                          </linearGradient>
                        </defs>
                      </svg>
                      {/* Data Points */}
                      <div className="absolute top-[20%] left-[60%] h-3 w-3 animate-pulse rounded-full bg-white shadow-[0_0_10px_white]" />
                      <div className="absolute top-[10%] right-[10%] h-3 w-3 animate-pulse rounded-full bg-white shadow-[0_0_10px_white]" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                      <div>
                        <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                          Engagement
                        </div>
                        <div className="text-lg font-bold text-white md:text-xl">8.4%</div>
                      </div>
                      <div>
                        <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                          Conversion
                        </div>
                        <div className="text-lg font-bold text-white md:text-xl">4.2%</div>
                      </div>
                      <div>
                        <div className="mb-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                          Click Rate
                        </div>
                        <div className="text-lg font-bold text-white md:text-xl">12.1%</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Profile Card */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -top-6 -left-4 z-30 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#11111A]/90 p-4 shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-1 md:-top-12 md:-left-12"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-600 p-[2px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                      alt="Profile"
                      className="h-full w-full rounded-full border-2 border-[#111] object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Sarah Jenkins</div>
                    <div className="text-[10px] tracking-widest text-purple-400 uppercase">Brand Ambassador</div>
                  </div>
                  <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                    <Facebook size={14} fill="currentColor" />
                  </div>
                </motion.div>

                {/* Floating Interaction Card */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -right-4 -bottom-8 z-30 rounded-2xl border border-white/10 bg-[#11111A]/90 p-4 shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-1 md:-right-12 md:-bottom-12 md:p-5"
                >
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/20 text-pink-400">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Post Reach</div>
                      <div className="text-lg font-black text-white">845.2K</div>
                    </div>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-800">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-pink-500 to-orange-400" />
                  </div>
                </motion.div>

                {/* Abstract Glass Elements */}
                <div className="absolute top-[20%] -right-8 z-10 h-20 w-20 rounded-full border border-white/10 bg-white/5 shadow-2xl backdrop-blur-3xl" />
                <div className="absolute bottom-[30%] -left-10 z-10 h-16 w-16 rounded-full border border-purple-500/20 bg-purple-500/10 shadow-2xl backdrop-blur-2xl" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Platforms We Manage */}
        <div className="relative z-20 mx-auto mt-24 max-w-[1200px] border-t border-white/5 pt-12 pb-8">
          <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="font-display mb-2 text-xl font-bold text-white md:text-2xl">Platforms We Master</h3>
              <p className="text-sm text-slate-400">Omnichannel dominance across the entire social ecosystem.</p>
            </div>
            <div className="ml-8 hidden h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent md:block"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {[
              {
                icon: Facebook,
                color: 'text-[#1877F2]',
                bg: 'bg-[#1877F2]/10',
                border: 'border-[#1877F2]/20',
                name: 'Facebook',
              },
              {
                icon: Instagram,
                color: 'text-[#E4405F]',
                bg: 'bg-[#E4405F]/10',
                border: 'border-[#E4405F]/20',
                name: 'Instagram',
              },
              { icon: Twitter, color: 'text-white', bg: 'bg-white/10', border: 'border-white/20', name: 'X (Twitter)' },
              {
                icon: Linkedin,
                color: 'text-[#0A66C2]',
                bg: 'bg-[#0A66C2]/10',
                border: 'border-[#0A66C2]/20',
                name: 'LinkedIn',
              },
            ].map((platform, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-full border px-5 py-3 backdrop-blur-md ${platform.border} ${platform.bg} group cursor-pointer transition-transform hover:scale-105`}
              >
                <platform.icon size={20} className={platform.color} />
                <span className="text-sm font-bold tracking-wide text-white">{platform.name}</span>
              </div>
            ))}
            {/* TikTok SVG */}
            <div
              className={`group flex cursor-pointer items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md transition-transform hover:scale-105`}
            >
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.41-5.46.02-2.09 1.12-4.14 2.9-5.25 1.48-.92 3.28-1.29 5.01-1.12.03 1.34.01 2.68.04 4.02-1.25-.09-2.58.12-3.6.85-1.1.75-1.74 2.15-1.57 3.5.17 1.35 1.16 2.5 2.45 2.91 1.44.47 3.1.28 4.29-.62 1.05-.8 1.65-2.12 1.63-3.48-.02-3.47-.02-6.95-.01-10.42.02-.02.04-.04.06-.06-.01-.01.01-.01.01-.02Z" />
              </svg>
              <span className="text-sm font-bold tracking-wide text-white">TikTok</span>
            </div>
            {/* YouTube */}
            <div
              className={`group flex cursor-pointer items-center gap-3 rounded-full border border-[#FF0000]/20 bg-[#FF0000]/10 px-5 py-3 backdrop-blur-md transition-transform hover:scale-105`}
            >
              <Youtube size={20} className="text-[#FF0000]" />
              <span className="text-sm font-bold tracking-wide text-white">YouTube</span>
            </div>
            {/* Pinterest */}
            <div
              className={`group flex cursor-pointer items-center gap-3 rounded-full border border-[#E60023]/20 bg-[#E60023]/10 px-5 py-3 backdrop-blur-md transition-transform hover:scale-105`}
            >
              <svg className="h-5 w-5 text-[#E60023]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.633 0 12.017 0z" />
              </svg>
              <span className="text-sm font-bold tracking-wide text-white">Pinterest</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP YOUR BUSINESS GROW */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50/50 py-[55px] transition-colors duration-500 lg:py-[75px] dark:border-stone-800 dark:bg-[#06080b]">
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12">
          <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center md:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-purple-600 uppercase dark:text-purple-400">
              Solution Architecture
            </div>
            <h2 className="font-display text-3xl leading-tight font-light tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
              How We Help Your Business{' '}
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text font-medium text-transparent">
                Grow
              </span>
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg dark:text-stone-400">
              We deploy full-funnel organic strategies that turn scrolling audiences into loyal customers through
              engaging, data-driven content.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: 'Content Creation',
                desc: 'High-quality posts, reels and animations that captivate & convert.',
                image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop',
                accent: 'from-purple-500 to-indigo-500',
              },
              {
                id: 2,
                title: 'SEO Friendly Captions',
                desc: 'Optimized descriptions that improve organic search reach and visibility.',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop',
                accent: 'from-blue-500 to-cyan-500',
              },
              {
                id: 3,
                title: 'Hashtag Management',
                desc: 'Smart, trending, and niche-specific hashtag strategies to maximize reach.',
                image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=600&auto=format&fit=crop',
                accent: 'from-emerald-500 to-teal-500',
              },
              {
                id: 4,
                title: 'Competitor Analysis',
                desc: 'In-depth competitor research to identify gaps and keep you ahead of the game.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
                accent: 'from-orange-500 to-red-500',
              },
              {
                id: 5,
                title: 'Target Audience Finding',
                desc: 'Finding and engaging the right demographic that connects with your brand.',
                image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
                accent: 'from-pink-500 to-rose-500',
              },
              {
                id: 6,
                title: 'Animation & Reels',
                desc: 'Eye-catching short-form video animations and reels that drive viral engagement.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
                accent: 'from-indigo-500 to-purple-500',
              },
            ].map((pillar, idx) => (
              <div
                key={pillar.id}
                className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-purple-500/30 hover:bg-slate-50 hover:shadow-xl dark:border-stone-800/80 dark:bg-[#0e1117] dark:hover:bg-[#12161f]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-full w-full object-cover opacity-40 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-100 transition-opacity group-hover:opacity-80 dark:from-[#0e1117]" />
                  <span
                    className={`absolute top-4 left-4 border border-slate-200 bg-slate-900/80 bg-gradient-to-r bg-clip-text text-transparent backdrop-blur-md dark:border-stone-800 dark:bg-black/60 ${pillar.accent} rounded-full px-3 py-1 font-mono text-[9px] font-bold tracking-widest uppercase`}
                  >
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <div className="relative z-10 space-y-3.5 p-6 md:p-8">
                  <h3 className="font-display text-base font-bold tracking-wide text-slate-900 transition-colors group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-indigo-500 group-hover:bg-clip-text group-hover:text-transparent md:text-lg dark:text-stone-100">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-slate-600 dark:text-stone-400">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE MANAGE FOR YOUR SOCIAL MEDIA */}
      <section
        id="what-we-manage"
        className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-[55px] lg:py-[75px] dark:border-stone-800 dark:bg-[#05050A]"
      >
        {/* Decorative Background Elements */}
        <div className="pointer-events-none absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
            {/* Swapped Left Column: Premium Smartphone Mockup Device with animated motion graphs and social preview */}
            <div className="relative order-2 flex items-center justify-center lg:order-1 lg:col-span-5">
              {/* Outer Decorative Glow Rings */}
              <div className="absolute -z-10 h-[420px] w-[420px] animate-pulse rounded-full bg-indigo-500/10 blur-[100px] duration-5000" />
              <div className="absolute -z-10 h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-[80px]" />

              {/* Orbiting Platform Badges */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-pink-500 shadow-lg dark:border-stone-800/80 dark:bg-[#0e1117]"
              >
                <Instagram size={22} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-12 -left-10 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-[#1877F2]/30 bg-[#1877F2] text-white shadow-lg"
              >
                <Facebook size={20} fill="currentColor" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/3 -right-8 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-red-600 shadow-lg dark:border-stone-800/80 dark:bg-[#0e1117]"
              >
                <Youtube size={22} fill="currentColor" />
              </motion.div>

              {/* High-Fidelity Device Mockup Container */}
              <div className="relative z-10 aspect-[9/18.5] w-full max-w-[310px] overflow-hidden rounded-[3rem] border-[10px] border-slate-900 bg-slate-950 shadow-2xl ring-4 ring-purple-500/10 sm:max-w-[330px] dark:border-stone-800">
                {/* Active Interactive Screen */}
                <div className="absolute inset-0 flex flex-col overflow-hidden bg-[#07090e] p-4 pt-10 text-white select-none">
                  {/* Status Bar */}
                  <div className="absolute inset-x-0 top-0 z-30 flex h-10 items-center justify-between bg-[#07090e] px-6 font-mono text-[11px] text-stone-400">
                    <span>09:41</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.58 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                      </svg>
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 z-40 flex h-6 w-28 -translate-x-1/2 items-center justify-between rounded-full bg-black px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500/80" />
                    <span className="scale-90 font-mono text-[7px] tracking-widest text-stone-500">LIVE</span>
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  </div>

                  {/* Mock Social Header */}
                  <div className="mt-1 mb-3 flex shrink-0 items-center justify-between border-b border-white/5 pb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-[1px]">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#07090e] text-[8px] font-black tracking-tighter text-white">
                          NC
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[10px] font-bold">
                          nextcreavo
                          <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-blue-500 text-[5px] font-black text-white">
                            ✓
                          </span>
                        </div>
                        <div className="font-mono text-[7px] tracking-wider text-stone-500 uppercase">
                          Active Campaigns
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 font-mono text-[9px] font-bold tracking-wider text-indigo-400">
                      LIVE FEED
                    </div>
                  </div>

                  {/* Scrollable feed simulator (CSS animated) */}
                  <div className="no-scrollbar flex-1 space-y-4 overflow-y-auto pb-6">
                    {/* Active Campaign Reel Card */}
                    <div className="space-y-2 overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-2.5">
                      <div className="group/post relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-white/5 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
                        {/* Dynamic Grid Gridlines */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:14px_14px]" />

                        {/* Glowing focal spot */}
                        <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-2xl" />

                        {/* Interactive floating stats on post */}
                        <motion.div
                          initial={{ scale: 0.95 }}
                          animate={{ scale: [0.95, 1.05, 0.95] }}
                          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                          className="z-10 min-w-[120px] rounded-xl border border-white/10 bg-black/60 p-2.5 text-center shadow-lg backdrop-blur-md"
                        >
                          <div className="font-mono text-[8px] tracking-widest text-stone-400 uppercase">
                            VIRAL REACH
                          </div>
                          <div className="mt-0.5 text-xl font-black tracking-tight text-white">84.2K+</div>
                          <div className="mt-0.5 flex items-center justify-center gap-0.5 text-[7px] font-semibold text-emerald-400">
                            <TrendingUp size={8} /> +248% Hour
                          </div>
                        </motion.div>

                        <div className="absolute right-2 bottom-2 left-2 flex items-center justify-between rounded-lg border border-white/5 bg-black/40 p-1.5 text-[9px] text-stone-300 backdrop-blur-sm">
                          <span className="font-mono">nc_reel_v3.mp4</span>
                          <span className="text-indigo-400">0:15 / Live</span>
                        </div>
                      </div>

                      {/* Post actions */}
                      <div className="flex items-center justify-between px-1 text-[10px] text-stone-400">
                        <div className="flex items-center gap-3">
                          <button className="flex items-center gap-1 transition-colors hover:text-red-500">
                            <Heart size={13} className="animate-pulse fill-red-500 text-red-500" />
                            <span className="font-bold text-white">4.8K</span>
                          </button>
                          <button className="flex items-center gap-1">
                            <Smile size={13} />
                            <span>148</span>
                          </button>
                        </div>
                        <span className="font-mono text-[8px] text-stone-500">2 mins ago</span>
                      </div>
                    </div>

                    {/* Organic Growth Insights Graph card */}
                    <div className="space-y-3 rounded-xl border border-white/5 bg-[#0c0e14] p-3.5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-mono text-[8px] font-bold tracking-wider text-stone-500 uppercase">
                            CAMPAIGN METRICS
                          </div>
                          <h5 className="mt-0.5 text-xs font-bold text-white">Organic Reach Engine</h5>
                        </div>
                        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                          +156%
                        </span>
                      </div>

                      {/* Real Animated SVG Motion Graph */}
                      <div className="relative h-16 w-full overflow-hidden">
                        <svg className="h-full w-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {/* Grid lines */}
                          <line x1="0" y1="10" x2="100" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                          <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                          <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                          {/* Gradient fill */}
                          <path d="M0,40 Q15,32 30,22 T60,18 T90,4 Z L100,4 L100,40 Z" fill="url(#chartGradient)" />
                          {/* Stroke path */}
                          <motion.path
                            d="M0,40 Q15,32 30,22 T60,18 T90,4"
                            fill="none"
                            stroke="url(#ncGradientStroke)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                          />
                        </svg>

                        {/* Interactive Dot on Chart */}
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="absolute top-[8%] right-[8%] h-2 w-2 rounded-full border border-white bg-indigo-500 shadow-[0_0_8px_#6366f1]"
                        />
                      </div>

                      {/* Stat summary items */}
                      <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-2.5 text-center">
                        <div>
                          <div className="font-mono text-[7px] text-stone-500 uppercase">IMPRESSIONS</div>
                          <div className="mt-0.5 text-[11px] font-black text-white">142.8K</div>
                        </div>
                        <div>
                          <div className="font-mono text-[7px] text-stone-500 uppercase">ENGAGEMENT</div>
                          <div className="mt-0.5 text-[11px] font-black text-indigo-400">18.4%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Micro interaction dynamic notifications overlay list */}
                  <SocialsFloatingOverlay />

                  {/* Navigation Home Bar Indicator */}
                  <div className="absolute bottom-1 left-1/2 z-30 h-1 w-24 -translate-x-1/2 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Decorative Linear Gradient Stroke definition for Chart */}
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="ncGradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Swapped Right Column: Redesigned and Restructured Premium Content Area */}
            <div className="order-1 space-y-12 text-left lg:order-2 lg:col-span-7">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-purple-600 uppercase dark:text-purple-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-500"></span>
                  CORE GROWTH SYSTEM
                </div>
                <h2 className="font-display mb-6 text-3xl leading-tight font-light tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                  Our Social Dominance <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 bg-clip-text font-medium text-transparent">
                    Management Workflow.
                  </span>
                </h2>
                <p className="max-w-2xl text-base leading-relaxed font-light text-slate-600 sm:text-lg dark:text-stone-400">
                  We turn chaotic, inconsistent social posting into a predictable, highly-tuned pipeline of engaged
                  followers and inbound customers.
                </p>
              </div>

              {/* Premium Staggered Process Timeline */}
              <div className="space-y-6">
                {[
                  {
                    phase: 'PHASE 01',
                    badge: 'Discovery & Market Intelligence',
                    title: 'Audience Profiling & Competitor Auditing',
                    desc: 'We research and isolate exactly where your target customers congregate online. By reverse-engineering high-performing competitors, we map out immediate market opportunities for your brand.',
                    features: ['Competitor Analysis', 'Target Audience Locating', 'Performance Baseline Auditing'],
                    gradient: 'from-purple-500 to-indigo-500',
                    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
                  },
                  {
                    phase: 'PHASE 02',
                    badge: 'Creative Execution',
                    title: 'Algorithm-Optimized Content & Scheduling',
                    desc: 'Our production studio delivers beautiful animations, high-converting short-form reels, SEO-friendly captions, and handpicked trending hashtag structures synced with a comprehensive publishing calendar.',
                    features: ['SEO-Optimized Captions', 'Strategic Hashtag Sets', 'Unified Content Calendar'],
                    gradient: 'from-pink-500 to-purple-600',
                    glow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]',
                  },
                  {
                    phase: 'PHASE 03',
                    badge: 'Intelligence & Growth Scaling',
                    title: 'Iterative Analytics & Conversion Funnel Audits',
                    desc: "We don't just post and forget. Our team tracks performance with real-time reporting, optimizing every asset to maximize engagement metrics, subscriber growth, and inbound brand leads.",
                    features: [
                      'Deep Engagement Analytics',
                      'Weekly Post Performance Reports',
                      'Conversion Funnel Tuning',
                    ],
                    gradient: 'from-indigo-500 to-blue-500',
                    glow: 'group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:border-purple-500/30 hover:bg-slate-50 hover:shadow-2xl sm:p-8 dark:border-stone-800/80 dark:bg-[#0e1117] dark:hover:border-purple-500/30 dark:hover:bg-[#12161f]"
                  >
                    {/* Visual glowing indicator */}
                    <div className="absolute top-0 left-0 h-full w-[4px] rounded-l-3xl bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-start">
                      {/* Left Block: Info */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className={`bg-gradient-to-r bg-clip-text font-mono text-[10px] font-bold tracking-widest text-transparent ${item.gradient} uppercase`}
                          >
                            {item.phase}
                          </span>
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-stone-700" />
                          <span className="text-xs font-medium text-slate-400 dark:text-stone-500">{item.badge}</span>
                        </div>

                        <h3 className="font-display text-lg font-bold text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-indigo-500 group-hover:bg-clip-text group-hover:text-transparent sm:text-xl dark:text-white">
                          {item.title}
                        </h3>

                        <p className="text-sm leading-relaxed font-light text-slate-500 dark:text-stone-400">
                          {item.desc}
                        </p>

                        {/* Interactive Feature Pills */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.features.map((feat, fIdx) => (
                            <span
                              key={fIdx}
                              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/50 bg-slate-100 px-3 py-1 text-[10px] font-medium text-slate-700 transition-all group-hover:border-purple-500/20 group-hover:bg-purple-500/5 dark:border-stone-800 dark:bg-stone-900/60 dark:text-stone-300"
                            >
                              <CheckCircle2 size={10} className="text-purple-500" />
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Block: Decorative Progress Accent */}
                      <div className="hidden shrink-0 flex-col items-end justify-between self-stretch sm:flex">
                        <div
                          className={`h-10 w-10 rounded-2xl bg-gradient-to-tr ${item.gradient} flex items-center justify-center text-xs font-bold text-white shadow-md transition-transform duration-500 group-hover:scale-115`}
                        >
                          0{index + 1}
                        </div>
                        <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 font-mono text-[10px] font-semibold tracking-widest text-emerald-500 uppercase dark:text-emerald-400">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE NEXT CREAVO / STATS & TESTIMONIALS */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-white py-[55px] transition-colors duration-500 lg:py-[75px] dark:border-stone-800 dark:bg-[#05050A]">
        {/* Subtle Background Elements */}
        <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12">
          {/* Premium Testimonials Slider Carousel */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/50 p-8 shadow-xl backdrop-blur-md sm:p-12 md:p-16 dark:border-stone-800/80 dark:bg-[#0b0c10]/40">
            {/* Background ambient accents inside slider */}
            <div
              className={`absolute top-0 right-0 h-80 w-80 bg-gradient-to-br ${testimonials[activeSlide].accentColor} pointer-events-none rounded-full opacity-[0.04] blur-[80px] transition-all duration-1000 dark:opacity-[0.08]`}
            />

            <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Trust Widget & Navigation Controls */}
              <div className="flex flex-col justify-center space-y-8 text-center lg:col-span-5 lg:text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-indigo-600 uppercase dark:text-indigo-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500"></span>
                    CLIENT IMPACT & REVIEWS
                  </div>
                  <h4 className="font-display text-3xl leading-snug font-light tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                    What Our Partners <br className="hidden lg:block" />
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text font-medium text-transparent">
                      Say About Us
                    </span>
                  </h4>
                  <p className="mx-auto max-w-sm text-sm leading-relaxed font-light text-slate-500 lg:mx-0 dark:text-stone-400">
                    We don’t just build visibility—we build durable client pipelines. Read verified, real-world growth
                    stories and performance stats.
                  </p>
                </div>

                {/* Cinematic Premium Statistics Grid */}
                <div className="mx-auto grid max-w-sm grid-cols-2 gap-4 pt-2 lg:mx-0">
                  {[
                    {
                      label: 'Brands Scaled',
                      value: '500+',
                      icon: Users,
                      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
                    },
                    {
                      label: 'Campaigns Run',
                      value: '1000+',
                      icon: CheckCircle2,
                      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
                    },
                    {
                      label: 'Total Reach',
                      value: '10M+',
                      icon: TrendingUp,
                      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
                    },
                    {
                      label: 'Client Retention',
                      value: '98%',
                      icon: Smile,
                      color: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-purple-500/20 dark:border-stone-800/80 dark:bg-[#0e1117]/85"
                    >
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="font-mono text-[9px] font-semibold tracking-wider text-slate-400 uppercase dark:text-stone-500">
                          {stat.label}
                        </span>
                        <div className={`flex h-6 w-6 items-center justify-center rounded-lg border ${stat.color}`}>
                          <stat.icon size={11} />
                        </div>
                      </div>
                      <div className="text-2xl leading-none font-black tracking-tight text-slate-900 dark:text-white">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slider Controls */}
                <div className="flex items-center justify-center gap-4 pt-2 lg:justify-start">
                  <button
                    onClick={handlePrevSlide}
                    className="flex h-12 w-12 animate-none cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all hover:-translate-x-0.5 hover:border-purple-500/40 hover:text-slate-900 dark:border-stone-800 dark:bg-[#0e1117] dark:text-stone-400 dark:hover:text-white"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Visual Dot Steppers */}
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeSlide === idx
                            ? 'w-6 bg-purple-500'
                            : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-stone-800 dark:hover:bg-stone-700'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextSlide}
                    className="flex h-12 w-12 animate-none cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all hover:translate-x-0.5 hover:border-purple-500/40 hover:text-slate-900 dark:border-stone-800 dark:bg-[#0e1117] dark:text-stone-400 dark:hover:text-white"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Right Column: Active Testimonial Card with AnimatePresence */}
              <div className="relative flex min-h-[380px] w-full items-center sm:min-h-[350px] lg:col-span-7">
                <AnimatePresence mode="wait">
                  {testimonials.map((t, idx) => {
                    if (activeSlide !== idx) return null
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
                              {[...Array(t.stars)].map((_, s) => (
                                <Star key={s} size={14} fill="currentColor" stroke="currentColor" />
                              ))}
                            </div>
                            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-stone-700" />
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 font-mono text-[10px] font-bold text-purple-600 uppercase dark:text-purple-400">
                              <TrendingUp size={12} /> {t.metric}
                            </span>
                          </div>

                          {/* Testimonial Quote Text */}
                          <p className="text-base leading-relaxed font-light text-slate-800 italic sm:text-lg dark:text-stone-200">
                            &ldquo;{t.text}&rdquo;
                          </p>
                        </div>

                        {/* Author Card Footer */}
                        <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100 pt-6 dark:border-stone-800/60">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={t.img}
                            alt={t.name}
                            className="h-14 w-14 rounded-full border-2 border-slate-200 object-cover shadow-md dark:border-stone-800"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-base leading-snug font-semibold text-slate-900 sm:text-lg dark:text-white">
                                {t.name}
                              </h4>
                              <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" title="Verified Client" />
                            </div>
                            <p className="mt-0.5 text-xs text-slate-600 dark:text-stone-400">
                              {t.role} •{' '}
                              <span className="font-mono text-[10px] tracking-wide text-slate-400 dark:text-stone-500">
                                {t.company}
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
        </div>
      </section>

      {/* CTA SECTION - Modernized */}
      <section className="overflow-hidden border-t border-slate-200 bg-slate-50 px-4 py-[55px] transition-colors duration-500 sm:px-6 md:px-12 lg:py-[75px] dark:border-white/5 dark:bg-[#0a0c10]">
        <div className="mx-auto max-w-[1200px]">
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0A10] shadow-2xl md:rounded-[3rem]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/3 transform rounded-full bg-purple-500/20 blur-[120px] transition-colors duration-700 group-hover:bg-purple-500/30" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 transform rounded-full bg-blue-500/20 blur-[100px] transition-colors duration-700 group-hover:bg-blue-500/30" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-12 p-8 sm:p-12 md:p-16 lg:flex-row lg:p-20">
              <div className="w-full space-y-8 text-center lg:w-3/5 lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase sm:text-xs">
                    Available For New Projects
                  </span>
                </div>

                <h2 className="font-display text-4xl leading-[1.1] font-black tracking-tight text-white sm:text-5xl md:text-6xl">
                  Ready to dominate your{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    social space?
                  </span>
                </h2>

                <p className="mx-auto max-w-xl text-lg leading-relaxed font-light text-slate-300 lg:mx-0">
                  Join hundreds of brands that have transformed their social media presence into a predictable growth
                  engine. Let&apos;s build something remarkable.
                </p>

                <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
                  <button
                    onClick={() => router.push('/contact')}
                    className="flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] font-bold tracking-widest text-[#0A0A10] uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-colors hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
                  >
                    Start Your Growth Journey
                    <ArrowRight size={14} />
                  </button>
                  <a
                    href="https://wa.me/923012345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[11px] font-bold tracking-widest text-white uppercase backdrop-blur-md transition-colors hover:bg-white/10 active:scale-95"
                  >
                    <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex hidden w-full justify-center md:flex lg:w-2/5 lg:justify-end">
                <div className="relative aspect-square w-full max-w-[320px]">
                  {/* Abstract 3D-like Composition for CTA */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-2xl" />
                  <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-2xl border border-white/20 bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-80 shadow-2xl backdrop-blur-xl" />
                  <div className="absolute top-1/2 left-1/2 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 -rotate-6 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0A0A10] p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform duration-700 ease-out group-hover:rotate-0">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                      <TrendingUp size={32} />
                    </div>
                    <div className="mb-1 text-3xl font-black text-white">98%</div>
                    <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      Client Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

type SocialBubble = { id: number; text: string; icon: string; x: number }

const socialBubbleTypes = [
  { text: '+1,240 Followers', icon: '👤' },
  { text: '+4.2k Reel Views', icon: '🔥' },
  { text: 'Viral Reach +124%', icon: '📈' },
  { text: 'New Lead Inbound', icon: '💬' },
  { text: 'nextcreavo liked post', icon: '❤️' },
]

const initialSocialBubbles: SocialBubble[] = [
  { id: 1, text: '+1,240 Followers', icon: '👤', x: -15 },
  { id: 2, text: '+4.2k Reel Views', icon: '🔥', x: 20 },
]

function SocialsFloatingOverlay() {
  const [bubbles, setBubbles] = useState<SocialBubble[]>(initialSocialBubbles)

  useEffect(() => {
    const interval = setInterval(() => {
      const type = socialBubbleTypes[Math.floor(Math.random() * socialBubbleTypes.length)]
      const newBubble = {
        id: Date.now() + Math.random(),
        text: type.text,
        icon: type.icon,
        x: Math.floor(Math.random() * 40) - 20, // offset range -20 to 20
      }
      setBubbles((prev) => [...prev.slice(-2), newBubble])
    }, 3200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-16 z-30 h-36 overflow-hidden">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          initial={{ opacity: 0, y: 70, scale: 0.8 }}
          animate={{ opacity: [0, 1, 1, 0], y: -70, x: b.x, scale: 1 }}
          transition={{ duration: 4.8, ease: 'easeOut' }}
          className="absolute left-[20%] flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-900/95 px-2.5 py-1 font-mono text-[8px] font-bold whitespace-nowrap text-white shadow-lg backdrop-blur-md dark:bg-black/95"
        >
          <span>{b.icon}</span>
          <span>{b.text}</span>
        </motion.div>
      ))}
    </div>
  )
}
