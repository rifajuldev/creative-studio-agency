import { fetchPublicBlogList } from '@/lib/blog/server'
import { fetchPortfolioIndex } from '@/lib/portfolio/server'
import { siteConfig } from '@/lib/seo/site'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/services/animation',
    '/services/marketing',
    '/services/marketing/gmb-optimization',
    '/services/marketing/google-ads',
    '/services/marketing/facebook-ads',
    '/services/marketing/social-media-management',
    '/services/webdev',
    '/services/appdev',
    '/services/ai',
    '/services/uiux',
    '/portfolio',
    '/blog',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/cookies',
    '/llms.txt',
    '/llm.txt',
    '/llms-full.txt',
  ]

  const now = new Date()
  const [{ data: blogPosts }, portfolioProjects] = await Promise.all([
    fetchPublicBlogList({ skip: 0, limit: 500 }),
    fetchPortfolioIndex(),
  ])

  const priorityFor = (path: string) => {
    if (path === '') return 1
    if (path === '/services' || path === '/contact') return 0.95
    if (path.startsWith('/services/')) return 0.9
    if (path === '/portfolio' || path === '/blog') return 0.85
    if (path.startsWith('/llms')) return 0.5
    return 0.7
  }

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: path === '' || path.startsWith('/blog') ? ('weekly' as const) : ('monthly' as const),
      priority: priorityFor(path),
    })),
    ...portfolioProjects.map((project) => ({
      url: `${siteConfig.url}/portfolio/${project.slug}`,
      lastModified: project.createdAt ? new Date(project.createdAt) : now,
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
