'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

/* ============================================================
   404 NOT FOUND
   3-tier typographic hierarchy — matches Statement section style
   ============================================================ */
export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    const init = async () => {
      const gsap = (await import('gsap')).default

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo('[data-404-label]',
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo('[data-404-t1]',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65 },
          '-=0.3'
        )
        .fromTo('[data-404-t2]',
          { clipPath: 'inset(0 100% 0 0)', x: -20, opacity: 0 },
          { clipPath: 'inset(0 0% 0 0)', x: 0, opacity: 1, duration: 0.85 },
          '-=0.4'
        )
        .fromTo('[data-404-t3]',
          { clipPath: 'inset(0 100% 0 0)', x: -20, opacity: 0 },
          { clipPath: 'inset(0 0% 0 0)', x: 0, opacity: 1, duration: 1.0 },
          '-=0.55'
        )
        .fromTo('[data-404-sub]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.5'
        )
        .fromTo('[data-404-buttons]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.35'
        )
      }, containerRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <main
      aria-label="Seite nicht gefunden — 404"
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: '#050508',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* "404" background watermark */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-5vw',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-cormorant)',
          fontSize: '50vw',
          fontWeight: 400,
          lineHeight: 1,
          color: '#F4EFE6',
          opacity: 0.025,
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        404
      </span>

      {/* Orange glow — top left */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-5%',
          width: '45vw',
          height: '45vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,77,0,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        {/* Label */}
        <span
          data-404-label
          style={{
            display: 'block',
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#FF4D00',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            opacity: 0,
          }}
        >
          Fehler · 404
        </span>

        {/* Tier 1 — setup, italic muted */}
        <span
          data-404-t1
          style={{
            display: 'block',
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.1rem, 1.8vw, 2.2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(244,239,230,0.3)',
            letterSpacing: '0.01em',
            lineHeight: 1.4,
            marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
            opacity: 0,
          }}
        >
          Sieht so aus, als wärst du verloren.
        </span>

        {/* Tier 2 — FALSCH */}
        <span
          data-404-t2
          style={{
            display: 'block',
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(3rem, 6vw, 6.5rem)',
            fontWeight: 400,
            lineHeight: 0.93,
            letterSpacing: '-0.02em',
            color: '#F4EFE6',
            marginBottom: 'clamp(0.2rem, 0.4vw, 0.5rem)',
            opacity: 0,
            willChange: 'transform',
          }}
        >
          FALSCH
        </span>

        {/* Tier 3 — ABGEBOGEN. (orange) */}
        <span
          data-404-t3
          style={{
            display: 'block',
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(3rem, 7.5vw, 8rem)',
            fontWeight: 400,
            lineHeight: 0.93,
            letterSpacing: '-0.025em',
            color: '#FF4D00',
            marginBottom: 'clamp(3rem, 5.5vw, 5rem)',
            opacity: 0,
            willChange: 'transform',
          }}
        >
          ABGEBOGEN.
        </span>

        {/* Sub copy */}
        <p
          data-404-sub
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '400px',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            opacity: 0,
          }}
        >
          Aber deine nächste Website könnte genau hier stehen.
        </p>

        {/* Buttons */}
        <div
          data-404-buttons
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            opacity: 0,
          }}
        >
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#FF4D00',
              color: '#F4EFE6',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '1rem 2rem',
              borderRadius: '999px',
              textDecoration: 'none',
              transition: 'background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 0 0 0 rgba(255,77,0,0)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#FF6B24'
              el.style.transform = 'translateY(-3px)'
              el.style.boxShadow = '0 12px 40px rgba(255,77,0,0.35)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#FF4D00'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = '0 0 0 0 rgba(255,77,0,0)'
            }}
          >
            Zurück zur Startseite →
          </Link>

          <a
            href="tel:+4915128787232"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              color: '#F4EFE6',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1rem',
              fontWeight: 500,
              padding: '1rem 2rem',
              borderRadius: '999px',
              border: '1px solid rgba(244,239,230,0.2)',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(244,239,230,0.5)'
              el.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'rgba(244,239,230,0.2)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Jetzt anrufen →
          </a>
        </div>
      </div>
    </main>
  )
}
