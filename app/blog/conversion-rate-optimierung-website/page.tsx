import Script from 'next/script'
import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'
import Image from 'next/image'

/* ============================================================
   METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'Conversion Rate Optimierung Website: 12 Hebel die wirken | PixelCraft Media',
  description:
    '12 bewährte Conversion-Optimierungen für Websites, getestet an 47 Projekten. CRO-Checkliste, konkrete Beispiele, messbare Ergebnisse. Kein Fluff.',
  alternates: { canonical: '/blog/conversion-rate-optimierung-website' },
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://pixelcraft-media.de/blog/conversion-rate-optimierung-website',
    siteName: 'PixelCraft Media',
    title: 'Conversion Rate Optimierung Website: 12 Hebel die wirken | PixelCraft Media',
    description:
      '12 bewährte CRO-Maßnahmen, getestet an 47 Projekten. Alle mit messbaren Ergebnissen.',
    publishedTime: '2026-03-05T08:00:00Z',
    authors: ['PixelCraft Media'],
  },
}

/* ============================================================
   JSON-LD
   ============================================================ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://pixelcraft-media.de/blog/conversion-rate-optimierung-website#article',
  headline: 'Conversion Rate Optimierung: 12 Hebel, die wirklich wirken',
  description:
    '12 bewährte Conversion-Optimierungen für Websites, getestet an 47 Projekten. CRO-Checkliste, konkrete Beispiele, messbare Ergebnisse.',
  datePublished: '2026-03-05T08:00:00Z',
  dateModified: '2026-03-05T08:00:00Z',
  author: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
    url: 'https://pixelcraft-media.de',
  },
  publisher: {
    '@type': 'Organization',
    name: 'PixelCraft Media',
    logo: {
      '@type': 'ImageObject',
      url: 'https://pixelcraft-media.de/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://pixelcraft-media.de/blog/conversion-rate-optimierung-website',
  },
}

/* ============================================================
   SHARED STYLES
   ============================================================ */
const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant)',
  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
  fontWeight: 400,
  lineHeight: 1.15,
  color: '#f4efe6',
  letterSpacing: '-0.01em',
  margin: '0 0 1rem 0',
  paddingLeft: '1rem',
  borderLeft: '3px solid #ff4d00',
}

const h3Style: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#f4efe6',
  margin: '2rem 0 0.625rem 0',
  lineHeight: 1.35,
}

const pStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '1.05rem',
  color: '#c8c3bb',
  lineHeight: 1.8,
  margin: '0 0 1.25rem 0',
}

const calloutStyle: React.CSSProperties = {
  borderLeft: '3px solid #ff4d00',
  background: '#0f0f18',
  padding: '1rem 1.25rem',
  margin: '1.5rem 0',
  borderRadius: '0 4px 4px 0',
}

const calloutTextStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.9375rem',
  color: '#8a8799',
  lineHeight: 1.7,
  margin: 0,
}

const statBoxStyle: React.CSSProperties = {
  background: '#0f0f18',
  border: '1px solid rgba(244,239,230,0.08)',
  borderRadius: '4px',
  padding: '1rem 1.25rem',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '0.25rem',
}

/* ============================================================
   TABLE OF CONTENTS DATA
   ============================================================ */
const TOC = [
  { id: 'was-ist-cr', label: 'Was ist eine Conversion Rate?' },
  { id: 'warum-websites-scheitern', label: 'Warum Websites scheitern' },
  { id: 'hebel-1-6', label: 'Hebel 1–6' },
  { id: 'hebel-7-12', label: 'Hebel 7–12' },
  { id: 'checkliste', label: 'CRO-Checkliste' },
  { id: 'fazit', label: 'Fazit' },
]

/* ============================================================
   LEVER COMPONENT DATA
   ============================================================ */
