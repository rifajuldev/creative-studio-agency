import About from '@/About'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
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
      <ServerTextBoost
        heading="Who NextCreavo is and how we work"
        intro="NextCreavo is a creative studio agency built for measurable growth. Strategists, designers, developers, and media buyers collaborate on brand systems, websites, paid acquisition, and product experiences."
        items={[
          {
            title: 'Performance creative + media',
            summary:
              'We plan and run Google Ads, Meta Facebook & Instagram ads, LinkedIn, TikTok, and Twitter/X campaigns with creative testing, tracking, and ROAS-focused iteration.',
          },
          {
            title: 'Search and local visibility',
            summary:
              'Technical SEO, content, and Google Business Profile optimization help brands earn organic clicks and Map Pack presence where local demand matters.',
          },
          {
            title: 'Product and engineering craft',
            summary:
              'Next.js websites, headless commerce, mobile apps, UI/UX systems, 2D animation, and AI integrations ship with performance and conversion in mind.',
          },
          {
            title: 'Partnership model',
            summary:
              'Engagements start with a clear brief and proposal. Retainers and project builds include reporting, collaboration rituals, and transparent deliverables.',
          },
        ]}
        outro="Ready to meet the team on a live call? Visit /contact to start your project brief."
      />
    </>
  )
}
