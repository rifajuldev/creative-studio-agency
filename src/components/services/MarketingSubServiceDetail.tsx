'use client'

import FacebookAdsService from '@/components/services/FacebookAdsService'
import GmbOptimizationService from '@/components/services/GmbOptimizationService'
import GoogleAdsService from '@/components/services/GoogleAdsService'
import SocialMediaManagementService from '@/components/services/SocialMediaManagementService'
import { CheckCircle, ChevronLeft, Facebook, MapPin, Share2, Target, type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

type SubService = {
  id: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
  heroImage: string
  benefits: string[]
  features: { title: string; desc: string }[]
}

const SUB_SERVICES: SubService[] = [
  {
    id: 'gmb-optimization',
    title: 'GMB Optimization & Map Ranking',
    tagline: 'Dominate Local Search',
    description:
      'We optimize your Google My Business profile to rank in the top 3 of Google Maps, driving massive local foot traffic, inbound calls, and highly qualified leads right to your doorstep.',
    icon: MapPin,
    heroImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'Top 3 Map Pack Ranking',
      'Increased Inbound Calls',
      'Optimized Profile Setup',
      'Local Citation Building',
      'Review Management & Growth',
      'Monthly Performance Reporting',
    ],
    features: [
      {
        title: 'Profile Audit & Setup',
        desc: 'Comprehensive audit of your existing profile, correcting inconsistencies and completing all critical information fields for maximum Google trust.',
      },
      {
        title: 'Local SEO Citations',
        desc: 'We build consistent local citations across high-authority directories to boost your overall local search authority.',
      },
      {
        title: 'Review Strategy',
        desc: 'Implementing automated and manual strategies to generate positive reviews, a crucial ranking factor for the Map Pack.',
      },
    ],
  },
  {
    id: 'google-ads',
    title: 'Google PPC Ads',
    tagline: 'Capture High-Intent Searchers',
    description:
      'Dominate search results when active buyers are looking for you. We build hyper-targeted Google Search, Display, and Performance Max campaigns that turn clicks into predictable phone calls and leads.',
    icon: Target,
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'Immediate Search Visibility',
      'High Return on Ad Spend (ROAS)',
      'Competitor Keyword Conquesting',
      'Performance Max Optimization',
      'Phone Call & Lead Form Tracking',
      'Weekly Negative Keyword Pruning',
    ],
    features: [
      {
        title: 'Search Intent Campaigns',
        desc: 'Targeting buyers typing exact high-intent keywords for your specific services, eliminating wasted ad spend.',
      },
      {
        title: 'Responsive Ad Copy',
        desc: 'Compelling, human-refined ad copies that improve Quality Score and lower your Cost Per Click.',
      },
      {
        title: 'Conversion Tracking & ROI',
        desc: 'Advanced Google Tag Manager setups to track precise phone calls, form fills, and direct leads.',
      },
    ],
  },
  {
    id: 'facebook-ads',
    title: 'Facebook & Instagram Ads',
    tagline: 'Stop the Scroll, Drive Demand',
    description:
      "Tap into the world's most powerful visual demographic audience network. We design thumb-stopping video/image creatives and build laser-focused demographic & behavioral funnels to capture and retarget high-quality leads.",
    icon: Facebook,
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'Scroll-Stopping Visual Creatives',
      'Laser Demographic Targeting',
      'Retargeting and Pixel Setup',
      'Custom & Lookalike Audiences',
      'Predictable Cost Per Lead (CPL)',
      'Meta Conversions API Sync',
    ],
    features: [
      {
        title: 'Scroll-Stopping Ad Creative',
        desc: 'High-contrast images and dynamic short-form video ads optimized specifically for the Facebook and Instagram feeds.',
      },
      {
        title: 'Laser Target Profiling',
        desc: 'Reaching your exact ideal client profile using interest-based, demographic, behavioral, and geographic coordinates.',
      },
      {
        title: 'Retargeting Funnel Sequences',
        desc: 'We set up sequenced retargeting ads to nurture warm web visitors and turn abandoned clicks into loyal clients.',
      },
    ],
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    tagline: 'Build a Loyal Following',
    description:
      'We take over your social media presence, creating high-quality, engaging content that resonates with your target audience, builds brand authority, and fosters community loyalty.',
    icon: Share2,
    heroImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop',
    benefits: [
      'Custom Content Creation',
      'Consistent Posting Schedule',
      'Community Engagement & Moderation',
      'Brand Voice Optimization',
      'Influencer Outreach (Optional)',
      'Monthly Growth Analytics',
    ],
    features: [
      {
        title: 'Content Strategy & Calendar',
        desc: 'Developing a tailored content calendar aligned with your brand goals, ensuring consistent and strategic messaging.',
      },
      {
        title: 'Visual Asset Creation',
        desc: 'Producing high-quality graphics, short-form videos (Reels/TikToks), and professional photography for your feeds.',
      },
      {
        title: 'Active Community Management',
        desc: 'Responding to comments, engaging with followers, and proactively building relationships within your digital community.',
      },
    ],
  },
]

