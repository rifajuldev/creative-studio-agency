import HomePage from '@/components/home/HomePage'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { SERVICE_LANDING_PAGES } from '@/data/servicePages'
import { breadcrumbJsonLd, faqPageJsonLd, reviewJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { siteConfig } from '@/lib/seo/site'
import { staticPagesSeo } from '@/lib/seo/static-pages'
import { HOME_FAQS } from '@/lib/seo/structured-content'

export const metadata = staticPagesSeo.home

const HOME_TITLE = 'Web, Marketing, Animation & AI | NextCreavo'

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(HOME_TITLE, siteConfig.description, '/', [...siteConfig.defaultKeywords.slice(0, 12)]),
          breadcrumbJsonLd([{ name: 'Home', path: '/' }]),
          faqPageJsonLd([...HOME_FAQS]),
          reviewJsonLd(),
        ]}
      />
      <HomePage />
      <ServerTextBoost
        heading="NextCreavo — Web, Marketing, Animation & AI creative studio"
        intro={siteConfig.description}
        items={SERVICE_LANDING_PAGES.map((service) => ({
          title: service.primaryKeyword,
          href: `/services/${service.slug}`,
          summary: service.shortDesc,
        }))}
        outro="UI/UX, web development, mobile apps, 2D & modern animation, AI integration, chatbots, SaaS, custom software — plus Google Ads, Facebook Ads, GMB, social media, SEO and technical SEO. Explore /services, /industries, /locations, /portfolio and /contact."
      />
    </>
  )
}
