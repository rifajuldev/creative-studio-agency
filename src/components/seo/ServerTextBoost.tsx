import Link from 'next/link'

type TextItem = { title: string; href?: string; summary: string }

/** Server-rendered prose that boosts text:HTML ratio for crawlers (always in initial HTML). */
export default function ServerTextBoost({
  heading,
  intro,
  items,
  outro,
}: {
  heading: string
  intro: string
  items?: TextItem[]
  outro?: string
}) {
  return (
    <section className="border-border-primary/50 bg-primary text-primary mx-auto max-w-[1400px] space-y-6 border-t px-6 py-12 md:px-12 md:py-16">
      <h2 className="font-display text-2xl font-light tracking-tight md:text-3xl">{heading}</h2>
      <p className="text-secondary max-w-4xl text-base leading-relaxed font-light md:text-lg">{intro}</p>
      {items?.length ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="border-border-primary/70 bg-secondary/5 space-y-2 rounded-2xl border p-5"
            >
              <h3 className="font-display text-lg font-medium tracking-tight">
                {item.href ? (
                  <Link href={item.href} className="hover:text-secondary transition-colors">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
              <p className="text-secondary text-sm leading-relaxed font-light">{item.summary}</p>
            </article>
          ))}
        </div>
      ) : null}
      {outro ? (
        <p className="text-secondary max-w-4xl text-base leading-relaxed font-light md:text-lg">{outro}</p>
      ) : null}
    </section>
  )
}
