import type { Metadata } from 'next'
import { absoluteUrl, siteConfig } from './site'

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

export function buildPageMetadata(input: PageSeoInput): Metadata {
  const canonical = absoluteUrl(input.path)
  const fullTitle = input.title.includes(siteConfig.name) ? input.title : `${input.title} | ${siteConfig.name}`
  const keywords = [...siteConfig.defaultKeywords, ...(input.keywords ?? [])]
  const image = input.image ?? absoluteUrl(siteConfig.defaultOgImage)

  return {
    title: fullTitle,
    description: input.description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: input.type ?? 'website',
      images: [{ url: image, width: 1200, height: 630, alt: input.title }],
      ...(input.type === 'article' && input.publishedTime
        ? { publishedTime: input.publishedTime, authors: input.authors }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: input.description,
      images: [image],
      creator: siteConfig.twitterHandle,
    },
    robots: input.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

export function buildDefaultMetadata(): Metadata {
  return {
    ...buildPageMetadata({
      title: `${siteConfig.name} | Creative Studio Agency`,
      description: siteConfig.description,
      path: '/',
    }),
    title: {
      default: `${siteConfig.name} | Creative Studio Agency`,
      template: `%s | ${siteConfig.name}`,
    },
  }
}
