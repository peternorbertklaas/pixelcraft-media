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
  headline: 'LuxeCommerce Case Study: +380% organischer Traffic in 90 Tagen',
  description:
    'E-Commerce Redesign, Performance-Optimierung und SEO-Strategie für LuxeCommerce.',
  author: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
    url: 'https://pixelcraft-media.de',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
  },
  datePublished: '2025-03-15',
  dateModified: '2025-03-15',
  url: 'https://pixelcraft-media.de/projekte/luxecommerce',
  about: {
    '@type': 'Thing',
    name: 'LuxeCommerce',
    description: 'Online-Shop für Premium-Lifestyle-Produkte',
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
   INSIGHT CARD
   ============================================================ */
function InsightCard({
  number,
  title,
  body,
}: {
  number: string
  title: string
  body: string
}) {
  return (
    <div
      style={{
        background: '#0f0f18',
        border: '1px solid rgba(244,239,230,0.06)',
        borderRadius: '4px',
        padding: 'clamp(1.5rem, 3vw, 2rem)',
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
        {number}
      </span>
      <h3
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: '#f4efe6',
          margin: 0,
          letterSpacing: '0.01em',
        }}
      >
        {title}
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
        {body}
      </p>
    </div>
  )
}

/* ============================================================
   ADJACENT PROJECTS
   ============================================================ */
const ADJACENT = [
  {
    slug: 'medtech-solutions',
    name: 'MedTech Solutions',
    metric: '0.8% → 3.4%',
    metricLabel: 'Conversion Rate',
    tags: ['SaaS', 'UX/UI Design'],
    image: '/pictures/mockups/02_medtech-mockup.png',
  },
  {
    slug: 'financeone',
    name: 'FinanceOne',
    metric: '7.8s → 1.1s',
    metricLabel: 'Ladezeit',
    tags: ['Fintech', 'Landing Page'],
    image: '/pictures/mockups/04_financeone-mockup.png',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function LuxeCommercePage() {
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
                { label: 'LuxeCommerce', href: null },
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
          <span style={labelStyle}>E-Commerce · Webdesign · 2026</span>

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
            LuxeCommerce
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
            {/* Headline metric */}
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
                +380% organischer Traffic
                <br />
                <span style={{ color: '#f4efe6', opacity: 0.7, fontSize: '0.75em' }}>
                  in 90 Tagen.
                </span>
              </p>
            </div>

            {/* Short description */}
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
                LuxeCommerce — ein Online-Shop für Premium-Lifestyle-Produkte — hatte ein gutes
                Produktangebot aber eine Website, die ihre Kunden nicht abholte. Verladezeit von
                8.2 Sekunden. Conversion Rate unter 1%. Wir haben das geändert.
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
            src="/pictures/mockups/01_luxecommerce-mockup.png"
            alt="LuxeCommerce Website Mockup"
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
                  Wenn ein Besucher auf deine Website kommt und 8 Sekunden wartet, bis die Seite
                  lädt — dann ist er weg. LuxeCommerce hatte ein exzellentes Sortiment, eine starke
                  Marke und eine loyale Stammkundschaft. Aber ihre Website sabotierte jede
                  Neukunden-Akquisition.
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
                  { label: 'Ladezeit (Mobil)', value: '8.2s' },
                  { label: 'Lighthouse Performance', value: '23' },
                  { label: 'Conversion Rate', value: '0.7%' },
                  { label: 'Bounce Rate', value: '82%' },
                  { label: 'Org. Traffic', value: 'Stagnierend seit 18 Monaten' },
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

        {/* ── UNSERE ANALYSE ───────────────────────────────── */}
        <section
          aria-labelledby="analyse-heading"
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
            <span style={labelStyle}>02 — Unsere Analyse</span>
            <h2
              id="analyse-heading"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 5vw, 6rem)',
                fontWeight: 400,
                color: '#f4efe6',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: 0,
                marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
                maxWidth: '700px',
              }}
            >
              Was wir herausgefunden haben
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              <InsightCard
                number="01"
                title="Performance-Katastrophe"
                body="47 unoptimierte Bilder mit durchschnittlich 4MB pro Bild. Kein Lazy Loading. 3 überflüssige JavaScript-Bibliotheken, die auf jeder Seite mitgeladen wurden, obwohl sie nur auf einer einzigen gebraucht wurden."
              />
              <InsightCard
                number="02"
                title="UX-Bruch im Checkout"
                body="Der Checkout-Prozess war über 7 Schritte verteilt — bei jedem Schritt sprang die Seite neu auf. 60% der Nutzer brachen beim Zahlungsschritt ab, weil das Formular auf Mobile schlicht nicht bedienbar war."
              />
              <InsightCard
                number="03"
                title="SEO-Vakuum"
                body="Keine strukturierten Daten, kein Product-Schema. Duplicate Content durch URL-Parameter ohne Canonical Tags. Produktbeschreibungen waren reine Herstellertexte — Google hat sie ignoriert."
              />
            </div>
          </div>
        </section>

        {/* ── UNSERE LÖSUNG ────────────────────────────────── */}
        <section
          aria-labelledby="loesung-heading"
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
            <span style={labelStyle}>03 — Die Lösung</span>
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
                marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
                maxWidth: '700px',
              }}
            >
              Was wir gebaut haben
            </h2>

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
                    title: 'Next.js 14 + Shopify Headless',
                    body: 'Kompletter Neuentwurf von Grund auf. Shopify als Headless Commerce Backend, Next.js als Frontend — maximale Performance, keine Kompromisse beim Design.',
                  },
                  {
                    title: 'Radikale Bild-Optimierung',
                    body: 'Alle Bilder in AVIF konvertiert, Durchschnittsgröße von 4MB auf unter 120KB reduziert — ein Minus von 85%. Lazy Loading für alles unterhalb des Fold.',
                  },
                  {
                    title: 'Checkout 7 → 3 Schritte',
                    body: 'Den Checkout auf 3 Schritte reduziert: Kontakt, Versand, Zahlung. Alles auf einer Seite, kein Neuladen, mobile-first optimiert.',
                  },
                  {
                    title: 'Structured Data vollständig',
                    body: 'Product-Schema, BreadcrumbList, Sitelinks Searchbox — jede Produktseite vollständig ausgezeichnet. Canonical Tags für alle URL-Varianten.',
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

              {/* Tech highlights */}
              <div
                style={{
                  background: '#09090f',
                  border: '1px solid rgba(244,239,230,0.06)',
                  borderRadius: '4px',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: '#8A8799',
                    margin: 0,
                    marginBottom: '1.5rem',
                  }}
                >
                  Core Web Vitals — Nach Relaunch
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { metric: 'LCP', value: '0.8s', status: 'Gut', target: '< 2.5s' },
                    { metric: 'CLS', value: '0.02', status: 'Gut', target: '< 0.1' },
                    { metric: 'INP', value: '48ms', status: 'Gut', target: '< 200ms' },
                    { metric: 'Lighthouse', value: '97', status: 'Gut', target: '> 90' },
                  ].map((item) => (
                    <div
                      key={item.metric}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.875rem 0',
                        borderBottom: '1px solid rgba(244,239,230,0.06)',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            color: '#f4efe6',
                          }}
                        >
                          {item.metric}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.75rem',
                            color: '#8A8799',
                          }}
                        >
                          Ziel: {item.target}
                        </span>
                      </div>
                      <div
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: '#f4efe6',
                          }}
                        >
                          {item.value}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: '#050508',
                            background: '#4ade80',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '999px',
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DIE ERGEBNISSE ───────────────────────────────── */}
        <section
          aria-labelledby="ergebnisse-heading"
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
            <span style={labelStyle}>04 — Die Ergebnisse</span>
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
                value="+380%"
                label="Organischer Traffic"
                sub="in 3 Monaten"
              />
              <StatCard
                value="0.7% → 2.9%"
                label="Conversion Rate"
                sub="+314% Steigerung"
              />
              <StatCard
                value="8.2s → 0.9s"
                label="Ladezeit"
                sub="Mobil, LCP"
              />
              <StatCard
                value="+127%"
                label="Umsatz YoY"
                sub="12 Monate nach Relaunch"
              />
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL ──────────────────────────────────── */}
        <section
          aria-labelledby="testimonial-heading"
          style={{
            background: '#050508',
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
            {/* Giant quote mark */}
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
              <blockquote
                style={{ margin: 0 }}
                aria-labelledby="testimonial-heading"
              >
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
                  Mit der neuen Website haben wir nicht nur unsere technischen Probleme gelöst —
                  wir haben ein Werkzeug bekommen, das aktiv für uns verkauft. Die Zusammenarbeit
                  war transparent, das Ergebnis bombastisch.
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
                      SM
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
                      Sarah Müller
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
                      Gründerin, LuxeCommerce
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
                href="/projekte"
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
                ← Alle Projekte
              </Link>
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
                  transition: 'color 0.2s ease',
                }}
              >
                MedTech Solutions →
              </Link>
            </div>

            {/* Recommendations */}
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
                      background: '#0f0f18',
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
                marginTop: 'clamp(3rem, 6vw, 6rem)',
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
