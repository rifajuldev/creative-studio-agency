import type { Metadata } from 'next'
import { absoluteUrl, siteConfig, socialProfileUrls } from './site'

export interface PageSeoInput {
  title: string
  description: string
  keywords?: string[]
  path: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  authors?: string[]
  noIndex?: boolean
}

/** Social-share ready metadata for Facebook, Instagram, LinkedIn, Twitter/X & TikTok link previews */
export function buildPageMetadata(input: PageSeoInput): Metadata {
  const canonical = absoluteUrl(input.path)
  const fullTitle = input.title.includes(siteConfig.name) ? input.title : `${input.title} | ${siteConfig.name}`
  // Cap meta keywords — long lists bloat HTML without helping Google rankings
  const keywords = Array.from(new Set([...siteConfig.defaultKeywords.slice(0, 10), ...(input.keywords ?? [])])).slice(
    0,
    18
  )
  const image = input.image ?? absoluteUrl(siteConfig.defaultOgImage)
  const ogType = input.type ?? 'website'

  return {
    // absolute bypasses root layout `title.template` (prevents "| NextCreavo | NextCreavo")
    title: { absolute: fullTitle },
    description: input.description,
    keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.legalName,
    category: 'Creative Studio — Web, Marketing, Animation & AI',
    applicationName: siteConfig.name,
    referrer: 'origin-when-cross-origin',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      types: {
        'text/plain': absoluteUrl('/llms.txt'),
      },
    },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: ogType,
      images: [
        {
          url: image,
          secureUrl: image,
          width: 1200,
          height: 630,
          alt: `${fullTitle} — NextCreavo creative studio`,
          type: 'image/jpeg',
        },
      ],
      ...(ogType === 'article' && input.publishedTime
        ? { publishedTime: input.publishedTime, authors: input.authors ?? [siteConfig.name] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title: fullTitle,
      description: input.description,
      images: [
        {
          url: image,
          alt: `${fullTitle} — NextCreavo`,
          width: 1200,
          height: 630,
        },
      ],
    },
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID ? { appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID } : undefined,
    robots: input.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    other: {
      'ai-content-declaration': 'human-and-ai-assisted',
      'llms-txt': absoluteUrl('/llms.txt'),
      'llm-txt': absoluteUrl('/llm.txt'),
      'og:see_also': socialProfileUrls().slice(0, 5).join(', '),
    },
  }
}

export function buildDefaultMetadata(): Metadata {
  return {
    ...buildPageMetadata({
      title: 'NextCreavo | Official Website',
      description: siteConfig.description,
      path: '/',
    }),
    title: {
      default: 'NextCreavo | Official Website',
      template: `%s | ${siteConfig.name}`,
    },
    icons: {
      icon: [{ url: siteConfig.logo, type: 'image/png' }],
      apple: [{ url: siteConfig.logo, type: 'image/png' }],
      shortcut: siteConfig.logo,
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  }
}
