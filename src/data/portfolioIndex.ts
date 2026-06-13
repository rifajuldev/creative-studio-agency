export interface PortfolioIndexItem {
  id: string
  title: string
  category: string
  categoryId: string
  desc: string
  longDesc: string
  img: string
  tags: string[]
}

export const PORTFOLIO_INDEX: PortfolioIndexItem[] = [
  {
    id: 'lumina-logo',
    title: 'Lumina Fluid Motion Systems',
    category: '2D Animation',
    categoryId: 'animation',
    desc: 'Liquid-motion brand signature and micro-animated interface assets.',
    longDesc:
      'A complete custom animated identity system developed for Lumina Studios with dynamic vector physics-based logo reveals and lightweight Lottie motion assets.',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Logo Animation', 'Lottie SDK', 'After Effects', 'Micro-interactions'],
  },
  {
    id: 'alchemist-book',
    title: 'The Alchemist interactive Book Animation',
    category: '2D Animation',
    categoryId: 'animation',
    desc: 'Immersive tactile page-flip animation and magical vector overlay effects.',
    longDesc:
      'An interactive promotional page with canvas-based 3D simulation and hand-crafted 2D animations for a modern special edition book launch.',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Book Animation', 'WebGL Canvas', 'Spline 3D', 'Tactile UI'],
  },
  {
    id: 'asset-motion-toolkit',
    title: 'NextGen Fintech UI Assets',
    category: '2D Animation',
    categoryId: 'animation',
    desc: 'Programmatic motion assets for mobile and responsive fintech platforms.',
    longDesc:
      'A scalable suite of animated assets for a fintech platform including biometric login micro-interactions and celebration charts.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tags: ['SVG Animation', 'Anime.js', 'Fintech', 'Asset Creation'],
  },
  {
    id: 'gmb-omnimap',
    title: 'GMB Map Ranking Dominance',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    desc: 'Local visibility optimization driving real store transactions.',
    longDesc:
      'A GMB optimization program for a regional clinic franchise across 14 locations with citation sync and review funnel engineering.',
    img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop',
    tags: ['GMB Optimization', 'Local SEO', 'Citation Sync', 'Conversion Funnels'],
  },
  {
    id: 'scale-ads-funnel',
    title: 'Scale 360 Ads Optimizer',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    desc: 'High-ROI multi-channel paid social campaigns with custom creative.',
    longDesc:
      'Multi-channel paid search and social campaign system with creative testing pipelines and ROAS-focused budget optimization.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    tags: ['Google Ads', 'Facebook Paid Funnel', 'ROAS Optimization', 'Copywriting'],
  },
  {
    id: 'saas-social-hub',
    title: 'Vortex SaaS Brand Social Engine',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    desc: 'Full-funnel social media blueprint and custom digital content curation.',
    longDesc:
      'Digital organic marketing strategy and visual branding with structured publication pipelines for a developer tooling workspace.',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
    tags: ['Social Management', 'Content Architecture', 'Visual Layout', 'B2B SaaS'],
  },
  {
    id: 'nexus-headless-shopify',
    title: 'Nexus Headless Commerce Platform',
    category: 'Web Development',
    categoryId: 'webdev',
    desc: 'Next-generation headless React engine paired with Sanity CMS.',
    longDesc:
      'Headless Shopify e-commerce platform built with Next.js and Sanity CMS for sub-second loads and edge-cached product pages.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Shopify Headless', 'Sanity CMS', 'Vercel Edge'],
  },
  {
    id: 'empower-corporate-digital',
    title: 'Empower Corporate Webflow Portal',
    category: 'Web Development',
    categoryId: 'webdev',
    desc: 'Immersive corporate identity built on custom-integrated Webflow.',
    longDesc:
      'Corporate Webflow portal with custom JavaScript bindings, GSAP motion, and CMS-driven content architecture.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Webflow Developer', 'GSAP Animation', 'Custom JS Integrations', 'SEO Optimization'],
  },
  {
    id: 'vortex-core-portal',
    title: 'Vortex Real-Time Cloud Console',
    category: 'Web Development',
    categoryId: 'webdev',
    desc: 'Enterprise full-stack developer portal and monitoring environment.',
    longDesc:
      'Full-stack developer portal with real-time monitoring, REST APIs, PostgreSQL backends, and responsive admin dashboards.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tags: ['NodeJS', 'Express.js', 'PostgreSQL', 'Socket.io', 'Tailwind'],
  },
  {
    id: 'zenith-fitness-app',
    title: 'Zenith Smart Fitness companion',
    category: 'App Development',
    categoryId: 'appdev',
    desc: 'A gorgeous React Native mobile app with custom health-metric pipelines.',
    longDesc:
      'React Native fitness companion with HealthKit integration, offline SQLite caching, and fluid 60FPS navigation.',
    img: 'https://images.unsplash.com/photo-1576678927483-cc73095717c3?q=80&w=1200&auto=format&fit=crop',
    tags: ['React Native', 'SQLite', 'Bluetooth SDK', 'HealthKit'],
  },
  {
    id: 'velo-express-app',
    title: 'Velo Delivery Native iOS App',
    category: 'App Development',
    categoryId: 'appdev',
    desc: 'Real-time routing logistics and on-demand delivery interface.',
    longDesc: 'Native iOS delivery app with MapKit routing, CoreLocation tracking, and Stripe-native payment flows.',
    img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop',
    tags: ['Swift', 'MapKit Routing', 'CoreLocation API', 'Stripe Native'],
  },
  {
    id: 'pocket-wallet-crypto',
    title: 'Pocket Non-Custodial Mobile Wallet',
    category: 'App Development',
    categoryId: 'appdev',
    desc: 'Bespoke cross-platform mobile crypto experience prioritizing security.',
    longDesc: 'Cross-platform crypto wallet built with Flutter and Rust secure core with biometric authentication.',
    img: 'https://images.unsplash.com/photo-1621761190628-da2039a7fe65?q=80&w=1200&auto=format&fit=crop',
    tags: ['Flutter', 'Rust Secure Core', 'Web3.js SDK', 'Biometric Lock'],
  },
  {
    id: 'cognitive-crm-agents',
    title: 'Cognitive Hub CRM Automator',
    category: 'AI & Integrations',
    categoryId: 'ai',
    desc: 'Advanced autonomous agent pipeline handling complex B2B client communications.',
    longDesc:
      'Gemini-powered CRM automation agents with HubSpot sync, JSON schema constraints, and webhook orchestration.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    tags: ['AI Agentic', 'Gemini API', 'NodeJS Orchestrator', 'CRM Syncs'],
  },
  {
    id: 'gemini-legal-search',
    title: 'Gemini Dense Knowledge Hub',
    category: 'AI & Integrations',
    categoryId: 'ai',
    desc: 'Empowering rapid query pipelines through semantic indices and AI synthesis.',
    longDesc:
      'Legal analytics portal powered by Gemini API with vector search, RAG grounding, and semantic case summaries.',
    img: 'https://images.unsplash.com/photo-1589829545855-d5d5539f8642?q=80&w=1200&auto=format&fit=crop',
    tags: ['Gemini LLM', 'Vector Index', 'RAG Architecture', 'LegalTech'],
  },
  {
    id: 'intelligent-pipeline-flows',
    title: 'Interstellar Pipeline Sync',
    category: 'AI & Integrations',
    categoryId: 'ai',
    desc: 'Unified intelligent pipelines connecting standard communication suites.',
    longDesc: 'Intelligent automation pipelines connecting Zendesk, Slack, and CRM systems via webhook queues.',
    img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop',
    tags: ['Webhooks API', 'Automation', 'Zendesk Custom', 'NodeJS'],
  },
  {
    id: 'helios-smart-house',
    title: 'Helios Smart Home UX System',
    category: 'UI/UX Design',
    categoryId: 'uiux',
    desc: 'Sleek, highly accessible visual interfaces for smart environmental components.',
    longDesc: 'Smart home UX system with Figma design systems, WCAG accessibility audits, and interaction blueprints.',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
    tags: ['Figma Blueprint', 'UX Architecture', 'Smart Home UI', 'Accessibility WCAG'],
  },
  {
    id: 'aero-logistics-dashboard',
    title: 'Aero Flight Logistics Console',
    category: 'UI/UX Design',
    categoryId: 'uiux',
    desc: 'Dense, fast, and high-performance layout interfaces for dispatch metrics.',
    longDesc:
      'High-density logistics dashboard UX with eye-tracking optimizations and enterprise design system components.',
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
    tags: ['High Density Design', 'Dashboard UX', 'Eye-Tracking Audit', 'Design System'],
  },
  {
    id: 'nova-retail-overhaul',
    title: 'Nova Retail Checkout Flows',
    category: 'UI/UX Design',
    categoryId: 'uiux',
    desc: 'High-conversion checkout patterns redesigning traditional e-commerce paradigms.',
    longDesc:
      'E-commerce checkout UX overhaul focused on conversion flow optimization and mobile-first Figma prototypes.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    tags: ['E-Commerce UX', 'Conversion Flow', 'Mobile Testing', 'Figma Assets'],
  },
]

export function getPortfolioById(id: string) {
  return PORTFOLIO_INDEX.find((p) => p.id === id)
}

export function getPortfolioSeo(id: string) {
  const project = getPortfolioById(id)
  if (!project) return null

  return {
    title: `${project.title} — Case Study`,
    description: `${project.desc} Explore our ${project.category} portfolio project by NextCreavo.`.slice(0, 160),
    keywords: [project.title, project.category, ...project.tags, 'case study', 'portfolio', 'NextCreavo'],
    path: `/portfolio/${project.id}`,
    image: project.img,
  }
}
