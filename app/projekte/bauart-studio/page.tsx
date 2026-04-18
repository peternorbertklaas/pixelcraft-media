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
  headline: 'Bauart Studio Case Study: +340% Projektanfragen in 90 Tagen',
  description:
    'Hochwertiges Portfolio und digitale Markenidentität für ein renommiertes Architekturstudio.',
  author: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
    url: 'https://pixelcraft-media.de',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
  },
  datePublished: '2026-04-02',
  dateModified: '2026-04-02',
  url: 'https://pixelcraft-media.de/projekte/bauart-studio',
  about: {
    '@type': 'Thing',
    name: 'Bauart Studio',
    description: 'Renommiertes Architekturstudio mit Fokus auf nachhaltiges Wohnen und Gewerbe',
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
function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
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
        <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', color: '#8A8799' }}>
          {sub}
        </span>
      )}
    </div>
  )
}

/* ============================================================
   PAGE
   ============================================================ */
export default function BauartStudioPage() {
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
                { label: 'Bauart Studio', href: null },
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

          <span style={labelStyle}>Architektur · Web Design · 2026</span>

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
            Bauart Studio
          </h1>

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
                +340% Projektanfragen
                <br />
                <span style={{ color: '#f4efe6', opacity: 0.7, fontSize: '0.75em' }}>
                  in 90 Tagen.
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
                Bauart Studio — ein renommiertes Architekturbüro mit Projekten im mehrstelligen
                Millionenbereich — gewann Aufträge ausschließlich über Empfehlungen. Eine
                Schwäche, die sie schmerzlich spürten. Wir haben ein Portfolio gebaut,
                das die Qualität ihrer Arbeit endlich sichtbar macht.
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
            src="/pictures/mockups/06_bauart-mockup.png"
            alt="Bauart Studio Website Mockup"
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
                Weltklasse-Architektur.
                <br />
                <span style={{ color: '#ff4d00' }}>Unsichtbar online.</span>
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
                Bauart Studio hatte ein Problem, das viele Premium-Dienstleister kennen: Ihre
                Arbeit war außergewöhnlich. Aber wer sie online suchte, fand eine Website aus
                dem Jahr 2014 — keine Projektfilterung, keine Mobile-Optimierung, Bilder in
                niedriger Auflösung.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Potenzielle Bauherren und Investoren, die das Studio über Google oder LinkedIn
                entdeckten, konnten sich kein Bild von der tatsächlichen Qualität machen.
                Die durchschnittliche Verweildauer lag bei unter 40 Sekunden.
              </p>
              <p>
                Die Konsequenz: Hochwertige Anfragen blieben aus. Stattdessen meldeten sich
                preissensitive Interessenten, die zu den Projekten nicht passten. Die Website
                filterte die falschen Kunden ein — und die richtigen aus.
              </p>
            </div>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────── */}
        <section
          aria-label="Ergebnisse"
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
            <span style={labelStyle}>Die Ergebnisse</span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
                gap: '1px',
                background: 'rgba(244,239,230,0.06)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <StatCard value="+340%" label="Projektanfragen" sub="vs. Vorquartal" />
              <StatCard value="+520%" label="Portfolio-Views" sub="Ø 4.2 Min. Verweildauer" />
              <StatCard value="1.2s" label="Ladezeit (vorher 4.8s)" sub="Core Web Vitals grün" />
              <StatCard value="99" label="Lighthouse Score" sub="Performance + Accessibility" />
            </div>
          </div>
        </section>

        {/* ── SOLUTION ─────────────────────────────────────── */}
        <section
          aria-label="Unsere Lösung"
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
                }}
              >
                Ein Portfolio,
                <br />
                das die richtigen
                <br />
                <span style={{ color: '#ff4d00' }}>Kunden anzieht.</span>
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
                Wir haben ein cinematisches Architektur-Portfolio entwickelt, das Projekte
                wie Kunstwerke inszeniert. Fullscreen-Bildgalerien mit sanfter Parallax,
                filterbare Projektübersicht nach Typ und Größenordnung, detaillierte
                Case-Study-Seiten für Referenzprojekte.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Das Farbkonzept — tiefschwarz, warmes Weiß, sparsames Akzentgold — spiegelt
                den ästhetischen Anspruch des Studios wider. Typografie, die an Architektur-
                zeitschriften erinnert. Animationen, die Raum und Perspektive kommunizieren.
              </p>
              <p>
                Das Ergebnis: Bauherren verbringen heute durchschnittlich über 4 Minuten auf
                der Website — genug Zeit, um sich in die Arbeit zu verlieben, bevor sie auf
                „Kontakt" klicken.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DID ──────────────────────────────────── */}
        <section
          aria-label="Was wir gemacht haben"
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
            <span style={labelStyle}>Leistungsumfang</span>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                gap: '1px',
                background: 'rgba(244,239,230,0.06)',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              {[
                {
                  title: 'Strategie & Konzept',
                  items: ['Zielgruppenanalyse', 'Portfolio-Strategie', 'Informationsarchitektur', 'Content-Strategie'],
                },
                {
                  title: 'UX/UI Design',
                  items: ['Cinematisches Design-Konzept', 'Vollformatige Projektgalerien', 'Micro-Animationen (GSAP)', 'Mobile-First Responsive'],
                },
                {
                  title: 'Entwicklung',
                  items: ['Next.js + TypeScript', 'Filterbares Projektarchiv', 'CMS-Integration (Sanity)', 'Bild-Optimierung (WebP)'],
                },
                {
                  title: 'Performance & SEO',
                  items: ['Lighthouse Score 99', 'Schema-Markup', 'Local SEO', '60 Tage Support'],
                },
              ].map((col) => (
                <div
                  key={col.title}
                  style={{
                    background: '#0f0f18',
                    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      color: '#f4efe6',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {col.title}
                  </span>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {col.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.875rem',
                          color: '#8a8799',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.625rem',
                        }}
                      >
                        <span style={{ color: '#ff4d00', fontSize: '0.75rem' }}>◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ──────────────────────────────────── */}
        <section
          aria-label="Kundenstimme"
          style={{
            paddingTop: sectionPadding,
            paddingBottom: sectionPadding,
            background: '#0a0a12',
          }}
        >
          <div
            style={{
              maxWidth: '900px',
              margin: '0 auto',
              paddingLeft: px,
              paddingRight: px,
            }}
          >
            <blockquote style={{ margin: 0 }}>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                  fontWeight: 400,
                  color: '#f4efe6',
                  lineHeight: 1.35,
                  letterSpacing: '-0.01em',
                  marginBottom: '2.5rem',
                }}
              >
                "In 20 Jahren Bürotätigkeit habe ich nie so schnell so einen klaren ROI
                einer Marketinginvestition gesehen. Drei Monate nach Launch haben wir
                zwei Großprojekte akquiriert, die direkt über die Website zu uns kamen."
              </p>
              <footer>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#f4efe6',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  M. Berger
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.8125rem',
                    color: '#8A8799',
                  }}
                >
                  Geschäftsführender Partner, Bauart Studio
                </span>
              </footer>
            </blockquote>
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
          <div style={{ maxWidth: maxW, margin: '0 auto', paddingLeft: px, paddingRight: px }}>
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
                { href: '/projekte/luxecommerce', label: 'E-Commerce · 2026', name: 'LuxeCommerce', metric: '+380% Traffic' },
                { href: '/projekte/gastro-group', label: 'Restaurant · 2026', name: 'Gastro Group', metric: '+240% Reservierungen' },
                { href: '/projekte/vitalis-klinik', label: 'Gesundheitswesen · 2026', name: 'Vitalis Klinik', metric: '+180% Terminbuchungen' },
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
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,77,0,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(244,239,230,0.06)'
                  }}
                >
                  <span style={{ display: 'block', fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8A8799', marginBottom: '0.75rem' }}>
                    {p.label}
                  </span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 400, color: '#f4efe6', marginBottom: '0.5rem' }}>
                    {p.name}
                  </span>
                  <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.9rem', color: '#ff4d00' }}>
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
