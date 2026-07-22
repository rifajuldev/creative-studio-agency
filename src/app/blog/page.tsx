import BlogList from '@/BlogList'
import JsonLd from '@/components/seo/JsonLd'
import { fetchPublicBlogList } from '@/lib/blog/server'
import { itemListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
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
            'Growth Blog | SEO, Google Ads, Meta, TikTok & AI Tips',
            'Popular playbooks: Map Pack ranking, Google Ads vs Meta, Instagram Reels ads, LinkedIn B2B leads, TikTok ecommerce, Next.js SEO, AI chatbots and creative testing.',
            '/blog',
            [...pageKeywordSets.blog]
          ),
          itemListJsonLd(
            'NextCreavo Growth Blog Articles',
            '/blog',
            posts.map((post) => ({ name: post.title, url: `/blog/${post.slug}` }))
          ),
        ]}
      />
      <BlogList />
    </>
  )
}
