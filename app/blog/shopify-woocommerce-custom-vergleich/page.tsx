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
  title: 'Shopify, WooCommerce oder Custom: Welche Plattform passt wirklich zu dir? | PixelCraft Media',
  description:
    'Shopify, WooCommerce oder Custom-Entwicklung? Der ehrliche Vergleich mit konkreten Zahlen, Kosten, Skalierbarkeit und Entscheidungsmatrix — damit du die richtige Plattform wählst.',
  alternates: { canonical: '/blog/shopify-woocommerce-custom-vergleich' },
  openGraph: {
    type: 'article',
    locale: 'de_DE',
    url: 'https://pixelcraft-media.de/blog/shopify-woocommerce-custom-vergleich',
    siteName: 'PixelCraft Media',
    title: 'Shopify, WooCommerce oder Custom: Welche Plattform passt wirklich zu dir? | PixelCraft Media',
    description:
      'Der ehrliche Plattform-Vergleich mit Kosten, Skalierbarkeit und Entscheidungsmatrix.',
    publishedTime: '2026-02-10T08:00:00Z',
    authors: ['PixelCraft Media'],
  },
}

/* ============================================================
   JSON-LD
   ============================================================ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://pixelcraft-media.de/blog/shopify-woocommerce-custom-vergleich#article',
  headline: 'Shopify, WooCommerce oder Custom: Welche Plattform passt wirklich zu dir?',
  description:
    'Shopify, WooCommerce oder Custom-Entwicklung? Der ehrliche Vergleich mit konkreten Zahlen, Kosten, Skalierbarkeit und Entscheidungsmatrix.',
  datePublished: '2026-02-10T08:00:00Z',
  dateModified: '2026-02-10T08:00:00Z',
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
    '@id': 'https://pixelcraft-media.de/blog/shopify-woocommerce-custom-vergleich',
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
  { id: 'falsche-plattform', label: 'Die falsche Plattform kostet Tausende' },
  { id: 'shopify', label: 'Shopify: Stärken und Grenzen' },
  { id: 'woocommerce', label: 'WooCommerce: Flexibel aber komplex' },
  { id: 'custom-development', label: 'Custom Development: Wann es sich lohnt' },
  { id: 'kostenvergleich', label: 'Kostenvergleich über 3 Jahre' },
  { id: 'entscheidungsmatrix', label: 'Entscheidungsmatrix' },
  { id: 'fazit', label: 'Fazit' },
]

/* ============================================================
   PAGE
   ============================================================ */
