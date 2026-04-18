'use client'
import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

/* ============================================================
   JSON-LD
   ============================================================ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Gastro Group Case Study: +240% Online-Reservierungen in 60 Tagen',
  description:
    'Kompletter Webauftritt und digitale Markenstrategie für eine Premium-Restaurantgruppe.',
  author: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
    url: 'https://pixelcraft-media.de',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
  },
  datePublished: '2026-06-10',
  dateModified: '2026-06-10',
  url: 'https://pixelcraft-media.de/projekte/gastro-group',
  about: {
    '@type': 'Thing',
    name: 'Gastro Group',
    description: 'Premium-Restaurantgruppe mit 4 Standorten in Wien und München',
  },
}

/* ============================================================
   SHARED STYLE HELPERS
   ============================================================ */
const sectionPadding = 'clamp(5rem, 10vw, 10rem)'
const maxW = '1400px'
const px = 'clamp(1.5rem, 5vw, 4rem)'

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.75rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: '#ff4d00',
  marginBottom: '1rem',
}

/* ============================================================
   STAT CARD
   ============================================================ */
function StatCard({
  value,
  label,
  sub,
}: {
  value: string
  label: string
  sub?: string
}) {
  return (
    <div
      style={{
        background: '#0f0f18',
        border: '1px solid rgba(244,239,230,0.06)',
        borderRadius: '4px',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 400,
          color: '#ff4d00',
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.95rem',
          fontWeight: 600,
          color: '#f4efe6',
        }}
      >
        {label}
      </span>
      {sub && (
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.8rem',
            color: '#8A8799',
          }}
        >
          {sub}
        </span>
      )}
    </div>
  )
}

/* ============================================================
   PAGE
   ============================================================ */
