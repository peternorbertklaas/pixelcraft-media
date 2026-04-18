import Script from 'next/script'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Accordion } from '@/components/ui/Accordion'
import type { Metadata } from 'next'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'E-Commerce Agentur — Online-Shops die verkaufen | PixelCraft Media',
  description:
    'E-Commerce Entwicklung für Shops, die wirklich verkaufen. Shopify, Next.js Commerce, WooCommerce — conversion-optimiert, schnell, skalierbar. DE/AT/CH.',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: { canonical: '/leistungen/ecommerce' },
  openGraph: {
    title: 'E-Commerce Agentur — Online-Shops die verkaufen | PixelCraft Media',
    description:
      'Shopify, Next.js Commerce, WooCommerce — conversion-optimiert, schnell, skalierbar.',
    url: 'https://pixelcraft-media.de/leistungen/ecommerce',
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
      '@type': 'Service',
      '@id': 'https://pixelcraft-media.de/leistungen/ecommerce#service',
      name: 'E-Commerce Entwicklung',
      provider: { '@id': 'https://pixelcraft-media.de/#organization' },
      description:
        'Professionelle E-Commerce-Lösungen mit Shopify, Next.js Commerce und WooCommerce. Conversion-optimiert, performant und skalierbar für den DACH-Markt.',
      areaServed: ['DE', 'AT', 'CH'],
      offers: {
        '@type': 'Offer',
        priceRange: 'Ab €6.000',
        priceCurrency: 'EUR',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Welche E-Commerce-Plattform empfehlt ihr?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Das hängt von euren Anforderungen ab. Shopify eignet sich ideal für schnelles Wachstum und einfache Verwaltung. Next.js Commerce ist perfekt für maximale Performance und individuelle Anforderungen. WooCommerce bietet maximale Flexibilität auf WordPress-Basis. Wir beraten euch neutral und plattformunabhängig.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was kostet ein professioneller Online-Shop?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein professioneller Online-Shop startet bei 6.000 €. Komplexere Shops mit individuellen Funktionen, Multi-Currency oder B2B-Logik können 15.000–40.000 € kosten. Wir erstellen nach einem Erstgespräch ein detailliertes Festpreisangebot.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie steigert ihr die Conversion Rate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Durch konsequentes Checkout-Optimierung, Trust-Signale (Bewertungen, Sicherheitssiegel), schnelle Ladezeiten, optimierte Produktseiten, reduzierte Formularfelder und A/B-Tests kritischer Seiten. Unsere Shops erzielen im Schnitt 2.8–3.8% Conversion Rate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kümmert ihr euch auch um Zahlungsanbieter und Versand?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Wir integrieren alle gängigen Zahlungsanbieter (Stripe, PayPal, Klarna, SEPA) und Versanddienstleister (DHL, Hermes, DPD). Die technische Integration und Konfiguration übernehmen wir vollständig.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was passiert nach dem Shop-Launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wir bieten Wartungs- und Wachstumspakete ab 299 €/Monat: Sicherheitsupdates, Performance-Monitoring, Conversion-Optimierung, A/B-Tests und technischer Support. Der Launch ist der Anfang — nicht das Ende der Zusammenarbeit.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pixelcraft-media.de' },
        { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://pixelcraft-media.de/leistungen' },
        { '@type': 'ListItem', position: 3, name: 'E-Commerce', item: 'https://pixelcraft-media.de/leistungen/ecommerce' },
      ],
    },
  ],
}

/* ============================================================
   DATA
   ============================================================ */
