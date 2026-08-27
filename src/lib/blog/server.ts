import { LOCAL_BLOG_POSTS, getLocalBlogBySlug, getLocalBlogListItems, getLocalCategories } from '@/data/localBlogs'
import type {
  IBlogListMetaPublic,
  IBlogPublicDetail,
  IBlogPublicListItem,
  PortableTextBlock,
} from '@/interfaces/blog.interface'
import { seedViewsForSlug } from '@/lib/blog/view-seeds'
import { client } from '@/sanity/client'
import {
  BLOG_BY_SLUG_QUERY,
  BLOG_CATEGORIES_QUERY,
  BLOG_FEATURED_QUERY,
  BLOG_HOME_QUERY,
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
    viewCount: seedViewsForSlug(doc.slug ?? ''),
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

async function fetchSanityList(): Promise<IBlogPublicListItem[]> {
  try {
    const items = await client.fetch<SanityBlogListItem[]>(
      BLOG_LIST_QUERY,
      { start: 0, end: 500, searchTerm: '', category: '' },
      fetchOptions
    )
    return (items ?? []).map(normalizeListItem)
  } catch {
    return []
  }
}

function matchesFilters(post: IBlogPublicListItem, searchTerm: string, category: string) {
  if (category && post.category !== category) return false
  if (!searchTerm) return true
  const haystack = [post.title, post.summary, post.tags.join(' '), post.category].join(' ').toLowerCase()
  return haystack.includes(searchTerm)
}

function mergeBySlug(sanity: IBlogPublicListItem[], local: IBlogPublicListItem[]) {
  const seen = new Set<string>()
  const merged: IBlogPublicListItem[] = []
  for (const post of [...sanity, ...local]) {
    if (!post.slug || seen.has(post.slug)) continue
    seen.add(post.slug)
    merged.push(post)
  }
  merged.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
  return merged
}

function withSeedViews<T extends IBlogPublicListItem>(posts: T[]): T[] {
  return posts.map((post) => ({ ...post, viewCount: seedViewsForSlug(post.slug) }))
}

function toListItem(post: IBlogPublicDetail): IBlogPublicListItem {
  return {
    _id: post._id,
    title: post.title,
    slug: post.slug,
    summary: post.summary,
    coverImageUrl: post.coverImageUrl,
    authorName: post.authorName,
    authorRole: post.authorRole,
    authorAvatarUrl: post.authorAvatarUrl,
    category: post.category,
    readTime: post.readTime,
    tags: post.tags,
    createdAt: post.createdAt,
    viewCount: post.viewCount,
  }
}

export async function fetchPublicBlogList(params: PublicBlogListParams = {}) {
  const skip = params.skip ?? 0
  const limit = params.limit ?? 100
  const searchTerm = params.searchTerm?.trim().toLowerCase() || ''
  const category = params.category && params.category !== 'all' ? params.category : ''

  const sanity = await fetchSanityList()
  const merged = mergeBySlug(sanity, getLocalBlogListItems())
  const filtered = merged.filter((post) => matchesFilters(post, searchTerm, category))
  const page = filtered.slice(skip, skip + limit)
  const data = withSeedViews(page)

  const meta: IBlogListMetaPublic = {
    totalDoc: filtered.length,
    limit,
    skip,
    hasMore: skip + page.length < filtered.length,
    page: Math.floor(skip / limit) + 1,
  }

  return { data, meta }
}

export async function fetchPublicBlogBySlug(slug: string) {
  let sanity: IBlogPublicDetail | null = null
  try {
    const doc = await client.fetch<SanityBlogDetail | null>(BLOG_BY_SLUG_QUERY, { slug }, fetchOptions)
    sanity = doc ? normalizeDetail(doc) : null
  } catch {
    sanity = null
  }

  const local = getLocalBlogBySlug(slug)
  const post = sanity ?? local
  if (!post) return null

  return { ...post, viewCount: seedViewsForSlug(slug) }
}

export async function fetchPublicBlogSlugs() {
  let sanitySlugs: string[] = []
  try {
    sanitySlugs = ((await client.fetch<string[]>(BLOG_SLUGS_QUERY, {}, fetchOptions)) ?? []).filter(Boolean)
  } catch {
    sanitySlugs = []
  }
  return [...new Set([...LOCAL_BLOG_POSTS.map((post) => post.slug), ...sanitySlugs])]
}

export async function fetchHomeBlogs() {
  let sanity: IBlogPublicListItem[] = []
  try {
    const items = await client.fetch<SanityBlogListItem[]>(BLOG_HOME_QUERY, {}, fetchOptions)
    sanity = (items ?? []).map(normalizeListItem)
  } catch {
    sanity = []
  }

  const localHome = LOCAL_BLOG_POSTS.filter((post) => post.featuredOnHome).map(toListItem)
  const merged = mergeBySlug(sanity, localHome).slice(0, 6)
  if (merged.length) return withSeedViews(merged)
  const fallback = await fetchPublicBlogList({ skip: 0, limit: 3 })
  return fallback.data
}

export async function fetchFeaturedBlog() {
  const localFeatured = LOCAL_BLOG_POSTS.find((post) => post.featuredOnBlogPage) ?? LOCAL_BLOG_POSTS[0] ?? null
  let sanity: IBlogPublicDetail | null = null
  try {
    const doc = await client.fetch<SanityBlogDetail | null>(BLOG_FEATURED_QUERY, {}, fetchOptions)
    sanity = doc ? normalizeDetail(doc) : null
  } catch {
    sanity = null
  }

  const post = localFeatured ?? sanity
  if (!post) return null
  return { ...post, viewCount: seedViewsForSlug(post.slug) }
}

export async function fetchPublicCategories() {
  let sanity: { _id: string; name: string; slug: string }[] = []
  try {
    sanity =
      (await client.fetch<{ _id: string; name: string; slug: string }[]>(BLOG_CATEGORIES_QUERY, {}, fetchOptions)) ?? []
  } catch {
    sanity = []
  }

  const byName = new Map<string, { _id: string; name: string; slug: string }>()
  for (const category of [...getLocalCategories(), ...sanity]) {
    if (!category.name || byName.has(category.name)) continue
    byName.set(category.name, category)
  }
  return [...byName.values()].sort((a, b) => a.name.localeCompare(b.name))
}