export default function GastroGroupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      <main style={{ background: 'var(--bg-base)' }}>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section
          aria-label="Case Study Hero"
          style={{
            paddingTop: 'clamp(8rem, 14vw, 14rem)',
            paddingBottom: sectionPadding,
            paddingLeft: px,
            paddingRight: px,
            maxWidth: maxW,
            margin: '0 auto',
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
                margin: 0,
                padding: 0,
              }}
            >
              {[
                { label: 'Home', href: '/' },
                { label: 'Projekte', href: '/projekte' },
                { label: 'Gastro Group', href: null },
              ].map((item, i, arr) => (
                <li
                  key={item.label}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: '#8A8799',
                        textDecoration: 'none',
                      }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: '#ff4d00',
                      }}
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  )}
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden="true"
                      style={{ color: '#8A8799', fontSize: '0.75rem' }}
                    >
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Category label */}
          <span style={labelStyle}>Restaurant · Branding · 2026</span>

          {/* Project name */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(4rem, 10vw, 13rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#f4efe6',
              margin: 0,
              marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            Gastro Group
          </h1>

          {/* Hero grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: 'clamp(2rem, 5vw, 5rem)',
              alignItems: 'end',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: '#ff4d00',
                  lineHeight: 1.2,
                  margin: 0,
                  marginBottom: '1.5rem',
                }}
              >
                +240% Online-Reservierungen
                <br />
                <span style={{ color: '#f4efe6', opacity: 0.7, fontSize: '0.75em' }}>
                  in 60 Tagen.
                </span>
              </p>
            </div>

            <div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                  color: '#8a8799',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Die Gastro Group — vier Restaurants in Wien und München — kämpfte mit einer
                veralteten Website, die weder die Marke noch die Cuisine widerspiegelte.
                Kein Online-Reservierungssystem, keine mobil-optimierten Speisekarten.
                Wir haben das grundlegend verändert.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROJECT IMAGE ─────────────────────────────────── */}
        <div
          style={{
            maxWidth: maxW,
            margin: '0 auto',
            paddingLeft: px,
            paddingRight: px,
            paddingBottom: sectionPadding,
          }}
        >
          <img
            src="/pictures/mockups/03_gastrogroup-mockup.png"
            alt="Gastro Group Website Mockup"
            style={{
              width: '100%',
              borderRadius: '4px',
              display: 'block',
              border: '1px solid rgba(244,239,230,0.06)',
            }}
          />
        </div>

        {/* ── PROBLEM ──────────────────────────────────────── */}
        <section
          aria-label="Die Ausgangssituation"
          style={{
            paddingTop: sectionPadding,
            paddingBottom: sectionPadding,
            background: '#0a0a12',
          }}
        >
          <div
            style={{
              maxWidth: maxW,
              margin: '0 auto',
              paddingLeft: px,
              paddingRight: px,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: 'clamp(3rem, 6vw, 8rem)',
              alignItems: 'start',
            }}
          >
            <div>
              <span style={labelStyle}>Die Ausgangssituation</span>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                  fontWeight: 400,
                  color: '#f4efe6',
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Eine Marke,
                <br />
                die ihre Klasse
                <br />
                <span style={{ color: '#ff4d00' }}>nicht zeigte.</span>
              </h2>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.05rem',
                color: '#8a8799',
                lineHeight: 1.8,
              }}
            >
              <p style={{ marginBottom: '1.25rem' }}>
                Die Gastro Group hat vier Restaurants, die für ihre exzellente Küche und
                das ambitionierte Ambiente bekannt sind. Ihre Website war das genaue Gegenteil:
                langsam, unstrukturiert, mit veralteten Fotos und keiner Online-Reservierung.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Gäste, die das Restaurant über Google fanden, sprangen zu 72% ab, bevor sie
                überhaupt eine Speisekarte gesehen hatten. Die Absprungrate lag bei 81%.
                Der Tisch wurde dann beim Wettbewerber gebucht.
              </p>
              <p>
                Kernproblem: Die digitale Präsenz entsprach nicht dem Premium-Anspruch der
                Häuser. Neue Gäste wurden verschreckt, Stammgäste hatten keinen digitalen
                Mehrwert. Kein Reservierungssystem, keine mobil-optimierten Speisekarten,
                keine Eventbuchung.
              </p>
            </div>
          </div>
        </section>

        {/* ── SOLUTION ─────────────────────────────────────── */}
        <section
          aria-label="Unsere Lösung"
          style={{
            paddingTop: sectionPadding,
            paddingBottom: sectionPadding,
          }}
        >
          <div
            style={{
              maxWidth: maxW,
              margin: '0 auto',
              paddingLeft: px,
              paddingRight: px,
            }}
          >
            <span style={labelStyle}>Unsere Lösung</span>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 400,
                color: '#f4efe6',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                margin: 0,
                marginBottom: 'clamp(3rem, 6vw, 5rem)',
              }}
            >
              Digital so gut
              <br />
              <span style={{ color: '#ff4d00' }}>wie das Essen.</span>
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: '1px',
                background: 'rgba(244,239,230,0.06)',
                border: '1px solid rgba(244,239,230,0.06)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              {[
                {
                  num: '01',
                  title: 'Visuelles Storytelling',
                  body: 'Professioneller Foto-Shoot für alle vier Standorte. Jedes Restaurant bekommt eine eigene visuelle Handschrift — innerhalb der übergeordneten Markenidentität.',
                },
                {
                  num: '02',
                  title: 'Online-Reservierungssystem',
                  body: 'Integration eines Echtzeit-Buchungssystems mit standortspezifischer Verfügbarkeit, Sonderwünschen und automatischen Bestätigungsmails.',
                },
                {
                  num: '03',
                  title: 'Digitale Speisekarten',
                  body: 'Saisonale Menüs, QR-Codes am Tisch, mehrsprachige Ausgabe (DE/EN), Allergeninformationen — immer aktuell, ohne Druckkosten.',
                },
                {
                  num: '04',
                  title: 'Event-Booking',
                  body: 'Anfrage-Formular für private Events, Firmenevents und Bankette. Direkte Weiterleitung an die zuständige Veranstaltungsleitung.',
                },
                {
                  num: '05',
                  title: 'Core Web Vitals',
                  body: 'Ladezeit von 9.1s auf 1.4s reduziert. LCP < 1.8s, CLS < 0.05, INP < 100ms. Lighthouse Score 97/100.',
                },
                {
                  num: '06',
                  title: 'Lokales SEO',
                  body: 'Google Business Profile für alle vier Standorte optimiert, Local Schema Markup, Stadtteile-spezifische Landing Pages für Wien und München.',
                },
              ].map((item) => (
                <div
                  key={item.num}
                  style={{
                    background: '#09090f',
                    padding: 'clamp(2rem, 4vw, 3rem)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '3rem',
                      fontWeight: 300,
                      color: 'rgba(255,77,0,0.2)',
                      lineHeight: 1,
                      display: 'block',
                      marginBottom: '1rem',
                    }}
                  >
                    {item.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#f4efe6',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.9rem',
                      color: '#8a8799',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULTS ──────────────────────────────────────── */}
        <section
          aria-label="Ergebnisse"
          style={{
            paddingTop: sectionPadding,
            paddingBottom: sectionPadding,
            background: '#0a0a12',
          }}
        >
          <div
            style={{
              maxWidth: maxW,
              margin: '0 auto',
              paddingLeft: px,
              paddingRight: px,
            }}
          >
            <span style={labelStyle}>Die Ergebnisse</span>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 400,
                color: '#f4efe6',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                margin: 0,
                marginBottom: 'clamp(3rem, 6vw, 5rem)',
              }}
            >
              Zahlen,
              <br />
              <span style={{ color: '#ff4d00' }}>die überzeugen.</span>
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
                gap: '1rem',
                marginBottom: 'clamp(3rem, 5vw, 5rem)',
              }}
            >
              <StatCard value="+240%" label="Online-Reservierungen" sub="In den ersten 60 Tagen" />
              <StatCard value="-68%" label="Absprungrate" sub="Von 81% auf 26%" />
              <StatCard value="1.4s" label="Ladezeit" sub="Vorher 9.1 Sekunden" />
              <StatCard value="97" label="Lighthouse Score" sub="Performance · SEO · Accessibility" />
            </div>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.05rem',
                color: '#8a8799',
                lineHeight: 1.8,
                maxWidth: '720px',
              }}
            >
              Innerhalb von 60 Tagen nach Launch stiegen die Online-Reservierungen um 215%.
              Die Absprungrate sank von 81% auf 26%. Alle vier Standorte erscheinen nun in
              den lokalen Google-Suchergebnissen auf Platz 1–3 für ihre jeweiligen
              Stadtteile. Das Event-Buchungsformular generiert durchschnittlich 8 Anfragen
              pro Woche — vorher: keine.
            </p>
          </div>
        </section>

        {/* ── TESTIMONIAL ──────────────────────────────────── */}
        <section
          aria-label="Kundenstimme"
          style={{
            paddingTop: sectionPadding,
            paddingBottom: sectionPadding,
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              paddingLeft: px,
              paddingRight: px,
              textAlign: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(5rem, 12vw, 10rem)',
                lineHeight: 0.8,
                color: 'rgba(255,77,0,0.12)',
                display: 'block',
                userSelect: 'none',
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: '#f4efe6',
                lineHeight: 1.3,
                margin: '0 0 3rem 0',
                letterSpacing: '-0.01em',
              }}
            >
              PixelCraft hat verstanden, was unsere Restaurants ausmacht. Das
              Ergebnis ist nicht nur eine Website — es ist eine digitale Verlängerung
              unserer Gastgeberphilosophie. Die Reservierungszahlen sprechen für sich.
            </blockquote>

            <footer>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#f4efe6',
                  marginBottom: '0.25rem',
                }}
              >
                Klaus Bauer
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.85rem',
                  color: '#8A8799',
                }}
              >
                Geschäftsführer, Gastro Group GmbH
              </p>
            </footer>
          </div>
        </section>

        {/* ── NEXT PROJECTS ─────────────────────────────────── */}
        <section
          aria-label="Weitere Projekte"
          style={{
            paddingTop: sectionPadding,
            paddingBottom: sectionPadding,
            background: '#0a0a12',
          }}
        >
          <div
            style={{
              maxWidth: maxW,
              margin: '0 auto',
              paddingLeft: px,
              paddingRight: px,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 'clamp(2rem, 4vw, 3rem)',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <span style={labelStyle}>Weitere Projekte</span>
              <Link
                href="/projekte"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#8A8799',
                  textDecoration: 'none',
                }}
              >
                Alle ansehen →
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
                gap: '1rem',
              }}
            >
              {[
                {
                  href: '/projekte/luxecommerce',
                  label: 'E-Commerce · 2026',
                  name: 'LuxeCommerce',
                  metric: '+380% Traffic',
                },
                {
                  href: '/projekte/medtech-solutions',
                  label: 'Healthcare · 2026',
                  name: 'MedTech Solutions',
                  metric: '+320% Leads',
                },
                {
                  href: '/projekte/financeone',
                  label: 'Finance · 2024',
                  name: 'FinanceOne AG',
                  metric: '+490% Conversions',
                },
              ].map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  style={{
                    display: 'block',
                    background: '#09090f',
                    border: '1px solid rgba(244,239,230,0.06)',
                    borderRadius: '4px',
                    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      'rgba(255,77,0,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      'rgba(244,239,230,0.06)'
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#8A8799',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {p.label}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 400,
                      color: '#f4efe6',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {p.name}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.9rem',
                      color: '#ff4d00',
                    }}
                  >
                    {p.metric}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
