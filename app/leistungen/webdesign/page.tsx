import Script from 'next/script'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { Accordion } from '@/components/ui/Accordion'
import type { Metadata } from 'next'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'Webdesign Agentur — Professionelle Websites | PixelCraft Media',
  description:
    'Webdesign Agentur für ambitionierte Unternehmen. Individuelle Websites, die Besucher in Kunden verwandeln. Keine Templates. Lighthouse 95+. DE/AT/CH.',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: { canonical: '/leistungen/webdesign' },
  openGraph: {
    title: 'Webdesign Agentur — Professionelle Websites | PixelCraft Media',
    description:
      'Individuelle Websites, die Besucher in Kunden verwandeln. Keine Templates. Lighthouse 95+.',
    url: 'https://pixelcraft-media.de/leistungen/webdesign',
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
      '@id': 'https://pixelcraft-media.de/leistungen/webdesign#service',
      name: 'Webdesign',
      provider: { '@id': 'https://pixelcraft-media.de/#organization' },
      description:
        'Individuelle Webdesign-Lösungen für ambitionierte Unternehmen in Deutschland, Österreich und der Schweiz. Keine Templates, Lighthouse 95+, conversion-optimiert.',
      areaServed: ['DE', 'AT', 'CH'],
      offers: {
        '@type': 'Offer',
        priceRange: 'Ab €3.500',
        priceCurrency: 'EUR',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was kostet eine professionelle Website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine individuelle Unternehmenswebsite startet bei 3.500 €. E-Commerce-Shops beginnen bei 6.000 €. Der genaue Preis hängt vom Umfang, der Komplexität und den gewünschten Funktionen ab. Wir erstellen nach einem kostenlosen Erstgespräch ein transparentes Festpreisangebot.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie lange dauert die Website-Erstellung?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Eine durchschnittliche Unternehmenswebsite ist in 4–8 Wochen fertig — von Briefing bis Launch. Komplexere Projekte mit vielen Unterseiten oder Sonderfunktionen können 10–14 Wochen dauern. Nach dem Briefing erhalten Sie einen konkreten Zeitplan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Macht ihr auch SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Technisches SEO ist bei uns Standard: saubere URL-Struktur, Sitemap, Schema-Markup, optimierte Meta-Tags, Ladezeiten unter 1.5s LCP. Content-SEO und laufende Keyword-Optimierung bieten wir als separates Modul an.',
          },
        },
        {
          '@type': 'Question',
          name: 'Was ist der Unterschied zu einem Baukastensystem?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Baukastensysteme wie Wix oder Squarespace limitieren euch auf vorhandene Templates, langsame Ladezeiten und eingeschränkte Anpassbarkeit. Wir bauen jede Seite individuell — für eure Marke, euer Ziel, eure Zielgruppe. Das Ergebnis: bessere Performance, höhere Conversions und volle Kontrolle.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bekomme ich Zugang zu meiner eigenen Website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, absolut. Ihr bekommt vollen Zugang zu Code, CMS und Hosting. Nichts ist in einer Black Box eingesperrt. Wir übergeben die Website mit einer Einführung und Dokumentation — ihr könnt Inhalte jederzeit selbst bearbeiten.',
          },
        },
      ],
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
          name: 'Leistungen',
          item: 'https://pixelcraft-media.de/leistungen',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Webdesign',
          item: 'https://pixelcraft-media.de/leistungen/webdesign',
        },
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
    title: 'Kein Template',
    body: 'Jede Seite wird von Grund auf designed und entwickelt — für deine Marke, deine Zielgruppe, dein Ziel. Kein Baukasten. Kein Copy-Paste.',
  },
  {
    icon: '⚡',
    title: 'Performance First',
    body: 'LCP unter 1.5s. Lighthouse 95+. Core Web Vitals im grünen Bereich. Google liebt schnelle Seiten — deine Kunden auch.',
  },
  {
    icon: '◎',
    title: 'Conversion-optimiert',
    body: 'Jedes Element hat einen Grund. CTA-Platzierung, Farbpsychologie, Trust-Signale — alles dient dem Abschluss.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Briefing',
    body: 'Wir lernen euer Unternehmen, eure Ziele und eure Zielgruppe kennen. Kein Standardfragebogen — ein echtes Strategiegespräch.',
  },
  {
    num: '02',
    title: 'Konzept & Wireframes',
    body: 'Seitenstruktur, User Journey, Content-Hierarchie. Bevor ein Pixel gesetzt wird, steht die Strategie.',
  },
  {
    num: '03',
    title: 'Design',
    body: 'High-Fidelity Screens in Figma. Jedes Detail — Typografie, Spacing, Farbpsychologie — bewusst gesetzt.',
  },
  {
    num: '04',
    title: 'Entwicklung',
    body: 'Clean Code, Next.js, TypeScript. SEO-Markup, Accessibility, Performance — von Anfang an eingebaut, nicht nachträglich geflickt.',
  },
  {
    num: '05',
    title: 'Launch',
    body: 'Deployment, Domain-Setup, Analytics-Integration. Wir begleiten den Launch und sind danach für Fragen erreichbar.',
  },
]

