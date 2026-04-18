'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* ============================================================
   ABOUT SECTION
   ============================================================ */
export default function About() {
  const sectionRef = useRef<HTMLElement>(null!)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any

    const init = async () => {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      ctx = gsap.context(() => {
        const image = sectionRef.current.querySelector('[data-about-image]')
        const content = sectionRef.current.querySelector('[data-about-content]')

        if (image) {
          gsap.fromTo(
            image,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: image,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          )
        }

        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0, x: 40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: content,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          )
        }
      }, sectionRef)
    }

    init()

    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="ueber-uns"
      aria-label="Über PixelCraft Media — Webdesign Agentur Team"
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(2rem, 5vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* Team image */}
          <div
            data-about-image
            style={{
              aspectRatio: '4/5',
              borderRadius: '4px',
              border: '1px solid var(--border-subtle)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/pictures/team/01_team-studio.png"
              alt="PixelCraft Media Team im Studio"
              fill
              sizes="(max-width: 768px) 100%, 50vw"
              style={{ objectFit: 'cover' }}
              priority={false}
              loading="lazy"
            />
            {/* Subtle orange gradient overlay */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(9,9,15,0.5) 0%, transparent 50%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Text content */}
          <div data-about-content>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--orange-500)',
                marginBottom: '1.5rem',
              }}
            >
              Wer wir sind
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: 400,
                color: '#F4EFE6',
                lineHeight: 1.2,
                marginBottom: '1.75rem',
              }}
            >
              Wir sind PixelCraft Media.
            </h2>

            <div
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                marginBottom: '1.5rem',
              }}
            >
              <p style={{ marginBottom: '1.25rem' }}>
                Keine Agentur von der Stange. Wir sind ein kleines Team mit großen
                Ansprüchen. Für uns ist jedes Projekt eine Chance, das Beste
                rauszuholen — nicht das Schnellste, nicht das Günstigste.
              </p>
              <p style={{ marginBottom: '1.25rem' }}>
                Wir arbeiten mit Unternehmen, die verstehen, dass ihre Website
                mehr ist als eine digitale Visitenkarte. Sie ist ihr wichtigstes
                Verkaufswerkzeug. Und das behandeln wir auch so.
              </p>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#F4EFE6',
                marginBottom: '2rem',
              }}
            >
              Das Beste.
            </p>

            <Link
              href="/ueber-uns"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: 'var(--orange-500)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'color 0.2s ease, gap 0.2s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--orange-400)'
                ;(e.currentTarget as HTMLElement).style.gap = '0.65rem'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.color = 'var(--orange-500)'
                ;(e.currentTarget as HTMLElement).style.gap = '0.4rem'
              }}
            >
              → Mehr über uns
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
