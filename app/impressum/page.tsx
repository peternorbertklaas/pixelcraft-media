import type { Metadata } from 'next'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Impressum — PixelCraft Media',
  description: 'Impressum der PixelCraft Media Webdesign Agentur.',
  robots: { index: false, follow: false },
}

const sectionStyle: React.CSSProperties = {
  marginBottom: '2.5rem',
}

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

export default function ImpressumPage() {
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
        {/* Dot grid */}
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
          {/* Heading */}
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
            IMPRESSUM.
          </h1>

          {/* Angaben gemäß § 5 TMG */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Angaben gemäß § 5 TMG</h2>
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
            </address>
          </section>

          {/* Vertreten durch */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Vertreten durch</h2>
            <p style={bodyStyle}>Klaas Schroeder (Geschäftsführer)</p>
          </section>

          {/* Kontakt */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Kontakt</h2>
            <p style={bodyStyle}>
              Telefon:{' '}
              <a
                href="tel:+4915128787232"
                style={{ color: 'var(--orange-500)', textDecoration: 'none' }}
              >
                +49 151 287 87 232
              </a>
              <br />
              E-Mail:{' '}
              <a
                href="mailto:info@pixelcraft-media.de"
                style={{ color: 'var(--orange-500)', textDecoration: 'none' }}
              >
                info@pixelcraft-media.de
              </a>
            </p>
          </section>

          {/* Handelsregister */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Handelsregister</h2>
            <p style={bodyStyle}>
              Registergericht: Amtsgericht Frankfurt am Main
              <br />
              Registernummer: HRB 132688
            </p>
          </section>

          {/* Verantwortlich */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p style={bodyStyle}>
              Klaas Schroeder
              <br />
              Am Bild 27a
              <br />
              97941 Tauberbischofsheim
            </p>
          </section>

          {/* Streitschlichtung */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Streitschlichtung</h2>
            <p style={bodyStyle}>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Haftungsausschluss</h2>
            <p style={bodyStyle}>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
              keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG
              für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich.
            </p>
          </section>

          {/* Urheberrecht */}
          <section style={sectionStyle}>
            <h2 style={h2Style}>Urheberrecht</h2>
            <p style={bodyStyle}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
