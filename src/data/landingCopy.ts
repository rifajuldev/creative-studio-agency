/**
 * Unique long-form copy for GSC-backed landing pages.
 * Thin template pages (intro + 3 bullets) stall around position 50–90.
 * Each block is written for one URL so pages do not cannibalize each other.
 */

export interface LandingSection {
  heading: string
  body: string
}

export interface LandingProcessStep {
  title: string
  detail: string
}

export interface LandingLongform {
  audience?: string[]
  process?: LandingProcessStep[]
  sections?: LandingSection[]
  extraFaqs?: { question: string; answer: string }[]
  relatedIndustrySlugs?: string[]
}

export const SERVICE_LONGFORM: Record<string, LandingLongform> = {
  'ai-automation': {
    audience: [
      'Operations and RevOps teams drowning in handoffs between CRM, email, sheets, and Slack',
      'Founders who need AI workflow automation services without a 12-month internal platform build',
      'Agencies and consultants who want a production partner, not another Zapier prototype',
    ],
    process: [
      {
        title: 'Map the work',
        detail:
          'We document the live process — triggers, systems, exceptions, and who must approve high-risk steps — before any model is wired in.',
      },
      {
        title: 'Design the workflow',
        detail:
          'Agents, tools, and fallbacks are designed as a state machine: retries, human review, and audit logs are first-class, not afterthoughts.',
      },
      {
        title: 'Ship in production',
        detail:
          'We connect your stack (CRM, helpdesk, ERP, email), add monitoring, and train operators so the automation survives real traffic.',
      },
    ],
    sections: [
      {
        heading: 'What AI workflow automation services actually include',
        body: 'AI workflow automation services are not a chatbot overlay. NextCreavo designs multi-step agents that read from your systems, take bounded actions, and leave a trail. Typical builds: lead qualification into your CRM, support triage with human escalation, invoice and document routing, reporting packs, and internal ops that today live in inboxes. We act as an AI workflow automation agency when you need architecture and delivery, and as an AI workflow automation consultant when you need a scoped diagnostic first.',
      },
      {
        heading: 'AI process automation vs generic iPaaS',
        body: 'Zapier, Make, and n8n are excellent glue. They fail when the step requires judgment, messy documents, or multi-system context. Our AI process automation services sit on top of those tools — or replace brittle chains — with retrieval, tool-calling, and evaluation so the workflow does not silently drift. You keep ownership of prompts, tools, and logs.',
      },
      {
        heading: 'Where this work sits in our AI practice',
        body: 'Workflow automation is the operations layer. Productized AI features, custom models, and assistants live on our AI development pages. If the outcome is a customer-facing bot, start with custom chatbot development. If the outcome is unattended ops, this page is the right brief.',
      },
    ],
    extraFaqs: [
      {
        question: 'Do you offer AI workflow automation professional services as a retainer?',
        answer:
          'Yes. After launch we offer monitoring, eval updates, and new workflow slices on a monthly retainer so automations stay aligned with process changes.',
      },
      {
        question: 'Is this the same as an AI workflow automation company product?',
        answer:
          'No. We do not sell a boxed platform. We are a delivery team that builds the workflow into your stack so you are not locked into our UI.',
      },
    ],
    relatedIndustrySlugs: ['construction-software', 'travel-software', 'restaurant-software'],
  },
  'react-development': {
    audience: [
      'Product teams that need a React development agency to own the frontend while they own the roadmap',
      'Startups replacing a prototype SPA with a maintainable design system',
      'Enterprises hiring a React development team for a dashboard, portal, or design-system rebuild',
    ],
    process: [
      {
        title: 'Architecture',
        detail:
          'We choose SPA vs Next.js, state, routing, and folder conventions against SEO, auth, and team size — not a default stack.',
      },
      {
        title: 'Design system in code',
        detail:
          'Tokens, primitives, and Storybook so new screens do not fork the UI. Accessibility and responsive behavior are in the primitives.',
      },
      {
        title: 'Delivery',
        detail:
          'Feature slices with tests, CI, and a clear handoff. You can keep us as your React development company or absorb the codebase in-house.',
      },
    ],
    sections: [
      {
        heading: 'React development agency, not a staff-aug slideshow',
        body: 'Teams searching for a React development agency usually need product ownership: component architecture, performance, and a UI that matches Figma without a 20% visual tax. NextCreavo builds React web apps, design systems, and authenticated product UIs. If you specifically need a dedicated squad under your PM, see our React outsourcing page for nearshore and offshore engagement models.',
      },
      {
        heading: 'React vs Next.js for your brief',
        body: 'Use React (SPA) for logged-in tools where SEO is secondary. Use Next.js when you need SSR, metadata, and marketing or hybrid surfaces. We are both a React development company and a Next.js development agency, so the recommendation is based on the product, not a preferred repo template.',
      },
      {
        heading: 'What a React software development company should prove',
        body: 'Ask for TypeScript discipline, test strategy, bundle budgets, and how they prevent prop-drilling chaos at month six. We ship with TanStack Query or Redux where it fits, Storybook for the system, and documentation your next hire can actually use.',
      },
    ],
    extraFaqs: [
      {
        question: 'Can you act as our React development team for a fixed roadmap?',
        answer:
          'Yes. We run as an embedded React development team with sprint cadence, or as a fixed-scope React web app development company for a defined product slice.',
      },
      {
        question: 'Do you take over an existing React codebase?',
        answer:
          'Yes. We audit architecture, dead dependencies, and performance, then sequence refactors so feature work does not freeze.',
      },
    ],
    relatedIndustrySlugs: ['ecommerce-solutions', 'fintech-development', 'construction-software'],
  },
  'chatbot-development': {
    audience: [
      'Support leads who need custom chatbot development grounded in real docs, not a generic widget',
      'Sales teams capturing leads with a custom AI chatbot that can book or qualify',
      'Internal ops needing an assistant over policies, SOPs, and product data',
    ],
    process: [
      {
        title: 'Conversation and data',
        detail:
          'We map intents, refusal rules, and the knowledge sources. Hallucination control starts here, not in a prompt tweak after launch.',
      },
      {
        title: 'Retrieval and tools',
        detail:
          'RAG over your corpus, CRM lookups, and ticket creation. The bot only answers what it can cite or escalate.',
      },
      {
        title: 'Embed and measure',
        detail:
          'Website widget, in-app, or Slack. Analytics on deflection, escalation, and unanswered clusters feed the next training pass.',
      },
    ],
    sections: [
      {
        heading: 'Custom chatbot development, not a white-label skin',
        body: 'Custom chatbot development means the model, retrieval, tone, and handoff are yours. NextCreavo builds GPT- and Claude-backed assistants for support, sales, and internal knowledge. A custom chatbot development company should own evaluation, not just the embed snippet. We do.',
      },
      {
        heading: 'Custom AI chatbot development services we ship',
        body: 'Website and product assistants, WhatsApp/email-connected bots, SAP and CRM-aware conversational UIs, and internal copilots. Custom AI chatbot development services include content cleanup, chunking, eval sets, and a human takeover path. If you need unattended back-office flows instead of chat, use AI workflow automation services.',
      },
    ],
    extraFaqs: [
      {
        question: 'How is a custom AI chatbot development company different from ChatGPT on your site?',
        answer:
          'ChatGPT has no contract with your policies, tickets, or CRM. We ground answers in your data, log every turn, and escalate when confidence is low.',
      },
      {
        question: 'Can you build conversational UIs for enterprise systems like SAP SuccessFactors?',
        answer:
          'Yes. We design tool-calling against approved APIs, with role-aware access and an audit trail. The UI is custom; the system of record stays yours.',
      },
    ],
    relatedIndustrySlugs: ['travel-software', 'healthcare-software', 'government-portals'],
  },
  'nextjs-development': {
    audience: [
      'Teams that want a Next.js development agency for App Router, SEO, and Core Web Vitals',
      'Companies replatforming a marketing site or SaaS frontend onto Next.js',
      'Brands that need a Next.js website development agency that also owns backend routes',
    ],
    process: [
      {
        title: 'IA and rendering',
        detail:
          'We decide SSR, SSG, ISR, and which trees are client components. This is the ranking and performance decision, not a later tweak.',
      },
      {
        title: 'Build',
        detail:
          'App Router, typed APIs, CMS (often Sanity), and metadata that matches the URL structure you want to rank.',
      },
      {
        title: 'Launch',
        detail:
          'Redirects, CWV budget, and analytics. We stay for iteration if you want a long-term Next.js agency partner.',
      },
    ],
    sections: [
      {
        heading: 'Next.js development agency for products that must rank',
        body: 'A Next.js development agency should treat metadata, canonicals, and server components as product work. NextCreavo builds SaaS apps, corporate sites, and content platforms on the App Router. Queries like next js development agency and next.js agency should land here — one page, one stack, production delivery.',
      },
      {
        heading: 'Next.js web development vs a generic React SPA',
        body: 'If Google must see the content, Next.js wins. If the product is a fully authenticated console, a React SPA may be simpler. We will tell you which. Headless and replatforming briefs (WordPress, CRA, older Next) include URL mapping so SEO equity is not discarded.',
      },
    ],
    extraFaqs: [
      {
        question: 'Do you work as a Next.js website design agency as well as engineering?',
        answer:
          'Yes. Many briefs are design-to-code. UI/UX can run in parallel so the Next.js web development agency work is not a pixel-reconstruction exercise.',
      },
      {
        question: 'Can you migrate us to a headless architecture on Next.js?',
        answer:
          'Yes. We replatform to a headless architecture with a CMS, preview, and redirects. Content teams keep editing; engineering keeps performance.',
      },
    ],
    relatedIndustrySlugs: ['ecommerce-solutions', 'hotel-booking-software', 'fintech-development'],
  },
  'ai-development': {
    audience: [
      'Startups hiring an AI product development agency to ship a real feature, not a demo',
      'Enterprises that need an AI software development agency with security and evals',
      'Singapore and APAC teams comparing an AI development agency against a local body shop',
    ],
    process: [
      {
        title: 'Use-case scoring',
        detail:
          'We kill ideas that cannot be evaluated or that leak data. What remains gets an architecture and a success metric.',
      },
      {
        title: 'Build the system',
        detail: 'Models, tools, RAG, auth, and product UI. The AI is a component; the software is the product.',
      },
      {
        title: 'Operate',
        detail:
          'Evals, cost controls, and a roadmap for the next capability. We can remain your AI software engineering partner.',
      },
    ],
    sections: [
      {
        heading: 'AI product development agency, end to end',
        body: 'An AI product development agency should ship software: APIs, admin, auth, and a UI people will use. NextCreavo is an AI development agency for LLMs, agents, and AI-native products. Chatbots and workflow automation are specialized siblings of this page — use those URLs when the brief is narrowly chat or ops automation.',
      },
      {
        heading: 'AI software development for teams in Singapore and beyond',
        body: 'We work with Singapore product and enterprise teams who search for an AI software engineering firm or AI application development firm. Delivery is remote-first with overlap. Custom AI software still lives on this page; city-specific commercial copy lives on the Singapore location page so Google has a clear canonical.',
      },
    ],
    extraFaqs: [
      {
        question: 'Are you an AI-powered development agency or do you only wrap APIs?',
        answer:
          'We wrap APIs when that is the right product. We also build retrieval, agents, eval harnesses, and the application around them. The label is less important than production ownership.',
      },
    ],
    relatedIndustrySlugs: ['healthcare-software', 'legal-tech', 'fintech-development'],
  },
  'custom-software-development': {
    audience: [
      'Operators who have outgrown spreadsheets and SaaS sprawl',
      'Startups that need a custom software team without hiring a full org',
      'Singapore and regional buyers searching custom software development company in Singapore',
    ],
    process: [
      {
        title: 'Requirements that survive contact with ops',
        detail:
          'We sit with the people who do the work. The spec is workflows and integrations, not a feature shopping list.',
      },
      {
        title: 'Architecture and build',
        detail:
          'Full-stack delivery with Next.js, Node or Python, and a data model you can still explain in six months.',
      },
      {
        title: 'Handover',
        detail: 'Docs, training, and optional retainer. Custom software is only an asset if your team can run it.',
      },
    ],
    sections: [
      {
        heading: 'Custom software development company for real workflows',
        body: 'Off-the-shelf tools fail when the process is the product. NextCreavo is a custom software development company for portals, internal tools, and industry systems. Construction, travel, restaurants, and government each have dedicated industry pages so those queries are not dumped into this hub.',
      },
      {
        heading: 'Custom software development Singapore and remote delivery',
        body: 'Singapore teams looking for custom software development Singapore, a custom software development company in Singapore, or custom web app development Singapore should start on our Singapore page for local commercial intent. This page is the service: what we build, how we staff, and how we modernize legacy systems.',
      },
    ],
    extraFaqs: [
      {
        question: 'Do you staff a custom software team inside our company?',
        answer:
          'We can embed, or run a dedicated pod. You get engineers and a delivery lead, not a rotating bench with no context.',
      },
    ],
    relatedIndustrySlugs: ['construction-software', 'travel-software', 'government-portals'],
  },
  'ui-ux-design': {
    audience: [
      'SaaS founders who need to hire a UI UX design agency for SaaS products',
      'B2B teams whose UI is blocking sales demos',
      'Product orgs that want design systems that survive engineering',
    ],
    process: [
      {
        title: 'Research',
        detail: 'Jobs-to-be-done, competitor teardown, and the actual user path — not a moodboard first.',
      },
      {
        title: 'UX then UI',
        detail:
          'Flows and information architecture before visual polish. SaaS density is treated as a first-class constraint.',
      },
      {
        title: 'Handoff or build',
        detail:
          'Figma system plus optional React/Next implementation so the UI UX design agency work is not reinterpreted in code.',
      },
    ],
    sections: [
      {
        heading: 'UI UX design agency for SaaS, not brochure sites',
        body: 'Hire a UI UX design agency for SaaS products when the problem is activation, navigation, and empty states — not a marketing restyle. NextCreavo designs B2B SaaS, admin, and customer portals. We are a UI UX design company for B2B SaaS that will also implement in React when you want one owner.',
      },
    ],
    extraFaqs: [
      {
        question: 'Do you only design, or design and develop?',
        answer:
          'Either. Many SaaS clients keep us through build so the design system and the React components stay in lockstep.',
      },
    ],
    relatedIndustrySlugs: ['fintech-development', 'education-software', 'ecommerce-solutions'],
  },
  'react-outsourcing': {
    audience: [
      'CTOs comparing nearshore React development vs a local hire',
      'Companies that want to outsource React application development without losing architecture control',
      'Product orgs that need offshore React development with overlap hours and English-first delivery',
    ],
    process: [
      {
        title: 'Fit and model',
        detail:
          'Dedicated squad, staff augmentation, or fixed-scope. We match seniority mix to the backlog, not a generic “React developers” slide.',
      },
      {
        title: 'Onboarding',
        detail:
          'Access, conventions, and the first two weeks of paired delivery so context is not lost in a ticket queue.',
      },
      {
        title: 'Cadence',
        detail:
          'Standups, demos, and a named lead. Outsourcing fails when the vendor is a black box; we refuse that model.',
      },
    ],
    sections: [
      {
        heading: 'Nearshore React development with production standards',
        body: 'Nearshore React development works when the team writes the same TypeScript, tests, and reviews you would demand onshore. NextCreavo provides React outsourcing as a named squad: React app developers who ship against your repo and CI. We are not a marketplace of anonymous profiles.',
      },
      {
        heading: 'Offshore React development and outsource React application development',
        body: 'Offshore React development is a cost and coverage decision. Outsource React application development when you need a full slice (auth, app shell, design system) delivered. Outsource React app development services when you need capacity on an existing codebase. Both are this page. Product design and Next.js SEO work stay on their own URLs.',
      },
      {
        heading: 'React agency vs React outsourcing',
        body: 'A React development agency typically owns a product outcome. React outsourcing typically extends your team. If you want us to own the product, use the React development agency page. If you want a pod inside your process, you are in the right place.',
      },
    ],
    extraFaqs: [
      {
        question: 'How do you run React development outsourcing without quality drop?',
        answer:
          'Named leads, your Git workflow, PR standards, and overlap hours. We do not swap engineers silently. That is how React app outsourcing companies lose trust.',
      },
    ],
    relatedIndustrySlugs: ['fintech-development', 'ecommerce-solutions'],
  },
  'nodejs-development': {
    audience: [
      'Teams that need a Node.js backend team for APIs and workers',
      'Companies considering Node.js development outsourcing',
    ],
    sections: [
      {
        heading: 'Node.js software development agency for APIs that last',
        body: 'We build Node.js backends for SaaS, mobile, and AI products: REST or GraphQL, queues, and auth. A Node.js software development agency should talk about tenancy, observability, and failure modes — not just Express tutorials. Node.js development outsourcing uses the same engineering bar as our React outsourcing model.',
      },
    ],
    extraFaqs: [
      {
        question: 'Can you provide a Node.js backend team only?',
        answer:
          'Yes. Many clients keep frontend in-house and hire us as the Node.js backend team for APIs, webhooks, and jobs.',
      },
    ],
  },
  'api-development': {
    sections: [
      {
        heading: 'REST and GraphQL APIs built for other teams',
        body: 'API development services here mean versioned contracts, auth, rate limits, and docs. We design custom REST and GraphQL APIs for products, partners, and internal platforms — including briefs that start as “udvikling af custom rest- og graphql api” for European teams.',
      },
    ],
  },
}

