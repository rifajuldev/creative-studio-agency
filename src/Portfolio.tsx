'use client'

import { gsapScopeOptions } from '@/hooks/useScrollTriggerRefresh'
import { absoluteUrl } from '@/lib/seo/site'
import { clearRevealStyles, reveal } from '@/utils/gsapReveal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight,
  Bot,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code,
  Layout,
  Link as LinkIcon,
  Lock,
  Megaphone,
  Monitor,
  Search,
  Smartphone,
  Sparkles,
  Target,
  Video,
  X as XIcon,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Portfolio3DViewer from './components/Portfolio3DViewer'
import ProjectTimeline from './components/ProjectTimeline'
import SocialShareToolbar from './components/SocialShareToolbar'
import { useLanguage } from './context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

interface Project {
  id: string
  title: string
  category: string
  categoryId: string
  desc: string
  longDesc: string
  img: string
  tags: string[]
  client: string
  timeline: string
  challenge: string
  solution: string
  results: string[]
  link?: string
  brandColors?: string[]
  techStack?: string[]
  strategySteps?: { phase: string; title: string; desc: string }[]
  kpis?: { label: string; value: string; desc: string }[]
}

const PROJECTS: Project[] = [
  // 2D Animation
  {
    id: 'lumina-logo',
    title: 'Lumina Fluid Motion Systems',
    category: '2D Animation',
    categoryId: 'animation',
    desc: 'Liquid-motion brand signature and micro-animated interface assets.',
    longDesc:
      'A complete custom animated identity system developed for Lumina Studios. The project involved constructing dynamic vector physics-based logo reveals, fluid custom loading assets for web interfaces, and bespoke motion patterns that evoke brand precision.',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Logo Animation', 'Lottie SDK', 'After Effects', 'Micro-interactions'],
    client: 'Lumina Digital Group',
    timeline: '4 Weeks',
    challenge:
      'Lumina needed a motion signature that rendered perfectly across weak mobile networks, meaning traditional heavy MP4/GIF solutions were unacceptable.',
    solution:
      'We built a programmatic vector-based Lottie JSON animation from scratch, utilizing keyframe interpolation to compression ratios of over 95%.',
    results: [
      'Render payload reduced from 12.4MB to only 160KB',
      'Flawless 60fps execution on mobile hardware',
      'Unified brand interactive animation across 4 core sub-brands',
    ],
    link: 'https://lumina.example.com/brand',
  },
  {
    id: 'alchemist-book',
    title: 'The Alchemist interactive Book Animation',
    category: '2D Animation',
    categoryId: 'animation',
    desc: 'Immersive tactile page-flip animation and magical vector overlay effects.',
    longDesc:
      'A beautiful promotional interactive page designed to accompany the modern special edition of "The Alchemist" book. Integrating canvas-based 3D simulation with hand-crafted 2D custom graphic animations, we created a magical visual trip through the chapters.',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Book Animation', 'WebGL Canvas', 'Spline 3D', 'Tactile UI'],
    client: 'Harper Collins Promo Division',
    timeline: '6 Weeks',
    challenge:
      'Recreating the organic feel and unpredictable physics of paper friction and turn speed in a pure browser element.',
    solution:
      'Engineered a modular WebGL simulation layered with hand-drawn vector stroke morphs executed via CSS path variables on flip events.',
    results: [
      'Average session duration increased by 220%',
      'Featured on multiple digital layout showcase galleries',
      '50,000+ interactive chapters flipped in the first week',
    ],
  },
  {
    id: 'asset-motion-toolkit',
    title: 'NextGen Fintech UI Assets',
    category: '2D Animation',
    categoryId: 'animation',
    desc: 'Programmatic motion assets for mobile and responsive fintech platforms.',
    longDesc:
      'A complete suite of scalable, responsive animated assets compiled for a revolutionary financial services company. From micro-interactions on biometric login to custom celebration charts upon goal metrics, we designed lightweight, highly energetic motion designs.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['SVG Animation', 'Anime.js', 'Fintech', 'Asset Creation'],
    client: 'Aura Finance Inc',
    timeline: '5 Weeks',
    challenge:
      'Ensuring animated elements remained perfectly high contrast and readable under varying smartphone glare situations while preserving active feedback states.',
    solution:
      'Iterated interactive SVGs with high-luminance active states and adaptive path widths to accommodate mobile hardware limitations.',
    results: [
      'Active transactional friction reduced by 18%',
      'Created and shipped 42 custom reusable animated vector structures',
      'Successful cross-platform translation for Web, iOS, and Android',
    ],
  },

  // Digital Marketing
  {
    id: 'gmb-omnimap',
    title: 'GMB Map Ranking Dominance',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    desc: 'Local visibility optimization driving real store transactions.',
    longDesc:
      'A data-heavy GMB optimization program crafted for a regional clinic franchise across 14 separate locations. We audited existing structures, resolved duplicate indexing, automated local citation synchronization, and engineered a smart review review funnel.',
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop',
    tags: ['GMB Optimization', 'Local SEO', 'Citation Sync', 'Conversion Funnels'],
    client: 'Apex Health Systems',
    timeline: '12 Weeks',
    challenge:
      'Locations were suffering from inconsistent business nomenclature and severe keyword cannibalization across adjacent maps.',
    solution:
      'Designed a localized content hub pairing structured schema data with programmatic map pin validation to clean indexing pipelines.',
    results: [
      '340% average increase in primary map search actions',
      'Top-3 local map stack placement across all 14 locations',
      'Reduction in customer acquisition cost (CAC) by 42%',
    ],
  },
  {
    id: 'scale-ads-funnel',
    title: 'Scale 360 Ads Optimizer',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    desc: 'High-ROI multi-channel paid social campaigns with custom creative.',
    longDesc:
      'A performance-driven campaign for an enterprise Shopify lifestyle brand. We developed deep-funnel Facebook and Google Ads campaigns, using custom visual assets and adaptive copy variants to structure high-converting retargeting loops.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Google Ads', 'Facebook Paid Funnel', 'ROAS Optimization', 'Copywriting'],
    client: 'Solis Lifestyle',
    timeline: 'Ongoing',
    challenge:
      'Ad spend was highly volatile with high acquisition friction and declining returns on static banner placements.',
    solution:
      'Pivoted to rich, modular audio-visual ad blocks coupled with tightly structured custom dynamic product ad formats (DPA).',
    results: [
      'Maintained stable 5.2x blending Return on Ad Spend (ROAS)',
      'Generated $2.4M in direct promotional conversion value',
      'Created over 120+ localized ad creative iterations',
    ],
    link: 'https://solis.example.com',
  },
  {
    id: 'saas-social-hub',
    title: 'Vortex SaaS Brand Social Engine',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    desc: 'Full-funnel social media blueprint and custom digital content curation.',
    longDesc:
      'Digital organic marketing strategy and comprehensive visual branding built for a growing developer tooling workspace. We configured a structured publication pipeline focusing on educational graphics, long-form system teardowns, and interactive polls.',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    tags: ['Social Management', 'Content Architecture', 'Visual Layout', 'B2B SaaS'],
    client: 'Vortex Labs LLC',
    timeline: '6 Months',
    challenge:
      'The technical platform struggled to translate its specialized value proposition into simple, memorable social media posts.',
    solution:
      'Constructed detailed vector infographics explaining compound server ideas, making developer tooling visual and shareable.',
    results: [
      'Organic engagement metrics boosted by 180%',
      'Attracted over 25,000 active developer followers without paid spend',
      '30% week-on-week increase in inbound beta signup pipelines',
    ],
  },

  // Web Development
  {
    id: 'nexus-headless-shopify',
    title: 'Nexus Headless Commerce Platform',
    category: 'Web Development',
    categoryId: 'webdev',
    desc: 'Next-generation headless React engine paired with Sanity CMS.',
    longDesc:
      'A custom, lightning-fast Shopify headless architecture created using React and custom-tailored Sanity CMS. Serving static assets with selective hydration, we delivered unmatched performance score indices.',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Shopify Headless', 'Sanity CMS', 'Vercel Edge'],
    client: 'Nexus Retail Collective',
    timeline: '10 Weeks',
    challenge:
      'The client had complex catalog customization needs that made their standard Shopify theme load time exceed 6 seconds.',
    solution:
      'Designed a fully decoupled custom front-end using static-site generation, caching live product states at the Edge network layer.',
    results: [
      'Page speed index score increased to 99/100',
      'Average checkouts increased by 31%',
      'Content management workload reduced by half',
    ],
    link: 'https://nexus-commerce.example.com',
  },
  {
    id: 'empower-corporate-digital',
    title: 'Empower Corporate Webflow Portal',
    category: 'Web Development',
    categoryId: 'webdev',
    desc: 'Immersive corporate identity built on custom-integrated Webflow.',
    longDesc:
      'For a sustainable investment bank, we constructed an elegant corporate hub on Webflow, enhanced with advanced custom JavaScript modules, fluid GSAP scroll interactions, and programmatic carbon footprints calculators.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    tags: ['Webflow Developer', 'GSAP Animation', 'Custom JS Integrations', 'SEO Optimization'],
    client: 'Empower Sovereign Funds',
    timeline: '6 Weeks',
    challenge:
      'Achieving a highly customized, animation-rich layout that usually depends on raw code, while keeping content management super easy for non-developers.',
    solution:
      'Set up an elegant Webflow layout with custom JavaScript bindings, linking real-time analytics to their standard Webflow CMS.',
    results: [
      'Smooth client-side calculation queries with zero latency',
      'Internal marketing team can launch new articles and guides contextually',
      'Over 1.2M annual digital visitors navigated without layout degradation',
    ],
  },
  {
    id: 'vortex-core-portal',
    title: 'Vortex Real-Time Cloud Console',
    category: 'Web Development',
    categoryId: 'webdev',
    desc: 'Enterprise full-stack developer portal and monitoring environment.',
    longDesc:
      'A secure, high-density Web experience built on a full-stack Node.js framework. Combining dynamic canvas layout systems, real-time telemetry pipelines via secure sockets, and modular admin interfaces, we constructed an amazing developer platform.',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
    tags: ['NodeJS', 'Express.js', 'PostgreSQL', 'Socket.io', 'Tailwind'],
    client: 'Vortex Cloud Services',
    timeline: '14 Weeks',
    challenge:
      'Optimizing high-density charts so that they update smoothly in real-time under hundreds of concurrent operations without locking the UI.',
    solution:
      'Implemented canvas-optimized raster render patterns instead of rendering individual browser DOM nodes for active charts.',
    results: [
      'Renders 10,000 metrics per second smoothly at 60fps',
      'Robust enterprise authentication and scope controls integrated',
      'Reduced server reporting delays to less than 40 milliseconds',
    ],
  },

  // App Development
  {
    id: 'zenith-fitness-app',
    title: 'Zenith Smart Fitness companion',
    category: 'App Development',
    categoryId: 'appdev',
    desc: 'A gorgeous React Native mobile app with custom health-metric pipelines.',
    longDesc:
      'A modern, cross-platform health tracking platform built to interface with consumer smartwatches and sensors. Engineered with React Native, the app records real-time bioindicators, uses local SQLite datasets, and outputs stateful progress visualizers.',
    img: 'https://images.unsplash.com/photo-1510051646316-935218d6facc?q=80&w=1200&auto=format&fit=crop',
    tags: ['React Native', 'SQLite', 'Bluetooth SDK', 'HealthKit'],
    client: 'Zenith BioLab Systems',
    timeline: '12 Weeks',
    challenge:
      'Resolving high battery drain and frame drops during live spatial coordinate logging on older smartphone models.',
    solution:
      'Migrated coordinate capture services to native background tasks, caching sensor states efficiently before updating UI structures.',
    results: [
      'Battery usage rate reduced by 65%',
      'Enriched layout experiences with smooth 60fps state tracking',
      'Average iOS and Android store ratings of 4.8/5',
    ],
  },
  {
    id: 'velo-express-app',
    title: 'Velo Delivery Native iOS App',
    category: 'App Development',
    categoryId: 'appdev',
    desc: 'Real-time routing logistics and on-demand delivery interface.',
    longDesc:
      'A swift, Native iOS application developed to serve urban delivery riders and dispatcher networks. Embedded with custom maps overlays, programmatic transit estimation engines, and frictionless payment portals.',
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
    tags: ['Swift', 'MapKit Routing', 'CoreLocation API', 'Stripe Native'],
    client: 'Velo Logistics Corp',
    timeline: '16 Weeks',
    challenge: 'Providing robust spatial redirection algorithms even under sudden urban cellular tunnel dropouts.',
    solution:
      'Created an offline-first navigation fallback system that uses local device compass states and vector map tiles.',
    results: [
      'Uninterrupted rider routing with 99.8% uptime metrics',
      'Average route completion times improved by 14%',
      'Integrated Secure payments handling millions of transit points',
    ],
  },
  {
    id: 'pocket-wallet-crypto',
    title: 'Pocket Non-Custodial Mobile Wallet',
    category: 'App Development',
    categoryId: 'appdev',
    desc: 'Bespoke cross-platform mobile crypto experience prioritizing security.',
    longDesc:
      'Designed to offer secure, frictionless blockchain queries, Pocket is built on unified cross-platform tech. Featuring biometric keychains, seed phrase generation engines, and complex instant gas visual graphs.',
    img: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1200&auto=format&fit=crop',
    tags: ['Flutter', 'Rust Secure Core', 'Web3.js SDK', 'Biometric Lock'],
    client: 'Pocket Crypto Inc',
    timeline: '10 Weeks',
    challenge:
      'Keeping visual asset feeds highly updated while maintaining solid safety protocols for cold storage systems.',
    solution:
      'Engineered a sandboxed local database written in secure Rust that interacts with UI views through encrypted channels.',
    results: [
      'Secured zero security failures across audits',
      'Supported native custom themes and responsive sizes',
      '300k+ active installations across iOS and Android stores',
    ],
  },

  // AI & Integrations
  {
    id: 'cognitive-crm-agents',
    title: 'Cognitive Hub CRM Automator',
    category: 'AI & Integrations',
    categoryId: 'ai',
    desc: 'Advanced autonomous agent pipeline handling complex B2B client communications.',
    longDesc:
      'A modern multi-agent digital workflow built for global scaling operations. The system continuously polls incoming communications, parses user intent, extracts transaction details, and automatically updates CRM databases.',
    img: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=1200&auto=format&fit=crop',
    tags: ['AI Agentic', 'Gemini API', 'NodeJS Orchestrator', 'CRM Syncs'],
    client: 'Cognitive Enterprise Softwares',
    timeline: '8 Weeks',
    challenge:
      'Parsing complex, highly fragmented custom legal requests without losing semantic context or generating wrong metadata.',
    solution:
      'Implemented structured system instructions coupled with strict JSON schemas to validate all agentic outputs.',
    results: [
      'Manual clerical workloads cut by 82%',
      'Processing times for CRM update tickets reduced to seconds',
      'Over 99.4% classification precision across test databases',
    ],
  },
  {
    id: 'gemini-legal-search',
    title: 'Gemini Dense Knowledge Hub',
    category: 'AI & Integrations',
    categoryId: 'ai',
    desc: 'Empowering rapid query pipelines through semantic indices and AI synthesis.',
    longDesc:
      'A heavy legal analytics portal developed to parse hundreds of thousands of active transaction articles. Powered by the Gemini API, it runs semantic inquiries and structures instant legally grounded case summaries.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Gemini LLM', 'Vector Index', 'RAG Architecture', 'LegalTech'],
    client: 'Harding & Partners Law',
    timeline: '10 Weeks',
    challenge:
      'Lawyers need ultra-precise citations. Mock results or untraceable details would render the tool useless.',
    solution:
      'Crafted a custom vector searching network (RAG) that restricts the LLM text output solely to active legal database documents.',
    results: [
      'Document research speeds improved by over 400%',
      'Eliminated output hallucinations through strict local grounding',
      'Highly praised interface currently active across 5 partner offices',
    ],
  },
  {
    id: 'intelligent-pipeline-flows',
    title: 'Interstellar Pipeline Sync',
    category: 'AI & Integrations',
    categoryId: 'ai',
    desc: 'Unified intelligent pipelines connecting standard communication suites.',
    longDesc:
      'Automated integration patterns bridging HubSpot, Salesforce, Slack, Zendesk, and Google Workspace. The pipeline uses natural language analysis to parse incoming priority incidents, alert target squads on Slack, and suggest resolutions.',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Webhooks API', 'Automation', 'Zendesk Custom', 'NodeJS'],
    client: 'Interstellar SaaS Corp',
    timeline: '5 Weeks',
    challenge:
      'Integrating different APIs with proprietary payload standards without generating synchronization conflicts.',
    solution:
      'Structured a resilient queue middleware that normalizes incoming webhook data into clean internal event streams.',
    results: [
      'SLA responses improved by 35% with zero dropped webhooks',
      'Eliminated duplicate server alerts by deduplicating incident queues',
      'Configured 15 programmatic connectors into a single automated pipeline',
    ],
  },

  // UI/UX Design
  {
    id: 'helios-smart-house',
    title: 'Helios Smart Home UX System',
    category: 'UI/UX Design',
    categoryId: 'uiux',
    desc: 'Sleek, highly accessible visual interfaces for smart environmental components.',
    longDesc:
      'An exhaustive UX overhaul for a leading smart home brand. We built a gorgeous visual system with rich widget assets, flexible dashboards, micro-interactions, high accessibility, and deep mobile support.',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
    tags: ['Figma Blueprint', 'UX Architecture', 'Smart Home UI', 'Accessibility WCAG'],
    client: 'Helios Devices Corp',
    timeline: '8 Weeks',
    challenge: 'The platform had complex navigation hierarchies that confused senior users and kids alike.',
    solution:
      'Designed and tested simple visual layouts with bold touch targets, keeping key active widgets accessible within 1 tap.',
    results: [
      'First-try completion metrics boosted by 90%',
      'Successfully integrated full Dark/Light adaptive color scales',
      'Client recorded a 60% drop in device-onboarding support calls',
    ],
  },
  {
    id: 'aero-logistics-dashboard',
    title: 'Aero Flight Logistics Console',
    category: 'UI/UX Design',
    categoryId: 'uiux',
    desc: 'Dense, fast, and high-performance layout interfaces for dispatch metrics.',
    longDesc:
      'A premium, high-density dashboard built for airline scheduling. We researched dispatchers’ active shifts, analyzed eye-tracking data, and converted cluttered tools into beautiful layouts optimized for multiple views.',
    img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
    tags: ['High Density Design', 'Dashboard UX', 'Eye-Tracking Audit', 'Design System'],
    client: 'Aero Cargo Group',
    timeline: '12 Weeks',
    challenge:
      'Creating an interface that displays 50+ real-time variables on screen without inducing visual fatigue during 12-hour dispatcher shifts.',
    solution:
      'Organized views using soft background scales, custom sans-mono fonts for stats, and deep context colors.',
    results: [
      'Dispatcher entry errors decreased by 27%',
      'Visual stress ratings dropped by 45%',
      'A streamlined corporate layout deployed across 3 major airports',
    ],
  },
  {
    id: 'nova-retail-overhaul',
    title: 'Nova Retail Checkout Flows',
    category: 'UI/UX Design',
    categoryId: 'uiux',
    desc: 'High-conversion checkout patterns redesigning traditional e-commerce paradigms.',
    longDesc:
      'A strategic, pixel-perfect UX redesign targeting checkout optimization. We analyzed user dropoffs, restructured step modules, streamlined input fields, and integrated dynamic validation to minimize buying friction.',
    img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
    tags: ['E-Commerce UX', 'Conversion Flow', 'Mobile Testing', 'Figma Assets'],
    client: 'Nova Fashion Ltd',
    timeline: '7 Weeks',
    challenge:
      'The old multi-page checkout was causing severe cart abandonment rates, particularly for young mobile users.',
    solution:
      'Constructed an express checkout page with inline validations, instant postal lookup, and dynamic credit forms.',
    results: [
      'E-commerce cart abandonment rate dropped by 45%',
      'Interactive checkout speeds climbed by 60%',
      'Mobile sales conversions climbed by 28%',
    ],
  },
]

