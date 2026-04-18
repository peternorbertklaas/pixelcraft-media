import Script from 'next/script'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Accordion } from '@/components/ui/Accordion'
import type { Metadata } from 'next'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'Landing Page Agentur — Conversion-optimierte Seiten | PixelCraft Media',
  description:
    'Landing Pages mit einer Mission: Conversions maximieren. Für Google Ads, Social Media Kampagnen, Product Launches. A/B-Test-ready. Ab 1.200 €.',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: { canonical: '/leistungen/landing-pages' },
  openGraph: {
    title: 'Landing Page Agentur — Conversion-optimierte Seiten | PixelCraft Media',
    description:
      'Landing Pages mit einer Mission: Conversions maximieren. A/B-Test-ready. Ab 1.200 €.',
    url: 'https://pixelcraft-media.de/leistungen/landing-pages',
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
      '@id': 'https://pixelcraft-media.de/leistungen/landing-pages#service',
      name: 'Landing Pages',
      provider: { '@id': 'https://pixelcraft-media.de/#organization' },
      description:
        'Conversion-optimierte Landing Pages für Google Ads, Social Media und Product Launches. A/B-Test-ready, schnell, fokussiert. Ab 1.200 €.',
      areaServed: ['DE', 'AT', 'CH'],
      offers: {
        '@type': 'Offer',
        price: '1200',
        priceCurrency: 'EUR',
        description: 'Ab 1.200 € — abhängig von Umfang und Integrationen.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was kostet eine Landing Page?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine fokussierte Landing Page startet bei 1.200 €. Mit A/B-Test-Varianten, Custom-Integrationen (CRM, Marketing Automation) oder komplexeren Animationen steigt der Preis. Wir erstellen nach einem kurzen Briefing ein transparentes Festpreisangebot.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie schnell ist eine Landing Page fertig?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Einfache Landing Pages sind in 1–2 Wochen fertig. Komplexere Seiten mit Videoproduktion, Custom-Animationen oder umfangreichen Integrationen benötigen 3–4 Wochen. Bei Kampagnenstarts mit festem Datum planen wir backwards vom Launch-Termin.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie wird die Landing Page für A/B-Tests vorbereitet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wir bauen Landing Pages von Anfang an modular und test-ready. Das bedeutet: saubere Komponentenstruktur, einfach austauschbare Headlines und CTAs, Tracking-Events für alle kritischen Interaktionen. A/B-Tools wie Google Optimize oder VWO sind nahtlos integrierbar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Für welche Kanäle eignen sich Landing Pages?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Überall dort, wo Traffic auf eine spezifische Aktion gelenkt wird: Google Ads (Search & Display), Meta Ads, LinkedIn Ads, E-Mail-Kampagnen, Product Launches, Webinar-Anmeldungen. Eine Landing Page ist immer fokussierter als eine normale Website — und deshalb effizienter.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was unterscheidet eine gute von einer schlechten Landing Page?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine gute Landing Page hat ein einziges klares Ziel, eine starke Headline, einen unmissverständlichen CTA, Trust-Signale (Testimonials, Logos, Zertifikate) und lädt in unter 2 Sekunden. Schlechte Landing Pages versuchen zu viel auf einmal — und konvertieren deshalb wenig.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pixelcraft-media.de' },
        { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://pixelcraft-media.de/leistungen' },
        { '@type': 'ListItem', position: 3, name: 'Landing Pages', item: 'https://pixelcraft-media.de/leistungen/landing-pages' },
      ],
    },
  ],
}

/* ============================================================
   DATA
   ============================================================ */
const FEATURES = [
  {
    icon: '◎',
    title: 'Fokus auf ein Ziel',
    body: 'Keine Ablenkungen, keine Navigation, kein Rauschen. Eine Seite, ein CTA, eine Conversion. Das ist es, was Landing Pages von Websites unterscheidet.',
  },
  {
    icon: '⚡',
    title: 'A/B-Test-ready',
    body: 'Modularer Aufbau, saubere Komponenten, fertige Tracking-Events. Jede Landing Page kann sofort mit Google Optimize, VWO oder Optimizely getestet werden.',
  },
  {
    icon: '◈',
    title: 'Trust & Conversion-Elemente',
    body: 'Testimonials, Logo-Walls, Sicherheitssiegel, Social Proof — strategisch platziert, damit Besucher vertrauen und konvertieren.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Ziel & Zielgruppe',
    body: 'Was soll die Seite bewirken? Wer kommt über welchen Kanal? Welches Angebot wird beworben? Ohne klares Briefing keine klare Seite.',
  },
  {
    num: '02',
    title: 'Conversion-Struktur',
    body: 'Above-the-fold, Benefit-Kommunikation, Objection-Handling, CTA-Platzierung — wir strukturieren nach bewährten Conversion-Frameworks.',
  },
  {
    num: '03',
    title: 'Design & Copy',
    body: 'Visual und Text arbeiten zusammen. Jede Headline, jedes Bild, jeder Button ist bewusst gewählt — nichts ist zufällig.',
  },
  {
    num: '04',
    title: 'Launch & Tracking',
    body: 'Analytics, Conversion-Tracking, Heatmap-Setup. Wir messen von Tag 1, damit A/B-Tests sofort datenbasiert starten können.',
  },
]

