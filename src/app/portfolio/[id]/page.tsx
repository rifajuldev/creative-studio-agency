import Portfolio from '@/Portfolio'
import JsonLd from '@/components/seo/JsonLd'
import { getPortfolioSeo, PORTFOLIO_INDEX } from '@/data/portfolioIndex'
import { breadcrumbJsonLd, portfolioProjectJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { buildPageMetadata } from '@/lib/seo/metadata'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: Promise<{ id: string }> }

export async function generateStaticParams() {
  return PORTFOLIO_INDEX.map((project) => ({ id: project.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const seo = getPortfolioSeo(id)
  if (!seo) return { title: 'Project Not Found' }
  return buildPageMetadata({ ...seo, type: 'article' })
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { id } = await params
  const seo = getPortfolioSeo(id)
  if (!seo) notFound()

  const projectLd = portfolioProjectJsonLd(id)

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
      <Portfolio />
    </>
  )
}
