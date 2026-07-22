import { pageKeywordSets } from './keywords'
import { buildPageMetadata } from './metadata'

export const staticPagesSeo = {
  home: buildPageMetadata({
    title: 'NextCreavo | Facebook, Instagram, TikTok, LinkedIn & Google Ads Agency',
    description:
      'Grow on Facebook, Instagram, TikTok, LinkedIn, Twitter/X & Google. NextCreavo delivers ads, SEO, social content, Next.js websites, apps, AI & UI/UX that turn clicks into customers. Free strategy call.',
    keywords: [...pageKeywordSets.home],
    path: '/',
  }),
  about: buildPageMetadata({
    title: 'About NextCreavo | Social Ads & Creative Studio Team',
    description:
      'Meet NextCreavo — media buyers and creatives for Facebook, Instagram, TikTok, LinkedIn, Twitter/X, Google Ads, SEO, web, apps and AI-powered brand growth.',
    keywords: [...pageKeywordSets.about],
    path: '/about',
  }),
  services: buildPageMetadata({
    title: 'Services | Facebook, Instagram, TikTok, LinkedIn, Google Ads & SEO',
    description:
      'Full-funnel NextCreavo services: Facebook & Instagram ads, TikTok, LinkedIn, Twitter/X, Google Ads, local SEO, social management, web, apps, AI, animation and UI/UX.',
    keywords: [...pageKeywordSets.services],
    path: '/services',
  }),
  portfolio: buildPageMetadata({
    title: 'Case Studies | Social Ads, SEO & Brand Results | NextCreavo',
    description:
      'See NextCreavo results across Facebook, Instagram, TikTok, LinkedIn, Twitter/X and Google — ROAS wins, follower growth, Map Pack rankings and conversion-focused websites.',
    keywords: [...pageKeywordSets.portfolio],
    path: '/portfolio',
  }),
  blog: buildPageMetadata({
    title: 'Blog | Instagram, TikTok, LinkedIn, Facebook & Google Ads Tips',
    description:
      'Popular guides: Instagram Reels ads, TikTok ecommerce, LinkedIn B2B leads, Facebook Meta creatives, Twitter/X ads, Google Map Pack SEO and AI marketing playbooks.',
    keywords: [...pageKeywordSets.blog],
    path: '/blog',
  }),
  contact: buildPageMetadata({
    title: 'Hire NextCreavo | Free Quote for Social Ads & SEO',
    description:
      'Ready to grow on Facebook, Instagram, TikTok, LinkedIn, Twitter/X or Google? Contact NextCreavo for a free quote on ads, SEO, web, apps or AI — start your brief today.',
    keywords: [...pageKeywordSets.contact],
    path: '/contact',
  }),
  faq: buildPageMetadata({
    title: 'FAQ | Social Ads, SEO, Pricing & Delivery',
    description:
      'Answers on Facebook/Instagram/TikTok/LinkedIn ads budgets, Google Ads spend, SEO timelines, social retainers, Figma handoff, billing and NextCreavo delivery.',
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
