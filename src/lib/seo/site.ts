export const siteConfig = {
  name: 'NextCreavo',
  legalName: 'NextCreavo Creative Studio Agency',
  tagline: 'Crafting digital ecosystems for modern brands.',
  description:
    'NextCreavo is a creative studio agency specializing in web development, digital marketing, 2D animation, mobile apps, AI integrations, and UI/UX design for modern brands.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nextcreavo.com',
  locale: 'en_US',
  email: 'hello@nextcreavo.com',
  phone: '+1-404-111-2222',
  defaultOgImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  twitterHandle: '@nextcreavo',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-WZ6GJF2C',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-SY8XHE63J2',
  defaultKeywords: [
    'creative studio agency',
    'digital agency',
    'web development',
    'digital marketing',
    'UI UX design',
    '2D animation',
    'mobile app development',
    'AI integrations',
    'NextCreavo',
    'brand design',
    'Next.js agency',
  ],
} as const

export function absoluteUrl(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteConfig.url}${normalized}`
}
