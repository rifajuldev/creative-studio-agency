import { PORTFOLIO_INDEX } from '@/data/portfolioIndex'
import { SERVICES_DATA } from '@/data/services'
import { fetchPublicBlogList } from '@/lib/blog/server'
import { siteConfig } from '@/lib/seo/site'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
  const blogPosts = await fetchPublicBlogList({ skip: 0, limit: 500 })

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
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: post.createdAt ? new Date(post.createdAt) : now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