export const INDUSTRY_LONGFORM: Record<string, LandingLongform> = {
  'construction-software': {
    audience: [
      'GCs and specialty contractors replacing WhatsApp + Excel project control',
      'Software buyers searching construction software development, not another generic PM SaaS',
    ],
    sections: [
      {
        heading: 'Construction software development that matches the field',
        body: 'Construction software development is a field-plus-office problem: daily logs, RFIs, drawings, change orders, and scheduling that still works offline. NextCreavo builds construction app development (iOS/Android or React Native), project hubs, and document workflows. We are construction software developers for custom systems — not a boxed construction SaaS with your logo.',
      },
      {
        heading: 'Custom software development for construction',
        body: 'Custom software development for construction is justified when your process, cost codes, or integrations will never fit Procore out of the box. Custom construction software development includes ERP/accounting connectors, subcontractor portals, and planning tools. A construction software agency should prototype with superintendents, not only with the office.',
      },
      {
        heading: 'Construction planning software development services',
        body: 'Planning tools fail when the schedule is a PDF. We build construction planning software development services around live tasks, dependencies, and field updates so the plan is the same object the crew sees.',
      },
    ],
    extraFaqs: [
      {
        question: 'Do you only do construction software development services, or also mobile?',
        answer:
          'Both. Construction software development services include web ops platforms and native/cross-platform field apps. Most programs need both.',
      },
      {
        question: 'Are you a construction software development agency or a product company?',
        answer: 'Agency. We build your system. You own the IP. That is the difference from buying a vertical SaaS.',
      },
    ],
  },
  'travel-software': {
    audience: [
      'Tour operators and OTAs that need travel agency software development with real inventory',
      'Teams searching travel booking software development and booking engine partners',
    ],
    sections: [
      {
        heading: 'Travel agency software development and booking engines',
        body: 'Travel software development at NextCreavo covers booking engines, operator dashboards, and traveler apps. Travel agency software development must handle inventory, payments, and peak load — not a brochure site with a form. We build travel booking software development including accommodation booking, packages, and add-ons.',
      },
      {
        heading: 'Travel booking engine developers',
        body: 'Travel booking engine developers should talk about availability, rate plans, and failure modes at payment. We act as a travel booking engine development company for custom engines and as integration partners when you already have a GDS or channel manager. Online travel booking software development includes search, checkout, and post-booking ops.',
      },
      {
        heading: 'Tour operator software development',
        body: 'Tour operator software development is operations-heavy: departures, manifests, guides, and supplier confirmations. Developing travel software for operators is a workflow product, often with an AI support chatbot on the traveler side.',
      },
    ],
    extraFaqs: [
      {
        question: 'Do you build travel planner software or only booking?',
        answer:
          'Both. Travel planner software developers on our team build itinerary UX; booking engine work is the transactional core. Many products need both.',
      },
    ],
  },
  'restaurant-software': {
    sections: [
      {
        heading: 'Restaurant software development company for multi-location ops',
        body: 'Restaurant software development company work here is ordering, reservations, kitchen display, and chain-level ops. Custom software development for restaurants is for brands that have outgrown off-the-shelf POS add-ons. Restaurant chain software development focuses on multi-location control, not a single-site widget.',
      },
    ],
  },
  'government-portals': {
    sections: [
      {
        heading: 'Citizen service portal development',
        body: 'Citizen service portal development and citizen portal software are accessibility, identity, and case-workflow problems. Public portal software we ship includes status tracking, document upload, and APIs onto legacy systems. Government portal development at NextCreavo is built for clarity and auditability, not decoration.',
      },
    ],
  },
}

