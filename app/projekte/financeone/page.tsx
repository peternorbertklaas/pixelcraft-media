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
  headline: 'FinanceOne Case Study: Performance-Relaunch — Ladezeit von 7.8s auf 1.1s',
  description:
    'Migration von WordPress zu Next.js für FinanceOne. Lighthouse 23 auf 97. Core Web Vitals: grün.',
  author: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
    url: 'https://pixelcraft-media.de',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
  },
  datePublished: '2024-11-20',
  dateModified: '2024-11-20',
  url: 'https://pixelcraft-media.de/projekte/financeone',
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
          letterSpacing: '-0.02em',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: '#f4efe6',
          lineHeight: 1.3,
        }}
      >
        {label}
      </span>
      {sub && (
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.75rem',
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
   ADJACENT PROJECTS
   ============================================================ */
const ADJACENT = [
  {
    slug: 'luxecommerce',
    name: 'LuxeCommerce',
    metric: '+380%',
    metricLabel: 'organischer Traffic',
    tags: ['E-Commerce', 'Webdesign'],
    image: '/pictures/mockups/01_luxecommerce-mockup.avif',
  },
  {
    slug: 'medtech-solutions',
    name: 'MedTech Solutions',
    metric: '0.8% → 3.4%',
    metricLabel: 'Conversion Rate',
    tags: ['SaaS', 'UX/UI Design'],
    image: '/pictures/mockups/02_medtech-mockup.avif',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function FinanceOnePage() {
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
                { label: 'FinanceOne', href: null },
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
          <span style={labelStyle}>Fintech · Landing Page · 2024</span>

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
            FinanceOne
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
                7.8s → 1.1s Ladezeit
                <br />
                <span style={{ color: '#f4efe6', opacity: 0.7, fontSize: '0.75em' }}>
                  Lighthouse 23 → 97.
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
                FinanceOne war ein Fintech-Unternehmen mit gutem Produkt, aber einer technisch
                maroden Website. Google hatte sie aus den Top-10 verdrängt — wegen Core Web Vitals,
                die im roten Bereich lagen. Wir haben das in 6 Wochen geändert.
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
            src="/pictures/mockups/04_financeone-mockup.avif"
            alt="FinanceOne Website Mockup"
            style={{
              width: '100%',
              borderRadius: '4px',
              display: 'block',
              border: '1px solid rgba(244,239,230,0.06)',
            }}
          />
        </div>

        {/* ── DAS PROBLEM ──────────────────────────────────── */}
        <section
          aria-labelledby="problem-heading"
          style={{
            background: '#050508',
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
            <span style={labelStyle}>01 — Das Problem</span>
            <h2
              id="problem-heading"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 5vw, 6rem)',
                fontWeight: 400,
                color: '#f4efe6',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: 0,
                marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
                maxWidth: '800px',
              }}
            >
              Das Problem
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
                gap: 'clamp(2.5rem, 5vw, 6rem)',
                alignItems: 'start',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                    color: '#8a8799',
                    lineHeight: 1.8,
                    margin: 0,
                    marginBottom: '1.5rem',
                  }}
                >
                  Google ist gnadenlos bei Core Web Vitals. FinanceOne hatte eine
                  WordPress-Installation, die über Jahre mit Plugins beladen worden war — 34 aktive
                  Plugins, von denen ein Drittel nicht mehr gepflegt wurde. Das Ergebnis war eine
                  Seite, die für Nutzer unerträglich langsam war und für Google ein Signal: diese
                  Seite gehört nicht auf Seite 1.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                    color: '#8a8799',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  Innerhalb von 6 Monaten verlor FinanceOne ihre Top-3-Rankings für ihre
                  wichtigsten Kern-Keywords. Direkte Konsequenz: -40% organischer Traffic, -28%
                  Anfragen über die Website.
                </p>
              </div>

              {/* Problem stats */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                  border: '1px solid rgba(244,239,230,0.06)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                {[
                  { label: 'Ladezeit (LCP)', value: '7.8s' },
                  { label: 'Lighthouse Score', value: '23 / 100' },
                  { label: 'Aktive WordPress Plugins', value: '34' },
                  { label: 'Kern-Keyword-Rankings', value: 'Pos. 12–18' },
                  { label: 'CLS (Layout Shift)', value: '0.41 (Kritisch)' },
                ].map((row, i) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem 1.5rem',
                      borderTop: i === 0 ? 'none' : '1px solid rgba(244,239,230,0.06)',
                      background: i % 2 === 0 ? '#09090f' : '#050508',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.8125rem',
                        color: '#8A8799',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        fontWeight: 500,
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: '#f4efe6',
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── UNSERE LÖSUNG ────────────────────────────────── */}
        <section
          aria-labelledby="loesung-heading"
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
            <span style={labelStyle}>02 — Die Lösung</span>
            <h2
              id="loesung-heading"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 5vw, 6rem)',
                fontWeight: 400,
                color: '#f4efe6',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: 0,
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                maxWidth: '700px',
              }}
            >
              Radikal vereinfachen.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
                color: '#8a8799',
                lineHeight: 1.75,
                margin: 0,
                marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
                maxWidth: '640px',
              }}
            >
              Keine schrittweise Optimierung. Komplette Migration auf ein modernes Stack — ohne
              Kompromisse bei Funktionalität, aber ohne eine einzige überflüssige Zeile Code.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
                gap: 'clamp(3rem, 6vw, 7rem)',
                alignItems: 'start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}
              >
                {[
                  {
                    title: 'WordPress → Next.js Migration',
                    body: 'Vollständige Migration in 4 Wochen. Alle Inhalte übernommen, alle URLs erhalten (301-Redirects wo nötig). Kein Ranking-Verlust durch die Migration.',
                  },
                  {
                    title: 'Plugin-Bereinigung: 34 → 0',
                    body: 'Jede Funktionalität, die durch Plugins abgedeckt wurde, wurde nativ in Next.js implementiert oder durch Drittanbieter-APIs ersetzt — ohne Overhead.',
                  },
                  {
                    title: 'Image-Pipeline komplett neu',
                    body: 'Alle 200+ Bilder durch next/image optimiert, in AVIF konvertiert, auf Edge-CDN gehostet. Durchschnittliche Bildgröße: von 3.2MB auf 140KB.',
                  },
                  {
                    title: 'Strukturierte Daten für Finanzprodukte',
                    body: 'FinancialProduct-Schema, BreadcrumbList, FAQPage — vollständig implementiert. Google kann die Inhalte jetzt korrekt kategorisieren und in Rich Results anzeigen.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      paddingLeft: '1.25rem',
                      borderLeft: '2px solid rgba(255,77,0,0.3)',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: '#f4efe6',
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.875rem',
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

              {/* Before / After */}
              <div
                style={{
                  background: '#0f0f18',
                  border: '1px solid rgba(244,239,230,0.06)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '1rem 1.5rem',
                    borderBottom: '1px solid rgba(244,239,230,0.06)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: '#8A8799',
                    }}
                  >
                    Metrik
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: '#8A8799',
                      textAlign: 'center',
                    }}
                  >
                    Vorher
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: '#4ade80',
                      textAlign: 'center',
                    }}
                  >
                    Nachher
                  </span>
                </div>
                {[
                  { metric: 'LCP', before: '7.8s', after: '1.1s' },
                  { metric: 'CLS', before: '0.41', after: '0.03' },
                  { metric: 'INP', before: '820ms', after: '62ms' },
                  { metric: 'Lighthouse', before: '23', after: '97' },
                  { metric: 'Bundle Size', before: '4.2MB', after: '340KB' },
                  { metric: 'Plugins', before: '34', after: '0' },
                ].map((row, i) => (
                  <div
                    key={row.metric}
                    style={{
                      padding: '0.875rem 1.5rem',
                      borderTop: i === 0 ? 'none' : '1px solid rgba(244,239,230,0.04)',
                      background: i % 2 === 0 ? '#09090f' : '#0f0f18',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: '#f4efe6',
                      }}
                    >
                      {row.metric}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.875rem',
                        color: '#8A8799',
                        textAlign: 'center',
                        textDecoration: 'line-through',
                        textDecorationColor: 'rgba(255,77,0,0.3)',
                      }}
                    >
                      {row.before}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        color: '#4ade80',
                        textAlign: 'center',
                      }}
                    >
                      {row.after}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DIE ERGEBNISSE ───────────────────────────────── */}
        <section
          aria-labelledby="ergebnisse-heading"
          style={{
            background: '#050508',
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
            <span style={labelStyle}>03 — Die Ergebnisse</span>
            <h2
              id="ergebnisse-heading"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 5vw, 6rem)',
                fontWeight: 400,
                color: '#f4efe6',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: 0,
                marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              Die Zahlen sprechen.
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              <StatCard
                value="7.8s → 1.1s"
                label="Ladezeit"
                sub="LCP, mobil"
              />
              <StatCard
                value="23 → 97"
                label="Lighthouse Score"
                sub="Performance-Kategorie"
              />
              <StatCard
                value="Top 3"
                label="Kern-Keywords"
                sub="von Pos. 12–18 in 6 Wochen"
              />
              <StatCard
                value="+94%"
                label="Organischer Traffic"
                sub="6 Monate nach Relaunch"
              />
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ──────────────────────────────────── */}
        <section
          aria-labelledby="testimonial-heading"
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
              position: 'relative',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-2rem',
                left: px,
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(8rem, 15vw, 16rem)',
                fontWeight: 400,
                color: '#f4efe6',
                opacity: 0.04,
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              &ldquo;
            </span>

            <figure style={{ margin: 0, position: 'relative', zIndex: 1 }}>
              <blockquote style={{ margin: 0 }}>
                <p
                  id="testimonial-heading"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
                    fontWeight: 400,
                    color: '#f4efe6',
                    lineHeight: 1.45,
                    letterSpacing: '0.01em',
                    margin: 0,
                    marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontStyle: 'italic',
                  }}
                >
                  Wir hatten monatelang mit sinkenden Rankings gekämpft und wussten, dass das
                  technische Schulden-Problem irgendwann explodieren würde. PixelCraft hat nicht
                  nur das technische Problem gelöst — sie haben uns erklärt, warum das passiert
                  ist und wie wir es in Zukunft verhindern. Die Rankings waren in 6 Wochen zurück.
                  Professioneller geht es nicht.
                </p>
              </blockquote>
              <figcaption>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(255,77,0,0.12)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-hidden="true"
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.25rem',
                        color: '#ff4d00',
                        fontWeight: 400,
                      }}
                    >
                      TK
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: '#f4efe6',
                        margin: 0,
                      }}
                    >
                      Thomas Krause
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.75rem',
                        color: '#8A8799',
                        margin: 0,
                        marginTop: '0.125rem',
                      }}
                    >
                      Head of Digital, FinanceOne GmbH
                    </p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── NÄCHSTE PROJEKTE ─────────────────────────────── */}
        <section
          aria-labelledby="next-projects-heading"
          style={{
            background: '#050508',
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
            {/* Prev / Next */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingBottom: 'clamp(2rem, 4vw, 3.5rem)',
                marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
                borderBottom: '1px solid rgba(244,239,230,0.06)',
              }}
            >
              <Link
                href="/projekte/medtech-solutions"
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
                ← MedTech Solutions
              </Link>
              <Link
                href="/projekte"
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
                Alle Projekte →
              </Link>
            </div>

            <h2
              id="next-projects-heading"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: '#f4efe6',
                margin: 0,
                marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
              }}
            >
              Ähnliche Projekte
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
                gap: 'clamp(1.25rem, 2.5vw, 2rem)',
                marginBottom: 'clamp(3rem, 6vw, 6rem)',
              }}
            >
              {ADJACENT.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projekte/${p.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      background: '#09090f',
                      border: '1px solid rgba(244,239,230,0.06)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      transition: 'border-color 0.3s ease, transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor =
                        'rgba(255,77,0,0.2)'
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor =
                        'rgba(244,239,230,0.06)'
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    }}
                  >
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '16/7',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={p.image}
                        alt={`${p.name} Website Mockup`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          transition: 'transform 0.5s ease',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'
                        }}
                      />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', gap: '0.375rem', marginBottom: '0.75rem' }}>
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: 'var(--font-dm-sans)',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              textTransform: 'uppercase',
                              letterSpacing: '0.1em',
                              color: '#ff4d00',
                              background: 'rgba(255,77,0,0.06)',
                              border: '1px solid rgba(255,77,0,0.12)',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '2px',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                          fontWeight: 400,
                          color: '#f4efe6',
                          margin: 0,
                          marginBottom: '0.5rem',
                        }}
                      >
                        {p.name}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-cormorant)',
                          fontSize: '1.5rem',
                          fontWeight: 400,
                          color: '#ff4d00',
                          margin: 0,
                        }}
                      >
                        {p.metric}{' '}
                        <span
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.75rem',
                            color: '#8a8799',
                          }}
                        >
                          {p.metricLabel}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Final CTA */}
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: '#f4efe6',
                  margin: 0,
                  maxWidth: '600px',
                  lineHeight: 1.25,
                }}
              >
                Ähnliche Ergebnisse für dein Business?
              </p>
              <Link
                href="/kontakt"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#050508',
                  background: '#ff4d00',
                  textDecoration: 'none',
                  padding: '0.875rem 2rem',
                  borderRadius: '999px',
                  transition: 'background 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = '#ff6b24'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = '#ff4d00'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                Projekt besprechen →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
