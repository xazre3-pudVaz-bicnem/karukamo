import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { menuCategories } from '@/data/menu'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'カルカモ | 那珂湊の焼きそば&食べ歩きスタンド',
  description:
    '茨城県ひたちなか市・那珂湊の焼きそば＆テイクアウトスタンド「カルカモ」。美明豚焼きそば・たこ焼き・お好み焼き・クレープなど。おさかな市場から歩いて5分。',
  alternates: { canonical: 'https://karukamo.jp' },
}

const yakisoba = menuCategories.find((c) => c.id === 'yakisoba')!

const MENU_IMAGES: Record<string, string> = {
  yakisoba:    '/LINE_ALBUM_焼きそば_260616_1.jpg',
  takoyaki:    '/takoyaki.png',
  okonomiyaki: '/LINE_ALBUM_お好み焼き_260616_1.jpg',
  crepe:       '/LINE_ALBUM_クレープ_260616_1.png',
  taiyaki:     '/food-spread.png',
  sweets:      '/LINE_ALBUM_アイス_260616_1.jpg',
}

export default function HomePage() {
  return (
    <>
      {/* ━━━━ Hero ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="flex flex-col md:flex-row md:min-h-screen items-stretch pt-16">

        {/* Left — text */}
        <div
          className="flex-1 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-12 md:py-0"
          style={{ backgroundColor: '#FAF3E4' }}
        >
          <AnimateIn delay={0.05}>
            <span className="kd-badge mb-7">那珂湊名物</span>

            <h1 className="font-serif font-bold text-[clamp(1.8rem,4.8vw,3.5rem)] leading-snug text-brown-deep mb-5">
              那珂湊で楽しむ<br />
              焼きそばと食べ歩きの店
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="block w-6 h-px bg-brand flex-shrink-0" />
              <p className="font-serif text-brown text-sm">那珂湊おさかな市場から歩いて5分</p>
            </div>

            <p className="font-sans text-brown-light text-xs leading-loose mb-10 max-w-xs" style={{ letterSpacing: '0.03em' }}>
              焼きそば・たこ焼き・お好み焼き・クレープまで楽しめる<br />
              ひたちなか市のテイクアウトスタンドです
            </p>

            <div className="flex items-center gap-4 mb-12">
              <span className="rule flex-shrink-0" />
              <p className="label">ひたちなか市湊本町27-3</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <Link
                href="/menu"
                className="inline-block bg-brand text-white px-7 py-3 label hover:bg-brand-dark transition-colors"
                style={{ letterSpacing: '0.2em' }}
              >
                メニューを見る
              </Link>
              <a
                href="https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
                style={{ letterSpacing: '0.25em' }}
              >
                <span className="block w-8 h-px bg-current" />
                アクセスを見る
              </a>
            </div>
          </AnimateIn>
        </div>

        {/* Mobile — landscape image (compact height on small screens) */}
        <div className="md:hidden relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <Image
            src="/LINE_ALBUM_焼きそば_260616_1.jpg"
            alt="カルカモの焼きそば — 美明豚焼きそば"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Desktop — right side image */}
        <div className="hidden md:block w-[48%] photo-hero">
          <Image
            src="/LINE_ALBUM_焼きそば_260616_1.jpg"
            alt="カルカモの焼きそば — 美明豚焼きそば"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* ━━━━ 01 焼きそば ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">看板メニュー · Signature</p>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
              那珂湊焼きそば
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

            <AnimateIn>
              <div className="photo-portrait">
                <Image
                  src="/LINE_ALBUM_焼きそば_260616_2.jpg"
                  alt="美明豚焼きそば"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1} className="md:pt-4">
              <p className="font-serif text-brown text-sm md:text-base leading-loose mb-8">
                茨城県産ブランド豚「美明豚」を使ったボリューム満点の焼きそば。<br />
                イカや季節の具材を合わせた一品も。<br />
                注文を受けてから丁寧に焼き上げる、作りたての熱々をどうぞ。
              </p>

              <ul>
                {yakisoba.items.map((item, i) => (
                  <li
                    key={item.name}
                    className={`py-5 flex justify-between gap-6 items-start ${i > 0 ? 'border-t border-bone/40' : ''}`}
                  >
                    <div>
                      {item.tag && (
                        <span
                          className="label text-brand border border-brand/30 px-2 py-0.5 mb-2 inline-block"
                          style={{ fontSize: '9px' }}
                        >
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

              <div className="mt-10 pt-8 border-t border-bone/40">
                <Link
                  href="/yakisoba"
                  className="inline-flex items-center gap-4 label text-brand hover:text-brand-dark transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  焼きそばのこだわりを見る
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ 02 Menu — with food photos ━━━━━━━━━━━━ */}
      <section className="section-py border-t border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">All Items · メニュー</p>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
              メニュー一覧
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-bone/30 mb-10">
            {menuCategories.map((cat) => (
              <AnimateIn key={cat.id}>
                <Link
                  href={`/menu#${cat.id}`}
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

          <AnimateIn>
            <Link
              href="/menu"
              className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors"
              style={{ letterSpacing: '0.25em' }}
            >
              <span className="block w-8 h-px bg-current" />
              全メニューを見る
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ 03 About ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            <AnimateIn>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
                  <p className="label text-brand">About · カルカモについて</p>
                </div>
                <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
                  那珂湊の<br />食べ歩きスタンド
                </h2>
              </div>
              <p className="font-serif text-brown text-sm md:text-base leading-loose mb-5">
                茨城県ひたちなか市の港町、那珂湊。<br />
                おさかな市場のすぐ近くに立つ、小さな食べ歩きスタンドです。
              </p>
              <p className="font-serif text-brown-light text-sm leading-loose mb-8">
                焼きそば・クレープ・たこ焼き・お好み焼き・アイスなど、<br />
                手軽に楽しめる一品を丁寧に作っています。<br />
                那珂湊観光のついでに、地元の方の日常の一枚に。
              </p>
              <div className="flex items-center gap-4">
                <span className="rule flex-shrink-0" />
                <p className="label">那珂湊おさかな市場から歩いて5分</p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
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

      {/* ━━━━ 04 こだわり ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py border-t border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn className="mb-10 md:mb-14">
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
                title: '地元の食材を大切に',
                body: '焼きそばには茨城県産ブランド豚「美明豚」を使用。地域の恵みを活かした、那珂湊ならではの味わいです。',
              },
              {
                num: '02',
                title: '注文を受けてから作る',
                body: 'ご注文が入ってから一つひとつ丁寧に焼き上げます。出来立て・熱々の状態でお渡しします。',
              },
              {
                num: '03',
                title: '食べ歩きの楽しさを',
                body: '那珂湊おさかな市場のすぐそば。市場観光のついでに気軽に立ち寄れる、地元に根ざしたスタンドです。',
              },
            ].map((item) => (
              <AnimateIn key={item.num}>
                <div className="border-t-2 border-brand pt-6 pb-2">
                  <span className="font-display text-5xl leading-none block mb-5" style={{ color: '#E0CBA8' }}>
                    {item.num}
                  </span>
                  <h3 className="font-serif font-bold text-brown-deep text-sm md:text-base mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-serif text-brown-light text-xs md:text-sm leading-loose">{item.body}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━ 05 Access ━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="section-py bg-ivory border-t border-bone/40">
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">

          <AnimateIn className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[2px] bg-brand flex-shrink-0" />
              <p className="label text-brand">Access · アクセス</p>
            </div>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-brown-deep leading-tight">
              アクセス
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <AnimateIn>
              <dl className="space-y-0 mb-8">
                {[
                  { dt: 'Store', dd: 'カルカモ' },
                  { dt: 'Address', dd: '茨城県ひたちなか市湊本町27-3' },
                  { dt: 'Area', dd: '那珂湊おさかな市場から徒歩5分' },
                  { dt: 'Hours', dd: 'Instagram をご確認ください' },
                ].map((row, i) => (
                  <div key={row.dt} className={`flex gap-8 py-5 ${i > 0 ? 'border-t border-bone/40' : ''}`}>
                    <dt className="w-16 flex-shrink-0 label pt-0.5">{row.dt}</dt>
                    <dd className="font-serif text-brown text-sm">{row.dd}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col gap-4">
                <a
                  href="https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 label text-brand hover:text-brand-dark transition-colors"
                  style={{ letterSpacing: '0.25em' }}
                >
                  <span className="block w-8 h-px bg-current" />
                  Google Maps で開く
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
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ━━━━ 06 Blog ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 md:py-20 border-t border-bone/40" style={{ backgroundColor: '#FAF3E4' }}>
        <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
          <AnimateIn className="flex items-center justify-between gap-8">
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
              className="inline-flex items-center gap-4 label text-brown hover:text-brown-deep transition-colors shrink-0"
              style={{ letterSpacing: '0.25em' }}
            >
              <span className="block w-8 h-px bg-current" />
              一覧を見る
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ━━━━ 07 Instagram ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-28 bg-brown-deep border-t border-brown">
        <AnimateIn className="text-center">
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