export const LOCATION_LONGFORM: Record<string, LandingLongform> = {
  singapore: {
    audience: [
      'Startups hiring a software development company in Singapore for MVP through scale',
      'Enterprises comparing a custom software development company in Singapore vs a global vendor',
    ],
    sections: [
      {
        heading: 'Custom software development Singapore',
        body: 'Custom software development Singapore is our highest-intent local query, so this page owns it. NextCreavo delivers custom software, custom web app development Singapore, and custom app development Singapore with overlap for SGT stakeholders. You get a named team, not a reseller of anonymous contractors.',
      },
      {
        heading: 'AI development company Singapore',
        body: 'Teams searching AI development agency Singapore, AI software engineering firm Singapore, AI application development firm Singapore, or AI development company in Singapore should treat this page as the local door and our AI development / automation / chatbot pages as the service depth. We also take contact-stage briefs (contact AI development company Singapore) straight into a scoped discovery.',
      },
      {
        heading: 'Startup and product engineering in Singapore',
        body: 'Startup software development Singapore, software agency Singapore, and app builders Singapore all map to the same delivery: Next.js/React products, APIs, and optional AI. Custom CRM application development company in Singapore work lives on the CRM service page with this location as the commercial wrapper.',
      },
    ],
    extraFaqs: [
      {
        question: 'Are you physically based in Singapore?',
        answer:
          'We are a remote-first studio with overlap for Singapore hours. The commercial pages exist so Singapore buyers can evaluate us as a software development company Singapore partner without a vanity address in schema.',
      },
      {
        question: 'Can you build custom AI software Singapore teams will actually run?',
        answer:
          'Yes. Custom AI software development Singapore and custom AI app development Singapore are delivered as production systems with evals and handover, not slideware.',
      },
    ],
  },
  amsterdam: {
    sections: [
      {
        heading: 'App maker Amsterdam and product engineering',
        body: 'App maker Amsterdam searches usually mean a product partner, not a template shop. NextCreavo builds web and mobile products for Amsterdam teams alongside AI and SaaS work. This page is the city door; React, Next.js, and mobile service pages carry the stack detail.',
      },
    ],
  },
}

