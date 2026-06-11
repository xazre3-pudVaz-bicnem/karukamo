import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: '那珂湊観光 | ブログ | カルカモ — ひたちなか市・茨城',
  description:
    '那珂湊観光情報ブログ。おさかな市場・周辺観光スポット・食べ歩きグルメ・アクセス情報など、那珂湊（ひたちなか市）の観光に役立つ情報を発信。',
  keywords: ['那珂湊 観光', 'ひたちなか市 観光', '那珂湊 グルメ', '那珂湊 おさかな市場', '茨城 日帰り旅行'],
  alternates: { canonical: 'https://karukamo.jp/blog/nakaminato' },
}

export default function BlogNakaminatoPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: '那珂湊観光' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Blog Category</p>
              <h1 className="font-display font-light text-5xl md:text-7xl leading-none text-brown-deep mb-6">
                NAKAMINATO
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">那珂湊観光 — ひたちなか市・茨城の観光情報</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <div className="max-w-2xl mb-14">
              <p className="label mb-4">About This Category</p>
              <h2 className="font-display font-light text-3xl md:text-4xl text-brown-deep leading-none mb-8">
                那珂湊観光お役立ち情報
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                このカテゴリでは、カルカモが立地する那珂湊エリアの観光情報をお届けします。
                那珂湊おさかな市場・ひたち海浜公園・港周辺のスポットなど、
                ひたちなか市・那珂湊の観光を計画するのに役立つ情報が揃っています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                東京・水戸からのアクセス方法、季節ごとのおすすめ観光スポット、
                ランチやテイクアウトグルメの情報など、
                那珂湊観光をより豊かに楽しむためのガイドとして活用してください。
              </p>
              <p className="font-serif text-brown-light text-xs leading-loose">
                カルカモのある那珂湊エリアの詳細は「那珂湊エリア情報」ページもご覧ください。
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/about-nakaminato"
                className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                那珂湊エリア情報ページへ
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-4 label text-brown-light hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                ブログTOPへ
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="text-center">
          <p className="label text-ivory/30 mb-4">那珂湊・カルカモ情報</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">INSTAGRAM</p>
          <p className="font-serif text-ivory/50 text-sm mb-10">那珂湊観光情報・営業情報を発信中</p>
          <a
            href="https://www.instagram.com/karukamo.2384/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-5 label text-ivory/60 hover:text-ivory transition-colors"
            style={{ letterSpacing: '0.3em' }}
          >
            <span className="block w-10 h-px bg-current" />
            @karukamo.2384
            <span className="block w-10 h-px bg-current" />
          </a>
        </AnimateIn>
      </section>
    </>
  )
}
