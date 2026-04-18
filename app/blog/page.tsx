import type { Metadata } from 'next'
import Script from 'next/script'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import { BlogCard } from '@/components/blog/BlogCard'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'Blog — Webdesign Wissen & Insights | PixelCraft Media',
  description:
    'Expertenwissen rund um Webdesign, UX/UI, Conversion-Optimierung und Performance. Praxisnahe Artikel für Unternehmer und Marketing-Verantwortliche.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://pixelcraft-media.de/blog',
    siteName: 'PixelCraft Media',
    title: 'Blog — Webdesign Wissen & Insights | PixelCraft Media',
    description:
      'Expertenwissen rund um Webdesign, UX/UI, Conversion-Optimierung und Performance.',
  },
}

/* ============================================================
   DATA
   ============================================================ */
const POSTS = [
  {
    slug: 'core-web-vitals-2025',
    title: 'Core Web Vitals 2025: Was du wirklich wissen musst',
    category: 'Performance',
    readTime: '8 min',
    excerpt:
      'Google bewertet Websites nach Core Web Vitals. Was sich 2025 geändert hat, was wirklich zählt — und wie du deine Seite in den grünen Bereich bekommst.',
    date: '2026-03-20',
    dateFormatted: '20. März 2026',
  },
  {
    slug: 'conversion-rate-optimierung-website',
    title: 'Conversion Rate Optimierung: 12 Hebel, die wirklich wirken',
    category: 'Conversion',
    readTime: '11 min',
    excerpt:
      'Die meisten Websites lassen 90% ihrer Besucher ohne Handlung gehen. Diese 12 Optimierungen haben wir bei 47 Projekten getestet — alle mit messbaren Ergebnissen.',
    date: '2026-03-05',
    dateFormatted: '5. März 2026',
  },
  {
    slug: 'shopify-woocommerce-custom-vergleich',
    title: 'Shopify, WooCommerce oder Custom: Welche Plattform passt wirklich zu dir?',
    category: 'E-Commerce',
    readTime: '10 min',
    excerpt:
      'Shopify, WooCommerce oder Custom-Entwicklung? Der ehrliche Vergleich mit konkreten Zahlen, Kosten, Skalierbarkeit und Entscheidungsmatrix — damit du die richtige Plattform wählst.',
    date: '2026-02-10',
    dateFormatted: '10. Februar 2026',
  },
  {
    slug: 'website-relaunch-seo-guide',
    title: 'Website Relaunch ohne SEO-Risiko: Der vollständige Leitfaden',
    category: 'SEO',
    readTime: '12 min',
    excerpt:
      'Website Relaunch ohne Traffic-Verlust — das geht. Schritt-für-Schritt Anleitung für SEO-sichere Migration: Redirects, Content-Audit, Search Console und technische Checkliste.',
    date: '2026-01-28',
    dateFormatted: '28. Januar 2026',
  },
  {
    slug: 'webdesign-trends-2026',
    title: 'Webdesign 2026: Die 7 Trends, die Conversions wirklich steigern',
    category: 'Design',
    readTime: '9 min',
    excerpt:
      '7 Webdesign-Trends 2026, die nachweislich Conversions steigern. Von AI-personalisierten Layouts über brutales Dark Design bis zu Micro-Interactions — mit konkreten Umsetzungstipps.',
    date: '2026-01-15',
    dateFormatted: '15. Januar 2026',
  },
]

/* ============================================================
   JSON-LD
   ============================================================ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Blog',
      '@id': 'https://pixelcraft-media.de/blog#blog',
      name: 'PixelCraft Media Blog',
      description:
        'Expertenwissen rund um Webdesign, UX/UI, Conversion-Optimierung und Performance.',
      url: 'https://pixelcraft-media.de/blog',
      publisher: { '@id': 'https://pixelcraft-media.de/#organization' },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://pixelcraft-media.de/blog#itemlist',
      name: 'Blog-Artikel',
      itemListElement: POSTS.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://pixelcraft-media.de/blog/${post.slug}`,
        name: post.title,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pixelcraft-media.de' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://pixelcraft-media.de/blog' },
      ],
    },
  ],
}


/* ============================================================
   BLOG HUB PAGE
   ============================================================ */
export default function BlogPage() {
  return (
    <>
      <Script
        id="blog-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      <main style={{ background: 'var(--bg-base)', minHeight: '100svh' }}>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          aria-label="Blog Hero"
          style={{
            paddingTop: 'clamp(8rem, 14vw, 14rem)',
            paddingBottom: 'clamp(3rem, 6vw, 5rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#8A8799',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  Home
                </Link>
              </li>
              <li
                aria-hidden="true"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  color: '#8A8799',
                }}
              >
                /
              </li>
              <li>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#ff4d00',
                  }}
                >
                  Blog
                </span>
              </li>
            </ol>
          </nav>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(4rem, 10vw, 12rem)',
              fontWeight: 400,
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              color: '#f4efe6',
              margin: 0,
              marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
            }}
          >
            BLOG &amp;{' '}
            <span style={{ color: '#ff4d00' }}>INSIGHTS.</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: '#8a8799',
              lineHeight: 1.65,
              maxWidth: '480px',
              margin: 0,
            }}
          >
            Kein Fluff. Nur das, was wirklich funktioniert.
          </p>
        </section>

        {/* ── Divider ──────────────────────────────────────── */}
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          }}
        >
          <div
            style={{
              height: '1px',
              background: 'rgba(244,239,230,0.06)',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
            }}
          />
        </div>

        {/* ── Post Grid ────────────────────────────────────── */}
        <section
          aria-label="Blog-Artikel"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            paddingBottom: 'clamp(6rem, 12vw, 12rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
          }}
        >
          {POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>

        {/* ── Blog CTA ─────────────────────────────────────── */}
        <section
          aria-label="Website analysieren"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            paddingBottom: 'clamp(6rem, 10vw, 10rem)',
          }}
        >
          <div
            style={{
              background: '#0f0f18',
              border: '1px solid rgba(244,239,230,0.08)',
              borderRadius: '4px',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 400,
                  color: '#f4efe6',
                  margin: 0,
                  marginBottom: '0.5rem',
                  lineHeight: 1.2,
                }}
              >
                Wie performt deine Website gerade?
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1rem',
                  color: '#8a8799',
                  margin: 0,
                }}
              >
                Kostenlose Analyse — keine Kreditkarte, kein Spam.
              </p>
            </div>

            <Link
              href="/kontakt"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#ff4d00',
                color: '#f4efe6',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                padding: '0.9375rem 1.75rem',
                borderRadius: '999px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'background 0.2s ease, transform 0.2s ease',
              }}
            >
              Website kostenlos analysieren →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
