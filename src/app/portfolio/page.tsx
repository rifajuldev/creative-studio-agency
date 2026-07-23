import Portfolio from '@/Portfolio'
import JsonLd from '@/components/seo/JsonLd'
import ServerTextBoost from '@/components/seo/ServerTextBoost'
import { fetchPortfolioIndex } from '@/lib/portfolio/server'
import { itemListJsonLd, webPageJsonLd } from '@/lib/seo/json-ld'
import { pageKeywordSets } from '@/lib/seo/keywords'
import { staticPagesSeo } from '@/lib/seo/static-pages'

export const metadata = staticPagesSeo.portfolio

export default async function PortfolioPage() {
  const projects = await fetchPortfolioIndex()

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(
            'Case Studies | Ads, SEO, Web & Brand Results | NextCreavo',
            'See real NextCreavo wins — Google Ads ROAS, Instagram growth, Map Pack rankings, high-converting websites, apps, AI products and motion design case studies.',
            '/portfolio',
            [...pageKeywordSets.portfolio]
          ),
          itemListJsonLd(
            'NextCreavo Portfolio Case Studies',
            '/portfolio',
            projects.map((p) => ({ name: p.title, url: `/portfolio/${p.slug}` }))
          ),
        ]}
      />
      <Portfolio initialList={projects} />
      <ServerTextBoost
        heading="NextCreavo portfolio index — projects searchable by crawlers"
        intro="Each case study below includes a plain-text summary in the initial HTML. Explore work across Google Ads, Meta (Facebook & Instagram), TikTok, LinkedIn, local SEO, Next.js websites, mobile apps, AI automation, UI/UX, and 2D animation."
        items={projects.slice(0, 24).map((project) => ({
          title: project.title,
          href: `/portfolio/${project.slug}`,
          summary:
            project.summary ||
            project.longDesc?.slice(0, 220) ||
            `${project.category || 'Creative work'} for ${project.client || 'a growing brand'}.`,
        }))}
        outro="Want similar results for your brand? Contact NextCreavo for a free project quote covering ads, SEO, web, apps, or AI."
      />
    </>
  )
}
