import About from '@/About'
import JsonLd from '@/components/seo/JsonLd'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { pageKeywordSets } from '@/lib/seo/keywords'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.about

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          'About NextCreavo | Social Ads & Creative Studio Team',
          'Meet NextCreavo — media buyers and creatives for Facebook, Instagram, TikTok, LinkedIn, Twitter/X, Google Ads, SEO, web, apps and AI-powered brand growth.',
          '/about',
          [...pageKeywordSets.about]
        )}
      />
      <About />
    </>
  )
}
