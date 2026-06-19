import Link from 'next/link'

interface RelatedItem {
  href: string
  title: string
  desc?: string
}

export function RelatedColumns({
  items,
  title = '関連コラム',
}: {
  items: RelatedItem[]
  title?: string
}) {
  return (
    <section className="mt-12 pt-10 border-t border-bone/40">
      <h2 className="font-display font-light text-2xl text-brown-deep mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="block p-4 border border-bone/50 bg-white/60 hover:bg-white hover:border-bone transition-all"
          >
            <p className="font-serif text-sm text-brown-deep leading-snug mb-1">
              {item.title}
            </p>
            {item.desc && (
              <p className="text-xs text-brown-light leading-relaxed">{item.desc}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}
