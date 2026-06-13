import About from '@/About'
import JsonLd from '@/components/seo/JsonLd'
import { webPageJsonLd } from '@/lib/seo/json-ld'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.about

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd('About NextCreavo', 'Meet our creative studio team, values, and methodology.', '/about')}
      />
      <About />
    </>
  )
}
