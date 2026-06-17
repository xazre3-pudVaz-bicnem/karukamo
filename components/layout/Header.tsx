'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/menu', label: 'Menu' },
  { href: '/kodawari', label: 'About' },
  { href: '/access', label: 'Access' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-bone/50">
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.jpg"
              alt="カルカモ"
              width={28}
              height={28}
              className="w-7 h-7 object-contain rounded-sm opacity-90"
            />
            <span className="font-display text-base md:text-lg tracking-[0.18em] text-brown-deep uppercase">
              Karukamo
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`label transition-colors duration-200 hover:text-brown-deep ${
                  pathname === item.href ? 'text-brown-deep' : 'text-brown-light'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/karukamo.2384/"
              target="_blank"
              rel="noopener noreferrer"
              className="label text-brown-light hover:text-brown-deep transition-colors duration-200"
            >
              Instagram
            </a>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            aria-label="メニューを開く"
          >
            <span className={`block w-[18px] h-px bg-brown-deep transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-[18px] h-px bg-brown-deep transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-[18px] h-px bg-brown-deep transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: '#FAF3E4' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-1 pt-16">
          {[{ href: '/', label: 'Top' }, ...navItems].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-4 font-display text-4xl tracking-widest uppercase transition-colors hover:text-brand ${
                pathname === item.href ? 'text-brand' : 'text-brown-deep'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/karukamo.2384/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 label text-brown-light hover:text-brown-deep transition-colors"
          >
            @karukamo.2384
          </a>
        </div>
      </div>
    </>
  )
}
