import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'お好み焼き | ブログ | カルカモ — ひたちなか市・那珂湊',
  description:
    'カルカモのお好み焼きに関するブログ記事。ひたちなか市・那珂湊のテイクアウトお好み焼き情報。豚玉・イカ玉・明太もちチーズなど各メニューの魅力を紹介。',
  keywords: ['ひたちなか市 お好み焼き', '那珂湊 お好み焼き', 'カルカモ お好み焼き', 'テイクアウト ランチ 那珂湊'],
  alternates: { canonical: 'https://karukamo.jp/blog/okonomiyaki' },
}

export default function BlogOkonomiyakiPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'お好み焼き' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Blog Category</p>
              <h1 className="font-display font-light text-5xl md:text-7xl leading-none text-brown-deep mb-6">
                OKONOMIYAKI
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">お好み焼き — 那珂湊のテイクアウトランチ</p>
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
                カルカモのお好み焼き情報
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                このカテゴリでは、カルカモのお好み焼きに関する情報をお届けします。
                豚玉・イカ玉・ツナマヨ・明太もちチーズの4種類から選べるお好み焼きは、
                ひたちなか市・那珂湊でランチやテイクアウトグルメとして人気のメニューです。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                各メニューのこだわりや味わいの違い、食べ比べのポイント、
                ランチとしての活用方法など、お好み焼きをより楽しむための情報を発信していきます。
                特に人気の明太もちチーズはリピーターも多く、必食の一品です。
              </p>
              <p className="font-serif text-brown-light text-xs leading-loose">
                最新の営業情報はInstagram（@karukamo.2384）でご確認ください。
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/okonomiyaki"
                className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                お好み焼きの詳細ページへ
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
          <p className="label text-ivory/30 mb-4">Latest Info</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">INSTAGRAM</p>
          <p className="font-serif text-ivory/50 text-sm mb-10">営業日・最新メニュー情報を発信中</p>
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
