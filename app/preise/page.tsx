import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'Preise — Webdesign Pakete & Kosten | PixelCraft Media',
  description:
    'Transparente Preise für professionelles Webdesign. Fixpreise statt Stundensätze. Business ab 3.500 €, E-Commerce ab 6.000 €. Kostenlose Erstberatung.',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: { canonical: '/preise' },
  openGraph: {
    title: 'Preise — Webdesign Pakete & Kosten | PixelCraft Media',
    description:
      'Transparente Preise für professionelles Webdesign. Fixpreise statt Stundensätze. Business ab 3.500 €, E-Commerce ab 6.000 €. Kostenlose Erstberatung.',
    url: 'https://pixelcraft-media.de/preise',
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
      '@type': 'WebPage',
      '@id': 'https://pixelcraft-media.de/preise#page',
      name: 'Preise — PixelCraft Media',
      description:
        'Transparente Fixpreise für professionelles Webdesign. Business, Growth und Enterprise Pakete.',
      url: 'https://pixelcraft-media.de/preise',
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
          name: 'Preise',
          item: 'https://pixelcraft-media.de/preise',
        },
      ],
    },
    {
      '@type': 'Offer',
      name: 'Starter — Business Website',
      description:
        'Bis zu 8 Seiten, Responsive Design, Technisches SEO, Kontaktformular, Google Analytics, 30 Tage Support.',
      price: '3500',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '3500',
        priceCurrency: 'EUR',
        minPrice: '3500',
      },
      seller: { '@id': 'https://pixelcraft-media.de/#organization' },
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Growth — Performance Website',
      description:
        'Bis zu 15 Seiten, Custom Animationen, CMS-Integration, Blog-System, Lighthouse 90+ garantiert, 60 Tage Support.',
      price: '6500',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '6500',
        priceCurrency: 'EUR',
        minPrice: '6500',
      },
      seller: { '@id': 'https://pixelcraft-media.de/#organization' },
      availability: 'https://schema.org/InStock',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise — E-Commerce / Komplex',
      description:
        'E-Commerce, individuelles Design System, A/B-Testing, Analytics Dashboard, 90 Tage Support & Monitoring.',
      price: '12000',
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: '12000',
        priceCurrency: 'EUR',
        minPrice: '12000',
      },
      seller: { '@id': 'https://pixelcraft-media.de/#organization' },
      availability: 'https://schema.org/InStock',
    },
  ],
}

/* ============================================================
   TYPES
   ============================================================ */
interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPackage {
  id: string
  tier: string
  name: string
  price: string
  idealFor: string
  badge?: string
  featured: boolean
  features: PricingFeature[]
}

interface MaintenancePackage {
  name: string
  price: string
  description: string
}

interface FaqItem {
  question: string
  answer: string
}

/* ============================================================
   DATA
   ============================================================ */
const pricingPackages: PricingPackage[] = [
  {
    id: 'starter',
    tier: 'STARTER',
    name: 'Business Website',
    price: 'Ab 3.500 €',
    idealFor: 'Dienstleister, Freelancer, kleine Unternehmen',
    featured: false,
    features: [
      { text: 'Bis zu 8 Seiten', included: true },
      { text: 'Responsive Design (Mobile-First)', included: true },
      { text: 'Technisches SEO Setup', included: true },
      { text: 'Kontaktformular', included: true },
      { text: 'Google Analytics Setup', included: true },
      { text: '30 Tage Support nach Launch', included: true },
      { text: 'Keine CMS-Integration', included: false },
      { text: 'Keine Custom Animationen', included: false },
    ],
  },
  {
    id: 'growth',
    tier: 'GROWTH',
    name: 'Performance Website',
    price: 'Ab 6.500 €',
    idealFor: 'Scale-ups, KMU, ambitionierte Marken',
    badge: 'Empfohlen',
    featured: true,
    features: [
      { text: 'Bis zu 15 Seiten', included: true },
      { text: 'Custom Animationen (GSAP)', included: true },
      { text: 'CMS-Integration (Sanity / Contentful)', included: true },
      { text: 'Blog-System', included: true },
      { text: 'Schema Markup vollständig', included: true },
      { text: 'Lighthouse 90+ garantiert', included: true },
      { text: '60 Tage Support nach Launch', included: true },
      { text: 'Conversion-Tracking Setup', included: true },
      { text: 'Kein E-Commerce', included: false },
    ],
  },
  {
    id: 'enterprise',
    tier: 'ENTERPRISE',
    name: 'E-Commerce / Komplex',
    price: 'Ab 12.000 €',
    idealFor: 'E-Commerce, SaaS, komplexe Anforderungen',
    featured: false,
    features: [
      { text: 'Alles aus Growth', included: true },
      { text: 'E-Commerce (Shopify Headless / WooCommerce)', included: true },
      { text: 'Individuelles Design System', included: true },
      { text: 'A/B-Testing Setup', included: true },
      { text: 'Analytics Dashboard', included: true },
      { text: '90 Tage Support + Monitoring', included: true },
      { text: 'Priority Support', included: true },
    ],
  },
]

