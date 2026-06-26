'use client'

import { useLanguage } from '@/context/LanguageContext'
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Heart,
  MapPin,
  RefreshCw,
  Share2,
  Smile,
  Sparkles,
  Star,
  Target,
  ThumbsUp,
  TrendingUp,
  Users,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const LOCAL_T = {
  EN: {
    back: 'Back to Solutions',
    tagline: 'Premium Digital Marketing & Growth Studio',
    create: 'We Strategize.',
    grow: 'You Dominate.',
    results: 'We Drive Performance.',
    desc: 'Unlocking high-yield growth through localized map dominance, high-intent Google PPC search, scroll-stopping Meta ad campaigns, and authoritative organic social management.',
    bullets: [
      'GMB Optimization & Map Ranking Dominance',
      'High-Intent Google PPC Ad Campaigns',
      'High-Converting Facebook & Meta Ads',
      'Organic Social Media & Content Growth',
    ],
    growthOverview: 'Campaign Telemetry',
    engagementRate: 'Ad Conversion CTR',
    totalReach: 'Blended Monthly Reach',
    reelViews: 'Active Social Impressions',
    followers: 'Leads Generated',
    platformsTitle: 'CHANNELS WE DOMINATE',
    helpTitle: 'OUR 4 CORE DIGITAL MARKETING CHANNELS',
    helpDesc:
      'We don’t do generic campaigns. We laser-focus on the four pillars of modern digital growth to establish immediate visibility, capture demand, and maximize ROI.',
    pillars: [
      {
        id: 'gmb',
        title: '1. GMB OPTIMIZATION',
        desc: 'Claim your spot in the coveted Top-3 Local Map Pack. We optimize your GMB profile to drive heavy local search foot traffic and organic inbound customer calls.',
      },
      {
        id: 'google-ads',
        title: '2. GOOGLE PPC ADS',
        desc: 'Capture high-commercial intent the second your prospects search. We design precise Search, Display, and Performance Max campaigns with optimized ad budgets.',
      },
      {
        id: 'meta-ads',
        title: '3. META ADVERTISING',
        desc: 'Stop the scroll and convert cold interest into sales. We engineer high-ROAS creative funnels, reels, and video ad campaigns on Facebook & Instagram.',
      },
      {
        id: 'social',
        title: '4. SOCIAL MANAGEMENT',
        desc: 'Build lasting customer loyalty and brand authority. We manage your entire feed planning, custom aesthetic designs, copy writing, and community engagement.',
      },
    ],
    manageTitle: 'WHAT WE MANAGE IN YOUR PIPELINE',
    managePoints: [
      {
        title: 'Local SEO & Map Pack Ranking',
        desc: 'Keyword citation mapping, reviews strategy, duplicate index cleaning, and localized search optimization for maximum GMB visibility.',
        icon: MapPin,
      },
      {
        title: 'Google Search & PMax Ad Campaigns',
        desc: 'Advanced bid optimization, negative search terms sculpting, responsive ad copies, and high-ROI landing page architecture.',
        icon: Target,
      },
      {
        title: 'Facebook & Instagram Creative Funnels',
        desc: 'Unparalleled scroll-stopping motion creative assets, audience pixel synchronization, lookalike scaling, and stable acquisition cost structures.',
        icon: Sparkles,
      },
      {
        title: 'Organic Social Calendars & Growth',
        desc: 'Consistent aesthetic layout planning, premium content design, SEO captions, hashtags auditing, and growth analytics reporting.',
        icon: Calendar,
      },
    ],
    whyTitle: 'WHY CHOOSE NEXTCREAVO?',
    whyDesc:
      'Our digital marketing studio skips rigid templates. We forge custom omnichannel campaigns, optimize search attributes, and maintain pristine brand guidelines to maximize ROI.',
    ctaTitle: 'READY TO ACCELERATE GROWTH?',
    ctaDesc:
      'Let’s create, manage, and scale your digital presence. Your success is our mission. Establish your brief to calculate rates.',
    ctaBrief: "Let's Grow Your Brand",
    ctaContact: 'Book a Free Consultation',
    ctaWork: 'View Our Work',
  },
  FR: {
    back: 'Retour aux Solutions',
    tagline: 'Studio de Marketing Digital Premium',
    create: 'Nous Planifions.',
    grow: 'Vous Régnez.',
    results: 'Nous Livrons de la Croissance.',
    desc: 'Propulsez votre marque grâce à l’optimisation locale GMB, des campagnes de recherche Google PPC à haute intention, des publicités Meta à fort taux de conversion, et une gestion organique des réseaux sociaux.',
    bullets: [
      'Optimisation GMB et Domination du Pack de Cartes',
      'Campagnes Google PPC Ciblées sur l’Intention',
      'Publicités Facebook et Meta à Haute Conversion',
      'Gestion Organique des Médias Sociaux',
    ],
    growthOverview: 'Télémétrie de Campagne',
    engagementRate: 'Taux de Conversion Ad',
    totalReach: 'Portée Mensuelle Globale',
    followers: 'Prospects Générés',
    reelViews: 'Impressions Sociales Actives',
    platformsTitle: 'CANAUX QUE NOUS MAÎTRISONS',
    helpTitle: 'NOS 4 CANAUX DE MARKETING DIGITAL',
    helpDesc:
      'Pas de campagnes génériques. Nous nous concentrons exclusivement sur les 4 leviers de croissance moderne pour asseoir votre visibilité et maximiser votre ROI.',
    pillars: [
      {
        id: 'gmb',
        title: '1. OPTIMISATION GMB',
        desc: 'Occupez le Top-3 du Pack de Cartes Local. Nous optimisons votre profil Google Business pour générer des appels entrants directs et des visites physiques.',
      },
      {
        id: 'google-ads',
        title: '2. CAMPAGNES GOOGLE PPC',
        desc: 'Capturez l’intention d’achat immédiate dès la recherche. Nous concevons des annonces ultra-ciblées sur Google Search, Display et Performance Max.',
      },
      {
        id: 'meta-ads',
        title: '3. PUBLICITÉS META',
        desc: 'Arrêtez le défilement et convertissez l’intérêt en ventes. Nous concevons des tunnels créatifs à fort ROAS et des reels captivants sur Facebook et Instagram.',
      },
      {
        id: 'social',
        title: '4. GESTION DES MÉDIAS SOCIAUX',
        desc: 'Fidélisez votre audience et développez votre autorité. Nous orchestrons vos flux éditoriaux, chartes esthétiques, rédactions et interactions communautaires.',
      },
    ],
    manageTitle: 'CE QUE NOUS GÉRONS DANS VOTRE TUNNEL',
    managePoints: [
      {
        title: 'SEO Local et Référencement Map Pack',
        desc: 'Cartographie des citations, stratégie d’avis clients, nettoyage d’index redondants et référencement GMB optimal.',
        icon: MapPin,
      },
      {
        title: 'Campagnes Google Search & PMax',
        desc: 'Optimisation fine des enchères, exclusions de mots-clés négatifs, rédactions de copies d’annonces et pages d’atterrissage performantes.',
        icon: Target,
      },
      {
        title: 'Funnels Créatifs Facebook & Instagram',
        desc: 'Créations de visuels d’arrêts sur image percutants, synchronisation des pixels, ciblage lookalike et coûts d’acquisition optimaux.',
        icon: Sparkles,
      },
      {
        title: 'Calendriers et Croissance Organique',
        desc: 'Planification éditoriale unifiée, conceptions graphiques premium, légendes optimisées SEO et rapports analytiques périodiques.',
        icon: Calendar,
      },
    ],
    whyTitle: 'POURQUOI CHOISIR NEXTCREAVO ?',
    whyDesc:
      'Notre atelier s’affranchit des modèles standardisés. Nous développons des récits mémorables tout en garantissant des résultats tangibles pour chaque dollar investi.',
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
    text: "Their GMB optimization completely transformed our local visibility. Foot traffic increased tremendously and we're consistently in the top 3 Map Pack!",
    name: 'Sarah Khan',
    role: 'Fashion Brand Director',
    company: 'Lumina Boutique',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    metric: 'GMB Map Search Pack: ▲ 340%',
    stat: '+340%',
    statLabel: 'Local Search',
    stars: 5,
    accentColor: 'from-amber-500 to-yellow-500',
  },
  {
    text: 'We capture high-intent buyers exactly when they search. Our Google PPC campaigns are yielding highly predictable leads every single day with stable return on ad spend.',
    name: 'Danish Ali',
    role: 'Elite Fitness Coach',
    company: 'Kinetix Studio',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    metric: 'PPC Ad Spend ROI: 5.4x ROAS',
    stat: '5.4x',
    statLabel: 'Average ROAS',
    stars: 5,
    accentColor: 'from-blue-500 to-indigo-500',
  },
  {
    text: 'The scroll-stopping Meta ad creatives are incredibly high-converting. NextCreavo successfully scaled our sales volume while lowering our client acquisition costs.',
    name: 'Aiman Z.',
    role: 'E-Commerce Director',
    company: 'Vortex Apparel',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    metric: 'Ad Acquisition Cost: -42% CAC',
    stat: '-42%',
    statLabel: 'CAC Reduction',
    stars: 5,
    accentColor: 'from-emerald-500 to-teal-500',
  },
  {
    text: 'Organized content planning and stunning, consistent social assets. Our brand authority and feed engagement have reached new heights, building genuine community loyalty.',
    name: 'Bilal Ahmed',
    role: 'IoT Founder',
    company: 'Synth Intelligence',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    metric: 'Feed Views Generated: 10M+ Reach',
    stat: '10M+',
    statLabel: 'Organic Impressions',
    stars: 5,
    accentColor: 'from-purple-500 to-pink-500',
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

const METRICS_BY_INDEX = [
  {
    reach: 'Top-3 Map Rank',
    reachLabel: 'Local Pack Visibility',
    reachChange: '▲ 340%',
    leads: '24.5k requests',
    leadsLabel: 'Storefront Direction Leads',
    leadsChange: '▲ 48.2%',
    roas: '12:1 Return Ratio',
    roasLabel: 'Map Traffic Audit',
  },
  {
    reach: '6.8% Average CTR',
    reachLabel: 'Google Search Click Rate',
    reachChange: '▲ 18.4%',
    leads: '$14.20 per acquisition',
    leadsLabel: 'Cost Per Quality Lead',
    leadsChange: '▼ 28.5%',
    roas: '5.4x Blended ROI',
    roasLabel: 'Ad Spend Audited',
  },
  {
    reach: '4.8M Video Impressions',
    reachLabel: 'Scroll-Stop Hook Reach',
    reachChange: '▲ 142%',
    leads: '2,450 Direct Orders',
    leadsLabel: 'Meta Conversion Leads',
    leadsChange: '▲ 38.6%',
    roas: '5.2x Creative ROAS',
    roasLabel: 'Ad Platform Telemetry',
  },
  {
    reach: '10.2M Organic Impressions',
    reachLabel: 'Brand Reach Velocity',
    reachChange: '▲ 195%',
    leads: '128.6K Active Fans',
    leadsLabel: 'Loyal Brand Community',
    leadsChange: '▲ 42.1%',
    roas: '98% Retention Rate',
    roasLabel: 'Verified Sentiment',
  },
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
  const [floatHearts, setFloatHearts] = useState<{ id: number; x: number; y: number }[]>([])
  const [phoneNotification, setPhoneNotification] = useState<string | null>(null)
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all')

  const handleHeartClick = () => {
    setIsLiking(true)
    setHeartCount((prev) => prev + 1)

    // Spawn floating heart
    const newId = Date.now()
    const newHeart = {
      id: newId,
      x: Math.random() * 80 + 10,
      y: Math.random() * 40 + 30,
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
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 md:px-12 md:pt-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* HERO LEFT TEXT */}
            <div className="space-y-6 sm:space-y-8 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#bca374]/20 bg-[#bca374]/10 px-4 py-1.5 text-[9px] font-bold tracking-[0.25em] text-[#bca374] uppercase sm:text-[10px]"
                id="agency-tag-marketing"
              >
                <Sparkles size={11} />
                {tLocal.tagline}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                      animate={{ opacity: 0, scale: 1.5, x: h.x + (Math.random() * 50 - 25), y: -50 }}
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
                  <div className="relative flex items-center justify-between border-b border-[#ffffff]/5 bg-[#13171f]/50 px-4 py-2">
                    <span className="font-mono text-[9px] tracking-widest text-[#bca374]/95 opacity-80">
                      nextcreavo.com
                    </span>
                    <div className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    </div>

                    {/* In-app floating slide down alert notification toast */}
                    <AnimatePresence>
                      {phoneNotification && (
                        <motion.div
                          initial={{ opacity: 0, y: -20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.95 }}
                          className="absolute top-full right-0 left-0 z-50 mx-2 mt-2 flex items-center gap-2 rounded-xl border border-[#bca374]/40 bg-gradient-to-r from-stone-900 to-[#12161f] p-2.5 shadow-2xl"
                        >
                          <span className="shrink-0 text-xs text-amber-500">⚡</span>
                          <p className="font-sans text-[9px] leading-snug font-medium text-stone-200">
                            {phoneNotification}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
                        <p className="text-[8px] text-stone-500">Digital Marketing Growth Engine</p>
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
                    const dynamicMessages = [
                      'GMB citation tracking is synchronized! 🔥',
                      'Google Ads PPC bid engine activated! ⚡',
                      'Meta custom audience conversion ready! ✨',
                      'Organic social calendar scheduled! 🙌',
                    ]
                    const msg = dynamicMessages[Math.floor(Math.random() * dynamicMessages.length)]
                    setPhoneNotification(msg)
                    setTimeout(() => setPhoneNotification(null), 3000)
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
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
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

      {/* SECTION 3: SPECIALIZED SOLUTIONS & LIVE TELEMETRY (CONSOLIDATED & NON-REPETITIVE) */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-stone-900 bg-[#06080b] px-6 py-[75px] md:px-12 lg:py-[100px]"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Header */}
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl space-y-4">
              <span className="block font-mono text-[10px] font-bold tracking-[0.3em] text-[#bca374] uppercase">
                Omnichannel Engine
              </span>
              <h2 className="font-display text-4xl leading-[1.1] font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                Specialized Solutions <br />
                <span className="bg-gradient-to-r from-[#bca374] to-[#f5ebd7] bg-clip-text font-serif font-light text-transparent italic">
                  With Live Telemetry
                </span>
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed font-light text-stone-400 sm:text-base">
                Click any core channel card to synchronize our Live Performance Telemetry Auditor, and click "Explore
                Deep-Dive" to access advanced features, citation assets, and strategic guidelines.
              </p>
            </div>

            {/* Interactive Live Status Indicator */}
            <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-[#bca374]/15 bg-[#0e1117]/80 px-6 py-4">
              <div className="flex flex-col">
                <span className="font-mono text-[8px] font-bold tracking-wider text-stone-500 uppercase">
                  AUDITOR SYNC STATUS
                </span>
                <span className="font-mono text-xs font-bold tracking-widest text-white uppercase">LIVE CONNECTED</span>
              </div>
              <span className="h-3 w-3 animate-pulse rounded-full bg-[#10b981]" />
            </div>
          </div>

          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            {/* LEFT COLUMN: THE 4 MAIN CARDS WITH DIRECT LINKS TO SUB-PAGES */}
            <div className="space-y-6 lg:col-span-7">
              {[
                {
                  id: 'gmb-optimization',
                  title: 'GMB Optimization & Map Ranking',
                  desc: 'Dominate local pack citations. We optimize your Google My Business profile and local signal authority to secure a top-3 map pack ranking, generating direct phone leads and physical foot traffic.',
                  icon: <MapPin size={20} />,
                  img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
                  tag: 'LOCAL SEO pack',
                },
                {
                  id: 'google-ads',
                  title: 'Google PPC Search & PMax Ads',
                  desc: 'Capture immediate buy-intent. We engineer targeted Google Search campaigns and automated Performance Max networks with daily negative phrase sculpting to yield optimal CPC acquisitions.',
                  icon: <Target size={20} />,
                  img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
                  tag: 'INTENT PPC',
                },
                {
                  id: 'facebook-ads',
                  title: 'Facebook & Instagram Creative Ads',
                  desc: 'Drive demand with scroll-stopping media. We develop high-ROAS creative motion assets, custom lookalike audience funnels, and setup robust Meta Conversion API tracking systems.',
                  icon: <Facebook size={20} />,
                  img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop',
                  tag: 'DEMOGRAPHIC FUNNELS',
                },
                {
                  id: 'social-media-management',
                  title: 'Social Media Management',
                  desc: 'Elevate digital communities. We orchestrate comprehensive feed planning, custom photography, scroll-stopping graphic designs, and strategic community interactions to build high fans retention.',
                  icon: <Share2 size={20} />,
                  img: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=600&auto=format&fit=crop',
                  tag: 'ORGANIC CALENDAR',
                },
              ].map((service, idx) => {
                const isActive = activeManageIdx === idx

                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveManageIdx(idx)}
                    className={`group relative flex cursor-pointer flex-col gap-6 overflow-hidden rounded-[2rem] border p-6 transition-all duration-500 md:flex-row ${
                      isActive
                        ? 'border-[#bca374]/40 bg-[#12161f] shadow-2xl shadow-[#bca374]/5'
                        : 'border-stone-800/80 bg-[#0e1117] hover:border-stone-700/80 hover:bg-[#10141d]'
                    }`}
                  >
                    {/* Compact Image banner */}
                    <div className="relative aspect-square h-36 w-full shrink-0 overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 md:aspect-auto md:h-full md:w-36">
                      <img
                        src={service.img}
                        alt={service.title}
                        className={`h-full w-full object-cover transition-all duration-700 ${isActive ? 'scale-105 opacity-70 grayscale-0' : 'opacity-40 grayscale group-hover:scale-105 group-hover:opacity-60 group-hover:grayscale-0'}`}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute top-2.5 left-2.5 rounded-full border border-stone-800 bg-black/70 px-2 py-0.5 font-mono text-[7px] font-bold tracking-widest text-[#bca374] uppercase backdrop-blur-md">
                        {service.tag}
                      </span>
                    </div>

                    {/* Card Content details */}
                    <div className="flex flex-1 flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span
                            className={`rounded-xl border p-2 ${isActive ? 'border-[#bca374]/30 bg-[#bca374]/15 text-[#bca374]' : 'border-stone-800 bg-[#0a0c10] text-stone-400 group-hover:text-[#bca374]'}`}
                          >
                            {service.icon}
                          </span>
                          <h3
                            className={`font-display text-base transition-colors md:text-lg ${isActive ? 'font-medium text-[#bca374]' : 'text-stone-100 group-hover:text-[#bca374]'}`}
                          >
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-xs leading-relaxed font-light text-stone-400 sm:text-sm">{service.desc}</p>
                      </div>

                      <div className="flex items-center justify-between border-t border-stone-800/60 pt-2">
                        {/* Live telemetry teaser indicator inside card */}
                        <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#10b981]">
                          <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#10b981]" />
                          <span>{METRICS_BY_INDEX[idx]?.reachChange} Reach Growth</span>
                        </div>

                        {/* Direct Link button as requested */}
                        <Link
                          href={`/services/marketing/${service.id}`}
                          onClick={(e) => e.stopPropagation()} // Prevent row click event when clicking link
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#bca374]/20 bg-[#0a0c10]/80 px-4 py-2 text-[10px] font-bold tracking-widest text-[#bca374] uppercase transition-all hover:bg-[#bca374] hover:text-black hover:text-white"
                        >
                          Explore Deep-Dive <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* RIGHT COLUMN: HIGH-FIDELITY LIVE PERFORMANCE TELEMETRY AUDITOR SIMULATOR */}
            <div className="space-y-6 lg:sticky lg:top-36 lg:col-span-5">
              <div className="relative space-y-6 overflow-hidden rounded-[2.5rem] border border-[#bca374]/20 bg-[#0e1117]/85 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                <div className="pointer-events-none absolute top-0 right-0 h-36 w-36 rounded-full bg-[#bca374]/5 blur-3xl" />

                <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#10b981]" />
                    <span className="font-mono text-[9px] font-bold tracking-widest text-stone-400 uppercase sm:text-[10px]">
                      Auditor Telemetry:{' '}
                      {activeManageIdx === 0
                        ? 'GMB'
                        : activeManageIdx === 1
                          ? 'Google PPC'
                          : activeManageIdx === 2
                            ? 'Meta Ads'
                            : 'Social'}
                    </span>
                  </div>
                  <span className="rounded-full bg-[#10b981]/15 px-2.5 py-1 font-mono text-[8px] font-bold text-[#10b981] sm:text-[9px]">
                    SECURE FEED
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Dynamic interactive metrics synchronized instantly when clicking the left cards */}
                  <div className="flex items-center justify-between rounded-2xl border border-stone-800/80 bg-[#0a0c10] p-5">
                    <div>
                      <span className="mb-1 block text-[8px] font-bold tracking-wider text-stone-500 uppercase sm:text-[9px]">
                        {METRICS_BY_INDEX[activeManageIdx]?.reachLabel}
                      </span>
                      <span className="font-display text-xl font-bold text-white sm:text-2xl">
                        {METRICS_BY_INDEX[activeManageIdx]?.reach}
                      </span>
                    </div>
                    <span className="rounded-xl border border-emerald-900/10 bg-emerald-950/30 px-3 py-1 text-[10px] font-bold text-emerald-500 sm:text-xs">
                      {METRICS_BY_INDEX[activeManageIdx]?.reachChange}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-stone-800/80 bg-[#0a0c10] p-5">
                    <div>
                      <span className="mb-1 block text-[8px] font-bold tracking-wider text-stone-500 uppercase sm:text-[9px]">
                        {METRICS_BY_INDEX[activeManageIdx]?.leadsLabel}
                      </span>
                      <span className="font-display text-xl font-bold text-[#bca374] sm:text-2xl">
                        {METRICS_BY_INDEX[activeManageIdx]?.leads}
                      </span>
                    </div>
                    <span className="rounded-xl border border-emerald-900/10 bg-emerald-950/30 px-3 py-1 text-[10px] font-bold text-emerald-500 sm:text-xs">
                      {METRICS_BY_INDEX[activeManageIdx]?.leadsChange}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-stone-800/80 bg-[#0a0c10] p-5">
                    <div>
                      <span className="mb-1 block text-[8px] font-bold tracking-wider text-stone-500 uppercase sm:text-[9px]">
                        {METRICS_BY_INDEX[activeManageIdx]?.roasLabel}
                      </span>
                      <span className="font-display text-xl font-bold text-white sm:text-2xl">
                        {METRICS_BY_INDEX[activeManageIdx]?.roas}
                      </span>
                    </div>
                    <span className="rounded-xl border border-stone-800 bg-stone-900/40 px-3 py-1 font-mono text-[10px] text-stone-400 sm:text-xs">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Simulated live visualizer graph bars with pulsing animation */}
                <div className="flex items-center justify-between rounded-2xl border border-stone-800/60 bg-[#0a0c10]/60 p-5">
                  <div className="space-y-1">
                    <p className="text-[9px] font-bold text-stone-400 sm:text-[10px]">Campaign Status Index</p>
                    <p className="text-[8px] text-stone-500 sm:text-[9px]">Auto-tracking synchronized</p>
                  </div>

                  <div className="flex h-10 items-end justify-end gap-2">
                    <motion.div
                      animate={{ height: [12, 24, 12] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.1 }}
                      className="w-2.5 rounded-sm bg-stone-800"
                    />
                    <motion.div
                      animate={{ height: [20, 36, 20] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                      className="w-2.5 rounded-sm bg-stone-700"
                    />
                    <motion.div
                      animate={{ height: [24, 16, 24] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                      className="w-2.5 rounded-sm bg-stone-600"
                    />
                    <motion.div
                      animate={{ height: [16, 32, 16] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.7 }}
                      className="w-2.5 rounded-sm bg-[#bca374]/40"
                    />
                    <motion.div
                      animate={{ height: [36, 44, 36] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.9 }}
                      className="w-2.5 rounded-sm bg-[#bca374]"
                    />
                  </div>
                </div>

                {/* CTA inside Telemetry panel */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      const messages = [
                        'Optimizing bid adjustments across Google Search networks...',
                        'Purging duplicate local indices inside GMB registries...',
                        'Synchronizing Facebook Pixel metrics server-side...',
                        'Loading custom creative assets scheduler queue...',
                      ]
                      const randomMsg = messages[Math.floor(Math.random() * messages.length)]
                      setPhoneNotification(randomMsg)
                      setTimeout(() => setPhoneNotification(null), 3000)
                    }}
                    className="w-full rounded-full bg-gradient-to-r from-[#bca374] to-[#f5ebd7] py-4 text-center font-sans text-xs font-bold tracking-widest text-black uppercase shadow-lg transition-all hover:brightness-110 active:scale-[0.98]"
                  >
                    🚀 Trigger Campaign Audit
                  </button>
                </div>
              </div>

              {/* Mini information tag box */}
              <div className="flex items-start gap-3.5 rounded-2xl border border-stone-800/80 bg-[#0e1117]/40 p-5">
                <span className="mt-0.5 shrink-0 text-base text-amber-500">💡</span>
                <p className="text-xs leading-relaxed font-light text-stone-400">
                  Every pipeline integration undergoes our real-time audit protocol to verify compliance with local
                  index mappings and active conversions tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* NEW SECTION 6: CINEMATIC INTERACTIVE PORTFOLIO & WORK AUDITING */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden border-t border-stone-900 bg-[#06080b] px-6 py-[80px] md:px-12 lg:py-[120px]"
      >
        {/* Decorative background details */}
        <div className="pointer-events-none absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-[#bca374]/3 blur-[120px]" />

        <div className="mx-auto max-w-[1400px]">
          {/* Header section with layout rhythm */}
          <div className="mb-16 flex flex-col justify-between gap-8 xl:flex-row xl:items-end">
            <div className="max-w-3xl space-y-4">
              <span className="block font-mono text-[10px] font-bold tracking-[0.3em] text-[#bca374] uppercase">
                Case Studies
              </span>
              <h2 className="font-display text-4xl leading-none font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                Our Proven Campaigns <br />
                <span className="bg-gradient-to-r from-stone-400 via-stone-200 to-white bg-clip-text font-light text-transparent">
                  With Audited Metrics
                </span>
              </h2>
              <p className="max-w-xl text-sm leading-relaxed font-light text-stone-400 sm:text-base">
                Explore verified case studies highlighting direct revenue impact, map citation supremacy, and
                high-efficiency search pipelines.
              </p>
            </div>

            {/* Filter Navigation Menu - High Polish Cinematic Capsule */}
            <div className="flex max-w-full flex-wrap gap-2.5 rounded-2xl border border-stone-800/80 bg-[#0e1117] p-2">
              {[
                { label: 'ALL CAMPAIGNS', key: 'all' },
                { label: 'LOCAL GMB', key: 'gmb-local' },
                { label: 'GOOGLE PPC', key: 'google-ppc' },
                { label: 'META ADS', key: 'meta-ads' },
                { label: 'SOCIAL MGMT', key: 'social' },
              ].map((tab) => {
                const isActive = portfolioFilter === tab.key
                return (
                  <button
                    key={tab.key}
                    onClick={() => setPortfolioFilter(tab.key)}
                    className={`relative rounded-xl px-4 py-2.5 font-mono text-[9px] font-bold tracking-widest uppercase transition-all duration-300 ${
                      isActive
                        ? 'bg-[#bca374] text-black shadow-lg shadow-[#bca374]/10'
                        : 'text-stone-400 hover:bg-stone-900/50 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 3-Column Grid Layout with Animation */}
          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {[
                {
                  id: 'global-tech',
                  title: 'Global Tech Acquisition Launch',
                  category: 'Google PPC Ads',
                  filterKey: 'google-ppc',
                  metrics: '▲ 420% ROI • 2.4M Impressions',
                  desc: 'High-scale Performance Max search pipeline delivering hyper-targeted B2B SaaS acquisition with automated keyword negative sculpting.',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
                  link: '/portfolio/scale-ads-funnel',
                },
                {
                  id: 'urban-cafe',
                  title: 'Urban Cafe Franchise Sync',
                  category: 'Local GMB Optimization',
                  filterKey: 'gmb-local',
                  metrics: '#1 Local Map • +180% Navigation',
                  desc: 'Multi-location local citation network synchronizer capturing heavy high-intent foot traffic and direct offline store queries.',
                  image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
                  link: '/portfolio/gmb-omnimap',
                },
                {
                  id: 'aura-apparel',
                  title: 'Aura Luxury Apparel Creative',
                  category: 'Facebook & Instagram Ads',
                  filterKey: 'meta-ads',
                  metrics: '5.8x Creative ROAS • +230% Sales',
                  desc: 'Scroll-stopping mobile-first video motion funnels integrated with stable high-efficiency custom Meta conversions API pipelines.',
                  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
                  link: '/portfolio/scale-ads-funnel',
                },
                {
                  id: 'synth-hub',
                  title: 'Synth Intelligent SaaS Feed',
                  category: 'Social Media Management',
                  filterKey: 'social',
                  metrics: '12M+ Organic • +92% Retention',
                  desc: 'Premium aesthetic scheduling, daily interactive community threads, and authoritative niche digital placement.',
                  image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
                  link: '/portfolio/saas-social-hub',
                },
                {
                  id: 'horology',
                  title: 'Aether Luxury Watch Funnels',
                  category: 'Facebook & Instagram Ads',
                  filterKey: 'meta-ads',
                  metrics: '7.2x Blended ROI • +15.5k Sales',
                  desc: 'Cinematic creative photography suites coupled with custom lookalike audience targeting systems and high-tier influencer campaigns.',
                  image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
                  link: '/portfolio/scale-ads-funnel',
                },
                {
                  id: 'healthcare',
                  title: 'Zenith Multi-Regional Clinic Ads',
                  category: 'Google PPC Ads',
                  filterKey: 'google-ppc',
                  metrics: '▼ 34% CPA • +220% Leads',
                  desc: 'Fully compliant medical search query dominance delivering hyper-efficient local patient reservation volumes.',
                  image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop',
                  link: '/portfolio/gmb-omnimap',
                },
              ]
                .filter((item) => portfolioFilter === 'all' || item.filterKey === portfolioFilter)
                .map((work) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={work.id}
                    className="group"
                  >
                    <Link href={work.link} className="block space-y-6">
                      {/* Cinematic image vessel with custom metrics preview */}
                      <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-stone-800/80 bg-stone-950 shadow-lg transition-all duration-500 group-hover:border-[#bca374]/30">
                        <img
                          src={work.image}
                          alt={work.title}
                          className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#06080b] via-transparent to-transparent opacity-90" />

                        {/* Top labels bar */}
                        <div className="absolute top-5 right-5 left-5 flex items-center justify-between">
                          <span className="rounded-full border border-[#bca374]/15 bg-black/60 px-3 py-1.5 font-mono text-[8px] font-bold tracking-widest text-[#bca374] backdrop-blur-md">
                            {work.category}
                          </span>

                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-black/60 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                            <ArrowUpRight size={14} />
                          </div>
                        </div>

                        {/* Bottom Metrics Pill */}
                        <div className="absolute bottom-5 left-5">
                          <div className="flex items-center gap-1.5 rounded-xl border border-[#10b981]/30 bg-[#10b981]/10 px-3.5 py-1.5 font-mono text-[9px] font-bold tracking-wider text-[#10b981] backdrop-blur-md">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#10b981]" />
                            {work.metrics}
                          </div>
                        </div>
                      </div>

                      {/* Meta info container */}
                      <div className="space-y-2.5 px-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-lg leading-snug font-medium text-white transition-colors group-hover:text-[#bca374] sm:text-xl">
                            {work.title}
                          </h3>
                        </div>

                        <p className="text-xs leading-relaxed font-light text-stone-400 sm:text-sm">{work.desc}</p>

                        <div className="flex items-center gap-1.5 pt-2 font-mono text-[9px] font-bold tracking-widest text-[#bca374] uppercase transition-colors group-hover:text-white">
                          View Audit Details{' '}
                          <ArrowRight size={10} className="transition-transform group-hover:translate-x-1.5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 7: WHY PARTNER / STATS & TESTIMONIALS SLIDER - REDESIGNED */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-white py-[55px] transition-colors duration-500 lg:py-[75px] dark:border-stone-800 dark:bg-[#05050A]">
        {/* Subtle Background Elements */}
        <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#bca374]/5 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-950/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12">
          {/* Premium Testimonials Slider Carousel */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/50 p-8 shadow-xl backdrop-blur-md sm:p-12 md:p-16 dark:border-stone-800/80 dark:bg-[#0b0c10]/40">
            {/* Background ambient accents inside slider */}
            <div
              className={`absolute top-0 right-0 h-80 w-80 bg-gradient-to-br ${TESTIMONIALS[activeTestimonialIdx].accentColor} pointer-events-none rounded-full opacity-[0.04] blur-[80px] transition-all duration-1000 dark:opacity-[0.08]`}
            />

            <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Trust Widget & Navigation Controls */}
              <div className="flex flex-col justify-center space-y-8 text-center lg:col-span-5 lg:text-left">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-amber-600 uppercase dark:text-amber-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500"></span>
                    CLIENT IMPACT & REVIEWS
                  </div>
                  <h4 className="font-display text-3xl leading-snug font-light tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                    Verified Performance <br className="hidden lg:block" />
                    <span className="bg-gradient-to-r from-[#bca374] to-[#f7e4c4] bg-clip-text font-medium text-transparent">
                      And Case Reviews
                    </span>
                  </h4>
                  <p className="mx-auto max-w-sm text-sm leading-relaxed font-light text-slate-500 lg:mx-0 dark:text-stone-400">
                    We don’t just build visibility—we build high-converting pipelines. Read verified growth stories
                    across all 4 of our marketing services.
                  </p>
                </div>

                {/* Cinematic Premium Statistics Grid */}
                <div className="mx-auto grid max-w-sm grid-cols-2 gap-4 pt-2 lg:mx-0">
                  {[
                    {
                      label: 'Brands Scaled',
                      value: '500+',
                      icon: Users,
                      color: 'text-[#bca374] bg-[#bca374]/10 border-[#bca374]/20',
                    },
                    {
                      label: 'Campaigns Run',
                      value: '1000+',
                      icon: Target,
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
                      className="flex flex-col justify-between rounded-2xl border border-slate-200/60 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#bca374]/20 dark:border-stone-800/80 dark:bg-[#0e1117]/85"
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
                    onClick={prevTestimonial}
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all hover:-translate-x-0.5 hover:border-[#bca374]/40 hover:text-slate-900 dark:border-stone-800 dark:bg-[#0e1117] dark:text-stone-400 dark:hover:text-white"
                    aria-label="Previous Testimonial"
                    id="prev-testimonial-button-marketing"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Visual Dot Steppers */}
                  <div className="flex gap-2">
                    {TESTIMONIALS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonialIdx(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeTestimonialIdx === idx
                            ? 'w-6 bg-[#bca374]'
                            : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-stone-800 dark:hover:bg-stone-700'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition-all hover:translate-x-0.5 hover:border-[#bca374]/40 hover:text-slate-900 dark:border-stone-800 dark:bg-[#0e1117] dark:text-stone-400 dark:hover:text-white"
                    aria-label="Next Testimonial"
                    id="next-testimonial-button-marketing"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Right Column: Active Testimonial Card with AnimatePresence */}
              <div className="relative flex min-h-[380px] w-full items-center sm:min-h-[350px] lg:col-span-7">
                <AnimatePresence mode="wait">
                  {TESTIMONIALS.map((t, idx) => {
                    if (activeTestimonialIdx !== idx) return null
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
                            <div className="flex gap-1 text-amber-500">
                              {[...Array(t.stars)].map((_, s) => (
                                <Star key={s} size={14} fill="currentColor" stroke="currentColor" />
                              ))}
                            </div>
                            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-stone-700" />
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#bca374]/20 bg-[#bca374]/10 px-3 py-1 font-mono text-[10px] font-bold text-slate-800 uppercase dark:text-[#bca374]">
                              <TrendingUp size={12} /> {t.metric}
                            </span>
                          </div>

                          {/* Testimonial Quote Text */}
                          <p className="font-serif text-base leading-relaxed font-light text-slate-800 italic sm:text-lg dark:text-stone-200">
                            "{t.text}"
                          </p>
                        </div>

                        {/* Author Card Footer */}
                        <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-slate-100 pt-6 dark:border-stone-800/60">
                          <img
                            src={t.img}
                            alt={t.name}
                            className="h-14 w-14 animate-none rounded-full border-2 border-slate-200 object-cover shadow-md dark:border-stone-800"
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
                              <span className="font-mono text-[10px] tracking-wide text-[#bca374]">{t.company}</span>
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

      {/* SECTION 6: INBOUND CALL-TO-ACTION (Grow Your Brand) */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-[#0a0c10] to-[#040507] px-6 py-[55px] md:px-12 lg:py-[75px]"
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
