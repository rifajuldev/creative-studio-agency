'use client'

import { fixStuckRevealElements } from '@/utils/gsapReveal'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/** Refresh ScrollTrigger after route changes and clear any stuck hidden elements. */
export function useScrollTriggerRefresh() {
  const pathname = usePathname()

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh(true)

    const raf = requestAnimationFrame(refresh)
    const t1 = window.setTimeout(refresh, 100)
    const t2 = window.setTimeout(refresh, 400)
    const safety = window.setTimeout(() => {
      refresh()
      fixStuckRevealElements()
    }, 2000)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.clearTimeout(safety)
    }
  }, [pathname])

  useEffect(() => {
    const onLoad = () => ScrollTrigger.refresh(true)
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])
}

/** Standard useGSAP options that prevent revert from leaving content invisible. */
export const gsapScopeOptions = {
  revertOnUpdate: false as const,
}
