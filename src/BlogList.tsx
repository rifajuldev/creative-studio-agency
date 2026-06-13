'use client'

import { gsapScopeOptions } from '@/hooks/useScrollTriggerRefresh'
import { clearRevealStyles, reveal } from '@/utils/gsapReveal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Calendar, Search, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { BLOG_POSTS } from './blogData'
import { useLanguage } from './context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

export default function BlogList() {
  const { t, language } = useLanguage()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Tech' | 'AI' | 'Design' | 'Marketing'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  // Filtered list
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesCategory && matchesSearch
  })

  // Featured highlighted article
  const featuredPost = BLOG_POSTS[0]

  useGSAP(
    () => {
      reveal('.blog-list-reveal', {
        from: { y: 60 },
        duration: 1.4,
        stagger: 0.12,
        scrollTrigger: false,
      })

      reveal('.blog-card-reveal', {
        from: { y: 35 },
        duration: 1.2,
        stagger: 0.1,
        scrollTrigger: { trigger: '.blog-grid-section', start: 'top 85%' },
      })

      return () => clearRevealStyles('.blog-list-reveal, .blog-card-reveal')
    },
    { scope: containerRef, ...gsapScopeOptions }
  )

  return (
    <div
      ref={containerRef}
      className="bg-primary text-primary min-h-screen w-full pb-32 transition-colors duration-700"
    >
      {/* 1. TYPOGRAPHY HEADER */}
      <section className="bg-primary relative px-6 pt-32 pb-12 sm:pt-40 sm:pb-16 md:px-12 md:pt-52">
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="grid grid-cols-1 items-end gap-8 md:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="blog-list-reveal text-secondary border-border-primary/80 mb-6 inline-flex items-center gap-2 rounded-full border px-4.5 py-2 text-xs font-semibold tracking-[0.25em] uppercase sm:mb-8 md:text-sm">
                <Sparkles size={12} className="text-secondary" />
                {t('blog.journal_tag')}
              </span>
              <h1 className="font-display lg:text-8.5xl text-primary text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl md:text-7xl md:leading-[1]">
                {t('blog.main_title')}
                <br />
                <span className="text-secondary font-serif font-light italic">{t('blog.title_italic_resolved')}</span>
              </h1>
            </div>
            <div className="pb-2 lg:col-span-4 lg:pl-6">
              <p className="blog-list-reveal text-secondary text-base leading-relaxed font-light md:text-lg">
                {t('blog.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAJESTIC FEATURED POST BANNER */}
      {searchQuery === '' && selectedCategory === 'all' && (
        <section className="bg-primary blog-list-reveal px-6 py-8 md:px-12">
          <div className="mx-auto max-w-[1400px]">
            <div
              onClick={() => router.push(`/blog/${featuredPost.id}`)}
              className="group border-border-primary bg-secondary/10 grid cursor-pointer grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[2.5rem] border transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] lg:grid-cols-12 lg:gap-8"
            >
              {/* IMAGE PORTION */}
              <div className="relative aspect-[16/9] min-h-[350px] overflow-hidden lg:col-span-7 lg:aspect-auto">
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover opacity-90 grayscale transition-all duration-[1.5s] group-hover:scale-102 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-black uppercase shadow-lg backdrop-blur-md">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                    {t('blog.featured')}
                  </span>
                </div>
              </div>

              {/* CONTENT PORTION */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-5 lg:p-16">
                <div className="text-secondary/60 mb-8 flex items-center gap-4 font-mono text-[10px] tracking-widest uppercase">
                  <div className="border-border-primary bg-primary/40 text-secondary rounded border px-2 py-0.5">
                    {featuredPost.category}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} /> {featuredPost.date}
                  </div>
                </div>

                <h2 className="font-display text-primary mb-8 text-3xl leading-[1.1] font-light transition-colors group-hover:text-amber-600 md:text-5xl lg:text-5xl">
                  {featuredPost.title}
                </h2>

                <p className="text-secondary mb-10 line-clamp-3 text-base leading-relaxed font-light md:text-lg">
                  {featuredPost.summary}
                </p>

                <div className="border-border-primary/40 mt-auto flex items-center justify-between border-t pt-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt=""
                      className="border-border-primary h-10 w-10 rounded-full border grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-primary block text-[11px] font-bold">{featuredPost.author.name}</span>
                      <span className="text-secondary/50 block text-[9px] tracking-wider uppercase">
                        {featuredPost.author.role}
                      </span>
                    </div>
                  </div>
                  <div className="text-primary flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-all group-hover:gap-4">
                    {t('blog.read_article')} <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. LIVE QUERY SEARCH & FILTER ROW */}
      <section className="bg-primary border-border-primary/55 bg-primary/95 sticky top-[70px] z-30 border-t border-b px-6 py-6 backdrop-blur-md sm:py-8 md:top-[80px] md:px-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
          <div className="group relative w-full md:max-w-md">
            <Search className="text-secondary/50 group-focus-within:text-secondary absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 transition-colors" />
            <input
              type="text"
              placeholder={t('blog.search_placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-secondary/35 border-border-primary text-primary placeholder-secondary/50 focus:border-secondary focus:ring-secondary/20 w-full rounded-full border py-3.5 pr-6 pl-12 font-sans text-xs transition-all focus:ring-1 focus:outline-hidden"
            />
          </div>

          <div className="scrollbar-hide -mx-6 flex w-full flex-nowrap items-center gap-2.5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 md:w-auto">
            {['all', 'Tech', 'AI', 'Design', 'Marketing'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`rounded-full px-5 py-2.5 text-[10px] font-bold tracking-wider whitespace-nowrap uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-invert text-invert shadow-xs'
                    : 'bg-secondary/40 border-border-primary text-secondary hover:text-primary hover:bg-secondary border'
                }`}
              >
                {cat === 'all' ? (language === 'EN' ? 'All' : 'Tout') : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MASONRY STYLE GRID */}
      <section className="bg-primary blog-grid-section px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="blog-card-reveal group flex flex-col items-start"
                >
                  <div className="bg-secondary/10 border-border-primary/40 relative mb-8 aspect-[4/3] w-full overflow-hidden rounded-[2rem] border">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="h-full w-full object-cover brightness-90 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[9px] font-bold tracking-widest text-black uppercase backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="text-secondary/50 mb-4 flex items-center gap-4 font-mono text-[9px] tracking-widest uppercase">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} Read</span>
                  </div>

                  <h3 className="font-display text-primary group-hover:text-secondary mb-4 line-clamp-2 text-2xl leading-tight font-light tracking-tight transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-secondary mb-6 line-clamp-3 text-sm leading-relaxed font-light">{post.summary}</p>

                  <div className="border-border-primary/30 mt-auto flex w-full items-center justify-between border-t pt-6">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt=""
                        className="border-border-primary h-7 w-7 rounded-full border grayscale"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-primary text-[10px] font-bold">{post.author.name}</span>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-secondary -translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-secondary/5 border-border-primary rounded-[3rem] border border-dashed py-32 text-center">
              <h3 className="font-display text-primary mb-2 text-2xl font-light">{t('blog.no_results')}</h3>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="text-secondary border-secondary/30 hover:text-primary hover:border-primary mt-4 border-b text-xs font-bold tracking-widest uppercase transition-all"
              >
                {t('blog.clear_filters')}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
