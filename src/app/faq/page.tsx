import FAQPage from '@/FAQPage'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
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
      <ServerTextBoost
        heading="Common NextCreavo FAQ topics explained"
        intro="Clients often ask how budgets, timelines, and ownership work across Google Ads, Meta ads, SEO, web builds, and retainers. These plain-language answers support both readers and search crawlers."
        items={[
          {
            title: 'Do you manage Google Ads and Meta ads together?',
            summary:
              'Yes. Many brands run Search and Performance Max alongside Facebook and Instagram campaigns. We align audiences, creative, and conversion tracking across platforms.',
          },
          {
            title: 'Who owns the ad accounts?',
            summary:
              'You do. NextCreavo works inside your Google Ads, Meta Business Manager, LinkedIn, TikTok, or Twitter/X accounts whenever possible so assets stay with your business.',
          },
          {
            title: 'How long until SEO or Map Pack movement?',
            summary:
              'Local SEO and Google Business Profile improvements can show early signals within weeks, while competitive organic rankings usually take longer depending on authority and content velocity.',
          },
          {
            title: 'Can you rebuild our website on Next.js?',
            summary:
              'Yes. We design and develop high-performance Next.js sites, headless Shopify storefronts, and conversion-focused landing pages with Core Web Vitals in mind.',
          },
        ]}
        outro="Still unsure? Send a brief via /contact and we will recommend the right mix of ads, SEO, web, apps, or AI for your goals."
      />
    </>
  )
}
