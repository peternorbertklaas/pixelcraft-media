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
  title: 'Core Web Vitals 2025: Was du wirklich wissen musst | PixelCraft Media',
  description:
    'Google bewertet Websites nach Core Web Vitals. LCP, INP, CLS erklärt — und konkrete Tipps wie du 2025 in den grünen Bereich kommst. Mit Checkliste.',
  alternates: { canonical: '/blog/core-web-vitals-2025' },
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://pixelcraft-media.de/blog/core-web-vitals-2025',
    siteName: 'PixelCraft Media',
    title: 'Core Web Vitals 2025: Was du wirklich wissen musst | PixelCraft Media',
    description:
      'LCP, INP, CLS erklärt — und konkrete Tipps wie du 2025 in den grünen Bereich kommst.',
    publishedTime: '2026-03-20T08:00:00Z',
    authors: ['PixelCraft Media'],
  },
}

/* ============================================================
   JSON-LD
   ============================================================ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://pixelcraft-media.de/blog/core-web-vitals-2025#article',
  headline: 'Core Web Vitals 2025: Was du wirklich wissen musst',
  description:
    'Google bewertet Websites nach Core Web Vitals. LCP, INP, CLS erklärt — und konkrete Tipps wie du 2025 in den grünen Bereich kommst. Mit Checkliste.',
  datePublished: '2026-03-20T08:00:00Z',
  dateModified: '2026-03-20T08:00:00Z',
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
    '@id': 'https://pixelcraft-media.de/blog/core-web-vitals-2025',
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
  margin: '1.75rem 0 0.625rem 0',
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

const codeBlockStyle: React.CSSProperties = {
  background: '#0f0f18',
  border: '1px solid rgba(244,239,230,0.08)',
  borderRadius: '4px',
  padding: '1.25rem 1.5rem',
  margin: '1.5rem 0',
  overflowX: 'auto',
}

const codeStyle: React.CSSProperties = {
  fontFamily: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
  fontSize: '0.875rem',
  color: '#ff6b24',
  lineHeight: 1.7,
  whiteSpace: 'pre',
  display: 'block',
}

const inlineCodeStyle: React.CSSProperties = {
  fontFamily: '"JetBrains Mono", "Fira Code", monospace',
  fontSize: '0.875em',
  color: '#ff4d00',
  background: '#0f0f18',
  padding: '0.1em 0.35em',
  borderRadius: '3px',
  border: '1px solid rgba(255,77,0,0.15)',
}

const metricBadgeStyle = (color: string): React.CSSProperties => ({
  display: 'inline-block',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.1em',
  color: color,
  background: `${color}15`,
  border: `1px solid ${color}30`,
  borderRadius: '2px',
  padding: '0.2rem 0.5rem',
  marginRight: '0.5rem',
  marginBottom: '0.75rem',
})

/* ============================================================
   TABLE OF CONTENTS DATA
   ============================================================ */
