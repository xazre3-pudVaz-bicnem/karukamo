import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { columns, getColumn, getRelatedColumns } from '@/data/columns'
import { Breadcrumb, BreadcrumbSchema } from '@/components/ui/Breadcrumb'
import { FAQBlock } from '@/components/ui/FAQBlock'
import { AccessMini } from '@/components/ui/AccessMini'
import { RelatedColumns } from '@/components/ui/RelatedColumns'

export function generateStaticParams() {
  return columns.map((col) => ({ slug: col.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const col = getColumn(slug)
  if (!col) return {}
  return {
    title: col.title,
    description: col.description,
    keywords: [col.category, '那珂湊', 'ひたちなか市', 'カルカモ', 'テイクアウト'],
    openGraph: {
      title: col.title,
      description: col.description,
      url: `https://www.karukamo.jp/column/${col.slug}`,
      siteName: 'カルカモ',
      locale: 'ja_JP',
      type: 'article',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
    alternates: { canonical: `https://www.karukamo.jp/column/${col.slug}` },
  }
}

export default async function ColumnSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const col = getColumn(slug)
  if (!col) notFound()

  const related = getRelatedColumns(col.relatedSlugs)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: col.h1,
    description: col.description,
    author: {
      '@type': 'Organization',
      name: 'カルカモ',
      url: 'https://www.karukamo.jp',
    },
    publisher: {
      '@type': 'Organization',
      name: 'カルカモ',
      url: 'https://www.karukamo.jp',
      logo: { '@type': 'ImageObject', url: 'https://www.karukamo.jp/logo.jpg' },
    },
    dateModified: col.updatedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://www.karukamo.jp/column/${col.slug}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BreadcrumbSchema
        items={[
          { label: 'コラム', href: '/column' },
          { label: col.h1 },
        ]}
      />

      {/* ── Hero ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-lg mx-auto px-6 sm:px-10 md:px-14">
          <Breadcrumb
            items={[
              { label: 'コラム', href: '/column' },
              { label: col.h1 },
            ]}
          />
          <div className="mt-6">
            <span
              className="label border border-bone/60 px-3 py-1 text-brown-light inline-block mb-5"
              style={{ fontSize: '10px' }}
            >
              {col.category}
            </span>
            <h1 className="font-serif text-2xl md:text-4xl text-brown-deep leading-snug mb-4">
              {col.h1}
            </h1>
            <p className="font-serif text-brown-light text-sm leading-loose max-w-2xl">
              {col.lead}
            </p>
          </div>
          <p className="mt-6 label text-brown-light/60" style={{ fontSize: '10px' }}>
            最終更新：{col.updatedAt}
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <article className="max-w-screen-lg mx-auto px-6 sm:px-10 md:px-14 py-14 md:py-20">
        <div className="max-w-2xl">
          {/* Quick nav */}
          {col.sections.length > 1 && (
            <nav className="mb-12 p-5 bg-ivory border border-bone/40">
              <p className="label mb-3" style={{ fontSize: '10px' }}>この記事で分かること</p>
              <ol className="space-y-2">
                {col.sections.map((sec, i) => (
                  <li key={i} className="flex gap-3 items-baseline">
                    <span className="font-display text-bone text-lg leading-none">{i + 1}</span>
                    <span className="font-serif text-brown text-sm leading-snug">{sec.heading}</span>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Sections */}
          {col.sections.map((sec, i) => (
            <section key={i} className="mb-12">
              <h2 className="font-serif text-lg md:text-xl text-brown-deep font-bold leading-snug mb-5 pb-3 border-b border-bone/40">
                {sec.heading}
              </h2>
              <div className="space-y-4">
                {sec.body.split('\n\n').map((para, j) => (
                  <p key={j} className="font-serif text-sm text-brown leading-loose">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Internal links block */}
          <div className="my-12 p-5 bg-ivory border border-bone/40">
            <p className="label mb-4" style={{ fontSize: '10px' }}>カルカモのメニュー・情報</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { href: '/yakisoba', label: '焼きそばページへ' },
                { href: '/takeout', label: 'テイクアウト特集' },
                { href: '/lunch', label: 'ランチ利用' },
                { href: '/menu', label: 'メニュー一覧' },
                { href: '/access', label: 'アクセス' },
                { href: '/about-nakaminato', label: '那珂湊エリア' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="label text-brand hover:text-brown-deep transition-colors"
                  style={{ fontSize: '11px' }}
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          {col.faqs.length > 0 && <FAQBlock items={col.faqs} />}

          {/* Access */}
          <AccessMini />
        </div>

        {/* Related columns */}
        {related.length > 0 && (
          <RelatedColumns
            items={related.map((r) => ({
              href: `/column/${r.slug}`,
              title: r.h1,
              desc: r.description.slice(0, 60) + '…',
            }))}
          />
        )}

        <div className="mt-10 pt-8 border-t border-bone/40">
          <Link
            href="/column"
            className="label text-brown-light hover:text-brown-deep transition-colors"
            style={{ fontSize: '11px' }}
          >
            ← コラム一覧へ戻る
          </Link>
        </div>
      </article>
    </>
  )
}
