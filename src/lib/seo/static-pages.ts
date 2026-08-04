import { pageKeywordSets } from './keywords'
import { buildPageMetadata } from './metadata'

export const staticPagesSeo = {
  home: buildPageMetadata({
    title: 'Web, Marketing, Animation & AI | NextCreavo',
    description:
      'NextCreavo creative studio: UI/UX, web & mobile apps, 2D animation, AI agents & chatbots, SaaS & custom software — plus Google Ads, Facebook Ads, GMB, social media, SEO & technical SEO. Free strategy call.',
    keywords: [...pageKeywordSets.home],
    path: '/',
  }),
  about: buildPageMetadata({
    title: 'About NextCreavo | Web, Marketing, Animation & AI Studio',
    description:
      'Meet NextCreavo — creative studio for UI/UX, web development, mobile apps, 2D animation, AI integration, Google Ads, Facebook Ads, GMB, SEO and social growth.',
    keywords: [...pageKeywordSets.about],
    path: '/about',
  }),
  services: buildPageMetadata({
    title: 'Services | Web, Marketing, Animation & AI | NextCreavo',
    description:
      'Full-funnel NextCreavo services: UI/UX, web & apps, 2D animation, AI — plus Google Ads, Facebook Ads, GMB, social media management, SEO and technical SEO.',
    keywords: [...pageKeywordSets.services],
    path: '/services',
  }),
  portfolio: buildPageMetadata({
    title: 'Case Studies | Web, Ads, SEO & Animation | NextCreavo',
    description:
      'See NextCreavo results across websites, apps, AI, 2D animation, Google Ads, Facebook/Instagram, Map Pack SEO and conversion-focused brand experiences.',
    keywords: [...pageKeywordSets.portfolio],
    path: '/portfolio',
  }),
  blog: buildPageMetadata({
    title: 'Blog | Web, Marketing, Animation & AI Insights | NextCreavo',
    description:
      'Guides on Instagram Reels ads, TikTok ecommerce, LinkedIn B2B, Google Ads, Map Pack SEO, Next.js performance, animation, and AI marketing playbooks.',
    keywords: [...pageKeywordSets.blog],
    path: '/blog',
  }),
  contact: buildPageMetadata({
    title: 'Hire NextCreavo | Free Quote for Web, Marketing, Animation & AI',
    description:
      'Ready to grow? Contact NextCreavo for a free quote on UI/UX, web, apps, animation, AI, Google Ads, Facebook Ads, GMB, SEO or social — start your brief today.',
    keywords: [...pageKeywordSets.contact],
    path: '/contact',
  }),
  faq: buildPageMetadata({
    title: 'FAQ | Pricing, Delivery, Ads, SEO & Technical SEO',
    description:
      'Answers on NextCreavo pricing, Google Ads spend, Meta campaigns, SEO timelines, Core Web Vitals, Figma handoff, billing and retainers.',
    keywords: [...pageKeywordSets.faq],
    path: '/faq',
  }),
  privacy: buildPageMetadata({
    title: 'Privacy Policy | NextCreavo',
    description:
      'How NextCreavo collects, uses and protects personal data when you visit our site or submit a project inquiry.',
    keywords: ['NextCreavo privacy policy', 'data protection'],
    path: '/privacy',
  }),
  terms: buildPageMetadata({
    title: 'Terms of Service | NextCreavo',
    description:
      'Terms for using the NextCreavo website, creative services, intellectual property and client engagement agreements.',
    keywords: ['NextCreavo terms of service', 'agency terms'],
    path: '/terms',
  }),
  cookies: buildPageMetadata({
    title: 'Cookie Policy | NextCreavo',
    description:
      'How NextCreavo uses cookies for analytics, performance and experience — supporting Google Analytics and Search Console insights.',
    keywords: ['NextCreavo cookie policy', 'analytics cookies'],
    path: '/cookies',
  }),
} as const
