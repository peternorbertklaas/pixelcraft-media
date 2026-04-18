import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'
import Script from 'next/script'
import { ServiceCard } from '@/components/leistungen/ServiceCard'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'Leistungen — Webdesign, E-Commerce & UX/UI Design | PixelCraft Media',
  description:
    'Alle Leistungen der PixelCraft Media Webdesign Agentur: Web Design, E-Commerce, Relaunch, Landing Pages, UX/UI Design, Wartung. DE/AT/CH.',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: { canonical: '/leistungen' },
  openGraph: {
    title: 'Leistungen — Webdesign, E-Commerce & UX/UI Design | PixelCraft Media',
    description:
      'Alle Leistungen der PixelCraft Media Webdesign Agentur: Web Design, E-Commerce, Relaunch, Landing Pages, UX/UI Design, Wartung. DE/AT/CH.',
    url: 'https://pixelcraft-media.de/leistungen',
    siteName: 'PixelCraft Media',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

/* ============================================================
   JSON-LD
   ============================================================ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://pixelcraft-media.de/leistungen#page',
      name: 'Leistungen — PixelCraft Media',
      description:
        'Alle digitalen Dienstleistungen von PixelCraft Media: Webdesign, E-Commerce, Relaunch, Landing Pages, UX/UI Design und Website-Wartung.',
      url: 'https://pixelcraft-media.de/leistungen',
      publisher: { '@id': 'https://pixelcraft-media.de/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://pixelcraft-media.de',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Leistungen',
          item: 'https://pixelcraft-media.de/leistungen',
        },
      ],
    },
  ],
}

/* ============================================================
   SERVICES DATA
   ============================================================ */
const SERVICES = [
  {
    slug: 'webdesign',
    number: '01',
    title: 'Web Design',
    subtitle: 'Individuelle Websites',
    description:
      'Kein Template. Keine Kompromisse. Wir bauen Websites von Grund auf — optimiert für dein Ziel, deine Zielgruppe, deine Marke.',
    tags: ['Custom Design', 'Lighthouse 95+', 'Conversion-optimiert'],
    stat: '+280% Anfragen',
  },
  {
    slug: 'ecommerce',
    number: '02',
    title: 'E-Commerce',
    subtitle: 'Online-Shops die verkaufen',
    description:
      'Shopify, Next.js Commerce, WooCommerce — egal welche Plattform: Wir optimieren jeden Schritt des Checkout-Prozesses für maximale Conversion.',
    tags: ['Shopify', 'Next.js Commerce', 'CRO'],
    stat: '0.8% → 3.4% CVR',
  },
  {
    slug: 'relaunch',
    number: '03',
    title: 'Website-Relaunch',
    subtitle: 'Neu aufbauen ohne Risiko',
    description:
      'Bestehende Rankings bleiben erhalten. Wir analysieren was funktioniert, sichern SEO-Werte und bauen neu — schneller, moderner, konvertierender.',
    tags: ['SEO-sicher', '301-Redirects', 'Performance-Boost'],
    stat: '7.8s → 1.1s Ladezeit',
  },
  {
    slug: 'landing-pages',
    number: '04',
    title: 'Landing Pages',
    subtitle: 'Eine Seite. Ein Ziel.',
    description:
      'Conversion-optimierte Landing Pages für Google Ads, Social Campaigns und Product Launches. A/B-Test-ready. Ab 1.200 €.',
    tags: ['Google Ads', 'A/B-Testing', 'Ab 1.200 €'],
    stat: '+64% Conversion Rate',
  },
  {
    slug: 'ux-ui-design',
    number: '05',
    title: 'UX/UI Design',
    subtitle: 'Interfaces die konvertieren',
    description:
      'User Research, Wireframes, Prototypen, Design Systems — alles in Figma. Gutes Design ist das, das man nicht bemerkt.',
    tags: ['Figma', 'User Research', 'Design Systems'],
    stat: '-38% Support-Tickets',
  },
  {
    slug: 'wartung',
    number: '06',
    title: 'Wartung & Wachstum',
    subtitle: 'Dauerhaft optimieren',
    description:
      'Updates, Sicherheit, Performance-Monitoring, A/B-Tests — wir sind nicht weg, wenn die Site live ist. Ab 299 €/Monat.',
    tags: ['Security', 'Monitoring', 'Ab 299 €/Mo'],
    stat: '99.9% Uptime',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function LeistungenPage() {
  return (
    <>
      <Script
        id="leistungen-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        {/* ── HERO ── */}
        <section
          style={{
            position: 'relative',
            minHeight: '55vh',
            display: 'flex',
            alignItems: 'center',
            padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 8vw, 6rem)',
            overflow: 'hidden',
          }}
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60vw',
              height: '60vw',
              maxWidth: 800,
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse at center, rgba(255,77,0,0.10) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              width: '100%',
              position: 'relative',
            }}
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '2.5rem' }}>
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
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Leistungen', href: '/leistungen' },
                ].map((crumb, i, arr) => (
                  <li
                    key={crumb.href}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <a
                      href={crumb.href}
                      aria-current={i === arr.length - 1 ? 'page' : undefined}
                      style={{
                        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 400,
                        color:
                          i === arr.length - 1
                            ? 'var(--orange-400)'
                            : 'var(--text-muted)',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {crumb.label}
                    </a>
                    {i < arr.length - 1 && (
                      <span
                        aria-hidden="true"
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: '0.75rem',
                        }}
                      >
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--orange-500)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1.25rem',
              }}
            >
              Was wir bauen
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(3.5rem, 8vw, 9rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 0.95,
                letterSpacing: '-0.01em',
                marginBottom: '2rem',
              }}
            >
              Leistungen.
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '55ch',
              }}
            >
              Sechs Disziplinen. Ein Anspruch: Digitale Produkte, die nicht nur gut aussehen,
              sondern messbar performen — für Unternehmen in DE, AT und CH.
            </p>
          </div>
        </section>

        {/* ── SERVICE GRID ── */}
        <section
          style={{
            padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 8rem)',
          }}
          aria-label="Alle Leistungen"
        >
          <div
            style={{
              maxWidth: 1280,
              margin: '0 auto',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
                gap: '1.5px',
                border: '1.5px solid var(--border-subtle)',
              }}
            >
              {SERVICES.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section
          style={{
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 8rem)',
            borderTop: '1px solid var(--border-subtle)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
              }}
            >
              Kein passendes Paket gefunden?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              Jedes Projekt ist anders. Ruf uns an oder schreib uns — wir finden
              gemeinsam die richtige Lösung für dein Unternehmen.
            </p>
            <a
              href="/kontakt"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#050508',
                background: 'var(--orange-500)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                padding: '1rem 2.5rem',
                borderRadius: 100,
              }}
            >
              Projekt besprechen&nbsp;→
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

