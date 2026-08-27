'use client'

import { formatReadCount } from '@/hooks/useBlogViews'
import { BookOpen } from 'lucide-react'

type BlogReadCountProps = {
  count?: number
  variant?: 'card' | 'featured' | 'detail' | 'home'
  className?: string
}

export default function BlogReadCount({ count = 0, variant = 'card', className = '' }: BlogReadCountProps) {
  if (!count) return null

  if (variant === 'detail') {
    return (
      <span className={`text-secondary/70 flex items-center gap-1.5 leading-none ${className}`}>
        <BookOpen size={13} className="text-secondary" />
        <span className="text-[10px] font-bold tracking-widest uppercase">
          {count.toLocaleString('en-US')} people read this
        </span>
      </span>
    )
  }

  const compact = variant !== 'featured'
  const label =
    variant === 'home' || variant === 'card'
      ? `${formatReadCount(count, compact)} reads`
      : `${count.toLocaleString('en-US')} reads`

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <BookOpen size={11} className="opacity-70" />
      <span>{label}</span>
    </span>
  )
}
