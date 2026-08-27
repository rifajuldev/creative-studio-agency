import HomePage from '@/components/home/HomePage'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { siteConfig } from '@/lib/seo/site'
import { staticPagesSeo } from '@/lib/seo/static-pages'
import { HOME_FAQS } from '@/lib/seo/structured-content'

export const metadata = staticPagesSeo.home

const HOME_TITLE = 'NextCreavo | Official Website'

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(HOME_TITLE, siteConfig.description, '/', [...siteConfig.defaultKeywords.slice(0, 12)]),
          breadcrumbJsonLd([{ name: 'Home', path: '/' }]),
          faqPageJsonLd([...HOME_FAQS]),
        ]}
      />
      <HomePage />
      <ServerTextBoost
        heading="AI, React, Next.js, and custom software"
        intro="NextCreavo builds AI workflow automation, custom chatbots, React and Next.js products, and custom software for teams in Singapore and globally. Open a service, industry, or location page for the full brief — this homepage is the studio overview."
        items={[
          {
            title: 'AI & automation',
            href: '/services/ai-automation',
            summary: 'Workflow automation, agents, and custom chatbot development for support and ops.',
          },
          {
            title: 'React & Next.js',
            href: '/services/react-development',
            summary: 'React development agency work, Next.js apps, and nearshore React squads.',
          },
          {
            title: 'Custom software',
            href: '/services/custom-software-development',
            summary: 'Portals, internal tools, and industry systems — including construction and travel.',
          },
          {
            title: 'Singapore & locations',
            href: '/locations/singapore',
            summary: 'Custom software development Singapore and AI product engineering with SGT overlap.',
          },
        ]}
        outro="Explore /services, /industries, /locations, /portfolio and /contact when you are ready to brief a project."
      />
    </>
  )
}
