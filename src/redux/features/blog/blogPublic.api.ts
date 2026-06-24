import type { IBlogListMetaPublic, IBlogPublicDetail, IBlogPublicListItem } from '@/interfaces/blog.interface'
import { api } from '@/redux/api/api'

type HomeResponse = {
  success: boolean
  data: IBlogPublicListItem[]
  message: string
}

type ListResponse = {
  success: boolean
  data: IBlogPublicListItem[]
  meta?: IBlogListMetaPublic
  message: string
}

type FeaturedResponse = {
  success: boolean
  data: IBlogPublicDetail | null
  message: string
}

type DetailResponse = {
  success: boolean
  data: IBlogPublicDetail
  message: string
}

export type PublicBlogListArg = {
  skip?: number
  limit?: number
  searchTerm?: string
  category?: string
}

const blogPublicApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHomeBlogs: builder.query<HomeResponse, void>({
      query: () => '/blog/public/home',
      providesTags: ['blogHome'],
    }),
    getPublicFeaturedBlog: builder.query<FeaturedResponse, void>({
      query: () => '/blog/public/featured',
      providesTags: ['blogFeatured'],
    }),
    getPublicBlogList: builder.query<ListResponse, PublicBlogListArg>({
      query: ({ skip = 0, limit = 6, searchTerm, category }) => {
        const sp = new URLSearchParams()
        sp.set('skip', String(skip))
        sp.set('limit', String(limit))
        if (searchTerm?.trim()) sp.set('searchTerm', searchTerm.trim())
        if (category && category !== 'all') sp.set('category', category)
        return `/blog/public/list?${sp.toString()}`
      },
      serializeQueryArgs: ({ queryArgs }) => {
        return `${queryArgs.searchTerm || ''}_${queryArgs.category || ''}`
      },
      merge: (currentCache, newItems, { arg }) => {
        if (!arg.skip || arg.skip === 0) {
          currentCache.data = newItems.data
          currentCache.meta = newItems.meta
        } else {
          currentCache.data.push(...newItems.data)
          currentCache.meta = newItems.meta
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return (
          currentArg?.skip !== previousArg?.skip ||
          currentArg?.searchTerm !== previousArg?.searchTerm ||
          currentArg?.category !== previousArg?.category
        )
      },
      providesTags: ['blogPublicList'],
    }),
    getPublicBlogBySlug: builder.query<DetailResponse, string>({
      query: (slug) => `/blog/public/by-slug/${encodeURIComponent(slug)}`,
      providesTags: (_r, _e, slug) => [{ type: 'blogDetail' as const, id: slug }],
    }),
    getPublicCategories: builder.query<
      { success: boolean; data: { _id: string; name: string; slug: string }[]; message: string },
      void
    >({
      query: () => '/blog/public/categories',
      providesTags: ['blogCategories'],
    }),
  }),
})

export const {
  useGetHomeBlogsQuery,
  useGetPublicFeaturedBlogQuery,
  useGetPublicBlogListQuery,
  useLazyGetPublicBlogListQuery,
  useGetPublicBlogBySlugQuery,
  useGetPublicCategoriesQuery,
} = blogPublicApi