const maintenancePackages: MaintenancePackage[] = [
  {
    name: 'Basis',
    price: '299 €/Mo',
    description: 'Security-Updates, Uptime-Monitoring 24/7, monatlicher Report',
  },
  {
    name: 'Standard',
    price: '599 €/Mo',
    description: 'Basis + bis zu 4h Content-Updates, Core Web Vitals, Priority Support',
  },
  {
    name: 'Wachstum',
    price: '999 €/Mo',
    description: 'Standard + 8h Updates, monatl. A/B-Test, CRO, Quartals-Review',
  },
]

const faqItems: FaqItem[] = [
  {
    question: 'Wann und wie wird bezahlt?',
    answer:
      '50 % Anzahlung bei Projektstart, 50 % bei finaler Übergabe. Wir akzeptieren Banküberweisung, Kreditkarte und SEPA-Lastschrift.',
  },
  {
    question: 'Was passiert, wenn das Projekt größer wird?',
    answer:
      'Der vereinbarte Fixpreis bleibt fix — kein Nachschlag, keine Überraschungen. Wünscht ihr euch Änderungen am vereinbarten Scope, besprechen wir diese vorher und berechnen sie als separates Angebot.',
  },
  {
    question: 'Gibt es eine Qualitätsgarantie?',
    answer:
      'Ja. Für alle Pakete ab Growth garantieren wir einen Lighthouse-Score von 90+ in allen Kategorien. Wird dieser nach Launch nicht erreicht, bessern wir kostenlos nach — bis zur Erreichung.',
  },
  {
    question: 'Wie lange dauert ein Projekt?',
    answer:
      'Starter (Business): 4–6 Wochen. Growth (Performance): 6–10 Wochen. Enterprise (E-Commerce/Komplex): 10–16 Wochen. Die Dauer hängt auch von eurer Feedback-Geschwindigkeit ab.',
  },
  {
    question: 'Arbeitet ihr auch für internationale Kunden?',
    answer:
      'Ja, wir arbeiten vollständig remote. Unser Hauptmarkt ist DE/AT/CH, aber wir betreuen auch Kunden aus UK, NL und weiteren europäischen Ländern — kein Problem.',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function PreisePage() {
  return (
    <>
      <Script
        id="preise-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      <main style={{ background: 'var(--bg-base)', minHeight: '100svh' }}>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          aria-label="Preise Hero"
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
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2.5rem' }}>
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
                  Preise
                </span>
              </li>
            </ol>
          </nav>

          {/* Heading */}
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
            TRANSPARENTE
            <br />
            <span style={{ color: '#FF4D00' }}>PREISE.</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#8A8799',
              lineHeight: 1.65,
              maxWidth: '560px',
              margin: '0 0 2.5rem 0',
            }}
          >
            Keine versteckten Stundensätze. Keine Überraschungen. Du weißt
            vorher, was du bekommst — und was es kostet.
          </p>

          {/* Notice card */}
          <div
            role="note"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(255,77,0,0.08)',
              border: '1px solid rgba(255,77,0,0.25)',
              borderRadius: '6px',
              padding: '0.875rem 1.25rem',
            }}
          >
            <span
              aria-hidden="true"
              style={{ color: '#FF4D00', fontSize: '0.875rem' }}
            >
              ✓
            </span>
            <span
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.875rem',
                color: '#F4EFE6',
                lineHeight: 1.5,
              }}
            >
              Alle Preise sind{' '}
              <strong style={{ color: '#FF4D00', fontWeight: 600 }}>
                Fixpreise
              </strong>
              . Kein versteckter Stundensatz. Kein Scope Creep.
            </span>
          </div>
        </section>

        {/* ── Pricing Cards ─────────────────────────────────────── */}
        <section
          aria-label="Preispakete"
          style={{
            paddingTop: 'clamp(1rem, 3vw, 2rem)',
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              alignItems: 'start',
            }}
          >
            {pricingPackages.map((pkg) => (
              <article
                key={pkg.id}
                aria-label={`${pkg.tier} Paket`}
                style={{
                  background: pkg.featured ? '#161622' : '#0F0F18',
                  border: pkg.featured
                    ? '1px solid #FF4D00'
                    : '1px solid rgba(244,239,230,0.06)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {/* Featured badge */}
                {pkg.badge && (
                  <div
                    aria-label="Empfohlenes Paket"
                    style={{
                      background: '#FF4D00',
                      padding: '0.4rem 1rem',
                      textAlign: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: '#F4EFE6',
                      }}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div
                  style={{
                    padding: 'clamp(1.75rem, 3vw, 2.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0',
                    flex: 1,
                  }}
                >
                  {/* Tier label */}
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: '#FF4D00',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {pkg.tier}
                  </span>

                  {/* Package name */}
                  <h2
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      color: '#F4EFE6',
                      margin: '0 0 1.5rem 0',
                    }}
                  >
                    {pkg.name}
                  </h2>

                  {/* Price */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                        fontWeight: 400,
                        lineHeight: 1,
                        color: '#FF4D00',
                      }}
                    >
                      {pkg.price}
                    </span>
                  </div>

                  {/* Ideal for */}
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.8125rem',
                      color: '#8A8799',
                      margin: '0 0 2rem 0',
                      lineHeight: 1.5,
                    }}
                  >
                    Ideal für: {pkg.idealFor}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: '1px',
                      background: 'rgba(244,239,230,0.06)',
                      marginBottom: '1.5rem',
                    }}
                  />

                  {/* Features */}
                  <ul
                    style={{
                      listStyle: 'none',
                      margin: '0 0 2rem 0',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      flex: 1,
                    }}
                  >
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.625rem',
                        }}
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            flexShrink: 0,
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: feature.included ? '#FF4D00' : '#6B6878',
                            lineHeight: 1.4,
                            marginTop: '0.05rem',
                          }}
                        >
                          {feature.included ? '✓' : '✗'}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.875rem',
                            lineHeight: 1.5,
                            color: feature.included ? '#8A8799' : '#6B6878',
                          }}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA button */}
                  <Link
                    href="/kontakt"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      background: '#FF4D00',
                      color: '#F4EFE6',
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      padding: '0.875rem 1.5rem',
                      borderRadius: '999px',
                      textDecoration: 'none',
                      letterSpacing: '0.02em',
                      textAlign: 'center',
                    }}
                  >
                    Paket anfragen →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Wartungspakete ────────────────────────────────────── */}
        <section
          aria-label="Wartungspakete"
          style={{
            background: '#050508',
            paddingTop: 'clamp(5rem, 10vw, 9rem)',
            paddingBottom: 'clamp(5rem, 10vw, 9rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          }}
        >
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ marginBottom: 'clamp(3rem, 6vw, 4rem)' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#FF4D00',
                  marginBottom: '1rem',
                }}
              >
                Nach dem Launch
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                  color: '#F4EFE6',
                  margin: '0 0 1rem 0',
                }}
              >
                Wartung & Betreuung.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1rem',
                  color: '#8A8799',
                  lineHeight: 1.65,
                  maxWidth: '520px',
                  margin: '0 0 1.5rem 0',
                }}
              >
                Eine Website ist kein Einmalprodukt. Wir halten sie aktuell,
                sicher und performant — monatlich.
              </p>
              <Link
                href="/leistungen/wartung"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#FF4D00',
                  textDecoration: 'none',
                }}
              >
                Alle Details zu Wartung →
              </Link>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                gap: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              }}
            >
              {maintenancePackages.map((pkg) => (
                <div
                  key={pkg.name}
                  style={{
                    background: '#0F0F18',
                    border: '1px solid rgba(244,239,230,0.06)',
                    borderRadius: '8px',
                    padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: '#FF4D00',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {pkg.name}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                      fontWeight: 400,
                      lineHeight: 1,
                      color: '#FF4D00',
                      marginBottom: '1rem',
                    }}
                  >
                    {pkg.price}
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: '#8A8799',
                      margin: 0,
                    }}
                  >
                    {pkg.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section
          aria-label="Häufige Fragen zu Preisen"
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
            <div style={{ position: 'sticky', top: '8rem' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#FF4D00',
                  marginBottom: '1rem',
                }}
              >
                FAQ
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                  color: '#F4EFE6',
                  margin: '0 0 1rem 0',
                }}
              >
                Häufige
                <br />
                Fragen.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9375rem',
                  color: '#8A8799',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Noch etwas unklar? Schreib uns einfach.
              </p>
            </div>

            {/* Right: FAQ list */}
            <div>
              <dl style={{ margin: 0, padding: 0 }}>
                {faqItems.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      borderTop:
                        idx === 0
                          ? '1px solid rgba(244,239,230,0.12)'
                          : 'none',
                      borderBottom: '1px solid rgba(244,239,230,0.12)',
                      paddingTop: '1.75rem',
                      paddingBottom: '1.75rem',
                    }}
                  >
                    <dt
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '1rem',
                        fontWeight: 500,
                        color: '#F4EFE6',
                        lineHeight: 1.5,
                        marginBottom: '0.75rem',
                      }}
                    >
                      {item.question}
                    </dt>
                    <dd
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9375rem',
                        color: '#8A8799',
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section
          aria-label="Beratung buchen"
          style={{
            background: '#050508',
            paddingTop: 'clamp(5rem, 10vw, 9rem)',
            paddingBottom: 'clamp(5rem, 10vw, 9rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: '#F4EFE6',
                margin: '0 0 1rem 0',
              }}
            >
              Nicht sicher, welches
              <br />
              Paket passt?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1rem',
                color: '#8A8799',
                lineHeight: 1.65,
                margin: '0 0 2.5rem 0',
              }}
            >
              30 Minuten. Kostenlos. Unverbindlich. Wir schauen gemeinsam,
              was zu dir und deinem Budget passt.
            </p>
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
                marginBottom: '1.25rem',
              }}
            >
              Kostenlose Beratung buchen →
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.8125rem',
                color: '#8A8799',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Kein Verkaufsgespräch. Wirklich.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
