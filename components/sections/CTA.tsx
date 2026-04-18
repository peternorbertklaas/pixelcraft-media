'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

/* ============================================================
   CTA SECTION — final call to action with urgency
   ============================================================ */
export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null!)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    const init = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const headline = sectionRef.current.querySelector('[data-cta-headline]')
        const sub = sectionRef.current.querySelector('[data-cta-sub]')
        const cal = sectionRef.current.querySelector('[data-cta-cal]')
        const buttons = sectionRef.current.querySelector('[data-cta-buttons]')

        const targets = [headline, sub, cal, buttons].filter(Boolean)
        targets.forEach((el, i) => {
          if (!el) return
          gsap.fromTo(
            el,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              delay: i * 0.12,
            }
          )
        })
      }, sectionRef)
    }

    init()

    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      aria-label="Gespräch buchen — Webdesign Agentur Kontakt"
      style={{
        position: 'relative',
        background: 'var(--bg-void)',
        paddingTop: 'clamp(5rem, 12vw, 12rem)',
        paddingBottom: 'clamp(5rem, 12vw, 12rem)',
        overflow: 'hidden',
      }}
    >
      {/* Indigo glow from bottom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80vw',
          height: '50vh',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      {/* Orange glow top-left */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-5%',
          left: '-5%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,77,0,0.07) 0%, transparent 65%)',
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
        {/* Headline */}
        <div data-cta-headline style={{ marginBottom: '1.5rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4.8vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 0.93,
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#F4EFE6', display: 'block' }}>
              Wir denken in Pixeln.
            </span>
            <span style={{ color: '#F4EFE6', display: 'block' }}>
              Ihr denkt in Umsatz.
            </span>
            <span style={{ color: '#FF4D00', display: 'block' }}>
              Wir sprechen beide Sprachen.
            </span>
          </h2>
        </div>

        {/* Subtext */}
        <p
          data-cta-sub
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1.125rem',
            color: 'var(--text-secondary)',
            marginBottom: '0',
            maxWidth: '480px',
          }}
        >
          Wir sind wählerisch. Du auch?
        </p>

        {/* 3 step cards */}
        <div
          data-cta-cal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '1rem',
            marginTop: 'clamp(3rem, 5vw, 4.5rem)',
            marginBottom: 'clamp(3rem, 5vw, 4.5rem)',
          }}
        >
          {[
            {
              num: '01',
              title: 'Analyse',
              text: 'Wir schauen uns deine aktuelle Website ehrlich an — ohne Beschönigung.',
            },
            {
              num: '02',
              title: 'Potenzial',
              text: 'Du erfährst konkret was möglich ist und was es realistisch kostet.',
            },
            {
              num: '03',
              title: 'Entscheidung',
              text: 'Du entscheidest. Keine Verpflichtung, kein Druck, kein Follow-up-Spam.',
            },
          ].map((step) => (
            <div
              key={step.num}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderTop: '2px solid #FF4D00',
                borderRadius: '4px',
                padding: 'clamp(1.25rem, 2.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#FF4D00',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {step.num}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.3rem, 1.9vw, 1.75rem)',
                  fontWeight: 400,
                  color: '#F4EFE6',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                }}
              >
                {step.title}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {step.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div
          data-cta-buttons
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Link
            href="/kontakt"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: '#FF4D00',
              color: '#F4EFE6',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.0625rem',
              fontWeight: 600,
              padding: '1.125rem 2.5rem',
              borderRadius: '999px',
              textDecoration: 'none',
              transition: 'background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 0 0 0 rgba(255,77,0,0)',
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
            Termin buchen
          </Link>

          <a
            href="tel:+4915128787232"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              background: 'transparent',
              color: '#F4EFE6',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.0625rem',
              fontWeight: 500,
              padding: '1.125rem 2.5rem',
              borderRadius: '999px',
              textDecoration: 'none',
              border: '1px solid rgba(244,239,230,0.2)',
              transition: 'border-color 0.2s ease, transform 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(244,239,230,0.5)'
              el.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.borderColor = 'rgba(244,239,230,0.2)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Jetzt anrufen →
          </a>
        </div>
      </div>
    </section>
  )
}
