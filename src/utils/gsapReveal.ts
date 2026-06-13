import gsap from 'gsap'
import type { ScrollTrigger } from 'gsap/ScrollTrigger'

export const REVEAL_CLEAR_PROPS = 'opacity,transform,scale,filter,y,yPercent,x,xPercent,rotation,rotationZ'

export interface RevealConfig {
  from?: gsap.TweenVars
  duration?: number
  stagger?: number
  delay?: number
  ease?: string
  scrollTrigger?: ScrollTrigger.Vars | false
}

/** Animate elements into view without leaving them stuck at opacity: 0. */
export function reveal(targets: gsap.TweenTarget, config: RevealConfig = {}) {
  const { from = { y: 30 }, duration = 1.2, stagger, delay, ease = 'expo.out', scrollTrigger } = config

  const fromVars: gsap.TweenVars = {
    opacity: 0,
    ...from,
  }

  const toVars: gsap.TweenVars = {
    opacity: 1,
    y: from.y !== undefined ? 0 : undefined,
    yPercent: from.yPercent !== undefined ? 0 : undefined,
    x: from.x !== undefined ? 0 : undefined,
    scale: from.scale !== undefined ? 1 : undefined,
    rotation: from.rotation !== undefined ? 0 : undefined,
    rotationZ: from.rotationZ !== undefined ? 0 : undefined,
    filter: from.filter !== undefined ? 'none' : undefined,
    duration,
    stagger,
    delay,
    ease,
    immediateRender: false,
  }

  if (scrollTrigger !== false) {
    toVars.scrollTrigger = {
      once: true,
      invalidateOnRefresh: true,
      ...(scrollTrigger ?? {}),
    }
  }

  return gsap.fromTo(targets, fromVars, toVars)
}

export function clearRevealStyles(targets: gsap.TweenTarget) {
  gsap.set(targets, { clearProps: REVEAL_CLEAR_PROPS })
}

const STUCK_REVEAL_SELECTORS = [
  '[class*="reveal"]',
  '[class*="fade"]',
  '[class*="-anim"]',
  '[class*="-up"]',
  '.contact-up',
  '.hero-word',
  '.hero-fade',
  '.footer-reveal',
  '.footer-big-text span',
  '.animate-work-step',
  '.animate-proj',
  '.feature-up',
  '.test-up',
  '.faq-up',
  '.blog-up',
].join(',')

/** Fallback: restore visibility for elements still hidden after animations should have run. */
export function fixStuckRevealElements() {
  document.querySelectorAll(STUCK_REVEAL_SELECTORS).forEach((el) => {
    const opacity = gsap.getProperty(el, 'opacity')
    if (opacity !== null && Number(opacity) < 0.05) {
      gsap.set(el, { clearProps: REVEAL_CLEAR_PROPS })
    }
  })
}
