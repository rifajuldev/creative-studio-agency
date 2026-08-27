/**
 * Keyword-targeted service landing pages.
 * Each page owns ONE primary commercial keyword + supporting secondaries.
 * Long-form copy lives in landingCopy.ts so GSC clusters can deepen without duplicating meta.
 */

import { SERVICE_LONGFORM, fallbackServiceLongform, mergeLandingLongform } from './landingCopy'

export type ServicePillar = 'ai' | 'web' | 'mobile' | 'saas' | 'seo' | 'design' | 'product'

export interface ServiceLandingPage {
  slug: string
  /** Visible H1 / primary commercial keyword */
  primaryKeyword: string
  secondaryKeywords: string[]
  /** Meta title (include brand once) */
  metaTitle: string
  metaDescription: string
  pillar: ServicePillar
  shortDesc: string
  intro: string
  outcomes: string[]
  deliverables: string[]
  techStack: string[]
  faqs: { question: string; answer: string }[]
  relatedSlugs: string[]
  /** Soft redirect alias from legacy hub IDs when useful */
  legacyHubId?: string
  audience?: string[]
  process?: { title: string; detail: string }[]
  sections?: { heading: string; body: string }[]
  relatedIndustrySlugs?: string[]
}

export const SERVICE_LANDING_PAGES: ServiceLandingPage[] = [
  {
    slug: 'ai-development',
    primaryKeyword: 'AI Development Agency',
    secondaryKeywords: [
      'AI software development company',
      'AI product development agency',
      'AI software development agency',
      'AI software engineering firm Singapore',
      'hire AI developers',
      'custom AI development',
    ],
    metaTitle: 'AI Development Agency | NextCreavo',
    metaDescription:
      'NextCreavo is an AI product development agency building custom LLMs, agents and AI software. An AI development agency for startups and enterprises — production systems, not demos.',
    pillar: 'ai',
    shortDesc: 'Custom AI products, LLM features, and production-grade AI software.',
    intro:
      'NextCreavo is an AI software development company that designs, builds, and ships AI systems that work in production — not demos. From GPT, Claude, and Gemini integrations to custom agents and model workflows, we help teams automate operations and launch AI-native products.',
    outcomes: [
      'Production AI features with secure API architecture',
      'Measurable automation across support, sales, and ops',
      'Clear ownership of prompts, tools, evals, and monitoring',
    ],
    deliverables: [
      'AI product discovery & use-case scoring',
      'LLM / agent architecture and tool calling',
      'Prompt engineering + evaluation harness',
      'Secure API and data pipelines',
      'Admin dashboards and human-in-the-loop flows',
    ],
    techStack: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'LangChain', 'Python', 'Node.js', 'Next.js'],
    faqs: [
      {
        question: 'What does an AI development agency actually deliver?',
        answer:
          'We ship working software: chatbots, agents, RAG systems, AI CRM features, automation workflows, and admin tools — with auth, logging, evals, and deployment.',
      },
      {
        question: 'Can you integrate OpenAI, Claude, or Gemini?',
        answer:
          'Yes. We integrate leading LLM providers, route traffic for cost/latency, and keep API keys server-side for security.',
      },
    ],
    relatedSlugs: ['ai-automation', 'chatbot-development', 'api-development', 'custom-software-development'],
    legacyHubId: 'ai',
  },
  {
    slug: 'ai-automation',
    primaryKeyword: 'AI Workflow Automation Services',
    secondaryKeywords: [
      'AI automation services',
      'AI workflow automation agency',
      'AI process automation services',
      'AI workflow automation company',
      'AI workflow automation consultant',
      'business process automation',
    ],
    metaTitle: 'AI Workflow Automation | NextCreavo',
    metaDescription:
      'AI workflow automation services from NextCreavo — agents, AI process automation, and production workflows for CRM, support, and ops. An AI workflow automation agency, not a Zapier demo.',
    pillar: 'ai',
    shortDesc: 'AI agents and workflows that remove repetitive business work.',
    intro:
      'NextCreavo delivers AI workflow automation services that connect your tools, data, and teams so repetitive work runs itself. We design reliable agent workflows for support, CRM updates, lead qualification, reporting, and internal ops — with monitoring and human review.',
    outcomes: ['Fewer manual handoffs', 'Faster response times', 'Auditable automation with human review'],
    deliverables: [
      'Process mapping & automation roadmap',
      'Multi-step AI agent workflows',
      'CRM / Slack / email / sheet integrations',
      'Monitoring, retries, and fallback rules',
    ],
    techStack: ['n8n', 'Zapier', 'Make', 'OpenAI', 'Node.js', 'Python', 'Webhooks'],
    faqs: [
      {
        question: 'Is AI automation safe for customer data?',
        answer:
          'We design with least-privilege access, server-side secrets, logging, and optional human approval steps before high-risk actions.',
      },
    ],
    relatedSlugs: ['ai-development', 'chatbot-development', 'crm-development'],
  },
  {
    slug: 'chatbot-development',
    primaryKeyword: 'Custom Chatbot Development',
    secondaryKeywords: [
      'custom chatbot development company',
      'custom AI chatbot development services',
      'custom AI chatbot development company',
      'custom chatbot app development company',
      'bespoke conversational AI development',
    ],
    metaTitle: 'Custom Chatbots | GPT Assistants | NextCreavo',
    metaDescription:
      'Custom chatbot development from NextCreavo — GPT-powered support, sales, and internal assistants grounded in your knowledge base. A custom chatbot development company that ships evals and handoff.',
    pillar: 'ai',
    shortDesc: 'Custom AI chatbots for support, sales, and internal knowledge.',
    intro:
      'Custom chatbot development at NextCreavo means assistants that answer accurately, escalate cleanly, and connect to your CRM, docs, and product data — for websites, apps, and internal teams. We are a custom AI chatbot development company, not a widget reseller.',
    outcomes: ['24/7 support deflection', 'Higher lead capture', 'Consistent brand answers'],
    deliverables: [
      'Conversation design',
      'RAG over your knowledge base',
      'Widget / in-app embed',
      'Analytics & handoff',
    ],
    techStack: ['OpenAI', 'Claude', 'Pinecone', 'Next.js', 'WebSockets'],
    faqs: [
      {
        question: 'Will the chatbot invent answers?',
        answer:
          'We reduce hallucinations with retrieval-grounded responses, refusal rules, and escalation to humans when confidence is low.',
      },
    ],
    relatedSlugs: ['ai-development', 'ai-automation', 'crm-development'],
  },
  {
    slug: 'nextjs-development',
    primaryKeyword: 'Next.js Development Agency',
    secondaryKeywords: [
      'next js development agency',
      'next.js agency',
      'nextjs development agency',
      'next.js website development agency',
      'nextjs web development agency',
      'hire nextjs developers',
    ],
    metaTitle: 'Next.js Development Agency | NextCreavo',
    metaDescription:
      'NextCreavo is a Next.js development agency for high-performance apps, SaaS, and SEO-ready websites. Next js development agency and Next.js agency work with App Router, CWV, and clean handoff.',
    pillar: 'web',
    shortDesc: 'High-performance Next.js apps, SaaS frontends, and SEO sites.',
    intro:
      'As a Next.js development agency, we build App Router products with strong Core Web Vitals, server components, and conversion-focused UX. Ideal for SaaS, marketing sites, and complex web apps that need speed and SEO.',
    outcomes: ['Faster LCP and better rankings', 'Scalable App Router architecture', 'Clean handoff and documentation'],
    deliverables: [
      'Next.js App Router architecture',
      'SSR/SSG/ISR strategy',
      'Design system implementation',
      'SEO metadata + structured data',
      'CI/CD and performance budgets',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Sanity'],
    faqs: [
      {
        question: 'Do you migrate from WordPress or CRA to Next.js?',
        answer:
          'Yes. We plan URL mapping, content migration, redirects, and performance targets so SEO equity is preserved.',
      },
    ],
    relatedSlugs: ['react-development', 'web-development', 'saas-development', 'seo'],
    legacyHubId: 'webdev',
  },
  {
    slug: 'react-development',
    primaryKeyword: 'React Development Agency',
    secondaryKeywords: [
      'react development company',
      'react development team',
      'react software development company',
      'react web app development company',
      'react app development company',
      'react agency',
    ],
    metaTitle: 'React Development Agency | NextCreavo',
    metaDescription:
      'NextCreavo is a React development agency building SPAs, dashboards, and design systems. Hire a React development company or embedded React development team for product UIs that scale.',
    pillar: 'web',
    shortDesc: 'Scalable React apps, dashboards, and component systems.',
    intro:
      'NextCreavo is a React development agency that builds maintainable frontends — design systems, dashboards, and product UIs that scale with your team and traffic. Partner with us as your React development company when you need ownership, not a slide deck of CVs.',
    outcomes: ['Reusable component libraries', 'Faster feature velocity', 'Accessible, tested UI'],
    deliverables: ['React architecture', 'Design system in code', 'State/data layer', 'Testing strategy'],
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Storybook'],
    faqs: [
      {
        question: 'React or Next.js — which should we choose?',
        answer:
          'Use Next.js when you need SEO, SSR, or full-stack routes. Use React (SPA) for authenticated apps where SEO is less critical. We help you choose.',
      },
    ],
    relatedSlugs: ['nextjs-development', 'react-outsourcing', 'web-development', 'ui-ux-design'],
  },
  {
    slug: 'react-outsourcing',
    primaryKeyword: 'Nearshore React Development',
    secondaryKeywords: [
      'react outsourcing',
      'offshore react development',
      'outsource react application development',
      'react app outsourcing company',
      'react development outsourcing',
      'outsource react app development services',
    ],
    metaTitle: 'Nearshore React Teams | Outsourcing | NextCreavo',
    metaDescription:
      'Nearshore React development and React outsourcing from NextCreavo — dedicated React app developers for offshore and outsource React application development with named leads and your Git workflow.',
    pillar: 'web',
    shortDesc: 'Dedicated nearshore and offshore React squads inside your process.',
    intro:
      'Nearshore React development at NextCreavo means a named React squad in your repo: TypeScript, reviews, and overlap hours. Use this page to outsource React application development or extend capacity. If you want us to own the product outcome instead, see our React development agency page.',
    outcomes: [
      'Dedicated React app developers, not anonymous marketplace profiles',
      'Overlap hours and a named delivery lead',
      'Same PR and test bar as an onshore hire',
    ],
    deliverables: [
      'Squad mix (lead + engineers) matched to the backlog',
      'Onboarding into your Git, CI, and design system',
      'Sprint cadence, demos, and written status',
      'Optional fixed-scope slices when you are not ready to staff a pod',
    ],
    techStack: ['React', 'TypeScript', 'Next.js', 'Redux Toolkit', 'TanStack Query', 'Storybook', 'Playwright'],
    faqs: [
      {
        question: 'Nearshore vs offshore React development — which do you offer?',
        answer:
          'Both. Nearshore React development emphasizes overlap with US/EU hours. Offshore React development is available when coverage and cost matter more. The engineering bar does not change.',
      },
    ],
    relatedSlugs: ['react-development', 'nextjs-development', 'nodejs-development'],
  },
  {
    slug: 'nodejs-development',
    primaryKeyword: 'Node.js Development Company',
    secondaryKeywords: [
      'hire nodejs developers',
      'nodejs backend development',
      'node.js backend team',
      'nodejs development outsourcing',
      'node js software development agency',
    ],
    metaTitle: 'Node.js Development Company | Backend & API Engineering',
    metaDescription:
      'NextCreavo Node.js development for APIs, microservices, and real-time backends. Hire Node.js developers for secure, scalable services.',
    pillar: 'web',
    shortDesc: 'APIs, microservices, and real-time backends in Node.js.',
    intro:
      'We build Node.js backends that power SaaS, mobile apps, and AI products — with clean APIs, auth, queues, and observability.',
    outcomes: ['Reliable APIs', 'Secure auth and tenancy', 'Observable services'],
    deliverables: ['REST/GraphQL APIs', 'Auth & permissions', 'Queues/workers', 'Cloud deploy'],
    techStack: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    faqs: [
      {
        question: 'Can Node.js handle enterprise workloads?',
        answer:
          'Yes, with the right architecture: queues, horizontal scaling, caching, and clear service boundaries. We design for that from day one.',
      },
    ],
    relatedSlugs: ['api-development', 'python-development', 'saas-development'],
  },
  {
    slug: 'python-development',
    primaryKeyword: 'Python Development Company',
    secondaryKeywords: [
      'hire python developers',
      'python API development',
      'FastAPI development',
      'AI python development',
    ],
    metaTitle: 'Python Development Company | FastAPI, AI & Backend',
    metaDescription:
      'NextCreavo Python development for FastAPI backends, AI pipelines, and data services. Hire Python developers for scalable products.',
    pillar: 'web',
    shortDesc: 'FastAPI backends, AI pipelines, and data services in Python.',
    intro:
      'Our Python team builds FastAPI services, AI/ML pipelines, and data-heavy backends that pair cleanly with Next.js and mobile clients.',
    outcomes: ['Fast API delivery', 'AI-ready backends', 'Clean data contracts'],
    deliverables: ['FastAPI / Django APIs', 'AI model serving', 'ETL / jobs', 'Testing & docs'],
    techStack: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Celery', 'PyTorch'],
    faqs: [
      {
        question: 'Do you use Python for AI features?',
        answer:
          'Often yes — Python is ideal for model serving, embeddings, and orchestration, while Next.js handles the product UI.',
      },
    ],
    relatedSlugs: ['ai-development', 'api-development', 'nodejs-development'],
  },
  {
    slug: 'web-development',
    primaryKeyword: 'Web Application Development Company',
    secondaryKeywords: [
      'custom web development',
      'web development agency',
      'enterprise web applications',
      'full stack web development',
    ],
    metaTitle: 'Web App Development Company | NextCreavo',
    metaDescription:
      'NextCreavo is a web application development company for custom web apps, portals, and high-converting websites built for performance and SEO.',
    pillar: 'web',
    shortDesc: 'Custom web apps, portals, and conversion-focused websites.',
    intro:
      'As a web application development company, we engineer full-stack products — from marketing sites to complex portals — with modern stacks and measurable outcomes.',
    outcomes: ['Strong Core Web Vitals', 'SEO-ready architecture', 'Maintainable codebase'],
    deliverables: ['Discovery & IA', 'UI implementation', 'Backend/API', 'Launch & monitoring'],
    techStack: ['Next.js', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Cloudflare'],
    faqs: [
      {
        question: 'Do you rebuild legacy websites?',
        answer:
          'Yes. We modernize stacks, improve performance, and migrate content with redirects so rankings are protected.',
      },
    ],
    relatedSlugs: ['nextjs-development', 'ui-ux-design', 'seo', 'custom-software-development'],
  },
  {
    slug: 'mobile-app-development',
    primaryKeyword: 'Mobile App Development Company',
    secondaryKeywords: [
      'Flutter development',
      'React Native development',
      'iOS development',
      'Android development',
      'cross platform apps',
    ],
    metaTitle: 'Mobile App Development | iOS & Android | NextCreavo',
    metaDescription:
      'Launch with NextCreavo — a mobile app development company for iOS, Android, Flutter and React Native products with growth-ready UX.',
    pillar: 'mobile',
    shortDesc: 'iOS, Android, Flutter, and React Native product development.',
    intro:
      'We are a mobile app development company building consumer and B2B apps with clean UX, reliable backends, and analytics for growth.',
    outcomes: ['Faster time-to-store', 'Stable releases', 'Retention-focused UX'],
    deliverables: ['Product UX', 'Native / cross-platform build', 'API integration', 'Store submission'],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js'],
    faqs: [
      {
        question: 'Flutter or React Native?',
        answer:
          'Both work. We recommend based on team skills, UI needs, and long-term hiring plans — then stick to one stack well.',
      },
    ],
    relatedSlugs: ['ui-ux-design', 'api-development', 'saas-development'],
    legacyHubId: 'appdev',
  },
  {
    slug: 'saas-development',
    primaryKeyword: 'SaaS Development Company',
    secondaryKeywords: ['custom SaaS development', 'SaaS architecture', 'SaaS UI', 'multi-tenant SaaS'],
    metaTitle: 'SaaS Development Company | Custom Multi-Tenant SaaS',
    metaDescription:
      'NextCreavo is a SaaS development company building multi-tenant products, billing, admin, and scalable architecture for startups and enterprises.',
    pillar: 'saas',
    shortDesc: 'Multi-tenant SaaS products from MVP to scale.',
    intro:
      'Our SaaS development company builds subscription products with auth, billing, roles, analytics, and infrastructure that can grow with your customers.',
    outcomes: ['Clear SaaS architecture', 'Billing and entitlements', 'Room to scale'],
    deliverables: ['Multi-tenant design', 'Billing (Stripe)', 'Admin & roles', 'Observability'],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
    faqs: [
      {
        question: 'Can you take over an existing SaaS codebase?',
        answer: 'Yes. We audit architecture, debt, and security, then ship a prioritized roadmap.',
      },
    ],
    relatedSlugs: ['mvp-development', 'nextjs-development', 'crm-development'],
  },
  {
    slug: 'mvp-development',
    primaryKeyword: 'MVP Development Company',
    secondaryKeywords: ['startup MVP development', 'MVP cost', 'build an MVP', 'lean product development'],
    metaTitle: 'MVP Development Company | Build & Launch Faster',
    metaDescription:
      'Ship a market-ready MVP with NextCreavo — an MVP development company for startups that need speed, clarity, and a path to scale.',
    pillar: 'product',
    shortDesc: 'Lean MVPs that validate demand and attract users or funding.',
    intro:
      'As an MVP development company, we help founders cut scope ruthlessly, ship a usable product, and measure what matters — without painting yourselves into a corner.',
    outcomes: ['Faster validation', 'Investor-ready demos', 'Clean base for v2'],
    deliverables: ['Scope workshop', 'Clickable prototype', 'MVP build', 'Analytics setup'],
    techStack: ['Next.js', 'React Native', 'Supabase', 'Stripe', 'Vercel'],
    faqs: [
      {
        question: 'How long does an MVP take?',
        answer:
          'Many MVPs ship in 4–10 weeks depending on complexity. We define a fixed scope and milestone plan upfront.',
      },
    ],
    relatedSlugs: ['saas-development', 'ui-ux-design', 'mobile-app-development'],
  },
  {
    slug: 'custom-software-development',
    primaryKeyword: 'Custom Software Development Company',
    secondaryKeywords: [
      'custom software development',
      'custom software team',
      'custom software development company for digital product startups',
      'enterprise software development',
      'software development agency',
    ],
    metaTitle: 'Custom Software Company | NextCreavo',
    metaDescription:
      'NextCreavo is a custom software development company for portals, internal tools, and enterprise systems. A custom software team for startups and operators who have outgrown SaaS sprawl.',
    pillar: 'product',
    shortDesc: 'Bespoke software for operations, portals, and enterprise needs.',
    intro:
      'We build custom software when off-the-shelf tools fall short — internal platforms, client portals, and workflow systems designed around how your business actually runs.',
    outcomes: ['Fit-for-purpose workflows', 'Integration with existing systems', 'Long-term maintainability'],
    deliverables: ['Requirements & architecture', 'Full-stack build', 'Integrations', 'Training & handover'],
    techStack: ['Next.js', 'Node.js', 'Python', 'PostgreSQL', '.NET optional', 'AWS/GCP'],
    faqs: [
      {
        question: 'Do you modernize legacy systems?',
        answer: 'Yes — strangler-fig migrations, API layers, and phased rewrites that reduce risk.',
      },
    ],
    relatedSlugs: ['api-development', 'crm-development', 'web-development'],
  },
  {
    slug: 'ui-ux-design',
    primaryKeyword: 'UI UX Design Agency',
    secondaryKeywords: [
      'hire a UI UX design agency for SaaS products',
      'UI UX design agency for SaaS',
      'UI UX design company B2B SaaS',
      'product design agency',
      'SaaS UI design',
    ],
    metaTitle: 'UI UX Design Agency for SaaS | NextCreavo',
    metaDescription:
      'Hire a UI UX design agency for SaaS products. NextCreavo designs B2B SaaS, admin, and conversion UX — a UI UX design agency that can also implement in React.',
    pillar: 'design',
    shortDesc: 'Research-led UI/UX for SaaS, apps, and marketing sites.',
    intro:
      'Our UI UX design agency turns complex products into clear experiences — flows, wireframes, visual systems, and Figma kits ready for engineering.',
    outcomes: ['Higher conversion', 'Faster design-to-dev', 'Consistent brand system'],
    deliverables: ['UX research', 'Wireframes', 'UI kits', 'Prototype + handoff'],
    techStack: ['Figma', 'FigJam', 'Storybook', 'WCAG audits'],
    faqs: [
      {
        question: 'Do you design and develop?',
        answer: 'Yes. Many clients hire us for design-to-code so the final UI matches the Figma system.',
      },
    ],
    relatedSlugs: ['web-development', 'saas-development', 'mobile-app-development'],
    legacyHubId: 'uiux',
  },
  {
    slug: 'seo',
    primaryKeyword: 'SEO Services',
    secondaryKeywords: ['SEO company', 'technical SEO', 'enterprise SEO', 'Core Web Vitals', 'local SEO', 'SEO audit'],
    metaTitle: 'SEO Services | Technical SEO & Core Web Vitals Agency',
    metaDescription:
      'NextCreavo SEO services: technical SEO, Core Web Vitals, content clusters, and local SEO that improve rankings and qualified traffic.',
    pillar: 'seo',
    shortDesc: 'Technical SEO, content clusters, and Core Web Vitals.',
    intro:
      'Our SEO services combine technical fixes, content strategy, and conversion UX so rankings turn into pipeline — not vanity traffic.',
    outcomes: ['Healthier indexation', 'Stronger topical authority', 'Better CWV scores'],
    deliverables: ['Technical SEO audit', 'CWV fixes', 'Keyword/cluster plan', 'On-page + schema'],
    techStack: ['Search Console', 'GA4', 'Screaming Frog', 'Next.js SEO', 'Schema.org'],
    faqs: [
      {
        question: 'Do you offer SEO with development?',
        answer:
          'Yes — that is our edge. We implement technical SEO in the codebase, not just recommendations in a PDF.',
      },
    ],
    relatedSlugs: ['nextjs-development', 'web-development', 'ai-development'],
  },
  {
    slug: 'crm-development',
    primaryKeyword: 'CRM Development Company',
    secondaryKeywords: ['custom CRM development', 'AI CRM', 'CRM automation', 'sales CRM software'],
    metaTitle: 'CRM Development Company | Custom & AI CRM Systems',
    metaDescription:
      'NextCreavo is a CRM development company building custom CRMs, pipelines, and AI-assisted sales tools tailored to your process.',
    pillar: 'product',
    shortDesc: 'Custom CRMs and AI-assisted sales/ops platforms.',
    intro:
      'When Salesforce or HubSpot do not fit, we build CRM software around your pipeline — with automations, roles, and optional AI assist.',
    outcomes: ['Pipeline clarity', 'Less spreadsheet chaos', 'Automation where it helps'],
    deliverables: ['CRM data model', 'Pipeline UI', 'Integrations', 'Reporting'],
    techStack: ['Next.js', 'PostgreSQL', 'Node.js', 'OpenAI', 'Twilio'],
    faqs: [
      {
        question: 'Can you integrate with existing CRMs?',
        answer: 'Yes — HubSpot, Salesforce, Pipedrive, and custom systems via API.',
      },
    ],
    relatedSlugs: ['ai-automation', 'custom-software-development', 'api-development'],
  },
  {
    slug: 'api-development',
    primaryKeyword: 'API Development Services',
    secondaryKeywords: [
      'custom REST and GraphQL API development',
      'REST API development',
      'GraphQL API',
      'API security',
      'integration development',
    ],
    metaTitle: 'API Development Services | REST, GraphQL & Integrations',
    metaDescription:
      'NextCreavo API development services for secure REST/GraphQL APIs, integrations, and partner platforms.',
    pillar: 'web',
    shortDesc: 'Secure APIs and system integrations for products and partners.',
    intro:
      'We design and build APIs that other teams and products can trust — versioned, documented, authenticated, and observable.',
    outcomes: ['Clean contracts', 'Secure access', 'Partner-ready docs'],
    deliverables: ['API design', 'Auth & rate limits', 'OpenAPI docs', 'SDKs as needed'],
    techStack: ['Node.js', 'Python', 'GraphQL', 'OpenAPI', 'OAuth2', 'Redis'],
    faqs: [
      {
        question: 'REST or GraphQL?',
        answer:
          'We choose based on client needs. Many products start with REST; GraphQL helps complex UIs with nested data.',
      },
    ],
    relatedSlugs: ['nodejs-development', 'python-development', 'custom-software-development'],
  },
]

function mergeServiceLongform(page: ServiceLandingPage): ServiceLandingPage {
  const extra = mergeLandingLongform(SERVICE_LONGFORM[page.slug], fallbackServiceLongform(page))
  return {
    ...page,
    audience: extra.audience,
    process: extra.process,
    sections: extra.sections,
    relatedIndustrySlugs: extra.relatedIndustrySlugs,
    faqs: extra.extraFaqs ? [...page.faqs, ...extra.extraFaqs] : page.faqs,
  }
}

export function getServiceLandingBySlug(slug: string) {
  const page = SERVICE_LANDING_PAGES.find((s) => s.slug === slug)
  return page ? mergeServiceLongform(page) : undefined
}

export function getAllServiceLandingSlugs() {
  return SERVICE_LANDING_PAGES.map((s) => s.slug)
}

export function getRelatedServiceLandings(slug: string) {
  const page = getServiceLandingBySlug(slug)
  if (!page) return []
  return page.relatedSlugs
    .map((related) => getServiceLandingBySlug(related))
    .filter((s): s is ServiceLandingPage => Boolean(s))
}

export const SERVICE_PILLAR_LABELS: Record<ServicePillar, string> = {
  ai: 'AI & Automation',
  web: 'Web Engineering',
  mobile: 'Mobile',
  saas: 'SaaS',
  seo: 'SEO & Growth',
  design: 'Product Design',
  product: 'Product & Platforms',
}
