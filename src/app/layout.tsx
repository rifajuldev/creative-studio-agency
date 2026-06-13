import ClientProviders from '@/providers/ClientProviders'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextCreavo | Creative Studio Agency',
  description: 'Crafting digital ecosystems for modern brands.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
