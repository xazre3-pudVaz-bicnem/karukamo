import type { Metadata } from 'next'
import Link from 'next/link'
import { columns, COLUMN_CATEGORIES } from '@/data/columns'
import { Breadcrumb, BreadcrumbSchema } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: '那珂湊・ひたちなか市テイクアウトコラム｜カルカモ',
  description: '那珂湊・ひたちなか市のテイクアウト・ランチ・食べ歩き・焼きそばに関する専門コラム。カルカモの使い方や観光情報をご紹介します。',
  openGraph: {
    title: '那珂湊・ひたちなか市テイクアウトコラム｜カルカモ',
    description: '那珂湊・ひたちなか市のテイクアウト・ランチ・食べ歩きに関する専門コラム。',
    url: 'https://www.karukamo.jp/column',
    siteName: 'カルカモ',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://www.karukamo.jp/column' },
}

export default function ColumnIndexPage() {
  const categories = COLUMN_CATEGORIES

  return (
    <>
      <BreadcrumbSchema items={[{ label: 'コラム' }]} />

      {/* ── Header ── */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14">
          <Breadcrumb items={[{ label: 'コラム' }]} />
          <div className="mt-6">
            <p className="label mb-4">Column</p>
            <h1 className="font-display font-light text-4xl md:text-6xl text-brown-deep leading-none mb-5">
              那珂湊コラム
            </h1>
            <p className="font-serif text-brown-light text-sm leading-loose max-w-xl">
              那珂湊・ひたちなか市でのテイクアウト・ランチ・食べ歩き・焼きそばに関する専門コラムです。
              カルカモへ来る前の参考にしてください。
            </p>
          </div>
        </div>
      </section>

      {/* ── Columns by category ── */}
      <section className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-14 py-14 md:py-20">
        {categories.map((cat) => {
          const catCols = columns.filter((c) => c.category === cat)
          if (catCols.length === 0) return null
          return (
            <div key={cat} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="label text-brand" style={{ fontSize: '11px' }}>{cat}</span>
                <span className="flex-1 h-px bg-bone/30" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {catCols.map((col) => (
                  <Link
                    key={col.slug}
                    href={`/column/${col.slug}`}
                    className="group block p-5 border border-bone/50 bg-white/60 hover:bg-white hover:border-bone transition-all"
                  >
                    <span
                      className="label text-bone/70 inline-block mb-3"
                      style={{ fontSize: '9px' }}
                    >
                      {col.category}
                    </span>
                    <p className="font-serif text-sm text-brown-deep leading-snug mb-2 group-hover:text-brand transition-colors">
                      {col.h1}
                    </p>
                    <p className="text-xs text-brown-light leading-relaxed line-clamp-2">
                      {col.description}
                    </p>
                    <p className="mt-3 label text-bone/50" style={{ fontSize: '9px' }}>
                      {col.updatedAt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}

        {/* Link to other pages */}
        <div className="pt-12 border-t border-bone/40">
          <p className="label mb-5 text-brown-light">カルカモのページ</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { href: '/yakisoba', label: '焼きそば' },
              { href: '/takeout', label: 'テイクアウト' },
              { href: '/lunch', label: 'ランチ' },
              { href: '/menu', label: 'メニュー' },
              { href: '/access', label: 'アクセス' },
              { href: '/faq', label: 'FAQ' },
              { href: '/blog', label: 'ブログ' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="label text-brand hover:text-brown-deep transition-colors"
                style={{ fontSize: '11px' }}
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
