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
  headline: 'Vitalis Klinik Case Study: +280% Terminbuchungen in 45 Tagen',
  description:
    'Patientenorientierter Webauftritt und Online-Buchungssystem für eine moderne Privatklinik.',
  author: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
    url: 'https://pixelcraft-media.de',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
  },
  datePublished: '2026-05-14',
  dateModified: '2026-05-14',
  url: 'https://pixelcraft-media.de/projekte/vitalis-klinik',
  about: {
    '@type': 'Thing',
    name: 'Vitalis Klinik',
    description: 'Moderne Privatklinik mit Fokus auf präventive Medizin und Wohlbefinden',
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
export default function VitalisKlinikPage() {
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
                { label: 'Vitalis Klinik', href: null },
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

          <span style={labelStyle}>Gesundheitswesen · Web Design · 2026</span>

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
            Vitalis Klinik
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
                +280% Online-Terminbuchungen
                <br />
                <span style={{ color: '#f4efe6', opacity: 0.7, fontSize: '0.75em' }}>
                  in 45 Tagen.
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
                Die Vitalis Klinik — eine Privatklinik für präventive Medizin und ganzheitliches
                Wohlbefinden — verlor täglich potenzielle Patienten an jüngere, digital-affine
                Wettbewerber. Eine veraltete Website ohne Online-Buchungsfunktion war der
                entscheidende Schwachpunkt. Wir haben das grundlegend verändert.
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
            src="/pictures/mockups/05_vitalis-mockup.png"
            alt="Vitalis Klinik Website Mockup"
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
                Exzellente Medizin,
                <br />
                digitale
                <br />
                <span style={{ color: '#ff4d00' }}>Unsichtbarkeit.</span>
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
                Die Vitalis Klinik steht für präzise Diagnostik, personalisierte Therapiekonzepte
                und ein Patientenerlebnis, das im Deutschen Gesundheitswesen seinesgleichen sucht.
                Ihre Website vermittelte nichts davon.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Interessierte Patienten mussten telefonisch Termine vereinbaren — ein Prozess,
                der von Generation unter 50 zunehmend als Hürde empfunden wird. 68% der Website-
                Besucher sprangen ab, ohne eine Kontaktmöglichkeit genutzt zu haben.
              </p>
              <p>
                Das Kernproblem: Der Qualitätsanspruch der Klinik und der digitale Eindruck lagen
                Welten auseinander. Neue Patienten entschieden sich im Zweifel für die Praxis mit
                der besseren Online-Präsenz — nicht die mit dem besseren Arzt.
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
              <StatCard value="+280%" label="Online-Terminbuchungen" sub="vs. Vorquartal" />
              <StatCard value="-75%" label="Telefonbelastung" sub="Rezeption entlastet" />
              <StatCard value="1.8s" label="Ladezeit (vorher 6.4s)" sub="Core Web Vitals grün" />
              <StatCard value="98" label="Lighthouse Score" sub="Performance + SEO" />
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
                Vertrauen durch
                <br />
                <span style={{ color: '#ff4d00' }}>Design.</span>
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
                Wir haben eine Website entwickelt, die Kompetenz ausstrahlt, ohne klinisch
                zu wirken. Warme Typografie, klare Hierarchien, Farbpalette, die Vertrauen
                schafft — und ein nahtloses Online-Buchungssystem, das Patienten in unter
                90 Sekunden einen Termin vereinbaren lässt.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Jede Leistungsseite wurde als eigenständige Landingpage konzipiert: SEO-
                optimiert für relevante Suchbegriffe, mit klaren Behandlungsbeschreibungen,
                Arztprofilen und Social Proof durch verifizierte Patientenstimmen.
              </p>
              <p>
                Das Ergebnis: Eine digitale Klinik, die genauso professionell wirkt wie die
                echte. Patienten buchen lieber online — und die Rezeption kann sich auf das
                konzentrieren, was wirklich zählt.
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
                  items: ['Zielgruppenanalyse', 'Patient Journey Mapping', 'Informationsarchitektur', 'Wettbewerbsanalyse'],
                },
                {
                  title: 'UX/UI Design',
                  items: ['Custom Design System', 'Responsive Prototypen', 'Accessibility (WCAG 2.1)', 'Micro-Animationen'],
                },
                {
                  title: 'Entwicklung',
                  items: ['Next.js + TypeScript', 'Online-Buchungsintegration', 'CMS für Ärzteteam', 'Performance-Optimierung'],
                },
                {
                  title: 'Launch & SEO',
                  items: ['Technisches SEO-Setup', 'Local SEO', 'Analytics-Integration', '60 Tage Post-Launch-Support'],
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
                "Wir hatten uns so an den Status quo gewöhnt, dass wir gar nicht mehr
                gesehen haben, wie viele Patienten wir durch unsere digitale Präsenz
                verloren haben. PixelCraft hat das mit Zahlen belegt — und dann gelöst."
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
                  Dr. med. S. Hartmann
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.8125rem',
                    color: '#8A8799',
                  }}
                >
                  Ärztliche Leiterin, Vitalis Klinik
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
                { href: '/projekte/medtech-solutions', label: 'Healthcare · 2026', name: 'MedTech Solutions', metric: '+320% Leads' },
                { href: '/projekte/financeone', label: 'Finance · 2024', name: 'FinanceOne AG', metric: '+490% Conversions' },
                { href: '/projekte/luxecommerce', label: 'E-Commerce · 2026', name: 'LuxeCommerce', metric: '+380% Traffic' },
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
