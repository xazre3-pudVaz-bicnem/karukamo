interface FAQItem {
  q: string
  a: string
}

export function FAQBlock({
  items,
  title = 'よくある質問',
}: {
  items: FAQItem[]
  title?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
  return (
    <section className="mt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="font-display font-light text-3xl md:text-4xl text-brown-deep mb-8 leading-none">
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <details
            key={i}
            className="group border border-bone/50 bg-white/60 rounded-sm"
          >
            <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none font-serif text-sm text-brown-deep font-medium leading-relaxed">
              <span>Q. {item.q}</span>
              <span className="flex-shrink-0 text-bone group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <div className="px-5 pb-5 font-serif text-sm text-brown-light leading-loose border-t border-bone/30 pt-4">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
