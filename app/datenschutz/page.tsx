import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung — PixelCraft Media',
  description: 'Datenschutzerklärung der PixelCraft Media Webdesign Agentur gemäß DSGVO.',
  robots: { index: false, follow: false },
}

const sectionStyle: React.CSSProperties = { marginBottom: '2.5rem' }
const h2Style: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: 'var(--orange-500)',
  marginBottom: '0.75rem',
}
const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
  fontSize: '1rem',
  color: 'var(--text-secondary)',
  lineHeight: 1.7,
}

export default function DatenschutzPage() {
  return (
    <>
      <Navigation />
      <main
        style={{
          background: 'var(--bg-base)',
          minHeight: '100vh',
          paddingTop: 'clamp(8rem, 15vw, 12rem)',
          paddingBottom: 'clamp(5rem, 10vw, 10rem)',
        }}
      >
        <div
          className="dot-grid"
          aria-hidden="true"
          style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
        />

        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 5vw, 4rem)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 400,
              lineHeight: 0.93,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '4rem',
            }}
          >
            DATENSCHUTZ.
          </h1>

          <section style={sectionStyle}>
            <h2 style={h2Style}>1. Datenschutz auf einen Blick</h2>
            <p style={bodyStyle}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>2. Verantwortlicher</h2>
            <address style={{ ...bodyStyle, fontStyle: 'normal' }}>
              Digital4X GmbH
              <br />
              (Betrieb unter dem Markennamen PixelCraft Media)
              <br />
              Am Bild 27a
              <br />
              97941 Tauberbischofsheim
              <br />
              Deutschland
              <br />
              E-Mail:{' '}
              <a
                href="mailto:info@pixelcraft-media.de"
                style={{ color: 'var(--orange-500)', textDecoration: 'none' }}
              >
                info@pixelcraft-media.de
              </a>
            </address>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>3. Datenerfassung auf dieser Website</h2>
            <p style={{ ...bodyStyle, marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Cookies</strong>
              <br />
              Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien,
              die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei,
              unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Wir
              setzen nur technisch notwendige Cookies ohne Ihre Einwilligung ein.
            </p>
            <p style={bodyStyle}>
              <strong style={{ color: 'var(--text-primary)' }}>Kontaktformular</strong>
              <br />
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>4. Ihre Rechte</h2>
            <p style={bodyStyle}>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft,
              Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten. Sie haben
              außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
              jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>5. Analyse-Tools und Werbung</h2>
            <p style={bodyStyle}>
              Wir nutzen Plausible Analytics — eine datenschutzfreundliche
              Analysesoftware, die keine Cookies setzt und keine personenbezogenen Daten
              erfasst. Plausible ist DSGVO-konform und erfordert keine Cookie-Banner-
              Einwilligung für die Nutzung.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>6. Hosting</h2>
            <p style={bodyStyle}>
              Diese Website wird bei Vercel Inc. gehostet. Vercel ist unter den
              EU-US Data Privacy Framework zertifiziert. Details:{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--orange-500)', textDecoration: 'none' }}
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
