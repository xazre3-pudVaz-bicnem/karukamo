import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { menuCategories } from '@/data/menu'

export const metadata: Metadata = {
  title: 'カルカモ | 那珂湊のクレープ&テイクアウトスタンド',
  description:
    '茨城県ひたちなか市湊本町のクレープ＆テイクアウトスタンド「カルカモ」。クレープ・アイス・たい焼き・たこ焼き・お好み焼き・焼きそば。',
  alternates: { canonical: 'https://karukamo.jp' },
}

const crepe = menuCategories.find((c) => c.id === 'crepe')!
const sweets = menuCategories.find((c) => c.id === 'sweets')!
const taiyaki = menuCategories.find((c) => c.id === 'taiyaki')!
const foodItems = menuCategories.filter((c) => ['takoyaki', 'okonomiyaki', 'yakisoba'].includes(c.id))

export default function HomePage() {
  return (
    <>
      {/* ━━━━ Hero ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="min-h-screen flex items-stretch pt-16">

        {/* Left — text */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-20 md:py-0">
          <AnimateIn delay={0.05}>
            <p className="label mb-10 md:mb-14">Nakaminato, Ibaraki</p>

            <h1 className="font-display font-light text-[clamp(3.6rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.01em] text-brown-deep mb-5 md:mb-7">
              KARUKAMO
            </h1>

            <p className="font-display italic text-xl md:text-2xl text-brown-light mb-10 md:mb-14 leading-none">
              Crepe &amp; Takeout Stand
            </p>

            <p className="font-serif text-brown text-base md:text-lg leading-loose mb-10 md:mb-14 max-w-xs">
              那珂湊で楽しむ、<br />
              小さなごほうび時間。
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="rule flex-shrink-0" />
              <p className="label">ひたちなか市湊本町27-3</p>
            </div>
          </AnimateIn>
        </div>

        {/* Right — hero image */}
        <div className="hidden md:block w-[42%] lg:w-[46%] photo-hero">
          <Image
            src="/hero-brand.png"
            alt="カルカモのクレープ・たこ焼き・お好み焼き"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* ━━━━ 01 Concept ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn>
            <div className="flex items-end gap-5 md:gap-8 mb-12 md:mb-16">
              <span className="section-num">01</span>
              <div className="pb-2">
                <p className="label mb-2">Concept</p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-none text-brown-deep">
                  小さなごほうびを
                </h2>
              </div>
            </div>

            <div className="max-w-xl pl-0 md:pl-4">
              <p className="font-serif text-brown text-sm md:text-base leading-loose mb-6">
                茨城県ひたちなか市の港町、那珂湊。<br />
                カルカモは、海辺の街に根ざした小さなテイクアウトスタンドです。
              </p>
              <p className="font-serif text-brown-light text-sm leading-loose">
                クレープやスイーツ、食べ歩きグルメを通じて、<br />
                ちょっとしたごほうびの時間をお届けしたい。<br />
                そんな想いを大切にしながら、日々の営業を続けています。
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ 02 Crepe ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn className="mb-14 md:mb-20">
            <div className="flex items-end gap-5 md:gap-8">
              <span className="section-num">02</span>
              <div className="pb-2">
                <p className="label mb-2">Main Product</p>
                <h2 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep">
                  CREPE
                </h2>
              </div>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Photo area */}
            <AnimateIn>
              <div className="photo-portrait">
                <Image
                  src="/crepe-stand.png"
                  alt="カルカモのクレープ"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>

            {/* Menu list */}
            <AnimateIn delay={0.1} className="md:pt-4">
              <p className="font-serif font-bold text-brown-deep text-lg mb-1">{crepe.name}</p>
              <p className="text-brown-light text-xs mb-2 leading-relaxed">{crepe.description}</p>
              <p className="label text-brand mb-8">Instagramで最新フレーバーを公開中</p>

              <ul>
                {crepe.items.map((item, i) => (
                  <li key={item.name} className={`py-5 flex justify-between gap-6 items-start ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                    <div>
                      {item.tag && (
                        <span className="label text-brand border border-brand/30 px-2 py-0.5 mb-2 inline-block" style={{ fontSize: '9px' }}>
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

              <div className="mt-10 pt-8 border-t border-bone/40 flex flex-col gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  Full Menu
                </Link>
                <Link
                  href="/crepe"
                  className="inline-flex items-center gap-4 label text-brown-light hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  クレープのこだわり
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ 03 Sweets ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn className="mb-14 md:mb-20">
            <div className="flex items-end gap-5 md:gap-8">
              <span className="section-num">03</span>
              <div className="pb-2">
                <p className="label mb-2">Sweets &amp; Dessert</p>
                <h2 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep">
                  SWEETS
                </h2>
              </div>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

            {/* Menu list (left on this section) */}
            <AnimateIn className="md:pt-4">
              <p className="font-serif font-bold text-brown-deep text-lg mb-1">{sweets.name}</p>
              <p className="text-brown-light text-xs mb-8 leading-relaxed">{sweets.description}</p>
              <ul>
                {sweets.items.map((item, i) => (
                  <li key={item.name} className={`py-4 flex justify-between gap-6 items-center ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                    <div>
                      {item.tag && (
                        <span className="label text-brand border border-brand/30 px-2 py-0.5 mb-1.5 inline-block" style={{ fontSize: '9px' }}>
                          {item.tag}
                        </span>
                      )}
                      <p className="font-serif text-brown-deep text-sm">{item.name}</p>
                    </div>
                    <span className="font-display text-brown-light text-base shrink-0">
                      {item.price != null ? `¥${item.price.toLocaleString()}` : '—'}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-bone/40">
                <Link
                  href="/sweets"
                  className="inline-flex items-center gap-4 label text-brown-light hover:text-brown-deep transition-colors mb-8 block"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  スイーツ一覧
                </Link>
                <p className="font-serif font-bold text-brown-deep text-lg mt-8 mb-1">{taiyaki.name}</p>
                <p className="text-brown-light text-xs mb-6 leading-relaxed">{taiyaki.description}</p>
                <ul>
                  {taiyaki.items.map((item, i) => (
                    <li key={item.name} className={`py-4 flex justify-between gap-6 items-center ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                      <p className="font-serif text-brown-deep text-sm">{item.name}</p>
                      <span className="font-display text-brown-light text-base shrink-0">
                        {item.price != null ? `¥${item.price.toLocaleString()}` : '—'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            {/* Photo area (right) */}
            <AnimateIn delay={0.1}>
              <div className="photo-tall">
                <Image
                  src="/softcream.png"
                  alt="カルカモのソフトクリーム・スイーツ"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ 04 Food ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn className="mb-14 md:mb-20">
            <div className="flex items-end gap-5 md:gap-8">
              <span className="section-num opacity-60">04</span>
              <div className="pb-2">
                <p className="label mb-2">Savory Food</p>
                <h2 className="font-display font-light text-5xl md:text-7xl lg:text-8xl leading-none text-brown-deep">
                  FOOD
                </h2>
              </div>
            </div>
          </AnimateIn>

          {/* All food items in one clean list layout */}
          <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-16 items-start">

            {/* Single photo area */}
            <AnimateIn>
              <div className="photo-portrait">
                <Image
                  src="/takoyaki.png"
                  alt="カルカモのたこ焼き"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>

            {/* All three categories stacked */}
            <AnimateIn delay={0.1} className="md:pt-2">
              {foodItems.map((cat, ci) => (
                <div key={cat.id} className={ci > 0 ? 'mt-10 pt-10 border-t border-bone/40' : ''}>
                  <div className="flex items-baseline gap-3 mb-5">
                    <Link href={`/${cat.id}`} className="label hover:text-brown-deep transition-colors">{cat.nameEn}</Link>
                    <span className="text-bone/60 label">—</span>
                    <p className="font-serif text-brown-deep text-sm">{cat.name}</p>
                  </div>
                  <ul>
                    {cat.items.map((item, i) => (
                      <li key={item.name} className={`py-3.5 flex justify-between gap-6 items-start ${i > 0 ? 'border-t border-bone/30' : ''}`}>
                        <div>
                          {item.tag && (
                            <span className="label text-brand mr-2" style={{ fontSize: '9px' }}>{item.tag}</span>
                          )}
                          <span className="font-serif text-brown text-sm">{item.name}</span>
                          {item.note && <p className="text-brown-light text-xs mt-0.5">{item.note}</p>}
                        </div>
                        <span className="font-display text-brown-light text-base shrink-0">
                          {item.price != null ? `¥${item.price.toLocaleString()}` : '—'}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ 05 Access ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-white border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn className="mb-14 md:mb-20">
            <div className="flex items-end gap-5 md:gap-8">
              <span className="section-num opacity-60">05</span>
              <div className="pb-2">
                <p className="label mb-2">How to Find Us</p>
                <h2 className="font-display font-light text-5xl md:text-7xl leading-none text-brown-deep">
                  ACCESS
                </h2>
              </div>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <AnimateIn>
              <dl className="space-y-0">
                {[
                  { dt: 'Store', dd: 'カルカモ' },
                  { dt: 'Address', dd: '茨城県ひたちなか市湊本町27-3' },
                  { dt: 'Area', dd: '那珂湊エリア' },
                  { dt: 'Hours', dd: 'Instagram をご確認ください' },
                ].map((row, i) => (
                  <div key={row.dt} className={`flex gap-8 py-5 ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                    <dt className="w-16 flex-shrink-0 label pt-0.5">{row.dt}</dt>
                    <dd className="font-serif text-brown text-sm">{row.dd}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-col gap-4">
                <a
                  href="https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  Google Maps
                </a>
                <Link
                  href="/access"
                  className="inline-flex items-center gap-4 label text-brown-light hover:text-brown-deep transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  詳しいアクセス
                </Link>
              </div>
            </AnimateIn>

            {/* Map area */}
            <AnimateIn delay={0.1}>
              <div className="aspect-square overflow-hidden border border-bone/40">
                <iframe
                  src="https://maps.google.com/maps?q=茨城県ひたちなか市湊本町27-3&output=embed&hl=ja"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="カルカモ アクセスマップ"
                  className="grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ 06 Instagram ━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep border-t border-brown">
        <AnimateIn className="text-center">
          <div className="flex items-end justify-center gap-5 md:gap-8 mb-12">
            <span className="font-display text-[4rem] md:text-[6rem] leading-none text-ivory/10 select-none">06</span>
            <div className="pb-1">
              <p className="label text-ivory/30 mb-2">Follow</p>
              <h2 className="font-display font-light text-4xl md:text-6xl leading-none text-ivory">
                INSTAGRAM
              </h2>
            </div>
          </div>
          <p className="font-serif text-ivory/50 text-sm mb-10">
            営業日・最新メニュー・おすすめ情報を発信中
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
