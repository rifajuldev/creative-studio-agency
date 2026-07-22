import type {
  IPortfolioCategory,
  IPortfolioListMetaPublic,
  IPortfolioPublicDetail,
  IPortfolioPublicListItem,
} from '@/interfaces/portfolio.interface'
import {
  fetchHomePortfolio,
  fetchPublicPortfolioBySlug,
  fetchPublicPortfolioCategories,
  fetchPublicPortfolioList,
} from '@/lib/portfolio/server'
import { api } from '@/redux/api/api'

type HomeResponse = {
  success: boolean
  data: IPortfolioPublicListItem[]
  message: string
}

type ListResponse = {
  success: boolean
  data: IPortfolioPublicListItem[]
  meta?: IPortfolioListMetaPublic
  message: string
}

type DetailResponse = {
  success: boolean
  data: IPortfolioPublicDetail
  message: string
}

export type PublicPortfolioListArg = {
  skip?: number
  limit?: number
  searchTerm?: string
  category?: string
}

const portfolioPublicApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHomePortfolio: builder.query<HomeResponse, void>({
      async queryFn() {
        try {
          const data = await fetchHomePortfolio()
          return { data: { success: true, data, message: 'OK' } }
        } catch (error) {
          return { error: { status: 500, data: String(error) } }
        }
      },
      providesTags: ['portfolioHome'],
    }),
    getPublicPortfolioList: builder.query<ListResponse, PublicPortfolioListArg>({
      async queryFn({ skip = 0, limit = 100, searchTerm, category }) {
        try {
          const { data, meta } = await fetchPublicPortfolioList({ skip, limit, searchTerm, category })
          return { data: { success: true, data, meta, message: 'OK' } }
        } catch (error) {
          return { error: { status: 500, data: String(error) } }
        }
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
      providesTags: ['portfolioPublicList'],
    }),
    getPublicPortfolioBySlug: builder.query<DetailResponse, string>({
      async queryFn(slug) {
        try {
          const data = await fetchPublicPortfolioBySlug(slug)
          if (!data) return { error: { status: 404, data: 'Not found' } }
          return { data: { success: true, data, message: 'OK' } }
        } catch (error) {
          return { error: { status: 500, data: String(error) } }
        }
      },
      providesTags: (_r, _e, slug) => [{ type: 'portfolioDetail' as const, id: slug }],
    }),
    getPublicPortfolioCategories: builder.query<
      { success: boolean; data: IPortfolioCategory[]; message: string },
      void
    >({
      async queryFn() {
        try {
          const data = await fetchPublicPortfolioCategories()
          return { data: { success: true, data, message: 'OK' } }
        } catch (error) {
          return { error: { status: 500, data: String(error) } }
        }
      },
      providesTags: ['portfolioCategories'],
    }),
  }),
})

export const {
  useGetHomePortfolioQuery,
  useGetPublicPortfolioListQuery,
  useGetPublicPortfolioBySlugQuery,
  useGetPublicPortfolioCategoriesQuery,
} = portfolioPublicApi
