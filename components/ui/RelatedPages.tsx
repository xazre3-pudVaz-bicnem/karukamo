import Link from 'next/link'

export type RelatedPage = {
  href: string
  label: string
  labelEn: string
  description: string
}

export function RelatedPages({
  pages,
  title = '関連ページ',
}: {
  pages: RelatedPage[]
  title?: string
}) {
  return (
    <section className="section-py bg-ivory border-t border-bone/40">
      <div className="max-w-screen-xl mx-auto px-8 sm:px-12 md:px-16">
        <div className="mb-10 md:mb-14">
          <p className="label mb-3">Related</p>
          <h2 className="font-display font-light text-3xl md:text-4xl text-brown-deep leading-none">
            {title}
          </h2>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/30">
          {pages.map((page) => (
            <li key={page.href} className="bg-ivory">
              <Link
                href={page.href}
                className="block p-7 md:p-9 group hover:bg-white transition-colors"
              >
                <p className="label text-brand mb-2" style={{ fontSize: '9px' }}>
                  {page.labelEn}
                </p>
                <p className="font-serif text-brown-deep text-sm mb-2">{page.label}</p>
                <p className="text-brown-light text-xs leading-loose">{page.description}</p>
                <span
                  className="mt-5 inline-flex items-center gap-2 label text-brown-light group-hover:text-brown transition-colors"
                  style={{ fontSize: '9px' }}
                >
                  <span className="block w-5 h-px bg-current" />
                  View More
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