const FAQS = [
  {
    q: 'Was kostet eine professionelle Website?',
    a: 'Eine individuelle Unternehmenswebsite startet bei 3.500 €. E-Commerce-Shops beginnen bei 6.000 €. Der genaue Preis hängt vom Umfang, der Komplexität und den gewünschten Funktionen ab. Wir erstellen nach einem kostenlosen Erstgespräch ein transparentes Festpreisangebot.',
  },
  {
    q: 'Wie lange dauert die Website-Erstellung?',
    a: 'Eine durchschnittliche Unternehmenswebsite ist in 4–8 Wochen fertig — von Briefing bis Launch. Komplexere Projekte mit vielen Unterseiten oder Sonderfunktionen können 10–14 Wochen dauern. Nach dem Briefing erhalten Sie einen konkreten Zeitplan.',
  },
  {
    q: 'Macht ihr auch SEO?',
    a: 'Technisches SEO ist bei uns Standard: saubere URL-Struktur, Sitemap, Schema-Markup, optimierte Meta-Tags, Ladezeiten unter 1.5s LCP. Content-SEO und laufende Keyword-Optimierung bieten wir als separates Modul an.',
  },
  {
    q: 'Was ist der Unterschied zu einem Baukastensystem?',
    a: 'Baukastensysteme wie Wix oder Squarespace limitieren euch auf vorhandene Templates, langsame Ladezeiten und eingeschränkte Anpassbarkeit. Wir bauen jede Seite individuell — für eure Marke, euer Ziel, eure Zielgruppe. Das Ergebnis: bessere Performance, höhere Conversions und volle Kontrolle.',
  },
  {
    q: 'Bekomme ich Zugang zu meiner eigenen Website?',
    a: 'Ja, absolut. Ihr bekommt vollen Zugang zu Code, CMS und Hosting. Nichts ist in einer Black Box eingesperrt. Wir übergeben die Website mit einer Einführung und Dokumentation — ihr könnt Inhalte jederzeit selbst bearbeiten.',
  },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function WebdesignPage() {
  return (
    <>
      <Script id="webdesign-ld"
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
          aria-label="Webdesign Hero"
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

          <div
            style={{
              maxWidth: 1280,
              margin: '0 auto',
              width: '100%',
              position: 'relative',
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
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Leistungen', href: '/leistungen' },
                  { label: 'Webdesign', href: '/leistungen/webdesign' },
                ].map((crumb, i, arr) => (
                  <li
                    key={crumb.href}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <a
                      href={crumb.href}
                      aria-current={i === arr.length - 1 ? 'page' : undefined}
                      style={{
                        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                        fontSize: '0.75rem',
                        color:
                          i === arr.length - 1
                            ? 'var(--orange-400)'
                            : 'var(--text-muted)',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {crumb.label}
                    </a>
                    {i < arr.length - 1 && (
                      <span
                        aria-hidden="true"
                        style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}
                      >
                        /
                      </span>
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
              Webdesign,{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  color: 'var(--orange-400)',
                }}
              >
                das verkauft.
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
              Keine Templates. Keine Kompromisse. Jede Website, die wir bauen,
              ist eine individuelle Lösung — optimiert für dein Ziel.
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
          style={{
            padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
            borderTop: '1px solid var(--border-subtle)',
          }}
          aria-label="Was wir tun"
        >
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--orange-500)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1rem',
              }}
            >
              Was wir tun
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
              }}
            >
              Webdesign mit Substanz.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                maxWidth: '60ch',
                marginBottom: '5rem',
              }}
            >
              Wir entwerfen und entwickeln digitale Erlebnisse, die Besucher in
              Kunden verwandeln. Jede Entscheidung — visuell wie technisch — ist
              strategisch begründet.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
                gap: '1px',
                background: 'var(--border-subtle)',
              }}
            >
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  style={{
                    background: 'var(--bg-surface)',
                    padding: '2.5rem',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: '1.5rem',
                      color: 'var(--orange-400)',
                      display: 'block',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {f.icon}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WIE ES FUNKTIONIERT ── */}
        <section
          style={{
            padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)',
          }}
          aria-label="Wie es funktioniert"
        >
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--orange-500)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1rem',
              }}
            >
              Unser Prozess
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 1.05,
                marginBottom: '4rem',
              }}
            >
              Wie es funktioniert.
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
                gap: '2rem',
              }}
            >
              {STEPS.map((step) => (
                <div key={step.num}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: 'var(--orange-500)',
                      letterSpacing: '0.15em',
                      display: 'block',
                      marginBottom: '1rem',
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: 'clamp(1.4rem, 2vw, 1.8rem)',
                      fontWeight: 400,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ERGEBNISSE ── */}
        <section
          style={{
            padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
            borderTop: '1px solid var(--border-subtle)',
          }}
          aria-label="Ergebnisse"
        >
          <div style={{ maxWidth: 1280, margin: '0 auto' }}>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--orange-500)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1rem',
              }}
            >
              Ergebnisse
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 1.05,
                marginBottom: '4rem',
              }}
            >
              Zahlen, die sprechen.
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                gap: '1px',
                background: 'var(--border-subtle)',
              }}
            >
              {[
                {
                  stat: '+280%',
                  label: 'Ø Anfragen-Steigerung',
                  note: 'Durchschnitt über alle Kundenprojekte, 12 Monate nach Launch.',
                },
                {
                  stat: '47+',
                  label: 'gebaute Websites',
                  note: 'Individuelle Lösungen — kein einziges Template dabei.',
                },
                {
                  stat: '95+',
                  label: 'Lighthouse-Score',
                  note: 'Performance, Accessibility, Best Practices — im Durchschnitt.',
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  style={{
                    background: 'var(--bg-surface)',
                    padding: '3rem 2.5rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: 'clamp(3.5rem, 6vw, 6rem)',
                      fontWeight: 300,
                      color: 'var(--orange-400)',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.stat}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.label}
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          style={{
            padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-subtle)',
          }}
          aria-label="Häufige Fragen"
        >
          <div
            style={{
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                color: 'var(--orange-500)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1rem',
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.2rem, 4vw, 4rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 1.05,
                marginBottom: '3rem',
              }}
            >
              Häufige Fragen.
            </h2>
            <Accordion items={FAQS} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          style={{
            padding: 'clamp(4rem, 9vw, 8rem) clamp(1.5rem, 5vw, 4rem)',
            borderTop: '1px solid var(--border-subtle)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
          aria-label="Kontakt aufnehmen"
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '-20%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '70vw',
              height: '70vw',
              maxWidth: 700,
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse at center, rgba(91,75,255,0.08) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(2.8rem, 6vw, 6rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 1,
                marginBottom: '1.5rem',
              }}
            >
              Bereit für eine Website, die verkauft?
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              Kostenloses Erstgespräch. Kein Druck, kein Akquise-Pitch — nur ein
              ehrliches Gespräch darüber, was für euch Sinn ergibt.
            </p>
            <a
              href="/kontakt"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: '#050508',
                background: 'var(--orange-500)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                padding: '1rem 2.5rem',
                borderRadius: 100,
              }}
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
