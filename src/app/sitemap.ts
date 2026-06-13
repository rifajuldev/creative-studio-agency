import { BLOG_POSTS } from '@/blogData'
import { PORTFOLIO_INDEX } from '@/data/portfolioIndex'
import { SERVICES_DATA } from '@/data/services'
import { siteConfig } from '@/lib/seo/site'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/blog',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/cookies',
  ]

  const now = new Date()

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : 0.8,
    })),
    ...SERVICES_DATA.map((service) => ({
      url: `${siteConfig.url}/services/${service.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...PORTFOLIO_INDEX.map((project) => ({
      url: `${siteConfig.url}/portfolio/${project.id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${siteConfig.url}/blog/${post.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
