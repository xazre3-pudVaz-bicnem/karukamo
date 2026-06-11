import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'テイクアウト | ブログ | カルカモ — ひたちなか市・那珂湊の食べ歩き',
  description:
    'カルカモのテイクアウト情報ブログ。ひたちなか市・那珂湊の食べ歩きグルメ。テイクアウトのコツ・おすすめスポット・季節の楽しみ方などを発信。',
  keywords: ['ひたちなか市 テイクアウト', '那珂湊 テイクアウト', '那珂湊 食べ歩き', 'ひたちなか市 グルメ テイクアウト'],
  alternates: { canonical: 'https://karukamo.jp/blog/takeout' },
}

export default function BlogTakeoutPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'テイクアウト' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Blog Category</p>
              <h1 className="font-display font-light text-5xl md:text-7xl leading-none text-brown-deep mb-6">
                TAKEOUT
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">テイクアウト — ひたちなか市・那珂湊の食べ歩き情報</p>
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
                テイクアウトお役立ち情報
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                このカテゴリでは、ひたちなか市・那珂湊でのテイクアウトグルメに関する情報をお届けします。
                カルカモのテイクアウトをより楽しむためのコツ、食べ歩きにおすすめのスポット、
                季節ごとのおすすめメニューなど、実用的な情報が揃っています。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                那珂湊観光やひたちなか市でのお出かけの際に役立つ情報として、
                定期的に更新していく予定です。
                テイクアウトのお持ち帰り方法や、グループでの利用方法なども取り上げていきます。
              </p>
              <p className="font-serif text-brown-light text-xs leading-loose">
                最新情報はInstagram（@karukamo.2384）でも随時発信しています。
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/takeout"
                className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                テイクアウト特集ページへ
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
          <p className="font-serif text-ivory/50 text-sm mb-10">テイクアウト情報・営業日を随時更新</p>
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
