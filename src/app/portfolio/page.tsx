import Portfolio from '@/Portfolio'
import JsonLd from '@/components/seo/JsonLd'
import { fetchPortfolioIndex } from '@/lib/portfolio/server'
import { itemListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.portfolio

export default async function PortfolioPage() {
  const projects = await fetchPortfolioIndex()

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'NextCreavo Portfolio',
            'Case studies across animation, marketing, web, apps, AI, and design.',
            '/portfolio'
          ),
          itemListJsonLd(
            'NextCreavo Portfolio',
            '/portfolio',
            projects.map((p) => ({ name: p.title, url: `/portfolio/${p.slug}` }))
          ),
        ]}
      />
      <Portfolio />
    </>
  )
}
