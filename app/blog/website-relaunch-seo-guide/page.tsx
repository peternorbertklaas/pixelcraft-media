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
  title: 'Website Relaunch ohne SEO-Risiko: Der vollständige Leitfaden | PixelCraft Media',
  description:
    'Website Relaunch ohne Traffic-Verlust — das geht. Schritt-für-Schritt Anleitung für SEO-sichere Migration: Redirects, Content-Audit, Search Console, technische Checkliste. Aus 47 Projekten.',
  alternates: { canonical: '/blog/website-relaunch-seo-guide' },
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://pixelcraft-media.de/blog/website-relaunch-seo-guide',
    siteName: 'PixelCraft Media',
    title: 'Website Relaunch ohne SEO-Risiko: Der vollständige Leitfaden | PixelCraft Media',
    description:
      'Schritt-für-Schritt Anleitung für SEO-sichere Migration — Redirects, Content-Audit, technische Checkliste.',
    publishedTime: '2026-01-28T08:00:00Z',
    authors: ['PixelCraft Media'],
  },
}

/* ============================================================
   JSON-LD
   ============================================================ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://pixelcraft-media.de/blog/website-relaunch-seo-guide#article',
  headline: 'Website Relaunch ohne SEO-Risiko: Der vollständige Leitfaden',
  description:
    'Website Relaunch ohne Traffic-Verlust — Schritt-für-Schritt Anleitung für SEO-sichere Migration: Redirects, Content-Audit, Search Console, technische Checkliste.',
  datePublished: '2026-01-28T08:00:00Z',
  dateModified: '2026-01-28T08:00:00Z',
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
      url: 'https://pixelcraft-media.de/favicon.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://pixelcraft-media.de/blog/website-relaunch-seo-guide',
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

/* ============================================================
   TABLE OF CONTENTS DATA
   ============================================================ */
