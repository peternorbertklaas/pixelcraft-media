'use client'
import { useState } from 'react'

/* ============================================================
   TESTIMONIAL DATA
   ============================================================ */
interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  initials: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'PixelCraft hat unsere Conversion Rate von 0,8% auf 3,4% gebracht — in 8 Wochen. Das Design überzeugt unsere Kunden täglich aufs Neue.',
    name: 'Max Hoffmann',
    role: 'CEO',
    company: 'MedTech Solutions GmbH',
    initials: 'MH',
  },
  {
    quote:
      'Endlich eine Agentur, die zuhört. Die neue Website hat unseren Online-Umsatz im ersten Quartal um 380% gesteigert. Keine leeren Versprechen.',
    name: 'Sarah Müller',
    role: 'Gründerin',
    company: 'LuxeCommerce',
    initials: 'SM',
  },
  {
    quote:
      'Prozess war transparent, Ergebnis war bombastisch. Die Ladezeit von 7.8s auf 1.1s hat unsere SEO-Rankings innerhalb von 6 Wochen verdoppelt.',
    name: 'Thomas Weber',
    role: 'Head of Digital',
    company: 'FinanceOne AG',
    initials: 'TW',
  },
]

/* ============================================================
   TESTIMONIAL CARD
   ============================================================ */
function TestimonialCard({ t }: { t: Testimonial }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      style={{
        position: 'relative',
        background: 'var(--bg-surface)',
        border: `1px solid ${hovered ? 'var(--border-visible)' : 'var(--border-subtle)'}`,
        borderRadius: '4px',
        padding: '2.5rem 2rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 12px 40px rgba(0,0,0,0.25)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Large quote mark */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-0.5rem',
          left: '1.25rem',
          fontFamily: 'var(--font-cormorant)',
          fontSize: '8rem',
          lineHeight: 1,
          color: 'var(--orange-500)',
          opacity: 0.15,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        &ldquo;
      </span>

      {/* Quote */}
      <blockquote
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '1.05rem',
          color: '#F4EFE6',
          lineHeight: 1.7,
          position: 'relative',
          zIndex: 1,
          margin: 0,
          paddingTop: '1rem',
        }}
      >
        {t.quote}
      </blockquote>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: 'var(--border-subtle)',
        }}
        aria-hidden="true"
      />

      {/* Author */}
      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.875rem',
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(255,77,0,0.18) 0%, rgba(255,77,0,0.05) 100%)',
            border: '1px solid rgba(255,77,0,0.28)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: '#FF4D00',
            flexShrink: 0,
            letterSpacing: '0.03em',
          }}
          aria-hidden="true"
        >
          {t.initials}
        </div>

        <div>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#F4EFE6',
              lineHeight: 1.3,
            }}
          >
            {t.name}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.3,
            }}
          >
            {t.role}, {t.company}
          </p>
        </div>
      </footer>
    </article>
  )
}

/* ============================================================
   TESTIMONIALS SECTION
   ============================================================ */
export default function Testimonials() {
  return (
    <section
      id="referenzen"
      aria-label="Kundenstimmen — Webdesign Agentur Bewertungen"
      style={{
        background: 'var(--bg-base)',
        paddingTop: 'clamp(5rem, 10vw, 10rem)',
        paddingBottom: 'clamp(5rem, 10vw, 10rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        {/* Heading */}
        <header style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.75rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--orange-500)',
              marginBottom: '1rem',
            }}
          >
            Was Kunden sagen
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 7vw, 8rem)',
              fontWeight: 400,
              lineHeight: 0.93,
              letterSpacing: '-0.02em',
              color: '#F4EFE6',
            }}
          >
            <span style={{ display: 'block' }}>STIMMEN</span>
            <span style={{ display: 'block', color: 'var(--orange-500)' }}>
              DER KUNDEN.
            </span>
          </h2>
        </header>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.25rem)',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
