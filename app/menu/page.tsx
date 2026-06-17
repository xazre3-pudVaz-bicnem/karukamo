import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { menuCategories } from '@/data/menu'

const CATEGORY_LINKS: Record<string, string> = {
  crepe:       'クレープについて詳しく見る',
  sweets:      'アイス・スイーツについて詳しく見る',
  taiyaki:     'スイーツ一覧を見る',
  takoyaki:    'たこ焼きについて詳しく見る',
  okonomiyaki: 'お好み焼きについて詳しく見る',
  yakisoba:    '焼きそばについて詳しく見る',
}

const CATEGORY_HREFS: Record<string, string> = {
  crepe:       '/crepe',
  sweets:      '/sweets',
  taiyaki:     '/sweets',
  takoyaki:    '/takoyaki',
  okonomiyaki: '/okonomiyaki',
  yakisoba:    '/yakisoba',
}

const CATEGORY_IMAGES: Record<string, { src: string; alt: string }> = {
  yakisoba:    { src: '/LINE_ALBUM_焼きそば_260616_1.jpg',    alt: 'カルカモの美明豚焼きそば' },
  takoyaki:    { src: '/takoyaki.png',                        alt: 'カルカモのたこ焼き' },
  okonomiyaki: { src: '/LINE_ALBUM_お好み焼き_260616_1.jpg',  alt: 'カルカモのお好み焼き' },
  crepe:       { src: '/LINE_ALBUM_クレープ_260617_1.png',     alt: 'カルカモのクレープ' },
  taiyaki:     { src: '/LINE_ALBUM_たい焼き_260616_3.jpg',    alt: 'カルカモのたい焼き' },
  sweets:      { src: '/LINE_ALBUM_アイス_260616_1.jpg',      alt: 'カルカモのアイス' },
}

export const metadata: Metadata = {
  title: 'Menu | カルカモ — 那珂湊の焼きそば&テイクアウト',
  description:
    'カルカモのメニュー一覧。美明豚焼きそば・たこ焼き・お好み焼き・クレープ・アイス・たい焼き。茨城県ひたちなか市那珂湊のテイクアウトスタンド。',
  alternates: { canonical: 'https://karukamo.jp/menu' },
}

export default function MenuPage() {
  return (
    <>
      {/* ━━━━ Page Header ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <p className="label mb-4">All Menus</p>
            <h1 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep mb-6">
              MENU
            </h1>
            <div className="flex items-start gap-4 mb-4">
              <span className="rule flex-shrink-0 mt-2" />
              <p className="font-serif text-brown-light text-xs leading-relaxed">
                最新情報は
                <a
                  href="https://www.instagram.com/karukamo.2384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-dark transition-colors mx-1"
                >
                  Instagram (@karukamo.2384)
                </a>
                をご確認ください
              </p>
            </div>
            <p className="font-serif text-brown-light text-xs leading-relaxed pl-0 md:pl-4">
              メニュー内容・価格は変更となる場合があります。最新情報はInstagramまたは店頭にてご確認ください。
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ Anchor nav ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <nav className="sticky top-16 md:top-[72px] z-30 bg-white border-b border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {menuCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 label px-4 py-2 text-brown-light hover:text-brown-deep transition-colors whitespace-nowrap"
              >
                {cat.nameEn}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ━━━━ Categories ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {menuCategories.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`scroll-mt-28 section-py border-b border-bone/40 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-ivory'}`}
        >
          <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

            {/* Section heading */}
            <AnimateIn className="mb-12 md:mb-16">
              <div className="flex items-end gap-5 md:gap-8">
                <span className="section-num opacity-50">{String(i + 1).padStart(2, '0')}</span>
                <div className="pb-2">
                  <p className="label mb-2">{cat.nameEn}</p>
                  <h2 className="font-display font-light text-4xl md:text-6xl leading-none text-brown-deep">
                    {cat.name}
                  </h2>
                </div>
              </div>
              {cat.description && (
                <p className="font-serif text-brown-light text-xs md:text-sm leading-loose mt-4 max-w-sm md:pl-4">
                  {cat.description}
                </p>
              )}
            </AnimateIn>

            {/* Items layout: photo left + list right (or reverse for even) */}
            <div className={`grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-start ${i % 2 !== 0 ? 'md:grid-cols-[1.6fr_1fr]' : ''}`}>

              {/* Photo */}
              <AnimateIn className={i % 2 !== 0 ? 'md:order-2' : ''}>
                <div className="photo-portrait">
                  {CATEGORY_IMAGES[cat.id] ? (
                    <Image
                      src={CATEGORY_IMAGES[cat.id].src}
                      alt={CATEGORY_IMAGES[cat.id].alt}
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="photo-area" style={{ position: 'absolute', inset: 0 }} />
                  )}
                </div>
              </AnimateIn>

              {/* Items list */}
              <AnimateIn delay={0.1} className={`md:pt-2 ${i % 2 !== 0 ? 'md:order-1' : ''}`}>
                <ul>
                  {cat.items.map((item, idx) => (
                    <li
                      key={item.name}
                      className={`py-5 flex justify-between gap-6 items-start ${idx > 0 ? 'border-t border-bone/40' : ''}`}
                    >
                      <div className="flex-1 min-w-0">
                        {item.tag && (
                          <span
                            className="label text-brand border border-brand/30 px-2 py-0.5 mb-2 inline-block"
                            style={{ fontSize: '9px' }}
                          >
                            {item.tag}
                          </span>
                        )}
                        <p className="font-serif text-brown-deep text-sm">{item.name}</p>
                        {item.note && (
                          <p className="text-brown-light text-xs mt-1 leading-relaxed">{item.note}</p>
                        )}
                      </div>
                      <span className="font-display text-brown-light text-base shrink-0">
                        {item.price != null ? `¥${item.price.toLocaleString()}` : '—'}
                      </span>
                    </li>
                  ))}
                </ul>
                {CATEGORY_HREFS[cat.id] && (
                  <div className="mt-8 pt-6 border-t border-bone/40">
                    <Link
                      href={CATEGORY_HREFS[cat.id]}
                      className="inline-flex items-center gap-4 label text-brown-light hover:text-brown-deep transition-colors"
                      style={{ letterSpacing: '0.25em' }}
                    >
                      <span className="block w-8 h-px bg-current" />
                      {CATEGORY_LINKS[cat.id]}
                    </Link>
                  </div>
                )}
              </AnimateIn>
            </div>

          </div>
        </section>
      ))}

      {/* ━━━━ Instagram CTA ━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#C8400A' }}>
        <AnimateIn className="text-center">
          <p className="label text-white/40 mb-4">Latest Updates</p>
          <p className="font-display font-light text-3xl md:text-5xl text-white mb-8 leading-none">
            INSTAGRAM
          </p>
          <p className="font-serif text-white/60 text-sm mb-10">
            季節限定フレーバーや最新情報を発信中
          </p>
          <a
            href="https://www.instagram.com/karukamo.2384/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-5 label text-white/70 hover:text-white transition-colors"
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
