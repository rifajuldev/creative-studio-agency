import { defaultSeoKeywords, knowsAboutTopics, pageKeywordSets } from './keywords'

export const siteConfig = {
  name: 'NextCreavo',
  legalName: 'NextCreavo Creative Studio Agency',
  tagline: 'Web, Marketing, Animation & AI — creative studio for modern brands.',
  description:
    'NextCreavo (nextcreavo.com) is a software and AI development studio for React, Next.js, custom software, chatbots, and workflow automation — plus UI/UX, ads, and SEO. Remote-first, worldwide.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.nextcreavo.com',
  locale: 'en_US',
  email: 'info@nextcreavo.com',
  phone: '+880 1611-095655',
  /** Digits-only for tel: links */
  phoneE164: '8801611095655',
  whatsappUrl: 'https://wa.me/8801611095655',
  whatsappLabel: 'Message NextCreavo on WhatsApp',
  /** Remote-first — do not publish a fake street address (confuses GBP / Semrush local matching). */
  presence: {
    model: 'Remote-first',
    areaServed: 'Worldwide',
    note: 'No public walk-in office. Briefs via contact, email, or WhatsApp.',
  },
  logo: '/favicon-logo.png',
  defaultOgImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  twitterHandle: '@nextcreavo',
  social: {
    facebook: 'https://www.facebook.com/nextcreavo',
    instagram: 'https://www.instagram.com/nextcreavo',
    linkedin: 'https://www.linkedin.com/company/nextcreavo/',
    tiktok: 'https://www.tiktok.com/@nextcreavo',
  },
  /** Live profiles only — Twitter/X 404s inflate broken-link audits on every page. */
  socialLinks: [
    { label: 'Instagram', href: 'https://www.instagram.com/nextcreavo' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nextcreavo/' },
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
  return siteConfig.socialLinks.map((link) => link.href)
}
