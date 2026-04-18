'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ParticleGridCanvas } from '@/components/three/ParticleGrid'

/* ============================================================
   STATS — right column trust signals
   ============================================================ */
const STATS = [
  { value: '47', label: 'Projekte\nabgeschlossen' },
  { value: '+280%', label: 'Mehr Anfragen\nim Schnitt' },
  { value: '100%', label: 'Custom —\nkein Template' },
]

/* ============================================================
   HERO SECTION
   ============================================================ */
export default function Hero() {
  const sectionRef   = useRef<HTMLElement>(null!)
  const labelRef     = useRef<HTMLSpanElement>(null!)
  const wordsRef     = useRef<HTMLSpanElement[]>([])
  const subtextRef   = useRef<HTMLParagraphElement>(null!)
  const buttonsRef   = useRef<HTMLDivElement>(null!)
  const trustRef     = useRef<HTMLDivElement>(null!)
  const statsRef     = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    const init = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Label
        gsap.fromTo(
          labelRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 2.1 }
        )

        // Headline words reveal from bottom
        const innerSpans = wordsRef.current.map((outer) =>
          outer.querySelector('.word-inner')
        )
        gsap.fromTo(
          innerSpans,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.15,
            delay: 2.3,
          }
        )

        // Subtext
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 2.8 }
        )

        // Buttons
        gsap.fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 3.1 }
        )

        // Trust chips
        gsap.fromTo(
          trustRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay: 3.4 }
        )

        // Stats — staggered from right
        const statItems = statsRef.current?.querySelectorAll('[data-stat]')
        if (statItems) {
          gsap.fromTo(
            statItems,
            { opacity: 0, x: 24 },
            {
              opacity: 1,
              x: 0,
              duration: 0.75,
              ease: 'power3.out',
              stagger: 0.14,
              delay: 2.5,
            }
          )
        }
      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  const setWordRef = (el: HTMLSpanElement | null, index: number) => {
    if (el) wordsRef.current[index] = el
  }

  const headline = [
    { parts: [{ text: 'BIS ZUM', orange: false }] },
    { parts: [{ text: 'LETZTEN', orange: false }, { text: 'PIXEL.', orange: true }] },
  ]

  return (
    <section
      ref={sectionRef}
      aria-label="PixelCraft Media — Webdesign Agentur Hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 'clamp(480px, 100svh, 700px)',
        background: '#09090F',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid background */}
      <div
        className="dot-grid"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      {/* Hero gradient — radial orange glow from top */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,77,0,0.12) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Particle canvas */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      >
        <ParticleGridCanvas />
      </div>

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          display: 'grid',
          gridTemplateColumns: 'var(--hero-cols, 1fr clamp(160px, 22vw, 280px))',
          gap: 'clamp(2rem, 5vw, 6rem)',
          alignItems: 'center',
        }}
      >
        {/* ── LEFT: Text column ─────────────────────────────── */}
        <div>
          {/* Label */}
          <span
            ref={labelRef}
            style={{
              display: 'block',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.75rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#FF4D00',
              marginBottom: '2rem',
              opacity: 0,
            }}
          >
            Webdesign Agentur
          </span>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3.5rem, 9vw, 10rem)',
              fontWeight: 600,
              lineHeight: 0.93,
              letterSpacing: '-0.02em',
              margin: 0,
              marginBottom: '2rem',
            }}
          >
            {headline.map((line, lineIdx) => {
              let wordsBefore = headline
                .slice(0, lineIdx)
                .reduce((acc, l) => acc + l.parts.reduce((a, p) => a + p.text.split(' ').length, 0), 0)
              return (
                <span key={lineIdx} style={{ display: 'block' }}>
                  {line.parts.map((part, partIdx) =>
                    part.text.split(' ').map((word, wordIdx) => {
                      const globalIdx = wordsBefore++
                      return (
                        <span
                          key={`${partIdx}-${wordIdx}`}
                          ref={(el) => setWordRef(el, globalIdx)}
                          style={{
                            display: 'inline-block',
                            overflow: 'hidden',
                            marginRight: '0.25em',
                            verticalAlign: 'bottom',
                          }}
                        >
                          <span
                            className="word-inner"
                            style={{
                              display: 'inline-block',
                              color: part.orange ? '#FF4D00' : '#F4EFE6',
                            }}
                          >
                            {word}
                          </span>
                        </span>
                      )
                    })
                  )}
                </span>
              )
            })}
          </h1>

          {/* Subtext */}
          <p
            ref={subtextRef}
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1.0625rem',
              color: '#F4EFE6',
              maxWidth: '460px',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
              opacity: 0,
            }}
          >
            Kein Pixel dem Zufall. Kein Besucher verloren.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="hero-cta-buttons"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3.5rem',
              opacity: 0,
            }}
          >
            <Link
              href="/kontakt"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#FF4D00',
                color: '#F4EFE6',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                padding: '0.875rem 1.75rem',
                borderRadius: '999px',
                textDecoration: 'none',
                transition: 'background 0.2s ease, transform 0.2s ease',
                minHeight: '44px',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = '#FF6B24'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background = '#FF4D00'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Lass uns dein Projekt besprechen →
            </Link>

            <Link
              href="#showcase"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                color: '#F4EFE6',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                padding: '0.875rem 1.75rem',
                borderRadius: '999px',
                border: '1px solid rgba(244,239,230,0.32)',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
                minHeight: '44px',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = '#FF4D00'
                ;(e.currentTarget as HTMLElement).style.color = '#FF4D00'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(244,239,230,0.32)'
                ;(e.currentTarget as HTMLElement).style.color = '#F4EFE6'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              Arbeiten ansehen ↓
            </Link>
          </div>

          {/* Trust chips */}
          <div ref={trustRef} style={{ opacity: 0, display: 'flex', gap: 'clamp(0.4rem, 2vw, 0.75rem)', flexWrap: 'wrap' }}>
            {['DSGVO konform', 'Made in Germany', 'Seit 2019'].map((chip) => (
              <span
                key={chip}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  color: 'rgba(244,239,230,0.6)',
                  textTransform: 'uppercase',
                  paddingRight: '0.75rem',
                  borderRight: '1px solid rgba(244,239,230,0.1)',
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Stats column ───────────────────────────── */}
        <div
          ref={statsRef}
          className="hero-stats-col"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
            alignSelf: 'center',
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              data-stat
              style={{
                opacity: 0,
                paddingTop: i === 0 ? '0' : 'clamp(1.25rem, 2.5vw, 2rem)',
                paddingBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
                borderBottom: i < STATS.length - 1 ? '1px solid rgba(244,239,230,0.08)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.25rem, 3.5vw, 3.5rem)',
                  fontWeight: 600,
                  lineHeight: 1,
                  color: '#FF4D00',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.35rem',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 400,
                  color: 'rgba(244,239,230,0.65)',
                  letterSpacing: '0.06em',
                  lineHeight: 1.55,
                  textTransform: 'uppercase',
                  whiteSpace: 'pre-line',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, #FF4D00, transparent)',
            animation: 'fadeIn 1s ease 3.8s both',
          }}
        />
      </div>
    </section>
  )
}
