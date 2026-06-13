'use client'

import CookieConsent from '@/components/CookieConsent'
import PageTransition from '@/components/PageTransition'
import SchedulerModal from '@/components/SchedulerModal'
import { LanguageProvider, useLanguage } from '@/context/LanguageContext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { ArrowRight, ArrowUpRight, Calendar, Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <AppShellContent>{children}</AppShellContent>
    </LanguageProvider>
  )
}

function AppShellContent({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true)
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className="bg-primary text-primary selection:bg-invert selection:text-invert relative min-h-screen overflow-x-hidden transition-colors duration-700">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>{children}</PageTransition>
      </AnimatePresence>

      {pathname !== '/contact' && <ContactBlock />}
      <Footer />

      {/* Floating Buttons: Always Visible Bottom Right */}
      <div className="pointer-events-none fixed right-6 bottom-6 z-80 flex flex-col items-end gap-3 select-none">
        {/* WhatsApp Icon */}
        <motion.a
          href="https://wa.me/14041112222"
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-black/5 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-colors hover:bg-gray-50 dark:border-white/5 dark:bg-[#1a1c24] dark:hover:bg-[#212432]"
          title="Contact us on WhatsApp"
        >
          <img src="/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
        </motion.a>

        {/* Book Meeting Pill */}
        <motion.button
          onClick={() => setIsSchedulerOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pointer-events-auto flex cursor-pointer items-center justify-center gap-3 rounded-full border border-white/5 bg-[#1a1c23] px-6 py-4 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all hover:opacity-95 dark:border-black/5 dark:bg-[#ffffff] dark:text-black"
        >
          <Calendar className="h-4 w-4 shrink-0 text-amber-500" />
          <span className="font-display text-xs leading-none font-medium tracking-widest uppercase">
            {t('cta.book')}
          </span>
        </motion.button>
      </div>

      {/* Booking Scheduler Modal Interface */}
      <SchedulerModal isOpen={isSchedulerOpen} onClose={() => setIsSchedulerOpen(false)} />

      {/* Cookie Consent Popup */}
      <CookieConsent />
    </div>
  )
}

function Navbar({ toggleTheme, isDark }: { toggleTheme: () => void; isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-700 ease-out ${scrolled ? 'bg-primary/80 border-border-primary border-b py-4 backdrop-blur-2xl' : 'bg-transparent py-6 md:py-8'}`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-12">
          <Link
            href="/"
            className="font-display z-50 text-lg font-light tracking-[0.2em] uppercase transition-opacity hover:opacity-70 md:text-xl"
          >
            NextCreavo<span className="text-secondary italic">.</span>
          </Link>

          <div className="text-primary z-50 hidden items-center gap-10 text-[10px] font-medium tracking-[0.2em] uppercase sm:text-[11px] xl:flex">
            {['About', 'Portfolio', 'Services', 'FAQ', 'Blog'].map((item) => {
              const routeMap: { [key: string]: string } = {
                About: '/about',
                Portfolio: '/portfolio',
                Services: '/services',
                FAQ: '/faq',
                Blog: '/blog',
              }
              const translationKey = `nav.${item.toLowerCase()}`
              return (
                <Link
                  key={item}
                  href={routeMap[item]}
                  className="hover:text-secondary before:bg-secondary relative transition-colors before:absolute before:-bottom-1 before:left-0 before:h-px before:w-0 before:transition-all before:content-[''] hover:before:w-full"
                >
                  {t(translationKey)}
                </Link>
              )
            })}
          </div>

          <div className="z-50 flex items-center gap-4 sm:gap-8">
            <div className="border-border-primary mr-2 flex items-center gap-2 border-r pr-4 sm:mr-4 sm:gap-3 sm:pr-8">
              {['EN', 'FR'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang as 'EN' | 'FR')}
                  className={`font-mono text-[9px] tracking-widest transition-all duration-300 sm:text-[10px] ${
                    language === lang
                      ? 'font-bold text-[#bca374] underline underline-offset-4'
                      : 'text-secondary/40 hover:text-secondary'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button onClick={toggleTheme} className="text-primary hover:text-secondary transition-colors">
              {isDark ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="hover:text-secondary group flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors sm:gap-3 sm:text-[11px] xl:hidden"
            >
              <span className="xs:inline hidden">{t('nav.menu') || 'Menu'}</span>
              <Menu size={16} strokeWidth={1.5} className="transition-transform group-hover:scale-110" />
            </button>
            <Link
              href="/contact"
              className="bg-invert text-invert hover:text-primary border-invert hover:border-primary hidden items-center justify-center rounded-full border px-8 py-3.5 text-[10px] font-medium tracking-[0.2em] uppercase transition-all hover:bg-transparent xl:inline-flex"
            >
              {t('cta.brief')}
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Ambient Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-100 cursor-pointer bg-black/60 backdrop-blur-md"
            />

            {/* Architectural Sidebar Drawer */}
            <motion.div
              initial={{ x: '-100%', skewX: -2 }}
              animate={{ x: 0, skewX: 0 }}
              exit={{ x: '-100%', skewX: 2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="bg-primary/95 text-primary border-border-primary/40 fixed top-0 bottom-0 left-0 z-101 flex w-full max-w-[520px] flex-col overflow-hidden border-r shadow-[40px_0_100px_rgba(0,0,0,0.1)] backdrop-blur-3xl dark:shadow-[40px_0_120px_rgba(0,0,0,0.7)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(188,163,116,0.03),transparent)]" />

              {/* Sidebar Header */}
              <div className="border-border-primary/50 bg-primary/20 relative flex items-center justify-between border-b p-8 md:p-14">
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-light tracking-tighter">
                    NextCreavo<span className="text-[#bca374] italic">.</span>
                  </span>
                  <span className="mt-2 font-mono text-[10px] font-bold tracking-[0.4em] text-[#bca374] uppercase opacity-80">
                    {t('ui.system_navigation')}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-secondary border-border-primary/60 hover:bg-invert/10 group flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border transition-all duration-500 hover:border-[#bca374]"
                >
                  <X
                    size={20}
                    strokeWidth={1}
                    className="transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:rotate-180"
                  />
                </button>
              </div>

              {/* Scrollable Navigation Area */}
              <div className="flex flex-1 flex-col overflow-y-auto px-8 py-12 md:px-14">
                <div className="flex flex-col gap-6 md:gap-8">
                  {['About', 'Portfolio', 'Services', 'Pricing', 'FAQ', 'Blog'].map((item, i) => {
                    const routeMap: { [key: string]: string } = {
                      About: '/about',
                      Portfolio: '/portfolio',
                      Services: '/services',
                      FAQ: '/faq',
                      Blog: '/blog',
                      Pricing: '/',
                    }
                    const isHashLink = item === 'Pricing'
                    const translationKey = `nav.${item.toLowerCase()}`
                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2 + i * 0.08,
                          ease: 'easeOut',
                        }}
                      >
                        {isHashLink ? (
                          <a
                            href="/#how-we-work"
                            onClick={() => setIsOpen(false)}
                            className="group flex items-baseline gap-4"
                          >
                            <span className="font-mono text-[10px] font-bold text-[#bca374] opacity-40 transition-opacity group-hover:opacity-100">
                              0{i + 1}
                            </span>
                            <span className="font-display inline-block text-4xl font-light tracking-tighter transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-4 hover:italic md:text-6xl">
                              {t(translationKey)}
                            </span>
                          </a>
                        ) : (
                          <Link
                            href={routeMap[item]}
                            onClick={() => setIsOpen(false)}
                            className="group flex items-baseline gap-4"
                          >
                            <span className="font-mono text-[10px] font-bold text-[#bca374] opacity-40 transition-opacity group-hover:opacity-100">
                              0{i + 1}
                            </span>
                            <span className="font-display inline-block text-4xl font-light tracking-tighter transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:translate-x-4 hover:italic md:text-6xl">
                              {t(translationKey)}
                            </span>
                          </Link>
                        )}
                      </motion.div>
                    )
                  })}
                </div>

                {/* Sidebar Bottom Metadata */}
                <div className="border-border-primary mt-auto grid grid-cols-1 gap-8 border-t pt-16 md:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-4"
                  >
                    <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#bca374] uppercase">
                      {t('ui.social_feeds')}
                    </span>
                    <div className="flex gap-5">
                      {['Instagram', 'Dribbble', 'LinkedIn'].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="text-secondary hover:text-primary text-xs tracking-widest uppercase transition-colors"
                        >
                          {social}
                        </a>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="space-y-3"
                  >
                    <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[#bca374] uppercase">
                      {t('ui.coordinates')}
                    </span>
                    <p className="text-secondary text-xs leading-relaxed font-light">
                      New York, NY 10001
                      <br />
                      Innovation District
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Action Call for Sidebar */}
              <div className="p-8 pt-0 md:px-14 md:pb-14">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="font-display hover:bg-primary hover:text-primary hover:border-border-primary group flex h-16 w-full items-center justify-center rounded-2xl border border-[#bca374] bg-[#bca374] text-[10px] font-medium tracking-[0.25em] text-black uppercase transition-all duration-500"
                >
                  {t('cta.brief')}
                  <ArrowRight size={14} className="ml-3 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function ContactBlock() {
  const container = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    industry: '',
    details: '',
  })
  const { t } = useLanguage()

  useGSAP(
    () => {
      gsap.from('.contact-up', {
        scrollTrigger: { trigger: container.current, start: 'top 80%' },
        opacity: 0,
        y: 40,
        duration: 1.5,
        stagger: 0.15,
        ease: 'expo.out',
      })

      gsap.to('.contact-parallax', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: container }
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section ref={container} className="bg-primary transition-colors duration-700" id="contact">
      <div className="bg-border-primary h-px w-full"></div>
      <div className="grid min-h-0 grid-cols-1 lg:min-h-[800px] lg:grid-cols-2">
        <div className="contact-up relative order-2 h-72 overflow-hidden sm:h-96 lg:order-1 lg:h-full">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
            alt="Collaboration"
            className="contact-parallax absolute inset-0 top-[-10%] h-[120%] w-full object-cover opacity-90 grayscale transition-opacity duration-1000"
          />
          <div className="bg-primary/20 absolute inset-0 mix-blend-multiply"></div>
          <div className="from-primary absolute inset-0 flex flex-col justify-end bg-linear-to-t to-transparent p-8 sm:p-12 lg:p-24">
            <h2 className="font-display mb-6 text-4xl leading-[1.05] font-light tracking-tighter text-white sm:text-5xl md:text-7xl lg:text-8xl">
              {t('footer.tagline')} <br />
              <span className="font-serif text-white/70 italic">{t('footer.tagline_secondary')}</span>
            </h2>
          </div>
        </div>

        <div className="bg-invert text-invert contact-up order-1 flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:order-2 lg:px-24 lg:py-32">
          <h3 className="font-display text-invert mb-4 text-3xl font-light tracking-tight sm:mb-6 sm:text-4xl md:text-5xl">
            Create a Brief.
          </h3>
          <p className="text-invert/60 mb-8 max-w-sm text-xs leading-relaxed font-light sm:mb-16 sm:text-sm">
            Provide details regarding your project, and our team will get back to you with a comprehensive quote.
          </p>

          <form className="flex flex-col gap-8 sm:gap-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
              <div className="group relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer border-invert/20 text-invert focus:border-invert w-full border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none"
                />
                <label className="text-invert/40 peer-focus:text-invert/80 peer-not-placeholder-shown:text-invert/80 pointer-events-none absolute top-3 left-0 text-sm font-light transition-all peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:uppercase">
                  Your Name
                </label>
              </div>
              <div className="group relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer border-invert/20 text-invert focus:border-invert w-full border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none"
                />
                <label className="text-invert/40 peer-focus:text-invert/80 peer-not-placeholder-shown:text-invert/80 pointer-events-none absolute top-3 left-0 text-sm font-light transition-all peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:uppercase">
                  Email Address
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="border-invert/20 text-invert/60 focus:border-invert cursor-pointer appearance-none rounded-none border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none"
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="animation" className="bg-invert text-invert">
                  2D Animation
                </option>
                <option value="marketing" className="bg-invert text-invert">
                  Digital Marketing
                </option>
                <option value="webdev" className="bg-invert text-invert">
                  Web Development
                </option>
                <option value="mobile" className="bg-invert text-invert">
                  Mobile App
                </option>
                <option value="ai" className="bg-invert text-invert">
                  AI & Integrations
                </option>
                <option value="design" className="bg-invert text-invert">
                  UI/UX Design
                </option>
              </select>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="border-invert/20 text-invert/60 focus:border-invert cursor-pointer appearance-none rounded-none border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none"
              >
                <option value="" disabled>
                  Select Industry
                </option>
                <option value="saas" className="bg-invert text-invert">
                  SaaS / Technology
                </option>
                <option value="ecommerce" className="bg-invert text-invert">
                  E-Commerce
                </option>
                <option value="finance" className="bg-invert text-invert">
                  Finance
                </option>
                <option value="other" className="bg-invert text-invert">
                  Other
                </option>
              </select>
            </div>

            <div className="group relative mt-4">
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder=" "
                rows={3}
                className="peer border-invert/20 text-invert focus:border-invert w-full resize-none border-b bg-transparent py-3 text-sm font-light transition-colors focus:outline-none"
              />
              <label className="text-invert/40 peer-focus:text-invert/80 peer-not-placeholder-shown:text-invert/80 pointer-events-none absolute top-3 left-0 text-sm font-light transition-all peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-widest peer-focus:uppercase">
                Tell us about your project
              </label>
            </div>

            <button className="group bg-primary text-primary border-primary relative mt-4 overflow-hidden rounded-full border px-10 py-5 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 sm:mt-8 sm:px-12 sm:py-6 md:max-w-xs">
              <span className="group-hover:text-invert relative z-10 transition-colors duration-500">Send Inquiry</span>
              <div className="bg-invert absolute inset-0 z-0 translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const container = useRef(null)
  const { t } = useLanguage()

  useGSAP(
    () => {
      gsap.from('.footer-inner', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      gsap.from('.footer-reveal', {
        scrollTrigger: { trigger: container.current, start: 'top 85%' },
        opacity: 0,
        y: 30,
        duration: 1.5,
        stagger: 0.1,
        ease: 'expo.out',
      })

      gsap.from('.footer-big-text span', {
        scrollTrigger: { trigger: container.current, start: 'top 95%' },
        yPercent: 120,
        rotationZ: 5,
        opacity: 0,
        duration: 1.8,
        stagger: 0.05,
        ease: 'expo.out',
        transformOrigin: 'left bottom',
      })
    },
    { scope: container }
  )

  const handleSocialEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const arrow = e.currentTarget.querySelector('.social-arrow')
    gsap.to(arrow, {
      opacity: 1,
      x: 0,
      y: 0,
      rotation: 15,
      scale: 1.2,
      duration: 0.5,
      ease: 'back.out(2)',
    })
  }

  const handleSocialLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const arrow = e.currentTarget.querySelector('.social-arrow')
    gsap.to(arrow, {
      opacity: 0,
      x: -8,
      y: 8,
      rotation: 0,
      scale: 1,
      duration: 0.4,
      ease: 'power2.in',
    })
  }

  return (
    <footer ref={container} className="bg-invert text-invert relative overflow-hidden transition-colors duration-700">
      <div className="footer-inner pt-20 md:pt-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="border-invert/20 grid grid-cols-1 gap-16 border-b pb-20 md:pb-32 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-between">
              <div className="footer-reveal">
                <h3 className="font-display mb-8 text-3xl font-light tracking-tight sm:text-4xl md:text-6xl lg:mb-12">
                  {t('footer.tagline') || 'Have an idea?'} <br />
                  <span className="text-secondary italic">{t('footer.tagline_secondary') || "Let's build it."}</span>
                </h3>
                <a
                  href="mailto:hello@nextcreavo.com"
                  className="group text-invert border-invert/20 hover:border-invert mt-4 flex w-full items-center justify-between gap-4 overflow-hidden border-b pb-5 text-base font-light transition-colors sm:text-xl md:w-max md:pr-12 md:text-2xl lg:text-3xl"
                >
                  <span className="relative pr-8 font-serif italic">
                    hello@nextcreavo.com
                    <span className="bg-secondary absolute -bottom-1 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <div className="border-invert/30 group-hover:border-secondary group-hover:bg-secondary group-hover:text-primary relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border transition-all duration-500 sm:h-10 sm:w-10">
                    <ArrowUpRight
                      size={18}
                      className="absolute transition-transform duration-500 group-hover:translate-x-8 group-hover:-translate-y-8"
                    />
                    <ArrowUpRight
                      size={18}
                      className="absolute -translate-x-8 translate-y-8 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                    />
                  </div>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 lg:gap-0 lg:pl-16">
              <div className="footer-reveal flex flex-col gap-4 sm:gap-6">
                <p className="text-invert/40 mb-2 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Socials</p>
                {['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="hover:text-secondary group flex w-max items-center gap-2 text-sm font-light transition-colors hover:italic sm:text-base md:text-lg"
                    onMouseEnter={handleSocialEnter}
                    onMouseLeave={handleSocialLeave}
                  >
                    {social}{' '}
                    <ArrowUpRight
                      size={14}
                      className="social-arrow text-secondary hidden -translate-x-2 translate-y-2 opacity-0 sm:block"
                    />
                  </a>
                ))}
              </div>

              <div className="footer-reveal flex flex-col gap-4 sm:gap-6">
                <p className="text-invert/40 mb-2 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Explore</p>
                {['About', 'Portfolio', 'Services', 'FAQ', 'Contact'].map((link) => (
                  <Link
                    key={link}
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="hover:text-secondary w-max text-sm font-light transition-all hover:italic sm:text-base md:text-lg"
                  >
                    {t(`nav.${link.toLowerCase()}`) || link}
                  </Link>
                ))}
              </div>

              <div className="footer-reveal border-invert/10 col-span-2 flex flex-col gap-4 border-t pt-8 sm:col-span-1 sm:gap-6 sm:border-0 sm:pt-0">
                <p className="text-invert/40 mb-2 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">Visit Us</p>
                <address className="text-invert/70 max-w-[200px] text-xs leading-relaxed font-light not-italic sm:text-sm md:text-base">
                  404 Digital Avenue,
                  <br />
                  Innovation District,
                  <br />
                  New York, NY 10001
                </address>
                <a
                  href="#"
                  className="text-secondary hover:text-invert mt-2 text-[10px] font-medium tracking-widest uppercase transition-colors sm:text-xs"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="footer-reveal flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
            <p className="text-invert/40 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">
              &copy; {new Date().getFullYear()} NextCreavo.
            </p>
            <div className="text-invert/40 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[9px] tracking-[0.2em] uppercase sm:text-[10px]">
              <Link href="/privacy" className="hover:text-invert transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link href="/terms" className="hover:text-invert transition-colors">
                {t('footer.terms')}
              </Link>
              <Link href="/cookies" className="hover:text-invert transition-colors">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>

        {/* Big text element at the bottom */}
        <div className="bg-invert relative z-10 flex w-screen justify-center overflow-hidden pt-8 pb-4 md:pt-0">
          <div className="mx-auto w-[95%] overflow-hidden pb-4 lg:w-[98%]">
            <h1 className="footer-big-text font-display text-invert hover:text-secondary flex w-full cursor-default justify-between text-center text-[12vw] leading-[0.8] font-light tracking-tighter opacity-90 transition-colors select-none sm:text-[11vw] xl:text-[10vw]">
              <span>N</span>
              <span>E</span>
              <span>X</span>
              <span>T</span>
              <span>C</span>
              <span>R</span>
              <span>E</span>
              <span>A</span>
              <span>V</span>
              <span>O</span>
            </h1>
          </div>
        </div>
      </div>
    </footer>
  )
}
