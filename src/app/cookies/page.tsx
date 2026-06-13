import CookiesPage from '@/CookiesPage'
import JsonLd from '@/components/seo/JsonLd'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.cookies

export default function CookiesRoutePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd('Cookie Policy', 'How NextCreavo uses cookies.', '/cookies')} />
      <CookiesPage />
    </>
  )
}
