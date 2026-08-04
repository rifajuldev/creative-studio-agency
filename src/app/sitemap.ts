import { getAllIndustrySlugs } from '@/data/industries'
import { getAllLocationSlugs } from '@/data/locations'
import { getAllServiceLandingSlugs } from '@/data/servicePages'
import { fetchPublicBlogList } from '@/lib/blog/server'
import { fetchPortfolioIndex } from '@/lib/portfolio/server'
import { absoluteUrl } from '@/lib/seo/site'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const serviceLandings = getAllServiceLandingSlugs().map((slug) => `/services/${slug}`)
  const industries = getAllIndustrySlugs().map((slug) => `/industries/${slug}`)
  const locations = getAllLocationSlugs().map((slug) => `/locations/${slug}`)

  const staticRoutes = [
    '/',
    '/about',
    '/services',
    ...serviceLandings,
    // Legacy hub services (keep indexed during migration)
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
    '/industries',
    ...industries,
    '/locations',
    ...locations,
    '/portfolio',
    '/case-studies',
    '/blog',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/cookies',
  ]

  const now = new Date()

  let blogPosts: Awaited<ReturnType<typeof fetchPublicBlogList>>['data'] = []
  let portfolioProjects: Awaited<ReturnType<typeof fetchPortfolioIndex>> = []

  try {
    const [blogResult, portfolioResult] = await Promise.all([
      fetchPublicBlogList({ skip: 0, limit: 500 }),
      fetchPortfolioIndex(),
    ])
    blogPosts = blogResult.data ?? []
    portfolioProjects = portfolioResult ?? []
  } catch {
    // Keep static routes available even if CMS fetches fail
  }

  const priorityFor = (path: string) => {
    if (path === '/') return 1
    if (path === '/services' || path === '/contact') return 0.95
    if (path.startsWith('/services/')) return 0.9
    if (path.startsWith('/industries')) return 0.85
    if (path.startsWith('/locations')) return 0.8
    if (path === '/portfolio' || path === '/case-studies' || path === '/blog') return 0.85
    return 0.7
  }

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: path === '/' || path.startsWith('/blog') ? ('weekly' as const) : ('monthly' as const),
      priority: priorityFor(path),
    })),
    ...portfolioProjects.map((project) => ({
      url: absoluteUrl(`/portfolio/${project.slug}`),
      lastModified: project.createdAt ? new Date(project.createdAt) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.createdAt ? new Date(post.createdAt) : now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
