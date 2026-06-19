import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="text-white/70 border-t border-brand-dark" style={{ backgroundColor: '#C8400A' }}>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-10 py-14 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255,255,255,0.22)' }}>
                <Image
                  src="/logo.jpg"
                  alt="カルカモ"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-display text-base tracking-[0.18em] text-white/90 uppercase">Karukamo</span>
            </div>
            <p className="text-xs leading-loose">
              焼きそば&amp;食べ歩きの店<br />
              那珂湊、ひたちなか市
            </p>
            <a
              href="https://www.instagram.com/karukamo.2384/"
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-block hover:text-white transition-colors"
            >
              @karukamo.2384
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="label text-white/50">Navigation</p>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Top' },
                { href: '/menu', label: 'Menu' },
                { href: '/kodawari', label: 'About' },
                { href: '/access', label: 'Access' },
                { href: '/faq', label: 'FAQ' },
                { href: '/blog', label: 'Blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu */}
          <div className="space-y-4">
            <p className="label text-white/50">Menu</p>
            <ul className="space-y-3">
              {[
                { href: '/yakisoba', label: '焼きそば' },
                { href: '/takoyaki', label: 'たこ焼き' },
                { href: '/okonomiyaki', label: 'お好み焼き' },
                { href: '/crepe', label: 'クレープ' },
                { href: '/sweets', label: 'アイス・スイーツ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info + Store */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="label text-white/50">Information</p>
              <ul className="space-y-3">
                {[
                  { href: '/takeout', label: 'テイクアウト特集' },
                  { href: '/lunch', label: 'ランチ利用' },
                  { href: '/about-nakaminato', label: '那珂湊エリア' },
                  { href: '/column', label: '専門コラム' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 text-xs">
              <p className="label text-white/50">Store</p>
              <p className="text-white/90">カルカモ</p>
              <p>茨城県ひたちなか市湊本町27-3</p>
              <p className="leading-loose">
                営業時間・定休日は<br />
                Instagram をご確認ください。
              </p>
              <a
                href="https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3"
                target="_blank"
                rel="noopener noreferrer"
                className="label hover:text-white transition-colors block"
              >
                Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 text-center">
          <p className="text-[10px] text-white/40">© {new Date().getFullYear()} カルカモ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
