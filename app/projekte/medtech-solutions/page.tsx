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
  headline: 'MedTech Solutions Case Study: Conversion Rate von 0.8% auf 3.4%',
  description:
    'SaaS-Website Redesign und UX-Optimierung für MedTech Solutions GmbH.',
  author: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
    url: 'https://pixelcraft-media.de',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
  },
  datePublished: '2025-02-10',
  dateModified: '2025-02-10',
  url: 'https://pixelcraft-media.de/projekte/medtech-solutions',
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
    slug: 'financeone',
    name: 'FinanceOne',
    metric: '7.8s → 1.1s',
    metricLabel: 'Ladezeit',
    tags: ['Fintech', 'Landing Page'],
    image: '/pictures/mockups/04_financeone-mockup.avif',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function MedTechSolutionsPage() {
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
                { label: 'MedTech Solutions', href: null },
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
          <span style={labelStyle}>SaaS · UX/UI Design · 2026</span>

          {/* Project name */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 8vw, 11rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#f4efe6',
              margin: 0,
              marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            MedTech
            <br />
            Solutions
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
                0.8% → 3.4% Conversion Rate
                <br />
                <span style={{ color: '#f4efe6', opacity: 0.7, fontSize: '0.75em' }}>
                  +325% Steigerung.
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
                MedTech Solutions entwickelt Software für medizinische Einrichtungen — ein
                exzellentes Produkt, das niemand verstand. Die Website war technisch, überladen
                und vertraute keinem Besucher. Wir haben das Gegenteil davon gebaut.
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
            src="/pictures/mockups/02_medtech-mockup.avif"
            alt="MedTech Solutions Website Mockup"
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
                  B2B-Software zu verkaufen ist schwer. Noch schwerer, wenn die Website so
                  kommuniziert wie ein technisches Handbuch. MedTech Solutions hatte eine Seite
                  voller Features, Buzzwords und API-Dokumentation — aber keine einzige klare
                  Antwort auf die Frage: &ldquo;Was macht ihr und warum brauche ich das?&rdquo;
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
                  Die Folge: Besucher kamen, verstanden nicht was das Produkt für sie tut, und
                  klickten weg. Vertrauen? Null. Demonstration? Vergraben unter 3 Klicks.
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
                  { label: 'Conversion Rate', value: '0.8%' },
                  { label: 'Demo-Buchungen / Monat', value: '12' },
                  { label: 'Durchschn. Sitzungsdauer', value: '0:58 min' },
                  { label: 'Seiten / Sitzung', value: '1.3' },
                  { label: 'Support-Tickets (Produktfragen)', value: 'Hoch' },
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
              Story-first Design.
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
              Wir haben die Seite komplett neu konzipiert — nicht um Features zu zeigen, sondern
              um eine Geschichte zu erzählen: das Problem des Nutzers, die Lösung, der Beweis.
              Jedes Element hat eine einzige Aufgabe: Vertrauen aufbauen.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              {[
                {
                  step: '01',
                  title: 'Klare Hierarchie',
                  body: 'Problem → Lösung → Beweis → CTA. Jede Sektion hat eine einzige Aussage. Kein Scrollen ins Nirgendwo.',
                },
                {
                  step: '02',
                  title: 'Trust-Elemente nach vorne',
                  body: 'CE-Zertifizierungen, ISO-Normen, DSGVO-Konformität — nicht im Footer versteckt, sondern prominent in der ersten Sektion platziert.',
                },
                {
                  step: '03',
                  title: 'Self-Explaining UX',
                  body: 'Interaktive Produkt-Tour, FAQ in der Value-Proposition-Sektion, erklärendes Video direkt beim Hero. Kein Support-Ticket nötig.',
                },
                {
                  step: '04',
                  title: 'Demo-Buchung als Primär-CTA',
                  body: 'Die Demo-Buchung auf 2 Klicks reduziert. Calendly eingebettet. Kein Formular, das in einer Inbox verschwindet.',
                },
              ].map((item) => (
                <div
                  key={item.step}
                  style={{
                    background: '#0f0f18',
                    border: '1px solid rgba(244,239,230,0.06)',
                    borderRadius: '4px',
                    padding: 'clamp(1.25rem, 2.5vw, 2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '3.5rem',
                      fontWeight: 300,
                      color: 'rgba(255,77,0,0.15)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                    aria-hidden="true"
                  >
                    {item.step}
                  </span>
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
                value="0.8% → 3.4%"
                label="Conversion Rate"
                sub="+325% Steigerung"
              />
              <StatCard
                value="+156%"
                label="Demo-Buchungen"
                sub="Monat-über-Monat"
              />
              <StatCard
                value="-34%"
                label="Support-Tickets"
                sub="Produktfragen weggefallen"
              />
              <StatCard
                value="4.2min"
                label="Sitzungsdauer"
                sub="Vorher: 0:58 min"
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
                  Unsere alten Kunden haben uns verstanden — aber die neuen kamen nie an Bord.
                  PixelCraft hat unsere Website so umgebaut, dass jeder innerhalb von 30 Sekunden
                  begreift, was wir tun und warum er das braucht. Die Demo-Buchungen haben sich
                  mehr als verdoppelt. Das war kein Design-Projekt. Das war ein Vertriebsprojekt.
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
                      MH
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
                      Max Hoffmann
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
                      CEO, MedTech Solutions GmbH
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
                href="/projekte/luxecommerce"
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
                ← LuxeCommerce
              </Link>
              <Link
                href="/projekte/financeone"
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
                FinanceOne →
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
