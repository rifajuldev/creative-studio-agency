import Portfolio from '@/Portfolio'
import JsonLd from '@/components/seo/JsonLd'
import { portfolioListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.portfolio

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'NextCreavo Portfolio',
            'Case studies across animation, marketing, web, apps, AI, and design.',
            '/portfolio'
          ),
          portfolioListJsonLd(),
        ]}
      />
      <Portfolio />
    </>
  )
}
