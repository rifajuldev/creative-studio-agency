export type BlogCategory = 'Tech' | 'AI' | 'Design' | 'Marketing' | 'all'

export interface IBlogPublicListItem {
  _id: string
  title: string
  slug: string
  summary: string
  coverImageUrl: string
  authorName: string
  authorRole: string
  authorAvatarUrl: string
  category: Exclude<BlogCategory, 'all'> | ''
  readTime: string
  tags: string[]
  createdAt: string
}

export interface IBlogPublicDetail extends IBlogPublicListItem {
  contentHtml: string
  detailMidImageUrl: string
  featuredOnHome: boolean
  featuredOnBlogPage: boolean
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