const FEATURES = [
  {
    icon: '◈',
    title: 'Plattform-Expertise',
    body: 'Shopify, Next.js Commerce, WooCommerce — wir kennen die Stärken und Schwächen jeder Plattform und empfehlen neutral, was zu eurem Geschäftsmodell passt.',
  },
  {
    icon: '⚡',
    title: 'Conversion-Optimierung',
    body: 'Jeder Schritt des Funnels ist optimiert: Produktseite, Warenkorb, Checkout. Wir reduzieren Abbrüche und erhöhen den durchschnittlichen Warenkorbwert.',
  },
  {
    icon: '◎',
    title: 'Mobile First & Performance',
    body: 'Über 70% der Käufe passieren mobil. Unsere Shops laden in unter 1.5s und sind für Touch optimiert — weil jede Sekunde Ladezeit Umsatz kostet.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Shop-Audit & Strategie',
    body: 'Bestehenden Shop analysieren oder neues Konzept entwickeln. Zielgruppe, Sortiment, Checkout-Flow — wir beginnen mit der Strategie.',
  },
  {
    num: '02',
    title: 'UX-Design & Wireframes',
    body: 'Produktseiten, Kategorien, Warenkorb, Checkout — jede Seite wird für maximale Conversion designed, bevor eine Zeile Code geschrieben wird.',
  },
  {
    num: '03',
    title: 'Entwicklung & Integration',
    body: 'Plattform-Setup, Payment-Provider, Versandintegration, Produktimport, SEO-Optimierung — wir bauen den Shop Schritt für Schritt auf.',
  },
  {
    num: '04',
    title: 'Testing & Launch',
    body: 'Testbestellungen, Mobile-Tests, Performance-Audit, SEO-Check. Erst wenn alles im grünen Bereich ist, gehen wir live.',
  },
]

