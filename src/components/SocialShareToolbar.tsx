'use client'

import { Linkedin, Mail, Share2, Twitter } from 'lucide-react'
import { motion } from 'motion/react'

interface SocialShareToolbarProps {
  title: string
  url: string
}

import { useLanguage } from '../context/LanguageContext'

export default function SocialShareToolbar({ title, url }: SocialShareToolbarProps) {
  const { t } = useLanguage()
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:text-[#0077b5]',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:text-[#1da1f2]',
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:?subject=${encodedTitle}&body=Check this out: ${encodedUrl}`,
      color: 'hover:text-[#ea4335]',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 flex-col gap-6 xl:flex"
    >
      <div className="bg-primary/80 border-border-primary/50 flex flex-col items-center gap-6 rounded-full border p-3 shadow-2xl backdrop-blur-md">
        <div className="text-secondary/40 border-border-primary/30 mb-2 flex h-8 w-8 items-center justify-center border-b pb-4">
          <Share2 size={16} />
        </div>

        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-secondary/60 transition-all duration-300 hover:scale-125 ${link.color}`}
            title={`Share on ${link.name}`}
          >
            <link.icon size={18} strokeWidth={1.5} />
          </a>
        ))}

        <div className="bg-border-primary/30 mt-2 h-12 w-[1px]" />
        <span className="text-secondary/40 rotate-180 text-[8px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-lr]">
          {t('portfolio.share_case')}
        </span>
      </div>
    </motion.div>
  )
}
