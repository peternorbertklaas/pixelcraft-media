'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

/* ============================================================
   SHOWCASE — Editorial split: typography left, image right.
   GSAP clip-path reveal on text, parallax on image.
   Consistent with Statement section design language.
   ============================================================ */
export default function Showreel() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    const init = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        /* ── Text lines: same clip-path reveal as Statement ── */
        const lines = sectionRef.current?.querySelectorAll('[data-reveal]')
        lines?.forEach((line, i) => {
          gsap.fromTo(
            line,
            { clipPath: 'inset(0 100% 0 0)', x: -16, opacity: 0 },
            {
              clipPath: 'inset(0 0% 0 0)',
              x: 0,
              opacity: 1,
              duration: 0.85,
              ease: 'power3.out',
              delay: i * 0.08,
              scrollTrigger: {
                trigger: line,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          )
        })

        /* ── Image: fade + scale up ── */
        if (imageRef.current) {
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, scale: 0.96, y: 32 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: imageRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          )
        }

        /* ── Image parallax on scroll ── */
        if (imageRef.current) {
          gsap.to(imageRef.current, {
            yPercent: -6,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          })
        }
      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  const lineStyle: React.CSSProperties = {
    fontFamily: 'var(--font-cormorant)',
    fontSize: 'clamp(2.8rem, 4.5vw, 6.5rem)',
    fontWeight: 400,
    lineHeight: 0.94,
    letterSpacing: '-0.02em',
    display: 'block',
    willChange: 'transform',
    whiteSpace: 'nowrap',
  }

  return (
    <section
      ref={sectionRef}
      id="showcase"
      aria-label="Handwerk bis ins Detail — Ausgewählte Arbeiten"
      style={{
        background: 'var(--bg-void)',
        position: 'relative',
        paddingTop: 'clamp(5rem, 10vw, 10rem)',
        paddingBottom: 'clamp(5rem, 10vw, 10rem)',
      }}
    >
      {/* Dot grid */}
      <div
        className="dot-grid"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      {/* Top border */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 'clamp(1.5rem, 5vw, 4rem)',
          right: 'clamp(1.5rem, 5vw, 4rem)',
          height: '1px',
          background: 'var(--border-subtle)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 'clamp(3rem, 5vw, 6rem)',
          alignItems: 'center',
        }}
      >
        {/* ── LEFT: Typography ──────────────────────────────── */}
        <div>
          {/* Section index */}
          <div
            data-reveal
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-label)',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--orange-500)',
              }}
            >
              03
            </span>
            <span
              aria-hidden="true"
              style={{
                display: 'inline-block',
                width: '32px',
                height: '1px',
                background: 'var(--border-visible)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: 'var(--text-label)',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--text-muted)',
              }}
            >
              Ausgewählte Arbeiten
            </span>
          </div>

          {/* Headline */}
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span data-reveal style={{ ...lineStyle, color: 'var(--text-primary)' }}>
              HAND-
            </span>
            <span data-reveal style={{ ...lineStyle, color: 'var(--text-primary)' }}>
              GEFERTIGT.
            </span>
            <span data-reveal style={{ ...lineStyle, color: 'var(--text-primary)' }}>
              BIS INS
            </span>
            <span data-reveal style={{ ...lineStyle, color: 'var(--orange-500)' }}>
              DETAIL.
            </span>
          </div>

          {/* Body */}
          <p
            data-reveal
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '38ch',
              marginBottom: '2rem',
            }}
          >
            47 Projekte. Kein einziges ein Template. Jeder Pixel mit Absicht gesetzt —
            jedes Projekt auf ein Ziel ausgerichtet: Wachstum.
          </p>

          {/* CTA */}
          <Link
            data-reveal
            href="/projekte"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--orange-500)',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'gap 0.2s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.gap = '0.85rem'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.gap = '0.5rem'
            }}
          >
            Alle Arbeiten ansehen
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* ── RIGHT: Image ──────────────────────────────────── */}
        <div
          ref={imageRef}
          style={{ opacity: 0 }}
        >
          <div
            style={{
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              aspectRatio: '3 / 4',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLDivElement).style.borderColor =
                'rgba(255,77,0,0.3)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLDivElement).style.borderColor =
                'var(--border-subtle)'
            }}
          >
            <Image
              src="/pictures/mockups/05_craftsman-tools-mockup.png"
              alt="PixelCraft Media — Handwerk bis ins Detail"
              fill
              sizes="(max-width: 900px) 100%, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority={false}
              loading="lazy"
            />

            {/* Subtle inner vignette */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(135deg, rgba(5,5,8,0.18) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            />

            {/* Bottom stat chip */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(5,5,8,0.72)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-visible)',
                borderRadius: '999px',
                padding: '0.45rem 0.9rem',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--orange-500)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.06em',
                  whiteSpace: 'nowrap',
                }}
              >
                Ø +280% mehr Anfragen
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