const TOC = [
  { id: 'was-sind-cwv', label: 'Was sind Core Web Vitals?' },
  { id: 'die-drei-metriken', label: 'Die drei Metriken erklärt' },
  { id: 'messen', label: 'Wie du sie misst' },
  { id: 'lcp-optimieren', label: 'LCP verbessern (8 Maßnahmen)' },
  { id: 'inp-optimieren', label: 'INP optimieren' },
  { id: 'cls-eliminieren', label: 'CLS eliminieren' },
  { id: 'checkliste', label: 'Checkliste (30 min Audit)' },
  { id: 'fazit', label: 'Fazit' },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function CoreWebVitalsPage() {
  return (
    <>
      <Script id="core-web-vitals-ld"
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
                    color: '#ff4d00',
                  }}
                >
                  Core Web Vitals
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
                color: '#ff4d00',
                background: 'rgba(255,77,0,0.08)',
                border: '1px solid rgba(255,77,0,0.2)',
                borderRadius: '2px',
                padding: '0.2rem 0.5rem',
              }}
            >
              Performance
            </span>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799' }}>
              8 min Lesezeit
            </span>
            <time
              dateTime="2026-03-20"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799' }}
            >
              20. März 2026
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
            Core Web Vitals 2025:{' '}
            <span style={{ color: '#ff4d00' }}>Was du wirklich wissen musst</span>
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
            Google bewertet Websites nach Core Web Vitals. Was sich 2025 geändert hat,
            was wirklich zählt — und wie du deine Seite in den grünen Bereich bekommst.
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
              src="/pictures/blog/02_blog-performance-vortex.png"
              alt="Core Web Vitals 2025 — Performance Visualisierung"
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
          <article aria-label="Artikel: Core Web Vitals 2025">

            {/* ─── Section 1: Was sind Core Web Vitals? ─── */}
            <section id="was-sind-cwv" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>
                Was sind Core Web Vitals und warum sind sie plötzlich so wichtig?
              </h2>

              <p style={pStyle}>
                Im Mai 2021 rollte Google das sogenannte Page Experience Update aus — eines der
                bedeutendsten Ranking-Updates der letzten Jahre. Zum ersten Mal flossen technische
                Nutzungserfahrungs-Metriken direkt in den Suchalgorithmus ein. Der Name für diese
                Metriken: Core Web Vitals. Drei Messwerte, die beschreiben, wie schnell, reaktiv
                und visuell stabil eine Website für echte Nutzer ist.
              </p>

              <p style={pStyle}>
                Was viele unterschätzen: Core Web Vitals sind keine akademische Übung. Google hat
                intern Milliarden von Nutzerdaten ausgewertet und festgestellt, dass Seiten mit
                schlechten Ladezeiten drastisch höhere Absprungraten haben. Wenn eine Seite länger
                als drei Sekunden zum Laden braucht, verlässt sie die Hälfte aller mobilen Nutzer.
                Diese Daten haben Core Web Vitals zu einem harten Ranking-Faktor gemacht — und
                2025 ist ihre Bedeutung weiter gestiegen.
              </p>

              <p style={pStyle}>
                Seit März 2024 hat Google <strong style={{ color: '#f4efe6' }}>INP (Interaction to Next Paint)</strong> als offiziellen
                Core Web Vital eingeführt und damit FID (First Input Delay) abgelöst. Diese Änderung
                ist keine Kleinigkeit: FID maß nur die Verzögerung bis zur ersten Interaktion.
                INP misst hingegen die Reaktionsfähigkeit über alle Nutzerinteraktionen während
                des gesamten Seitenbesuchs — also jeden Klick, jede Texteingabe, jeden Tap. Das
                macht INP deutlich anspruchsvoller zu optimieren.
              </p>

              <p style={pStyle}>
                In 2025 ist die Situation eindeutig: Websites mit guten Core Web Vitals ranken
                besser, konvertieren mehr und haben niedrigere Bounce Rates. Es geht längst nicht
                mehr nur um SEO. Jede Sekunde langsamer Ladezeit kostet gemäß einer Amazon-Studie
                etwa 7% Conversion Rate. Für einen Online-Shop mit 100.000 € Monatsumsatz bedeutet
                das bei 2 Sekunden schlechterer Performance bis zu 14.000 € weniger Umsatz pro
                Monat — allein wegen technischer Trägheit.
              </p>

              <div style={calloutStyle}>
                <p style={calloutTextStyle}>
                  <strong style={{ color: '#f4efe6', display: 'block', marginBottom: '0.25rem' }}>
                    Wichtig zu verstehen:
                  </strong>
                  Core Web Vitals sind kein einmaliges Projekt. Sie müssen kontinuierlich überwacht
                  werden, weil sich jede neue Funktion, jedes Bild und jedes Script negativ
                  auswirken kann.
                </p>
              </div>
            </section>

            {/* ─── Section 2: Die drei Metriken ─────────── */}
            <section id="die-drei-metriken" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Die drei Metriken erklärt</h2>

              <h3 id="lcp" style={h3Style}>LCP — Largest Contentful Paint</h3>

              <p style={pStyle}>
                LCP misst die Zeit, die vergeht, bis das größte sichtbare Element im Viewport
                vollständig geladen ist. Das ist meistens das Hero-Bild, ein großes Textblock oder
                ein Video-Poster. Der Name ist Programm: "Largest Contentful Paint" = wann ist der
                größte Inhalt gezeichnet?
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1rem 0' }}>
                <span style={metricBadgeStyle('#22c55e')}>≤ 2,5s — Gut</span>
                <span style={metricBadgeStyle('#f59e0b')}>2,5–4s — Verbesserungsbedarf</span>
                <span style={metricBadgeStyle('#ef4444')}>&gt; 4s — Schlecht</span>
              </div>

              <p style={pStyle}>
                Was LCP negativ beeinflusst: große, nicht optimierte Bilder (JPG ohne AVIF/WebP),
                langsame Server-Antwortzeiten (TTFB &gt; 800ms), render-blockende CSS- und
                JavaScript-Ressourcen sowie fehlende Preload-Hinweise für kritische Assets.
                LCP ist der Messwert, bei dem die meisten Websites am meisten Potenzial haben.
              </p>

              <h3 id="inp" style={h3Style}>INP — Interaction to Next Paint</h3>

              <p style={pStyle}>
                INP misst, wie lange es dauert, bis der Browser auf eine Nutzerinteraktion
                (Klick, Tap, Tastatureingabe) visuell reagiert — und zwar nicht nur bei der
                ersten Interaktion, sondern über den gesamten Seitenbesuch hinweg. Der endgültige
                INP-Wert einer Seite entspricht dem 98. Perzentil aller gemessenen Interaktionen.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1rem 0' }}>
                <span style={metricBadgeStyle('#22c55e')}>≤ 200ms — Gut</span>
                <span style={metricBadgeStyle('#f59e0b')}>200–500ms — Verbesserungsbedarf</span>
                <span style={metricBadgeStyle('#ef4444')}>&gt; 500ms — Schlecht</span>
              </div>

              <p style={pStyle}>
                INP ist der schwierigste der drei Werte zu optimieren, weil er direkt mit JavaScript-
                Performance zusammenhängt. Typische Probleme: schweres JavaScript, das den Main
                Thread blockiert, lange Tasks über 50ms, aufgeblähte Event-Handler ohne Debouncing
                und synchrone DOM-Operationen. Single-Page-Applications haben hier oft die größten
                Probleme, weil sie extrem viel JavaScript auf dem Client ausführen.
              </p>

              <h3 id="cls" style={h3Style}>CLS — Cumulative Layout Shift</h3>

              <p style={pStyle}>
                CLS misst visuelle Instabilität — das frustrierende Phänomen, wenn du auf einen
                Button klicken willst und er plötzlich nach unten springt, weil ein Bild über ihm
                nachgeladen hat. Du kennst das: Du liest gerade einen Artikel, dann lädt ein
                Werbebanner ein und die ganze Seite verschiebt sich. Das ist CLS.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1rem 0' }}>
                <span style={metricBadgeStyle('#22c55e')}>≤ 0,1 — Gut</span>
                <span style={metricBadgeStyle('#f59e0b')}>0,1–0,25 — Verbesserungsbedarf</span>
                <span style={metricBadgeStyle('#ef4444')}>&gt; 0,25 — Schlecht</span>
              </div>

              <p style={pStyle}>
                Häufige Ursachen: Bilder ohne <code style={inlineCodeStyle}>width</code> und{' '}
                <code style={inlineCodeStyle}>height</code> Attribute, dynamisch eingefügte Inhalte
                (Ads, Cookie-Banner), Webfonts die ohne <code style={inlineCodeStyle}>font-display</code>{' '}
                eingebunden sind und das Layout verschieben, sowie iFrames ohne definierte
                Dimensionen. Der gute News: CLS ist von den drei Metriken am einfachsten auf 0
                zu bringen, wenn man die Ursachen kennt.
              </p>
            </section>

            {/* ─── Section 3: Messen ────────────────────── */}
            <section id="messen" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Wie du deine Core Web Vitals misst</h2>

              <p style={pStyle}>
                Bevor du optimierst, musst du wissen, wo du stehst. Es gibt zwei grundlegend
                verschiedene Arten von Daten: <strong style={{ color: '#f4efe6' }}>Lab Data</strong> (synthetische
                Messungen in kontrollierten Bedingungen) und{' '}
                <strong style={{ color: '#f4efe6' }}>Field Data</strong> (echte Messungen von
                deinen echten Nutzern, gesammelt über das Chrome User Experience Report, kurz CrUX).
                Google verwendet für das Ranking ausschließlich Field Data — aber Lab Data ist
                unverzichtbar für die Diagnose.
              </p>

              <h3 style={h3Style}>1. Google PageSpeed Insights</h3>
              <p style={pStyle}>
                Starte hier. <code style={inlineCodeStyle}>pagespeed.web.dev</code> zeigt dir sowohl
                Lab-Daten (Lighthouse-Score) als auch Field-Daten (CrUX) für Desktop und Mobil.
                Wichtig: Messe immer <strong style={{ color: '#f4efe6' }}>mobil zuerst</strong> —
                dort sind die Werte fast immer schlechter und dort hat Google den stärksten
                Ranking-Einfluss.
              </p>

              <h3 style={h3Style}>2. Google Search Console — Core Web Vitals Report</h3>
              <p style={pStyle}>
                Die Search Console zeigt dir, wie viele deiner URLs als "Gut", "Verbesserungsbedarf"
                oder "Schlecht" eingestuft werden — basierend auf echten Nutzerdaten über die
                letzten 28 Tage. Das ist der Report, auf den Google schaut. Neue Seiten haben
                hier oft noch keine Daten, weil CrUX Mindest-Traffic benötigt.
              </p>

              <h3 style={h3Style}>3. Chrome DevTools → Performance Tab</h3>
              <p style={pStyle}>
                Für tiefe Diagnose: Öffne DevTools, gehe auf "Performance", aktiviere "Web Vitals"
                und nimm eine Aufzeichnung auf. Du siehst genau, welcher Task den Main Thread
                blockiert, wo LCP stattfindet und welche Layout-Shifts ausgelöst werden.
                Drosselung auf "Slow 4G" simuliert mobile Bedingungen.
              </p>

              <h3 style={h3Style}>4. WebPageTest.org</h3>
              <p style={pStyle}>
                Für professionelle Tiefenanalyse. WebPageTest kann von verschiedenen Standorten
                (Frankfurt, Wien, Zürich) mit verschiedenen Geräten und Verbindungen testen.
                Der Filmstrip-View zeigt visuell, wann LCP-Elemente erscheinen. Besonders
                wertvoll: der Waterfall-Chart zeigt blockierende Ressourcen auf einen Blick.
              </p>

              <div style={calloutStyle}>
                <p style={calloutTextStyle}>
                  <strong style={{ color: '#f4efe6', display: 'block', marginBottom: '0.25rem' }}>
                    Lab vs. Field Data — der entscheidende Unterschied:
                  </strong>
                  Lighthouse kann "100/100" zeigen, während Google Search Console deine Seite als
                  "Schlecht" einstuft. Das passiert, weil Lab Data unter optimalen Bedingungen
                  misst. Field Data spiegelt echte Nutzer auf echten Geräten wider —
                  oft auf älteren Smartphones mit schlechter Verbindung.
                </p>
              </div>
            </section>

            {/* ─── Section 4: LCP Maßnahmen ─────────────── */}
            <section id="lcp-optimieren" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>8 konkrete Maßnahmen um LCP zu verbessern</h2>

              <p style={pStyle}>
                LCP ist der Messwert mit dem größten Impact. Eine schlechte LCP-Zeit ist fast
                immer das größte Performance-Problem — und sie lässt sich mit den folgenden
                Maßnahmen systematisch angehen.
              </p>

              <h3 style={h3Style}>1. Bilder in AVIF/WebP konvertieren</h3>
              <p style={pStyle}>
                AVIF-Bilder sind durchschnittlich 50% kleiner als JPEG bei gleicher Qualität.
                In Next.js nutzt du die eingebaute Image-Komponente, die automatisch optimiert:
              </p>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`import Image from 'next/image'

// Next.js konvertiert automatisch in AVIF/WebP
<Image
  src="/hero.jpg"
  alt="Hero Bild"
  width={1200}
  height={630}
  priority          // fetchpriority="high" automatisch
  sizes="100%"
/>`}</code>
              </div>

              <h3 style={h3Style}>2. fetchpriority="high" auf das LCP-Element setzen</h3>
              <p style={pStyle}>
                Der Browser weiß standardmäßig nicht, welches Bild das LCP-Element ist.
                Mit <code style={inlineCodeStyle}>fetchpriority="high"</code> sagst du ihm
                explizit: dieses Bild ist kritisch, lade es zuerst.
              </p>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`<!-- Vanilla HTML -->
<img
  src="/hero.avif"
  alt="Hero"
  width="1200"
  height="630"
  fetchpriority="high"
  loading="eager"
/>`}</code>
              </div>

              <h3 style={h3Style}>3. Kritische Ressourcen preloaden</h3>
              <p style={pStyle}>
                Wenn dein LCP-Element ein Hintergrundbild aus CSS ist oder ein Font, der für
                große Headlines nötig ist, muss der Browser es erst entdecken — dann laden.
                Mit Preload verkürzt du diesen Discovery-Prozess:
              </p>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`<link
  rel="preload"
  as="image"
  href="/hero.avif"
  type="image/avif"
/>

<!-- Für kritische Fonts -->
<link
  rel="preload"
  as="font"
  href="/fonts/cormorant.woff2"
  type="font/woff2"
  crossorigin="anonymous"
/>`}</code>
              </div>

              <h3 style={h3Style}>4. Server-seitig rendern statt client-seitig</h3>
              <p style={pStyle}>
                Client-seitiges Rendering (React ohne SSR) bedeutet: der Browser lädt erst
                JavaScript, führt es aus, baut dann das DOM auf. LCP kann nicht stattfinden,
                bevor das DOM steht. Next.js App Router rendert standardmäßig server-seitig —
                nutze das konsequent und vermeide unnötiges <code style={inlineCodeStyle}>&apos;use client&apos;</code>.
              </p>

              <h3 style={h3Style}>5. CDN verwenden</h3>
              <p style={pStyle}>
                Ein Content Delivery Network (CDN) wie Cloudflare, AWS CloudFront oder Vercel
                Edge Network cached deine Seiten in Rechenzentren weltweit. Ein Nutzer in Wien
                lädt deine Seite dann nicht mehr aus einem Server in Frankfurt, sondern aus
                Wien selbst. TTFB (Time to First Byte) sinkt oft von 800ms auf unter 100ms.
              </p>

              <h3 style={h3Style}>6. CSS Critical Path isolieren</h3>
              <p style={pStyle}>
                Wenn der Browser eine HTML-Seite lädt, wird er für jedes{' '}
                <code style={inlineCodeStyle}>&lt;link rel=&quot;stylesheet&quot;&gt;</code> im{' '}
                <code style={inlineCodeStyle}>&lt;head&gt;</code> blockiert — er wartet auf das CSS
                bevor er rendert. Lagere das CSS, das für den Above-Fold-Bereich nötig ist, in
                inline <code style={inlineCodeStyle}>&lt;style&gt;</code> Tags aus und lade den Rest
                asynchron.
              </p>

              <h3 style={h3Style}>7. font-display: swap</h3>
              <p style={pStyle}>
                Ohne <code style={inlineCodeStyle}>font-display: swap</code> wartet der Browser mit
                dem Anzeigen von Text, bis die Webfont geladen ist. Das kann LCP um Sekunden
                verzögern. Mit <code style={inlineCodeStyle}>swap</code> zeigt er sofort einen
                Fallback-Font an und tauscht ihn dann gegen die Webfont aus.
              </p>

              <h3 style={h3Style}>8. Hosting-Performance optimieren</h3>
              <p style={pStyle}>
                Shared Hosting auf günstigen Plänen hat oft TTFB-Werte von 2-3 Sekunden — und
                damit kann LCP grundsätzlich nicht gut sein. Wechsle auf VPS-Hosting,
                Platform-as-a-Service (Vercel, Netlify, Render) oder Managed WordPress-Hosting
                (Kinsta, WP Engine). Die Investition amortisiert sich durch bessere Rankings
                und mehr Conversions.
              </p>
            </section>

            {/* ─── Section 5: INP ───────────────────────── */}
            <section id="inp-optimieren" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>INP optimieren: Das unterschätzte Problem</h2>

              <p style={pStyle}>
                INP ist der Messwert, der 2025 die meisten Überraschungen bereithält. Viele
                Entwickler haben ihre Seite auf gute LCP-Werte optimiert — und stellen dann fest,
                dass INP trotzdem im roten Bereich ist. Das liegt daran, dass INP ausschließlich
                JavaScript-Verhalten misst und viele moderne Websites schlicht zu viel JavaScript
                auf dem Main Thread ausführen.
              </p>

              <h3 style={h3Style}>Long Tasks aufbrechen (&gt;50ms = Problem)</h3>
              <p style={pStyle}>
                Jede Aufgabe auf dem Main Thread, die länger als 50ms dauert, gilt als "Long Task"
                und blockiert den Browser. Während ein Long Task läuft, kann keine Nutzerinteraktion
                verarbeitet werden. Teile große Operationen auf: statt alles synchron zu verarbeiten,
                nutze <code style={inlineCodeStyle}>setTimeout(fn, 0)</code> oder die neue{' '}
                <code style={inlineCodeStyle}>scheduler.yield()</code> API.
              </p>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`// Alte Weise: blockiert den Main Thread
function processAllItems(items) {
  items.forEach(item => heavyOperation(item))
}

// Besser: Mit scheduler.yield() (2025 API)
async function processAllItems(items) {
  for (const item of items) {
    heavyOperation(item)
    // Nach jeder Iteration: Browser kann Inputs verarbeiten
    await scheduler.yield()
  }
}`}</code>
              </div>

              <h3 style={h3Style}>Event-Handler debouncing</h3>
              <p style={pStyle}>
                Scroll-Events, Resize-Events und Input-Events feuern sehr häufig — manchmal
                hunderte Male pro Sekunde. Wenn jeder Event-Handler teures DOM-Manipulation
                oder API-Calls auslöst, blockiert das den Main Thread massiv. Debouncing
                verzögert die Ausführung bis der Nutzer eine kurze Pause einlegt.
              </p>

              <h3 style={h3Style}>React Concurrent Mode und Suspense</h3>
              <p style={pStyle}>
                React 18 mit Concurrent Features erlaubt es React, das Rendering zu unterbrechen
                und priorisieren. Nutze <code style={inlineCodeStyle}>useTransition</code> für
                nicht-dringende Updates und <code style={inlineCodeStyle}>Suspense</code> für
                asynchrones Datenladen. Das verhindert, dass teure Re-Renders die Interaktion
                blockieren.
              </p>

              <h3 style={h3Style}>Web Workers für Heavy Computation</h3>
              <p style={pStyle}>
                Berechnungen, die nicht auf das DOM zugreifen müssen — Datentransformationen,
                Parsing, Kryptographie, Bildverarbeitung — können in einen Web Worker ausgelagert
                werden. Web Workers laufen in einem separaten Thread und blockieren den Main
                Thread nicht.
              </p>

              <div style={calloutStyle}>
                <p style={calloutTextStyle}>
                  <strong style={{ color: '#f4efe6', display: 'block', marginBottom: '0.25rem' }}>
                    Faustregel für INP:
                  </strong>
                  Weniger JavaScript ist fast immer besser JavaScript. Überprüfe regelmäßig,
                  welche NPM-Pakete du wirklich brauchst. Bibliotheken wie Lodash, Moment.js
                  oder alte jQuery-Plugins können den INP-Wert erheblich verschlechtern.
                </p>
              </div>
            </section>

            {/* ─── Section 6: CLS ───────────────────────── */}
            <section id="cls-eliminieren" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>CLS: Layoutverschiebungen eliminieren</h2>

              <p style={pStyle}>
                Cumulative Layout Shift ist der einzige Core Web Vital, der sich auf 0 bringen
                lässt — und bei dem konsequente Disziplin in der Entwicklung 90% der Probleme
                verhindert. Die meisten CLS-Probleme entstehen durch einfache Fehler, die
                leicht zu beheben sind.
              </p>

              <h3 style={h3Style}>Immer width und height Attribute auf img-Tags</h3>
              <p style={pStyle}>
                Ohne explizite Dimensionen weiß der Browser nicht, wie viel Platz er für ein
                Bild reservieren soll. Er reserviert gar keinen Platz — und wenn das Bild lädt,
                verschiebt sich alles darunter. Die Lösung ist simpel:
              </p>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`<!-- Ohne Dimensionen: CLS-Problem -->
<img src="/photo.jpg" alt="Foto" />

<!-- Mit Dimensionen: kein Layout Shift -->
<img
  src="/photo.jpg"
  alt="Foto"
  width="800"
  height="450"
  style="max-width: 100%; height: auto;"
/>`}</code>
              </div>

              <h3 style={h3Style}>min-height für dynamische Bereiche</h3>
              <p style={pStyle}>
                Bereiche, die dynamisch befüllt werden — Kommentar-Sektionen, Bewertungs-Widgets,
                API-Daten — sollten mit <code style={inlineCodeStyle}>min-height</code> versehen
                werden, damit der Browser von Anfang an Platz reserviert. Ein leerer Container
                mit <code style={inlineCodeStyle}>min-height: 200px</code> verhindert einen
                Layout Shift beim Laden des Inhalts.
              </p>

              <h3 style={h3Style}>font-display: optional für Zero-CLS Fonts</h3>
              <p style={pStyle}>
                <code style={inlineCodeStyle}>font-display: swap</code> hilft gegen FOIT (Flash of
                Invisible Text), kann aber einen kleinen Layout Shift verursachen, wenn der
                Fallback-Font und die Webfont unterschiedliche Maße haben.{' '}
                <code style={inlineCodeStyle}>font-display: optional</code> verhindert das
                komplett, indem die Webfont nur dann verwendet wird, wenn sie bereits im
                Cache ist.
              </p>

              <h3 style={h3Style}>Skeleton Screens statt leerer States</h3>
              <p style={pStyle}>
                Wenn Inhalte asynchron geladen werden, zeige Skeleton Screens — Platzhalter
                in der ungefähren Form des späteren Inhalts. Das verhindert Layout Shifts und
                verbessert die wahrgenommene Performance gleichzeitig.
              </p>
            </section>

            {/* ─── Section 7: Checkliste ────────────────── */}
            <section id="checkliste" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Checkliste: Core Web Vitals Audit in 30 Minuten</h2>

              <p style={pStyle}>
                Nutze diese Checkliste für einen schnellen ersten Audit deiner Website. Du
                brauchst dafür nur einen Desktop-Browser mit Chrome und ca. 30 Minuten Zeit.
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
                  'PageSpeed Insights Score messen — mobil UND Desktop (pagespeed.web.dev)',
                  'LCP-Element identifizieren: Chrome DevTools → Performance → "Web Vitals" aktivieren',
                  'Alle Bilder auf ≤ 150KB prüfen (AVIF bevorzugen)',
                  'fetchpriority="high" auf das Hero-/LCP-Bild gesetzt?',
                  'Preload für LCP-Bild und kritische Fonts im Head vorhanden?',
                  'Alle img-Tags haben explizite width und height Attribute?',
                  'font-display: swap oder optional für alle Webfonts gesetzt?',
                  'Search Console CWV-Report prüfen: Wie viele URLs sind "Gut"?',
                  'TTFB unter 800ms? (Server-Antwortzeit in WebPageTest prüfen)',
                  'Long Tasks im Performance-Tab identifiziert und dokumentiert?',
                  'Cookie-Banner und Ads-Scripts auf CLS-Impact geprüft?',
                  'Lighthouse Score mobil ≥ 90 als Ziel definiert und im Team kommuniziert?',
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
                        width: '1.25rem',
                        height: '1.25rem',
                        border: '1px solid rgba(255,77,0,0.3)',
                        borderRadius: '3px',
                        marginTop: '0.1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      aria-hidden="true"
                    />
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

            {/* ─── Section 8: Fazit ─────────────────────── */}
            <section id="fazit" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Fazit</h2>

              <p style={pStyle}>
                Core Web Vitals sind 2025 kein "nice to have" mehr. Sie sind gleichzeitig
                Ranking-Faktor und Umsatzfaktor. Jede Sekunde langsamerer Ladezeit kostet
                ~7% Conversion Rate — und schlechtere Rankings bedeuten weniger Traffic.
                Die gute Nachricht: Die meisten Probleme sind gut diagnostizierbar und mit
                den richtigen Maßnahmen zu beheben.
              </p>

              <p style={pStyle}>
                Starte mit PageSpeed Insights, identifiziere deine größten Baustellen und
                priorisiere LCP zuerst — dort liegt das meiste Potenzial. INP und CLS folgen.
                Messe regelmäßig, vor allem nach größeren Deployments. Und denke daran: Google
                sieht immer die Field Data — das Erlebnis deiner echten Nutzer auf echten Geräten.
                Das ist der Maßstab, an dem du dich messen lassen musst.
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
                  mit Handwerk bis ins letzte Pixel.
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
                  transition: 'color 0.2s ease',
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
                Wie sind deine Core Web Vitals?
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
                Kostenlose Analyse deiner Website — inklusive CWV-Bericht.
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