export default function MarketingSubServiceDetail({ subId }: { subId: string }) {
  const router = useRouter()

  const service = SUB_SERVICES.find((s) => s.id === subId)

  useEffect(() => {
    if (
      subId !== 'gmb-optimization' &&
      subId !== 'social-media-management' &&
      subId !== 'facebook-ads' &&
      subId !== 'google-ads'
    ) {
      window.scrollTo(0, 0)
    }
  }, [subId])

  if (subId === 'gmb-optimization') {
    return <GmbOptimizationService />
  }

  if (subId === 'google-ads') {
    return <GoogleAdsService />
  }

  if (subId === 'facebook-ads') {
    return <FacebookAdsService />
  }

  if (subId === 'social-media-management') {
    return <SocialMediaManagementService />
  }

  if (!service) {
    return (
      <div className="bg-primary flex min-h-screen items-center justify-center text-white">
        <div className="text-center">
          <h1 className="font-display mb-4 text-4xl">Service Not Found</h1>
          <button onClick={() => router.push('/services/marketing')} className="text-[#bca374] hover:underline">
            Return to Marketing
          </button>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen w-full bg-[#06080b] font-sans text-white selection:bg-[#bca374]/30 selection:text-white">
      {/* Sub-Header */}
      <div className="sticky top-[80px] z-40 w-full border-b border-stone-800/80 bg-[#06080b]/90 px-6 py-4 backdrop-blur-md md:px-12">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <button
            onClick={() => router.push('/services/marketing')}
            className="flex items-center gap-2 text-xs font-bold tracking-widest text-stone-400 uppercase transition-colors hover:text-white"
          >
            <ChevronLeft size={14} />
            Back to Marketing
          </button>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#10b981]" />
            <span className="font-mono text-[10px] tracking-widest text-stone-400 uppercase">
              Accepting New Clients
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative border-b border-stone-800/50 px-6 pt-20 pb-24 md:px-12 md:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-[#bca374]/20 bg-[#bca374]/10 px-4 py-2 text-[#bca374]">
                <Icon size={16} />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{service.tagline}</span>
              </div>

              <h1 className="font-display text-4xl leading-[1.1] font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                {service.title}
              </h1>

              <p className="max-w-xl text-base leading-relaxed font-light text-stone-300 md:text-lg">
                {service.description}
              </p>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#bca374] to-[#e6d0ac] px-8 py-4 text-[11px] font-bold tracking-widest text-black uppercase transition-all hover:brightness-110 active:scale-95 sm:text-xs"
                >
                  Start Your Campaign
                </Link>
                <a
                  href="https://wa.me/923012345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-[11px] font-bold tracking-widest text-white uppercase transition-all hover:bg-[#128C7E] active:scale-95 sm:text-xs"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square overflow-hidden rounded-3xl border border-stone-800 md:aspect-[4/3]"
            >
              <img
                src={service.heroImage}
                alt={service.title}
                className="h-full w-full object-cover opacity-80 grayscale transition-all duration-1000 hover:scale-105 hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#06080b] via-transparent to-transparent opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="bg-[#0a0c10] px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-5">
            <div>
              <span className="mb-4 block font-mono text-[10px] font-bold tracking-[0.3em] text-[#bca374] uppercase">
                Core Deliverables
              </span>
              <h2 className="font-display text-3xl font-light tracking-tight text-white sm:text-4xl">
                What You Can Expect
              </h2>
            </div>

            <div className="space-y-6">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#bca374]/20 bg-[#bca374]/10">
                    <CheckCircle size={12} className="text-[#bca374]" />
                  </div>
                  <span className="text-sm font-light text-stone-200 md:text-base">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-[2rem] border border-stone-800 bg-[#0e1117] p-8 transition-colors hover:border-[#bca374]/30"
                >
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-stone-800 bg-stone-900 font-mono text-xs text-stone-400">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display mb-3 text-lg text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#0a0c10] to-[#040507] px-6 py-24 md:px-12">
        <div className="relative mx-auto max-w-[1000px] space-y-8 overflow-hidden rounded-[3rem] border border-[#bca374]/15 bg-[#0e1117] p-12 text-center md:p-20">
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bca374]/5 blur-[100px]" />

          <div className="relative z-10 space-y-4">
            <h2 className="font-display text-4xl leading-none font-light tracking-tight text-white sm:text-5xl">
              Ready to Accelerate?
            </h2>
            <p className="mx-auto max-w-xl text-sm font-light text-stone-400">
              Partner with us to deploy {service.title.toLowerCase()} strategies that convert.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#bca374] to-[#e6d0ac] px-10 py-4 text-[11px] font-bold tracking-widest text-black uppercase transition-all hover:brightness-110 sm:w-auto sm:text-xs"
            >
              Get a Proposal
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-700 bg-transparent px-10 py-4 text-[11px] font-bold tracking-widest text-stone-200 uppercase transition-all hover:border-[#bca374]/30 hover:bg-stone-900/30 sm:w-auto sm:text-xs"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