const TOC = [
  { id: 'warum-relaunches-seo-zerstoeren', label: 'Warum Relaunches SEO zerstören' },
  { id: 'phase-1-audit', label: 'Phase 1: Audit vor dem Relaunch' },
  { id: 'phase-2-url-struktur', label: 'Phase 2: URL-Struktur entscheiden' },
  { id: 'phase-3-redirects', label: 'Phase 3: 301 Redirects korrekt setzen' },
  { id: 'phase-4-technische-migration', label: 'Phase 4: Technische Migration' },
  { id: 'phase-5-monitoring', label: 'Phase 5: Post-Launch Monitoring' },
  { id: 'haeufige-fehler', label: 'Häufige Fehler' },
  { id: 'checkliste', label: 'Checkliste' },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function WebsiteRelaunchSeoGuidePage() {
  return (
    <>
      <Script
        id="website-relaunch-seo-guide-ld"
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
                  SEO
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
              SEO
            </span>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799' }}>
              12 min Lesezeit
            </span>
            <time
              dateTime="2026-01-28"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799' }}
            >
              28. Januar 2026
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
            Website Relaunch{' '}
            <span style={{ color: '#ff4d00' }}>ohne SEO-Risiko:</span>{' '}
            Der vollständige Leitfaden
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
            Website Relaunch ohne Traffic-Verlust — das geht. Schritt-für-Schritt Anleitung
            für SEO-sichere Migration mit Redirects, Content-Audit, Search Console und
            technischer Checkliste. Aus 47 Projekten destilliert.
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
              src="/pictures/blog/04_blog-testimonial-quotes.png"
              alt="Website Relaunch ohne SEO-Risiko — Vollständiger Leitfaden"
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
          <article aria-label="Artikel: Website Relaunch ohne SEO-Risiko">

            {/* ─── Section 1 ─── */}
            <section id="warum-relaunches-seo-zerstoeren" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Warum die meisten Website-Relaunches 40–60% des organischen Traffics vernichten</h2>

              <p style={pStyle}>
                Ein Website-Relaunch ist eines der riskantesten SEO-Ereignisse, die einem
                Unternehmen passieren können. Wir haben in den letzten Jahren über ein Dutzend
                Kunden übernommen, deren vorheriger Relaunch zu einem dramatischen Traffic-Einbruch
                geführt hat. In einem Fall verlor ein Stuttgarter B2B-Software-Anbieter nach
                einem Relaunch binnen sechs Wochen 58% seines organischen Traffics — trotz
                besserem Design, schnellerer Ladezeiten und modernerem Tech-Stack. Die Ursache:
                fehlende 301-Redirects von alten URLs auf neue, veränderte URL-Strukturen ohne
                Weiterleitung und ein komplett überarbeiteter Content, der die rankenden Keywords
                nicht mehr enthielt.
              </p>

              <p style={pStyle}>
                Der Recovery dauerte neun Monate. Neun Monate, in denen Leads ausblieben, die
                auf organischen Traffic angewiesen waren. Das ist kein Einzelfall. Laut einer
                Studie von Sistrix verlieren Websites nach Relaunch im Median 23% ihrer
                Sichtbarkeit — mit hoher Standardabweichung nach oben. Wer unprepared
                relaunct, riskiert weit mehr als 23%.
              </p>

              <p style={pStyle}>
                Das Tragische: Fast alle dieser Verluste sind vermeidbar. Sie entstehen nicht
                durch unvorhersehbare Algorithm-Updates — sie entstehen durch Prozessfehler
                bei der Migration. Fehlende Redirects. Vergessene Canonical Tags. Content,
                der gelöscht statt umstrukturiert wurde. Meta-Daten, die im Eifer des Relaunches
                nicht übertragen wurden. Diese fünf Phasen eliminieren diese Fehler systematisch.
              </p>

              <div style={calloutStyle}>
                <p style={calloutTextStyle}>
                  <strong style={{ color: '#f4efe6', display: 'block', marginBottom: '0.25rem' }}>
                    Die Goldene Regel des Relaunchs:
                  </strong>
                  Kein Content darf gelöscht werden, ohne zu prüfen, ob er Traffic oder Backlinks
                  hat. Kein URL darf sich ändern, ohne dass ein 301-Redirect gesetzt wird.
                  Diese beiden Regeln allein verhindern 80% aller Relaunch-SEO-Schäden.
                </p>
              </div>
            </section>

            {/* ─── Section 2: Phase 1 ─── */}
            <section id="phase-1-audit" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Phase 1: Audit vor dem Relaunch — was du behalten, was du löschen kannst</h2>

              <p style={pStyle}>
                Bevor auch nur eine Zeile neuen Codes geschrieben wird, muss du wissen,
                was deine aktuelle Website SEO-seitig leistet. Dieser Audit dauert je nach
                Website-Größe zwei bis fünf Tage — und ist die wichtigste Investition
                des gesamten Relaunch-Projekts.
              </p>

              <h3 style={h3Style}>Schritt 1: Vollständiges URL-Crawling</h3>
              <p style={pStyle}>
                Crawle deine gesamte aktuelle Website mit Screaming Frog SEO Spider oder
                Sitebulb. Ziel: eine vollständige Liste aller indexierten URLs mit deren
                Status-Codes, Titles, Meta-Descriptions und internen Verlinkungen.
                Diese Liste ist deine Baseline. Exportiere sie als CSV — du wirst sie
                während der gesamten Migration als Referenz brauchen.
              </p>

              <h3 style={h3Style}>Schritt 2: Traffic-Analyse pro URL</h3>
              <p style={pStyle}>
                Verbinde deine URL-Liste mit Google Search Console und Google Analytics.
                Ziel: für jede URL wissen, wie viel organischen Traffic und Impressionen
                sie in den letzten 12 Monaten hatte. Seiten mit regelmäßigem Traffic sind
                dein SEO-Kapital — sie müssen auf der neuen Seite mit neuer URL weiter
                verfügbar sein oder per 301 weitergeleitet werden. Seiten mit null
                Traffic und null Impressionen sind Kandidaten für Konsolidierung oder
                Löschung.
              </p>

              <h3 style={h3Style}>Schritt 3: Backlink-Audit</h3>
              <p style={pStyle}>
                Externe Links auf deine Website sind Ranking-Signale. Wenn du eine URL
                löschst, auf die externe Websites verlinken, verlierst du diese
                Ranking-Signale. Nutze Ahrefs, Semrush oder die kostenlose Google
                Search Console (Abschnitt &bdquo;Links&ldquo;) um die URLs mit den meisten
                eingehenden Backlinks zu identifizieren. Diese URLs brauchen auf jeden
                Fall 301-Redirects auf semantisch äquivalente neue URLs.
              </p>

              <h3 style={h3Style}>Schritt 4: Keyword-Mapping</h3>
              <p style={pStyle}>
                Erstelle ein Keyword-Mapping: welche URL rankt für welche Keywords?
                Diese Information verhindert, dass im Relaunch-Eifer Content-Seiten
                zusammengeführt werden, die für unterschiedliche Keywords ranken.
                Das Tool deiner Wahl: Google Search Console (Leistung → nach Seite
                filtern → Keywords pro Seite). Bei größeren Websites hilft Semrush
                oder Ahrefs für eine vollständigere Übersicht.
              </p>

              <div style={calloutStyle}>
                <p style={calloutTextStyle}>
                  <strong style={{ color: '#f4efe6', display: 'block', marginBottom: '0.25rem' }}>
                    Deliverable aus Phase 1:
                  </strong>
                  Ein Google Sheet mit vier Spalten: Alte URL | Traffic letzte 12 Monate |
                  Backlinks | Ranking Keywords. Dieses Dokument ist die Grundlage für alle
                  weiteren Entscheidungen — URL-Struktur, Content-Strategie und Redirect-Mapping.
                </p>
              </div>
            </section>

            {/* ─── Section 3: Phase 2 ─── */}
            <section id="phase-2-url-struktur" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Phase 2: URL-Struktur entscheiden — einmal richtig, für immer</h2>

              <p style={pStyle}>
                URL-Änderungen sind wie Umzüge: teuer, aufwendig und je seltener desto besser.
                Jede URL-Änderung erfordert Redirects, riskiert vorübergehende Ranking-Verluste
                und erzwingt Re-Crawling durch Google. Wenn du relaunchst, nutze die Gelegenheit,
                eine URL-Struktur zu definieren, die für die nächsten fünf bis zehn Jahre hält —
                und ändere sie dann nie wieder.
              </p>

              <h3 style={h3Style}>Prinzipien einer SEO-optimalen URL-Struktur</h3>
              <p style={pStyle}>
                <strong style={{ color: '#f4efe6' }}>Flache Hierarchie:</strong> Idealerweise
                maximal drei Ebenen tief — <code style={inlineCodeStyle}>/kategorie/unterkategorie/produkt</code>.
                Tiefere Hierarchien machen es für Crawler schwieriger, Seiten zu entdecken,
                und verwässern den Link Equity.{' '}
                <strong style={{ color: '#f4efe6' }}>Keywords in URLs:</strong> Die URL sollte das
                primäre Keyword der Seite enthalten. Nicht{' '}
                <code style={inlineCodeStyle}>/page?id=1234</code> sondern{' '}
                <code style={inlineCodeStyle}>/webdesign-agentur-muenchen</code>.{' '}
                <strong style={{ color: '#f4efe6' }}>Konsistenz:</strong> Einmal Bindestriche als
                Wort-Trennzeichen gewählt? Immer Bindestriche. Nie Unterstriche mischen.
                Immer Kleinbuchstaben. Keine Sonderzeichen oder Umlaute in URLs.
              </p>

              <h3 style={h3Style}>Behalte bestehende URLs wo möglich</h3>
              <p style={pStyle}>
                Die SEO-sicherste Entscheidung ist, bestehende URLs zu behalten —
                besonders für Seiten mit Traffic, Backlinks oder Rankings. Wenn die
                alte URL-Struktur nicht fundamental falsch ist, lass sie so. Die
                Versuchung, &bdquo;alles sauber zu machen&ldquo;, führt zu unnötigen
                Redirect-Kaskaden. Ändere URLs nur, wenn es einen klaren funktionalen
                oder SEO-Grund dafür gibt.
              </p>
            </section>

            {/* ─── Section 4: Phase 3 ─── */}
            <section id="phase-3-redirects" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Phase 3: 301 Redirects korrekt setzen — die technische Grundlage</h2>

              <p style={pStyle}>
                301-Redirects sind die wichtigste technische Maßnahme bei einer Migration.
                Sie signalisieren Google: &bdquo;Diese Seite existiert dauerhaft an einer neuen
                Adresse — übertrage alle Rankings und Backlink-Signals dorthin.&ldquo; Ein korrekt
                gesetzter 301-Redirect überträgt ca. 90–99% des Ranking-Potenzials der alten URL.
                Kein Redirect bedeutet: der komplette Verlust des aufgebauten SEO-Kapitals.
              </p>

              <h3 style={h3Style}>301 vs. 302 — ein kritischer Unterschied</h3>
              <p style={pStyle}>
                <code style={inlineCodeStyle}>301</code> bedeutet &bdquo;dauerhaft verschoben&ldquo; und
                überträgt Link-Equity. <code style={inlineCodeStyle}>302</code> bedeutet
                &bdquo;vorübergehend verschoben&ldquo; und überträgt kein Link-Equity. Der häufigste
                Fehler beim Relaunch: Entwickler setzen versehentlich 302-Redirects statt 301.
                Prüfe nach dem Launch alle Redirects mit einem Tool wie Redirect Checker
                oder Screaming Frog auf den korrekten Status-Code.
              </p>

              <h3 style={h3Style}>Redirects in Next.js (next.config.js)</h3>
              <p style={pStyle}>
                Für Next.js-Projekte werden Redirects in der{' '}
                <code style={inlineCodeStyle}>next.config.js</code> oder{' '}
                <code style={inlineCodeStyle}>next.config.ts</code> definiert:
              </p>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Einfacher permanenter Redirect
      {
        source: '/alte-seite',
        destination: '/neue-seite',
        permanent: true,  // 301
      },
      // Wildcard-Redirect für gesamte alte Kategorie
      {
        source: '/leistungen/:path*',
        destination: '/services/:path*',
        permanent: true,
      },
      // Alte Blog-Struktur auf neue mappen
      {
        source: '/news/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ]
  },
}

export default nextConfig`}</code>
              </div>

              <h3 style={h3Style}>Redirects in Apache (.htaccess)</h3>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`# .htaccess — Apache Server
RewriteEngine On

# Einzelne URL umleiten
Redirect 301 /alte-seite.html https://www.domain.de/neue-seite/

# Gesamtes altes Verzeichnis auf neues umleiten
RedirectMatch 301 ^/old-kategorie/(.*)$ https://www.domain.de/neue-kategorie/$1

# www zu non-www (oder umgekehrt) — immer konsistent
RewriteCond %{HTTP_HOST} ^www\\.domain\\.de [NC]
RewriteRule ^(.*)$ https://domain.de/$1 [R=301,L]

# HTTP zu HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]`}</code>
              </div>

              <h3 style={h3Style}>Redirects in Nginx</h3>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`# nginx.conf — Nginx Server
server {
    # Einzelne Seite permanent weiterleiten
    location = /alte-seite {
        return 301 https://domain.de/neue-seite/;
    }

    # Gesamtes altes Verzeichnis umleiten
    location /old-blog/ {
        rewrite ^/old-blog/(.*)$ /blog/$1 permanent;
    }

    # HTTP zu HTTPS
    server_name domain.de www.domain.de;
    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    }
}`}</code>
              </div>

              <div style={calloutStyle}>
                <p style={calloutTextStyle}>
                  <strong style={{ color: '#f4efe6', display: 'block', marginBottom: '0.25rem' }}>
                    Keine Redirect-Ketten!
                  </strong>
                  Redirect-Ketten (A → B → C) kosten Page Rank und verlangsamen den Seitenaufbau.
                  Wenn eine URL bereits auf eine andere umleitet und du die Ziel-URL ebenfalls
                  umleiten willst, aktualisiere den ersten Redirect direkt auf das finale Ziel:
                  A → C. Screaming Frog findet Ketten mit dem &bdquo;Redirect Chains&ldquo;-Report.
                </p>
              </div>
            </section>

            {/* ─── Section 5: Phase 4 ─── */}
            <section id="phase-4-technische-migration" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Phase 4: Technische Migration — alles prüfen, bevor es live geht</h2>

              <p style={pStyle}>
                Die Staging-Phase ist deine letzte Chance, Fehler zu finden, bevor Google
                sie sieht. Eine vollständige technische Prüfung auf der Staging-Umgebung
                ist kein optionaler Schritt — sie ist Voraussetzung für jeden seriösen Launch.
              </p>

              <h3 style={h3Style}>robots.txt und noindex auf Staging sperren</h3>
              <p style={pStyle}>
                Das häufigste und verheerendste Versehen: die Staging-Umgebung wird
                versehentlich von Suchmaschinen gecrawlt und indexiert, bevor die echte
                Seite live geht. Verhindere das mit zwei Maßnahmen: erstens eine
                <code style={inlineCodeStyle}>robots.txt</code> auf der Staging-Domain, die
                alle Crawler blockiert:
              </p>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`# robots.txt auf staging.domain.de
User-agent: *
Disallow: /`}</code>
              </div>

              <p style={pStyle}>
                Und zweitens, falls dein CMS oder Framework es unterstützt, ein globales
                <code style={inlineCodeStyle}>noindex</code>-Meta-Tag im{' '}
                <code style={inlineCodeStyle}>&lt;head&gt;</code> der Staging-Umgebung:
              </p>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`// In Next.js: layout.tsx für Staging
// (via Umgebungsvariable steuern)
export const metadata: Metadata = {
  robots: process.env.NODE_ENV === 'production'
    ? { index: true, follow: true }
    : { index: false, follow: false },
}`}</code>
              </div>

              <h3 style={h3Style}>Canonical Tags korrekt setzen</h3>
              <p style={pStyle}>
                Jede Seite sollte einen selbst-referenzierenden Canonical-Tag haben, der
                die kanonische URL der Seite angibt. Das verhindert Duplicate-Content-Probleme
                bei URL-Varianten (mit/ohne Trailing Slash, mit/ohne www, HTTP/HTTPS-Mischung).
                In Next.js über das Metadata-API:
              </p>

              <div style={codeBlockStyle}>
                <code style={codeStyle}>{`// Jede Seite: Canonical-Tag via Metadata
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://domain.de/seiten-url',
  },
}

// Oder dynamisch in einer dynamischen Route:
export async function generateMetadata({ params }) {
  return {
    alternates: {
      canonical: \`https://domain.de/blog/\${params.slug}\`,
    },
  }
}`}</code>
              </div>

              <h3 style={h3Style}>XML-Sitemap aktualisieren und einreichen</h3>
              <p style={pStyle}>
                Deine XML-Sitemap muss alle neuen URLs enthalten und darf keine alten URLs
                mehr listen, die jetzt 301 weiterleiten. Nach dem Launch: die neue Sitemap
                in der Google Search Console unter &bdquo;Sitemaps&ldquo; einreichen. Das beschleunigt
                das Re-Crawling der neuen URL-Struktur erheblich.
              </p>

              <h3 style={h3Style}>Structured Data (Schema.org) übertragen</h3>
              <p style={pStyle}>
                Wenn deine alte Website JSON-LD oder Microdata hatte (für Produkte,
                Bewertungen, FAQ, Breadcrumbs), muss das auf der neuen Seite vollständig
                übertragen werden. Prüfe mit dem Google Rich Results Test, ob alle
                Structured-Data-Implementierungen korrekt erkannt werden.
              </p>
            </section>

            {/* ─── Section 6: Phase 5 ─── */}
            <section id="phase-5-monitoring" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Phase 5: Post-Launch Monitoring — die ersten 90 Tage entscheiden</h2>

              <p style={pStyle}>
                Der Launch ist nicht das Ende des Relaunch-Projekts. Die ersten 90 Tage
                nach dem Go-live sind eine kritische Phase, in der du Google dabei zusiehst,
                wie es die neue Website bewertet. Probleme, die jetzt nicht erkannt werden,
                können sich festigen und sind später teurer zu beheben.
              </p>

              <h3 style={h3Style}>Woche 1: Sofort-Check nach Launch</h3>
              <p style={pStyle}>
                Crawle die neue Produktions-Seite sofort mit Screaming Frog. Was suchst du:
                4xx-Fehler (Seiten, die nicht mehr existieren ohne Redirect), 5xx-Server-Fehler,
                fehlende Meta-Tags (leere oder doppelte Titles/Descriptions), Bilder ohne
                Alt-Attribute, interne Links auf 404-Seiten. Alle Befunde werden sofort
                behoben — nicht &bdquo;nächste Sprint&ldquo;. Google beginnt nach dem Launch sofort
                mit Re-Crawling.
              </p>

              <h3 style={h3Style}>Google Search Console: URL-Inspection für kritische Seiten</h3>
              <p style={pStyle}>
                Nutze das URL-Inspection-Tool in der Search Console für deine 10–20 wichtigsten
                Seiten (nach Traffic und Rankings). Prüfe: Wird die Seite als indexierbar erkannt?
                Wurde der Canonical korrekt erkannt? Gibt es Crawling-Fehler? Wenn eine wichtige
                Seite nicht indexierbar ist, kannst du hier direkt eine Neuindexierung beantragen.
              </p>

              <h3 style={h3Style}>Ranking-Monitoring einrichten</h3>
              <p style={pStyle}>
                Richte in Semrush, Sistrix oder Ahrefs ein wöchentliches Ranking-Tracking
                für deine Top-50-Keywords ein. Ein normaler Relaunch führt zu kurzfristigen
                Schwankungen in den ersten 4–8 Wochen — das ist kein Alarm-Signal. Alarm-Signal
                ist ein anhaltender Trend nach unten über mehr als 6 Wochen. In diesem Fall:
                Google Search Console auf Crawling-Fehler prüfen, Redirect-Chain-Analyse
                wiederholen und Content auf fehlende Keywords prüfen.
              </p>

              <h3 style={h3Style}>Core Web Vitals nach Relaunch prüfen</h3>
              <p style={pStyle}>
                Ein Relaunch kann Core Web Vitals stark verändern — positiv wie negativ.
                Neues JavaScript, neue Bilder, neue Fonts. Miss nach dem Launch sofort
                mit PageSpeed Insights und prüfe die Search Console nach 4–6 Wochen
                auf den neuen CWV-Report. Verschlechterte Werte müssen innerhalb der
                ersten 30 Tage adressiert werden, bevor sie als Field Data in Google
                Rankings einfließen.
              </p>
            </section>

            {/* ─── Section 7: Häufige Fehler ─── */}
            <section id="haeufige-fehler" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Häufige Fehler — und wie du sie vermeidest</h2>

              <p style={pStyle}>
                Aus 47 begleiteten Projekten haben sich fünf Fehler-Muster herauskristallisiert,
                die immer wieder für Ranking-Verluste sorgen.
              </p>

              <h3 style={h3Style}>Fehler 1: Content-Merger ohne Traffic-Prüfung</h3>
              <p style={pStyle}>
                Zwei Seiten zu einer zusammenführen klingt nach Strukturverbesserung.
                Wenn aber beide Seiten für unterschiedliche Keywords ranken, verlierst du
                unweigerlich Rankings für eine der beiden Keyword-Gruppen. Prüfe vor jedem
                Merge: Für welche Keywords rankt jede Seite? Wenn die Keyword-Sets sich nicht
                überschneiden, sei sehr vorsichtig mit dem Zusammenführen.
              </p>

              <h3 style={h3Style}>Fehler 2: Robots.txt-Fehler im Launch</h3>
              <p style={pStyle}>
                Die auf der Staging-Umgebung gesetzte <code style={inlineCodeStyle}>Disallow: /</code>
                -Direktive vergessen zu entfernen. Das passiert erschreckend oft. Der Effekt:
                Google kann die neue Seite gar nicht crawlen, alle Rankings brechen ein.
                Prüfe die robots.txt unmittelbar nach dem Launch: <code style={inlineCodeStyle}>https://domain.de/robots.txt</code> — manuell im Browser.
              </p>

              <h3 style={h3Style}>Fehler 3: Verlust der internen Verlinkungsstruktur</h3>
              <p style={pStyle}>
                Interne Links übertragen Link Equity innerhalb deiner Website. Wenn ein
                Relaunch die interne Verlinkung komplett neu strukturiert, ohne die
                alten Link-Juice-Flows zu berücksichtigen, können Seiten Rankings verlieren,
                weil sie plötzlich schlechter intern verlinkt sind. Dokumentiere die
                wichtigsten internen Links vor dem Relaunch und stelle sicher, dass
                sie auf der neuen Seite erhalten bleiben.
              </p>

              <h3 style={h3Style}>Fehler 4: Title und Description nicht übertragen</h3>
              <p style={pStyle}>
                Entwickler übertragen beim Relaunch gerne Templates, vergessen aber, die
                spezifischen Title-Tags und Meta-Descriptions der alten Seiten zu übernehmen.
                Plötzlich haben 200 Seiten generische Titel wie &bdquo;Webdesign Agentur | Home&ldquo;
                statt spezifischer, keywordreicher Titles. Das Google Such-Snippet ändert
                sich, die Click-Through-Rate sinkt, die Rankings folgen.
              </p>

              <h3 style={h3Style}>Fehler 5: Launch ohne Backup-Plan</h3>
              <p style={pStyle}>
                Was passiert, wenn nach dem Launch ein kritisches Problem auftaucht?
                Hast du einen rollback-fähigen Stand der alten Website? Bei Vercel und
                Netlify ist das trivial — jeder Deploy hat eine eindeutige URL und kann
                in 60 Sekunden wiederhergestellt werden. Bei selbstgehostetem Hosting
                braucht es einen expliziten Backup-Plan. Ohne Rollback-Möglichkeit
                arbeitest du unter Zeitdruck an einem Live-System, was die Fehlerrate
                erhöht.
              </p>
            </section>

            {/* ─── Section 8: Checkliste ─── */}
            <section id="checkliste" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Die vollständige Relaunch-SEO-Checkliste</h2>

              <p style={pStyle}>
                Diese Checkliste fasst alle kritischen Maßnahmen zusammen. Drucke sie aus
                oder kopiere sie in dein Projekt-Tracking-Tool. Kein Punkt darf beim
                Go-live als &bdquo;offen&ldquo; markiert sein.
              </p>

              {[
                {
                  phase: 'Vor dem Relaunch',
                  items: [
                    'Vollständiges URL-Crawling der aktuellen Seite mit Screaming Frog',
                    'Traffic-Analyse pro URL (Search Console + Analytics, letzte 12 Monate)',
                    'Backlink-Audit: welche URLs haben externe Links?',
                    'Keyword-Mapping: welche Seite rankt für welche Keywords?',
                    'URL-Redirect-Mapping-Dokument erstellt (Alte URL → Neue URL)',
                    'Alle rankenden URLs identifiziert und in neuer Struktur berücksichtigt',
                    'Staging robots.txt auf Disallow: / gesetzt',
                    'Staging noindex-Meta-Tag gesetzt',
                  ],
                },
                {
                  phase: 'Während der Entwicklung',
                  items: [
                    'Alle 301-Redirects implementiert (Status-Code geprüft, nicht 302)',
                    'Keine Redirect-Ketten (A→B→C statt A→C)',
                    'Canonical Tags auf allen Seiten gesetzt',
                    'XML-Sitemap generiert (nur neue URLs, keine weitergeleiteten)',
                    'robots.txt für Produktion korrekt (kein Disallow: /)',
                    'Structured Data (JSON-LD) übertragen und getestet',
                    'Title Tags und Meta-Descriptions übertragen/aktualisiert',
                    'Interne Verlinkungsstruktur geprüft',
                  ],
                },
                {
                  phase: 'Launch-Tag',
                  items: [
                    'robots.txt auf Produktionsserver manuell geprüft',
                    'Neue Sitemap in Google Search Console eingereicht',
                    'Sofort-Crawl mit Screaming Frog (4xx, 5xx, fehlende Meta-Tags)',
                    'Alle Redirects mit Redirect-Checker auf Status 301 geprüft',
                    'URL-Inspection in Search Console für Top-10-Seiten',
                    'PageSpeed Insights nach Launch gemessen und dokumentiert',
                    'Analytics-Tracking funktioniert (Events, Conversions)',
                    'Rollback-Plan dokumentiert und getestet',
                  ],
                },
                {
                  phase: 'Post-Launch Monitoring',
                  items: [
                    'Ranking-Tracking für Top-50-Keywords eingerichtet',
                    'Search Console wöchentlich auf Crawling-Fehler prüfen (4 Wochen lang)',
                    'Core Web Vitals nach 4–6 Wochen in Search Console prüfen',
                    'Nach 3 Monaten: Traffic-Vergleich YoY aus Analytics',
                    'Backlinks neu gecrawlt: Verluste identifiziert und via Outreach adressiert',
                  ],
                },
              ].map((section) => (
                <div
                  key={section.phase}
                  style={{
                    background: '#0f0f18',
                    border: '1px solid rgba(244,239,230,0.08)',
                    borderRadius: '4px',
                    padding: '1.25rem 1.5rem',
                    margin: '1.5rem 0',
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
                    {section.phase}
                  </p>
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.5rem 0',
                        borderBottom:
                          i < section.items.length - 1
                            ? '1px solid rgba(244,239,230,0.04)'
                            : 'none',
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: '1.125rem',
                          height: '1.125rem',
                          border: '1px solid rgba(255,77,0,0.3)',
                          borderRadius: '3px',
                          marginTop: '0.15rem',
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
              ))}

              <p style={pStyle}>
                Ein strukturiertes Vorgehen nach diesem Leitfaden ist kein Garantieschein
                für perfekte Rankings nach dem Relaunch — Google-Algorithmen sind komplex
                und kurzfristige Schwankungen sind normal. Aber er eliminiert alle
                vermeidbaren Fehler. Und vermeidbare Fehler sind der Grund für 80% der
                Relaunch-SEO-Katastrophen, die wir gesehen haben.
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
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', fontWeight: 600, color: '#f4efe6', margin: '0 0 0.25rem 0' }}>
                  PixelCraft Media
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 0.75rem 0' }}>
                  Webdesign Agentur
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.9375rem', color: '#8a8799', lineHeight: 1.65, margin: '0 0 1.25rem 0' }}>
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
                Relaunch geplant?
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
                Kostenloses SEO-Audit vor dem Relaunch — wir zeigen dir die Risiken.
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
