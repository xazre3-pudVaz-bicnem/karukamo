import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { menuCategories } from '@/data/menu'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'カルカモ | 那珂湊の焼きそば&食べ歩きスタンド',
  description:
    '茨城県ひたちなか市・那珂湊の焼きそば＆テイクアウトスタンド「カルカモ」。美明豚焼きそば・たこ焼き・お好み焼き・クレープ・たい焼き・アイスなど。おさかな市場から歩いて5分。',
  alternates: { canonical: 'https://karukamo.jp' },
}

const yakisoba = menuCategories.find((c) => c.id === 'yakisoba')!

const MENU_IMAGES: Record<string, string> = {
  yakisoba:    '/LINE_ALBUM_焼きそば_260616_1.jpg',
  takoyaki:    '/takoyaki.png',
  okonomiyaki: '/LINE_ALBUM_お好み焼き_260616_1.jpg',
  crepe:       '/LINE_ALBUM_クレープ_260616_1.png',
  taiyaki:     '/LINE_ALBUM_たい焼き_260616_1.jpg',
  sweets:      '/LINE_ALBUM_アイス_260616_1.jpg',
}

const MENU_HREFS: Record<string, string> = {
  yakisoba: '/yakisoba', takoyaki: '/takoyaki', okonomiyaki: '/okonomiyaki',
  crepe: '/crepe', taiyaki: '/sweets', sweets: '/sweets',
}

/* ── Marquee strip items ── */
const MARQUEE_ITEMS = ['焼きそば', 'たこ焼き', 'お好み焼き', 'クレープ', 'たい焼き', 'アイス', '那珂湊', '食べ歩き']

