import { permanentRedirect } from 'next/navigation'

/** Alias for SEO IA — case studies live in /portfolio */
export default function CaseStudiesAliasPage() {
  permanentRedirect('/portfolio')
}
