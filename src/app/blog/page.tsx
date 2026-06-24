import BlogList from '@/BlogList'
import JsonLd from '@/components/seo/JsonLd'
import { fetchPublicBlogList } from '@/lib/blog/server'
import { itemListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.blog

export default async function BlogPage() {
  const posts = await fetchPublicBlogList({ skip: 0, limit: 100 })

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd('NextCreavo Blog', 'Insights on tech, AI, design, and marketing.', '/blog'),
          itemListJsonLd(
            'Blog Articles',
            '/blog',
            posts.map((post) => ({ name: post.title, url: `/blog/${post.slug}` }))
          ),
        ]}
      />
      <BlogList />
    </>
  )
}
