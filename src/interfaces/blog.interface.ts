export type BlogCategory = 'Tech' | 'AI' | 'Design' | 'Marketing' | 'all'

/** Minimal Portable Text block shape used by next-sanity PortableText */
export type PortableTextBlock = {
  _type: string
  _key?: string
  [key: string]: unknown
}

export interface BlogFaq {
  question: string
  answer: string
}

export interface BlogRelatedLink {
  label: string
  href: string
}

export interface IBlogPublicListItem {
  _id: string
  title: string
  slug: string
  summary: string
  coverImageUrl: string
  authorName: string
  authorRole: string
  authorAvatarUrl: string
  category: Exclude<BlogCategory, 'all'> | string
  readTime: string
  tags: string[]
  createdAt: string
  /** Seed + live extras. First paint uses dummy seeds; API increments unique readers. */
  viewCount?: number
}

export interface IBlogPublicDetail extends IBlogPublicListItem {
  /** @deprecated Prefer `body` (Portable Text). Kept for transitional UI. */
  contentHtml: string
  body: PortableTextBlock[]
  featuredOnHome: boolean
  featuredOnBlogPage: boolean
  faqs?: BlogFaq[]
  relatedServices?: BlogRelatedLink[]
  relatedPostSlugs?: string[]
  wordCount?: number
}

export interface IBlogListMetaPublic {
  totalDoc: number
  limit: number
  skip?: number
  hasMore: boolean
  page: number
}

export function formatBlogDate(iso: string, locale = 'en-US'): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' })
}

export function formatBlogDateShort(iso: string, locale = 'en-US'): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' })
}