export default function ShopifyWoocommerceCustomPage() {
  return (
    <>
      <Script
        id="shopify-woocommerce-custom-ld"
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
                  E-Commerce
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
              E-Commerce
            </span>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799' }}>
              10 min Lesezeit
            </span>
            <time
              dateTime="2026-02-10"
              style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: '#8A8799' }}
            >
              10. Februar 2026
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
            Shopify, WooCommerce oder Custom:{' '}
            <span style={{ color: '#ff4d00' }}>Welche Plattform passt wirklich zu dir?</span>
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
            Der ehrliche Vergleich mit konkreten Zahlen, Kosten, Skalierbarkeit und
            Entscheidungsmatrix — damit du die richtige Plattform wählst und teuren Fehlentscheidungen entgehst.
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
              src="/pictures/blog/05_blog-casestudy-380percent.avif"
              alt="Shopify vs WooCommerce vs Custom Development — Plattform-Vergleich"
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
          <article aria-label="Artikel: Shopify vs WooCommerce vs Custom">

            {/* ─── Section 1 ─── */}
            <section id="falsche-plattform" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>
                Die falsche Plattform kostet Tausende — und das oft erst nach einem Jahr
              </h2>

              <p style={pStyle}>
                Es ist eine der häufigsten und teuersten Fehlentscheidungen, die wir bei Neukunden
                vorfinden: ein Online-Shop auf der falschen Plattform. Ein mittelständisches
                Modeunternehmen aus Wien, das mit Shopify startete, kam zu uns mit einem Problem:
                Sie brauchten komplexe B2B-Preisstaffeln für verschiedene Händlergruppen. Shopify
                konnte das nur mit drei kostenpflichtigen Apps abbilden — Gesamtkosten: 380 € pro
                Monat allein für Plugins. Gleichzeitig hatten sie Synchronisierungsprobleme zwischen
                den Apps, weil keiner davon miteinander kommunizierte. Der Wechsel zu einer
                Custom-Lösung kostete 18.000 € — aber sie sparten ab dem zweiten Jahr 4.500 €
                jährlich an Plugin-Kosten und hatten zum ersten Mal keine Synchronisierungsprobleme.
              </p>

              <p style={pStyle}>
                Das andere Extrem: Ein Startup im Bereich Sport-Supplements kam mit einer
                selbstgebauten PHP-Custom-Lösung. 40.000 € Entwicklungskosten, 6 Monate
                Entwicklungszeit, kein integriertes Checkout, keine mobilen Optimierungen.
                Ergebnis: 2,1% Conversion Rate bei einem Marktdurchschnitt von 3,5%.
                Nach der Migration auf Shopify Plus: 3,8% Conversion Rate, weil das
                Checkout-Erlebnis schlicht besser war. Die 40.000 € hätten für Marketing
                genutzt werden sollen.
              </p>

              <p style={pStyle}>
                Beide Beispiele zeigen: Es gibt keine universell richtige Plattform. Die
                richtige Plattform hängt von deinen spezifischen Anforderungen ab —
                heute und in drei Jahren. Dieser Artikel hilft dir, diese Entscheidung
                fundiert zu treffen.
              </p>
            </section>

            {/* ─── Section 2: Shopify ─── */}
            <section id="shopify" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Shopify: Stärken und Grenzen</h2>

              <p style={pStyle}>
                Shopify ist 2026 die dominierende E-Commerce-Plattform im DACH-Raum für
                Shops bis ca. 2 Millionen € Jahresumsatz. Die Gründe sind strukturell:
                Shopify hat das Checkout-Erlebnis auf ein Niveau poliert, das kein
                Einzelunternehmen selbst erreicht. Über 500 Millionen Checkouts pro Jahr
                bedeuten kontinuierliche Optimierung durch Daten, die keine Custom-Lösung
                jemals haben wird. Konvertierungsraten von 3,3–4,1% (nach Branche) sind
                weit über dem Marktdurchschnitt — weil Shopify weiß, wie Checkout-Friction
                zu eliminieren ist.
              </p>

              <h3 style={h3Style}>Die echten Stärken von Shopify</h3>
              <p style={pStyle}>
                <strong style={{ color: '#f4efe6' }}>Time-to-Market:</strong> Ein funktionaler Shop ist
                in 2–4 Wochen live, nicht in 3–6 Monaten. Für Startups und erste
                Produktvalidierungen ist das entscheidend.{' '}
                <strong style={{ color: '#f4efe6' }}>Checkout-Optimierung:</strong> Shop Pay, One-Click-Checkout,
                automatische Adressvervollständigung — alles inklusive.{' '}
                <strong style={{ color: '#f4efe6' }}>Hosting und Skalierung:</strong> Bei Traffic-Spitzen
                (Black Friday, Produktlaunches) skaliert Shopify automatisch. Kein Serverausfall,
                keine Mehrkosten.{' '}
                <strong style={{ color: '#f4efe6' }}>App Ecosystem:</strong> 8.000+ Apps für nahezu
                jeden Use Case — von E-Mail-Automatisierung bis Loyalty-Programmen.
              </p>

              <h3 style={h3Style}>Wo Shopify an seine Grenzen stößt</h3>
              <p style={pStyle}>
                <strong style={{ color: '#f4efe6' }}>B2B-Komplexität:</strong> Kundengruppen-spezifische
                Preise, Staffelpreise, genehmigungspflichtige Bestellungen — Shopify Plus
                deckt einiges ab, aber komplexe B2B-Szenarien sind teuer oder umständlich.{' '}
                <strong style={{ color: '#f4efe6' }}>Transaktionsgebühren:</strong> Ohne Shopify Payments
                fallen 0,5–2% Transaktionsgebühren pro Bestellung an — bei hohem Umsatz
                kann das teurer sein als eine andere Lösung.{' '}
                <strong style={{ color: '#f4efe6' }}>Datenkontrolle:</strong> Deine Daten liegen auf
                Shopifys Servern. DSGVO-Compliance ist möglich, aber aufwendiger als mit
                self-hosted Lösungen.{' '}
                <strong style={{ color: '#f4efe6' }}>SEO-Limitierungen:</strong> URL-Strukturen
                sind eingeschränkt. Kategorieseiten haben festgelegte URL-Pfade wie{' '}
                <code style={inlineCodeStyle}>/collections/</code>, die nicht immer
                SEO-optimal sind.
              </p>

              <div style={calloutStyle}>
                <p style={calloutTextStyle}>
                  <strong style={{ color: '#f4efe6', display: 'block', marginBottom: '0.25rem' }}>
                    Shopify ist die richtige Wahl wenn:
                  </strong>
                  Du ein D2C-Produkt verkaufst, schnell starten willst, primär B2C bist,
                  kein internes Entwicklungsteam hast und dein Umsatz unter 2 Mio. € liegt.
                  Ab Shopify Plus (ab ~82 €/Monat) entfallen Transaktionsgebühren und
                  B2B-Funktionen werden deutlich besser.
                </p>
              </div>
            </section>

            {/* ─── Section 3: WooCommerce ─── */}
            <section id="woocommerce" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>WooCommerce: Flexibel, günstig — aber unterschätzt komplex</h2>

              <p style={pStyle}>
                WooCommerce ist das meistgenutzte E-Commerce-System der Welt — gemessen an der
                schieren Anzahl installierter Shops. Dieser Erfolg ist teils Stärke, teils
                Marketingillusion. WooCommerce ist ein WordPress-Plugin, das E-Commerce-Funktionalität
                hinzufügt. Das klingt einfacher als es ist. Die Realität: WooCommerce ist so
                flexibel wie du willst, aber diese Flexibilität kommt mit einer Wartungslast,
                die viele Betreiber unterschätzen.
              </p>

              <h3 style={h3Style}>Die echten Vorteile von WooCommerce</h3>
              <p style={pStyle}>
                <strong style={{ color: '#f4efe6' }}>Keine Transaktionsgebühren:</strong> WooCommerce
                selbst ist kostenlos und erhebt keine Provisionen auf Umsätze — du zahlst nur
                Hosting und Zahlungsanbieter-Gebühren.{' '}
                <strong style={{ color: '#f4efe6' }}>Vollständige Datenkontrolle:</strong> Self-hosted
                bedeutet: deine Daten, dein Server, deine DSGVO-Hoheit.{' '}
                <strong style={{ color: '#f4efe6' }}>SEO-Kontrolle:</strong> Vollständig anpassbare
                URL-Strukturen, perfekte Integration mit Yoast SEO oder Rank Math,
                vollständige Kontrolle über technisches SEO.{' '}
                <strong style={{ color: '#f4efe6' }}>Content-Marketing-Integration:</strong> WordPress ist
                das beste CMS für Content-Marketing — WooCommerce erbt diese Stärke. Für
                Businesses, die SEO-getriebenes Wachstum als primäre Strategie haben,
                ist das ein erheblicher Vorteil.
              </p>

              <h3 style={h3Style}>Die versteckten Kosten von WooCommerce</h3>
              <p style={pStyle}>
                Das Hosting muss selbst gemanagt werden. Shared Hosting bei Strato oder
                1&1 für 5 €/Monat endet regelmäßig in Performance-Problemen.
                Managed WordPress-Hosting (Kinsta, WP Engine, Raidboxes) kostet realistisch
                50–200 €/Monat für einen ernsthaften Shop. Dazu kommen Premium-Plugins:
                ein gutes Buchführungsintegrations-Plugin wie Lexoffice-Connect kostet
                15–30 €/Monat, WooCommerce Subscriptions für Abo-Modelle 16 €/Monat,
                ein professionelles Bewertungs-Plugin weitere 10–20 €/Monat. Schnell sind
                100–300 € monatlich an Plugin-Kosten erreicht — bei vergleichbarer
                Funktionalität wie ein Shopify-Basisplan.
              </p>

              <p style={pStyle}>
                Der kritischste Punkt: <strong style={{ color: '#f4efe6' }}>Sicherheit und Updates.</strong>{' '}
                WordPress und WooCommerce müssen regelmäßig aktualisiert werden. Jedes Update
                kann Plugins brechen. Ein nicht gepatchtes WordPress ist die häufigste Ursache
                für gehackte Online-Shops im DACH-Raum. Ohne ein strukturiertes Update-Management
                oder eine Agentur, die das übernimmt, ist WooCommerce ein Sicherheitsrisiko.
              </p>
            </section>

            {/* ─── Section 4: Custom ─── */}
            <section id="custom-development" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Custom Development: Wann es sich wirklich lohnt</h2>

              <p style={pStyle}>
                Custom-Entwicklung bedeutet nicht zwingend, alles von Grund auf neu zu bauen.
                In modernen Projekten bedeutet es meist: ein bewährtes Framework (Next.js,
                Nuxt, SvelteKit) mit einer Headless-Commerce-API (Shopify Storefront API,
                Medusa.js, Commerce Layer) zu verbinden und dazu einen maßgeschneiderten
                Frontend-Layer zu bauen. Dieses &bdquo;Composable Commerce&ldquo;-Modell kombiniert die
                Stärken beider Welten: bewährte Commerce-Backends mit vollständiger
                Design- und UX-Freiheit.
              </p>

              <h3 style={h3Style}>Wann Custom die richtige Entscheidung ist</h3>
              <p style={pStyle}>
                Custom-Entwicklung lohnt sich bei mindestens einem der folgenden Kriterien:
                Du brauchst hochgradig individuelle Geschäftslogik (komplexe Konfigurationsprozesse,
                maßgeschneiderte Produktkonfiguratoren, B2B-Workflows mit Genehmigungsstufen).
                Dein Umsatzvolumen übersteigt 2 Millionen Euro und Performance-Optimierungen
                auf Millisekunden-Ebene rechtfertigen die Investition. Du hast ein internes
                Entwicklungsteam, das die Lösung langfristig warten kann. Oder: Du operierst
                in einer Nische mit so spezifischen Anforderungen, dass keine bestehende
                Plattform sie abbildet — Abo-Boxen mit komplexen Auswahlalgorithmen,
                Marktplätze mit Multi-Vendor-Logik, physische und digitale Produkte in
                kombinierten Workflows.
              </p>

              <h3 style={h3Style}>Die versteckten Kosten ignorieren</h3>
              <p style={pStyle}>
                Custom-Entwicklung hat einen Preis, der weit über die initialen
                Entwicklungskosten hinausgeht. Kein internes Team? Dann liegt jede
                Änderung, jedes Feature, jeder Sicherheitspatch bei einer externen Agentur —
                zu Agentursätzen von 80–150 €/Stunde. Ein Projekt, das initial 25.000 €
                kostet, kann im zweiten Jahr weitere 15.000–30.000 € an Wartung und
                Weiterentwicklung kosten. Diese Total-Cost-of-Ownership-Rechnung muss
                vor der Entscheidung stehen, nicht danach.
              </p>

              <div style={calloutStyle}>
                <p style={calloutTextStyle}>
                  <strong style={{ color: '#f4efe6', display: 'block', marginBottom: '0.25rem' }}>
                    Unsere Empfehlung für Custom Commerce:
                  </strong>
                  Nutze Shopify als Commerce-Backend mit der Storefront API und baue ein
                  maßgeschneidertes Next.js-Frontend davor. Du bekommst Shopifys
                  Checkout-Qualität plus vollständige Design-Freiheit — ohne die
                  Wartungslast eines selbstverwalteten Backend-Systems. Das ist das
                  Modell, das wir für Projekte ab 40.000 € empfehlen.
                </p>
              </div>
            </section>

            {/* ─── Section 5: Kostenvergleich ─── */}
            <section id="kostenvergleich" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Kostenvergleich über 3 Jahre — die ehrliche Rechnung</h2>

              <p style={pStyle}>
                Die meisten Plattform-Vergleiche zeigen nur die monatlichen Lizenzkosten.
                Das ist irreführend. Relevanter ist die Total Cost of Ownership (TCO) über
                drei Jahre — inklusive Entwicklung, Plugins/Apps, Hosting, Wartung und
                eventuellem Support. Hier sind realistische Zahlen für einen mittelgroßen
                B2C-Shop mit 500–2.000 Produkten und 200.000–500.000 € Jahresumsatz.
              </p>

              {/* 3-Year Cost Table */}
              <div
                style={{
                  overflowX: 'auto',
                  margin: '2rem 0',
                  borderRadius: '4px',
                  border: '1px solid rgba(244,239,230,0.08)',
                }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#0f0f18' }}>
                  <thead>
                    <tr>
                      <th
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: '#ff4d00',
                          padding: '0.875rem 1.25rem',
                          textAlign: 'left',
                          borderBottom: '1px solid rgba(244,239,230,0.08)',
                        }}
                      >
                        Kostenposten
                      </th>
                      <th
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: '#8a8799',
                          padding: '0.875rem 1.25rem',
                          textAlign: 'right',
                          borderBottom: '1px solid rgba(244,239,230,0.08)',
                        }}
                      >
                        Shopify (Basic)
                      </th>
                      <th
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: '#8a8799',
                          padding: '0.875rem 1.25rem',
                          textAlign: 'right',
                          borderBottom: '1px solid rgba(244,239,230,0.08)',
                        }}
                      >
                        WooCommerce
                      </th>
                      <th
                        style={{
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: '#f4efe6',
                          padding: '0.875rem 1.25rem',
                          textAlign: 'right',
                          borderBottom: '1px solid rgba(244,239,230,0.08)',
                        }}
                      >
                        Custom (Headless)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Initiale Entwicklung', '5.000–15.000 €', '5.000–15.000 €', '25.000–60.000 €'],
                      ['Lizenz/Hosting p.a.', '936 € (78 €/Mo)', '1.200 € (Managed)', '1.200 € (Vercel+API)'],
                      ['Apps/Plugins p.a.', '600–1.800 €', '800–2.400 €', '0–600 €'],
                      ['Wartung p.a.', '0 €', '1.500–4.000 €', '3.000–8.000 €'],
                      ['Transaktionsgeb. p.a.*', '500–2.000 €', '0 €', '0 €'],
                      ['TCO 3 Jahre gesamt', '20.000–37.000 €', '22.000–45.000 €', '38.000–100.000 €'],
                    ].map(([item, shopify, woo, custom], i, arr) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom: i < arr.length - 1 ? '1px solid rgba(244,239,230,0.04)' : 'none',
                          background: i === arr.length - 1 ? 'rgba(255,77,0,0.04)' : 'transparent',
                        }}
                      >
                        <td
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.875rem',
                            fontWeight: i === arr.length - 1 ? 600 : 400,
                            color: i === arr.length - 1 ? '#f4efe6' : '#c8c3bb',
                            padding: '0.75rem 1.25rem',
                          }}
                        >
                          {item}
                        </td>
                        <td
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.875rem',
                            fontWeight: i === arr.length - 1 ? 600 : 400,
                            color: i === arr.length - 1 ? '#f4efe6' : '#8a8799',
                            padding: '0.75rem 1.25rem',
                            textAlign: 'right',
                          }}
                        >
                          {shopify}
                        </td>
                        <td
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.875rem',
                            fontWeight: i === arr.length - 1 ? 600 : 400,
                            color: i === arr.length - 1 ? '#f4efe6' : '#8a8799',
                            padding: '0.75rem 1.25rem',
                            textAlign: 'right',
                          }}
                        >
                          {woo}
                        </td>
                        <td
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.875rem',
                            fontWeight: i === arr.length - 1 ? 600 : 400,
                            color: i === arr.length - 1 ? '#f4efe6' : '#8a8799',
                            padding: '0.75rem 1.25rem',
                            textAlign: 'right',
                          }}
                        >
                          {custom}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.8125rem',
                  color: '#8A8799',
                  lineHeight: 1.6,
                  margin: '0.75rem 0 1.25rem 0',
                }}
              >
                * Transaktionsgebühren bei Shopify Basic (ohne Shopify Payments): 2% auf Bestellwert. Bei 300.000 € Jahresumsatz = 6.000 € p.a. / 18.000 € über 3 Jahre.
                Die Tabelle zeigt konservative bis mittlere Schätzungen. Custom-Entwicklung kann bei großen Teams und komplexen Projekten deutlich höher ausfallen.
              </p>

              <p style={pStyle}>
                Was die Tabelle zeigt: Shopify und WooCommerce liegen im mittleren TCO
                erstaunlich nah beieinander. Der scheinbare Kostenvorteil von WooCommerce
                (keine Lizenzgebühren) wird oft durch höhere Wartungskosten und
                Plugin-Ausgaben aufgefressen. Custom-Entwicklung ist langfristig nur dann
                günstiger, wenn die erhöhten Conversion-Raten und die eingesparten
                Transaktionsgebühren die höheren Initialkosten überwiegen.
              </p>
            </section>

            {/* ─── Section 6: Entscheidungsmatrix ─── */}
            <section id="entscheidungsmatrix" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Entscheidungsmatrix: Welche Plattform ist deine?</h2>

              <p style={pStyle}>
                Beantworte die folgenden Fragen ehrlich. Für jedes &bdquo;Ja&ldquo; bei einer Plattform
                vergibst du einen Punkt. Die Plattform mit den meisten Punkten ist deine.
              </p>

              <div
                style={{
                  overflowX: 'auto',
                  margin: '2rem 0',
                  borderRadius: '4px',
                  border: '1px solid rgba(244,239,230,0.08)',
                }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#0f0f18' }}>
                  <thead>
                    <tr>
                      <th style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ff4d00', padding: '0.875rem 1.25rem', textAlign: 'left', borderBottom: '1px solid rgba(244,239,230,0.08)' }}>Kriterium</th>
                      <th style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a8799', padding: '0.875rem 1.25rem', textAlign: 'center', borderBottom: '1px solid rgba(244,239,230,0.08)' }}>Shopify</th>
                      <th style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8a8799', padding: '0.875rem 1.25rem', textAlign: 'center', borderBottom: '1px solid rgba(244,239,230,0.08)' }}>WooCommerce</th>
                      <th style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f4efe6', padding: '0.875rem 1.25rem', textAlign: 'center', borderBottom: '1px solid rgba(244,239,230,0.08)' }}>Custom</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Du startest neu und willst schnell live', '✓', '—', '—'],
                      ['Kein internes Entwicklungsteam', '✓', '—', '—'],
                      ['Content-Marketing als Wachstumsstrategie', '—', '✓', '✓'],
                      ['Vollständige DSGVO-Datenkontrolle nötig', '—', '✓', '✓'],
                      ['Umsatz unter 500.000 € p.a.', '✓', '✓', '—'],
                      ['Komplexe B2B-Preislogik erforderlich', '—', '✓', '✓'],
                      ['Umsatz über 2 Mio. € p.a.', '—', '—', '✓'],
                      ['Einzigartiger Produktkonfigurator benötigt', '—', '—', '✓'],
                      ['Internationaler Verkauf in 5+ Märkten', '✓', '—', '✓'],
                      ['Budget unter 10.000 € für Entwicklung', '✓', '✓', '—'],
                    ].map(([criteria, shopify, woo, custom], i, arr) => (
                      <tr key={i} style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(244,239,230,0.04)' : 'none' }}>
                        <td style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: '#c8c3bb', padding: '0.75rem 1.25rem' }}>{criteria}</td>
                        <td style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: shopify === '✓' ? '#22c55e' : '#2a2838', padding: '0.75rem 1.25rem', textAlign: 'center', fontWeight: 600 }}>{shopify}</td>
                        <td style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: woo === '✓' ? '#22c55e' : '#2a2838', padding: '0.75rem 1.25rem', textAlign: 'center', fontWeight: 600 }}>{woo}</td>
                        <td style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.875rem', color: custom === '✓' ? '#22c55e' : '#2a2838', padding: '0.75rem 1.25rem', textAlign: 'center', fontWeight: 600 }}>{custom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p style={pStyle}>
                Einige Kombinationen aus der Matrix sind besonders häufig: Wer 4–5 Punkte
                bei Shopify hat und wenig bei den anderen, sollte mit Shopify starten —
                ohne zu zögern. Wer hauptsächlich WooCommerce-Punkte sammelt und kein
                eigenes Entwicklungsteam hat, sollte eine Agentur beauftragen, die
                WooCommerce professionell aufsetzt und wartet. Wer Custom-Punkte dominiert,
                sollte mit einem erfahrenen Entwicklungspartner eine ehrliche
                TCO-Rechnung aufstellen, bevor er sich festlegt.
              </p>
            </section>

            {/* ─── Section 7: Fazit ─── */}
            <section id="fazit" style={{ marginBottom: '3rem' }}>
              <h2 style={h2Style}>Fazit: Die Wahrheit über Plattform-Entscheidungen</h2>

              <p style={pStyle}>
                Keine Plattform ist für alle richtig. Shopify ist das beste Werkzeug für
                schnellen, zuverlässigen D2C-Commerce bis zu einem bestimmten Komplexitätsniveau.
                WooCommerce ist das richtige Werkzeug für Content-getriebene Businesses mit
                SEO-Fokus und Budgetdisziplin — vorausgesetzt, jemand wartet es professionell.
                Custom-Entwicklung ist die richtige Antwort auf echte Einzigartigkeit — wenn
                Standardlösungen die Anforderungen schlicht nicht abbilden können.
              </p>

              <p style={pStyle}>
                Was fast immer falsch ist: die billigste Option zu wählen, ohne die
                Total-Cost-of-Ownership über drei Jahre zu rechnen. Oder die flexibelste
                Option zu wählen, weil Flexibilität gut klingt, ohne den tatsächlichen
                Bedarf für diese Flexibilität zu hinterfragen. Plattform-Migrationen nach
                zwei Jahren sind teuer — nicht wegen der technischen Komplexität, sondern
                wegen der SEO-Risiken, Datenmigration und Mitarbeiter-Schulung.
              </p>

              <p style={pStyle}>
                Nimm dir die Zeit für die richtige Entscheidung jetzt. Sie zahlt sich über
                Jahre aus.
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
                Welche Plattform ist richtig für dich?
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
                Kostenlose Plattform-Beratung — wir analysieren deinen Use Case.
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
                Kostenlos beraten lassen →
              </Link>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </>
  )
}
