import Script from 'next/script'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Accordion } from '@/components/ui/Accordion'
import type { Metadata } from 'next'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'UX/UI Design Agentur — Interfaces die konvertieren | PixelCraft Media',
  description:
    'UX/UI Design für digitale Produkte, Apps und Websites. User Research, Wireframes, Prototypen, Design Systems. Figma-basiert. DE/AT/CH.',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: { canonical: '/leistungen/ux-ui-design' },
  openGraph: {
    title: 'UX/UI Design Agentur — Interfaces die konvertieren | PixelCraft Media',
    description:
      'User Research, Wireframes, Prototypen, Design Systems. Figma-basiert. DE/AT/CH.',
    url: 'https://pixelcraft-media.de/leistungen/ux-ui-design',
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
      '@id': 'https://pixelcraft-media.de/leistungen/ux-ui-design#service',
      name: 'UX/UI Design',
      provider: { '@id': 'https://pixelcraft-media.de/#organization' },
      description:
        'Professionelles UX/UI Design für digitale Produkte, Web-Apps und Websites. User Research, Wireframes, Prototypen und Design Systems in Figma.',
      areaServed: ['DE', 'AT', 'CH'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist der Unterschied zwischen UX und UI Design?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UX Design (User Experience) befasst sich mit der Logik und dem Erlebnis: Wie funktioniert das Produkt? Wie navigiert der Nutzer? Was sind die Pain Points? UI Design (User Interface) ist die visuelle Umsetzung: Farben, Typografie, Komponenten, Animationen. Gute Arbeit verbindet beides untrennbar.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche Tools nutzt ihr für UX/UI Design?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Primär Figma — für Wireframes, High-Fidelity-Designs, Prototypen und Design Systems. Für User Research nutzen wir Hotjar, Maze oder UsabilityHub. Für Übergabe an Entwickler arbeiten wir mit Figma Dev Mode.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist ein Design System und brauche ich eines?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein Design System ist eine Bibliothek aus wiederverwendbaren Komponenten, Typografie-Regeln, Farbpaletten und Mustern. Es spart langfristig enorm viel Zeit bei der Entwicklung und hält das visuelle Erscheinungsbild konsistent. Ab einer mittleren Produktgröße oder mehreren Entwicklern ist es fast immer sinnvoll.',
          },
        },
        {
          '@type': 'Question',
          name: 'Macht ihr auch Usability-Tests?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Wir führen moderierte und unmoderierte Usability-Tests durch, werten Heatmaps und Session Recordings aus und leiten daraus konkrete Designverbesserungen ab. Testing ist kein Extra — es ist Teil unseres Design-Prozesses.',
          },
        },
        {
          '@type': 'Question',
          name: 'Arbeitet ihr auch mit Entwicklern zusammen, die nicht bei euch sind?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, sehr gerne. Wir liefern Figma-Dateien mit sauberem Dev-Mode-Export, vollständiger Komponentendokumentation und Design-Tokens. Unser Ziel: Entwickler verbringen keine Zeit damit, Design-Entscheidungen zu raten.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pixelcraft-media.de' },
        { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://pixelcraft-media.de/leistungen' },
        { '@type': 'ListItem', position: 3, name: 'UX/UI Design', item: 'https://pixelcraft-media.de/leistungen/ux-ui-design' },
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
    title: 'Research-basiert',
    body: 'Kein Design ohne Daten. User Interviews, Heatmaps, Competitive Analysis, Persona-Entwicklung — wir designen für echte Menschen, nicht für Awards.',
  },
  {
    icon: '◈',
    title: 'Figma-First',
    body: 'Wireframes, High-Fidelity-Designs, interaktive Prototypen, Design Systems — alles in Figma. Mit sauberem Dev-Mode-Export für reibungslose Übergabe.',
  },
  {
    icon: '⚡',
    title: 'Iterativ & testbar',
    body: 'Kein Big-Bang-Design. Wir arbeiten in Iterationen, testen früh mit Nutzern und verbessern kontinuierlich — bevor eine Zeile Code geschrieben wird.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Discovery & Research',
    body: 'User Interviews, Wettbewerbsanalyse, Heuristic Evaluation bestehender Systeme. Wir verstehen, bevor wir designen.',
  },
  {
    num: '02',
    title: 'Information Architecture',
    body: 'Seitenstruktur, User Flows, Navigation — die Logik des Systems bevor das Visuelle beginnt.',
  },
  {
    num: '03',
    title: 'Wireframes & Prototypen',
    body: 'Grob zu fein. Von Lo-Fi-Wireframes zu interaktiven Prototypen, die mit echten Nutzern getestet werden.',
  },
  {
    num: '04',
    title: 'Visual Design & Handoff',
    body: 'High-Fidelity-Designs, Design System, Figma Dev Mode Export. Entwicklerfreundlich, vollständig dokumentiert.',
  },
]

