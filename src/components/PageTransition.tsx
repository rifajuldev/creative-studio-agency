'use client'

import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import React from 'react'

interface PageTransitionProps {
  children: React.ReactNode
  key?: string
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {/* Subtle Overlay Flash for Architectural Feel */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
        className="pointer-events-none fixed inset-0 z-1000 origin-top bg-[#bca374]"
      />

      {children}
    </motion.div>
  )
}
