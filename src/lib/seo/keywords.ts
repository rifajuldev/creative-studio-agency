/**
 * NextCreavo SEO keyword system
 * High-intent, CTR-focused phrases for Google Search, Ads, social & AI visibility.
 */

export const brandKeywords = [
  'NextCreavo',
  'NextCreavo agency',
  'NextCreavo creative studio',
  'hire NextCreavo',
] as const

/** Primary head terms — highest search + commercial intent */
export const primaryKeywords = [
  'AI workflow automation services',
  'React development agency',
  'custom chatbot development',
  'Next.js development agency',
  'custom software development Singapore',
  'construction software development',
  'AI development agency',
  'custom software development company',
  'SaaS development company',
  'nearshore React development',
  'AI automation services',
  'React development company',
  'travel software development',
  'UI UX design agency for SaaS',
  'web application development company',
] as const

/** Google Search / SEO / local visibility */
export const googleSearchKeywords = [
  'SEO agency',
  'local SEO agency',
  'Google Business Profile optimization',
  'GMB optimization',
  'Google Map Pack ranking',
  'Google My Business optimization',
  'rank on Google Maps',
  'increase Google search visibility',
  'organic search growth agency',
  'technical SEO agency',
  'on-page SEO services',
] as const

/** Google Ads / PPC */
export const googleAdsKeywords = [
  'Google Ads agency',
  'Google PPC agency',
  'Google Ads management',
  'Performance Max campaigns',
  'Google Search ads agency',
  'Google Display ads',
  'YouTube ads agency',
  'pay per click advertising agency',
  'lower Google Ads CPA',
  'high ROAS Google Ads',
] as const

/** Meta / Facebook / Instagram */
export const metaAdsKeywords = [
  'Facebook ads agency',
  'Instagram ads agency',
  'Meta ads agency',
  'Facebook advertising agency',
  'Instagram marketing agency',
  'Facebook lead generation ads',
  'Instagram Reels ads',
  'Meta Advantage+ campaigns',
  'social media advertising agency',
] as const

/** LinkedIn / Twitter(X) / TikTok */
export const socialPlatformKeywords = [
  'LinkedIn ads agency',
  'LinkedIn marketing agency',
  'B2B LinkedIn advertising',
  'Twitter ads agency',
  'X ads management',
  'TikTok ads agency',
  'TikTok marketing agency',
  'TikTok creative ads',
  'social media management agency',
  'multi-channel social ads',
] as const

/** Web / product / AI services */
export const serviceKeywords = [
  'Next.js development agency',
  'React website development',
  'headless commerce agency',
  'Shopify development agency',
  'mobile app development company',
  'UI UX design agency',
  '2D animation studio',
  'Lottie animation agency',
  'AI integration services',
  'AI chatbot development',
  'AI automation agency',
  'custom AI agents for business',
] as const

/** CTR / conversion intent (Search Console + Ads click magnets) */
export const ctrKeywords = [
  'hire digital marketing agency',
  'best creative agency for startups',
  'get more leads with Google Ads',
  'agency that increases website traffic',
  'affordable digital marketing agency',
  'book a free marketing strategy call',
  'website redesign that converts',
  'agency for brand growth',
  'scale your business with paid ads',
  'creative agency with proven ROAS',
] as const

/** AI search / LLM discovery phrases */
export const aiVisibilityKeywords = [
  'best AI-ready creative agency',
  'AI powered digital marketing agency',
  'agency for AI product development',
  'ChatGPT integration agency',
  'LLM integration services',
  'AI search optimized website agency',
  'generative AI marketing agency',
] as const

/** Popular content / topical authority themes */
export const popularTopics = [
  'how to rank in Google Map Pack',
  'Google Ads vs Facebook Ads',
  'Instagram growth strategies 2026',
  'LinkedIn lead generation for B2B',
  'TikTok ads for ecommerce',
  'Next.js SEO best practices',
  'headless Shopify performance',
  'AI chatbot for customer support',
  'local SEO checklist',
  'Meta ads creative testing',
  'Core Web Vitals optimization',
  'brand identity design process',
] as const

/** Flattened default set used in meta + JSON-LD (deduped, ordered by priority) */
export const defaultSeoKeywords = Array.from(
  new Set([
    ...brandKeywords,
    ...primaryKeywords,
    ...googleSearchKeywords.slice(0, 6),
    ...googleAdsKeywords.slice(0, 5),
    ...metaAdsKeywords,
    ...socialPlatformKeywords,
    ...serviceKeywords,
    ...ctrKeywords.slice(0, 5),
    ...aiVisibilityKeywords.slice(0, 4),
  ])
)

export const knowsAboutTopics = [
  'AI Workflow Automation Services',
  'React Development Agency',
  'Custom Chatbot Development',
  'Next.js Development Agency',
  'Custom Software Development Singapore',
  'Construction Software Development',
  'Travel Software Development',
  'Nearshore React Development',
  'AI Development Agency',
  'AI Automation Services',
  'React Development Company',
  'SaaS Development Company',
  'UI UX Design Agency',
  'Custom Software Development',
  'Citizen Service Portal Development',
  'Node.js Development',
  'API Development Services',
  'CRM Development',
  'Mobile App Development Company',
  'Technical SEO',
] as const

export const pageKeywordSets = {
  home: [
    'NextCreavo',
    'NextCreavo official website',
    'nextcreavo.com',
    'www.nextcreavo.com',
    'AI workflow automation services',
    'React development agency',
    'custom chatbot development',
    'Next.js development agency',
    'custom software development Singapore',
    'construction software development',
    'UI UX design agency for SaaS',
    'AI development agency',
    'web development agency',
    'nearshore React development',
  ],
  about: [
    'about NextCreavo',
    'creative studio team',
    'Facebook Instagram ads experts',
    'TikTok LinkedIn marketing team',
    'digital agency experts',
  ],
  services: [
    'digital agency services',
    'Facebook ads services',
    'Instagram ads services',
    'TikTok ads services',
    'LinkedIn advertising services',
    'Twitter X ads services',
    'Google Ads management services',
    'social media management services',
    'web development services',
    'AI development services',
  ],
  portfolio: [
    'Facebook ads case study',
    'Instagram growth case study',
    'TikTok ads portfolio',
    'LinkedIn B2B case study',
    'Google Ads case study',
    'digital agency case studies',
    'web design portfolio',
  ],
  blog: [
    ...popularTopics.slice(0, 8),
    'Next.js SEO',
    'AI for developers',
    'headless CMS',
    'Google Business Profile',
    'UI UX design systems',
    'Laravel vs Next.js',
    'Facebook ads tips',
    'Instagram Reels strategy',
    'TikTok marketing tips',
    'LinkedIn lead gen blog',
    'Twitter ads guide',
  ],
  contact: [
    'hire NextCreavo',
    'hire Facebook ads agency',
    'hire Instagram marketing agency',
    'hire TikTok ads agency',
    'get a free marketing quote',
    'book digital agency consultation',
  ],
  faq: [
    'Facebook ads cost FAQ',
    'Instagram ads pricing',
    'TikTok ads budget FAQ',
    'LinkedIn ads cost',
    'Google Ads cost FAQ',
    'agency pricing FAQ',
  ],
} as const
