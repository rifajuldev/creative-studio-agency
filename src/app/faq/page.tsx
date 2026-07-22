import FAQPage from '@/FAQPage'
import JsonLd from '@/components/seo/JsonLd'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { pageKeywordSets } from '@/lib/seo/keywords'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.faq

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          'FAQ | Pricing, Ads, SEO, Delivery & Retainers',
          'Answers on NextCreavo pricing, Google Ads spend, Meta campaigns, SEO timelines, Figma handoff, Shopify speed, security, billing and maintenance retainers.',
          '/faq',
          [...pageKeywordSets.faq]
        )}
      />
      <FAQPage />
    </>
  )
}
