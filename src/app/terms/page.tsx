import TermsPage from '@/TermsPage'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.terms

export default function TermsRoutePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd('Terms of Service', 'NextCreavo terms and conditions.', '/terms'),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Terms of Service', path: '/terms' },
          ]),
        ]}
      />
      <TermsPage />
      <ServerTextBoost
        heading="Terms summary for NextCreavo services"
        intro="These points summarize how engagements work for website visitors and clients hiring NextCreavo for ads, SEO, creative, web, apps, or AI work."
        items={[
          {
            title: 'Agreements and scope',
            summary:
              'A written proposal or statement of work defines deliverables, timeline, fees, and revision rounds. Platform media spend is usually separate from agency fees.',
          },
          {
            title: 'Accounts and ownership',
            summary:
              'Clients retain ownership of ad accounts and brand assets. NextCreavo retains pre-existing tools and may showcase work unless an NDA restricts publication.',
          },
          {
            title: 'Results and liability',
            summary:
              'Marketing and SEO outcomes vary by competition and budget. We provide professional services without guaranteeing specific rankings or revenue.',
          },
        ]}
        outro="Questions about contracts or retainers: info@nextcreavo.com. See also /privacy and /cookies."
      />
    </>
  )
}
