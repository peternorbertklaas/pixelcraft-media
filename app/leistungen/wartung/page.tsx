import Script from 'next/script'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Accordion } from '@/components/ui/Accordion'
import type { Metadata } from 'next'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'Website-Wartung & Pflege — Dauerhaft optimieren | PixelCraft Media',
  description:
    'Website-Wartung und kontinuierliche Optimierung. Updates, Sicherheit, Performance-Monitoring, A/B-Tests. Monatliche Pakete ab 299 €/Monat.',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: { canonical: '/leistungen/wartung' },
  openGraph: {
    title: 'Website-Wartung & Pflege — Dauerhaft optimieren | PixelCraft Media',
    description:
      'Updates, Sicherheit, Performance-Monitoring, A/B-Tests. Monatliche Pakete ab 299 €/Monat.',
    url: 'https://pixelcraft-media.de/leistungen/wartung',
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
      '@id': 'https://pixelcraft-media.de/leistungen/wartung#service',
      name: 'Website-Wartung & Wachstum',
      provider: { '@id': 'https://pixelcraft-media.de/#organization' },
      description:
        'Monatliche Website-Wartung und kontinuierliche Optimierung: Updates, Sicherheit, Performance-Monitoring, A/B-Tests. Ab 299 €/Monat.',
      areaServed: ['DE', 'AT', 'CH'],
      offers: {
        '@type': 'Offer',
        price: '299',
        priceCurrency: 'EUR',
        description: 'Monatliche Wartungspakete ab 299 €/Monat.',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '299',
          priceCurrency: 'EUR',
          unitCode: 'MON',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist in einem Wartungspaket enthalten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Abhängig vom Paket: Sicherheitsupdates für CMS/Dependencies, Performance-Monitoring (Lighthouse, Core Web Vitals, Uptime), monatliches Reporting, Content-Updates (je nach Paket 4–8h/Monat), A/B-Tests und Conversion-Optimierung. Alle Pakete beinhalten proaktives Monitoring — wir reagieren, bevor ihr die Probleme bemerkt.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was kostet Website-Wartung?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unsere Wartungspakete starten bei 299 €/Monat für Basis-Wartung (Security, Updates, Monitoring). Das Standard-Paket bei 599 €/Monat inkl. bis zu 4h Content-Updates und monatlichem Report. Das Wachstums-Paket bei 999 €/Monat inkl. A/B-Tests, CRO und Priority Support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Überwacht ihr die Website auch außerhalb der Geschäftszeiten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Unser Monitoring läuft 24/7. Bei kritischen Problemen (Site down, Sicherheitsvorfall, Core Web Vitals-Einbruch) werden wir automatisch alarmiert und reagieren — auch nachts und am Wochenende.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann ich das Wartungspaket jederzeit kündigen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Alle Pakete laufen monatlich und können mit einer Frist von 30 Tagen gekündigt werden. Kein Jahresvertrag, keine versteckten Klauseln. Wir behalten Kunden durch Qualität — nicht durch Verträge.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was passiert, wenn die Website down ist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wir werden sofort alarmiert. Je nach Paket reagieren wir innerhalb von 1–4 Stunden. Wir analysieren die Ursache, beheben das Problem und informieren euch transparent über Ursache und Lösung.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pixelcraft-media.de' },
        { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://pixelcraft-media.de/leistungen' },
        { '@type': 'ListItem', position: 3, name: 'Wartung & Wachstum', item: 'https://pixelcraft-media.de/leistungen/wartung' },
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
    title: 'Sicherheit & Updates',
    body: 'CMS-Updates, Dependency-Patches, SSL-Monitoring, Malware-Scans. Sicherheitslücken werden geschlossen, bevor sie zum Problem werden.',
  },
  {
    icon: '⚡',
    title: '24/7 Performance-Monitoring',
    body: 'Uptime, Ladezeiten, Core Web Vitals — wir überwachen rund um die Uhr und reagieren bei Abweichungen sofort, ohne dass ihr etwas merkt.',
  },
  {
    icon: '◎',
    title: 'Wachstum & Optimierung',
    body: 'A/B-Tests, Conversion-Optimierung, Content-Updates, SEO-Monitoring — die Site wird nach dem Launch immer besser, nicht älter.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Onboarding & Baseline',
    body: 'Wir messen den aktuellen Stand: Performance, Security, SEO, Conversion Rate. Das ist unser Ausgangspunkt für alle weiteren Optimierungen.',
  },
  {
    num: '02',
    title: 'Laufendes Monitoring',
    body: '24/7 Uptime-Checks, tägliche Lighthouse-Messungen, wöchentliche Security-Scans. Wir sehen Probleme, bevor sie entstehen.',
  },
  {
    num: '03',
    title: 'Monatliche Optimierungen',
    body: 'A/B-Tests, Content-Updates, technische Verbesserungen, SEO-Anpassungen. Kontinuierlich besser — Monat für Monat.',
  },
  {
    num: '04',
    title: 'Transparentes Reporting',
    body: 'Monatlicher Report: Was haben wir gemacht? Was hat sich verändert? Was planen wir? Keine Black Box, volle Transparenz.',
  },
]

const PRICING = [
  {
    name: 'Basis',
    price: '299 €',
    period: '/Monat',
    features: [
      'Security-Updates & Patches',
      'Uptime-Monitoring 24/7',
      'Monatlicher Performance-Report',
      'E-Mail Support (48h)',
    ],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '599 €',
    period: '/Monat',
    features: [
      'Alles aus Basis',
      'Bis zu 4h Content-Updates/Monat',
      'Core Web Vitals Monitoring',
      'SEO-Monitoring & Alerts',
      'Priority Support (24h)',
    ],
    highlight: true,
  },
  {
    name: 'Wachstum',
    price: '999 €',
    period: '/Monat',
    features: [
      'Alles aus Standard',
      'Bis zu 8h Content-Updates/Monat',
      'Monatlicher A/B-Test',
      'Conversion-Optimierung',
      'Priority Support (4h)',
      'Quartals-Review Call',
    ],
    highlight: false,
  },
]

const FAQS = [
  {
    q: 'Was ist in einem Wartungspaket enthalten?',
    a: 'Abhängig vom Paket: Sicherheitsupdates für CMS/Dependencies, Performance-Monitoring (Lighthouse, Core Web Vitals, Uptime), monatliches Reporting, Content-Updates (je nach Paket 4–8h/Monat), A/B-Tests und Conversion-Optimierung. Alle Pakete beinhalten proaktives Monitoring — wir reagieren, bevor ihr die Probleme bemerkt.',
  },
  {
    q: 'Was kostet Website-Wartung?',
    a: 'Unsere Wartungspakete starten bei 299 €/Monat für Basis-Wartung (Security, Updates, Monitoring). Das Standard-Paket bei 599 €/Monat inkl. bis zu 4h Content-Updates und monatlichem Report. Das Wachstums-Paket bei 999 €/Monat inkl. A/B-Tests, CRO und Priority Support.',
  },
  {
    q: 'Überwacht ihr die Website auch außerhalb der Geschäftszeiten?',
    a: 'Ja. Unser Monitoring läuft 24/7. Bei kritischen Problemen (Site down, Sicherheitsvorfall, Core Web Vitals-Einbruch) werden wir automatisch alarmiert und reagieren — auch nachts und am Wochenende.',
  },
  {
    q: 'Kann ich das Wartungspaket jederzeit kündigen?',
    a: 'Ja. Alle Pakete laufen monatlich und können mit einer Frist von 30 Tagen gekündigt werden. Kein Jahresvertrag, keine versteckten Klauseln. Wir behalten Kunden durch Qualität — nicht durch Verträge.',
  },
  {
    q: 'Was passiert, wenn die Website down ist?',
    a: 'Wir werden sofort alarmiert. Je nach Paket reagieren wir innerhalb von 1–4 Stunden. Wir analysieren die Ursache, beheben das Problem und informieren euch transparent über Ursache und Lösung.',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function WartungPage() {
  return (
    <>
      <Script id="wartung-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        {/* ── HERO ── */}
        <section
          style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 8vw, 6rem)', overflow: 'hidden' }}
          aria-label="Wartung & Wachstum Hero"
        >
          <div aria-hidden="true" style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '80vw', maxWidth: 900, borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(255,77,0,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative' }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '2.5rem' }}>
              <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Leistungen', href: '/leistungen' },
                  { label: 'Wartung & Wachstum', href: '/leistungen/wartung' },
                ].map((crumb, i, arr) => (
                  <li key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <a href={crumb.href} aria-current={i === arr.length - 1 ? 'page' : undefined} style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', color: i === arr.length - 1 ? 'var(--orange-400)' : 'var(--text-muted)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {crumb.label}
                    </a>
                    {i < arr.length - 1 && <span aria-hidden="true" style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>/</span>}
                  </li>
                ))}
              </ol>
            </nav>

            <h1
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(3rem, 8vw, 9rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 0.95, letterSpacing: '-0.01em', marginBottom: '2rem', maxWidth: '16ch' }}
            >
              Wir sind nicht weg,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--orange-400)' }}>
                wenn die Site live ist.
              </em>
            </h1>

            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '52ch', marginBottom: '3rem' }}>
              Updates, Sicherheit, Performance-Monitoring, A/B-Tests —
              kontinuierliche Optimierung, die eure Website jeden Monat besser macht.
              Ab 299 €/Monat.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/kontakt" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.78rem', fontWeight: 500, color: '#050508', background: 'var(--orange-500)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.9rem 2rem', borderRadius: 100 }}>
                Projekt starten&nbsp;→
              </a>
              <a href="#pakete" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.9rem 2rem', borderRadius: 100, border: '1px solid var(--border-visible)' }}>
                Leistungen ansehen
              </a>
            </div>
          </div>
        </section>

        {/* ── WAS WIR TUN ── */}
        <section id="leistungen" style={{ padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)', borderTop: '1px solid var(--border-subtle)' }} aria-label="Was wir tun">
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--orange-500)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Was wir tun</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '1.5rem' }}>Dauerhaft besser.</h2>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '60ch', marginBottom: '5rem' }}>
              Eine Website ist kein Einmal-Projekt. Die besten Seiten werden jeden Monat
              optimiert — durch Tests, Daten und konsequente Verbesserungen.
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

        {/* ── PAKETE / PRICING ── */}
        <section
          id="pakete"
          style={{ padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)', borderTop: '1px solid var(--border-subtle)' }}
          aria-label="Wartungspakete"
        >
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--orange-500)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Pakete</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '4rem' }}>Transparente Preise.</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1px', background: 'var(--border-subtle)' }}>
              {PRICING.map((pkg) => (
                <div
                  key={pkg.name}
                  style={{
                    background: pkg.highlight ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                    padding: '3rem 2.5rem',
                    position: 'relative',
                    borderTop: pkg.highlight ? '2px solid var(--orange-500)' : undefined,
                  }}
                >
                  {pkg.highlight && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-1px',
                        right: '2rem',
                        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#050508',
                        background: 'var(--orange-500)',
                        padding: '0.25rem 0.75rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Beliebt
                    </span>
                  )}
                  <div style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>{pkg.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '2rem' }}>
                    <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1 }}>{pkg.price}</span>
                    <span style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{pkg.period}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {pkg.features.map((feat) => (
                      <li key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span aria-hidden="true" style={{ color: 'var(--orange-400)', fontSize: '0.75rem', marginTop: '0.2rem', flexShrink: 0 }}>✓</span>
                        <span style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/kontakt"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '0.75rem 1.5rem',
                      borderRadius: 100,
                      color: pkg.highlight ? '#050508' : 'var(--orange-500)',
                      background: pkg.highlight ? 'var(--orange-500)' : 'transparent',
                      border: pkg.highlight ? 'none' : '1px solid var(--orange-500)',
                    }}
                  >
                    Paket wählen&nbsp;→
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ERGEBNISSE ── */}
        <section style={{ padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)' }} aria-label="Ergebnisse">
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--orange-500)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Ergebnisse</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '4rem' }}>Zahlen, die sprechen.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1px', background: 'var(--border-subtle)' }}>
              {[
                { stat: '99.9%', label: 'Durchschnittliche Uptime', note: 'Gemessen über alle aktiven Wartungskunden, letzten 12 Monate.' },
                { stat: '+22%', label: 'Conversion-Verbesserung', note: 'Durchschnittliche CRO-Steigerung nach 6 Monaten Wachstums-Paket.' },
                { stat: '< 4h', label: 'Reaktionszeit bei Problemen', note: 'Durchschnittliche Zeit von Alert bis zur Lösung des Problems.' },
              ].map((item) => (
                <div key={item.stat} style={{ background: 'var(--bg-elevated)', padding: '3rem 2.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(3rem, 5vw, 5.5rem)', fontWeight: 300, color: 'var(--orange-400)', lineHeight: 1, marginBottom: '0.5rem' }}>{item.stat}</div>
                  <div style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{item.label}</div>
                  <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)', borderTop: '1px solid var(--border-subtle)' }} aria-label="Häufige Fragen">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--orange-500)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>FAQ</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 4rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '3rem' }}>Häufige Fragen.</h2>
            <Accordion items={FAQS} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: 'clamp(4rem, 9vw, 8rem) clamp(1.5rem, 5vw, 4rem)', background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', textAlign: 'center', position: 'relative', overflow: 'hidden' }} aria-label="Kontakt aufnehmen">
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)', width: '70vw', height: '70vw', maxWidth: 700, borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(91,75,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.8rem, 6vw, 6rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1, marginBottom: '1.5rem' }}>
              Eure Site verdient Pflege.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Kostenloses Site-Audit inklusive. Wir schauen uns eure aktuelle Website an,
              messen Performance und Sicherheit — und zeigen, wo wir ansetzen würden.
            </p>
            <a href="/kontakt" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#050508', background: 'var(--orange-500)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '1rem 2.5rem', borderRadius: 100 }}>
              Kontakt aufnehmen&nbsp;→
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
