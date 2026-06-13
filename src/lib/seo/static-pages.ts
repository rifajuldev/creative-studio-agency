import { buildPageMetadata } from './metadata'

export const staticPagesSeo = {
  home: buildPageMetadata({
    title: 'Creative Studio Agency — Web, Marketing, Animation & AI',
    description:
      'NextCreavo crafts digital ecosystems for modern brands — web development, digital marketing, 2D animation, mobile apps, AI integrations, and UI/UX design with measurable results.',
    keywords: [
      'creative agency',
      'digital ecosystem',
      'brand experience',
      'hire creative studio',
      'full service agency',
    ],
    path: '/',
  }),
  about: buildPageMetadata({
    title: 'About Us — Our Story, Values & Team',
    description:
      'Meet NextCreavo — a creative studio agency built on structural integrity, human-centric design, bold aesthetics, and agentic intelligence for modern digital products.',
    keywords: ['about NextCreavo', 'creative team', 'agency values', 'digital studio'],
    path: '/about',
  }),
  services: buildPageMetadata({
    title: 'Services — Web, Marketing, Apps, AI & Design',
    description:
      'Explore NextCreavo services: 2D animation, digital marketing, web development, app development, AI integrations, and UI/UX design with transparent deliverables and pricing.',
    keywords: ['agency services', 'web development services', 'marketing agency services', 'animation studio'],
    path: '/services',
  }),
  portfolio: buildPageMetadata({
    title: 'Portfolio — Case Studies & Client Work',
    description:
      'Browse NextCreavo portfolio case studies across animation, marketing, web development, mobile apps, AI automation, and UI/UX design with real project outcomes.',
    keywords: ['agency portfolio', 'case studies', 'client work', 'project showcase'],
    path: '/portfolio',
  }),
  blog: buildPageMetadata({
    title: 'Blog — Insights on Tech, AI, Design & Marketing',
    description:
      'Read NextCreavo insights on headless commerce, AI agents, minimal design, local SEO, and digital craft — practical guides for founders and marketing teams.',
    keywords: ['agency blog', 'digital marketing blog', 'web development insights', 'AI SaaS guide'],
    path: '/blog',
  }),
  contact: buildPageMetadata({
    title: 'Contact — Start Your Project Brief',
    description:
      'Contact NextCreavo to start your project brief. Tell us about your web, marketing, animation, app, or AI project and receive a comprehensive quote from our team.',
    keywords: ['contact agency', 'project brief', 'get a quote', 'hire NextCreavo'],
    path: '/contact',
  }),
  faq: buildPageMetadata({
    title: 'FAQ — Services, Technology & Billing Answers',
    description:
      'Find answers about NextCreavo workflows, Figma deliverables, Shopify speed, GMB SEO, headless architecture, security, billing, and maintenance retainers.',
    keywords: ['agency FAQ', 'web development FAQ', 'digital marketing questions', 'project pricing'],
    path: '/faq',
  }),
  privacy: buildPageMetadata({
    title: 'Privacy Policy',
    description:
      'NextCreavo privacy policy — how we collect, use, and protect your personal data when you visit our website or submit a project inquiry.',
    keywords: ['privacy policy', 'data protection'],
    path: '/privacy',
    noIndex: false,
  }),
  terms: buildPageMetadata({
    title: 'Terms of Service',
    description:
      'NextCreavo terms of service governing use of our website, services, intellectual property, and client engagement agreements.',
    keywords: ['terms of service', 'agency terms'],
    path: '/terms',
    noIndex: false,
  }),
  cookies: buildPageMetadata({
    title: 'Cookie Policy',
    description:
      'Learn how NextCreavo uses cookies and similar technologies for analytics, performance, and user experience on our website.',
    keywords: ['cookie policy', 'website cookies'],
    path: '/cookies',
    noIndex: false,
  }),
} as const