const FAQS = [
  {
    q: 'Was kostet eine Landing Page?',
    a: 'Eine fokussierte Landing Page startet bei 1.200 €. Mit A/B-Test-Varianten, Custom-Integrationen (CRM, Marketing Automation) oder komplexeren Animationen steigt der Preis. Wir erstellen nach einem kurzen Briefing ein transparentes Festpreisangebot.',
  },
  {
    q: 'Wie schnell ist eine Landing Page fertig?',
    a: 'Einfache Landing Pages sind in 1–2 Wochen fertig. Komplexere Seiten mit Videoproduktion, Custom-Animationen oder umfangreichen Integrationen benötigen 3–4 Wochen. Bei Kampagnenstarts mit festem Datum planen wir backwards vom Launch-Termin.',
  },
  {
    q: 'Wie wird die Landing Page für A/B-Tests vorbereitet?',
    a: 'Wir bauen Landing Pages von Anfang an modular und test-ready. Das bedeutet: saubere Komponentenstruktur, einfach austauschbare Headlines und CTAs, Tracking-Events für alle kritischen Interaktionen. A/B-Tools wie Google Optimize oder VWO sind nahtlos integrierbar.',
  },
  {
    q: 'Für welche Kanäle eignen sich Landing Pages?',
    a: 'Überall dort, wo Traffic auf eine spezifische Aktion gelenkt wird: Google Ads (Search & Display), Meta Ads, LinkedIn Ads, E-Mail-Kampagnen, Product Launches, Webinar-Anmeldungen. Eine Landing Page ist immer fokussierter als eine normale Website — und deshalb effizienter.',
  },
  {
    q: 'Was unterscheidet eine gute von einer schlechten Landing Page?',
    a: 'Eine gute Landing Page hat ein einziges klares Ziel, eine starke Headline, einen unmissverständlichen CTA, Trust-Signale (Testimonials, Logos, Zertifikate) und lädt in unter 2 Sekunden. Schlechte Landing Pages versuchen zu viel auf einmal — und konvertieren deshalb wenig.',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function LandingPagesPage() {
  return (
    <>
      <Script id="landing-pages-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        {/* ── HERO ── */}
        <section
          style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 8vw, 6rem)', overflow: 'hidden' }}
          aria-label="Landing Pages Hero"
        >
          <div aria-hidden="true" style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '80vw', maxWidth: 900, borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(255,77,0,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative' }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '2.5rem' }}>
              <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Leistungen', href: '/leistungen' },
                  { label: 'Landing Pages', href: '/leistungen/landing-pages' },
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
              Eine Seite.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--orange-400)' }}>
                Ein Ziel.
              </em>{' '}
              Maximum Conversion.
            </h1>

            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '52ch', marginBottom: '3rem' }}>
              Conversion-optimierte Landing Pages für Google Ads, Social Media
              Kampagnen, Product Launches. A/B-Test-ready. Ab 1.200 €.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/kontakt" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.78rem', fontWeight: 500, color: '#050508', background: 'var(--orange-500)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.9rem 2rem', borderRadius: 100 }}>
                Projekt starten&nbsp;→
              </a>
              <a href="#leistungen" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-secondary)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0.9rem 2rem', borderRadius: 100, border: '1px solid var(--border-visible)' }}>
                Leistungen ansehen
              </a>
            </div>
          </div>
        </section>

        {/* ── WAS WIR TUN ── */}
        <section id="leistungen" style={{ padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)', borderTop: '1px solid var(--border-subtle)' }} aria-label="Was wir tun">
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', fontWeight: 500, color: 'var(--orange-500)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Was wir tun</p>
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '1.5rem' }}>Fokus ist alles.</h2>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '60ch', marginBottom: '5rem' }}>
              Eine Landing Page hat genau eine Aufgabe: konvertieren. Wir bauen
              Seiten, die Besucher führen, überzeugen und zur Aktion bewegen — ohne Ablenkung.
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
                { stat: '+64%', label: 'mehr Conversions', note: 'Durchschnittliche Steigerung gegenüber der vorherigen Website-Seite als Zielseite.' },
                { stat: '-38%', label: 'niedrigerer CPA', note: 'Weniger Kosten pro Conversion durch höhere Qualität der Landing Page.' },
                { stat: '1–2 Wo.', label: 'Time to Launch', note: 'Von Briefing bis live — auch bei kurzfristigen Kampagnenstarts.' },
              ].map((item) => (
                <div key={item.stat} style={{ background: 'var(--bg-surface)', padding: '3rem 2.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(3rem, 5vw, 5.5rem)', fontWeight: 300, color: 'var(--orange-400)', lineHeight: 1, marginBottom: '0.5rem' }}>{item.stat}</div>
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
              Kampagne geplant?
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Sagt uns euer Launch-Datum — wir planen backwards und stellen sicher,
              dass die Landing Page rechtzeitig und conversion-optimiert live geht.
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
