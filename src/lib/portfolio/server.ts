import type {
  IPortfolioCategory,
  IPortfolioKpi,
  IPortfolioListMetaPublic,
  IPortfolioPublicDetail,
  IPortfolioPublicListItem,
  IPortfolioStrategyStep,
} from '@/interfaces/portfolio.interface'
import { client } from '@/sanity/client'
import {
  PORTFOLIO_BY_SLUG_QUERY,
  PORTFOLIO_CATEGORIES_QUERY,
  PORTFOLIO_HOME_QUERY,
  PORTFOLIO_INDEX_QUERY,
  PORTFOLIO_LIST_COUNT_QUERY,
  PORTFOLIO_LIST_QUERY,
  PORTFOLIO_SLUGS_QUERY,
} from '@/sanity/queries'

export type PublicPortfolioListParams = {
  skip?: number
  limit?: number
  searchTerm?: string
  category?: string
}

type SanityPortfolioListItem = {
  _id: string
  title?: string
  slug?: string
  summary?: string | null
  longDesc?: string | null
  coverImageUrl?: string | null
  tags?: string[] | null
  client?: string | null
  timeline?: string | null
  category?: string | null
  categoryId?: string | null
  featuredOnHome?: boolean
  homeDisplayOrder?: number
  homeTitle?: string | null
  homeSummary?: string | null
  createdAt?: string
}

type SanityPortfolioDetail = SanityPortfolioListItem & {
  challenge?: string | null
  solution?: string | null
  results?: string[] | null
  link?: string | null
  brandColors?: string[] | null
  techStack?: string[] | null
  strategySteps?: IPortfolioStrategyStep[] | null
  kpis?: IPortfolioKpi[] | null
}

function normalizeListItem(doc: SanityPortfolioListItem): IPortfolioPublicListItem {
  return {
    _id: doc._id,
    title: doc.title ?? '',
    slug: doc.slug ?? '',
    summary: doc.summary ?? '',
    longDesc: doc.longDesc ?? '',
    coverImageUrl: doc.coverImageUrl ?? '',
    tags: Array.isArray(doc.tags) ? doc.tags.filter(Boolean) : [],
    client: doc.client ?? '',
    timeline: doc.timeline ?? '',
    category: doc.category ?? '',
    categoryId: doc.categoryId ?? '',
    featuredOnHome: Boolean(doc.featuredOnHome),
    homeDisplayOrder: doc.homeDisplayOrder ?? 0,
    homeTitle: doc.homeTitle ?? '',
    homeSummary: doc.homeSummary ?? '',
    createdAt: doc.createdAt ?? new Date().toISOString(),
  }
}

function normalizeDetail(doc: SanityPortfolioDetail): IPortfolioPublicDetail {
  const list = normalizeListItem(doc)
  return {
    ...list,
    challenge: doc.challenge ?? '',
    solution: doc.solution ?? '',
    results: Array.isArray(doc.results) ? doc.results.filter(Boolean) : [],
    link: doc.link ?? '',
    brandColors: Array.isArray(doc.brandColors) ? doc.brandColors.filter(Boolean) : [],
    techStack: Array.isArray(doc.techStack) ? doc.techStack.filter(Boolean) : [],
    strategySteps: Array.isArray(doc.strategySteps)
      ? doc.strategySteps.map((step) => ({
          _key: step._key,
          phase: step.phase ?? '',
          title: step.title ?? '',
          desc: step.desc ?? '',
        }))
      : [],
    kpis: Array.isArray(doc.kpis)
      ? doc.kpis.map((kpi) => ({
          _key: kpi._key,
          label: kpi.label ?? '',
          value: kpi.value ?? '',
          desc: kpi.desc ?? '',
        }))
      : [],
  }
}

const fetchOptions = { next: { revalidate: 60 } }

export async function fetchPublicPortfolioList(params: PublicPortfolioListParams = {}) {
  const skip = params.skip ?? 0
  const limit = params.limit ?? 100
  const searchTerm = params.searchTerm?.trim() || ''
  const category = params.category && params.category !== 'all' ? params.category : ''

  const [items, total] = await Promise.all([
    client.fetch<SanityPortfolioListItem[]>(
      PORTFOLIO_LIST_QUERY,
      { start: skip, end: skip + limit, searchTerm, category },
      fetchOptions
    ),
    client.fetch<number>(PORTFOLIO_LIST_COUNT_QUERY, { searchTerm, category }, fetchOptions),
  ])

  const data = (items ?? []).map(normalizeListItem)
  const meta: IPortfolioListMetaPublic = {
    totalDoc: total ?? 0,
    limit,
    skip,
    hasMore: skip + data.length < (total ?? 0),
    page: Math.floor(skip / limit) + 1,
  }

  return { data, meta }
}

export async function fetchPublicPortfolioBySlug(slug: string) {
  const doc = await client.fetch<SanityPortfolioDetail | null>(PORTFOLIO_BY_SLUG_QUERY, { slug }, fetchOptions)
  return doc ? normalizeDetail(doc) : null
}

export async function fetchPublicPortfolioSlugs() {
  const slugs = await client.fetch<string[]>(PORTFOLIO_SLUGS_QUERY, {}, fetchOptions)
  return (slugs ?? []).filter(Boolean)
}

export async function fetchPortfolioIndex() {
  const items = await client.fetch<SanityPortfolioListItem[]>(PORTFOLIO_INDEX_QUERY, {}, fetchOptions)
  return (items ?? []).map(normalizeListItem)
}

export async function fetchHomePortfolio() {
  const items = await client.fetch<SanityPortfolioListItem[]>(PORTFOLIO_HOME_QUERY, {}, fetchOptions)
  return (items ?? []).map(normalizeListItem)
}

export async function fetchPublicPortfolioCategories() {
  return (await client.fetch<IPortfolioCategory[]>(PORTFOLIO_CATEGORIES_QUERY, {}, fetchOptions)) ?? []
}

export function getPortfolioSeoFromItem(project: IPortfolioPublicListItem) {
  return {
    title: `${project.title} — Case Study`,
    description: `${project.summary} Explore our ${project.category} portfolio project by NextCreavo.`.slice(0, 160),
    keywords: [project.title, project.category, ...project.tags, 'case study', 'portfolio', 'NextCreavo'],
    path: `/portfolio/${project.slug}`,
    image: project.coverImageUrl,
  }
}
