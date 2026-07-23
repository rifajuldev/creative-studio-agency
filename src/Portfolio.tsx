'use client'

import { gsapScopeOptions } from '@/hooks/useScrollTriggerRefresh'
import type { IPortfolioPublicDetail, IPortfolioPublicListItem } from '@/interfaces/portfolio.interface'
import { absoluteUrl } from '@/lib/seo/site'
import {
  useGetPublicPortfolioBySlugQuery,
  useGetPublicPortfolioCategoriesQuery,
  useGetPublicPortfolioListQuery,
} from '@/redux/features/portfolio/portfolioPublic.api'
import { clearRevealStyles, reveal } from '@/utils/gsapReveal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight,
  Bot,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code,
  Layout,
  Link as LinkIcon,
  Lock,
  Megaphone,
  Monitor,
  Search,
  Smartphone,
  Sparkles,
  Target,
  Video,
  X as XIcon,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import ProjectTimeline from './components/ProjectTimeline'
import SocialShareToolbar from './components/SocialShareToolbar'
import { useLanguage } from './context/LanguageContext'

const Portfolio3DViewer = dynamic(() => import('./components/Portfolio3DViewer'), {
  ssr: false,
  loading: () => (
    <div className="bg-secondary/20 border-border-primary flex h-full min-h-[280px] w-full items-center justify-center rounded-3xl border">
      <span className="text-secondary text-xs tracking-widest uppercase">Loading 3D…</span>
    </div>
  ),
})

gsap.registerPlugin(ScrollTrigger)

type Project = {
  id: string
  title: string
  category: string
  categoryId: string
  desc: string
  longDesc: string
  img: string
  tags: string[]
  client: string
  timeline: string
  challenge: string
  solution: string
  results: string[]
  link?: string
  brandColors?: string[]
  techStack?: string[]
  strategySteps?: { phase: string; title: string; desc: string }[]
  kpis?: { label: string; value: string; desc: string }[]
}

const CATEGORY_ICONS: Record<string, typeof Video> = {
  animation: Video,
  marketing: Megaphone,
  webdev: Code,
  appdev: Smartphone,
  ai: Bot,
  uiux: Layout,
}

function toListProject(item: IPortfolioPublicListItem): Project {
  return {
    id: item.slug,
    title: item.title,
    category: item.category,
    categoryId: item.categoryId,
    desc: item.summary,
    longDesc: item.longDesc,
    img: item.coverImageUrl,
    tags: item.tags,
    client: item.client,
    timeline: item.timeline,
    challenge: '',
    solution: '',
    results: [],
  }
}

function toDetailProject(item: IPortfolioPublicDetail): Project {
  return {
    ...toListProject(item),
    challenge: item.challenge,
    solution: item.solution,
    results: item.results,
    link: item.link || undefined,
    brandColors: item.brandColors.length ? item.brandColors : undefined,
    techStack: item.techStack.length ? item.techStack : undefined,
    strategySteps: item.strategySteps.length ? item.strategySteps : undefined,
    kpis: item.kpis.length ? item.kpis : undefined,
  }
}

