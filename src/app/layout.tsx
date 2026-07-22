import GoogleTag from '@/components/seo/GoogleTags'
import JsonLd from '@/components/seo/JsonLd'
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo/json-ld'
import { buildDefaultMetadata } from '@/lib/seo/metadata'
import ClientProviders from '@/providers/ClientProviders'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = buildDefaultMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/plain" href="/llm.txt" title="LLM.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLMs full context" />
        <GoogleTag />
      </head>
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
