import { SERVICES_DATA, getServiceById } from '@/data/services'
import type { IBlogPublicDetail } from '@/interfaces/blog.interface'
import type { IPortfolioPublicListItem } from '@/interfaces/portfolio.interface'
import { absoluteUrl, siteConfig, socialProfileUrls } from './site'
import { SITE_REVIEWS } from './structured-content'

type JsonLd = Record<string, unknown>

export function organizationJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    // Organization only — ProfessionalService is a LocalBusiness subtype and
    // fails Google/Semrush validation without a real postal address.
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    logo: {
      '@type': 'ImageObject',
      '@id': `${siteConfig.url}/#logo`,
      url: absoluteUrl(siteConfig.logo),
      contentUrl: absoluteUrl(siteConfig.logo),
      caption: siteConfig.name,
    },
    image: { '@id': `${siteConfig.url}/#logo` },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    // Keep schema keywords lean — long keyword dumps inflate HTML and hurt text:HTML ratio
    keywords: siteConfig.defaultKeywords.slice(0, 12).join(', '),
    knowsAbout: [...siteConfig.knowsAbout].slice(0, 20),
    areaServed: 'Worldwide',
    sameAs: [...socialProfileUrls(), absoluteUrl('/llms.txt'), absoluteUrl('/llm.txt')],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: siteConfig.email,
      telephone: siteConfig.phone,
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'NextCreavo Creative Services',
      itemListElement: SERVICES_DATA.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDesc,
          url: absoluteUrl(`/services/${service.id}`),
          provider: { '@id': `${siteConfig.url}/#organization` },
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: Number(
        (SITE_REVIEWS.reduce((sum, review) => sum + review.ratingValue, 0) / Math.max(SITE_REVIEWS.length, 1)).toFixed(
          1
        )
      ),
      bestRating: 5,
      worstRating: 1,
      ratingCount: SITE_REVIEWS.length,
      reviewCount: SITE_REVIEWS.length,
    },
    review: SITE_REVIEWS.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
        ...(review.jobTitle ? { jobTitle: review.jobTitle } : {}),
      },
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
      ...(review.datePublished ? { datePublished: review.datePublished } : {}),
    })),
  }
}

export function websiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    keywords: siteConfig.defaultKeywords.slice(0, 12).join(', '),
    inLanguage: 'en-US',
    publisher: { '@id': `${siteConfig.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/portfolio?search={search_term_string}`,
      },
      'query-input': {
        '@type': 'PropertyValueSpecification',
        valueRequired: true,
        valueName: 'search_term_string',
      },
    },
  }
}

export function webPageJsonLd(title: string, description: string, path: string, keywords?: string[]): JsonLd {
  const leanKeywords = (keywords?.length ? keywords : siteConfig.defaultKeywords).slice(0, 12)
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(path),
    keywords: leanKeywords.join(', '),
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#organization` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    inLanguage: 'en-US',
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function serviceJsonLd(id: string, keywords?: string[]): JsonLd | null {
  const service = getServiceById(id)
  if (!service) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDesc,
    url: absoluteUrl(`/services/${service.id}`),
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: 'Worldwide',
    serviceType: service.title,
    category: service.title,
    keywords: (keywords ?? [service.title, ...siteConfig.defaultKeywords.slice(0, 8)]).join(', '),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      description: service.pricing.growth,
      availability: 'https://schema.org/InStock',
    },
  }
}

export function portfolioProjectJsonLd(project: IPortfolioPublicListItem): JsonLd | null {
  if (!project) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.longDesc || project.summary,
    url: absoluteUrl(`/portfolio/${project.slug}`),
    image: project.coverImageUrl,
    creator: { '@id': `${siteConfig.url}/#organization` },
    genre: project.category,
    keywords: project.tags.join(', '),
  }
}

export function blogPostJsonLd(post: IBlogPublicDetail): JsonLd | null {
  if (!post) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    image: post.coverImageUrl,
    datePublished: post.createdAt,
    author: post.authorName
      ? {
          '@type': 'Person',
          name: post.authorName,
          ...(post.authorRole ? { jobTitle: post.authorRole } : {}),
        }
      : undefined,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    url: absoluteUrl(`/blog/${post.slug}`),
    keywords: (post.tags ?? []).join(', '),
    ...(post.category ? { articleSection: post.category } : {}),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
  }
}

export function itemListJsonLd(name: string, path: string, items: { name: string; url: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url.startsWith('http') ? item.url : absoluteUrl(item.url),
    })),
  }
}

export function servicesListJsonLd(): JsonLd {
  return itemListJsonLd(
    'NextCreavo Creative Studio Services',
    '/services',
    SERVICES_DATA.map((s) => ({ name: s.title, url: `/services/${s.id}` }))
  )
}

export function portfolioListJsonLd(projects: IPortfolioPublicListItem[]): JsonLd {
  return itemListJsonLd(
    'NextCreavo Portfolio Case Studies',
    '/portfolio',
    projects.map((p) => ({ name: p.title, url: `/portfolio/${p.slug}` }))
  )
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function reviewJsonLd(
  reviews: {
    author: string
    jobTitle?: string
    reviewBody: string
    ratingValue: number
    datePublished?: string
  }[] = [...SITE_REVIEWS]
): JsonLd {
  const avg = reviews.reduce((sum, review) => sum + review.ratingValue, 0) / Math.max(reviews.length, 1)

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: Number(avg.toFixed(1)),
      bestRating: 5,
      worstRating: 1,
      ratingCount: reviews.length,
      reviewCount: reviews.length,
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
        ...(review.jobTitle ? { jobTitle: review.jobTitle } : {}),
      },
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
      ...(review.datePublished ? { datePublished: review.datePublished } : {}),
      itemReviewed: {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
      },
    })),
  }
}

/** Standalone Service offer for marketing sub-pages and custom offers */
export function customServiceJsonLd(input: {
  name: string
  description: string
  path: string
  keywords?: string[]
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: 'Worldwide',
    serviceType: input.name,
    keywords: (input.keywords ?? siteConfig.defaultKeywords.slice(0, 8)).join(', '),
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl(input.path),
    },
  }
}
