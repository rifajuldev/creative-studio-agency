import { defaultSeoKeywords, knowsAboutTopics, pageKeywordSets } from './keywords'

export const siteConfig = {
  name: 'NextCreavo',
  legalName: 'NextCreavo Creative Studio Agency',
  tagline: 'Grow faster with ads, SEO & creative built for every social platform.',
  description:
    'NextCreavo is a creative studio agency for Google Ads, SEO, Facebook, Instagram, LinkedIn, Twitter/X & TikTok growth — plus Next.js websites, apps, AI, animation and UI/UX that convert clicks into customers.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.nextcreavo.com',
  locale: 'en_US',
  email: 'info@nextcreavo.com',
  phone: '+880 1611-095655',
  /** Digits-only for tel: links */
  phoneE164: '8801611095655',
  whatsappUrl: 'https://wa.me/8801611095655',
  whatsappLabel: 'Message NextCreavo on WhatsApp',
  address: {
    line1: '404 Digital Avenue',
    line2: 'Innovation District',
    city: 'New York',
    region: 'NY',
    postalCode: '10001',
    country: 'US',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=New+York%2C+NY+10001',
  },
  logo: '/favicon-logo.png',
  defaultOgImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  twitterHandle: '@nextcreavo',
  social: {
    facebook: 'https://www.facebook.com/nextcreavo',
    instagram: 'https://www.instagram.com/nextcreavo',
    linkedin: 'https://www.linkedin.com/company/nextcreavo',
    twitter: 'https://twitter.com/nextcreavo',
    x: 'https://x.com/nextcreavo',
    tiktok: 'https://www.tiktok.com/@nextcreavo',
  },
  /** Labeled footer/nav social links (real URLs only — never href="#") */
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/nextcreavo' },
    { label: 'Twitter', href: 'https://twitter.com/nextcreavo' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nextcreavo' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@nextcreavo' },
    { label: 'Facebook', href: 'https://www.facebook.com/nextcreavo' },
  ],
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? '',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-SY8XHE63J2',
  defaultKeywords: defaultSeoKeywords,
  knowsAbout: knowsAboutTopics,
  pageKeywords: pageKeywordSets,
} as const

export function absoluteUrl(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  const base = siteConfig.url.replace(/\/$/, '')
  // Keep homepage without trailing slash so sitemap/canonical/internal links match
  if (!path || path === '/') return base
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}

export function socialProfileUrls() {
  return [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
    siteConfig.social.x,
    siteConfig.social.tiktok,
  ]
}
