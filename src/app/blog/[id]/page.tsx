import { BLOG_POSTS } from '@/blogData'
import BlogDetails from '@/BlogDetails'
import JsonLd from '@/components/seo/JsonLd'
import { blogPostJsonLd, breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ id: post.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const post = BLOG_POSTS.find((p) => p.id === id)
  if (!post) return { title: 'Article Not Found' }

  return buildPageMetadata({
    title: post.title,
    description: post.summary,
    keywords: [...post.tags, post.category, 'NextCreavo blog', 'digital agency insights'],
    path: `/blog/${post.id}`,
    image: post.img,
    type: 'article',
    publishedTime: post.date,
    authors: [post.author.name],
  })
}

export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params
  const post = BLOG_POSTS.find((p) => p.id === id)
  if (!post) notFound()

  const articleLd = blogPostJsonLd(id)

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(post.title, post.summary, `/blog/${post.id}`),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.id}` },
          ]),
          ...(articleLd ? [articleLd] : []),
        ]}
      />
      <BlogDetails />
    </>
  )
}
