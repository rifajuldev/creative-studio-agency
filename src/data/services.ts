import type { LucideIcon } from 'lucide-react'
import { Bot, Code, Layout, Megaphone, Smartphone, Video } from 'lucide-react'

export interface ServiceDetail {
  id: string
  title: string
  shortDesc: string
  longDesc: string
  icon: LucideIcon
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

export const SERVICES_DATA: ServiceDetail[] = [
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
    pricing: { growth: 'Starting at $2,500', enterprise: 'Custom Quote / Suite' },
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
    pricing: { growth: '$1,800 / month', enterprise: 'Starting at $4,500 / month' },
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
    pricing: { growth: 'Starting at $5,000', enterprise: 'Starting at $12,000' },
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
    pricing: { growth: 'Starting at $8,000', enterprise: 'Starting at $18,000' },
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
    pricing: { growth: 'Starting at $6,000', enterprise: 'Starting at $15,000' },
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
    pricing: { growth: 'Starting at $3,500', enterprise: 'Starting at $9,000' },
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

export function getServiceById(id: string) {
  return SERVICES_DATA.find((s) => s.id === id)
}

export function getServiceKeywords(service: ServiceDetail): string[] {
  const base = [service.title, service.id.replace('dev', ' development'), 'NextCreavo']
  return [
    ...base,
    ...service.techStack.slice(0, 5),
    ...service.deliverables.slice(0, 3).map((d) => d.split(' ').slice(0, 3).join(' ')),
  ]
}

export function getServiceSeo(id: string) {
  const service = getServiceById(id)
  if (!service) return null

  const marketingExtra =
    id === 'marketing'
      ? ['social media management', 'SEO captions', 'content creation', 'Instagram marketing', 'Facebook ads']
      : []

  return {
    title: `${service.title} Services`,
    description: `${service.shortDesc} ${service.longDesc.slice(0, 120)}…`.slice(0, 160),
    keywords: [...getServiceKeywords(service), ...marketingExtra],
    path: `/services/${service.id}`,
  }
}
