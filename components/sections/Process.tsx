'use client'
import { useEffect, useRef, useState } from 'react'

/* ============================================================
   PROCESS DATA
   ============================================================ */
interface Step {
  num: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'DISCOVER',
    description:
      'Wir hören zu, bis wir alles verstehen. Dein Markt, deine Ziele, deine Kunden — das ist unsere Basis.',
  },
  {
    num: '02',
    title: 'STRATEGIZE',
    description:
      'Kein Pixel ohne Strategie. Wir entwickeln einen klaren Plan, der jeden Designentscheid begründet.',
  },
  {
    num: '03',
    title: 'DESIGN',
    description:
      'Pixel für Pixel. Kein Kompromiss. Jedes Element dient einem Zweck — Ästhetik und Funktion in Balance.',
  },
  {
    num: '04',
    title: 'BUILD',
    description:
      'Schnell, sauber, zukunftssicher. Code, der performt und skaliert — LCP unter 1.5s, Lighthouse über 90.',
  },
  {
    num: '05',
    title: 'LAUNCH & GROW',
    description:
      'Wir sind nicht weg, wenn die Site live ist. Wir messen, optimieren und wachsen gemeinsam mit dir.',
  },
]

/* ============================================================
   STEP ITEM
   ============================================================ */
function StepItem({ step, index }: { step: Step; index: number }) {
  const [hovered, setHovered] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null!)

  return (
    <div
      ref={rowRef}
      data-step-item
      style={{
        borderTop: `1px solid ${hovered ? 'var(--orange-500)' : 'var(--border-subtle)'}`,
        padding: 'clamp(1.5rem, 3vw, 2.5rem) 0',
        display: 'grid',
        gridTemplateColumns: 'clamp(2.5rem, 5vw, 5rem) 1fr',
        gap: 'clamp(1rem, 3vw, 4rem)',
        alignItems: 'start',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number */}
      <span
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 400,
          color: hovered ? 'var(--orange-400)' : 'var(--orange-500)',
          lineHeight: 1,
          transition: 'color 0.3s ease',
          paddingTop: '0.1em',
        }}
      >
        {step.num}
      </span>

      {/* Content */}
      <div style={{ paddingTop: '0.3em' }}>
        <h3
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: hovered ? '#F4EFE6' : 'rgba(244,239,230,0.85)',
            letterSpacing: '0.04em',
            marginBottom: '0.75rem',
            transition: 'color 0.3s ease',
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '600px',
          }}
        >
          {step.description}
        </p>
      </div>
    </div>
  )
}

/* ============================================================
   PROCESS SECTION
   ============================================================ */
export default function Process() {
  const sectionRef = useRef<HTMLElement>(null!)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    const init = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const items = sectionRef.current.querySelectorAll('[data-step-item]')
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            { x: -60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
              delay: i * 0.08,
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
      id="prozess"
      aria-label="Unser Arbeitsprozess — Website erstellen lassen"
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
        <header style={{ marginBottom: 'clamp(3rem, 5vw, 4rem)' }}>
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
            Wie wir arbeiten
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
            <span style={{ display: 'block' }}>DER</span>
            <span style={{ display: 'block', color: 'var(--orange-500)' }}>
              PROZESS.
            </span>
          </h2>
        </header>

        {/* Steps */}
        <div>
          {STEPS.map((step, i) => (
            <StepItem key={step.num} step={step} index={i} />
          ))}
          {/* Final border */}
          <div
            style={{
              borderTop: '1px solid var(--border-subtle)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
