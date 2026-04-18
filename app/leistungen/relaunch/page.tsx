import Script from 'next/script'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Accordion } from '@/components/ui/Accordion'
import type { Metadata } from 'next'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'Website-Relaunch Agentur — Bestehende Site neu aufbauen | PixelCraft Media',
  description:
    'Website-Relaunch ohne Ranking-Verlust. Wir analysieren was funktioniert, behalten SEO-Werte und bauen neu — schneller, konvertierender, moderner.',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: { canonical: '/leistungen/relaunch' },
  openGraph: {
    title: 'Website-Relaunch Agentur — Bestehende Site neu aufbauen | PixelCraft Media',
    description:
      'Relaunch ohne Ranking-Verlust. SEO-Werte sichern, neu bauen — schneller, konvertierender, moderner.',
    url: 'https://pixelcraft-media.de/leistungen/relaunch',
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
      '@id': 'https://pixelcraft-media.de/leistungen/relaunch#service',
      name: 'Website-Relaunch',
      provider: { '@id': 'https://pixelcraft-media.de/#organization' },
      description:
        'Professioneller Website-Relaunch ohne SEO-Ranking-Verlust. Technische Migration, 301-Redirects, Performance-Optimierung für den DACH-Markt.',
      areaServed: ['DE', 'AT', 'CH'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Verliere ich beim Relaunch meine SEO-Rankings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nicht, wenn es richtig gemacht wird. Wir erstellen vor dem Relaunch ein vollständiges URL-Mapping und implementieren lückenlose 301-Weiterleitungen. Bestehende Rankings und Backlinks bleiben erhalten. In den ersten Wochen nach dem Relaunch beobachten wir die Search Console täglich.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was passiert mit meinen bestehenden Inhalten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wir migrieren alle Inhalte vollständig — Texte, Bilder, Metadaten, strukturierte Daten. Was gut rankt, bleibt erhalten und wird optimiert. Was nicht performt, überarbeiten wir gemeinsam.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie lange dauert ein Website-Relaunch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ein durchschnittlicher Relaunch dauert 6–12 Wochen, abhängig von der Größe der bestehenden Site. Die Analyse- und Planungsphase ist dabei besonders wichtig — hier werden Fehler verhindert, bevor sie entstehen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welche technischen Verbesserungen sind typisch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unsere Relaunches verbessern typischerweise die Ladezeit um 60–85%, den Lighthouse-Score auf 95+, Core Web Vitals in den grünen Bereich und die mobile Nutzbarkeit erheblich. Der häufigste Wert: von 7–9s auf unter 1.5s LCP.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist der Unterschied zwischen einem Relaunch und einer normalen Überarbeitung?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine Überarbeitung (Redesign) ändert das Aussehen — ein Relaunch ist ein strategischer Neuaufbau. Wir analysieren, was die bestehende Site leistet und was nicht, und bauen dann eine neue technische und inhaltliche Basis — mit voller SEO-Sicherheit.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://pixelcraft-media.de' },
        { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://pixelcraft-media.de/leistungen' },
        { '@type': 'ListItem', position: 3, name: 'Website-Relaunch', item: 'https://pixelcraft-media.de/leistungen/relaunch' },
      ],
    },
  ],
}

/* ============================================================
   DATA
   ============================================================ */
const FEATURES = [
  {
    icon: '⟳',
    title: 'SEO-sichere Migration',
    body: 'Vollständiges URL-Mapping, lückenlose 301-Weiterleitungen, Backlink-Erhalt. Kein einziges Ranking geht verloren — wenn wir es richtig machen, verbessern sich die meisten.',
  },
  {
    icon: '⚡',
    title: 'Performance-Sprung',
    body: 'Von träge zu blitzschnell. Unsere Relaunches erzielen durchschnittlich 60–85% Ladezeit-Reduktion. 7.8s → 1.1s ist keine Ausnahme — es ist unser Standard.',
  },
  {
    icon: '◎',
    title: 'Strategischer Neuaufbau',
    body: 'Kein Redesign ohne Analyse. Wir bewerten was funktioniert, was nicht — und bauen dann gezielt eine neue technische und inhaltliche Basis.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Audit der bestehenden Site',
    body: 'SEO-Analyse, Performance-Messung, Conversion-Bewertung, Inhalts-Inventar. Wir wissen genau, was wir behalten und was wir verbessern müssen.',
  },
  {
    num: '02',
    title: 'URL-Mapping & Redirects',
    body: 'Vollständige Kartierung aller URLs, Planung der neuen Seitenstruktur, Redirect-Planung — bevor eine Zeile Code geschrieben wird.',
  },
  {
    num: '03',
    title: 'Design & Entwicklung',
    body: 'Modernes Design, saubere Codebase, optimierte Performance. Wir bauen auf dem auf, was gut ist — und ersetzen, was nicht funktioniert.',
  },
  {
    num: '04',
    title: 'Launch & Post-Launch-Monitoring',
    body: 'Kontrolliertter Launch, sofortige 301-Aktivierung, tägliches Search Console-Monitoring in den ersten 4 Wochen. Kein Ranking-Drop ohne Reaktion.',
  },
]

