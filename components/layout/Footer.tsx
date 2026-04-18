'use client'

/* ============================================================
   FOOTER — Editorial Column Layout
   Wordmark · tagline · CTA | 3-col grid | legal bar
   ============================================================ */

const COL_NAV = [
  { label: 'Arbeiten',   href: '/projekte' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Preise',     href: '/preise' },
  { label: 'Über uns',   href: '/ueber-uns' },
  { label: 'Blog',       href: '/blog' },
  { label: 'Kontakt',    href: '/kontakt' },
]

const COL_SERVICES = [
  { label: 'Webdesign',            href: '/leistungen' },
  { label: 'Webentwicklung',       href: '/leistungen' },
  { label: 'SEO & Performance',    href: '/leistungen' },
  { label: 'Branding & Identity',  href: '/leistungen' },
  { label: 'Content & Copy',       href: '/leistungen' },
  { label: 'Conversion Optimierung', href: '/leistungen' },
]


/* ── Small helpers ────────────────────────────────────────── */
function ColLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: 'block',
        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#FF4D00',
        marginBottom: '1.25rem',
      }}
    >
      {children}
    </span>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        display: 'block',
        fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
        fontSize: '0.875rem',
        fontWeight: 400,
        color: 'rgba(244,239,230,0.5)',
        textDecoration: 'none',
        lineHeight: 1,
        transition: 'color 0.2s ease',
        paddingBottom: '0.7rem',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F4EFE6' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(244,239,230,0.5)' }}
    >
      {children}
    </a>
  )
}

/* ── Footer component ─────────────────────────────────────── */
export function Footer() {
  return (
    <footer
      aria-label="Site footer"
      style={{
        position: 'relative',
        background: '#050508',
        overflow: 'hidden',
        borderTop: '1px solid rgba(244,239,230,0.06)',
      }}
    >
      {/* Subtle grain */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── TOP SECTION ─────────────────────────────────── */}
        <div
          className="footer-top"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            paddingTop: 'clamp(3rem, 6vw, 5rem)',
            paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
            borderBottom: '1px solid rgba(244,239,230,0.06)',
          }}
        >
          {/* Wordmark */}
          <div>
            <a
              href="/"
              aria-label="PixelCraft Media — Startseite"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                  fontWeight: 300,
                  color: '#F4EFE6',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  display: 'inline-flex',
                  alignItems: 'baseline',
                  gap: '0.2em',
                }}
              >
                PIXELCRAFT
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    width: '0.16em',
                    height: '0.16em',
                    borderRadius: '50%',
                    background: '#FF4D00',
                    boxShadow: '0 0 14px rgba(255,77,0,0.6)',
                    verticalAlign: 'middle',
                    flexShrink: 0,
                  }}
                />
                MEDIA
              </div>
            </a>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.8125rem',
                fontStyle: 'italic',
                color: 'rgba(244,239,230,0.45)',
                letterSpacing: '0.06em',
                marginTop: '0.75rem',
              }}
            >
              Kein Pixel dem Zufall.
            </p>
          </div>

          {/* CTA */}
          <a
            href="/kontakt"
            className="footer-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              color: '#F4EFE6',
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 600,
              padding: '0.75rem 1.5rem',
              borderRadius: '999px',
              border: '1px solid rgba(244,239,230,0.18)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
              whiteSpace: 'nowrap',
              transition: 'border-color 0.2s ease, color 0.2s ease',
              minHeight: '44px',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = '#FF4D00'
              el.style.color = '#FF4D00'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(244,239,230,0.18)'
              el.style.color = '#F4EFE6'
            }}
          >
            Projekt starten →
          </a>
        </div>

        {/* ── COLUMN GRID ─────────────────────────────────── */}
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(2rem, 5vw, 4rem)',
            paddingTop: 'clamp(2.5rem, 5vw, 3.5rem)',
            paddingBottom: 'clamp(2.5rem, 5vw, 3.5rem)',
            borderBottom: '1px solid rgba(244,239,230,0.06)',
          }}
        >
          {/* Column 1 — Navigation */}
          <nav aria-label="Footer navigation">
            <ColLabel>Navigation</ColLabel>
            {COL_NAV.map((link) => (
              <FooterLink key={link.href + link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </nav>

          {/* Column 2 — Leistungen */}
          <div>
            <ColLabel>Leistungen</ColLabel>
            {COL_SERVICES.map((link) => (
              <FooterLink key={link.label} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>

          {/* Column 3 — Kontakt + Social */}
          <div>
            <ColLabel>Kontakt</ColLabel>
            <div style={{ marginBottom: '1.75rem' }}>
              <a
                href="mailto:info@pixelcraft-media.de"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '0.875rem',
                  color: 'rgba(244,239,230,0.5)',
                  textDecoration: 'none',
                  marginBottom: '0.5rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F4EFE6' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(244,239,230,0.5)' }}
              >
                info@pixelcraft-media.de
              </a>
              <a
                href="tel:+4915128787232"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '0.875rem',
                  color: 'rgba(244,239,230,0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F4EFE6' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(244,239,230,0.5)' }}
              >
                +49 151 287 87 232
              </a>
            </div>

          </div>
        </div>

        {/* ── BOTTOM BAR ──────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '0.75rem',
              color: 'rgba(244,239,230,0.2)',
              letterSpacing: '0.06em',
            }}
          >
            © 2026 PixelCraft Media. Alle Rechte vorbehalten.
          </span>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { label: 'Impressum', href: '/impressum' },
              { label: 'Datenschutz', href: '/datenschutz' },
              { label: 'Sitemap', href: '/sitemap.xml' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                  fontSize: '0.75rem',
                  color: 'rgba(244,239,230,0.2)',
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(244,239,230,0.5)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(244,239,230,0.2)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-top {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}
