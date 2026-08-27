import BlogList from '@/BlogList'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { fetchPublicBlogList } from '@/lib/blog/server'
import { breadcrumbJsonLd, itemListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { pageKeywordSets } from '@/lib/seo/keywords'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.blog

export default async function BlogPage() {
  const { data: posts } = await fetchPublicBlogList({ skip: 0, limit: 100 })

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'Growth Blog | Next.js SEO, AI, GMB, Headless CMS & UI/UX',
            'Playbooks on Next.js App Router SEO, Claude for developers, headless CMS, Shopify, Laravel, Google Business Profile Map Pack, Relume UI/UX, and AI automation.',
            '/blog',
            [...pageKeywordSets.blog]
          ),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
          ]),
          itemListJsonLd(
            'NextCreavo Growth Blog Articles',
            '/blog',
            posts.map((post) => ({ name: post.title, url: `/blog/${post.slug}` }))
          ),
        ]}
      />
      <BlogList />
      <ServerTextBoost
        heading="Browse NextCreavo articles on growth, ads, and product"
        intro="This index is published in the page HTML so search engines can read every title and summary — covering Next.js SEO, AI for developers, headless CMS, Laravel, WordPress, Shopify, Google Business Profile, UI/UX, ads, and AI integrations."
        items={posts.slice(0, 24).map((post) => ({
          title: post.title,
          href: `/blog/${post.slug}`,
          summary: post.summary || `${post.category || 'Insight'} · ${post.readTime || 'Quick read'}`,
        }))}
        outro="Need execution, not just reading? Hire NextCreavo for paid media, SEO, web development, apps, animation, or AI — start at /contact."
      />
    </>
  )
}