export function fallbackServiceLongform(page: {
  primaryKeyword: string
  intro: string
  shortDesc: string
}): LandingLongform {
  return {
    sections: [
      {
        heading: `What ${page.primaryKeyword.toLowerCase()} includes`,
        body: `${page.intro} ${page.shortDesc} NextCreavo scopes against a measurable outcome, then ships in your repository with documentation, monitoring, and a named owner. If a narrower page fits better — chatbot vs workflow automation, React agency vs React outsourcing — we will send stakeholders to that URL so search engines and your team share one canonical brief.`,
      },
      {
        heading: 'Delivery, industries, and next steps',
        body: `Work starts with a written brief and a milestone plan. Launch includes handover, not a zip file. From this page you can reach construction software, travel booking platforms, Singapore delivery, and the rest of the service catalog through on-page links. Contact NextCreavo when you have the outcome, systems, and deadline.`,
      },
    ],
  }
}

export function fallbackIndustryLongform(industry: {
  name: string
  primaryKeyword: string
  intro: string
}): LandingLongform {
  return {
    audience: [
      `${industry.name} operators replacing spreadsheets and generic SaaS that will not match the workflow`,
      `Buyers searching ${industry.primaryKeyword.toLowerCase()} rather than a horizontal project-management tool`,
    ],
    sections: [
      {
        heading: `${industry.primaryKeyword} built around the real workflow`,
        body: `${industry.intro} NextCreavo designs ${industry.name.toLowerCase()} systems as software — data model, roles, mobile or web clients, and integrations — not a themed template. Off-the-shelf products are the right call until the process is the product. When that happens, custom software, APIs, and optional AI assistants sit on the related service pages linked below.`,
      },
      {
        heading: `How ${industry.name.toLowerCase()} programs usually run`,
        body: `We map the field or office process with the people who do the work, then ship a first slice that replaces one painful loop. Later slices add reporting, mobile, or automation. Industry pages exist so ${industry.primaryKeyword.toLowerCase()} queries do not all collapse into a generic custom-software hub. Explore other verticals from the industries index and city pages if you also need a location wrapper.`,
      },
    ],
    extraFaqs: [
      {
        question: `Do you sell packaged ${industry.name.toLowerCase()} software?`,
        answer: `No. We are an agency. You own the IP. Packaged vertical SaaS is a different buying motion; we build when those tools cannot fit.`,
      },
    ],
  }
}

