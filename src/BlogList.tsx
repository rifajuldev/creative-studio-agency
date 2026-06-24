'use client'

import { gsapScopeOptions } from '@/hooks/useScrollTriggerRefresh'
import type { IBlogPublicListItem } from '@/interfaces/blog.interface'
import { formatBlogDate } from '@/interfaces/blog.interface'
import {
  useGetPublicBlogListQuery,
  useGetPublicCategoriesQuery,
  useGetPublicFeaturedBlogQuery,
} from '@/redux/features/blog/blogPublic.api'
import { clearRevealStyles, reveal } from '@/utils/gsapReveal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Calendar, Search, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useLanguage } from './context/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const PAGE_SIZE = 6

function AuthorAvatar({ post, className }: { post: IBlogPublicListItem; className?: string }) {
  if (post.authorAvatarUrl || post.authorAvatarUrl === '') {
    return (
      <Image
        src={post.authorAvatarUrl}
        alt={post.authorName || 'Author'}
        className={className}
        referrerPolicy="no-referrer"
        width={120}
        height={120}
      />
    )
  }

  const initial = (post.authorName || 'A').charAt(0).toUpperCase()
  return (
    <span
      className={`border-border-primary bg-secondary/40 text-primary flex items-center justify-center border font-bold ${className ?? ''}`}
    >
      {initial}
    </span>
  )
}

