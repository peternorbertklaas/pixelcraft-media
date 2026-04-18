import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'Über uns — PixelCraft Media Webdesign Agentur',
  description:
    'Wir sind PixelCraft Media — eine kleine Agentur mit großen Ansprüchen. Unser Team, unsere Philosophie, unsere Geschichte. Webdesign für DE/AT/CH.',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: { canonical: '/ueber-uns' },
  openGraph: {
    title: 'Über uns — PixelCraft Media Webdesign Agentur',
    description:
      'Wir sind PixelCraft Media — eine kleine Agentur mit großen Ansprüchen. Unser Team, unsere Philosophie, unsere Geschichte. Webdesign für DE/AT/CH.',
    url: 'https://pixelcraft-media.de/ueber-uns',
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
      '@type': 'AboutPage',
      '@id': 'https://pixelcraft-media.de/ueber-uns#page',
      name: 'Über uns — PixelCraft Media',
      description:
        'Eine kleine Agentur mit großen Ansprüchen. Webdesign für DE/AT/CH seit 2019.',
      url: 'https://pixelcraft-media.de/ueber-uns',
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
          name: 'Über uns',
          item: 'https://pixelcraft-media.de/ueber-uns',
        },
      ],
    },
  ],
}

/* ============================================================
   APPROACH CARDS DATA
   ============================================================ */
interface ApproachCard {
  number: string
  title: string
  body: string
}

const approachCards: ApproachCard[] = [
  {
    number: '01',
    title: 'Strategie zuerst',
    body: 'Kein Design ohne Plan. Wir analysieren deine Zielgruppe, deine Konkurrenz und deine Ziele — bevor wir eine einzige Linie zeichnen. Weil schöne Dinge, die nicht konvertieren, teuer sind.',
  },
  {
    number: '02',
    title: 'Handwerk bis ins Detail',
    body: 'Von der Typografie über die Animation bis zur Ladezeit-Optimierung — alles mit Absicht. Wir sind die Agentur, die einen halben Tag damit verbringt, den perfekten Weißraum zu finden. Das ist keine Zeitverschwendung. Das ist der Unterschied.',
  },
  {
    number: '03',
    title: 'Langfristige Partnerschaft',
    body: 'Wir wollen nicht, dass du nach dem Launch nie wieder von uns hörst. Wir wollen sehen, wie dein Unternehmen wächst. Und wir wollen Teil dieses Wachstums sein.',
  },
]

/* ============================================================
   STATS DATA
   ============================================================ */
interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '47+', label: 'Projekte abgeliefert' },
  { value: '2019', label: 'Gegründet' },
  { value: '+280%', label: 'Mehr Anfragen für Kunden' },
  { value: 'DE/AT/CH', label: 'Unser Markt' },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function UeberUnsPage() {
  return (
    <>
      <Script
        id="ueber-uns-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      <main style={{ background: 'var(--bg-base)', minHeight: '100svh' }}>

        {/* ── SEKTION 1: Manifesto Hero ─────────────────────────── */}
        <section
          aria-label="Über uns Hero"
          style={{
            paddingTop: 'clamp(8rem, 14vw, 14rem)',
            paddingBottom: 'clamp(4rem, 8vw, 7rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{ marginBottom: '2.5rem' }}
          >
            <ol
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
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
                    letterSpacing: '0.15em',
                    color: '#8A8799',
                    textDecoration: 'none',
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
                    letterSpacing: '0.15em',
                    color: '#FF4D00',
                  }}
                  aria-current="page"
                >
                  Über uns
                </span>
              </li>
            </ol>
          </nav>

          {/* Main heading */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(4rem, 10vw, 13rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#F4EFE6',
              margin: 0,
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            WIR SIND
            <br />
            PIXELCRAFT
            <br />
            <span style={{ color: '#FF4D00' }}>MEDIA.</span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.25rem',
              color: '#8A8799',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: '540px',
            }}
          >
            Eine kleine Agentur mit großen Ansprüchen.
          </p>
        </section>

        {/* ── SEKTION 2: Das Manifest ────────────────────────────── */}
        <section
          aria-label="Unser Manifest"
          style={{
            background: '#050508',
            paddingTop: 'clamp(5rem, 10vw, 9rem)',
            paddingBottom: 'clamp(5rem, 10vw, 9rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          }}
        >
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#FF4D00',
                marginBottom: '2.5rem',
              }}
            >
              Das Manifest
            </span>

            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: '#F4EFE6',
              }}
            >
              <p style={{ margin: '0 0 1.75rem 0' }}>
                Wir haben PixelCraft Media gegründet, weil wir eine klare Meinung haben: Die meisten Websites sind Geldverschwendung.
              </p>
              <p style={{ margin: '0 0 1.75rem 0', color: '#8A8799' }}>
                Nicht weil die Entwickler schlecht wären. Nicht weil die Designer keine Ahnung hätten. Sondern weil der Fokus falsch liegt. Zu viel Kreativität ohne Strategie. Zu viel Technik ohne Verständnis für das Ziel. Zu viele Kompromisse.
              </p>
              <p
                style={{
                  margin: '0 0 1.75rem 0',
                  color: '#F4EFE6',
                  fontWeight: 500,
                }}
              >
                Wir arbeiten anders.
              </p>
              <p style={{ margin: '0 0 1.75rem 0', color: '#8A8799' }}>
                Wir nehmen weniger Projekte an als wir könnten — weil wir bei jedem Projekt so tun, als wäre es das einzige. Wir stellen unangenehme Fragen, bevor wir einen Pixel setzen. Wir messen alles, was messbar ist.
              </p>
              <p style={{ margin: '0 0 1.75rem 0', color: '#8A8799' }}>
                Und wenn wir fertig sind, übergeben wir keine Website. Wir übergeben ein Werkzeug. Eines, das Ergebnisse produziert, solange es eingesetzt wird.
              </p>
              <p style={{ margin: 0, color: '#F4EFE6' }}>
                Jedes Projekt ist eine Chance, das Beste rauszuholen. Nicht das Schnellste. Nicht das Günstigste.{' '}
                <span style={{ color: '#FF4D00' }}>Das Beste.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── SEKTION 3: Stats ──────────────────────────────────── */}
        <section
          aria-label="Zahlen und Fakten"
          style={{
            paddingTop: 'clamp(4rem, 8vw, 7rem)',
            paddingBottom: 'clamp(4rem, 8vw, 7rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.value}
                style={{
                  borderTop: '1px solid rgba(244,239,230,0.12)',
                  paddingTop: '2rem',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: 400,
                    lineHeight: 1,
                    color: '#FF4D00',
                    marginBottom: '0.75rem',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#8A8799',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SEKTION 4: Unser Ansatz (3 Säulen) ───────────────── */}
        <section
          aria-label="Unser Ansatz"
          style={{
            background: '#0F0F18',
            paddingTop: 'clamp(5rem, 10vw, 9rem)',
            paddingBottom: 'clamp(5rem, 10vw, 9rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: 'clamp(3rem, 6vw, 5rem)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#FF4D00',
                }}
              >
                Unser Ansatz
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                  color: '#F4EFE6',
                  margin: 0,
                }}
              >
                Drei Säulen.
                <br />
                Ein Ergebnis.
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: 'clamp(1.5rem, 3vw, 2rem)',
              }}
            >
              {approachCards.map((card) => (
                <article
                  key={card.number}
                  style={{
                    background: '#161622',
                    border: '1px solid rgba(244,239,230,0.06)',
                    borderRadius: '8px',
                    padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: '#FF4D00',
                    }}
                  >
                    {card.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      color: '#F4EFE6',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      color: '#8A8799',
                      margin: 0,
                    }}
                  >
                    {card.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEKTION 5: Was uns antreibt ───────────────────────── */}
        <section
          aria-label="Was uns antreibt"
          style={{
            paddingTop: 'clamp(5rem, 10vw, 9rem)',
            paddingBottom: 'clamp(5rem, 10vw, 9rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'start',
            }}
          >
            {/* Left: heading */}
            <div>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#FF4D00',
                  marginBottom: '1.5rem',
                }}
              >
                Team & Werte
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                  color: '#F4EFE6',
                  margin: 0,
                }}
              >
                Was uns
                <br />
                antreibt.
              </h2>
            </div>

            {/* Right: body text */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: '#8A8799',
                  margin: '0 0 1.5rem 0',
                }}
              >
                Hinter PixelCraft Media steht ein eingespieltes Team aus Designern, Entwicklern und Strategen — spezialisiert auf digitale Auftritte, die nicht nur schön aussehen, sondern messbar wirken. Wir vereinen Designgefühl mit technischem Tiefgang.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: '#8A8799',
                  margin: '0 0 1.5rem 0',
                }}
              >
                Unsere Arbeiten reichen von Premium-E-Commerce-Shops und Unternehmenswebsites über komplexe SaaS-Interfaces bis hin zu vollständigen Markenaufritten. Wir haben für Kunden aus dem Gesundheitswesen, der Finanzbranche, dem Handel und der Industrie gearbeitet — und verstehen, dass jede Branche eigene Regeln hat.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: '#8A8799',
                  margin: '0 0 1.5rem 0',
                }}
              >
                Was uns täglich antreibt: Der Moment, wenn ein Kunde uns schreibt, dass ihre neue Website in der ersten Woche mehr Anfragen gebracht hat als im gesamten letzten Quartal. Das ist kein Zufall — das ist der Beweis, dass gutes Design Wirkung hat.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.0625rem',
                  lineHeight: 1.8,
                  color: '#8A8799',
                  margin: 0,
                }}
              >
                Wir glauben, dass eine Website das wirkungsvollste Verkaufswerkzeug ist, das ein Unternehmen besitzen kann — 24/7 verfügbar, skalierbar, messbar. Wir bauen sie so, dass sie diese Aufgabe konsequent erfüllt.
              </p>
            </div>
          </div>
        </section>

        {/* ── SEKTION 6: CTA ────────────────────────────────────── */}
        <section
          aria-label="Call to Action"
          style={{
            background: '#050508',
            paddingTop: 'clamp(5rem, 10vw, 9rem)',
            paddingBottom: 'clamp(5rem, 10vw, 9rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: '#F4EFE6',
                margin: '0 0 2rem 0',
              }}
            >
              Bereit, gemeinsam
              <br />
              zu arbeiten?
            </h2>
            <Link
              href="/kontakt"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#FF4D00',
                color: '#F4EFE6',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                padding: '0.9375rem 2rem',
                borderRadius: '999px',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'background 0.2s ease, transform 0.2s ease',
              }}
            >
              Kostenloses Gespräch buchen →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