const FAQS = [
  {
    q: 'Was ist der Unterschied zwischen UX und UI Design?',
    a: 'UX Design (User Experience) befasst sich mit der Logik und dem Erlebnis: Wie funktioniert das Produkt? Wie navigiert der Nutzer? Was sind die Pain Points? UI Design (User Interface) ist die visuelle Umsetzung: Farben, Typografie, Komponenten, Animationen. Gute Arbeit verbindet beides untrennbar.',
  },
  {
    q: 'Welche Tools nutzt ihr für UX/UI Design?',
    a: 'Primär Figma — für Wireframes, High-Fidelity-Designs, Prototypen und Design Systems. Für User Research nutzen wir Hotjar, Maze oder UsabilityHub. Für Übergabe an Entwickler arbeiten wir mit Figma Dev Mode.',
  },
  {
    q: 'Was ist ein Design System und brauche ich eines?',
    a: 'Ein Design System ist eine Bibliothek aus wiederverwendbaren Komponenten, Typografie-Regeln, Farbpaletten und Mustern. Es spart langfristig enorm viel Zeit bei der Entwicklung und hält das visuelle Erscheinungsbild konsistent. Ab einer mittleren Produktgröße oder mehreren Entwicklern ist es fast immer sinnvoll.',
  },
  {
    q: 'Macht ihr auch Usability-Tests?',
    a: 'Ja. Wir führen moderierte und unmoderierte Usability-Tests durch, werten Heatmaps und Session Recordings aus und leiten daraus konkrete Designverbesserungen ab. Testing ist kein Extra — es ist Teil unseres Design-Prozesses.',
  },
  {
    q: 'Arbeitet ihr auch mit Entwicklern zusammen, die nicht bei euch sind?',
    a: 'Ja, sehr gerne. Wir liefern Figma-Dateien mit sauberem Dev-Mode-Export, vollständiger Komponentendokumentation und Design-Tokens. Unser Ziel: Entwickler verbringen keine Zeit damit, Design-Entscheidungen zu raten.',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function UxUiDesignPage() {
  return (
    <>
      <Script id="ux-ui-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        {/* ── HERO ── */}
        <section
          style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 8vw, 6rem)', overflow: 'hidden' }}
          aria-label="UX/UI Design Hero"
        >
          <div aria-hidden="true" style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '80vw', maxWidth: 900, borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(255,77,0,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative' }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '2.5rem' }}>
              <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Leistungen', href: '/leistungen' },
                  { label: 'UX/UI Design', href: '/leistungen/ux-ui-design' },
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
              Design, das{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--orange-400)' }}>
                unsichtbar ist
              </em>{' '}
              — und alles verändert.
            </h1>

            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '52ch', marginBottom: '2rem' }}>
              UX/UI Design für digitale Produkte, Apps und Websites. User Research,
              Wireframes, Prototypen, Design Systems — alles in Figma.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '3rem' }}>
              Ab <span style={{ color: 'var(--orange-400)', fontWeight: 600 }}>2.500 €</span> — individuell kalkuliert
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
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '1.5rem' }}>Design mit Tiefe.</h2>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '60ch', marginBottom: '5rem' }}>
              Gutes Design ist das, das man nicht bemerkt. Es führt, erklärt, überzeugt —
              ohne dass der Nutzer darüber nachdenken muss. Das ist unser Anspruch.
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
                { stat: '-38%', label: 'Support-Tickets', note: 'Durchschnittliche Reduktion nach UX-Überarbeitung von Self-Service-Portalen.' },
                { stat: '+52%', label: 'Task Completion Rate', note: 'Nutzer erreichen ihr Ziel häufiger — gemessen in moderierten Usability-Tests.' },
                { stat: '4.8/5', label: 'Ø Nutzerzufriedenheit', note: 'SUS-Score (System Usability Scale) nach Redesign — Durchschnitt über alle Projekte.' },
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
              Design, das wirkt.
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Kostenloses Design-Review eures Produkts oder eurer Website — wir zeigen,
              wo UX-Probleme Conversions kosten und wie wir sie lösen.
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
