import BlogDetails from '@/BlogDetails'
import JsonLd from '@/components/seo/JsonLd'
import { fetchPublicBlogBySlug, fetchPublicBlogSlugs } from '@/lib/blog/server'
import { blogPostJsonLd, breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  const slugs = await fetchPublicBlogSlugs()
  return slugs.map((slug) => ({ id: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id: slug } = await params
  const post = await fetchPublicBlogBySlug(slug)
  if (!post) return { title: 'Article Not Found' }

  return buildPageMetadata({
    title: post.title,
    description: post.summary,
    keywords: [...(post.tags ?? []), post.category, 'NextCreavo blog', 'digital agency insights'].filter(Boolean),
    path: `/blog/${post.slug}`,
    image: post.coverImageUrl,
    type: 'article',
    publishedTime: post.createdAt,
    authors: post.authorName ? [post.authorName] : undefined,
  })
}

export default async function BlogDetailPage({ params }: Props) {
  const { id: slug } = await params
  const post = await fetchPublicBlogBySlug(slug)
  if (!post) notFound()

  const articleLd = blogPostJsonLd(post)

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(post.title, post.summary, `/blog/${post.slug}`),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          ...(articleLd ? [articleLd] : []),
        ]}
      />
      <BlogDetails />
    </>
  )
}
