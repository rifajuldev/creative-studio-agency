'use client'

import { useLanguage } from '@/context/LanguageContext'
import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  Check,
  ChevronLeft,
  Hash,
  Heart,
  RefreshCw,
  Search,
  Smile,
  Sparkles,
  Star,
  Target,
  ThumbsUp,
  TrendingUp,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LOCAL_T = {
  EN: {
    back: 'Back to Solutions',
    tagline: 'Social Media Management Agency',
    create: 'We Create.',
    grow: 'You Grow.',
    results: 'We Deliver Results.',
    desc: 'High-quality content, smart strategy, and data-driven social media management that grows your brand.',
    bullets: [
      'High-Quality Content',
      'SEO Friendly Captions',
      'Hashtag Management',
      'Competitor Analysis',
      'Target Audience Finding',
      'Engaging Reels & Animations',
    ],
    growthOverview: 'Growth Overview',
    engagementRate: 'Engagement Rate',
    totalReach: 'Reach',
    reelViews: 'Reel Views',
    followers: 'Followers',
    platformsTitle: 'PLATFORMS WE MANAGE',
    helpTitle: 'HOW WE HELP YOUR BUSINESS GROW',
    helpDesc:
      'Operating with pixel perfection, clean layout structures, and smart aesthetic narratives to capture attention.',
    pillars: [
      {
        id: 'content',
        title: 'CONTENT CREATION',
        desc: 'High-quality posts, reels and animations that captivate and convert.',
      },
      {
        id: 'seo',
        title: 'SEO FRIENDLY CAPTIONS',
        desc: 'Optimized descriptions that improve organic search reach and search index.',
      },
      {
        id: 'hashtag',
        title: 'HASHTAG MANAGEMENT',
        desc: 'Smart localized hashtag strategies to maximize discoverability.',
      },
      {
        id: 'competitor',
        title: 'COMPETITOR ANALYSIS',
        desc: 'In-depth competitor landscape research to keep you ahead of the game.',
      },
      {
        id: 'audience',
        title: 'TARGET AUDIENCE FINDING',
        desc: 'Locating and engaging the exact tribes that connect with your brand.',
      },
      {
        id: 'animation',
        title: 'ANIMATION & REELS',
        desc: 'Eye-catching custom motion assets and animated reels that drive click actions.',
      },
    ],
    manageTitle: 'WHAT WE MANAGE FOR YOUR SOCIAL MEDIA',
    managePoints: [
      {
        title: 'SEO Friendly Captions & Descriptions',
        desc: 'We write SEO-optimized captions and descriptions to improve visibility, category rankings, and search accessibility.',
        icon: Search,
      },
      {
        title: 'Hashtag Strategy & Management',
        desc: 'We find the best trending and niche-specific hashtags to grow your feed content reach and bypass shadow limits.',
        icon: Hash,
      },
      {
        title: 'Content Calendar Management',
        desc: 'Organized editorial content planning and rigorous scheduling to keep your feeds consistent and engaging 24/7.',
        icon: Calendar,
      },
      {
        title: 'Target & Niche Creation',
        desc: 'We analyze your precise target market cohort to structure custom thematic aesthetics that drive continuous conversions.',
        icon: Target,
      },
      {
        title: 'Competitor Analysis',
        desc: 'We study your competitors actively to isolate high-performing patterns, creative gaps, and keywords to outperform them.',
        icon: BarChart3,
      },
      {
        title: 'Performance Tracking & Reports',
        desc: 'Data-driven insights, live telemetry dashboards, and actionable weekly report briefings to iterate parameters and grow faster.',
        icon: TrendingUp,
      },
    ],
    whyTitle: 'WHY CHOOSE NEXTCREAVO?',
    whyDesc:
      'Our social production studio skips rigid templates. We forge custom cinematic assets, optimize search attributes, and maintain pristine brand guidelines.',
    ctaTitle: 'READY TO GROW YOUR BRAND?',
    ctaDesc:
      'Let’s create, manage, and grow your social media presence. Your success is our mission. Establish your brief to calculate rates.',
    ctaBrief: "Let's Grow Your Brand",
    ctaContact: 'Book a Free Consultation',
    ctaWork: 'View Our Work',
  },
  FR: {
    back: 'Retour aux Solutions',
    tagline: 'Agence de Gestion des Médias Sociaux',
    create: 'Nous Créons.',
    grow: 'Vous Grandissez.',
    results: 'Nous Livrons des Résultats.',
    desc: 'Un contenu de haute qualité, une stratégie intelligente et une gestion des réseaux sociaux basée sur les données qui propulsent votre marque.',
    bullets: [
      'Contenu de Haute Qualité',
      'Légendes Optimisées pour le SEO',
      'Gestion des Hashtags',
      'Analyse des Concurrents',
      'Recherche d’Audience Cible',
      'Reels & Animations Captivants',
    ],
    growthOverview: 'Aperçu de la Croissance',
    engagementRate: 'Taux d’Engagement',
    totalReach: 'Portée globale',
    followers: 'Abonnés',
    reelViews: 'Vues des Reels',
    platformsTitle: 'PLATEFORMES QUE NOUS GÉRONS',
    helpTitle: 'COMMENT NOUS AIDONS VOTRE ENTREPRISE À GRANDIR',
    helpDesc:
      'Opérant avec une perfection au pixel près, des récits esthétiques soignés et une stratégie innovante pour capter l’attention.',
    pillars: [
      {
        id: 'content',
        title: 'CRÉATION DE CONTENU',
        desc: 'Publications, reels et animations de haute qualité qui captivent et convertissent.',
      },
      {
        id: 'seo',
        title: 'LÉGENDES COMPATIBLES SEO',
        desc: 'Des descriptions méticuleusement rédigées pour améliorer la visibilité et la portée organique.',
      },
      {
        id: 'hashtag',
        title: 'GESTION DES HASHTAGS',
        desc: 'Stratégies de tagging ciblées pour maximiser la découvrabilité locale et de niche.',
      },
      {
        id: 'competitor',
        title: 'ANALYSE DES CONCURRENTS',
        desc: 'Recherche concurrentielle approfondie pour vous maintenir en tête du marché.',
      },
      {
        id: 'audience',
        title: 'RECHERCHE D’AUDIENCE CIBLE',
        desc: 'Identifier et engager précisément les tribus d’utilisateurs alignées avec votre marque.',
      },
      {
        id: 'animation',
        title: 'REELS & ANIMATIONS',
        desc: 'Des visuels animés sur mesure et des reels captivants qui stimulent les clics et partages.',
      },
    ],
    manageTitle: 'CE QUE NOUS GÉRONS POUR VOS MÉDIAS SOCIAUX',
    managePoints: [
      {
        title: 'Légendes et descriptions optimisées pour le SEO',
        desc: 'Optimisation sémantique de tout votre contenu textuel pour doper le référencement naturel et les tendances de recherche.',
        icon: Search,
      },
      {
        title: 'Stratégie et gestion des hashtags',
        desc: 'Recherche et curation continue des meilleurs hashtags de niche et populaires pour contourner les restrictions algorithmiques.',
        icon: Hash,
      },
      {
        title: 'Gestion du calendrier éditorial',
        desc: 'Planification stratégique et publication automatisée selon les fenêtres de trafic optimales de vos prospects.',
        icon: Calendar,
      },
      {
        title: 'Création de cibles & niches',
        desc: 'Analyse méthodique de votre clientèle pour concevoir des entonnoirs d’attractivité esthétique infaillibles.',
        icon: Target,
      },
      {
        title: 'Audit permanent de la concurrence',
        desc: 'Analyse des forces concurrentielles pour exploiter les failles de positionnement et capter leurs flux d’audience.',
        icon: BarChart3,
      },
      {
        title: 'Contrôles & rapports de performance',
        desc: 'Rapports hebdomadaires complets avec métriques concrètes et ajustement dynamique des campagnes.',
        icon: TrendingUp,
      },
    ],
    whyTitle: 'POURQUOI CHOISIR NEXTCREAVO ?',
    whyDesc:
      'Notre atelier s’affranchit des canevas génériques. Nous éditons des récits cinématographiques percutants tout en protégeant l’ADN de votre image.',
    ctaTitle: 'PRÊT À FAIRE GRANDIR VOTRE MARQUE ?',
    ctaDesc:
      'Gérons et développons ensemble votre impact social. Votre succès est notre boussole. Formulez votre brief pour obtenir notre devis complet.',
    ctaBrief: 'Propulser Votre Marque',
    ctaContact: 'Prendre un Rendez-vous Offert',
    ctaWork: 'Découvrir Nos Projets',
  },
}