export default function Portfolio() {
  const params = useParams()
  const id = typeof params.id === 'string' ? params.id : undefined
  const router = useRouter()
  const { t } = useLanguage()

  const { data: listData, isLoading: listLoading } = useGetPublicPortfolioListQuery({
    skip: 0,
    limit: 100,
  })
  const { data: categoriesData } = useGetPublicPortfolioCategoriesQuery()
  const {
    data: detailData,
    isLoading: detailLoading,
    isError: detailError,
  } = useGetPublicPortfolioBySlugQuery(id!, { skip: !id })

  const PROJECTS = (listData?.data ?? []).map(toListProject)
  const sanityCategories = categoriesData?.data ?? []
  const totalCount = PROJECTS.length

  const CATEGORIES: {
    id: string
    label: string
    count: number
    desc?: string
    icon?: (typeof CATEGORY_ICONS)[string]
  }[] = [
    { id: 'all', label: t('portfolio.categories.all'), count: totalCount },
    ...sanityCategories.map((category) => ({
      id: category.slug,
      label: category.name,
      desc: category.description,
      icon: CATEGORY_ICONS[category.slug],
      count: category.count ?? 0,
    })),
  ]

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop')
  const [isHovered, setIsHovered] = useState(false)
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  // Scroll to top when active project changes via dynamic ID
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex)
    setCopiedColor(hex)
    setTimeout(() => {
      setCopiedColor(null)
    }, 2000)
  }

  // Helper to resolve specific strategy metrics based on project metadata
  const getProjectStrategy = (project: Project) => {
    const colors =
      project.brandColors ||
      (project.categoryId === 'animation'
        ? ['#FF3366', '#0F172A', '#38BDF8', '#F1F5F9']
        : project.categoryId === 'marketing'
          ? ['#10B981', '#06B6D4', '#1E293B', '#F8FAFC']
          : project.categoryId === 'webdev'
            ? ['#6366F1', '#4F46E5', '#0F172A', '#F3F4F6']
            : project.categoryId === 'appdev'
              ? ['#EC4899', '#DB2777', '#111827', '#FDF2F8']
              : project.categoryId === 'ai'
                ? ['#8B5CF6', '#3B82F6', '#0B0F19', '#EEF2FF']
                : ['#F59E0B', '#1E293B', '#64748B', '#F8FAFC'])

    const stack = project.techStack || project.tags

    const steps = project.strategySteps || [
      {
        phase: '01. BRIEF',
        title: 'Context & Landscape Audit',
        desc: `Evaluation of current performance gaps, visual bottlenecks and user requirements for ${project.client}.`,
      },
      {
        phase: '02. BLUEPRINT',
        title: 'Visual Wireframes & Interaction Flow Map',
        desc: 'Constructing user-centric interaction pathways to reduce payload cycles and maximize click engagements.',
      },
      {
        phase: '03. ENGINEERING',
        title: 'Pixel-Perfect Production Cycles',
        desc: 'Crafting responsive layout containers, micro-interactions, specialized assets and core state systems.',
      },
      {
        phase: '04. VELOCITY',
        title: 'Media Compression & Code Shaving',
        desc: 'Ensuring files load instantly on low-bandwidth regions, shaving unused modules and benchmarking performance.',
      },
      {
        phase: '05. DEPLOYMENT',
        title: 'Edge Delivery & Global Launch',
        desc: 'Deploying the refined build to lightning-fast cloud delivery networks with caching routes.',
      },
    ]

    const kpis = project.kpis || [
      {
        label: 'LIGHTHOUSE CORE',
        value: project.categoryId === 'webdev' || project.categoryId === 'animation' ? '99/100' : '96/100',
        desc: 'Speed Index benchmarking score',
      },
      {
        label: 'AVERAGE BOOST',
        value: project.categoryId === 'marketing' || project.id.includes('checkout') ? '+45%' : '+28%',
        desc: 'Product transaction & search visibility delta',
      },
      {
        label: 'HYDRATION WEIGHT',
        value: project.categoryId === 'animation' ? '160KB' : '1.1s',
        desc: 'Payload size for faster terminal responses',
      },
    ]

    return { colors, stack, steps, kpis }
  }

  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!id) {
        reveal('.portfolio-reveal', {
          from: { y: 40 },
          duration: 1.2,
          stagger: 0.1,
          scrollTrigger: { trigger: '.portfolio-container', start: 'top 85%' },
        })

        reveal('.hero-text-reveal', {
          from: { y: 80 },
          duration: 1.5,
          stagger: 0.1,
          delay: 0.1,
          scrollTrigger: false,
        })
      } else {
        reveal('.details-hero-reveal', {
          from: { y: 50 },
          duration: 1.3,
          stagger: 0.12,
          scrollTrigger: false,
        })

        reveal('.details-sec-card', {
          from: { y: 30 },
          duration: 1.1,
          stagger: 0.15,
          scrollTrigger: { trigger: '.details-sections', start: 'top 85%' },
        })
      }

      return () => clearRevealStyles('.portfolio-reveal, .hero-text-reveal, .details-hero-reveal, .details-sec-card')
    },
    { scope: container, dependencies: [id], ...gsapScopeOptions }
  )

  // -------------------------------------------------------------
  // DEDICATED FULL-PAGE DETAILS RENDER BRANCH
  // -------------------------------------------------------------
  if (id) {
    if (detailLoading) {
      return (
        <div className="bg-primary text-primary flex min-h-screen w-full items-center justify-center p-6">
          <div className="border-border-primary h-12 w-12 animate-spin rounded-full border-2 border-t-transparent" />
        </div>
      )
    }

    if (detailError || !detailData?.data) {
      return (
        <div className="bg-primary text-primary flex min-h-screen w-full flex-col items-center justify-center p-6 text-center">
          <Sparkles className="text-secondary mb-4 h-12 w-12 animate-pulse" />
          <h1 className="font-display text-2xl font-light">Case study not found</h1>
          <p className="text-secondary mt-2 mb-6 max-w-sm text-xs font-light">
            This project may have been moved or is not published yet.
          </p>
          <button
            onClick={() => router.push('/portfolio')}
            className="bg-invert text-invert hover:text-primary border-invert hover:border-primary rounded-full border px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all hover:bg-transparent"
          >
            Back to portfolio
          </button>
        </div>
      )
    }

    {
      const activeProject = toDetailProject(detailData.data)
      const { colors, stack, steps, kpis } = getProjectStrategy(activeProject)
      const currentIndex = Math.max(
        0,
        PROJECTS.findIndex((p) => p.id === id)
      )
      const prevProject =
        PROJECTS.length > 0 ? PROJECTS[currentIndex > 0 ? currentIndex - 1 : PROJECTS.length - 1] : activeProject
      const nextProject =
        PROJECTS.length > 0 ? PROJECTS[currentIndex < PROJECTS.length - 1 ? currentIndex + 1 : 0] : activeProject

      return (
        <div
          ref={container}
          className="bg-primary text-primary selection:bg-invert selection:text-invert min-h-screen w-full pb-32 transition-colors duration-700"
        >
          {/* Floating Share Control */}
          <SocialShareToolbar title={activeProject.title} url={absoluteUrl(`/portfolio/${activeProject.id}`)} />

          {/* Executive Sub-Header Controller Ribbon */}
          <div className="bg-primary/95 border-border-primary/80 sticky top-[70px] z-30 w-full border-b px-4 py-3 backdrop-blur-md md:top-[80px] md:px-12 md:py-4">
            <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 md:flex-row">
              {/* Back to directory launcher */}
              <button
                onClick={() => router.push('/portfolio')}
                className="text-primary hover:text-secondary group flex items-center gap-2.5 self-start text-[10px] font-bold tracking-[0.2em] uppercase transition-colors md:self-auto"
                id="back-to-listing-link"
              >
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {t('portfolio.back_to_grid')}
              </button>

              {/* Sequential Case Study Sliders */}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => router.push(`/portfolio/${prevProject.id}`)}
                  className="text-secondary hover:text-primary group flex items-center gap-2 text-[9px] font-semibold tracking-[0.15em] uppercase transition-colors"
                  title={`Previous: ${prevProject.title}`}
                >
                  <ChevronLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                  {t('portfolio.prev_case')}
                </button>
                <span className="bg-border-primary/60 h-3 w-[1px]" />
                <span className="text-secondary/70 font-mono text-[10px] tracking-widest lowercase">
                  {currentIndex + 1} of {PROJECTS.length}
                </span>
                <span className="bg-border-primary/60 h-3 w-[1px]" />
                <button
                  onClick={() => router.push(`/portfolio/${nextProject.id}`)}
                  className="text-secondary hover:text-primary group flex items-center gap-2 text-[9px] font-semibold tracking-[0.15em] uppercase transition-colors"
                  title={`Next: ${nextProject.title}`}
                >
                  {t('portfolio.next_case')}
                  <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Platform Preview frames control panel */}
              <div className="bg-secondary/80 border-border-primary/60 flex items-center gap-2 rounded-full border p-0.5">
                <button
                  onClick={() => setPreviewMode('desktop')}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase transition-all duration-300 ${
                    previewMode === 'desktop'
                      ? 'bg-primary text-primary border-border-primary/20 border shadow-sm'
                      : 'text-secondary/60 hover:text-primary'
                  }`}
                >
                  <Monitor size={10} />
                  {t('portfolio.desktop_pre')}
                </button>
                <button
                  onClick={() => setPreviewMode('mobile')}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold tracking-wider uppercase transition-all duration-300 ${
                    previewMode === 'mobile'
                      ? 'bg-primary text-primary border-border-primary/20 border shadow-sm'
                      : 'text-secondary/60 hover:text-primary'
                  }`}
                >
                  <Smartphone size={10} />
                  {t('portfolio.mobile_pre')}
                </button>
              </div>
            </div>
          </div>

          {/* Master Case Description & Hero Stage */}
          <section className="bg-primary relative px-6 pt-24 pb-16 md:px-12 md:pt-32">
            <div className="relative z-10 mx-auto w-full max-w-[1400px]">
              <div className="details-hero-reveal mb-8 flex flex-wrap items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="bg-secondary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-secondary relative inline-flex h-2.5 w-2.5 rounded-full"></span>
                </span>
                <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                  {t('portfolio.client_chronicle')}
                </span>
                <span className="bg-border-primary/60 h-1.5 w-1.5 rounded-full" />
                <span className="bg-secondary text-secondary border-border-primary/30 rounded-[1rem] border px-3.5 py-1 text-[9px] font-semibold tracking-wider uppercase">
                  {activeProject.category}
                </span>
              </div>

              <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
                <div className="details-hero-reveal space-y-6 lg:col-span-8">
                  <span className="text-secondary/50 block font-mono text-xs tracking-widest uppercase">
                    {activeProject.client} — Case Study
                  </span>

                  {/* Majestic Homepage-inspired typographic header */}
                  <h1 className="font-display text-primary text-4xl leading-[1] font-light tracking-tight sm:text-5xl md:text-6xl md:leading-[0.95] lg:text-[5.5rem]">
                    <span className="block font-light">
                      {(t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                        ? t(`project.${activeProject.id}.title`)
                        : activeProject.title
                      ).includes(' ')
                        ? (t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                            ? t(`project.${activeProject.id}.title`)
                            : activeProject.title
                          )
                            .split(' ')
                            .slice(
                              0,
                              Math.ceil(
                                (t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                                  ? t(`project.${activeProject.id}.title`)
                                  : activeProject.title
                                ).split(' ').length / 2
                              )
                            )
                            .join(' ')
                        : t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                          ? t(`project.${activeProject.id}.title`)
                          : activeProject.title}
                    </span>
                    <span className="text-secondary block pt-1 font-serif italic">
                      {(t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                        ? t(`project.${activeProject.id}.title`)
                        : activeProject.title
                      ).includes(' ')
                        ? (t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                            ? t(`project.${activeProject.id}.title`)
                            : activeProject.title
                          )
                            .split(' ')
                            .slice(
                              Math.ceil(
                                (t(`project.${activeProject.id}.title`) !== `project.${activeProject.id}.title`
                                  ? t(`project.${activeProject.id}.title`)
                                  : activeProject.title
                                ).split(' ').length / 2
                              )
                            )
                            .join(' ')
                        : 'blueprint.'}
                    </span>
                  </h1>

                  <p className="text-secondary max-w-4xl pt-4 text-lg leading-relaxed font-light md:text-xl">
                    {t(`project.${activeProject.id}.longDesc`) !== `project.${activeProject.id}.longDesc`
                      ? t(`project.${activeProject.id}.longDesc`)
                      : activeProject.longDesc}
                  </p>
                </div>

                {/* Visual Project Meta Specs */}
                <div className="border-border-primary/50 bg-secondary/20 details-hero-reveal space-y-6 rounded-[2rem] border p-8 lg:col-span-4">
                  <div>
                    <span className="text-secondary/50 mb-1 block text-[9px] font-semibold tracking-[0.2em] uppercase">
                      {t('portfolio.account_partner')}
                    </span>
                    <span className="text-primary block text-base font-semibold">{activeProject.client}</span>
                  </div>
                  <div className="border-border-primary/30 border-t pt-4">
                    <span className="text-secondary/50 mb-1 block text-[9px] font-semibold tracking-[0.2em] uppercase">
                      {t('portfolio.transit_timeline')}
                    </span>
                    <span className="text-primary flex items-center gap-1.5 text-base font-semibold">
                      <Clock size={14} className="text-secondary" />
                      {activeProject.timeline}
                    </span>
                  </div>
                  {activeProject.link && (
                    <div className="border-border-primary/30 border-t pt-4">
                      <span className="text-secondary/50 mb-1 block text-[9px] font-semibold tracking-[0.2em] uppercase">
                        {t('portfolio.live_link')}
                      </span>
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-secondary hover:text-primary group flex items-center gap-1.5 text-sm font-semibold transition-colors"
                      >
                        <LinkIcon size={12} className="transition-transform group-hover:rotate-45" />
                        {activeProject.link.replace('https://', '')}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Parallax-style Immersive Wide Hero Image Banner */}
              <div className="bg-secondary border-border-primary/80 group details-hero-reveal relative mb-12 aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] border md:rounded-[3.2rem]">
                <img
                  src={activeProject.img}
                  alt={activeProject.title}
                  className="relative -top-[10%] h-[120%] w-full object-cover opacity-90 grayscale transition-all duration-[1.5s] group-hover:scale-102 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Immersive 3D Experience Section */}
              <div className="details-hero-reveal mt-12">
                <Portfolio3DViewer />
              </div>
            </div>
          </section>

          {/* Majestic Core Technical Telemetry Stats (No bulky cards, highly scannable grid) */}
          <div className="border-border-primary/50 details-sections mx-auto my-12 grid max-w-[1400px] grid-cols-1 gap-8 border-t border-b px-6 py-16 md:grid-cols-3 md:gap-12 md:px-12">
            {kpis.map((kpi, kIdx) => (
              <div key={kIdx} className="details-sec-card space-y-4">
                <span className="text-secondary/60 block font-mono text-[10px] font-semibold tracking-[0.22em] uppercase">
                  {kpi.label}
                </span>
                <div className="font-display text-primary text-5xl leading-none font-light tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  {kpi.value}
                </div>
                <p className="text-secondary max-w-sm font-sans text-sm leading-relaxed font-light">{kpi.desc}</p>
              </div>
            ))}
          </div>

          {/* Project Milestone Timeline */}
          <ProjectTimeline />
          <section className="bg-primary px-6 py-12 md:px-12">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-24">
              {/* LEFT CHANNEL: Narrative, Strategy Steps & swatches */}
              <div className="space-y-20 lg:col-span-7">
                {/* Section 01: Brief Challenge & Core Highlights */}
                <div className="border-border-primary/40 space-y-10 border-b pb-16">
                  <div className="flex items-center gap-3">
                    <span className="text-secondary bg-secondary border-border-primary/60 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold shadow-xs select-none">
                      01
                    </span>
                    <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                      {t('portfolio.strategic_brief')}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-8 pt-2 md:grid-cols-2">
                    <div className="space-y-3">
                      <h4 className="text-secondary/60 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                        <Target size={12} className="text-secondary" />
                        {t('portfolio.pinnacle_obstacle')}
                      </h4>
                      <p className="text-secondary text-sm leading-relaxed font-light">{activeProject.challenge}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-secondary/60 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                        <CheckCircle size={12} className="text-secondary" />
                        {t('portfolio.technical_formulation')}
                      </h4>
                      <p className="text-secondary text-sm leading-relaxed font-light">{activeProject.solution}</p>
                    </div>
                  </div>

                  <div className="border-border-primary/30 space-y-4 border-t pt-6">
                    <h4 className="text-secondary/40 text-[10px] font-bold tracking-widest uppercase">
                      {t('portfolio.verified_outcomes')}
                    </h4>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {activeProject.results.map((result, rIdx) => (
                        <div
                          key={rIdx}
                          className="bg-secondary/20 border-border-primary/45 hover:border-secondary/40 flex items-start gap-4 rounded-2xl border p-5 transition-colors"
                        >
                          <span className="bg-primary border-border-primary/50 text-secondary mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[9px] font-bold select-none">
                            ✓
                          </span>
                          <span className="text-secondary text-xs leading-relaxed font-light">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 02: Design Brand Swatches */}
                <div className="border-border-primary/40 space-y-8 border-b pb-16">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-secondary bg-secondary border-border-primary/60 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold select-none">
                        02
                      </span>
                      <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                        {t('portfolio.aesthetic_swatches')}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-secondary mb-8 max-w-xl text-xs leading-relaxed font-light">
                      {t('portfolio.aesthetic_desc')}
                    </p>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {colors.map((color, cIdx) => (
                        <div
                          key={cIdx}
                          onClick={() => copyToClipboard(color)}
                          className="group/swatch border-border-primary/40 bg-secondary/10 hover:bg-secondary/30 flex cursor-pointer flex-col items-center rounded-2xl border p-3 transition-all"
                          title="Copy Hex Color"
                        >
                          <div
                            className="relative mb-3 aspect-square w-full rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-transform duration-300 group-hover/swatch:scale-95"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-primary block font-mono text-[10px] font-bold tracking-wider uppercase">
                            {color}
                          </span>
                          <span className="text-secondary mt-1 block text-[8px] tracking-widest uppercase">
                            {copiedColor === color ? 'Copied' : 'Click Copy'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 03: Process Roadmap Milestones (Highly styled like methodology list) */}
                <div className="border-border-primary/40 space-y-10 border-b pb-16">
                  <div className="flex items-center gap-3">
                    <span className="text-secondary bg-secondary border-border-primary/60 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold select-none">
                      03
                    </span>
                    <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                      {t('portfolio.workflow_roadmap')}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    {steps.map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="border-border-primary/40 group grid grid-cols-1 items-start gap-6 border-t py-8 md:grid-cols-12"
                      >
                        <div className="md:col-span-2">
                          <span className="text-secondary/40 font-display group-hover:text-primary block font-serif text-4xl font-light italic transition-colors duration-500 md:text-5xl">
                            {String(sIdx + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="md:col-span-4">
                          <span className="text-secondary/40 mb-1 block font-mono text-[9px] tracking-widest uppercase">
                            {step.phase}
                          </span>
                          <h4 className="font-display text-primary text-base leading-tight font-light">{step.title}</h4>
                        </div>
                        <div className="md:col-span-6">
                          <p className="text-secondary max-w-md text-xs leading-relaxed font-light">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 04: Engineering Ingredient Badges */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-secondary bg-secondary border-border-primary/60 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-xs font-bold select-none">
                      04
                    </span>
                    <span className="text-secondary text-[10px] font-bold tracking-[0.25em] uppercase">
                      {t('portfolio.infrastructure_toolkit')}
                    </span>
                  </div>

                  <p className="text-secondary max-w-xl text-xs leading-relaxed font-light">
                    {t('portfolio.infrastructure_desc')}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {stack.map((item, key) => (
                      <span
                        key={key}
                        className="bg-secondary border-border-primary/60 text-secondary flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium tracking-wider uppercase"
                      >
                        <span className="bg-secondary h-1.5 w-1.5 rounded-full" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT CHANNEL: Device Preview Simulator (Stickily docked on desktop) */}
              <div className="space-y-6 lg:sticky lg:top-[180px] lg:col-span-5">
                <div className="text-center">
                  <span className="bg-secondary/80 border-border-primary/60 text-secondary inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[10px] font-bold tracking-widest uppercase shadow-sm">
                    <Sparkles size={11} className="text-secondary animate-spin" style={{ animationDuration: '3s' }} />
                    Interactive Showcase Simulator
                  </span>
                  <p className="text-secondary/60 mt-2 text-[10px] font-medium tracking-wider uppercase">
                    Mouse over viewport to auto-scroll assets
                  </p>
                </div>

                {previewMode === 'desktop' ? (
                  /* Chrome Simulator block */
                  <div className="bg-primary border-border-primary/80 mx-auto flex w-full max-w-[550px] flex-col overflow-hidden rounded-2xl border shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)]">
                    <div className="bg-secondary/70 border-border-primary/60 flex items-center justify-between border-b px-4 py-3 select-none">
                      <div className="flex shrink-0 gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                      </div>
                      <div className="bg-primary border-border-primary/40 text-secondary flex w-full max-w-[280px] items-center justify-center gap-1.5 truncate rounded-md border px-3 py-1 font-mono text-[9px] tracking-wider select-all">
                        <Lock size={9} className="text-secondary/70 shrink-0" />
                        <span>https://{activeProject.id}.nextcreavo.com</span>
                      </div>
                      <span className="text-secondary/30 font-mono text-[8px]">CMD+R</span>
                    </div>

                    <div
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="bg-secondary group/viewport relative h-[400px] w-full cursor-pointer overflow-hidden select-none"
                    >
                      <img
                        src={activeProject.img}
                        alt="Desktop Preview"
                        className="absolute top-0 left-0 h-auto w-full transition-transform ease-in-out"
                        style={{
                          transitionDuration: isHovered ? '8s' : '3s',
                          transform: isHovered ? 'translateY(calc(-100% + 400px))' : 'translateY(0)',
                        }}
                        referrerPolicy="no-referrer"
                      />

                      {!isHovered && (
                        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-6 text-center backdrop-blur-[1px] transition-all duration-300">
                          <div className="mb-2 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-white/40 bg-white/20 text-white">
                            <ArrowUpRight className="rotate-45" size={16} />
                          </div>
                          <span className="rounded-md border border-white/10 bg-black/85 px-3 py-1.5 text-[9px] font-bold tracking-widest text-white uppercase select-none">
                            Hover to Scroll
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="bg-secondary/40 border-border-primary/40 text-secondary/50 flex justify-between border-t px-4 py-2 text-[8px] font-semibold tracking-wider uppercase">
                      <span>SSL Secured Pipeline</span>
                      <span>60FPS Render</span>
                    </div>
                  </div>
                ) : (
                  /* Mobile Simulator block */
                  <div
                    className="bg-primary border-secondary relative mx-auto flex w-[280px] flex-col overflow-hidden rounded-[3rem] border-[10px] shadow-2xl"
                    style={{ height: '520px' }}
                  >
                    <div className="absolute top-2.5 left-1/2 z-30 flex h-6 w-28 -translate-x-1/2 items-center justify-center rounded-full bg-black text-[7px] font-bold text-white select-none">
                      <span className="scale-90 opacity-80">NextCreavo Mobile</span>
                    </div>

                    <div className="bg-primary/95 text-primary border-border-primary/15 relative z-20 flex items-center justify-between border-b pt-3.5 pr-6 pb-2.5 pl-8 font-mono text-[7px] font-bold tracking-wider uppercase select-none">
                      <span>09:41</span>
                      <span>5G</span>
                    </div>

                    <div
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="bg-secondary group/viewport relative w-full flex-1 cursor-pointer overflow-hidden select-none"
                    >
                      <img
                        src={activeProject.img}
                        alt="Mobile Preview"
                        className="absolute top-0 left-0 h-auto w-full transition-transform ease-in-out"
                        style={{
                          transitionDuration: isHovered ? '9s' : '3s',
                          transform: isHovered ? 'translateY(calc(-100% + 450px))' : 'translateY(0)',
                        }}
                        referrerPolicy="no-referrer"
                      />

                      {!isHovered && (
                        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-center backdrop-blur-[1px] transition-all duration-300">
                          <div className="mb-2 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-white/40 bg-white/20 text-white">
                            <ArrowUpRight className="rotate-45" size={14} />
                          </div>
                          <span className="rounded-md border border-white/10 bg-black/85 px-2.5 py-1.5 text-[8px] font-bold tracking-widest text-white uppercase select-none">
                            {t('portfolio.hover_to_scroll')}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="bg-primary border-border-primary/15 flex items-center justify-center border-t py-2.5 select-none">
                      <div className="bg-secondary/85 h-1 w-20 rounded-full" />
                    </div>
                  </div>
                )}

                <div className="mx-auto max-w-sm px-2 text-center select-none">
                  <h4 className="font-display text-primary mb-1.5 text-xs font-medium tracking-tight">
                    {activeProject.title} {t('portfolio.interactive_grid')}
                  </h4>
                  <p className="text-secondary text-[11px] leading-relaxed font-light">
                    {t('portfolio.designed_by_desc')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Majestic Next Case study routing banner (With sleek image scale and serif links) */}
          <section className="border-border-primary/45 bg-primary relative mt-20 overflow-hidden border-t px-6 py-24 md:px-12">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
                <div className="space-y-6 lg:col-span-8">
                  <span className="text-secondary/60 block font-mono text-[10px] tracking-[0.25em] uppercase">
                    {t('portfolio.next_chronicle')}
                  </span>
                  <h2 className="font-display text-primary text-3xl leading-[1.1] font-light tracking-tight md:text-5xl lg:text-[3.5rem]">
                    {t('portfolio.ready_inspect_next')} <br />
                    <Link
                      href={`/portfolio/${nextProject.id}`}
                      className="text-secondary hover:text-primary border-secondary/35 border-b font-serif font-light italic transition-colors"
                    >
                      {nextProject.title}
                    </Link>
                  </h2>
                  <p className="text-secondary/70 max-w-lg text-sm leading-relaxed font-light">
                    {t('portfolio.see_how_resolved')} {nextProject.client}.
                  </p>
                </div>

                <div className="lg:col-span-4 lg:text-right">
                  <Link
                    href={`/portfolio/${nextProject.id}`}
                    className="bg-invert text-invert hover:text-primary border-invert hover:border-primary group inline-flex items-center justify-center gap-3 rounded-full border px-8 py-4 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 hover:bg-transparent"
                  >
                    {t('portfolio.launch_next')}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Master Call-To-Action Project Launch Footer */}
          <section className="border-border-primary/40 bg-primary relative overflow-hidden border-t px-6 py-24 md:px-12">
            <div className="bg-secondary/5 pointer-events-none absolute inset-0" />
            <div className="relative z-10 mx-auto max-w-[1400px] space-y-6 text-center">
              <span className="text-secondary block text-[10px] font-bold tracking-[0.25em] uppercase">
                {t('portfolio.conclusion_milestone')}
              </span>
              <h2 className="font-display text-primary text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                {t('portfolio.ready_replicate')}
              </h2>
              <p className="text-secondary mx-auto mb-10 max-w-lg pb-6 text-sm leading-relaxed font-light">
                {t('portfolio.connect_desc')}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-invert text-invert hover:text-primary border-invert hover:border-primary group inline-flex items-center justify-center gap-3 rounded-full border px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all hover:bg-transparent"
                  >
                    {t('portfolio.launch_live')}{' '}
                    <LinkIcon
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
                <button
                  onClick={() => router.push('/portfolio')}
                  className="text-primary hover:bg-secondary/40 border-border-primary rounded-full border bg-transparent px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-all"
                >
                  {t('portfolio.return_to_directory')}
                </button>
              </div>
            </div>
          </section>

          {/* Chronicle legal brand info */}
          <div className="border-border-primary text-secondary/60 mx-auto mt-12 flex max-w-[1400px] flex-col items-center justify-between border-t px-6 py-6 font-mono text-[9px] font-bold tracking-widest uppercase md:flex-row md:px-12">
            <span>NextCreavo Enterprise Performance Chronicle</span>
            <span className="mt-2 md:mt-0">Copyright © 2026 NextCreavo Studio. All rights reserved.</span>
          </div>
        </div>
      )
    }
  }

  if (listLoading) {
    return (
      <div className="bg-primary text-primary flex min-h-screen w-full items-center justify-center p-6">
        <div className="border-border-primary h-12 w-12 animate-spin rounded-full border-2 border-t-transparent" />
      </div>
    )
  }

  // -------------------------------------------------------------
  // PRIMARY PORTFOLIO DIRECTORY / GALLERY listing RENDER BRANCH
  // -------------------------------------------------------------
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.categoryId === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const activeCategoryDetail = CATEGORIES.find((c) => c.id === selectedCategory)

  return (
    <div ref={container} className="bg-primary min-h-screen w-full overflow-hidden">
      {/* Editorial Header Section */}
      <section className="bg-primary relative px-6 pt-32 pb-12 sm:pt-40 sm:pb-16 md:px-12 md:pt-52 md:pb-24">
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="flex flex-col items-start justify-between gap-8 sm:gap-10 lg:flex-row lg:items-end">
            <div>
              <span className="hero-text-reveal text-secondary border-border-primary mb-4 block w-max rounded-full border px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase sm:mb-6 md:text-sm">
                {t('portfolio.listing_tag')}
              </span>
              <h1 className="hero-text-reveal font-display text-primary max-w-4xl text-4xl leading-[1.1] font-light tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
                {t('portfolio.listing_title_part1')} <br />
                <span className="text-secondary font-serif italic">{t('portfolio.listing_title_part2')}</span>
              </h1>
            </div>
            <p className="hero-text-reveal text-secondary max-w-sm pb-3 text-base leading-relaxed font-light sm:text-lg md:text-xl lg:text-right">
              {t('portfolio.listing_desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Filter & Grid Container */}
      <section className="bg-primary portfolio-container px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          {/* Controls Bar: Search & Category Tab Buttons */}
          <div className="border-border-primary mb-12 flex flex-col items-start justify-between gap-6 border-t border-b py-8 sm:mb-16 sm:gap-8 sm:py-10 lg:flex-row lg:items-center">
            {/* Category Navigation System */}
            <div className="scrollbar-hide -mx-6 flex max-w-full flex-nowrap gap-2.5 overflow-x-auto px-6 pb-4 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 lg:max-w-4xl">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`relative flex items-center gap-2 rounded-full border px-4 py-2.5 text-[10px] font-semibold tracking-wider whitespace-nowrap uppercase transition-all duration-500 sm:px-5 sm:text-xs ${
                      isActive
                        ? 'bg-invert text-invert border-transparent'
                        : 'bg-primary text-secondary border-border-primary hover:border-text-secondary'
                    }`}
                  >
                    {category.id !== 'all' && <span className="bg-secondary h-1.5 w-1.5 rounded-full" />}
                    <span>{category.label}</span>
                    <span className={`text-[9px] ${isActive ? 'opacity-85' : 'opacity-45'}`}>({category.count})</span>
                  </button>
                )
              })}
            </div>

            {/* In-page Rich Search Bar */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                placeholder={t('portfolio.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-secondary/50 border-border-primary text-primary placeholder-secondary/50 focus:border-secondary w-full rounded-full border py-3.5 pr-4 pl-11 text-xs font-medium tracking-wider uppercase transition-colors focus:outline-none sm:py-3"
                id="portfolio-search-input"
              />
              <Search className="text-secondary/50 absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-secondary/50 hover:text-primary absolute top-1/2 right-4 -translate-y-1/2"
                >
                  <XIcon className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Active Category Meta Explanation */}
          {activeCategoryDetail && activeCategoryDetail.id !== 'all' && (
            <div className="bg-secondary border-border-primary mb-12 flex flex-col items-start justify-between gap-8 rounded-[2rem] border p-8 md:flex-row md:items-center md:p-12">
              <div className="max-w-2xl">
                <span className="text-secondary mb-2 block text-[10px] font-semibold tracking-[0.2em] uppercase">
                  {t('portfolio.category_overview')}
                </span>
                <h2 className="font-display text-primary mb-3 text-2xl font-light md:text-3xl">
                  {activeCategoryDetail.label}
                </h2>
                <p className="text-secondary text-sm leading-relaxed font-light md:text-base">
                  {activeCategoryDetail.desc}
                </p>
              </div>
              <div className="bg-primary border-border-primary flex shrink-0 items-center justify-center rounded-2xl border p-6">
                {activeCategoryDetail.icon && (
                  <activeCategoryDetail.icon className="text-secondary h-8 w-8" strokeWidth={1.2} />
                )}
              </div>
            </div>
          )}

          {/* Staggered Portfolio Items Grid */}
          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group portfolio-reveal flex flex-col"
                  id={`portfolio-item-${project.id}`}
                >
                  <Link href={`/portfolio/${project.id}`} className="flex flex-col">
                    {/* Styled Rounded Card Wrap */}
                    <div className="border-border-primary bg-secondary relative mb-6 aspect-[4/5] w-full overflow-hidden rounded-[2rem] border transition-all duration-[0.8s] group-hover:border-transparent group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
                      {/* Grayscale image element shifting to vibrant full-color on hover */}
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-full w-full scale-102 object-cover grayscale transition-all duration-[1.2s] ease-out group-hover:scale-100 group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />

                      {/* Gradient Overlay for Hover Text */}
                      <div className="absolute inset-x-0 top-1/2 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <span className="text-secondary mb-2 block text-[10px] font-bold tracking-[0.2em] uppercase">
                          {t('portfolio.interactive_case_studio')}
                        </span>
                        <h4 className="font-display mb-4 text-2xl leading-tight font-medium text-white">
                          {t(`project.${project.id}.title`) !== `project.${project.id}.title`
                            ? t(`project.${project.id}.title`)
                            : project.title}
                        </h4>
                        <p className="line-clamp-2 text-xs leading-relaxed font-light text-gray-300">
                          {t(`project.${project.id}.desc`) !== `project.${project.id}.desc`
                            ? t(`project.${project.id}.desc`)
                            : project.desc}
                        </p>
                      </div>

                      {/* Constant Top Category Tag */}
                      <div className="bg-primary/80 text-secondary border-border-primary/40 absolute top-6 left-6 rounded-full border px-4 py-1.5 text-[9px] font-semibold tracking-wider uppercase backdrop-blur-md transition-colors duration-500">
                        {project.category}
                      </div>

                      {/* Hover Arrow indicator */}
                      <div className="bg-invert text-invert border-border-primary absolute top-6 right-6 flex h-10 w-10 scale-75 items-center justify-center rounded-full border opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:scale-100 group-hover:opacity-100">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    {/* Informative Grid Details */}
                    <div className="pl-2">
                      <span className="text-secondary mb-1.5 block text-[9px] font-bold tracking-[0.25em] uppercase">
                        {project.client}
                      </span>
                      <h3 className="font-display text-primary group-hover:text-secondary mb-4 text-2xl font-light tracking-tight transition-all duration-500 group-hover:translate-x-1.5">
                        {t(`project.${project.id}.title`) !== `project.${project.id}.title`
                          ? t(`project.${project.id}.title`)
                          : project.title}
                      </h3>

                      {/* Horizontal Pill Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-secondary/70 bg-secondary rounded-md px-3 py-1 text-[9px] font-semibold tracking-wider uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Zero Search Results Fallback state */}
          {filteredProjects.length === 0 && (
            <div className="border-border-primary bg-secondary/20 rounded-[2.5rem] border border-dashed py-24 text-center">
              <div className="bg-secondary border-border-primary text-secondary mb-6 inline-flex rounded-full border px-4 py-4">
                <Search size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-primary mb-2 text-xl font-light">{t('portfolio.no_projects_found')}</h3>
              <p className="text-secondary mx-auto max-w-md text-sm leading-relaxed font-light">
                {t('portfolio.no_projects_desc_part1')} "
                <span className="text-primary font-semibold">{searchQuery}</span>"{' '}
                {t('portfolio.no_projects_desc_part2')}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="bg-invert text-invert hover:text-primary border-invert hover:border-primary mt-6 rounded-full border px-6 py-2.5 text-xs leading-relaxed font-semibold tracking-wider uppercase transition-all duration-500 hover:bg-transparent"
              >
                {t('portfolio.reset_filters')}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="border-border-primary/60 mx-auto max-w-[1400px] space-y-6 border-t px-6 py-14 md:px-12 md:py-20">
        <h2 className="font-display text-primary text-2xl font-light tracking-tight md:text-3xl">
          Case studies across ads, web, product, and motion
        </h2>
        <p className="text-secondary max-w-4xl text-base leading-relaxed font-light md:text-lg">
          The NextCreavo portfolio highlights real client work spanning digital marketing, Google Ads and Meta
          campaigns, local SEO and Map Pack growth, Next.js and headless commerce builds, mobile apps, AI automation,
          UI/UX design systems, and 2D / Lottie animation. Filter by category or search by keyword to explore outcomes,
          process, and creative direction.
        </p>
        <p className="text-secondary max-w-4xl text-base leading-relaxed font-light md:text-lg">
          Every case study focuses on measurable results where possible — ROAS, lead quality, page speed, engagement, or
          brand clarity — and shows how strategy, design, and engineering work together. Looking for a similar outcome
          for Facebook, Instagram, TikTok, LinkedIn, Twitter/X, or Google? Review a few projects, then{' '}
          <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
            start a project brief
          </Link>{' '}
          or explore our{' '}
          <Link href="/services" className="text-primary underline-offset-4 hover:underline">
            full service suite
          </Link>
          .
        </p>
        <ul className="text-secondary grid max-w-4xl list-disc grid-cols-1 gap-2 pl-5 text-base font-light md:grid-cols-2">
          <li>Performance creative for Google Ads and Meta (Facebook & Instagram)</li>
          <li>Social growth systems for LinkedIn, TikTok, and Twitter/X</li>
          <li>Conversion-focused websites, Shopify, and product interfaces</li>
          <li>AI features, motion design, and multi-channel brand launches</li>
        </ul>
      </section>
    </div>
  )
}
