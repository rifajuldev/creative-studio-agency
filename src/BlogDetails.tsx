'use client'

import { gsapScopeOptions } from '@/hooks/useScrollTriggerRefresh'
import { clearRevealStyles, reveal } from '@/utils/gsapReveal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CalendarDays, ChevronLeft, CornerDownRight, Share2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { BLOG_POSTS } from './blogData'

gsap.registerPlugin(ScrollTrigger)

export default function BlogDetails() {
  const params = useParams()
  const id = typeof params.id === 'string' ? params.id : undefined
  const router = useRouter()

  // Scroll to top when read article target shifts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  const activePost = BLOG_POSTS.find((p) => p.id === id)
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!activePost) return

      reveal('.blog-det-reveal', {
        from: { y: 50 },
        duration: 1.4,
        stagger: 0.12,
        scrollTrigger: false,
      })

      reveal('.blog-paragraph-anim', {
        from: { y: 25 },
        duration: 1.1,
        stagger: 0.1,
        scrollTrigger: { trigger: '.blog-reading-stream', start: 'top 85%' },
      })

      return () => clearRevealStyles('.blog-det-reveal, .blog-paragraph-anim')
    },
    { scope: containerRef, dependencies: [id], ...gsapScopeOptions }
  )

  if (!activePost) {
    return (
      <div className="bg-primary text-primary flex min-h-screen w-full flex-col items-center justify-center p-6 text-center">
        <Sparkles className="text-secondary mb-4 h-12 w-12 animate-pulse" />
        <h1 className="font-display text-2xl font-light">Insight article not located</h1>
        <p className="text-secondary mt-2 mb-6 max-w-sm text-xs font-light">
          The requested system log identifier may have expired or been moved outside our central index.
        </p>
        <button
          onClick={() => router.push('/blog')}
          className="bg-primary border-border-primary text-secondary hover:bg-secondary rounded-full border px-6 py-2.5 text-[9px] font-bold tracking-widest uppercase transition-colors"
        >
          Return to Journal Directory
        </button>
      </div>
    )
  }

  // Calculate chronological neighbors
  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === id)
  const nextPost = BLOG_POSTS[currentIndex < BLOG_POSTS.length - 1 ? currentIndex + 1 : 0]

  return (
    <div
      ref={containerRef}
      className="bg-primary text-primary min-h-screen w-full pb-32 transition-colors duration-700"
    >
      {/* 1. EXECUTIVE SUB-HEADER CONTROLS */}
      <div className="bg-primary/95 border-border-primary/80 sticky top-[80px] z-30 w-full border-b px-6 py-4 backdrop-blur-md md:px-12">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <button
            onClick={() => router.push('/blog')}
            className="text-primary hover:text-secondary group flex items-center gap-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Journal
          </button>

          <div className="text-secondary/70 hidden items-center gap-4 font-mono text-[10px] tracking-wider lowercase sm:flex">
            Reading status:{' '}
            <span className="text-primary bg-secondary rounded-sm px-2 py-0.5 font-sans text-[9px] font-bold uppercase">
              {activePost.category}
            </span>
          </div>
        </div>
      </div>

      {/* 2. ARTICLE HERO HIGHLIGHTS */}
      <section className="bg-primary relative px-6 pt-24 pb-16 md:px-12 md:pt-32">
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          {/* Tag Category indicators */}
          <div className="blog-det-reveal mb-8 flex items-center gap-3.5">
            <span className="bg-secondary text-secondary border-border-primary/45 rounded-full border px-3.5 py-1 text-[9px] font-bold tracking-wider uppercase">
              {activePost.category} Specialization
            </span>
            <span className="text-secondary/60 font-mono text-[10px] tracking-widest uppercase">
              {activePost.readTime}
            </span>
          </div>

          {/* Majestic Serif/Display Heading */}
          <div className="blog-det-reveal max-w-4xl space-y-6">
            <h1 className="font-display text-primary text-4xl leading-[1.08] font-light tracking-tight md:text-6xl lg:text-[5.5rem]">
              {activePost.title}
            </h1>
            <p className="text-secondary max-w-3xl pt-2 text-lg leading-relaxed font-light md:text-xl">
              {activePost.summary}
            </p>
          </div>

          {/* High-Elegance Author specifications row */}
          <div className="border-border-primary/35 blog-det-reveal mt-12 flex max-w-4xl flex-col items-start justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center md:gap-12">
            <div className="flex items-center gap-4.5">
              <img
                src={activePost.author.avatar}
                alt={activePost.author.name}
                className="border-border-primary/60 h-12 w-12 rounded-full border object-cover shadow-inner"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-primary mb-1 block text-sm leading-none font-semibold">
                  {activePost.author.name}
                </span>
                <span className="text-secondary/60 block font-mono text-[10px] tracking-wider uppercase">
                  {activePost.author.role}
                </span>
              </div>
            </div>

            <div className="text-secondary/60 flex items-center gap-6 text-[10px] font-bold tracking-widest uppercase">
              <span className="flex items-center gap-1.5 leading-none">
                <CalendarDays size={13} className="text-secondary" />
                {activePost.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CINEMATIC HERO POSTER IMAGE */}
      <section className="bg-primary blog-det-reveal px-6 md:px-12">
        <div className="bg-secondary border-border-primary relative mx-auto h-[45vh] max-w-[1400px] overflow-hidden rounded-[2.5rem] border md:h-[65vh]">
          <img
            src={activePost.img}
            alt={activePost.title}
            className="relative top-[-10%] h-[120%] w-full object-cover opacity-90 grayscale transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 4. MAIN ARTICLE TEXT CONTAINER */}
      <section className="bg-primary blog-reading-stream px-6 py-16 md:px-12">
        <div className="mx-auto max-w-[800px]">
          <div className="space-y-16">
            {activePost.content.map((sec, sIdx) => (
              <div key={sIdx} className="blog-paragraph-anim space-y-6">
                {/* Section title sub-heading */}
                {sec.sectionTitle && (
                  <h3 className="font-display md:text-3.5xl text-primary pt-4 text-2xl leading-snug font-light tracking-tight">
                    {sec.sectionTitle}
                  </h3>
                )}

                {/* Main section body text */}
                <p className="text-secondary text-base leading-relaxed font-light">{sec.body}</p>

                {/* Visual quote blocks */}
                {sec.quote && (
                  <div className="border-secondary relative my-[1.5em] border-l-2 py-2 pl-6 md:pl-10">
                    <span className="text-secondary/15 absolute top-0 left-0 -translate-x-full pr-3 font-serif text-5xl select-none">
                      “
                    </span>
                    <p className="text-primary max-w-2xl font-serif text-lg leading-relaxed font-light italic md:text-2xl">
                      {sec.quote}
                    </p>
                  </div>
                )}

                {/* Bullets lists */}
                {sec.bullets && (
                  <div className="space-y-3.5 pt-4">
                    {sec.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3.5 pl-2">
                        <span className="bg-secondary text-secondary border-border-primary/20 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[9px] font-bold shadow-sm">
                          <CornerDownRight size={10} className="text-secondary" />
                        </span>
                        <p className="text-secondary text-sm leading-relaxed font-light">{bullet}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action tags section */}
          <div className="border-border-primary/50 blog-paragraph-anim my-16 flex flex-wrap items-center justify-between gap-6 border-t border-b py-8 md:my-20">
            <div className="flex flex-wrap gap-2">
              {activePost.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="bg-secondary text-secondary border-border-primary/20 rounded-full border px-3 py-1 text-[10px] font-semibold tracking-wider uppercase"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="text-secondary/60 flex items-center gap-4 text-xs font-semibold">
              <button
                onClick={() => alert(`Insight shared successfully!`)}
                className="hover:text-primary flex items-center gap-1.5 text-[9px] font-bold tracking-wider uppercase transition-colors"
              >
                <Share2 size={13} />
                Share insight
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEQUENTIAL CASE ROUTING ROW */}
      <section className="bg-primary px-6 py-8 md:px-12">
        <div className="border-border-primary/40 mx-auto max-w-[1400px] border-t pt-16">
          <div className="grid grid-cols-1 items-center justify-between gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="text-secondary/60 mb-2 block font-mono text-[9px] tracking-[0.25em] uppercase">
                CONTINUE READING
              </span>
              <h4 className="font-display text-primary text-2xl leading-tight font-light md:text-3xl">
                Inspect next insight:{' '}
                <Link
                  href={`/blog/${nextPost.id}`}
                  className="text-secondary hover:text-primary border-secondary/30 border-b font-serif italic transition-colors"
                >
                  {nextPost.title}
                </Link>
              </h4>
            </div>

            <div className="md:col-span-5 md:text-right">
              <Link
                href={`/blog/${nextPost.id}`}
                className="bg-invert text-invert hover:text-primary border-invert hover:border-primary inline-flex items-center justify-center gap-3 rounded-full border px-8 py-4 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-transparent"
              >
                Launch next publication
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
