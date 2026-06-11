import Link from 'next/link'

export type BreadcrumbItem = {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="パンくずリスト" className="flex items-center gap-1.5 flex-wrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <span className="text-bone/60 select-none" style={{ fontSize: '10px' }}>›</span>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="label text-brown-light hover:text-brown transition-colors"
              style={{ fontSize: '10px', letterSpacing: '0.12em' }}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className="label text-brown-deep"
              style={{ fontSize: '10px', letterSpacing: '0.12em' }}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
