import Portfolio from '@/Portfolio'
import JsonLd from '@/components/seo/JsonLd'
import { fetchPublicPortfolioBySlug, fetchPublicPortfolioSlugs, getPortfolioSeoFromItem } from '@/lib/portfolio/server'
import { breadcrumbJsonLd, portfolioProjectJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  const slugs = await fetchPublicPortfolioSlugs()
  return slugs.map((slug) => ({ id: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = await fetchPublicPortfolioBySlug(id)
  if (!project) return { title: 'Project Not Found' }
  const seo = getPortfolioSeoFromItem(project)
  return buildPageMetadata({ ...seo, type: 'article' })
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params
  const project = await fetchPublicPortfolioBySlug(id)
  if (!project) notFound()

  const seo = getPortfolioSeoFromItem(project)
  const projectLd = portfolioProjectJsonLd(project)

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(seo.title, seo.description, seo.path),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: seo.title, path: seo.path },
          ]),
          ...(projectLd ? [projectLd] : []),
        ]}
      />
      <Portfolio initialProject={project} />
    </>
  )
}
