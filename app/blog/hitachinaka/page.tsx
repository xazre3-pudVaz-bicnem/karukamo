import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'ひたちなか市グルメ | ブログ | カルカモ — テイクアウト・食べ歩き',
  description:
    'ひたちなか市のグルメ情報ブログ。テイクアウト・食べ歩き・ランチ情報を発信。カルカモから見たひたちなか市の食の魅力を紹介。那珂湊エリアを中心に。',
  keywords: ['ひたちなか市 グルメ', 'ひたちなか市 テイクアウト', 'ひたちなか市 ランチ', 'ひたちなか市 食べ歩き', '那珂湊 グルメ'],
  alternates: { canonical: 'https://karukamo.jp/blog/hitachinaka' },
}

export default function BlogHitachinakaPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: 'ひたちなか市グルメ' },
              ]}
            />
            <div className="mt-6">
              <p className="label mb-4">Blog Category</p>
              <h1 className="font-display font-light text-4xl md:text-6xl leading-none text-brown-deep mb-6">
                HITACHINAKA<br />GOURMET
              </h1>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">ひたちなか市グルメ — テイクアウト・食べ歩き情報</p>
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
                ひたちなか市のグルメ情報
              </h2>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                このカテゴリでは、ひたちなか市のグルメ情報をお届けします。
                カルカモが立地する那珂湊エリアを中心に、ひたちなか市のテイクアウトグルメ・
                食べ歩きスポット・ランチ情報などを発信していきます。
              </p>
              <p className="font-serif text-brown text-sm leading-loose mb-5">
                茨城県のブランド食材「美明豚」や「干し芋」など、地域の食材を使った料理の魅力、
                ひたちなか市の食文化についての情報も随時更新していく予定です。
                ひたちなか市でのお出かけやドライブ計画に役立ててください。
              </p>
              <p className="font-serif text-brown-light text-xs leading-loose">
                カルカモの最新情報はInstagram（@karukamo.2384）でご確認ください。
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/takeout"
                className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                テイクアウト特集を見る
              </Link>
              <Link
                href="/lunch"
                className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                ランチ利用ガイドを見る
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
          <p className="label text-ivory/30 mb-4">ひたちなか市・那珂湊情報</p>
          <p className="font-display font-light text-3xl md:text-5xl text-ivory mb-8 leading-none">INSTAGRAM</p>
          <p className="font-serif text-ivory/50 text-sm mb-10">ひたちなか市グルメ・営業情報を発信中</p>
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