const LEVER_BADGES = [
  { label: 'Hebel 1', id: 'hebel-1' },
  { label: 'Hebel 2', id: 'hebel-2' },
  { label: 'Hebel 3', id: 'hebel-3' },
  { label: 'Hebel 4', id: 'hebel-4' },
  { label: 'Hebel 5', id: 'hebel-5' },
  { label: 'Hebel 6', id: 'hebel-6' },
  { label: 'Hebel 7', id: 'hebel-7' },
  { label: 'Hebel 8', id: 'hebel-8' },
  { label: 'Hebel 9', id: 'hebel-9' },
  { label: 'Hebel 10', id: 'hebel-10' },
  { label: 'Hebel 11', id: 'hebel-11' },
  { label: 'Hebel 12', id: 'hebel-12' },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function ConversionRatePage() {
  return (
    <>
      <Script id="conversion-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      <main style={{ background: 'var(--bg-base)', minHeight: '100svh' }}>

        {/* ── Article Hero ─────────────────────────────────── */}
        <header
          style={{
            paddingTop: 'clamp(8rem, 14vw, 14rem)',
            paddingBottom: 'clamp(3rem, 5vw, 4rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
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
                    letterSpacing: '0.12em',
                    color: '#8A8799',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799' }} aria-hidden="true">/</li>
              <li>
                <Link
                  href="/blog"
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
                  Blog
                </Link>
              </li>
              <li style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799' }} aria-hidden="true">/</li>
              <li>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#5b4bff',
                  }}
                >
                  Conversion
                </span>
              </li>
            </ol>
          </nav>

          {/* Category + Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#5b4bff',
                background: 'rgba(91,75,255,0.08)',
                border: '1px solid rgba(91,75,255,0.2)',
                borderRadius: '2px',
                padding: '0.2rem 0.5rem',
              }}
            >
              Conversion
            </span>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799' }}>
              11 min Lesezeit
            </span>
            <time
              dateTime="2026-03-05"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799' }}
            >
              5. März 2026
            </time>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 6vw, 6rem)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#f4efe6',
              margin: '0 0 1.5rem 0',
              maxWidth: '900px',
            }}
          >
            Conversion Rate Optimierung:{' '}
            <span style={{ color: '#ff4d00' }}>12 Hebel, die wirklich wirken</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: '#8a8799',
              lineHeight: 1.65,
              maxWidth: '620px',
              margin: 0,
            }}
          >
            Die meisten Websites lassen 90% ihrer Besucher ohne Handlung gehen.
            Diese 12 Optimierungen haben wir bei 47 Projekten getestet — alle
            mit messbaren Ergebnissen.
          </p>
        </header>

        {/* ── Hero image ───────────────────────────────────── */}
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            paddingBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '21/9',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(244,239,230,0.06)',
            }}
          >
            <Image
              src="/pictures/blog/03_blog-conversion-funnel.png"
              alt="Conversion Rate Optimierung — Funnel Visualisierung"
              fill
              sizes="(max-width: 768px) 100%, 1400px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>

        {/* ── Divider ──────────────────────────────────────── */}
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          }}
        >
          <div style={{ height: '1px', background: 'rgba(244,239,230,0.06)', marginBottom: 'clamp(3rem, 5vw, 4rem)' }} />
        </div>

        {/* ── Article Body: 2-Column Layout ────────────────── */}
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            paddingBottom: 'clamp(6rem, 10vw, 10rem)',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 720px) minmax(0, 1fr)',
            gap: 'clamp(3rem, 5vw, 5rem)',
            alignItems: 'start',
          }}
        >
          {/* ── Main Article ─────────────────────────────── */}
          <article aria-label="Artikel: Conversion Rate Optimierung">

            {/* ─── Section 1: Was ist CR? ───────────────── */}
            <section id="was-ist-cr" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Was ist eine Conversion Rate — und was ist "gut"?</h2>

              <p style={pStyle}>
                Die Conversion Rate ist die einfachste und gleichzeitig wichtigste Kennzahl
                für den Erfolg einer Website. Die Formel ist schlicht:
              </p>

              <div
                style={{
                  background: '#0f0f18',
                  border: '1px solid rgba(244,239,230,0.08)',
                  borderRadius: '4px',
                  padding: '1.25rem 1.5rem',
                  margin: '1rem 0 1.5rem 0',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                    fontWeight: 400,
                    color: '#f4efe6',
                    margin: 0,
                  }}
                >
                  CR = (Conversions ÷ Besucher) × 100
                </p>
              </div>

              <p style={pStyle}>
                Wenn 1000 Besucher auf deiner Website sind und 25 davon eine Anfrage stellen,
                hast du eine Conversion Rate von 2,5%. Klingt wenig — ist aber tatsächlich
                leicht über dem Branchendurchschnitt.
              </p>

              {/* Stats Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
                  gap: '1rem',
                  margin: '1.5rem 0',
                }}
              >
                <div style={statBoxStyle}>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '2rem',
                      fontWeight: 400,
                      color: '#f4efe6',
                      lineHeight: 1,
                    }}
                  >
                    2,35%
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      color: '#8A8799',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Durchschnitt
                  </span>
                </div>
                <div style={statBoxStyle}>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '2rem',
                      fontWeight: 400,
                      color: '#ff4d00',
                      lineHeight: 1,
                    }}
                  >
                    5,31%
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      color: '#8A8799',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Top 25%
                  </span>
                </div>
                <div style={statBoxStyle}>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '2rem',
                      fontWeight: 400,
                      color: '#ff4d00',
                      lineHeight: 1,
                    }}
                  >
                    11%+
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      color: '#8A8799',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    Top 10%
                  </span>
                </div>
              </div>

              <p style={pStyle}>
                Diese Zahlen stammen aus einer Analyse von über 14.000 Landing Pages durch
                WordStream. Was sie verdeutlichen: zwischen einer durchschnittlichen und einer
                top-performenden Website liegt ein Faktor von fast 5. Mit anderen Worten:
                Bei gleichem Traffic kann eine optimierte Website viermal mehr Leads oder
                Verkäufe generieren. Das ist der Grund, warum Conversion Rate Optimierung
                (CRO) für wachstumsorientierte Unternehmen keine Option, sondern eine
                Notwendigkeit ist.
              </p>
            </section>

            {/* ─── Section 2: Warum Websites scheitern ─── */}
            <section id="warum-websites-scheitern" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Warum die meisten Websites scheitern</h2>

              <p style={pStyle}>
                In 47 Projekten haben wir immer wieder dieselben drei fundamentalen Probleme
                identifiziert — unabhängig von Branche, Budget und Unternehmensgröße:
              </p>

              <h3 style={h3Style}>Problem 1: Die Botschaft ist zu unklar</h3>
              <p style={pStyle}>
                Ein Besucher entscheidet in den ersten 3 Sekunden, ob er auf einer Seite
                bleibt oder sie verlässt. In dieser Zeit muss er verstehen: Was bietet diese
                Seite? Für wen ist das? Warum sollte ich mich hier und nicht woanders melden?
                Die meisten Websites beantworten diese Fragen nicht klar genug — oder gar
                nicht. Sie beginnen mit "Willkommen auf unserer Website" oder mit dem
                Firmennamen, statt sofort den Nutzen zu kommunizieren.
              </p>

              <h3 style={h3Style}>Problem 2: Es gibt zu viele Optionen</h3>
              <p style={pStyle}>
                Das Hick&apos;sche Gesetz besagt: Je mehr Optionen ein Mensch hat, desto länger
                braucht er für eine Entscheidung. Und je länger er braucht, desto
                wahrscheinlicher trifft er gar keine. Websites, die sieben verschiedene
                CTAs auf einer Seite haben, fünf verschiedene Produkte gleichzeitig
                anbieten und den Nutzer mit Wahlmöglichkeiten überwältigen — diese Websites
                konvertieren schlecht. Weniger ist mehr. Immer.
              </p>

              <h3 style={h3Style}>Problem 3: Vertrauen wurde nicht aufgebaut</h3>
              <p style={pStyle}>
                Menschen kaufen von Menschen und Marken, denen sie vertrauen. Online ist
                Vertrauen noch schwerer zu gewinnen, weil persönlicher Kontakt fehlt.
                Websites ohne erkennbare Social Proof-Elemente, ohne echte Referenzen,
                ohne erkennbare Persönlichkeit und mit generischen Stock-Fotos signalisieren:
                Hier steckt kein echtes Unternehmen dahinter. Das Ergebnis ist Absprung
                statt Conversion.
              </p>

              <div style={calloutStyle}>
                <p style={calloutTextStyle}>
                  <strong style={{ color: '#f4efe6', display: 'block', marginBottom: '0.25rem' }}>
                    Die gute Nachricht:
                  </strong>
                  Alle drei Probleme sind lösbar. Und die 12 folgenden Hebel adressieren
                  sie systematisch — von der ersten Sekunde beim Seitenaufruf bis zum
                  letzten Klick auf den CTA-Button.
                </p>
              </div>
            </section>

            {/* ─── Section 3: Hebel 1–6 ─────────────────── */}
            <section id="hebel-1-6" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Die 12 Hebel: Teil 1 (Hebel 1–6)</h2>

              {/* Hebel 1 */}
              <div id="hebel-1" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 1
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>Above-Fold-Optimierung</h3>
                </div>

                <p style={pStyle}>
                  Der "Above-Fold-Bereich" ist alles, was ein Besucher sieht, ohne scrollen
                  zu müssen. Das ist der wichtigste Bereich einer jeden Website — denn wenn
                  er nicht sofort überzeugt, scrollt der Besucher gar nicht erst weiter.
                  Der primäre Call-to-Action muss im Above-Fold sichtbar sein, ohne
                  dass der Nutzer irgendetwas tun muss.
                </p>
                <p style={pStyle}>
                  In der Praxis sehen wir immer wieder, dass der CTA "unter" dem Fold
                  liegt — oft weil eine große Hero-Animation oder ein überdimensioniertes
                  Bild den Platz einnimmt. Das Ergebnis: Nur Nutzer, die schon wissen,
                  was sie wollen, scrollen bis zum CTA. Alle anderen springen ab.
                  Konkrete Maßnahme: Reduziere die Hero-Höhe auf maximal 90% der Viewport-
                  Höhe und stelle sicher, dass der primäre CTA-Button ohne Scrollen
                  erreichbar ist — auf Desktop UND auf einem durchschnittlichen Smartphone.
                </p>
              </div>

              {/* Hebel 2 */}
              <div id="hebel-2" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 2
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>Value Proposition schärfen</h3>
                </div>

                <p style={pStyle}>
                  Deine Value Proposition beantwortet drei Fragen in einem Satz: Was bietest
                  du an? Für wen? Und was macht dich besser als die Alternative? Die meisten
                  Websites machen den Fehler, allgemeine Versprechen zu machen — "Qualität",
                  "Zuverlässigkeit", "Kompetenz". Diese Adjektive sagen nichts.
                </p>
                <p style={pStyle}>
                  Teste stattdessen konkrete, spezifische Value Propositions. Statt
                  "Wir erstellen professionelle Websites" lieber "Wir bauen Websites, die
                  Ø +280% mehr Anfragen generieren — mit 90 Tagen Laufzeit oder Geld zurück."
                  Das ist spezifisch, messbar und risikoreduzierend. In unseren A/B-Tests
                  haben spezifische Value Propositions die Conversion Rate regelmäßig um
                  30–60% verbessert.
                </p>
              </div>

              {/* Hebel 3 */}
              <div id="hebel-3" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 3
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>Social Proof — aber richtig</h3>
                </div>

                <p style={pStyle}>
                  Social Proof funktioniert — aber nur, wenn er glaubwürdig ist. "Tolle
                  Zusammenarbeit, sehr empfehlenswert! — Max M." überzeugt niemanden.
                  Echter Social Proof hat drei Elemente: ein echtes Foto, einen vollständigen
                  Namen mit Titel und Unternehmen, und ein konkretes Ergebnis.
                </p>
                <p style={pStyle}>
                  Das Muster, das funktioniert: "Wir haben mit PixelCraft Media unsere
                  Website in 8 Wochen relauncht. In den ersten 3 Monaten danach haben sich
                  unsere Anfragen verdreifacht." — Thomas Berger, Geschäftsführer, Berger
                  Maschinenbau GmbH. Zahlen, Timeframes, echte Personen. Das ist überzeugend.
                  Außerdem: Zeige Social Proof so früh wie möglich auf der Seite, nicht erst
                  ganz unten im Footer-Bereich.
                </p>
              </div>

              {/* Hebel 4 */}
              <div id="hebel-4" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 4
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>Formular-Optimierung</h3>
                </div>

                <p style={pStyle}>
                  Jedes zusätzliche Formularfeld kostet dich Conversions. Das ist keine
                  Theorie, das ist Datenlage aus tausenden A/B-Tests. Eine klassische Studie
                  von Formstack zeigt: Formulare mit 3 Feldern haben eine durchschnittliche
                  Conversion Rate von 25%. Formulare mit 6+ Feldern? Unter 15%. Das sind 40%
                  weniger Conversions — für dieselbe Anzahl von Besuchern.
                </p>
                <p style={pStyle}>
                  Starte radikal: Welche Informationen brauchst du wirklich für den ersten
                  Kontakt? Name und E-Mail reichen für die meisten Dienstleistungs-Unternehmen.
                  Telefonnummer, Unternehmensgröße, Budget, Projektbeschreibung — das alles
                  kannst du im ersten Gespräch erfragen. Qualifiziere lieber durch Gespräche
                  als durch Formulare. Teste das: Erstelle eine Version deines Formulars mit
                  nur 2 Feldern und vergleiche sie mit deiner aktuellen Version.
                </p>
              </div>

              {/* Hebel 5 */}
              <div id="hebel-5" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 5
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>Page Speed — jede Sekunde zählt</h3>
                </div>

                <p style={pStyle}>
                  Wir haben es bereits im Core Web Vitals Artikel besprochen, aber es verdient
                  Wiederholung: Ladezeit ist direkt mit Conversion Rate verknüpft. Eine Amazon-
                  Studie beziffert den Verlust auf 1% Umsatz pro 100ms zusätzlicher Ladezeit.
                  Deloitte hat in einer Analyse von 37 Retail-Websites festgestellt, dass eine
                  0,1-Sekunden-Verbesserung der Ladezeit die Conversion Rate um 8% steigert.
                </p>
                <p style={pStyle}>
                  Für Dienstleister und B2B-Websites gilt: Wenn deine Seite auf Mobilgeräten
                  länger als 3 Sekunden braucht, verlässt sie die Hälfte deiner Besucher.
                  Dieser Traffic ist bereits bezahlt — ob durch SEO-Aufwand, Google Ads oder
                  organische Reichweite. Jeder Besucher, den du durch Ladezeit verlierst, ist
                  verschwendetes Budget.
                </p>
              </div>

              {/* Hebel 6 */}
              <div id="hebel-6" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 6
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>Mobile-First UX</h3>
                </div>

                <p style={pStyle}>
                  Mehr als 60% des Web-Traffics kommt heute von mobilen Geräten — und in
                  vielen Branchen ist es deutlich mehr. Trotzdem werden viele Websites
                  primär auf dem Desktop designed und dann "für Mobil angepasst". Das ist
                  der falsche Ansatz.
                </p>
                <p style={pStyle}>
                  Mobile-First bedeutet: Dein Kontaktformular muss mit dem Daumen erreichbar
                  sein. CTAs müssen mindestens 44x44px groß sein (Apple Human Interface
                  Guidelines). Text muss ohne Zoom lesbar sein (mindestens 16px). Navigation
                  muss auf kleinen Bildschirmen funktionieren, ohne das Design zu ruinieren.
                  In der Praxis: Teste deine Seite monatlich auf einem echten Smartphone —
                  nicht nur im Chrome DevTools Emulator. Der Unterschied ist oft ernüchternd.
                </p>
              </div>
            </section>

            {/* ─── Section 4: Hebel 7–12 ────────────────── */}
            <section id="hebel-7-12" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Die 12 Hebel: Teil 2 (Hebel 7–12)</h2>

              {/* Hebel 7 */}
              <div id="hebel-7" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 7
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>Trust-Signale systematisch einsetzen</h3>
                </div>

                <p style={pStyle}>
                  Vertrauen entsteht nicht durch einen einzigen großen Vertrauensbeweis,
                  sondern durch das Summieren vieler kleiner Signale. Ein SSL-Zertifikat
                  (HTTPS) ist heute das Minimum — ohne es zeigen Browser Warnungen, die
                  Besucher sofort abschrecken. Darüber hinaus: echte Firmenadresse und
                  Telefonnummer im Footer, Impressum und Datenschutzerklärung die leicht
                  erreichbar sind, erkennbare Team-Fotos statt Stock-Fotos und Logos von
                  Medien, in denen du erwähnt wurdest oder von bekannten Kunden.
                </p>
                <p style={pStyle}>
                  Besonders wirkungsvoll: Auszeichnungen, Zertifizierungen und Mitgliedschaften
                  in Branchenverbänden. Selbst die Anzahl der Projekte oder Jahre Erfahrung —
                  wenn sie mit konkreten Zahlen belegt sind — bauen signifikant Vertrauen auf.
                  Platziere Trust-Signale nahe an Conversion-Elementen: ein "SSL gesichert"
                  oder "47+ Projekte" direkt unter dem Kontaktformular kann die Einreichungsrate
                  um 10–20% erhöhen.
                </p>
              </div>

              {/* Hebel 8 */}
              <div id="hebel-8" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 8
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>CTA-Texte die wirklich konvertieren</h3>
                </div>

                <p style={pStyle}>
                  "Absenden", "Senden", "Anfragen" — diese CTA-Texte sagen dem Nutzer was
                  er tun soll, aber nicht was er bekommt. Der Unterschied zwischen "Absenden"
                  und "Kostenlose Beratung anfragen" kann laut mehreren Studien 10–25% mehr
                  Conversions bedeuten. Noch besser: CTAs die den nächsten Schritt konkret
                  beschreiben — "Jetzt kostenlosen Website-Check erhalten" statt "Kontakt
                  aufnehmen".
                </p>
                <p style={pStyle}>
                  Weitere bewährte CTA-Muster: Risikoreduzierung hinzufügen ("kostenlos",
                  "unverbindlich", "keine Kreditkarte"), Dringlichkeit ohne Fake-Scarcity
                  ("3 Projektslots frei im Mai"), Personalisierung wenn möglich ("Für Ihr
                  Unternehmen analysieren"). Teste immer mindestens zwei CTA-Varianten
                  gegeneinander — kleine Textänderungen können überraschend große Auswirkungen
                  haben.
                </p>
              </div>

              {/* Hebel 9 */}
              <div id="hebel-9" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 9
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>Exit-Intent — ethisch, nicht nervend</h3>
                </div>

                <p style={pStyle}>
                  Exit-Intent-Technologie erkennt, wenn ein Nutzer die Seite verlassen will
                  (Mausbewegung zur Adressleiste oder zum Tab) und zeigt dann ein letztes
                  Angebot. Richtig eingesetzt kann das 10–15% der "verlorenen" Besucher
                  zurückgewinnen. Falsch eingesetzt — mit aufdringlichen Popups direkt beim
                  Seitenaufruf — ruiniert es die User Experience und kostet Vertrauen.
                </p>
                <p style={pStyle}>
                  Ethische Exit-Intent-Implementierung: Zeige das Overlay erst nach mindestens
                  30 Sekunden Verweildauer oder nach dem Erreichen von 50% Scroll-Tiefe. Das
                  Angebot muss einen echten Mehrwert haben — ein kostenloser Download, eine
                  Checkliste, ein Rabattcode. "Warte! Verlass uns nicht!" ohne konkreten
                  Mehrwert funktioniert nicht und schadet dem Markenbild.
                </p>
              </div>

              {/* Hebel 10 */}
              <div id="hebel-10" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 10
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>Live Chat — Timing ist alles</h3>
                </div>

                <p style={pStyle}>
                  Live Chat oder Chat-Widgets können die Conversion Rate signifikant erhöhen —
                  aber nur, wenn das Timing stimmt. Ein Chat-Widget, das nach 3 Sekunden mit
                  "Kann ich Ihnen helfen?" aufpoppt, ist nervend und wird sofort geschlossen.
                  Ein Chat-Widget, das erst nach 90 Sekunden erscheint, wenn der Nutzer also
                  bereits Interesse gezeigt hat, ist hilfreich.
                </p>
                <p style={pStyle}>
                  Für B2B-Dienstleistungen: Setze das Chat-Widget auf Seiten ein, auf denen
                  Kaufentscheidungen getroffen werden — Pricing-Seite, Kontaktseite, lange
                  Service-Beschreibungen. Trigger-basierte Nachrichten — "Du liest gerade
                  über unsere Webdesign-Pakete. Hast du eine konkrete Frage?" — konvertieren
                  deutlich besser als generische Grüße. Wichtig: Wenn du Live Chat verwendest,
                  muss auch wirklich jemand verfügbar sein. Unerreichbarer Live Chat schadet
                  mehr als keiner.
                </p>
              </div>

              {/* Hebel 11 */}
              <div id="hebel-11" style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 11
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>FAQ-Block zur Einwandbehandlung</h3>
                </div>

                <p style={pStyle}>
                  Ein FAQ-Bereich ist keine Serviceleistung — er ist ein Verkaufswerkzeug.
                  Bevor ein Interessent eine Anfrage stellt, hat er Fragen und Einwände.
                  "Wie lange dauert ein Projekt?", "Kann ich meine Website auch selbst
                  bearbeiten?", "Was kostet das?", "Ich hatte schon mal eine schlechte
                  Erfahrung mit einer Agentur — was macht ihr anders?". Wenn diese Fragen
                  nicht auf der Website beantwortet werden, bleiben sie als Hinderungsgrund
                  und verhindern die Conversion.
                </p>
                <p style={pStyle}>
                  Sammel die häufigsten Fragen und Einwände aus echten Kundengesprächen —
                  nicht was du denkst, was Kunden fragen, sondern was sie wirklich fragen.
                  Platziere den FAQ-Block kurz vor dem primären CTA, damit Einwände behandelt
                  sind, bevor der Nutzer die Entscheidung trifft. Und für SEO: FAQ-Blöcke
                  mit korrektem JSON-LD Schema können als Rich Snippets in den Suchergebnissen
                  erscheinen.
                </p>
              </div>

              {/* Hebel 12 */}
              <div id="hebel-12" style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#ff4d00',
                      background: 'rgba(255,77,0,0.08)',
                      border: '1px solid rgba(255,77,0,0.2)',
                      borderRadius: '2px',
                      padding: '0.15rem 0.5rem',
                    }}
                  >
                    Hebel 12
                  </span>
                  <h3 style={{ ...h3Style, margin: 0 }}>A/B Testing Infrastruktur aufbauen</h3>
                </div>

                <p style={pStyle}>
                  Die 11 vorherigen Hebel sind Hypothesen — bewährt, getestet und mit hoher
                  Wahrscheinlichkeit wirksam. Aber "hohe Wahrscheinlichkeit" ist keine
                  Gewissheit. Was bei 47 anderen Websites funktioniert hat, muss nicht
                  zwingend bei deiner Website in deiner Branche mit deiner Zielgruppe
                  funktionieren. A/B Testing eliminiert dieses Rätselraten.
                </p>
                <p style={pStyle}>
                  Die einfachste A/B Test-Infrastruktur: Google Optimize (oder Vercel Edge
                  Middleware für Next.js-Projekte) für das Split-Testing, Google Analytics 4
                  für die Conversion-Messung und eine klare Hypothese für jeden Test. Wichtig:
                  Teste immer nur eine Variable gleichzeitig — entweder den CTA-Text oder
                  die Hero-Überschrift oder die Formularfelder. Nie alles auf einmal. Und
                  lass Tests mindestens 2 Wochen laufen, damit du statistisch signifikante
                  Daten bekommst. Entscheidungen auf Basis von 50 Conversions sind keine
                  Datenbasis.
                </p>

                <div style={calloutStyle}>
                  <p style={calloutTextStyle}>
                    <strong style={{ color: '#f4efe6', display: 'block', marginBottom: '0.25rem' }}>
                      Die compounding Wirkung von CRO:
                    </strong>
                    Jede Verbesserung baut auf der vorherigen auf. Wenn du 12 Hebel
                    optimierst und jeder bringt 10% mehr Conversions, ist das Ergebnis
                    nicht +120%, sondern +214% — durch den Compounding-Effekt.
                    Das ist die Stärke systematischer CRO.
                  </p>
                </div>
              </div>
            </section>

            {/* ─── Section 5: Checkliste ────────────────── */}
            <section id="checkliste" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>CRO-Checkliste: Die 12 Punkte auf einen Blick</h2>

              <p style={pStyle}>
                Nutze diese Checkliste für einen ersten Audit deiner Website.
                Bearbeite sie gemeinsam mit deinem Team — und sei ehrlich.
              </p>

              <div
                style={{
                  background: '#0f0f18',
                  border: '1px solid rgba(244,239,230,0.08)',
                  borderRadius: '4px',
                  padding: '1.5rem',
                  margin: '1.5rem 0',
                }}
              >
                {[
                  'Above Fold: Ist der primäre CTA ohne Scrollen sichtbar — auf Desktop UND Mobilgerät?',
                  'Value Proposition: Versteht ein fremder Mensch in 5 Sekunden, was ihr anbietet und für wen?',
                  'Social Proof: Enthält jedes Testimonial ein echtes Foto, vollständigen Namen und ein konkretes Ergebnis?',
                  'Formular: Fragt das Kontaktformular nur die absolut notwendigen Informationen ab (Ziel: max. 3 Felder)?',
                  'Page Speed: Ist der Lighthouse-Score mobil über 80? Ladezeit unter 3 Sekunden auf 4G?',
                  'Mobile UX: Sind alle Buttons und Links mit dem Daumen erreichbar und mindestens 44x44px groß?',
                  'Trust-Signale: Stehen echte Adresse, Telefonnummer, Impressum und SSL-Zertifikat auf der Seite?',
                  'CTA-Text: Beschreibt der CTA-Text, was der Nutzer bekommt — statt nur, was er tun soll?',
                  'Exit-Intent: Ist ein Exit-Intent-Overlay eingebaut (erst nach 30s Verweildauer aktiv)?',
                  'Live Chat: Ist ein Chat-Widget auf Conversion-Seiten vorhanden und wird es aktiv betreut?',
                  'FAQ: Beantwortet ein FAQ-Block die 5 häufigsten Einwände, direkt vor dem primären CTA?',
                  'A/B Testing: Ist eine Test-Infrastruktur eingerichtet und läuft aktuell mindestens ein Test?',
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      padding: '0.625rem 0',
                      borderBottom:
                        i < 11 ? '1px solid rgba(244,239,230,0.04)' : 'none',
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: '1.5rem',
                        height: '1.5rem',
                        borderRadius: '3px',
                        background: 'rgba(255,77,0,0.08)',
                        border: '1px solid rgba(255,77,0,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '0.1rem',
                      }}
                      aria-hidden="true"
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#ff4d00',
                        }}
                      >
                        {i + 1}
                      </span>
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9375rem',
                        color: '#c8c3bb',
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── Section 6: Fazit ─────────────────────── */}
            <section id="fazit" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Fazit</h2>

              <p style={pStyle}>
                Conversion Rate Optimierung ist kein einmaliges Projekt. Es ist ein
                kontinuierlicher Prozess aus Messen, Hypothesen bilden, Testen und
                Implementieren. Die 12 Hebel in diesem Artikel sind bewährt — sie haben
                bei 47 Projekten mit messbaren Ergebnissen funktioniert. Aber sie sind
                ein Startpunkt, kein Endzustand.
              </p>

              <p style={pStyle}>
                Beginne mit den Hebeln, die den schnellsten Impact haben: Above-Fold-
                Optimierung, Value Proposition und Social Proof können in Tagen umgesetzt
                werden und zeigen oft sofortige Wirkung. Formular-Vereinfachung und CTA-Text-
                Optimierung folgen. Die komplexeren Maßnahmen — A/B Testing, Exit-Intent,
                Live Chat — brauchen mehr Zeit und Infrastruktur, multiplizieren aber die
                Wirkung der einfacheren Optimierungen.
              </p>

              <p style={pStyle}>
                Das wichtigste Prinzip: Entscheide auf Basis von Daten, nicht auf Basis von
                Meinungen. Was dein Bauchgefühl sagt, was die Farbe des CTA-Buttons sein
                sollte, ist irrelevant. Was deine Nutzer tatsächlich klicken — das ist alles.
              </p>
            </section>

            {/* ─── Autor Bio Card ───────────────────────── */}
            <div
              style={{
                background: '#0f0f18',
                border: '1px solid rgba(244,239,230,0.08)',
                borderRadius: '4px',
                padding: '1.75rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                alignItems: 'flex-start',
                marginTop: '3rem',
              }}
            >
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
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
                <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', color: '#ff4d00' }}>P</span>
              </div>

              <div style={{ flex: 1, minWidth: '200px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#f4efe6',
                    margin: '0 0 0.25rem 0',
                  }}
                >
                  PixelCraft Media
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    color: '#8A8799',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    margin: '0 0 0.75rem 0',
                  }}
                >
                  Webdesign Agentur
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9375rem',
                    color: '#8a8799',
                    lineHeight: 1.65,
                    margin: '0 0 1.25rem 0',
                  }}
                >
                  Wir bauen Websites, die Besucher in Kunden verwandeln —
                  mit Handwerk bis ins letzte Pixel. Ø +280% mehr Anfragen
                  in 47 Projekten.
                </p>

                <Link
                  href="/kontakt"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: '#ff4d00',
                    color: '#f4efe6',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    padding: '0.625rem 1.25rem',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    transition: 'background 0.2s ease',
                  }}
                >
                  Website kostenlos analysieren →
                </Link>
              </div>
            </div>

            {/* ─── Back to Blog ─────────────────────────── */}
            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(244,239,230,0.06)' }}>
              <Link
                href="/blog"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#8A8799',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                ← Alle Artikel
              </Link>
            </div>

          </article>

          {/* ── Sticky Sidebar ───────────────────────────── */}
          <aside
            aria-label="Inhaltsverzeichnis"
            style={{
              position: 'sticky',
              top: '80px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Table of Contents */}
            <div
              style={{
                background: '#0f0f18',
                border: '1px solid rgba(244,239,230,0.06)',
                borderRadius: '4px',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#ff4d00',
                  margin: '0 0 1rem 0',
                }}
              >
                Inhalt
              </p>
              <nav aria-label="Seitennavigation">
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {TOC.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.8125rem',
                          color: '#8A8799',
                          textDecoration: 'none',
                          lineHeight: 1.5,
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.5rem',
                          padding: '0.25rem 0',
                          transition: 'color 0.2s ease',
                        }}
                      >
                        <span style={{ color: '#2a2838', fontSize: '0.75rem', flexShrink: 0, fontVariantNumeric: 'tabular-nums' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Quick Jump: Hebel */}
            <div
              style={{
                background: '#0f0f18',
                border: '1px solid rgba(244,239,230,0.06)',
                borderRadius: '4px',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#8A8799',
                  margin: '0 0 0.75rem 0',
                }}
              >
                Zu Hebel springen
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {LEVER_BADGES.map((badge) => (
                  <a
                    key={badge.id}
                    href={`#${badge.id}`}
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      color: '#8A8799',
                      background: 'rgba(244,239,230,0.04)',
                      border: '1px solid rgba(244,239,230,0.08)',
                      borderRadius: '3px',
                      padding: '0.2rem 0.5rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease, border-color 0.2s ease',
                    }}
                  >
                    {badge.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <div
              style={{
                background: 'rgba(255,77,0,0.06)',
                border: '1px solid rgba(255,77,0,0.12)',
                borderRadius: '4px',
                padding: '1.25rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: '#f4efe6',
                  lineHeight: 1.3,
                  margin: '0 0 0.75rem 0',
                }}
              >
                Was ist deine aktuelle Conversion Rate?
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.8125rem',
                  color: '#8a8799',
                  lineHeight: 1.6,
                  margin: '0 0 1rem 0',
                }}
              >
                Wir analysieren deine Website kostenfrei und identifizieren
                die 3 größten Conversion-Barrieren.
              </p>
              <Link
                href="/kontakt"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: '#ff4d00',
                  color: '#f4efe6',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                  padding: '0.625rem 1rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                }}
              >
                Kostenlos analysieren →
              </Link>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </>
  )
}
