import type { PortableTextBlock } from '@/interfaces/blog.interface'

export type InlinePart = string | { t: string; href: string }

export type LocalBlogSection =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; parts: InlinePart[] }
  | { type: 'quote'; text: string }
  | { type: 'ul'; items: InlinePart[][] }
  | { type: 'ol'; items: InlinePart[][] }

function key(prefix: string, index: number) {
  return `${prefix}${index}`
}

function spansFromParts(parts: InlinePart[], prefix: string) {
  const markDefs: { _key: string; _type: 'link'; href: string }[] = []
  const children = parts.map((part, index) => {
    if (typeof part === 'string') {
      return { _type: 'span' as const, _key: key(`${prefix}s`, index), text: part, marks: [] as string[] }
    }
    const markKey = key(`${prefix}l`, index)
    markDefs.push({ _key: markKey, _type: 'link', href: part.href })
    return { _type: 'span' as const, _key: key(`${prefix}s`, index), text: part.t, marks: [markKey] }
  })
  return { children, markDefs }
}

function textBlock(
  style: 'normal' | 'h2' | 'h3' | 'blockquote',
  parts: InlinePart[],
  blockKey: string,
  list?: { listItem: 'bullet' | 'number'; level: number }
): PortableTextBlock {
  const { children, markDefs } = spansFromParts(parts, blockKey)
  return {
    _type: 'block',
    _key: blockKey,
    style,
    markDefs,
    children,
    ...(list ? { listItem: list.listItem, level: list.level } : {}),
  }
}

export function sectionsToPortableText(sections: LocalBlogSection[]): PortableTextBlock[] {
  const blocks: PortableTextBlock[] = []
  let i = 0

  for (const section of sections) {
    if (section.type === 'h2') {
      blocks.push(textBlock('h2', [section.text], key('h2', i++)))
      continue
    }
    if (section.type === 'h3') {
      blocks.push(textBlock('h3', [section.text], key('h3', i++)))
      continue
    }
    if (section.type === 'p') {
      blocks.push(textBlock('normal', section.parts, key('p', i++)))
      continue
    }
    if (section.type === 'quote') {
      blocks.push(textBlock('blockquote', [section.text], key('q', i++)))
      continue
    }
    const listItem = section.type === 'ol' ? 'number' : 'bullet'
    section.items.forEach((item, itemIndex) => {
      blocks.push(textBlock('normal', item, key(`${listItem}${i}_${itemIndex}`, i), { listItem, level: 1 }))
    })
    i += 1
  }

  return blocks
}

export function portableTextToPlain(blocks: PortableTextBlock[]): string {
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !Array.isArray(block.children)) return ''
      return block.children
        .map((child) => (typeof child === 'object' && child && 'text' in child ? String(child.text ?? '') : ''))
        .join('')
    })
    .filter(Boolean)
    .join(' ')
}

export function countWords(text: string) {
  return text.trim().split(/\s+/).filter(Boolean).length
}

export function readTimeToIsoDuration(readTime: string) {
  const minutes = Number.parseInt(readTime, 10)
  if (!Number.isFinite(minutes) || minutes <= 0) return undefined
  return `PT${minutes}M`
}
