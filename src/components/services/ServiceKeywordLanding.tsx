'use client'

import { getRelatedServiceLandings, SERVICE_PILLAR_LABELS, type ServiceLandingPage } from '@/data/servicePages'
import { ArrowRight, CheckCircle2, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

interface Props {
  service: ServiceLandingPage
}

export default function ServiceKeywordLanding({ service }: Props) {
  const related = getRelatedServiceLandings(service.slug)

  return (
    <div className="bg-primary text-primary min-h-screen w-full pb-32 transition-colors duration-700">
      <div className="bg-primary/95 border-border-primary/80 sticky top-[80px] z-30 w-full border-b px-6 py-4 backdrop-blur-md md:px-12">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <Link
            href="/services"
            className="text-primary hover:text-secondary group flex items-center gap-2.5 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All Services
          </Link>
          <span className="text-secondary/70 font-mono text-[10px] tracking-wider uppercase">
            {SERVICE_PILLAR_LABELS[service.pillar]}
          </span>
        </div>
      </div>

      <section className="px-6 pt-16 pb-12 md:px-12 md:pt-24">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-secondary mb-6 text-[10px] font-semibold tracking-[0.25em] uppercase">
            NextCreavo · {SERVICE_PILLAR_LABELS[service.pillar]}
          </p>
          <h1 className="font-display text-primary max-w-5xl text-4xl leading-[1.05] font-light tracking-tight sm:text-5xl md:text-7xl">
            {service.primaryKeyword}
          </h1>
          <p className="text-secondary mt-8 max-w-3xl text-base leading-relaxed font-light md:text-lg">
            {service.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-invert text-invert rounded-full px-8 py-4 text-[10px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-90"
            >
              Start a project
            </Link>
            <Link
              href="/portfolio"
              className="border-border-primary text-primary hover:bg-secondary rounded-full border px-8 py-4 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors"
            >
              View case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="border-border-primary border-t px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-primary text-3xl font-light tracking-tight md:text-4xl">Outcomes</h2>
          </div>
          <ul className="space-y-4 lg:col-span-8">
            {service.outcomes.map((item) => (
              <li key={item} className="border-border-primary flex items-start gap-3 border-b pb-4">
                <CheckCircle2 className="text-secondary mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.5} />
                <span className="text-primary text-base font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-border-primary border-t px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-primary text-3xl font-light tracking-tight md:text-4xl">
              What we deliver
            </h2>
            <p className="text-secondary mt-4 text-sm leading-relaxed font-light">
              Built for teams searching for {service.primaryKeyword.toLowerCase()} and related services like{' '}
              {service.secondaryKeywords.slice(0, 2).join(', ')}.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {service.deliverables.map((item) => (
              <li key={item} className="bg-secondary rounded-2xl px-6 py-5 text-sm font-light">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-border-primary border-t px-6 py-16 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-primary mb-8 text-3xl font-light tracking-tight md:text-4xl">Tech stack</h2>
          <div className="flex flex-wrap gap-3">
            {service.techStack.map((tech) => (
              <span
                key={tech}
                className="border-border-primary text-secondary rounded-full border px-4 py-2 text-[10px] font-medium tracking-[0.15em] uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-border-primary border-t px-6 py-16 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-primary mb-10 text-3xl font-light tracking-tight md:text-4xl">FAQ</h2>
          <div className="space-y-8">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="border-border-primary border-b pb-8">
                <h3 className="text-primary mb-3 text-lg font-medium">{faq.question}</h3>
                <p className="text-secondary max-w-3xl text-sm leading-relaxed font-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-border-primary border-t px-6 py-16 md:px-12">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="font-display text-primary mb-8 text-3xl font-light tracking-tight md:text-4xl">
              Related services
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="border-border-primary hover:bg-secondary group rounded-2xl border p-6 transition-colors"
                >
                  <p className="text-secondary mb-2 text-[10px] tracking-[0.2em] uppercase">
                    {SERVICE_PILLAR_LABELS[item.pillar]}
                  </p>
                  <p className="text-primary mb-3 text-lg font-medium">{item.primaryKeyword}</p>
                  <p className="text-secondary mb-4 text-sm font-light">{item.shortDesc}</p>
                  <span className="text-primary inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase">
                    Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-secondary mt-10 flex flex-wrap gap-6 text-sm font-light">
              <Link href="/" className="hover:text-primary underline-offset-4 hover:underline">
                Homepage
              </Link>
              <Link href="/blog" className="hover:text-primary underline-offset-4 hover:underline">
                Blog
              </Link>
              <Link href="/portfolio" className="hover:text-primary underline-offset-4 hover:underline">
                Case studies
              </Link>
              <Link href="/contact" className="hover:text-primary underline-offset-4 hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
