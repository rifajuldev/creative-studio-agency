import type { IBlogListMetaPublic, IBlogPublicDetail, IBlogPublicListItem } from '@/interfaces/blog.interface'
import { baseUrl } from '@/redux/api/api'

type ApiResponse<T> = {
  success: boolean
  data: T
  meta?: IBlogListMetaPublic
  message: string
}

export type PublicBlogListParams = {
  skip?: number
  limit?: number
  searchTerm?: string
  category?: string
}

async function fetchBlogApi<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${baseUrl}${path}`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

export async function fetchPublicBlogList(params: PublicBlogListParams = {}) {
  const sp = new URLSearchParams()
  sp.set('skip', String(params.skip ?? 0))
  sp.set('limit', String(params.limit ?? 100))
  if (params.searchTerm?.trim()) sp.set('searchTerm', params.searchTerm.trim())
  if (params.category && params.category !== 'all') sp.set('category', params.category)

  const json = await fetchBlogApi<ApiResponse<IBlogPublicListItem[]>>(`/blog/public/list?${sp.toString()}`)
  return json?.data ?? []
}

export async function fetchPublicBlogBySlug(slug: string) {
  const json = await fetchBlogApi<ApiResponse<IBlogPublicDetail>>(`/blog/public/by-slug/${encodeURIComponent(slug)}`)
  return json?.data ?? null
}

export async function fetchPublicBlogSlugs() {
  const posts = await fetchPublicBlogList({ skip: 0, limit: 500 })
  return posts.map((p) => p.slug)
}

export async function fetchHomeBlogs() {
  const json = await fetchBlogApi<ApiResponse<IBlogPublicListItem[]>>('/blog/public/home')
  return json?.data ?? []
}

export async function fetchFeaturedBlog() {
  const json = await fetchBlogApi<ApiResponse<IBlogPublicDetail | null>>('/blog/public/featured')
  return json?.data ?? null
}