const FAQS = [
  {
    q: 'Verliere ich beim Relaunch meine SEO-Rankings?',
    a: 'Nicht, wenn es richtig gemacht wird. Wir erstellen vor dem Relaunch ein vollständiges URL-Mapping und implementieren lückenlose 301-Weiterleitungen. Bestehende Rankings und Backlinks bleiben erhalten. In den ersten Wochen nach dem Relaunch beobachten wir die Search Console täglich.',
  },
  {
    q: 'Was passiert mit meinen bestehenden Inhalten?',
    a: 'Wir migrieren alle Inhalte vollständig — Texte, Bilder, Metadaten, strukturierte Daten. Was gut rankt, bleibt erhalten und wird optimiert. Was nicht performt, überarbeiten wir gemeinsam.',
  },
  {
    q: 'Wie lange dauert ein Website-Relaunch?',
    a: 'Ein durchschnittlicher Relaunch dauert 6–12 Wochen, abhängig von der Größe der bestehenden Site. Die Analyse- und Planungsphase ist dabei besonders wichtig — hier werden Fehler verhindert, bevor sie entstehen.',
  },
  {
    q: 'Welche technischen Verbesserungen sind typisch?',
    a: 'Unsere Relaunches verbessern typischerweise die Ladezeit um 60–85%, den Lighthouse-Score auf 95+, Core Web Vitals in den grünen Bereich und die mobile Nutzbarkeit erheblich. Der häufigste Wert: von 7–9s auf unter 1.5s LCP.',
  },
  {
    q: 'Was ist der Unterschied zwischen einem Relaunch und einer normalen Überarbeitung?',
    a: 'Eine Überarbeitung (Redesign) ändert das Aussehen — ein Relaunch ist ein strategischer Neuaufbau. Wir analysieren, was die bestehende Site leistet und was nicht, und bauen dann eine neue technische und inhaltliche Basis — mit voller SEO-Sicherheit.',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function RelaunchPage() {
  return (
    <>
      <Script id="relaunch-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main>
        {/* ── HERO ── */}
        <section
          style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center', padding: 'clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 8vw, 6rem)', overflow: 'hidden' }}
          aria-label="Relaunch Hero"
        >
          <div aria-hidden="true" style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '80vw', height: '80vw', maxWidth: 900, borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(255,77,0,0.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative' }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: '2.5rem' }}>
              <ol style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Leistungen', href: '/leistungen' },
                  { label: 'Website-Relaunch', href: '/leistungen/relaunch' },
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

            {/* Hook-Stat */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem',
                padding: '0.6rem 1.25rem',
                border: '1px solid var(--border-visible)',
                borderRadius: 100,
                background: 'var(--bg-surface)',
              }}
            >
              <span style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.1rem', color: 'var(--orange-400)', fontWeight: 500 }}>7.8s → 1.1s</span>
              <span style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ladezeit nach Relaunch</span>
            </div>

            <h1
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(3.5rem, 9vw, 10rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 0.92, letterSpacing: '-0.01em', marginBottom: '2rem', maxWidth: '12ch' }}
            >
              Relaunch{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--orange-400)' }}>ohne Risiko.</em>
            </h1>

            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '52ch', marginBottom: '3rem' }}>
              Wir analysieren was funktioniert, behalten SEO-Werte und bauen neu —
              schneller, konvertierender, moderner. Ohne Ranking-Verlust.
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
            <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '1.5rem' }}>Relaunch mit Methode.</h2>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '60ch', marginBottom: '5rem' }}>
              Kein Relaunch ohne vollständiges Audit. Wir wissen, bevor wir anfangen,
              was wir behalten und was wir verbessern — und sichern dabei jeden Ranking-Punkt.
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
                { stat: '7.8s → 1.1s', label: 'Ladezeit-Reduktion', note: 'Durchschnittlicher Wert nach Relaunch auf Next.js — gemessen mit Lighthouse.' },
                { stat: '+180%', label: 'mehr organische Besucher', note: '6 Monate nach Relaunch — ohne zusätzliche SEO-Maßnahmen.' },
                { stat: '0 Rankings', label: 'verloren', note: 'Durch lückenloses URL-Mapping und 301-Redirects bleiben bestehende Rankings erhalten.' },
              ].map((item) => (
                <div key={item.stat} style={{ background: 'var(--bg-surface)', padding: '3rem 2.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: 'clamp(2rem, 4vw, 4.5rem)', fontWeight: 300, color: 'var(--orange-400)', lineHeight: 1, marginBottom: '0.5rem' }}>{item.stat}</div>
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
              Bereit für den Neustart?
            </h2>
            <p style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif', fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Kostenloses Site-Audit inklusive. Wir analysieren eure bestehende Website
              und zeigen konkret, welches Potenzial ein Relaunch freisetzen würde.
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
