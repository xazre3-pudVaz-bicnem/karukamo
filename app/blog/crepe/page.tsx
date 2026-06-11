import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'クレープ | ブログ | カルカモ — ひたちなか市・那珂湊',
  description:
    'カルカモのクレープに関するブログ記事。ひたちなか市・那珂湊で人気のクレープスタンド。季節限定フレーバー・生地のこだわり・食べ歩きのコツなど。',
  keywords: ['ひたちなか市 クレープ', '那珂湊 クレープ', 'カルカモ クレープ ブログ', 'テイクアウト クレープ'],
  alternates: { canonical: 'https://karukamo.jp/blog/crepe' },
}

export default function BlogCrepePage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'クレープ' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Blog Category</p>
              <h1 className="font-display font-light text-5xl md:text-7xl leading-none text-brown-deep mb-6">
                CREPE
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">クレープ — ひたちなか市・那珂湊の食べ歩きスイーツ</p>
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
                カルカモのクレープ情報
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                このカテゴリでは、カルカモのクレープに関する最新情報をお届けします。
                ひたちなか市・那珂湊で人気の食べ歩きスイーツとして愛されるカルカモのクレープ。
                もちもち生地のこだわり、旬のフルーツを使った季節限定フレーバー、
                食べ歩きのコツなど、クレープにまつわる様々な情報を発信していきます。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                那珂湊観光のついでに、またはひたちなか市でのお出かけのデザートとして。
                カルカモのクレープをより楽しんでいただくための情報が揃っています。
                季節ごとに変わる限定フレーバーは特に必見です。
              </p>
              <p className="font-serif text-brown-light text-xs leading-loose">
                最新の記事は随時更新予定です。まずはInstagram（@karukamo.2384）で
                最新フレーバー情報をチェックしてみてください。
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/crepe"
                className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                クレープの詳細ページへ
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
          <p className="label text-ivory/30 mb-4">最新フレーバー情報</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">INSTAGRAM</p>
          <p className="font-serif text-ivory/50 text-sm mb-10">季節限定フレーバー・営業日情報を随時更新</p>
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
