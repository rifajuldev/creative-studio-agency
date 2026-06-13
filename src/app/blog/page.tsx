import { BLOG_POSTS } from '@/blogData'
import BlogList from '@/BlogList'
import JsonLd from '@/components/seo/JsonLd'
import { itemListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.blog

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd('NextCreavo Blog', 'Insights on tech, AI, design, and marketing.', '/blog'),
          itemListJsonLd(
            'Blog Articles',
            '/blog',
            BLOG_POSTS.map((post) => ({ name: post.title, url: `/blog/${post.id}` }))
          ),
        ]}
      />
      <BlogList />
    </>
  )
}