export default function Portfolio() {
  const params = useParams()
  const id = typeof params.id === 'string' ? params.id : undefined
  const router = useRouter()
  const { t, language } = useLanguage()

  // Categories definition
  const CATEGORIES = [
    { id: 'all', label: t('portfolio.categories.all'), count: 18 },
    {
      id: 'animation',
      label: t('portfolio.categories.animation'),
      desc: t('portfolio.categories.desc.animation'),
      icon: Video,
      count: 3,
    },
    {
      id: 'marketing',
      label: t('portfolio.categories.marketing'),
      desc: t('portfolio.categories.desc.marketing'),
      icon: Megaphone,
      count: 3,
    },
    {
      id: 'webdev',
      label: t('portfolio.categories.webdev'),
      desc: t('portfolio.categories.desc.webdev'),
      icon: Code,
      count: 3,
    },
    {
      id: 'appdev',
      label: t('portfolio.categories.appdev'),
      desc: t('portfolio.categories.desc.appdev'),
      icon: Smartphone,
      count: 3,
    },
    {
      id: 'ai',
      label: t('portfolio.categories.ai'),
      desc: t('portfolio.categories.desc.ai'),
      icon: Bot,
      count: 3,
    },
    {
      id: 'uiux',
      label: t('portfolio.categories.uiux'),
      desc: t('portfolio.categories.desc.uiux'),
      icon: Layout,
      count: 3,
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop')
  const [isHovered, setIsHovered] = useState(false)
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  // Scroll to top when active project changes via dynamic ID
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex)
    setCopiedColor(hex)
    setTimeout(() => {
      setCopiedColor(null)
    }, 2000)
  }

  // Helper to resolve specific strategy metrics based on project metadata
  const getProjectStrategy = (project: Project) => {
    const colors =
      project.brandColors ||
      (project.categoryId === 'animation'
        ? ['#FF3366', '#0F172A', '#38BDF8', '#F1F5F9']
        : project.categoryId === 'marketing'
          ? ['#10B981', '#06B6D4', '#1E293B', '#F8FAFC']
          : project.categoryId === 'webdev'
            ? ['#6366F1', '#4F46E5', '#0F172A', '#F3F4F6']
            : project.categoryId === 'appdev'
              ? ['#EC4899', '#DB2777', '#111827', '#FDF2F8']
              : project.categoryId === 'ai'
                ? ['#8B5CF6', '#3B82F6', '#0B0F19', '#EEF2FF']
                : ['#F59E0B', '#1E293B', '#64748B', '#F8FAFC'])

    const stack = project.techStack || project.tags

    const steps = project.strategySteps || [
      {
        phase: '01. BRIEF',
        title: 'Context & Landscape Audit',
        desc: `Evaluation of current performance gaps, visual bottlenecks and user requirements for ${project.client}.`,
      },
      {
        phase: '02. BLUEPRINT',
        title: 'Visual Wireframes & Interaction Flow Map',
        desc: 'Constructing user-centric interaction pathways to reduce payload cycles and maximize click engagements.',
      },
      {
        phase: '03. ENGINEERING',
        title: 'Pixel-Perfect Production Cycles',
        desc: 'Crafting responsive layout containers, micro-interactions, specialized assets and core state systems.',
      },
      {
        phase: '04. VELOCITY',
        title: 'Media Compression & Code Shaving',
        desc: 'Ensuring files load instantly on low-bandwidth regions, shaving unused modules and benchmarking performance.',
      },
      {
        phase: '05. DEPLOYMENT',
        title: 'Edge Delivery & Global Launch',
        desc: 'Deploying the refined build to lightning-fast cloud delivery networks with caching routes.',
      },
    ]

    const kpis = project.kpis || [
      {
        label: 'LIGHTHOUSE CORE',
        value: project.categoryId === 'webdev' || project.categoryId === 'animation' ? '99/100' : '96/100',
        desc: 'Speed Index benchmarking score',
      },
      {
        label: 'AVERAGE BOOST',
        value: project.categoryId === 'marketing' || project.id.includes('checkout') ? '+45%' : '+28%',
        desc: 'Product transaction & search visibility delta',
      },
      {
        label: 'HYDRATION WEIGHT',
        value: project.categoryId === 'animation' ? '160KB' : '1.1s',
        desc: 'Payload size for faster terminal responses',
      },
    ]

    return { colors, stack, steps, kpis }
  }

  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!id) {
        reveal('.portfolio-reveal', {
          from: { y: 40 },
          duration: 1.2,
          stagger: 0.1,
          scrollTrigger: { trigger: '.portfolio-container', start: 'top 85%' },
        })

        reveal('.hero-text-reveal', {
          from: { y: 80 },
          duration: 1.5,
          stagger: 0.1,
          delay: 0.1,
          scrollTrigger: false,
        })
      } else {
        reveal('.details-hero-reveal', {
          from: { y: 50 },
          duration: 1.3,
          stagger: 0.12,
          scrollTrigger: false,
        })

        reveal('.details-sec-card', {
          from: { y: 30 },
          duration: 1.1,
          stagger: 0.15,
          scrollTrigger: { trigger: '.details-sections', start: 'top 85%' },
        })
      }

      return () => clearRevealStyles('.portfolio-reveal, .hero-text-reveal, .details-hero-reveal, .details-sec-card')
    },
    { scope: container, dependencies: [id], ...gsapScopeOptions }
  )

  // -------------------------------------------------------------
  // DEDICATED FULL-PAGE DETAILS RENDER BRANCH
  // -------------------------------------------------------------
  if (id) {
    const activeProject = PROJECTS.find((p) => p.id === id)
    if (activeProject) {
      const { colors, stack, steps, kpis } = getProjectStrategy(activeProject)
      const currentIndex = PROJECTS.findIndex((p) => p.id === id)
      const prevProject = PROJECTS[currentIndex > 0 ? currentIndex - 1 : PROJECTS.length - 1]
      const nextProject = PROJECTS[currentIndex < PROJECTS.length - 1 ? currentIndex + 1 : 0]

      return (
        <div
          ref={container}
          className="bg-primary text-primary selection:bg-invert selection:text-invert min-h-screen w-full pb-32 transition-colors duration-700"
        >
          {/* Floating Share Control */}
          <SocialShareToolbar title={activeProject.title} url={absoluteUrl(`/portfolio/${activeProject.id}`)} />

          {/* Executive Sub-Header Controller Ribbon */}
          <div className="bg-primary/95 border-border-primary/80 sticky top-[70px] z-30 w-full border-b px-4 py-3 backdrop-blur-md md:top-[80px] md:px-12 md:py-4">
            <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 md:flex-row">
              {/* Back to directory launcher */}
              <button
                onClick={() => router.push('/portfolio')}
                className="text-primary hover:text-secondary group flex items-center gap-2.5 self-start text-[10px] font-bold tracking-[0.2em] uppercase transition-colors md:self-auto"
                id="back-to-listing-link"
              >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {t('portfolio.back_to_grid')}
              </button>

              {/* Sequential Case Study Sliders */}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => router.push(`/portfolio/${prevProject.id}`)}
                  className="text-secondary hover:text-primary group flex items-center gap-2 text-[9px] font-semibold tracking-[0.15em] uppercase transition-colors"
                  title={`Previous: ${prevProject.title}`}
                >
                  <ChevronLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                  {t('portfolio.prev_case')}
                </button>
                <span className="bg-border-primary/60 h-3 w-[1px]" />
                <span className="text-secondary/70 font-mono text-[10px] tracking-widest lowercase">
                  {currentIndex + 1} of {PROJECTS.length}
                </span>
                <span className="bg-border-primary/60 h-3 w-[1px]" />
                <button
                  onClick={() => router.push(`/portfolio/${nextProject.id}`)}
                  className="text-secondary hover:text-primary group flex items-center gap-2 text-[9px] font-semibold tracking-[0.15em] uppercase transition-colors"
                  title={`Next: ${nextProject.title}`}
                >
                  {t('portfolio.next_case')}
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Platform Preview frames control panel */}
              <div className="bg-secondary/80 border-border-primary/60 flex items-center gap-2 rounded-full border p-0.5">
                <button
                  onClick={() => setPreviewMode('desktop')}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase transition-all duration-300 ${
                    previewMode === 'desktop'
                      ? 'bg-primary text-primary border-border-primary/20 border shadow-sm'
                      : 'text-secondary/60 hover:text-primary'
                  }`}
                >
                  <Monitor size={10} />
                  {t('portfolio.desktop_pre')}
                </button>
                <button
                  onClick={() => setPreviewMode('mobile')}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase transition-all duration-300 ${
                    previewMode === 'mobile'
                      ? 'bg-primary text-primary border-border-primary/20 border shadow-sm'
                      : 'text-secondary/60 hover:text-primary'
                  }`}
                >
                  <Smartphone size={10} />
                  {t('portfolio.mobile_pre')}
                </button>
              </div>
            </div>
          </div>

          {/* Master Case Description & Hero Stage */}
          <section className="bg-primary relative px-6 pt-24 pb-16 md:px-12 md:pt-32">
            <div className="relative z-10 mx-auto w-full max-w-[1400px]">
              <div className="details-hero-reveal mb-8 flex flex-wrap items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-secondary relative inline-flex h-2.5 w-2.5 rounded-full"></span>
                </span>
                <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                  {t('portfolio.client_chronicle')}
                </span>
                <span className="bg-border-primary/60 h-1.5 w-1.5 rounded-full" />
                <span className="bg-secondary text-secondary border-border-primary/30 rounded-[1rem] border px-3.5 py-1 text-[9px] font-semibold tracking-wider uppercase">
                  {activeProject.category}
                </span>
              </div>

              <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
                <div className="details-hero-reveal space-y-6 lg:col-span-8">
                  <span className="text-secondary/50 block font-mono text-xs tracking-widest uppercase">
                    {activeProject.client} — Case Study
                  </span>

                  {/* Majestic Homepage-inspired typographic header */}
                  <h1 className="font-display text-primary text-4xl leading-[1] font-light tracking-tight sm:text-5xl md:text-6xl md:leading-[0.95] lg:text-[5.5rem]">
                    <span className="block font-light">
                      {(t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                        ? t(`project.${activeProject.id}.title`)
                        : activeProject.title
                      ).includes(' ')
                        ? (t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                            ? t(`project.${activeProject.id}.title`)
                            : activeProject.title
                          )
                            .split(' ')
                            .slice(
                              0,
                              Math.ceil(
                                (t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                                  ? t(`project.${activeProject.id}.title`)
                                  : activeProject.title
                                ).split(' ').length / 2
                              )
                            )
                            .join(' ')
                        : t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                          ? t(`project.${activeProject.id}.title`)
                          : activeProject.title}
                    </span>
                    <span className="text-secondary block pt-1 font-serif italic">
                      {(t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                        ? t(`project.${activeProject.id}.title`)
                        : activeProject.title
                      ).includes(' ')
                        ? (t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                            ? t(`project.${activeProject.id}.title`)
                            : activeProject.title
                          )
                            .split(' ')
                            .slice(
                              Math.ceil(
                                (t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                                  ? t(`project.${activeProject.id}.title`)
                                  : activeProject.title
                                ).split(' ').length / 2
                              )
                            )
                            .join(' ')
                        : 'blueprint.'}
                    </span>
                  </h1>

                  <p className="text-secondary max-w-4xl pt-4 text-lg leading-relaxed font-light md:text-xl">
                    {t(`project.${activeProject.id}.longDesc`) !== `project.${activeProject.id}.longDesc`
                      ? t(`project.${activeProject.id}.longDesc`)
                      : activeProject.longDesc}
                  </p>
                </div>

                {/* Visual Project Meta Specs */}
                <div className="border-border-primary/50 bg-secondary/20 details-hero-reveal space-y-6 rounded-[2rem] border p-8 lg:col-span-4">
                  <div>
                    <span className="text-secondary/50 mb-1 block text-[9px] font-semibold tracking-[0.2em] uppercase">
                      {t('portfolio.account_partner')}
                    </span>
                    <span className="text-primary block text-base font-semibold">{activeProject.client}</span>
                  </div>
                  <div className="border-border-primary/30 border-t pt-4">
                    <span className="text-secondary/50 mb-1 block text-[9px] font-semibold tracking-[0.2em] uppercase">
                      {t('portfolio.transit_timeline')}
                    </span>
                    <span className="text-primary flex items-center gap-1.5 text-base font-semibold">
                      <Clock size={14} className="text-secondary" />
                      {activeProject.timeline}
                    </span>
                  </div>
                  {activeProject.link && (
                    <div className="border-border-primary/30 border-t pt-4">
                      <span className="text-secondary/50 mb-1 block text-[9px] font-semibold tracking-[0.2em] uppercase">
                        {t('portfolio.live_link')}
                      </span>
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-secondary hover:text-primary group flex items-center gap-1.5 text-sm font-semibold transition-colors"
                      >
                        <LinkIcon size={12} className="transition-transform group-hover:rotate-45" />
                        {activeProject.link.replace('https://', '')}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Parallax-style Immersive Wide Hero Image Banner */}
              <div className="bg-secondary border-border-primary/80 group details-hero-reveal relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] border md:rounded-[3.2rem]">
                <img
                  src={activeProject.img}
                  alt={activeProject.title}
                  className="relative -top-[10%] h-[120%] w-full object-cover opacity-90 grayscale transition-all duration-[1.5s] group-hover:scale-102 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Immersive 3D Experience Section */}
              <div className="details-hero-reveal mt-12">
                <Portfolio3DViewer />
              </div>
            </div>
          </section>

          {/* Majestic Core Technical Telemetry Stats (No bulky cards, highly scannable grid) */}
          <div className="border-border-primary/50 details-sections mx-auto my-12 grid max-w-[1400px] grid-cols-1 gap-8 border-t border-b px-6 py-16 md:grid-cols-3 md:gap-12 md:px-12">
            {kpis.map((kpi, kIdx) => (
              <div key={kIdx} className="details-sec-card space-y-4">
                <span className="text-secondary/60 block font-mono text-[10px] font-semibold tracking-[0.22em] uppercase">
                  {kpi.label}
                </span>
                <div className="font-display text-primary text-5xl leading-none font-light tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  {kpi.value}
                </div>
                <p className="text-secondary max-w-sm font-sans text-sm leading-relaxed font-light">{kpi.desc}</p>
              </div>
            ))}
          </div>

          {/* Project Milestone Timeline */}
          <ProjectTimeline />
          <section className="bg-primary px-6 py-12 md:px-12">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
              {/* LEFT CHANNEL: Narrative, Strategy Steps & swatches */}
              <div className="space-y-20 lg:col-span-7">
                {/* Section 01: Brief Challenge & Core Highlights */}
                <div className="border-border-primary/40 space-y-10 border-b pb-16">
                  <div className="flex items-center gap-3">
                    <span className="text-secondary bg-secondary border-border-primary/60 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold shadow-xs select-none">
                      01
                    </span>
                    <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                      {t('portfolio.strategic_brief')}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-8 pt-2 md:grid-cols-2">
                    <div className="space-y-3">
                      <h4 className="text-secondary/60 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                        <Target size={12} className="text-secondary" />
                        {t('portfolio.pinnacle_obstacle')}
                      </h4>
                      <p className="text-secondary text-sm leading-relaxed font-light">{activeProject.challenge}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-secondary/60 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                        <CheckCircle size={12} className="text-secondary" />
                        {t('portfolio.technical_formulation')}
                      </h4>
                      <p className="text-secondary text-sm leading-relaxed font-light">{activeProject.solution}</p>
                    </div>
                  </div>

                  <div className="border-border-primary/30 space-y-4 border-t pt-6">
                    <h4 className="text-secondary/40 text-[10px] font-bold tracking-widest uppercase">
                      {t('portfolio.verified_outcomes')}
                    </h4>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {activeProject.results.map((result, rIdx) => (
                        <div
                          key={rIdx}
                          className="bg-secondary/20 border-border-primary/45 hover:border-secondary/40 flex items-start gap-4 rounded-2xl border p-5 transition-colors"
                        >
                          <span className="bg-primary border-border-primary/50 text-secondary mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[9px] font-bold select-none">
                            ✓
                          </span>
                          <span className="text-secondary text-xs leading-relaxed font-light">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 02: Design Brand Swatches */}
                <div className="border-border-primary/40 space-y-8 border-b pb-16">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-secondary bg-secondary border-border-primary/60 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold select-none">
                        02
                      </span>
                      <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                        {t('portfolio.aesthetic_swatches')}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-secondary mb-8 max-w-xl text-xs leading-relaxed font-light">
                      {t('portfolio.aesthetic_desc')}
                    </p>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {colors.map((color, cIdx) => (
                        <div
                          key={cIdx}
                          onClick={() => copyToClipboard(color)}
                          className="group/swatch border-border-primary/40 bg-secondary/10 hover:bg-secondary/30 flex cursor-pointer flex-col items-center rounded-2xl border p-3 transition-all"
                          title="Copy Hex Color"
                        >
                          <div
                            className="relative mb-3 aspect-square w-full rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-transform duration-300 group-hover/swatch:scale-95"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-primary block font-mono text-[10px] font-bold tracking-wider uppercase">
                            {color}
                          </span>
                          <span className="text-secondary mt-1 block text-[8px] tracking-widest uppercase">
                            {copiedColor === color ? 'Copied' : 'Click Copy'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 03: Process Roadmap Milestones (Highly styled like methodology list) */}
                <div className="border-border-primary/40 space-y-10 border-b pb-16">
                  <div className="flex items-center gap-3">
                    <span className="text-secondary bg-secondary border-border-primary/60 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold select-none">
                      03
                    </span>
                    <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                      {t('portfolio.workflow_roadmap')}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    {steps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="border-border-primary/40 group grid grid-cols-1 items-start gap-6 border-t py-8 md:grid-cols-12"
                      >
                        <div className="md:col-span-2">
                          <span className="text-secondary/40 font-display group-hover:text-primary block font-serif text-4xl font-light italic transition-colors duration-500 md:text-5xl">
                            {String(sIdx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="md:col-span-4">
                          <span className="text-secondary/40 mb-1 block font-mono text-[9px] tracking-widest uppercase">
                            {step.phase}
                          </span>
                          <h4 className="font-display text-primary text-base leading-tight font-light">{step.title}</h4>
                        </div>
                        <div className="md:col-span-6">
                          <p className="text-secondary max-w-md text-xs leading-relaxed font-light">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 04: Engineering Ingredient Badges */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-secondary bg-secondary border-border-primary/60 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold select-none">
                      04
                    </span>
                    <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                      {t('portfolio.infrastructure_toolkit')}
                    </span>
                  </div>

                  <p className="text-secondary max-w-xl text-xs leading-relaxed font-light">
                    {t('portfolio.infrastructure_desc')}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {stack.map((item, key) => (
                      <span
                        key={key}
                        className="bg-secondary border-border-primary/60 text-secondary flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium tracking-wider uppercase"
                      >
                        <span className="bg-secondary h-1.5 w-1.5 rounded-full" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT CHANNEL: Device Preview Simulator (Stickily docked on desktop) */}
              <div className="space-y-6 lg:sticky lg:top-[180px] lg:col-span-5">
                <div className="text-center">
                  <span className="bg-secondary/80 border-border-primary/60 text-secondary inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[10px] font-bold tracking-widest uppercase shadow-sm">
                    <Sparkles size={11} className="text-secondary animate-spin" style={{ animationDuration: '3s' }} />
                    Interactive Showcase Simulator
                  </span>
                  <p className="text-secondary/60 mt-2 text-[10px] font-medium tracking-wider uppercase">
                    Mouse over viewport to auto-scroll assets
                  </p>
                </div>

                {previewMode === 'desktop' ? (
                  /* Chrome Simulator block */
                  <div className="bg-primary border-border-primary/80 mx-auto flex w-full max-w-[550px] flex-col overflow-hidden rounded-2xl border shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)]">
                    <div className="bg-secondary/70 border-border-primary/60 flex items-center justify-between border-b px-4 py-3 select-none">
                      <div className="flex shrink-0 gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                      </div>
                      <div className="bg-primary border-border-primary/40 text-secondary flex w-full max-w-[280px] items-center justify-center gap-1.5 truncate rounded-md border px-3 py-1 font-mono text-[9px] tracking-wider select-all">
                        <Lock size={9} className="text-secondary/70 shrink-0" />
                        <span>https://{activeProject.id}.nextcreavo.com</span>
                      </div>
                      <span className="text-secondary/30 font-mono text-[8px]">CMD+R</span>
                    </div>

                    <div
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="bg-secondary group/viewport relative h-[400px] w-full cursor-pointer overflow-hidden select-none"
                    >
                      <img
                        src={activeProject.img}
                        alt="Desktop Preview"
                        className="absolute top-0 left-0 h-auto w-full transition-transform ease-in-out"
                        style={{
                          transitionDuration: isHovered ? '8s' : '3s',
                          transform: isHovered ? 'translateY(calc(-100% + 400px))' : 'translateY(0)',
                        }}
                        referrerPolicy="no-referrer"
                      />

                      {!isHovered && (
                        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-6 text-center backdrop-blur-[1px] transition-all duration-300">
                          <div className="mb-2 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-white/40 bg-white/20 text-white">
                            <ArrowUpRight className="rotate-45" size={16} />
                          </div>
                          <span className="rounded-md border border-white/10 bg-black/85 px-3 py-1.5 text-[9px] font-bold tracking-widest text-white uppercase select-none">
                            Hover to Scroll
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="bg-secondary/40 border-border-primary/40 text-secondary/50 flex justify-between border-t px-4 py-2 text-[8px] font-semibold tracking-wider uppercase">
                      <span>SSL Secured Pipeline</span>
                      <span>60FPS Render</span>
                    </div>
                  </div>
                ) : (
                  /* Mobile Simulator block */
                  <div
                    className="bg-primary border-secondary relative mx-auto flex w-[280px] flex-col overflow-hidden rounded-[3rem] border-[10px] shadow-2xl"
                    style={{ height: '520px' }}
                  >
                    <div className="absolute top-2.5 left-1/2 z-30 flex h-6 w-28 -translate-x-1/2 items-center justify-center rounded-full bg-black text-[7px] font-bold text-white select-none">
                      <span className="scale-90 opacity-80">NextCreavo Mobile</span>
                    </div>

                    <div className="bg-primary/95 text-primary border-border-primary/15 relative z-20 flex items-center justify-between border-b pt-3.5 pr-6 pb-2.5 pl-8 font-mono text-[7px] font-bold tracking-wider uppercase select-none">
                      <span>09:41</span>
                      <span>5G</span>
                    </div>

                    <div
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="bg-secondary group/viewport relative w-full flex-1 cursor-pointer overflow-hidden select-none"
                    >
                      <img
                        src={activeProject.img}
                        alt="Mobile Preview"
                        className="absolute top-0 left-0 h-auto w-full transition-transform ease-in-out"
                        style={{
                          transitionDuration: isHovered ? '9s' : '3s',
                          transform: isHovered ? 'translateY(calc(-100% + 450px))' : 'translateY(0)',
                        }}
                        referrerPolicy="no-referrer"
                      />

                      {!isHovered && (
                        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-center backdrop-blur-[1px] transition-all duration-300">
                          <div className="mb-2 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-white/40 bg-white/20 text-white">
                            <ArrowUpRight className="rotate-45" size={14} />
                          </div>
                          <span className="rounded-md border border-white/10 bg-black/85 px-2.5 py-1.5 text-[8px] font-bold tracking-widest text-white uppercase select-none">
                            {t('portfolio.hover_to_scroll')}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="bg-primary border-border-primary/15 flex items-center justify-center border-t py-2.5 select-none">
                      <div className="bg-secondary/85 h-1 w-20 rounded-full" />
                    </div>
                  </div>
                )}

                <div className="mx-auto max-w-sm px-2 text-center select-none">
                  <h4 className="font-display text-primary mb-1.5 text-xs font-medium tracking-tight">
                    {activeProject.title} {t('portfolio.interactive_grid')}
                  </h4>
                  <p className="text-secondary text-[11px] leading-relaxed font-light">
                    {t('portfolio.designed_by_desc')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Majestic Next Case study routing banner (With sleek image scale and serif links) */}
          <section className="border-border-primary/45 bg-primary relative mt-20 overflow-hidden border-t px-6 py-24 md:px-12">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                <div className="space-y-6 lg:col-span-8">
                  <span className="text-secondary/60 block font-mono text-[10px] tracking-[0.25em] uppercase">
                    {t('portfolio.next_chronicle')}
                  </span>
                  <h2 className="font-display text-primary text-3xl leading-[1.1] font-light tracking-tight md:text-5xl lg:text-[3.5rem]">
                    {t('portfolio.ready_inspect_next')} <br />
                    <Link
                      href={`/portfolio/${nextProject.id}`}
                      className="text-secondary hover:text-primary border-secondary/35 border-b font-serif font-light italic transition-colors"
                    >
                      {nextProject.title}
                    </Link>
                  </h2>
                  <p className="text-secondary/70 max-w-lg text-sm leading-relaxed font-light">
                    {t('portfolio.see_how_resolved')} {nextProject.client}.
                  </p>
                </div>

                <div className="lg:col-span-4 lg:text-right">
                  <Link
                    href={`/portfolio/${nextProject.id}`}
                    className="bg-invert text-invert hover:text-primary border-invert hover:border-primary group inline-flex items-center justify-center gap-3 rounded-full border px-8 py-4 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-transparent"
                  >
                    {t('portfolio.launch_next')}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Master Call-To-Action Project Launch Footer */}
          <section className="border-border-primary/40 bg-primary relative overflow-hidden border-t px-6 py-24 md:px-12">
            <div className="bg-secondary/5 pointer-events-none absolute inset-0" />
            <div className="relative z-10 mx-auto max-w-[1400px] space-y-6 text-center">
              <span className="text-secondary block text-[10px] font-bold tracking-[0.25em] uppercase">
                {t('portfolio.conclusion_milestone')}
              </span>
              <h2 className="font-display text-primary text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                {t('portfolio.ready_replicate')}
              </h2>
              <p className="text-secondary mx-auto mb-10 max-w-lg pb-6 text-sm leading-relaxed font-light">
                {t('portfolio.connect_desc')}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-invert text-invert hover:text-primary border-invert hover:border-primary group inline-flex items-center justify-center gap-3 rounded-full border px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all hover:bg-transparent"
                  >
                    {t('portfolio.launch_live')}{' '}
                    <LinkIcon
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
                <button
                  onClick={() => router.push('/portfolio')}
                  className="text-primary hover:bg-secondary/40 border-border-primary rounded-full border bg-transparent px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all"
                >
                  {t('portfolio.return_to_directory')}
                </button>
              </div>
            </div>
          </section>

          {/* Chronicle legal brand info */}
          <div className="border-border-primary text-secondary/60 mx-auto mt-12 flex max-w-[1400px] flex-col items-center justify-between border-t px-6 py-6 font-mono text-[9px] font-bold tracking-widest uppercase md:flex-row md:px-12">
            <span>NextCreavo Enterprise Performance Chronicle</span>
            <span className="mt-2 md:mt-0">Copyright © 2026 NextCreavo Studio. All rights reserved.</span>
          </div>
        </div>
      )
    }
  }

  // -------------------------------------------------------------
  // PRIMARY PORTFOLIO DIRECTORY / GALLERY listing RENDER BRANCH
  // -------------------------------------------------------------
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.categoryId === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const activeCategoryDetail = CATEGORIES.find((c) => c.id === selectedCategory)

  return (
    <div ref={container} className="bg-primary min-h-screen w-full overflow-hidden">
      {/* Editorial Header Section */}
      <section className="bg-primary relative px-6 pt-32 pb-12 sm:pt-40 sm:pb-16 md:px-12 md:pt-52 md:pb-24">
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="flex flex-col items-start justify-between gap-8 sm:gap-10 lg:flex-row lg:items-end">
            <div>
              <span className="hero-text-reveal text-secondary border-border-primary mb-4 block w-max rounded-full border px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase sm:mb-6 md:text-sm">
                {t('portfolio.listing_tag')}
              </span>
              <h1 className="hero-text-reveal font-display text-primary max-w-4xl text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
                {t('portfolio.listing_title_part1')} <br />
                <span className="text-secondary font-serif italic">{t('portfolio.listing_title_part2')}</span>
              </h1>
            </div>
            <p className="hero-text-reveal text-secondary max-w-sm pb-3 text-base leading-relaxed font-light sm:text-lg md:text-xl lg:text-right">
              {t('portfolio.listing_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Filter & Grid Container */}
      <section className="bg-primary portfolio-container px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          {/* Controls Bar: Search & Category Tab Buttons */}
          <div className="border-border-primary mb-12 flex flex-col items-start justify-between gap-6 border-t border-b py-8 sm:mb-16 sm:gap-8 sm:py-10 lg:flex-row lg:items-center">
            {/* Category Navigation System */}
            <div className="scrollbar-hide -mx-6 flex max-w-full flex-nowrap gap-2.5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 lg:max-w-4xl">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`relative flex items-center gap-2 rounded-full border px-4 py-2.5 text-[10px] font-semibold tracking-wider whitespace-nowrap uppercase transition-all duration-500 sm:px-5 sm:text-xs ${
                      isActive
                        ? 'bg-invert text-invert border-transparent'
                        : 'bg-primary text-secondary border-border-primary hover:border-text-secondary'
                    }`}
                  >
                    {category.id !== 'all' && <span className="bg-secondary h-1.5 w-1.5 rounded-full" />}
                    <span>{category.label}</span>
                    <span className={`text-[9px] ${isActive ? 'opacity-85' : 'opacity-45'}`}>({category.count})</span>
                  </button>
                )
              })}
            </div>

            {/* In-page Rich Search Bar */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                placeholder={t('portfolio.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-secondary/50 border-border-primary text-primary placeholder-secondary/50 focus:border-secondary w-full rounded-full border py-3.5 pr-4 pl-11 text-xs font-medium tracking-wider uppercase transition-colors focus:outline-none sm:py-3"
                id="portfolio-search-input"
              />
              <Search className="text-secondary/50 absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-secondary/50 hover:text-primary absolute top-1/2 right-4 -translate-y-1/2"
                >
                  <XIcon className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Active Category Meta Explanation */}
          {activeCategoryDetail && activeCategoryDetail.id !== 'all' && (
            <div className="bg-secondary border-border-primary mb-12 flex flex-col items-start justify-between gap-8 rounded-[2rem] border p-8 md:flex-row md:items-center md:p-12">
              <div className="max-w-2xl">
                <span className="text-secondary mb-2 block text-[10px] font-semibold tracking-[0.2em] uppercase">
                  {t('portfolio.category_overview')}
                </span>
                <h2 className="font-display text-primary mb-3 text-2xl font-light md:text-3xl">
                  {activeCategoryDetail.label}
                </h2>
                <p className="text-secondary text-sm leading-relaxed font-light md:text-base">
                  {activeCategoryDetail.desc}
                </p>
              </div>
              <div className="bg-primary border-border-primary flex shrink-0 items-center justify-center rounded-2xl border p-6">
                {activeCategoryDetail.icon && (
                  <activeCategoryDetail.icon className="text-secondary h-8 w-8" strokeWidth={1.2} />
                )}
              </div>
            </div>
          )}

          {/* Staggered Portfolio Items Grid */}
          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => router.push(`/portfolio/${project.id}`)}
                  className="group portfolio-reveal flex cursor-pointer flex-col"
                  id={`portfolio-item-${project.id}`}
                >
                  {/* Styled Rounded Card Wrap */}
                  <div className="border-border-primary bg-secondary relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-[2rem] border transition-all duration-[0.8s] group-hover:border-transparent group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
                    {/* Grayscale image element shifting to vibrant full-color on hover */}
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full scale-102 object-cover grayscale transition-all duration-[1.2s] ease-out group-hover:scale-100 group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay for Hover Text */}
                    <div className="absolute inset-x-0 top-1/2 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      <span className="text-secondary mb-2 block text-[10px] font-bold tracking-[0.2em] uppercase">
                        {t('portfolio.interactive_case_studio')}
                      </span>
                      <h4 className="font-display mb-4 text-2xl leading-tight font-medium text-white">
                        {t(`project.${project.id}.title`) !== `project.${project.id}.title`
                          ? t(`project.${project.id}.title`)
                          : project.title}
                      </h4>
                      <p className="line-clamp-2 text-xs leading-relaxed font-light text-gray-300">
                        {t(`project.${project.id}.desc`) !== `project.${project.id}.desc`
                          ? t(`project.${project.id}.desc`)
                          : project.desc}
                      </p>
                    </div>

                    {/* Constant Top Category Tag */}
                    <div className="bg-primary/80 text-secondary border-border-primary/40 absolute top-6 left-6 rounded-full border px-4 py-1.5 text-[9px] font-semibold tracking-wider uppercase backdrop-blur-md transition-colors duration-500">
                      {project.category}
                    </div>

                    {/* Hover Arrow indicator */}
                    <div className="bg-invert text-invert border-border-primary absolute top-6 right-6 flex h-10 w-10 scale-75 items-center justify-center rounded-full border opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:scale-100 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Informative Grid Details */}
                  <div className="pl-2">
                    <span className="text-secondary mb-1.5 block text-[9px] font-bold tracking-[0.25em] uppercase">
                      {project.client}
                    </span>
                    <h3 className="font-display text-primary group-hover:text-secondary mb-4 text-2xl font-light tracking-tight transition-all duration-500 group-hover:translate-x-1.5">
                      {t(`project.${project.id}.title`) !== `project.${project.id}.title`
                        ? t(`project.${project.id}.title`)
                        : project.title}
                    </h3>

                    {/* Horizontal Pill Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-secondary/70 bg-secondary rounded-md px-3 py-1 text-[9px] font-semibold tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Zero Search Results Fallback state */}
          {filteredProjects.length === 0 && (
            <div className="border-border-primary bg-secondary/20 rounded-[2.5rem] border border-dashed py-24 text-center">
              <div className="bg-secondary border-border-primary text-secondary mb-6 inline-flex rounded-full border px-4 py-4">
                <Search size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-primary mb-2 text-xl font-light">{t('portfolio.no_projects_found')}</h3>
              <p className="text-secondary mx-auto max-w-md text-sm leading-relaxed font-light">
                {t('portfolio.no_projects_desc_part1')} "
                <span className="text-primary font-semibold">{searchQuery}</span>"{' '}
                {t('portfolio.no_projects_desc_part2')}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="bg-invert text-invert hover:text-primary border-invert hover:border-primary mt-6 rounded-full border px-6 py-2.5 text-xs leading-relaxed font-semibold tracking-wider uppercase transition-all duration-500 hover:bg-transparent"
              >
                {t('portfolio.reset_filters')}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
