import CookiesPage from '@/CookiesPage'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { breadcrumbJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.cookies

export default function CookiesRoutePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd('Cookie Policy', 'How NextCreavo uses cookies.', '/cookies'),
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Cookie Policy', path: '/cookies' },
          ]),
        ]}
      />
      <CookiesPage />
      <ServerTextBoost
        heading="Cookie usage on nextcreavo.com — plain language"
        intro="Cookies help NextCreavo run a secure site, remember preferences, understand traffic, and measure campaigns on Google, Facebook, Instagram, LinkedIn, TikTok, and Twitter/X."
        items={[
          {
            title: 'Essential cookies',
            summary: 'Required for security, load balancing, and submitting contact or booking forms reliably.',
          },
          {
            title: 'Analytics cookies',
            summary: 'Help us review aggregated page performance in tools such as Google Analytics and improve UX.',
          },
          {
            title: 'Marketing cookies',
            summary:
              'May be set by ad platforms when you arrive from paid or social campaigns so we can attribute leads and improve creative.',
          },
          {
            title: 'Your controls',
            summary:
              'Block or delete cookies in browser settings. Disabling marketing cookies limits measurement but the site still works. See /privacy for personal data rights.',
          },
        ]}
        outro="For cookie or privacy requests, email info@nextcreavo.com."
      />
    </>
  )
}
