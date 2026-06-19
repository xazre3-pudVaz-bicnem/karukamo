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

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const base = 'https://www.karukamo.jp'
  const allItems = [
    { label: 'ホーム', href: base },
    ...items.map((item) => ({
      label: item.label,
      href: item.href ? `${base}${item.href}` : undefined,
    })),
  ]
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
