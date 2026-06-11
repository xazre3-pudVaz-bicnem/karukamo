import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: '焼きそば | ブログ | カルカモ — 美明豚 | ひたちなか市・那珂湊',
  description:
    'カルカモの焼きそばに関するブログ記事。ひたちなか市・那珂湊のテイクアウト焼きそば。茨城県産「美明豚」使用のこだわり焼きそばの魅力を紹介。',
  keywords: ['ひたちなか市 焼きそば', '那珂湊 焼きそば', '美明豚 焼きそば', 'カルカモ 焼きそば', '茨城 ランチ テイクアウト'],
  alternates: { canonical: 'https://karukamo.jp/blog/yakisoba' },
}

export default function BlogYakisobaPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: '焼きそば' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Blog Category</p>
              <h1 className="font-display font-light text-5xl md:text-7xl leading-none text-brown-deep mb-6">
                YAKISOBA
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">焼きそば — 美明豚使用 | ひたちなか市・那珂湊</p>
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
                カルカモの焼きそば情報
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                このカテゴリでは、カルカモの焼きそばに関する情報をお届けします。
                地元茨城のブランド豚「美明豚」を使ったこだわりの焼きそばは、
                ひたちなか市・那珂湊のランチ・テイクアウトとして地元の方にも観光客にも人気です。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                美明豚の魅力や焼きそば各メニューの違い、おすすめの食べ方、
                ランチでの活用方法など、焼きそばをより楽しむための情報を発信していきます。
                からしマヨがけやオム焼きそばは特に人気の高いメニューです。
              </p>
              <p className="font-serif text-brown-light text-xs leading-loose">
                最新の営業情報はInstagram（@karukamo.2384）でご確認ください。
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/yakisoba"
                className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                焼きそばの詳細ページへ
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
