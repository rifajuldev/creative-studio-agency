import { GoogleAnalytics, GoogleTagManagerBody, GoogleTagManagerHead } from '@/components/seo/GoogleTags'
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManagerHead />
      </head>
      <body>
        <GoogleTagManagerBody />
        <GoogleAnalytics />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