function MarqueeStrip() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-brand overflow-hidden flex items-center" aria-hidden="true">
      <div className="marquee-track flex items-center whitespace-nowrap select-none">
        {[0, 1].map((n) => (
          <span key={n} className="flex items-center">
            {MARQUEE_ITEMS.map((item) => (
              <span key={item} className="inline-flex items-center">
                <span className="text-white font-sans text-xs px-5 md:px-7" style={{ letterSpacing: '0.2em' }}>{item}</span>
                <span className="text-white/35 text-[10px]">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Steam SVG ── */
function SteamSVG({ className = '' }: { className?: string }) {
  return (
    <svg width="72" height="48" viewBox="0 0 72 48" fill="none" className={className} aria-hidden="true">
      <path d="M16 46 C13 34 20 22 15 12 C11 3 17 0 16 0"
        stroke="#C8400A" strokeWidth="1.8" strokeLinecap="round" fill="none"
        className="steam-wisp" style={{ animationDelay: '0s' }} />
      <path d="M36 46 C33 32 40 20 35 10 C31 1 37 0 36 0"
        stroke="#C8400A" strokeWidth="1.8" strokeLinecap="round" fill="none"
        className="steam-wisp" style={{ animationDelay: '0.7s' }} />
      <path d="M56 46 C53 34 60 22 55 12 C51 3 57 0 56 0"
        stroke="#C8400A" strokeWidth="1.8" strokeLinecap="round" fill="none"
        className="steam-wisp" style={{ animationDelay: '1.4s' }} />
    </svg>
  )
}

/* ── Duck mascot SVG ── */
function DuckSVG({ className = '' }: { className?: string }) {
  return (
    <svg width="64" height="50" viewBox="0 0 64 50" fill="none" className={className} aria-hidden="true">
      <ellipse cx="26" cy="34" rx="20" ry="13" fill="#46362A" fillOpacity="0.75" />
      <path d="M42 27 Q47 18 45 11" stroke="#46362A" strokeWidth="7" strokeLinecap="round" />
      <circle cx="45" cy="9" r="8" fill="#46362A" fillOpacity="0.75" />
      <path d="M51 8 L61 10 L51 13 Z" fill="#C8400A" />
      <circle cx="48" cy="6" r="1.8" fill="white" />
      <path d="M9 33 Q26 22 42 29" stroke="#FAF3E4" strokeWidth="1.5" fill="none" strokeOpacity="0.3" />
    </svg>
  )
}

export default function HomePage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — 全面写真背景・ド迫力テキスト
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden" style={{ height: '100svh' }}>

        {/* ── Full-bleed background image with cinematic zoom ── */}
        <div className="hero-bg absolute inset-0">
          <Image
            src="/LINE_ALBUM_焼きそば_260616_1.jpg"
            alt="那珂湊の美明豚焼きそば — カルカモ"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* ── Gradient overlay ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,6,2,0.62) 0%, rgba(10,6,2,0.12) 42%, rgba(10,6,2,0.75) 100%)',
          }}
        />

        {/* ── Left vertical text ── */}
        <div
          className="absolute hero-left-vert pointer-events-none flex flex-col items-center justify-center gap-2"
          style={{ left: '1rem', top: '72px', bottom: '48px' }}
        >
          {['や', 'き', 'そ', 'ば'].map((c, i) => (
            <span key={i} className="font-serif text-sm text-white font-bold" style={{ letterSpacing: 0 }}>{c}</span>
          ))}
          <div className="w-px h-5 bg-white/15 my-1" />
          {['た', 'こ'].map((c, i) => (
            <span key={i} className="font-serif text-xs text-white/35">{c}</span>
          ))}
          <div className="w-px h-4 bg-white/10 my-1" />
          {['お', 'こ', 'の', 'み'].map((c, i) => (
            <span key={i} className="font-serif text-xs text-white/20">{c}</span>
          ))}
        </div>

        {/* ── Center content ── */}
        <div
          className="absolute inset-x-0 flex flex-col items-center justify-center text-center px-16 md:px-24"
          style={{ top: '64px', bottom: '48px' }}
        >
          <p
            className="hero-catchphrase label text-white/45 mb-5"
            style={{ letterSpacing: '0.45em', fontSize: '0.6rem' }}
          >
            那珂湊 · Nakaminato · Ibaraki
          </p>

          <h1
            className="hero-catchphrase font-serif font-bold text-white"
            style={{
              fontSize: 'clamp(2.8rem, 10vw, 7.5rem)',
              lineHeight: 1.1,
              textShadow: '0 6px 40px rgba(0,0,0,0.55)',
              animationDelay: '0.55s',
            }}
          >
            那珂湊で楽しむ<br />
            焼きそばと<br />
            食べ歩きの店
          </h1>

          <div
            className="hero-scroll flex flex-col items-center mt-10 md:mt-16"
            style={{ animationDelay: '1.6s' }}
          >
            <span className="label text-white/25" style={{ fontSize: '8px', letterSpacing: '0.4em' }}>SCROLL</span>
            <div className="w-px h-10 bg-white/20 mt-2 scroll-line" />
          </div>
        </div>

        {/* ── Right vertical text ── */}
        <div
          className="absolute hero-right-vert pointer-events-none flex flex-col items-center justify-center gap-2"
          style={{ right: '1rem', top: '72px', bottom: '48px' }}
        >
          {['茨', '城', '·', '那', '珂', '湊'].map((c, i) => (
            <span key={i} className="font-serif text-xs text-white/25">{c}</span>
          ))}
        </div>

        {/* ── Orange marquee strip ── */}
        <MarqueeStrip />
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          INTRO — カルカモ紹介
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn direction="up" className="flex items-center gap-4 mb-10 md:mb-14">
            <DuckSVG className="flex-shrink-0" />
            <div>
              <p className="label text-brown-light mb-1">那珂湊のテイクアウトスタンド</p>
              <h2 className="font-serif font-bold text-2xl md:text-4xl text-brown-deep leading-snug">
                カルカモについて
              </h2>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            <AnimateIn direction="up" delay={0.1}>
              {/* Highlight badge */}
              <div
                className="inline-block bg-brand text-white font-serif text-sm font-bold px-4 py-2 mb-6"
                style={{ borderRadius: '2px', transform: 'rotate(-0.5deg)' }}
              >
                おさかな市場から歩いて5分
              </div>

              <p className="font-serif text-brown text-sm md:text-base leading-loose mb-5">
                那珂湊おさかな市場のすぐそばに立つ、小さなテイクアウトスタンドです。
                焼きそばをはじめ、たこ焼き・お好み焼き・クレープ・たい焼き・アイスクリームまで、
                食事からスイーツまで幅広いメニューが揃っています。
              </p>
              <p className="font-serif text-brown-light text-sm leading-loose mb-8">
                注文を受けてから丁寧に仕上げる焼きたての味が自慢。
                那珂湊観光や市場散策のついでに立ち寄れる場所として、
                観光客の方にも地元の方にも気軽にご利用いただけます。
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: '那珂湊', sub: 'おさかな市場そば' },
                  { num: '焼きたて', sub: '注文後に仕上げる' },
                  { num: '6品目', sub: 'のメニュー展開' },
                ].map((fact) => (
                  <div key={fact.num} className="text-center py-4 border border-bone/60 bg-white/50">
                    <p className="font-serif font-bold text-brown-deep text-xs md:text-sm mb-1">{fact.num}</p>
                    <p className="label text-brown-light" style={{ fontSize: '8px' }}>{fact.sub}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.2}>
              <div className="photo-portrait">
                <Image
                  src="/food-spread.png"
                  alt="カルカモのメニュー"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          YAKISOBA — メインプロダクト
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py border-t border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn direction="up" className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">看板メニュー · Signature</p>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
              那珂湊焼きそば
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Photo with steam */}
            <AnimateIn direction="up">
              <div className="relative">
                <div className="absolute -top-8 left-8 pointer-events-none z-10">
                  <SteamSVG />
                </div>
                <div className="photo-portrait">
                  <Image
                    src="/LINE_ALBUM_焼きそば_260616_2.jpg"
                    alt="美明豚焼きそば — カルカモ"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.1} className="md:pt-4">
              {/* 美明豚 badge */}
              <div className="inline-block border border-brand/40 text-brand px-3 py-1.5 mb-5"
                style={{ fontSize: '9px', letterSpacing: '0.25em', fontFamily: 'var(--font-noto-sans)' }}>
                茨城県産 · 美明豚使用
              </div>

              <p className="font-serif text-brown text-sm md:text-base leading-loose mb-8">
                カルカモの看板メニューは焼きそばです。<br />
                茨城県産ブランド豚「美明豚（びめいとん）」を使ったボリューム満点の一品。
                注文を受けてから丁寧に焼き上げる、作りたての熱々をどうぞ。
              </p>

              <ul className="mb-8">
                {yakisoba.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`py-4 flex justify-between gap-4 items-start ${i > 0 ? 'border-t border-bone/40' : ''}`}
                  >
                    <div>
                      {item.tag && (
                        <span className="label text-brand border border-brand/30 px-2 py-0.5 mb-2 inline-block"
                          style={{ fontSize: '9px' }}>
                          {item.tag}
                        </span>
                      )}
                      <p className="font-serif text-brown-deep text-sm">{item.name}</p>
                      {item.note && <p className="text-brown-light text-xs mt-0.5">{item.note}</p>}
                    </div>
                    <span className="font-display text-brown-light text-base shrink-0">
                      {item.price != null ? `¥${item.price.toLocaleString()}` : '—'}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/yakisoba"
                className="inline-flex items-center gap-3 label text-brand hover:text-brand-dark transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-6 h-px bg-current" />
                焼きそばのこだわりを見る
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MENU LINEUP — 全6カテゴリ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn direction="up" className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">All Items · メニュー</p>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
              メニュー一覧
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-bone/30 mb-10">
            {menuCategories.map((cat, i) => (
              <AnimateIn key={cat.id} direction="up" delay={i * 0.05}>
                <Link
                  href={MENU_HREFS[cat.id] ?? '/menu'}
                  className="bg-white group block hover:opacity-90 transition-opacity h-full"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={MENU_IMAGES[cat.id] ?? '/food-spread.png'}
                      alt={`カルカモの${cat.name}`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="font-serif text-brown-deep text-sm mb-0.5">{cat.name}</p>
                    <p className="text-brown-light text-xs line-clamp-1">{cat.description}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn direction="up">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors"
              style={{ letterSpacing: '0.25em' }}
            >
              <span className="block w-6 h-px bg-current" />
              全メニューを見る
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          THREE PROMISES — こだわり3つ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py border-t border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn direction="up" className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">Our Promise · こだわり</p>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
              カルカモの3つのこだわり
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                num: '01',
                title: '焼きたてをお届けする',
                body: 'ご注文をいただいてから一つひとつ丁寧に仕上げます。できたての熱々・ふわふわの状態でお渡しするのがカルカモのこだわりです。',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <circle cx="18" cy="20" r="12" fill="#C8400A" fillOpacity="0.12" />
                    <path d="M11 24 Q14 14 18 8 Q22 14 25 24" stroke="#C8400A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M14 24 Q17 18 18 14" stroke="#C8400A" strokeWidth="1" strokeLinecap="round" fill="none" />
                  </svg>
                ),
              },
              {
                num: '02',
                title: '地元の食材を使う',
                body: '焼きそばには茨城県産ブランド豚「美明豚」を使用。地域の恵みを活かしながら、那珂湊ならではの味わいをご提供します。',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <circle cx="18" cy="18" r="12" fill="#C8400A" fillOpacity="0.12" />
                    <ellipse cx="18" cy="22" rx="9" ry="6" fill="#C8400A" fillOpacity="0.4" />
                    <path d="M12 18 Q18 12 24 18" stroke="#C8400A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                ),
              },
              {
                num: '03',
                title: '市場散策のついでに寄れる',
                body: '那珂湊おさかな市場から歩いて5分。観光のついでに気軽に立ち寄れる立地と、手軽に食べ歩きができる商品展開が自慢です。',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <circle cx="18" cy="18" r="12" fill="#C8400A" fillOpacity="0.12" />
                    <circle cx="18" cy="16" r="5" stroke="#C8400A" strokeWidth="1.5" fill="none" />
                    <path d="M18 21 L18 28" stroke="#C8400A" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M14 26 Q18 28 22 26" stroke="#C8400A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                  </svg>
                ),
              },
            ].map((item) => (
              <AnimateIn key={item.num} direction="up">
                <div className="border-t-[3px] border-brand pt-6 pb-2">
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <span className="font-display text-3xl leading-none" style={{ color: '#E0CBA8' }}>{item.num}</span>
                  </div>
                  <h3 className="font-serif font-bold text-brown-deep text-base mb-3 leading-snug">{item.title}</h3>
                  <p className="font-serif text-brown-light text-sm leading-loose">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SCENE — 利用シーン (dark)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-brown-deep border-t border-brown">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn direction="up" className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-ivory/40">Scene · こんなシーンに</p>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-ivory leading-tight">
              こんな時に寄ってください
            </h2>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                title: 'おさかな市場の帰りに',
                body: '市場でお買い物を楽しんだ後は、カルカモに立ち寄って焼きそばやたこ焼きを。港町散策をさらに楽しく。',
              },
              {
                title: 'ランチは焼きそばで',
                body: 'ボリューム満点の美明豚焼きそばやお好み焼きで、しっかりランチ。お食事系メニューが充実しています。',
              },
              {
                title: 'おやつにクレープ・たい焼き',
                body: 'ちょっと甘いものが食べたい時は、クレープやたい焼き・アイスクリームを。食後のデザートにも。',
              },
              {
                title: '家族みんなで食べ歩き',
                body: '子どもから大人まで楽しめるメニューが揃っています。それぞれ好きなものを選んで食べ歩きを楽しんで。',
              },
              {
                title: '那珂湊観光の途中に',
                body: 'ひたちなか市・那珂湊エリアの観光ルートに組み込みやすい立地。旅の記念になる一品をどうぞ。',
              },
              {
                title: '地元のちょっとした買い物に',
                body: 'テイクアウト専門なので、気軽に立ち寄れます。お散歩ついでや、ちょっとしたおやつに。',
              },
            ].map((scene) => (
              <AnimateIn key={scene.title} direction="up">
                <div className="bg-white/5 p-6 md:p-8 h-full">
                  <h3 className="font-serif font-bold text-ivory text-sm mb-3 leading-snug">{scene.title}</h3>
                  <p className="font-serif text-ivory/50 text-xs leading-loose">{scene.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ACCESS — アクセス
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn direction="up" className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">Access · アクセス</p>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
              アクセス
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <AnimateIn direction="up">
              <dl className="mb-8">
                {[
                  { dt: 'お店', dd: 'カルカモ' },
                  { dt: '住所', dd: '茨城県ひたちなか市湊本町27-3' },
                  { dt: '目印', dd: '那珂湊おさかな市場から徒歩5分' },
                  { dt: '営業日', dd: 'Instagram をご確認ください' },
                ].map((row, i) => (
                  <div key={row.dt} className={`flex gap-6 py-4 ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                    <dt className="w-14 flex-shrink-0 label pt-0.5">{row.dt}</dt>
                    <dd className="font-serif text-brown text-sm leading-relaxed">{row.dd}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col gap-4">
                <a
                  href="https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 label text-brand hover:text-brand-dark transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-6 h-px bg-current" />
                  Google Maps で開く
                </a>
                <Link
                  href="/access"
                  className="inline-flex items-center gap-3 label text-brown-light hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-6 h-px bg-current" />
                  詳しいアクセス
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn direction="up" delay={0.1}>
              <div className="aspect-square overflow-hidden border border-bone/40">
                <iframe
                  src="https://maps.google.com/maps?q=茨城県ひたちなか市湊本町27-3&output=embed&hl=ja"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="カルカモ アクセスマップ"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BLOG — お知らせ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-20 border-t border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn direction="up" className="flex items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-6 h-[2px] bg-brand flex-shrink-0" />
                <p className="label text-brand">Information</p>
              </div>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brown-deep">
                お知らせ・カルカモ日記
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 label text-brown hover:text-brown-deep transition-colors shrink-0"
              style={{ letterSpacing: '0.25em' }}
            >
              <span className="block w-6 h-px bg-current" />
              一覧を見る
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          INSTAGRAM — フォロー導線
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep border-t border-brown">
        <AnimateIn direction="up" className="text-center px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block w-10 h-px bg-ivory/20" />
            <p className="label text-ivory/30">Follow Us</p>
            <span className="block w-10 h-px bg-ivory/20" />
          </div>
          <h2 className="font-serif font-bold text-2xl md:text-4xl text-ivory mb-4">
            Instagram で最新情報を
          </h2>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            営業日・最新メニュー・おすすめ情報を毎日発信中
          </p>
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
