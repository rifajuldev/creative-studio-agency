import type {
  IBlogListMetaPublic,
  IBlogPublicDetail,
  IBlogPublicListItem,
  PortableTextBlock,
} from '@/interfaces/blog.interface'
import { client } from '@/sanity/client'
import {
  BLOG_BY_SLUG_QUERY,
  BLOG_CATEGORIES_QUERY,
  BLOG_FEATURED_QUERY,
  BLOG_HOME_QUERY,
  BLOG_LIST_COUNT_QUERY,
  BLOG_LIST_QUERY,
  BLOG_SLUGS_QUERY,
} from '@/sanity/queries'

export type PublicBlogListParams = {
  skip?: number
  limit?: number
  searchTerm?: string
  category?: string
}

type SanityBlogListItem = {
  _id: string
  title?: string
  slug?: string
  summary?: string
  coverImageUrl?: string | null
  authorName?: string | null
  authorRole?: string | null
  authorAvatarUrl?: string | null
  category?: string | null
  readTime?: string | null
  tags?: string[] | null
  createdAt?: string
  featuredOnHome?: boolean
  featuredOnBlogPage?: boolean
  homeDisplayOrder?: number
}

type SanityBlogDetail = SanityBlogListItem & {
  body?: PortableTextBlock[] | null
}

function normalizeListItem(doc: SanityBlogListItem): IBlogPublicListItem {
  return {
    _id: doc._id,
    title: doc.title ?? '',
    slug: doc.slug ?? '',
    summary: doc.summary ?? '',
    coverImageUrl: doc.coverImageUrl ?? '',
    authorName: doc.authorName ?? '',
    authorRole: doc.authorRole ?? '',
    authorAvatarUrl: doc.authorAvatarUrl ?? '',
    category: (doc.category as IBlogPublicListItem['category']) ?? '',
    readTime: doc.readTime ?? '',
    tags: Array.isArray(doc.tags) ? doc.tags.filter(Boolean) : [],
    createdAt: doc.createdAt ?? new Date().toISOString(),
  }
}

function normalizeDetail(doc: SanityBlogDetail): IBlogPublicDetail {
  return {
    ...normalizeListItem(doc),
    contentHtml: '',
    body: Array.isArray(doc.body) ? doc.body : [],
    featuredOnHome: Boolean(doc.featuredOnHome),
    featuredOnBlogPage: Boolean(doc.featuredOnBlogPage),
  }
}

const fetchOptions = { next: { revalidate: 60 } }

export async function fetchPublicBlogList(params: PublicBlogListParams = {}) {
  const skip = params.skip ?? 0
  const limit = params.limit ?? 100
  const searchTerm = params.searchTerm?.trim() || ''
  const category = params.category && params.category !== 'all' ? params.category : ''

  const [items, total] = await Promise.all([
    client.fetch<SanityBlogListItem[]>(
      BLOG_LIST_QUERY,
      { start: skip, end: skip + limit, searchTerm, category },
      fetchOptions
    ),
    client.fetch<number>(BLOG_LIST_COUNT_QUERY, { searchTerm, category }, fetchOptions),
  ])

  const data = (items ?? []).map(normalizeListItem)
  const meta: IBlogListMetaPublic = {
    totalDoc: total ?? 0,
    limit,
    skip,
    hasMore: skip + data.length < (total ?? 0),
    page: Math.floor(skip / limit) + 1,
  }

  return { data, meta }
}

export async function fetchPublicBlogBySlug(slug: string) {
  const doc = await client.fetch<SanityBlogDetail | null>(BLOG_BY_SLUG_QUERY, { slug }, fetchOptions)
  return doc ? normalizeDetail(doc) : null
}

export async function fetchPublicBlogSlugs() {
  const slugs = await client.fetch<string[]>(BLOG_SLUGS_QUERY, {}, fetchOptions)
  return (slugs ?? []).filter(Boolean)
}

export async function fetchHomeBlogs() {
  const items = await client.fetch<SanityBlogListItem[]>(BLOG_HOME_QUERY, {}, fetchOptions)
  return (items ?? []).map(normalizeListItem)
}

export async function fetchFeaturedBlog() {
  const doc = await client.fetch<SanityBlogDetail | null>(BLOG_FEATURED_QUERY, {}, fetchOptions)
  return doc ? normalizeDetail(doc) : null
}

export async function fetchPublicCategories() {
  return (
    (await client.fetch<{ _id: string; name: string; slug: string }[]>(BLOG_CATEGORIES_QUERY, {}, fetchOptions)) ?? []
  )
}