const STATS = [
  { id: 'stat-clients', label: 'Happy Clients', val: '500+', desc: 'Across B2B SaaS, luxury brand sectors & agencies' },
  { id: 'stat-projects', label: 'Projects Completed', val: '1000+', desc: 'Delivered with pixel perfect layouts' },
  { id: 'stat-exp', label: 'Years of Experience', val: '6+', desc: 'Pioneering programmatic growth campaigns' },
  { id: 'stat-reach', label: 'Total Reach Generated', val: '10M+', desc: 'Organic client impressions accumulated' },
  { id: 'stat-sat', label: 'Client Satisfaction', val: '98%', desc: 'Long-term recurring syndicate retainers' },
]

const TESTIMONIALS = [
  {
    quote: 'NextCreavo completely transformed our social media presence. The content and reels are outstanding!',
    author: 'Sarah Khan',
    role: 'Fashion Brand Director',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
  },
  {
    quote: 'Their SEO-friendly captions and hashtag strategy increased our organic reach tremendously.',
    author: 'Danish Ali',
    role: 'Elite Fitness Coach',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
  },
  {
    quote: 'Professional, creative, and highly result-driven team. Highly recommended for premium brands!',
    author: 'Aiman Z.',
    role: 'E-Commerce Director',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
  },
  {
    quote: 'Amazing high-fidelity animations and social reels that brought our hardware startup to life.',
    author: 'Bilal Ahmed',
    role: 'IoT Founder',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
  },
]