export function mergeLandingLongform(extra: LandingLongform | undefined, fallback: LandingLongform): LandingLongform {
  const extraSections = extra?.sections ?? []
  const extraText = extraSections.map((s) => s.body).join(' ')
  const sections = extraText.length > 500 ? extraSections : [...extraSections, ...(fallback.sections ?? [])].slice(0, 4)

  return {
    audience: extra?.audience?.length ? extra.audience : fallback.audience,
    process: extra?.process ?? fallback.process,
    sections,
    extraFaqs: extra?.extraFaqs?.length ? extra.extraFaqs : fallback.extraFaqs,
    relatedIndustrySlugs: extra?.relatedIndustrySlugs,
  }
}

export function fallbackLocationLongform(location: {
  city: string
  country: string
  primaryKeyword: string
}): LandingLongform {
  return {
    audience: [
      `Product and operations teams in ${location.city} who need engineers without a six-month hiring freeze`,
      `Companies in ${location.country} briefing AI, Next.js, SaaS, or custom software with overlap hours`,
    ],
    sections: [
      {
        heading: `${location.primaryKeyword} — how NextCreavo works`,
        body: `NextCreavo serves ${location.city} as a remote-first ${location.primaryKeyword.toLowerCase()} with overlap for local hours. Typical briefs are AI workflow automation, custom chatbots, React or Next.js products, and internal platforms that replaced spreadsheets. Discovery is a scoped brief; delivery is production software with documentation — not a capability slide.`,
      },
      {
        heading: `AI, React, and custom software for ${location.city}`,
        body: `Buyers in ${location.city} usually arrive through one of three doors: AI product work, a React/Next.js build, or custom software. Singapore, New York, London, and the other city pages exist so each market has a clear URL. This page is the ${location.city} door. Open the service pages for stack depth, or the industries index for construction, travel, restaurants, and government.`,
      },
      {
        heading: `Engagement model in ${location.country}`,
        body: `Fixed-scope builds or an embedded squad, always with a named lead and your Git workflow. We do not put a vanity address in schema. Contact NextCreavo with the outcome, systems, and deadline and we will tell you whether this city page, a service page, or an industry page is the right URL to share internally.`,
      },
    ],
    extraFaqs: [
      {
        question: `Do you have an office in ${location.city}?`,
        answer: `We are remote-first with overlap for ${location.city}. This page targets commercial intent in ${location.country}, not a storefront listing.`,
      },
      {
        question: `What stack do ${location.city} projects use?`,
        answer: `Next.js, React, Node.js or Python, and AI APIs when the product needs them. Mobile work uses React Native or Flutter when the brief is an app.`,
      },
    ],
  }
}
