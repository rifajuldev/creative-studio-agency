import { defineQuery } from 'next-sanity'

const blogListProjection = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  summary,
  "coverImageUrl": coverImage.asset->url,
  authorName,
  authorRole,
  "authorAvatarUrl": authorAvatar.asset->url,
  "category": category->name,
  readTime,
  tags,
  "createdAt": _createdAt,
  featuredOnHome,
  featuredOnBlogPage,
  homeDisplayOrder
`

const bodyProjection = /* groq */ `
  body[]{
    ...,
    _type == "pteImage" => {
      ...,
      image{
        ...,
        asset->{
          _id,
          url,
          metadata {
            lqip,
            dimensions
          }
        }
      }
    }
  }
`

const blogDetailProjection = /* groq */ `
  ${blogListProjection},
  ${bodyProjection}
`

const portfolioListProjection = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  summary,
  longDesc,
  "coverImageUrl": coalesce(coverImage.asset->url, coverImageUrl),
  tags,
  client,
  timeline,
  "category": category->name,
  "categoryId": category->slug.current,
  featuredOnHome,
  homeDisplayOrder,
  homeTitle,
  homeSummary,
  "createdAt": _createdAt
`

const portfolioDetailProjection = /* groq */ `
  ${portfolioListProjection},
  challenge,
  solution,
  results,
  link,
  brandColors,
  techStack,
  strategySteps[]{
    _key,
    phase,
    title,
    desc
  },
  kpis[]{
    _key,
    label,
    value,
    desc
  }
`

export const BLOG_CATEGORIES_QUERY = defineQuery(`
  *[_type == "blogCategory"] | order(name asc) {
    _id,
    name,
    "slug": slug.current
  }
`)

export const BLOG_LIST_QUERY = defineQuery(`
  *[
    _type == "blogPost"
    && defined(slug.current)
    && (
      !defined($searchTerm)
      || $searchTerm == ""
      || title match $searchTerm + "*"
      || summary match $searchTerm + "*"
      || pt::text(body) match $searchTerm + "*"
    )
    && (
      !defined($category)
      || $category == ""
      || $category == "all"
      || category->name == $category
    )
  ]
  | order(_createdAt desc) [$start...$end] {
    ${blogListProjection}
  }
`)

export const BLOG_LIST_COUNT_QUERY = defineQuery(`
  count(*[
    _type == "blogPost"
    && defined(slug.current)
    && (
      !defined($searchTerm)
      || $searchTerm == ""
      || title match $searchTerm + "*"
      || summary match $searchTerm + "*"
      || pt::text(body) match $searchTerm + "*"
    )
    && (
      !defined($category)
      || $category == ""
      || $category == "all"
      || category->name == $category
    )
  ])
`)

export const BLOG_BY_SLUG_QUERY = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    ${blogDetailProjection}
  }
`)

export const BLOG_SLUGS_QUERY = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)].slug.current
`)

export const BLOG_HOME_QUERY = defineQuery(`
  *[_type == "blogPost" && featuredOnHome == true && defined(slug.current)]
  | order(homeDisplayOrder asc, _createdAt desc) [0...6] {
    ${blogListProjection}
  }
`)

export const BLOG_FEATURED_QUERY = defineQuery(`
  *[_type == "blogPost" && featuredOnBlogPage == true && defined(slug.current)]
  | order(_createdAt desc) [0] {
    ${blogDetailProjection}
  }
`)

export const PORTFOLIO_CATEGORIES_QUERY = defineQuery(`
  *[_type == "portfolioCategory"] | order(displayOrder asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    displayOrder,
    "count": count(*[_type == "portfolioProject" && references(^._id) && defined(slug.current)])
  }
`)

export const PORTFOLIO_LIST_QUERY = defineQuery(`
  *[
    _type == "portfolioProject"
    && defined(slug.current)
    && (
      !defined($searchTerm)
      || $searchTerm == ""
      || title match $searchTerm + "*"
      || summary match $searchTerm + "*"
      || client match $searchTerm + "*"
      || count((tags[_])[@ match $searchTerm + "*"]) > 0
    )
    && (
      !defined($category)
      || $category == ""
      || $category == "all"
      || category->slug.current == $category
    )
  ]
  | order(_createdAt desc) [$start...$end] {
    ${portfolioListProjection}
  }
`)

export const PORTFOLIO_LIST_COUNT_QUERY = defineQuery(`
  count(*[
    _type == "portfolioProject"
    && defined(slug.current)
    && (
      !defined($searchTerm)
      || $searchTerm == ""
      || title match $searchTerm + "*"
      || summary match $searchTerm + "*"
      || client match $searchTerm + "*"
      || count((tags[_])[@ match $searchTerm + "*"]) > 0
    )
    && (
      !defined($category)
      || $category == ""
      || $category == "all"
      || category->slug.current == $category
    )
  ])
`)

export const PORTFOLIO_BY_SLUG_QUERY = defineQuery(`
  *[_type == "portfolioProject" && slug.current == $slug][0] {
    ${portfolioDetailProjection}
  }
`)

export const PORTFOLIO_SLUGS_QUERY = defineQuery(`
  *[_type == "portfolioProject" && defined(slug.current)].slug.current
`)

export const PORTFOLIO_INDEX_QUERY = defineQuery(`
  *[_type == "portfolioProject" && defined(slug.current)]
  | order(_createdAt desc) {
    ${portfolioListProjection}
  }
`)

export const PORTFOLIO_HOME_QUERY = defineQuery(`
  *[_type == "portfolioProject" && featuredOnHome == true && defined(slug.current)]
  | order(homeDisplayOrder asc, _createdAt desc) [0...6] {
    ${portfolioListProjection}
  }
`)