const PLATFORMS = [
  { name: 'Facebook', id: 'facebook', icon: 'FB' },
  { name: 'Instagram', id: 'instagram', icon: 'IG' },
  { name: 'X (Twitter)', id: 'twitter', icon: 'X' },
  { name: 'LinkedIn', id: 'linkedin', icon: 'IN' },
  { name: 'TikTok', id: 'tiktok', icon: 'TT' },
  { name: 'YouTube', id: 'youtube', icon: 'YT' },
  { name: 'Pinterest', id: 'pinterest', icon: 'PI' },
]

export default function MarketingServiceDetail() {
  const router = useRouter()
  const { language } = useLanguage()
  const tLocal = language === 'FR' ? LOCAL_T.FR : LOCAL_T.EN

  // State hooks for interaction
  const [activeManageIdx, setActiveManageIdx] = useState<number>(0)
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState<number>(0)
  const [interactiveFollowers, setInteractiveFollowers] = useState<number>(128.6)
  const [isLiking, setIsLiking] = useState<boolean>(false)
  const [heartCount, setHeartCount] = useState<number>(245)
  const [floatHearts, setFloatHearts] = useState<{ id: number; x: number; y: number; drift: number }[]>([])

  const handleHeartClick = () => {
    setIsLiking(true)
    setHeartCount((prev) => prev + 1)

    // Spawn floating heart
    const newId = Date.now()
    const newHeart = {
      id: newId,
      x: Math.random() * 80 + 10,
      y: Math.random() * 40 + 30,
      drift: Math.random() * 50 - 25,
    }
    setFloatHearts((prev) => [...prev, newHeart])

    setTimeout(() => {
      setIsLiking(false)
    }, 300)

    // Clean up heart after animation
    setTimeout(() => {
      setFloatHearts((prev) => prev.filter((h) => h.id !== newId))
    }, 1500)
  }

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0c10] pb-32 font-sans text-[#e6dfd5] transition-colors duration-700">
      {/* Absolute floating glowing grids in gold and charcoal themes */}
      <div className="pointer-events-none absolute top-0 left-0 h-[600px] w-full bg-gradient-to-b from-[#bca374]/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute top-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#bca374]/2 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[30%] left-[-15%] h-[600px] w-[600px] rounded-full bg-blue-900/3 blur-[160px]" />

      {/* Sub-Header ribbon */}
      <div className="sticky top-[70px] z-30 w-full border-b border-[#bca374]/10 bg-[#0a0c10]/90 px-6 py-4 backdrop-blur-md md:top-[80px] md:px-12">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <button
            onClick={() => router.push('/services')}
            className="group flex items-center gap-2.5 text-[10px] font-bold tracking-[0.2em] text-[#bca374] uppercase transition-colors hover:text-white"
            id="marketing-back-button"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {tLocal.back}
          </button>
          <div className="text-secondary/70 flex items-center gap-4 font-mono text-[10px] tracking-wider lowercase">
            Sector ID: <span className="font-bold text-[#bca374]">digital-marketing-growth</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: EPHEMERAL MAJESTIC HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 md:px-12 md:pt-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* HERO LEFT TEXT */}
            <div className="space-y-6 sm:space-y-8 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#bca374]/20 bg-[#bca374]/10 px-4 py-1.5 text-[9px] font-bold tracking-[0.25em] text-[#bca374] uppercase sm:text-[10px]"
                id="agency-tag-marketing"
              >
                <Sparkles size={11} />
                {tLocal.tagline}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4"
              >
                <h1 className="font-display lg:text-7.5xl text-4xl leading-[1.05] font-light tracking-tight text-white select-none sm:text-5xl md:text-7xl">
                  {tLocal.create} <br />
                  <span className="bg-gradient-to-r from-[#bca374] via-[#f7e4c4] to-[#bca374] bg-clip-text font-serif font-light text-transparent italic">
                    {tLocal.grow}
                  </span>{' '}
                  <br />
                  <span className="font-medium text-white">{tLocal.results}</span>
                </h1>

                <p className="max-w-xl text-sm leading-relaxed font-light text-stone-300 sm:text-base md:text-lg">
                  {tLocal.desc}
                </p>
              </motion.div>

              {/* Grid of Bullets from Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 gap-x-6 gap-y-3.5 pt-2 sm:grid-cols-2"
              >
                {tLocal.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#bca374]/20 bg-[#bca374]/10">
                      <Check size={11} className="text-[#bca374]" />
                    </span>
                    <span className="text-xs font-light text-stone-200 sm:text-sm">{bullet}</span>
                  </div>
                ))}
              </motion.div>

              {/* ACTION LINKS */}
              <div className="flex flex-col items-stretch gap-4 pt-6 sm:flex-row sm:items-center">
                <Link
                  href="/contact?service=marketing"
                  className="rounded-full bg-gradient-to-r from-[#bca374] to-[#dec9a7] px-8 py-4 text-center text-xs font-bold tracking-widest text-black uppercase shadow-lg shadow-[#bca374]/15 transition-all hover:brightness-110 active:scale-[0.98]"
                  id="cta-enroll-marketing"
                >
                  {tLocal.ctaBrief}
                </Link>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={() => router.push('/contact')}
                    className="flex items-center justify-center gap-2 rounded-full border border-stone-700 bg-transparent px-8 py-4 text-center text-xs font-bold tracking-widest text-[#e6dfd5] uppercase transition-all hover:border-white hover:bg-stone-900/30"
                    id="cta-work-marketing"
                  >
                    {tLocal.ctaContact}
                  </button>
                  <a
                    href="https://wa.me/923012345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-center text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-[#128C7E]"
                    id="cta-whatsapp-marketing"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* HERO RIGHT: MAGNIFICENT INTERACTIVE MOBILE DEVICE SIMULATION */}
            <div className="flex justify-center lg:col-span-5">
              <div className="group relative aspect-[9/18.5] w-full max-w-[350px] rounded-[42px] border-4 border-[#333d4f] bg-gradient-to-b from-[#161a22] to-[#0d0f13] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] select-none">
                {/* Floating Hearts Array Animation */}
                <AnimatePresence>
                  {floatHearts.map((h) => (
                    <motion.div
                      key={h.id}
                      initial={{ opacity: 1, scale: 0.8, x: h.x, y: 150 }}
                      animate={{ opacity: 0, scale: 1.5, x: h.x + h.drift, y: -50 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="pointer-events-none absolute z-40 text-red-500"
                    >
                      <Heart size={20} fill="currentColor" />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Speaker pill */}
                <div className="absolute top-4 left-1/2 z-20 flex h-5 w-28 -translate-x-1/2 items-center justify-center rounded-full bg-[#252a35]">
                  <div className="h-1 w-12 rounded-full bg-[#12151c]" />
                </div>

                {/* Phone screen inner content area */}
                <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[32px] border border-[#ffffff]/5 bg-[#0d0f13] pt-6 text-xs text-white">
                  {/* Web address bar */}
                  <div className="flex items-center justify-between border-b border-[#ffffff]/5 bg-[#13171f]/50 px-4 py-2">
                    <span className="font-mono text-[9px] tracking-widest text-[#bca374]/95 opacity-80">
                      rsk.studio
                    </span>
                    <div className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center justify-between px-4 pt-3 pb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-tr from-[#bca374] to-[#f5ebd7] p-[1.5px]">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#161a22] font-serif text-xs font-bold text-[#bca374] italic select-none">
                          NC
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] leading-tight font-bold tracking-widest text-white uppercase">
                          NextCreavo
                        </h4>
                        <p className="text-[8px] text-stone-500">Social Media Growth Engine</p>
                      </div>
                    </div>

                    <button
                      onClick={handleHeartClick}
                      className={`rounded-full border p-2 transition-colors ${isLiking ? 'scale-110 border-red-500 bg-red-500/20 text-red-500' : 'border-stone-800 bg-[#1a202a]/60 text-stone-400 hover:text-red-500'}`}
                      aria-label="Like post"
                    >
                      <Heart size={12} fill={isLiking ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  {/* Feed post cover area - Digital Creator visual */}
                  <div className="flex flex-1 flex-col justify-between px-3">
                    {/* Visual box resembling a stylized digital asset */}
                    <div className="group relative flex aspect-[4/3] w-full flex-col justify-between overflow-hidden rounded-2xl border border-[#bca374]/15 bg-gradient-to-tr from-[#bca374]/30 via-slate-800/10 to-blue-500/10 p-3.5">
                      {/* Grid overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:10px_10px]" />
                      <div className="absolute top-2 right-2 flex scale-90 items-center gap-1.5 rounded-full border border-stone-800 bg-black/60 px-2 py-0.5 backdrop-blur-md">
                        <span className="h-1 w-1 animate-ping rounded-full bg-[#bca374]" />
                        <span className="font-mono text-[8px] tracking-widest text-stone-300 uppercase">
                          LIVE MONITOR
                        </span>
                      </div>

                      {/* Content metrics overlay inside physical model box representation */}
                      <div className="relative z-10 mt-1 w-max self-start rounded-xl border border-stone-800/40 bg-black/50 p-2.5 text-[9px] backdrop-blur-md">
                        <p className="mb-0.5 font-mono text-[7px] font-bold tracking-widest text-[#bca374] uppercase">
                          Campaign Feed
                        </p>
                        <p className="text-stone-300">High-fidelity animated assets</p>
                      </div>

                      <div className="relative z-10 flex items-end justify-between">
                        <div className="text-[11px] font-bold text-white">
                          {tLocal.reelViews} <br />
                          <span className="text-[8px] font-normal text-stone-400">Active reels</span>
                        </div>
                        <span className="flex items-center gap-1 rounded-lg border border-emerald-900/30 bg-emerald-950/40 px-2 py-0.5 text-[9px] font-bold text-emerald-500">
                          ▲ 64%
                        </span>
                      </div>
                    </div>

                    {/* Numeric stats indices inside card layout representation */}
                    <div className="mt-1 grid shrink-0 grid-cols-3 gap-2 py-2">
                      <div className="rounded-xl border border-[#ffffff]/5 bg-[#12161f] p-2.5 text-center">
                        <span className="mb-1 block font-mono text-[7px] tracking-wider text-stone-500 uppercase">
                          Posts
                        </span>
                        <span className="font-mono text-[11px] leading-none font-bold text-white">245</span>
                      </div>

                      <div className="rounded-xl border border-[#ffffff]/5 bg-[#12161f] p-2.5 text-center">
                        <span className="mb-1 block font-mono text-[7px] tracking-wider text-stone-500 uppercase">
                          {tLocal.followers}
                        </span>
                        <div className="flex items-center justify-center gap-0.5">
                          <span className="font-mono text-[11px] leading-none font-bold text-[#bca374]">128.6K</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-[#ffffff]/5 bg-[#12161f] p-2.5 text-center">
                        <span className="mb-1 block font-mono text-[7px] tracking-wider text-stone-500 uppercase">
                          Following
                        </span>
                        <span className="font-mono text-[11px] leading-none font-bold text-white">103</span>
                      </div>
                    </div>

                    {/* Performance metrics dashboard inside emulator representation */}
                    <div className="mt-1 shrink-0 space-y-2 rounded-2xl border border-[#bca374]/15 bg-gradient-to-b from-[#151922] to-[#0f121a] p-3 text-left">
                      <div className="flex items-center justify-between border-b border-[#ffffff]/5 pb-2">
                        <span className="text-[8px] font-bold tracking-wider text-[#bca374]/90 uppercase">
                          {tLocal.growthOverview}
                        </span>
                        <span className="font-mono text-[7px] leading-none text-stone-500">Blended metrics</span>
                      </div>

                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-stone-400">{tLocal.engagementRate}</span>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-stone-200">9.8%</span>
                          <span className="text-[8px] text-emerald-500">▲ 27.5%</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[9px]">
                        <span className="text-stone-400">{tLocal.totalReach}</span>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-stone-200">2.1M</span>
                          <span className="text-[8px] text-emerald-500">▲ 42.1%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Simulator footer action toolbar */}
                  <div className="flex shrink-0 items-center justify-between border-t border-[#ffffff]/5 bg-[#13161f] px-4 py-3 text-[9px] font-bold tracking-widest text-stone-500 uppercase">
                    <span className="flex cursor-pointer items-center gap-1 transition-colors hover:text-[#bca374]">
                      <Heart size={10} /> {heartCount}
                    </span>
                    <span
                      onClick={() => setInteractiveFollowers((prev) => Number((prev + 0.1).toFixed(1)))}
                      className="flex animate-pulse cursor-pointer items-center gap-1 text-[#bca374]/80 transition-colors hover:text-[#bca374]"
                    >
                      <RefreshCw size={8} className="animate-spin" /> ADD LEAD
                    </span>
                  </div>
                </div>

                {/* Floating elements mimicking the decorative emojis in card */}
                <div
                  onClick={handleHeartClick}
                  className="absolute top-[15%] -left-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-stone-800 bg-[#181d26] text-red-500 shadow-md transition-transform hover:scale-110 hover:bg-neutral-900 active:scale-95"
                  title="Love"
                >
                  <Heart size={18} fill="currentColor" />
                </div>

                <div
                  onClick={() => setInteractiveFollowers((prev) => Number((prev + 1.2).toFixed(1)))}
                  className="absolute top-[35%] -right-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-stone-800 bg-[#181d26] text-blue-500 shadow-md transition-transform hover:scale-110 hover:bg-neutral-900 active:scale-95"
                  title="Thumbs Up"
                >
                  <ThumbsUp size={18} fill="currentColor" />
                </div>

                <div
                  onClick={() => {
                    const smiles = ['🔥', '✨', '⚡', '🙌']
                    alert(smiles[Math.floor(Math.random() * smiles.length)] + ' Campaign active and tracking!')
                  }}
                  className="absolute bottom-[20%] -left-4 flex h-11 w-11 animate-bounce cursor-pointer items-center justify-center rounded-full border border-stone-800 bg-[#181d26] text-yellow-500 shadow-md transition-transform hover:scale-110 hover:bg-neutral-900 active:scale-95"
                  title="Support"
                >
                  <Smile size={18} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: PLATFORMS MANAGED BRAND BAR */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 border-y border-[#bca374]/10 bg-[#0e1117] px-6 py-12"
      >
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="mb-8 font-mono text-[9px] font-semibold tracking-[0.3em] text-[#bca374] uppercase select-none sm:text-[10px]">
            {tLocal.platformsTitle}
          </p>

          {/* Platforms row */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
            {PLATFORMS.map((plat) => (
              <div
                key={plat.id}
                className="group flex cursor-pointer items-center gap-2 rounded-xl border border-stone-800 bg-[#0a0c10]/40 px-4 py-2 text-stone-400 transition-all hover:border-[#bca374]/30 hover:bg-[#12161f] hover:text-white"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-lg border border-[#bca374]/25 bg-[#bca374]/15 text-[8px] font-extrabold text-[#bca374] transition-colors group-hover:bg-[#bca374] group-hover:text-black">
                  {plat.icon}
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase sm:text-xs">{plat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: HOW WE HELP YOUR BUSINESS GROW (Bento Columns) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#06080b] px-6 py-20 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 max-w-3xl space-y-4">
            <span className="block font-mono text-[9px] font-bold tracking-[0.25em] text-[#bca374]/90 uppercase">
              Solution Architecture
            </span>
            <h2 className="font-display text-3xl leading-none font-light tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
              {tLocal.helpTitle}
            </h2>
            <p className="max-w-xl text-xs font-light text-stone-400 sm:text-sm md:leading-relaxed">
              {tLocal.helpDesc}
            </p>
          </div>

          {/* Six pillar cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tLocal.pillars.map((pillar, idx) => {
              const imageMap = [
                'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop', // CONTENT
                'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop', // SEO
                'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=600&auto=format&fit=crop', // HASHTAG
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop', // COMPETITOR
                'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop', // AUDIENCE
                'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop', // REELS
              ]

              return (
                <div
                  key={pillar.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-stone-800/80 bg-[#0e1117] transition-all duration-500 hover:border-[#bca374]/30 hover:bg-[#12161f]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-stone-900">
                    <img
                      src={imageMap[idx]}
                      alt={pillar.title}
                      className="h-full w-full object-cover opacity-40 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-60 group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full border border-stone-800 bg-black/60 px-3 py-1 font-mono text-[9px] font-bold tracking-widest text-[#bca374] uppercase backdrop-blur-md">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-3.5 p-6 md:p-8">
                    <h3 className="font-display text-xs font-bold tracking-wider text-stone-100 uppercase transition-colors group-hover:text-[#bca374] md:text-sm">
                      {pillar.title}
                    </h3>
                    <p className="text-xs leading-relaxed font-light text-stone-400 md:text-sm">{pillar.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* SECTION 4: WHAT WE MANAGE FOR YOUR DIGITAL MEDIA (Two-col list and analytics teaser) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-t border-stone-900 bg-[#0a0c10] px-6 py-20 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* LEFT: Teaser with stats display and digital aesthetic cover */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 lg:order-1 lg:col-span-5"
            >
              <div className="relative space-y-6 overflow-hidden rounded-[2.5rem] border border-stone-800 bg-[#0e1117]/80 p-6 sm:p-8">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[#bca374]/5 blur-2xl" />

                <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
                    <span className="font-mono text-[9px] font-bold tracking-widest text-stone-400 uppercase sm:text-[10px]">
                      Performance Sync
                    </span>
                  </div>
                  <span className="rounded-full bg-[#10b981]/15 px-2.5 py-1 font-mono text-[8px] font-bold text-[#10b981] sm:text-[9px]">
                    STABLE INDICES
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Dynamic interactive metric widget demonstrating telemetry */}
                  <div className="flex items-center justify-between rounded-xl border border-stone-800 bg-[#0a0c10] p-4">
                    <div>
                      <span className="mb-1 block text-[8px] font-bold tracking-wider text-stone-500 uppercase sm:text-[9px]">
                        Target Tribe Reach
                      </span>
                      <span className="font-display text-lg font-bold text-white sm:text-xl md:text-2xl">
                        4.8M impressions
                      </span>
                    </div>
                    <span className="rounded-lg bg-emerald-950/30 px-2 py-1 text-[10px] font-bold text-emerald-500 sm:text-xs">
                      ▲ 142%
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-stone-800 bg-[#0a0c10] p-4">
                    <div>
                      <span className="mb-1 block text-[8px] font-bold tracking-wider text-stone-500 uppercase sm:text-[9px]">
                        Total Leads Acquired
                      </span>
                      <span className="font-display text-lg font-bold text-[#bca374] sm:text-xl md:text-2xl">
                        {interactiveFollowers}k clients
                      </span>
                    </div>
                    <span className="rounded-lg bg-emerald-950/30 px-2 py-1 text-[10px] font-bold text-emerald-500 sm:text-xs">
                      ▲ 38.6%
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-stone-800 bg-[#0a0c10] p-4">
                    <div>
                      <span className="mb-1 block text-[8px] font-bold tracking-wider text-stone-500 uppercase sm:text-[9px]">
                        Return on Ad Spend (ROAS)
                      </span>
                      <span className="font-display text-lg font-bold text-white sm:text-xl md:text-2xl">
                        5.4x average
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-stone-400 sm:text-xs">Audited</span>
                  </div>
                </div>

                {/* Simulated charts widget */}
                <div className="flex items-center justify-between rounded-xl border border-stone-800/60 bg-[#0a0c10]/60 p-4">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-stone-400 sm:text-[10px]">Campaign Status Index</p>
                    <p className="text-[8px] text-stone-500 sm:text-[9px]">Auto-tracking synchronized</p>
                  </div>

                  <div className="flex h-8 items-end justify-end gap-1.5">
                    <div className="h-3 w-2 rounded-xs bg-stone-800" />
                    <div className="h-5 w-2 rounded-xs bg-stone-700" />
                    <div className="h-6 w-2 rounded-xs bg-stone-600" />
                    <div className="h-4 w-2 rounded-xs bg-[#bca374]/40" />
                    <div className="h-7 w-2 rounded-xs bg-[#bca374]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: List with clickable items from Image content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 space-y-6 sm:space-y-8 lg:order-2 lg:col-span-7"
            >
              <div className="space-y-4">
                <span className="block font-mono text-[9px] font-bold tracking-[0.25em] text-[#bca374] uppercase">
                  Operational Scope
                </span>
                <h2 className="font-display text-3xl leading-none font-light tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem]">
                  {tLocal.manageTitle}
                </h2>
              </div>

              {/* Six interactive bars */}
              <div className="space-y-3.5">
                {tLocal.managePoints.map((pt, idx) => {
                  const SvgIcon = pt.icon
                  const isActive = activeManageIdx === idx

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveManageIdx(idx)}
                      className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 sm:p-6 ${
                        isActive
                          ? 'border-[#bca374]/30 bg-[#12161f]'
                          : 'border-stone-800 bg-[#0e1117] hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span
                            className={`rounded-xl border p-2.5 ${isActive ? 'border-[#bca374]/30 bg-[#bca374]/15 text-[#bca374]' : 'border-stone-800 bg-[#0a0c10] text-stone-400'}`}
                          >
                            <SvgIcon size={14} />
                          </span>
                          <h3
                            className={`text-xs font-bold tracking-wide sm:text-sm ${isActive ? 'text-white' : 'text-stone-300'}`}
                          >
                            {pt.title}
                          </h3>
                        </div>
                        <span
                          className={`font-mono text-[10px] font-bold ${isActive ? 'text-[#bca374]' : 'text-stone-500'}`}
                        >
                          0{idx + 1}
                        </span>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="mt-4 max-w-2xl border-l border-[#bca374]/10 pl-12 text-xs leading-relaxed font-light text-stone-400 sm:text-sm">
                              {pt.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 5: WHY PARTNER / STATS & TESTIMONIALS SLIDER */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#06080b] px-6 py-20 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-[1400px] space-y-16 sm:space-y-20">
          {/* Grid of Stats */}
          <div className="border-b border-stone-800 pb-12 sm:pb-16">
            <p className="mb-10 text-center font-mono text-[9px] font-bold tracking-[0.25em] text-[#bca374] uppercase sm:mb-12 sm:text-[11px]">
              Our growth performance index
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="space-y-2 rounded-2xl border border-stone-800 bg-[#0e1117]/60 p-6 transition-all hover:border-[#bca374]/30"
                >
                  <span className="block font-mono text-[9px] tracking-widest text-[#bca374]/60 uppercase">
                    NC INDEX
                  </span>
                  <p className="font-display text-3xl font-light tracking-tighter text-white sm:text-4xl">{stat.val}</p>
                  <p className="text-[10px] font-bold tracking-[0.15em] text-stone-200 uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Slider */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <span className="block font-mono text-[9px] font-bold tracking-[0.25em] text-[#bca374]/85 uppercase">
                Client Verifications
              </span>
              <h2 className="font-display text-3xl leading-tight font-light tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
                {tLocal.whyTitle}
              </h2>
              <p className="max-w-sm text-sm leading-relaxed font-light text-stone-400">{tLocal.whyDesc}</p>
            </div>

            <div className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[3rem] border border-stone-800 bg-[#0e1117] p-8 shadow-2xl shadow-black/30 md:p-12 lg:col-span-7">
              <div className="pointer-events-none absolute top-4 right-8 font-serif text-[15vw] leading-none text-stone-900 opacity-40 select-none">
                “
              </div>

              {/* Active Testimonial Card */}
              <div className="relative z-10 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#bca374" className="text-[#bca374]" />
                  ))}
                </div>

                <p className="max-w-2xl font-serif text-xl leading-snug font-light text-stone-100 italic md:text-2xl">
                  "{TESTIMONIALS[activeTestimonialIdx].quote}"
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <img
                    src={TESTIMONIALS[activeTestimonialIdx].avatar}
                    alt={TESTIMONIALS[activeTestimonialIdx].author}
                    className="h-12 w-12 rounded-full border border-[#bca374]/30 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold tracking-wider text-white uppercase">
                      {TESTIMONIALS[activeTestimonialIdx].author}
                    </h4>
                    <p className="font-mono text-[10px] tracking-widest text-[#bca374] uppercase">
                      {TESTIMONIALS[activeTestimonialIdx].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="z-10 mt-8 flex justify-end gap-3 border-t border-stone-800 pt-6 pt-8">
                <button
                  onClick={prevTestimonial}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-800 text-stone-400 transition-all hover:border-[#bca374]/30 hover:bg-[#1a1e27] hover:text-white"
                  aria-label="Previous review"
                  id="prev-review-button"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-800 text-stone-400 transition-all hover:border-[#bca374]/30 hover:bg-[#1a1e27] hover:text-white"
                  aria-label="Next review"
                  id="next-review-button"
                >
                  <ChevronLeft size={18} className="rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 6: INBOUND CALL-TO-ACTION (Grow Your Brand) */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-[#0a0c10] to-[#040507] px-6 py-20 md:px-12 md:py-24"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="relative space-y-8 overflow-hidden rounded-[2.5rem] border border-[#bca374]/15 bg-gradient-to-br from-[#12161f]/80 to-[#0e1117] p-8 text-center sm:rounded-[3rem] md:p-16">
            {/* Ambient gold particle representation */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bca374]/4 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-xl space-y-4">
              <span className="block font-mono text-[9px] font-bold tracking-[0.3em] text-[#bca374] uppercase sm:text-[10px]">
                Inquire Growth Suite
              </span>
              <h2 className="font-display text-3xl leading-none font-light tracking-tight text-white sm:text-4xl md:text-5xl">
                {tLocal.ctaTitle}
              </h2>
              <p className="pt-2 text-xs leading-relaxed font-light text-stone-400 sm:text-sm">{tLocal.ctaDesc}</p>
            </div>

            {/* Buttons from Image action card */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Link
                href="/contact?service=marketing"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#bca374] to-[#e6d0ac] px-8 py-4 text-[11px] font-bold tracking-widest text-black uppercase transition-all hover:brightness-110 active:scale-95 sm:w-auto sm:px-10 sm:text-xs"
                id="cta-bottom-marketing"
              >
                {tLocal.ctaBrief}
                <ArrowUpRight size={14} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-stone-700 bg-transparent px-8 py-4 text-[11px] font-bold tracking-widest text-stone-200 uppercase transition-all hover:border-[#bca374]/30 hover:bg-stone-900/30 active:scale-95 sm:w-auto sm:px-10 sm:text-xs"
                id="cta-bottom-consult-marketing"
              >
                {tLocal.ctaContact}
              </Link>

              <a
                href="https://wa.me/923012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-[11px] font-bold tracking-widest text-white uppercase transition-all hover:bg-[#128C7E] active:scale-95 sm:w-auto sm:px-10 sm:text-xs"
                id="cta-bottom-whatsapp-marketing"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
