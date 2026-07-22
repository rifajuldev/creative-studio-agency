'use client'

import { urlForImage } from '@/sanity/image'
import type { PortableTextComponents } from 'next-sanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

type PortableTextBodyProps = {
  value: unknown[]
}

type PteImageValue = {
  _key?: string
  alt?: string
  caption?: string
  image?: {
    asset?: { _ref?: string; _id?: string; url?: string; metadata?: { lqip?: string } }
    hotspot?: unknown
    crop?: unknown
    alt?: string
  }
}

type LinkMarkValue = {
  href?: string
  openInNewTab?: boolean
}

function PteImageBlock({ value }: { value: PteImageValue }) {
  if (!value?.image?.asset) return null

  const alt = value.alt || value.image.alt || ''
  const fallbackUrl = value.image.asset.url
  let src = fallbackUrl || ''
  try {
    src = urlForImage(value.image).width(1200).fit('max').auto('format').url()
  } catch {
    // Fall back to the CDN URL from GROQ when the builder cannot resolve the asset.
  }
  if (!src) return null

  return (
    <figure className="blog-prose-figure">
      <div className="border-border-primary/40 overflow-hidden rounded-3xl border">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="h-auto w-full object-cover"
          sizes="(max-width: 800px) 100vw, 800px"
          placeholder={value.image.asset.metadata?.lqip ? 'blur' : 'empty'}
          blurDataURL={value.image.asset.metadata?.lqip}
        />
      </div>
      {value.caption ? <figcaption className="blog-prose-caption">{value.caption}</figcaption> : null}
    </figure>
  )
}

function LinkMark({ children, value }: { children: ReactNode; value?: LinkMarkValue }) {
  const href = value?.href || '#'
  const isExternal = /^https?:\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:')
  const openInNewTab = value?.openInNewTab ?? isExternal

  if (!isExternal && href.startsWith('/')) {
    return (
      <Link href={href} className="blog-prose-link">
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className="blog-prose-link"
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <span className="underline underline-offset-3">{children}</span>,
    'strike-through': ({ children }) => <s>{children}</s>,
    code: ({ children }) => <code className="blog-prose-code">{children}</code>,
    highlight: ({ children }) => <mark className="blog-prose-highlight">{children}</mark>,
    link: LinkMark,
  },
  types: {
    pteImage: ({ value }) => <PteImageBlock value={value as PteImageValue} />,
  },
}

export default function PortableTextBody({ value }: PortableTextBodyProps) {
  if (!Array.isArray(value) || value.length === 0) return null

  return (
    <div className="prose blog-prose max-w-none">
      <PortableText value={value} components={components} />
    </div>
  )
}
