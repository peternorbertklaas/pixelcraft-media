'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

/* ============================================================
   STATEMENT — typografische Hierarchie
   Tier 1 (klein, kursiv, gedimmt): Setup
   Tier 2 (groß, weiß):             "WIR BAUEN"
   Tier 3 (riesig, orange):         "WACHSTUMSMASCHINEN."
   Alles gleichzeitig im Viewport sichtbar.
   ============================================================ */
export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null!)
  const tier1Ref   = useRef<HTMLSpanElement>(null!)
  const tier2Ref   = useRef<HTMLSpanElement>(null!)
  const tier3Ref   = useRef<HTMLSpanElement>(null!)
  const subRef     = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    const init = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        // Tier 1 — fade up (setup, subtle)
        gsap.fromTo(
          tier1Ref.current,
          { opacity: 0, y: 14 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
            scrollTrigger: { trigger: tier1Ref.current, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )

        // Tier 2 — clip-path reveal (WIR BAUEN)
        gsap.fromTo(
          tier2Ref.current,
          { clipPath: 'inset(0 100% 0 0)', x: -20, opacity: 0 },
          {
            clipPath: 'inset(0 0% 0 0)', x: 0, opacity: 1,
            duration: 0.9, ease: 'power3.out', delay: 0.15,
            scrollTrigger: { trigger: tier2Ref.current, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )

        // Tier 3 — clip-path reveal (WACHSTUMSMASCHINEN. — the payoff)
        gsap.fromTo(
          tier3Ref.current,
          { clipPath: 'inset(0 100% 0 0)', x: -20, opacity: 0 },
          {
            clipPath: 'inset(0 0% 0 0)', x: 0, opacity: 1,
            duration: 1.1, ease: 'power3.out', delay: 0.3,
            scrollTrigger: { trigger: tier3Ref.current, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )

        // Sub copy
        gsap.fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.2,
            scrollTrigger: { trigger: subRef.current, start: 'top 90%', toggleActions: 'play none none none' },
          }
        )
      }, sectionRef)
    }

    init()
    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="Unsere Philosophie — Wachstumsmaschinen statt Templates"
      style={{
        background: '#050508',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 'clamp(5rem, 10vw, 10rem)',
        paddingBottom: 'clamp(5rem, 10vw, 10rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        {/* ── Tier 1: Setup ─────────────────────────────────────── */}
        <span
          ref={tier1Ref}
          style={{
            display: 'block',
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.1rem, 1.8vw, 2.2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(244,239,230,0.3)',
            letterSpacing: '0.01em',
            lineHeight: 1.4,
            marginBottom: 'clamp(1.75rem, 3.5vw, 3rem)',
            opacity: 0,
          }}
        >
          Wir bauen keine Websites.
        </span>

        {/* ── Tier 2: "WIR BAUEN" ───────────────────────────────── */}
        <span
          ref={tier2Ref}
          style={{
            display: 'block',
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 5.2vw, 5.5rem)',
            fontWeight: 400,
            lineHeight: 0.93,
            letterSpacing: '-0.02em',
            color: '#F4EFE6',
            marginBottom: 'clamp(0.2rem, 0.4vw, 0.5rem)',
            opacity: 0,
            willChange: 'transform',
          }}
        >
          WIR BAUEN
        </span>

        {/* ── Tier 3: "WACHSTUMSMASCHINEN." ────────────────────── */}
        <span
          ref={tier3Ref}
          style={{
            display: 'block',
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
            fontWeight: 400,
            lineHeight: 0.93,
            letterSpacing: '-0.025em',
            color: '#FF4D00',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            opacity: 0,
            willChange: 'transform',
          }}
        >
          WACHSTUMSMASCHINEN.
        </span>

        {/* ── Sub copy + CTA ─────────────────────────────────────── */}
        <div
          ref={subRef}
          style={{ maxWidth: '460px', opacity: 0 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
            }}
          >
            47 Projekte. Durchschnittlich +280% mehr Anfragen.
            Kein einziges davon ein Template.
          </p>

          <Link
            href="/projekte"
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--orange-500)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'gap 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.gap = '0.85rem'
              el.style.color = 'var(--orange-400)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.gap = '0.4rem'
              el.style.color = 'var(--orange-500)'
            }}
          >
            Überzeug dich selbst
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
