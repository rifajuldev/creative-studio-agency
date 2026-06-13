import { BLOG_POSTS } from '@/blogData'
import { PORTFOLIO_INDEX, getPortfolioById } from '@/data/portfolioIndex'
import { SERVICES_DATA, getServiceById } from '@/data/services'
import { absoluteUrl, siteConfig } from './site'

type JsonLd = Record<string, unknown>

export function organizationJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: siteConfig.defaultOgImage,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [
      'https://www.instagram.com/nextcreavo',
      'https://twitter.com/nextcreavo',
      'https://www.linkedin.com/company/nextcreavo',
    ],
  }
}

export function websiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/portfolio?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function webPageJsonLd(title: string, description: string, path: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#organization` },
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

export function serviceJsonLd(id: string): JsonLd | null {
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
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      description: service.pricing.growth,
    },
  }
}

export function portfolioProjectJsonLd(id: string): JsonLd | null {
  const project = getPortfolioById(id)
  if (!project) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.longDesc,
    url: absoluteUrl(`/portfolio/${project.id}`),
    image: project.img,
    creator: { '@id': `${siteConfig.url}/#organization` },
    genre: project.category,
    keywords: project.tags.join(', '),
  }
}

export function blogPostJsonLd(id: string): JsonLd | null {
  const post = BLOG_POSTS.find((p) => p.id === id)
  if (!post) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    image: post.img,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    url: absoluteUrl(`/blog/${post.id}`),
    keywords: post.tags.join(', '),
    articleSection: post.category,
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
    'NextCreavo Services',
    '/services',
    SERVICES_DATA.map((s) => ({ name: s.title, url: `/services/${s.id}` }))
  )
}

export function portfolioListJsonLd(): JsonLd {
  return itemListJsonLd(
    'NextCreavo Portfolio',
    '/portfolio',
    PORTFOLIO_INDEX.map((p) => ({ name: p.title, url: `/portfolio/${p.id}` }))
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