const FAQS = [
  {
    q: 'Welche E-Commerce-Plattform empfehlt ihr?',
    a: 'Das hängt von euren Anforderungen ab. Shopify eignet sich ideal für schnelles Wachstum und einfache Verwaltung. Next.js Commerce ist perfekt für maximale Performance und individuelle Anforderungen. WooCommerce bietet maximale Flexibilität auf WordPress-Basis. Wir beraten euch neutral und plattformunabhängig.',
  },
  {
    q: 'Was kostet ein professioneller Online-Shop?',
    a: 'Ein professioneller Online-Shop startet bei 6.000 €. Komplexere Shops mit individuellen Funktionen, Multi-Currency oder B2B-Logik können 15.000–40.000 € kosten. Wir erstellen nach einem Erstgespräch ein detailliertes Festpreisangebot.',
  },
  {
    q: 'Wie steigert ihr die Conversion Rate?',
    a: 'Durch konsequentes Checkout-Optimierung, Trust-Signale (Bewertungen, Sicherheitssiegel), schnelle Ladezeiten, optimierte Produktseiten, reduzierte Formularfelder und A/B-Tests kritischer Seiten. Unsere Shops erzielen im Schnitt 2.8–3.8% Conversion Rate.',
  },
  {
    q: 'Kümmert ihr euch auch um Zahlungsanbieter und Versand?',
    a: 'Ja. Wir integrieren alle gängigen Zahlungsanbieter (Stripe, PayPal, Klarna, SEPA) und Versanddienstleister (DHL, Hermes, DPD). Die technische Integration und Konfiguration übernehmen wir vollständig.',
  },
  {
    q: 'Was passiert nach dem Shop-Launch?',
    a: 'Wir bieten Wartungs- und Wachstumspakete ab 299 €/Monat: Sicherheitsupdates, Performance-Monitoring, Conversion-Optimierung, A/B-Tests und technischer Support. Der Launch ist der Anfang — nicht das Ende der Zusammenarbeit.',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function EcommercePage() {
  return (
    <>
      <Script id="ecommerce-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        {/* ── HERO ── */}
        <section
          style={{
            position: 'relative',
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 8vw, 6rem)',
            overflow: 'hidden',
          }}
          aria-label="E-Commerce Hero"
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-30%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80vw',
              height: '80vw',
              maxWidth: 900,
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse at center, rgba(255,77,0,0.09) 0%, transparent 65%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative' }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '2.5rem' }}>
              <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Leistungen', href: '/leistungen' },
                  { label: 'E-Commerce', href: '/leistungen/ecommerce' },
                ].map((crumb, i, arr) => (
                  <li key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <a
                      href={crumb.href}
                      aria-current={i === arr.length - 1 ? 'page' : undefined}
                      style={{
                        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                        fontSize: '0.75rem',
                        color: i === arr.length - 1 ? 'var(--orange-400)' : 'var(--text-muted)',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {crumb.label}
                    </a>
                    {i < arr.length - 1 && (
                      <span aria-hidden="true" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>/</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            <h1
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(3.5rem, 9vw, 10rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 0.92,
                letterSpacing: '-0.01em',
                marginBottom: '2rem',
                maxWidth: '14ch',
              }}
            >
              E-Commerce,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--orange-400)' }}>
                der wirklich verkauft.
              </em>
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '52ch',
                marginBottom: '3rem',
              }}
            >
              Ein Shop, der gut aussieht, reicht nicht. Wir bauen Shops, die den
              Checkout-Prozess so reibungslos machen, dass Kaufabbrüche zur
              Ausnahme werden.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href="/kontakt"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  color: '#050508',
                  background: 'var(--orange-500)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  padding: '0.9rem 2rem',
                  borderRadius: 100,
                }}
              >
                Projekt starten&nbsp;→
              </a>
              <a
                href="#leistungen"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  padding: '0.9rem 2rem',
                  borderRadius: 100,
                  border: '1px solid var(--border-visible)',
                }}
              >
                Leistungen ansehen
              </a>
            </div>
          </div>
        </section>

        {/* ── WAS WIR TUN ── */}
        <section
          id="leistungen"
          style={{ padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)', borderTop: '1px solid var(--border-subtle)' }}
          aria-label="Was wir tun"
        >
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--orange-500)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
              Was wir tun
            </p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Shops mit System.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '60ch', marginBottom: '5rem' }}>
              Von der Produktseite bis zum Checkout: Jeder Schritt ist auf maximale
              Conversion optimiert. Wir kennen die Plattformen, die Zahlen und die
              Psychologie dahinter.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1px', background: 'var(--border-subtle)' }}>
              {FEATURES.map((f) => (
                <div key={f.title} style={{ background: 'var(--bg-surface)', padding: '2.5rem' }}>
                  <span aria-hidden="true" style={{ fontSize: '1.5rem', color: 'var(--orange-400)', display: 'block', marginBottom: '1.25rem' }}>{f.icon}</span>
                  <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.5rem, 2vw, 2rem)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WIE ES FUNKTIONIERT ── */}
        <section style={{ padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }} aria-label="Wie es funktioniert">
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--orange-500)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Unser Prozess</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '4rem' }}>Wie es funktioniert.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))', gap: '2rem' }}>
              {STEPS.map((step) => (
                <div key={step.num}>
                  <span style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--orange-500)', letterSpacing: '0.15em', display: 'block', marginBottom: '1rem' }}>{step.num}</span>
                  <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', fontWeight: 400, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{step.title}</h3>
                  <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ERGEBNISSE ── */}
        <section style={{ padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)', borderTop: '1px solid var(--border-subtle)' }} aria-label="Ergebnisse">
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--orange-500)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Ergebnisse</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '4rem' }}>Zahlen, die sprechen.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1px', background: 'var(--border-subtle)' }}>
              {[
                { stat: '+380%', label: 'organischer Traffic', note: 'LuxeCommerce — 8 Monate nach Shop-Relaunch mit Next.js Commerce.' },
                { stat: '0.8% → 3.4%', label: 'Conversion Rate', note: 'MedTech GmbH — nach Checkout-Optimierung und UX-Überarbeitung.' },
                { stat: '-62%', label: 'Kaufabbrüche', note: 'Durchschnittliche Reduktion der Cart-Abandonment-Rate nach Checkout-Redesign.' },
              ].map((item) => (
                <div key={item.stat} style={{ background: 'var(--bg-surface)', padding: '3rem 2.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--orange-400)', lineHeight: 1, marginBottom: '0.5rem' }}>{item.stat}</div>
                  <div style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{item.label}</div>
                  <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }} aria-label="Häufige Fragen">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--orange-500)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '3rem' }}>Häufige Fragen.</h2>
            <Accordion items={FAQS} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: 'clamp(4rem, 9vw, 8rem) clamp(1.5rem, 5vw, 4rem)', borderTop: '1px solid var(--border-subtle)', textAlign: 'center', position: 'relative', overflow: 'hidden' }} aria-label="Kontakt aufnehmen">
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)', width: '70vw', height: '70vw', maxWidth: 700, borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(91,75,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 6rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '1.5rem' }}>
              Bereit für mehr Umsatz?
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Kostenloses Shop-Audit inklusive. Wir schauen uns euren aktuellen Shop an
              und zeigen, wo Conversion-Potenzial verschenkt wird.
            </p>
            <a
              href="/kontakt"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#050508', background: 'var(--orange-500)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '1rem 2.5rem', borderRadius: 100 }}
            >
              Kontakt aufnehmen&nbsp;→
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
