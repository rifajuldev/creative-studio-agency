import PrivacyPage from '@/PrivacyPage'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.privacy

export default function PrivacyRoutePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd('Privacy Policy', 'How NextCreavo handles your data.', '/privacy'),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Privacy Policy', path: '/privacy' },
          ]),
        ]}
      />
      <PrivacyPage />
      <ServerTextBoost
        heading="Privacy summary for NextCreavo visitors and clients"
        intro="NextCreavo collects only what is needed to respond to project inquiries, deliver services, secure the website, and measure marketing performance. We do not sell personal data."
        items={[
          {
            title: 'Information we may collect',
            summary:
              'Name, email, phone, company details, project notes from forms, and technical logs such as IP address, device type, and pages viewed for security and analytics.',
          },
          {
            title: 'How we use it',
            summary:
              'To reply to briefs, prepare proposals, deliver web/marketing/design work, improve the site, and attribute leads from Google Ads, Meta, LinkedIn, TikTok, or other campaigns.',
          },
          {
            title: 'Your choices',
            summary:
              'Request access, correction, or deletion by emailing info@nextcreavo.com. You can also control cookies in your browser and review our Cookie Policy for advertising technologies.',
          },
        ]}
        outro="Full details are in the Privacy Policy sections above. Related pages: /cookies, /terms, and /contact."
      />
    </>
  )
}
