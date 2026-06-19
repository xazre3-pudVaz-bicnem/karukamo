import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'

export const metadata: Metadata = {
  title: 'About | カルカモ — 那珂湊のクレープスタンド',
  description:
    '那珂湊・ひたちなか市のクレープ&テイクアウトスタンド「カルカモ」について。地域に根ざした小さなスタンドとして、クレープを中心に食べ歩きグルメを提供しています。',
  alternates: { canonical: 'https://www.karukamo.jp/kodawari' },
}

const POINTS = [
  {
    num: '01',
    title: '那珂湊に根ざしたスタンド',
    body: `茨城県ひたちなか市湊本町に位置するカルカモは、那珂湊エリアへの観光や買い物のついでに立ち寄りやすいテイクアウトスタンドです。\n\n地域の皆さまとのつながりを大切にしながら、日々の営業を続けています。`,
  },
  {
    num: '02',
    title: 'クレープを中心に、幅広いメニュー',
    body: `クレープ・スイーツを中心に、たこ焼き・お好み焼き・焼きそば・たい焼きなど、様々なジャンルのテイクアウトメニューをご用意しています。\n\nランチからおやつ・食べ歩きまで、幅広いシーンで楽しめます。`,
  },
  {
    num: '03',
    title: '地元食材へのこだわり',
    body: `焼きそばには地元ブランド「美明豚」を使用するなど、できる限り地元の食材にこだわっています。\n\n素材の味を大切にしながら丁寧に調理することで、テイクアウトでも本格的な味わいをお届けしています。`,
  },
]

export default function KodawariPage() {
  return (
    <>
      {/* ━━━━ Page Header ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <p className="label mb-4">Our Story</p>
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
              ABOUT
            </h1>
            <div className="flex items-center gap-4 max-w-sm">
              <span className="rule flex-shrink-0" />
              <p className="font-serif text-brown-light text-xs leading-relaxed">
                那珂湊に根ざした、小さなごほうびの場所として。
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Intro ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div>
                <p className="font-serif text-brown text-sm md:text-base leading-loose mb-8">
                  茨城県ひたちなか市湊本町に位置するカルカモは、
                  地域の人も観光客も気軽に立ち寄れるテイクアウトスタンドです。
                </p>
                <p className="font-serif text-brown-light text-sm leading-loose">
                  クレープを中心に、たこ焼き・お好み焼き・たい焼きなど
                  幅広いラインナップで、那珂湊でのちょっとしたごほうび時間を
                  お届けしています。
                </p>
              </div>
              <div className="photo-landscape">
                <Image
                  src="/food-spread.png"
                  alt="カルカモのクレープ・たこ焼き・お好み焼き"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Points ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {POINTS.map((point, i) => (
        <section
          key={point.num}
          className={`section-py border-b border-bone/40 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-ivory'}`}
        >
          <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
            <AnimateIn>
              <div className="grid md:grid-cols-[1fr_1.8fr] gap-10 md:gap-20 items-start">

                {/* Number + heading */}
                <div>
                  <p className="font-display text-[5rem] md:text-[7rem] leading-none text-ivory-dark select-none mb-2">
                    {point.num}
                  </p>
                  <p className="label mb-2">Point {point.num}</p>
                  <h2 className="font-display font-light text-2xl md:text-3xl text-brown-deep leading-snug">
                    {point.title}
                  </h2>
                </div>

                {/* Body */}
                <div className="md:pt-16 space-y-4 border-t border-bone/40 md:border-0 pt-6">
                  {point.body.split('\n\n').map((p, idx) => (
                    <p key={idx} className="font-serif text-brown-light text-sm leading-loose">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </section>
      ))}

      {/* ━━━━ こんな方に ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="mb-12 md:mb-16">
            <p className="label mb-4">For You</p>
            <h2 className="font-display font-light text-4xl md:text-5xl text-brown-deep leading-none">
              こんな方に
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <ul className="max-w-2xl">
              {[
                'ひたちなか市・那珂湊でクレープやスイーツを探している',
                '観光や買い物のついでに食べ歩きしたい',
                'たこ焼きやお好み焼きを手軽に楽しみたい',
                'たい焼きやアイスでほっと一息つきたい',
                '地元らしいテイクアウトグルメを味わいたい',
                '日常のちょっとしたごほうびが欲しい',
              ].map((text, i) => (
                <li
                  key={text}
                  className={`py-5 flex items-start gap-6 ${i > 0 ? 'border-t border-bone/40' : ''}`}
                >
                  <span className="font-display text-sm text-bone leading-none mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-serif text-brown text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep">
        <AnimateIn className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <p className="label text-ivory/30 mb-4">Visit Us</p>
          <h2 className="font-display font-light text-4xl md:text-6xl text-ivory mb-10 leading-none">
            ぜひ、カルカモへ。
          </h2>
          <div className="flex flex-wrap gap-8">
            <Link
              href="/menu"
              className="inline-flex items-center gap-4 label text-ivory/60 hover:text-ivory transition-colors"
              style={{ letterSpacing: '0.25em' }}
            >
              <span className="block w-8 h-px bg-current" />
              Menu
            </Link>
            <Link
              href="/access"
              className="inline-flex items-center gap-4 label text-ivory/60 hover:text-ivory transition-colors"
              style={{ letterSpacing: '0.25em' }}
            >
              <span className="block w-8 h-px bg-current" />
              Access
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
