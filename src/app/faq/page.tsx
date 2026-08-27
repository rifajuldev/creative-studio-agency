import FAQPage from '@/FAQPage'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { pageKeywordSets } from '@/lib/seo/keywords'
import { staticPagesSeo } from '@/lib/seo/static-pages'
import { FAQ_PAGE_FAQS } from '@/lib/seo/structured-content'

export const metadata = staticPagesSeo.faq

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'FAQ | Pricing, Ads, SEO & Delivery | NextCreavo',
            'Answers on NextCreavo pricing, Google Ads spend, Meta campaigns, SEO timelines, Figma handoff, Shopify speed, security, billing and maintenance retainers.',
            '/faq',
            [...pageKeywordSets.faq]
          ),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
          faqPageJsonLd([...FAQ_PAGE_FAQS]),
        ]}
      />
      <FAQPage />
      <ServerTextBoost
        heading="Common NextCreavo FAQ topics explained"
        intro="Clients often ask how budgets, timelines, and ownership work across Google Ads, Meta ads, SEO, web builds, and retainers. These plain-language answers support both readers and search crawlers."
        items={FAQ_PAGE_FAQS.slice(0, 6).map((faq) => ({
          title: faq.question,
          summary: faq.answer,
        }))}
        outro="Still unsure? Send a brief via /contact and we will recommend the right mix of ads, SEO, web, apps, or AI for your goals."
      />
    </>
  )
}
