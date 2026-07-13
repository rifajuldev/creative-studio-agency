export interface IPortfolioCategory {
  _id: string
  name: string
  slug: string
  description: string
  displayOrder: number
  count?: number
}

export interface IPortfolioStrategyStep {
  _key?: string
  phase: string
  title: string
  desc: string
}

export interface IPortfolioKpi {
  _key?: string
  label: string
  value: string
  desc: string
}

export interface IPortfolioPublicListItem {
  _id: string
  title: string
  slug: string
  summary: string
  longDesc: string
  coverImageUrl: string
  tags: string[]
  client: string
  timeline: string
  category: string
  categoryId: string
  featuredOnHome: boolean
  homeDisplayOrder: number
  homeTitle: string
  homeSummary: string
  createdAt: string
}

export interface IPortfolioPublicDetail extends IPortfolioPublicListItem {
  challenge: string
  solution: string
  results: string[]
  link: string
  brandColors: string[]
  techStack: string[]
  strategySteps: IPortfolioStrategyStep[]
  kpis: IPortfolioKpi[]
}

export interface IPortfolioListMetaPublic {
  totalDoc: number
  limit: number
  skip?: number
  hasMore: boolean
  page: number
}
