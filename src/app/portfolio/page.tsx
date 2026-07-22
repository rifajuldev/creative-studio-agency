import Portfolio from '@/Portfolio'
import JsonLd from '@/components/seo/JsonLd'
import { fetchPortfolioIndex } from '@/lib/portfolio/server'
import { itemListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { pageKeywordSets } from '@/lib/seo/keywords'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.portfolio

export default async function PortfolioPage() {
  const projects = await fetchPortfolioIndex()

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'Case Studies | Ads, SEO, Web & Brand Results | NextCreavo',
            'See real NextCreavo wins — Google Ads ROAS, Instagram growth, Map Pack rankings, high-converting websites, apps, AI products and motion design case studies.',
            '/portfolio',
            [...pageKeywordSets.portfolio]
          ),
          itemListJsonLd(
            'NextCreavo Portfolio Case Studies',
            '/portfolio',
            projects.map((p) => ({ name: p.title, url: `/portfolio/${p.slug}` }))
          ),
        ]}
      />
      <Portfolio />
    </>
  )
}
