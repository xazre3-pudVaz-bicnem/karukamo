'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-bone/50">
      <div className="flex">
        <a
          href="https://www.instagram.com/karukamo.2384/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center py-4 label text-brown-light hover:text-brown-deep transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://maps.google.com/?q=茨城県ひたちなか市湊本町27-3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center py-4 label text-brown-light hover:text-brown-deep transition-colors border-x border-bone/50"
        >
          Map
        </a>
        <Link
          href="/menu"
          className={`flex-1 flex items-center justify-center py-4 label transition-colors ${
            pathname === '/menu' ? 'text-brown-deep' : 'text-brown-light hover:text-brown-deep'
          }`}
        >
          Menu
        </Link>
      </div>
    </nav>
  )
}