export default function BlogList() {
  const { t, language } = useLanguage()
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchInput, setSearchInput] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [skip, setSkip] = useState(0)
  const [accumulatedPosts, setAccumulatedPosts] = useState<IBlogPublicListItem[]>([])
  const [prevListData, setPrevListData] = useState<typeof listData>(undefined)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const trimmed = searchInput.trim()
      setDebouncedSearch(trimmed)
      setSkip(0)
      setAccumulatedPosts([])
    }, 300)
    return () => window.clearTimeout(timer)
  }, [searchInput])

  const { data: categoriesData } = useGetPublicCategoriesQuery()
  const { data: featuredData, isLoading: featuredLoading } = useGetPublicFeaturedBlogQuery()
  const featuredPost = featuredData?.data ?? null

  const categories = useMemo(() => {
    const list = categoriesData?.data ?? []
    return ['all', ...list.map((c) => c.name)]
  }, [categoriesData])

  const getCategoryLabel = (cat: string) => {
    if (cat === 'all') return language === 'EN' ? 'All' : 'Tout'
    return cat
  }

  const {
    data: listData,
    isLoading: listLoading,
    isFetching: listFetching,
  } = useGetPublicBlogListQuery({
    skip,
    limit: PAGE_SIZE,
    searchTerm: debouncedSearch || undefined,
    category: selectedCategory === 'all' ? undefined : selectedCategory,
  })

  const listMeta = listData?.meta

  if (listData !== prevListData) {
    setPrevListData(listData)
    if (listData?.data) {
      setAccumulatedPosts((prev) => (skip === 0 ? listData.data : [...prev, ...listData.data]))
    }
  }

  const filteredPosts = accumulatedPosts
  const showFeatured =
    !debouncedSearch &&
    (selectedCategory === 'all' || (featuredPost && featuredPost.category === selectedCategory)) &&
    featuredPost
  const listBusy = listLoading || listFetching

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
    { scope: containerRef, dependencies: [filteredPosts.length, showFeatured], ...gsapScopeOptions }
  )

  return (
    <div
      ref={containerRef}
      className="bg-primary text-primary min-h-screen w-full pb-32 transition-colors duration-700"
    >
      <section className="bg-primary relative px-6 pt-32 pb-12 sm:pt-40 sm:pb-16 md:px-12 md:pt-52">
        <div className="relative z-10 mx-auto w-full max-w-350">
          <div className="grid grid-cols-1 items-end gap-8 md:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="blog-list-reveal text-secondary border-border-primary/80 mb-6 inline-flex items-center gap-2 rounded-full border px-4.5 py-2 text-xs font-semibold tracking-[0.25em] uppercase sm:mb-8 md:text-sm">
                <Sparkles size={12} className="text-secondary" />
                {t('blog.journal_tag')}
              </span>
              <h1 className="font-display lg:text-8.5xl text-primary text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl md:text-7xl md:leading-none">
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

      {showFeatured ? (
        <section className="bg-primary blog-list-reveal px-6 py-8 md:px-12">
          <div className="mx-auto max-w-350">
            {featuredLoading ? (
              <div className="border-border-primary bg-secondary/10 grid h-auto animate-pulse grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[40px] border lg:grid-cols-12 lg:gap-8">
                <div className="bg-secondary/20 relative aspect-video min-h-87.5 lg:col-span-7 lg:aspect-auto" />
                <div className="flex flex-col justify-center space-y-6 p-8 md:p-12 lg:col-span-5 lg:p-16">
                  <div className="flex gap-4">
                    <div className="bg-secondary/20 h-6 w-16 rounded" />
                    <div className="bg-secondary/20 h-6 w-24 rounded" />
                  </div>
                  <div className="space-y-3">
                    <div className="bg-secondary/20 h-10 w-full rounded" />
                    <div className="bg-secondary/20 h-10 w-4/5 rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-secondary/20 h-4 w-full rounded" />
                    <div className="bg-secondary/20 h-4 w-full rounded" />
                    <div className="bg-secondary/20 h-4 w-3/4 rounded" />
                  </div>
                  <div className="border-border-primary/20 flex items-center justify-between border-t pt-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary/20 h-10 w-10 rounded-full" />
                      <div className="space-y-2">
                        <div className="bg-secondary/20 h-3 w-20 rounded" />
                        <div className="bg-secondary/20 h-2.5 w-16 rounded" />
                      </div>
                    </div>
                    <div className="bg-secondary/20 h-4 w-24 rounded" />
                  </div>
                </div>
              </div>
            ) : featuredPost ? (
              <div
                onClick={() => router.push(`/blog/${featuredPost.slug}`)}
                className="group border-border-primary bg-secondary/10 grid cursor-pointer grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[40px] border transition-all duration-700 hover:shadow-[0_1.25rem_2.5rem_-0.9375rem_rgba(0,0,0,0.1)] lg:grid-cols-12 lg:gap-8"
              >
                <div className="relative aspect-video min-h-87.5 overflow-hidden lg:col-span-7 lg:aspect-auto">
                  <Image
                    src={featuredPost.coverImageUrl}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover opacity-90 grayscale transition-all duration-[1.5s] group-hover:scale-102 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                    width={1200}
                    height={1200}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-1.5 text-[.625rem] font-bold tracking-[0.2em] text-black uppercase shadow-lg backdrop-blur-md">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                      {t('blog.featured')}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-5 lg:p-16">
                  <div className="text-secondary/60 mb-8 flex items-center gap-4 font-mono text-[.625rem] tracking-widest uppercase">
                    {featuredPost.category ? (
                      <div className="border-border-primary bg-primary/40 text-secondary rounded border px-2 py-0.5">
                        {featuredPost.category}
                      </div>
                    ) : null}
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} /> {formatBlogDate(featuredPost.createdAt)}
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
                      <AuthorAvatar
                        post={featuredPost}
                        className="border-border-primary h-10 w-10 rounded-full border object-cover grayscale"
                      />
                      <div>
                        <span className="text-primary block text-[.6875rem] font-bold">
                          {featuredPost.authorName || 'Editorial Team'}
                        </span>
                        {featuredPost.authorRole ? (
                          <span className="text-secondary/50 block text-[.5625rem] tracking-wider uppercase">
                            {featuredPost.authorRole}
                          </span>
                        ) : null}
                      </div>
                    </div>
                    <div className="text-primary flex items-center gap-2 text-[.625rem] font-bold tracking-widest uppercase transition-all group-hover:gap-4">
                      {t('blog.read_article')} <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="bg-primary border-border-primary/55 bg-primary/95 sticky top-17.5 z-30 border-t border-b px-6 py-6 backdrop-blur-md sm:py-8 md:top-20 md:px-12">
        <div className="mx-auto flex max-w-350 flex-col items-center justify-between gap-6 md:flex-row">
          <div className="group relative w-full md:max-w-md">
            <Search className="text-secondary/50 group-focus-within:text-secondary absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 transition-colors" />
            <input
              type="text"
              placeholder={t('blog.search_placeholder')}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-secondary/35 border-border-primary text-primary placeholder-secondary/50 focus:border-secondary focus:ring-secondary/20 w-full rounded-full border py-3.5 pr-6 pl-12 font-sans text-xs transition-all focus:ring-1 focus:outline-hidden"
            />
          </div>

          <div className="scrollbar-hide -mx-6 flex w-full flex-nowrap items-center gap-2.5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setSkip(0)
                  setAccumulatedPosts([])
                }}
                className={`rounded-full px-5 py-2.5 text-[.625rem] font-bold tracking-wider whitespace-nowrap uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-invert text-invert shadow-xs'
                    : 'bg-secondary/40 border-border-primary text-secondary hover:text-primary hover:bg-secondary border'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary blog-grid-section px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-350">
          {listLoading && skip === 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex animate-pulse flex-col space-y-6">
                  <div className="bg-secondary/20 aspect-4/3 w-full rounded-4xl" />
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/20 h-3.5 w-20 rounded" />
                    <div className="bg-secondary/20 h-3.5 w-12 rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="bg-secondary/20 h-7 w-full rounded" />
                    <div className="bg-secondary/20 h-7 w-2/3 rounded" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="bg-secondary/20 h-3 w-full rounded" />
                    <div className="bg-secondary/20 h-3 w-full rounded" />
                    <div className="bg-secondary/20 h-3 w-4/5 rounded" />
                  </div>
                  <div className="border-border-primary/20 mt-auto flex items-center justify-between border-t pt-6">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-secondary/20 h-7 w-7 rounded-full" />
                      <div className="bg-secondary/20 h-3 w-20 rounded" />
                    </div>
                    <div className="bg-secondary/20 h-4.5 w-4.5 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    className="blog-card-reveal group flex flex-col items-start"
                  >
                    <div className="bg-secondary/10 border-border-primary/40 relative mb-8 aspect-4/3 w-full overflow-hidden rounded-4xl border">
                      <Image
                        src={post.coverImageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover brightness-90 grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                        width={1200}
                        height={1200}
                      />
                      {post.category ? (
                        <div className="absolute top-4 left-4">
                          <span className="rounded-full bg-white/90 px-3 py-1 text-[.5625rem] font-bold tracking-widest text-black uppercase backdrop-blur-sm">
                            {post.category}
                          </span>
                        </div>
                      ) : null}
                    </div>

                    <div className="text-secondary/50 mb-4 flex items-center gap-4 font-mono text-[.5625rem] tracking-widest uppercase">
                      <span>{formatBlogDate(post.createdAt)}</span>
                      {post.readTime ? (
                        <>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </>
                      ) : null}
                    </div>

                    <h3 className="font-display text-primary group-hover:text-secondary mb-4 line-clamp-2 text-2xl leading-tight font-light tracking-tight transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-secondary mb-6 line-clamp-3 text-sm leading-relaxed font-light">
                      {post.summary}
                    </p>

                    <div className="border-border-primary/30 mt-auto flex w-full items-center justify-between border-t pt-6">
                      <div className="flex items-center gap-2.5">
                        <AuthorAvatar
                          post={post}
                          className="border-border-primary h-7 w-7 rounded-full border object-cover text-[.625rem] grayscale"
                        />
                        <span className="text-primary text-[.625rem] font-bold">
                          {post.authorName || 'Editorial Team'}
                        </span>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-secondary -translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                    </div>
                  </Link>
                ))}
              </div>

              {listMeta?.hasMore ? (
                <div className="mt-16 flex justify-center">
                  <button
                    type="button"
                    disabled={listBusy}
                    onClick={() => setSkip((prev) => prev + PAGE_SIZE)}
                    className="border-border-primary text-primary hover:bg-secondary rounded-full border px-8 py-3 text-[.625rem] font-bold tracking-widest uppercase transition-colors disabled:opacity-50"
                  >
                    {listBusy ? 'Loading…' : 'Load more'}
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <div className="bg-secondary/5 border-border-primary rounded-[48px] border border-dashed py-32 text-center">
              <h3 className="font-display text-primary mb-2 text-2xl font-light">{t('blog.no_results')}</h3>
              <button
                onClick={() => {
                  setSearchInput('')
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
