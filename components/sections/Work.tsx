'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/* ============================================================
   PROJECT DATA
   ============================================================ */
interface Project {
  num: string
  name: string
  tags: string[]
  metric: string
  metricLabel: string
  href: string
  image: string
  year: string
  comingSoon?: boolean
}

const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'LuxeCommerce',
    tags: ['E-Commerce', 'Webdesign'],
    metric: '+380%',
    metricLabel: 'organischer Traffic',
    href: '/projekte/luxecommerce',
    image: '/pictures/mockups/01_luxecommerce-mockup.avif',
    year: '2026',
  },
  {
    num: '02',
    name: 'MedTech Solutions',
    tags: ['SaaS', 'UX/UI Design'],
    metric: '0.8% → 3.4%',
    metricLabel: 'Conversion Rate',
    href: '/projekte/medtech-solutions',
    image: '/pictures/mockups/02_medtech-mockup.avif',
    year: '2026',
  },
  {
    num: '03',
    name: 'Gastro Group',
    tags: ['Restaurants', 'Branding'],
    metric: '+240%',
    metricLabel: 'Online-Reservierungen',
    href: '/projekte/gastro-group',
    image: '/pictures/mockups/03_gastrogroup-mockup.avif',
    year: '2026',
    comingSoon: true,
  },
  {
    num: '04',
    name: 'FinanceOne',
    tags: ['Fintech', 'Landing Page'],
    metric: '7.8s → 1.1s',
    metricLabel: 'Ladezeit',
    href: '/projekte/financeone',
    image: '/pictures/mockups/04_financeone-mockup.avif',
    year: '2026',
  },
  {
    num: '05',
    name: 'Vitalis Klinik',
    tags: ['Healthcare', 'Web Design'],
    metric: '+280%',
    metricLabel: 'Terminbuchungen',
    href: '/projekte/vitalis-klinik',
    image: '/pictures/mockups/05_vitalis-mockup.avif',
    year: '2026',
  },
  {
    num: '06',
    name: 'Bauart Studio',
    tags: ['Architektur', 'Branding'],
    metric: '+340%',
    metricLabel: 'Projektanfragen',
    href: '/projekte/bauart-studio',
    image: '/pictures/mockups/06_bauart-mockup.avif',
    year: '2026',
    comingSoon: true,
  },
]

/* ============================================================
   PIXEL DISSOLVE HOOK
   ============================================================ */
function usePixelDissolve(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  containerRef: React.RefObject<HTMLDivElement | null>
) {
  const rafRef = useRef<number | null>(null)
  const cellsRef = useRef<number[]>([])

  const startDissolve = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = container.offsetWidth
    const H = container.offsetHeight
    canvas.width = W
    canvas.height = H

    const CELL = 12
    const cols = Math.ceil(W / CELL)
    const rows = Math.ceil(H / CELL)
    const total = cols * rows

    ctx.clearRect(0, 0, W, H)
    ctx.strokeStyle = 'rgba(255,77,0,0.25)'
    ctx.lineWidth = 0.5
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        ctx.strokeRect(c * CELL, r * CELL, CELL, CELL)
      }
    }

    const indices = Array.from({ length: total }, (_, i) => i)
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[indices[i], indices[j]] = [indices[j], indices[i]]
    }
    cellsRef.current = indices

    const BATCH = 8
    let cursor = 0
    function tick() {
      if (!ctx) return
      const end = Math.min(cursor + BATCH, total)
      for (let i = cursor; i < end; i++) {
        const idx = cellsRef.current[i]
        ctx.clearRect((idx % cols) * CELL, Math.floor(idx / cols) * CELL, CELL, CELL)
      }
      cursor = end
      if (cursor < total) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [canvasRef, containerRef])

  const stopDissolve = useCallback(() => {
    if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
    const canvas = canvasRef.current
    if (canvas) { const ctx = canvas.getContext('2d'); if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height) }
  }, [canvasRef])

  return { startDissolve, stopDissolve }
}

/* ============================================================
   PROJECT CARD
   ============================================================ */
function ProjectCard({ project }: { project: Project }) {
  const imgContainerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hovered, setHovered] = useState(false)

  const { startDissolve, stopDissolve } = usePixelDissolve(canvasRef, imgContainerRef)

  function handleEnter() { setHovered(true); startDissolve() }
  function handleLeave() { setHovered(false); stopDissolve() }

  useEffect(() => () => stopDissolve(), [stopDissolve])

  const cardContent = (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-surface, #0e0e1a)',
        border: `1px solid ${hovered ? 'rgba(255,77,0,0.5)' : 'var(--border-subtle, rgba(255,255,255,0.07))'}`,
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease, transform 0.3s ease',
        boxShadow: hovered ? '0 16px 48px rgba(255,77,0,0.10)' : '0 2px 16px rgba(0,0,0,0.25)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        cursor: project.comingSoon ? 'default' : 'pointer',
        height: '100%',
      }}
    >
      {/* ── Image area ── */}
      <div
        ref={imgContainerRef}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          background: 'var(--bg-elevated, #13131f)',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          quality={90}
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />

        {/* Hover overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(255,77,0,0.06)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />

        {/* Pixel dissolve canvas */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            zIndex: 2, pointerEvents: 'none',
          }}
        />

        {/* Year badge */}
        <span
          style={{
            position: 'absolute', top: '0.75rem', right: '0.75rem',
            zIndex: 3,
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'rgba(244,239,230,0.55)',
            background: 'rgba(9,9,15,0.6)',
            backdropFilter: 'blur(6px)',
            padding: '0.2rem 0.45rem',
            borderRadius: '3px',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {project.year}
        </span>
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: '1.25rem 1.375rem 1.375rem', display: 'flex', flexDirection: 'column', gap: '0.625rem', flex: 1 }}>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--orange-500, #ff4d00)',
                background: 'rgba(255,77,0,0.08)',
                border: '1px solid rgba(255,77,0,0.18)',
                padding: '0.15rem 0.45rem',
                borderRadius: '3px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project name */}
        <h3
          style={{
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: 'clamp(1.1rem, 1.4vw, 1.375rem)',
            fontWeight: 600,
            color: '#f4efe6',
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          {project.name}
        </h3>

        {/* Metric */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(1.4rem, 2vw, 1.875rem)',
              fontWeight: 400,
              color: 'var(--orange-500, #ff4d00)',
              letterSpacing: '-0.01em',
              lineHeight: 1,
            }}
          >
            {project.metric}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '0.75rem',
              color: 'var(--text-secondary, #8a8799)',
              fontWeight: 400,
            }}
          >
            {project.metricLabel}
          </span>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
          {project.comingSoon ? (
            <span
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'rgba(244,239,230,0.2)',
              }}
            >
              Demnächst
            </span>
          ) : (
            <span
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: hovered ? '#f4efe6' : 'var(--orange-500, #ff4d00)',
                transition: 'color 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              Case Study ansehen{' '}
              <span
                style={{
                  display: 'inline-block',
                  transform: hovered ? 'translate(3px, -2px)' : 'translate(0,0)',
                  transition: 'transform 0.2s ease',
                }}
              >
                →
              </span>
            </span>
          )}
        </div>
      </div>
    </div>
  )

  if (project.comingSoon) {
    return <div data-cursor="default" style={{ height: '100%' }}>{cardContent}</div>
  }

  return (
    <Link
      href={project.href}
      data-cursor="view"
      style={{ display: 'block', textDecoration: 'none', height: '100%' }}
    >
      {cardContent}
    </Link>
  )
}

/* ============================================================
   WORK — main export
   ============================================================ */
export default function Work() {
  return (
    <section
      id="work"
      aria-label="Ausgewählte Projekte — Webdesign Agentur Portfolio"
      style={{
        background: 'var(--bg-base, #09090f)',
        padding: 'clamp(5rem, 10vw, 9rem) 0 clamp(5rem, 10vw, 9rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        {/* ── Header ── */}
        <header
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--orange-500, #ff4d00)',
                marginBottom: '1rem',
              }}
            >
              Ausgewählte Projekte
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(3rem, 6vw, 7rem)',
                fontWeight: 400,
                lineHeight: 0.93,
                letterSpacing: '-0.02em',
                color: '#f4efe6',
                margin: 0,
              }}
            >
              <span style={{ display: 'block' }}>UNSERE</span>
              <span style={{ display: 'block', color: 'var(--orange-500, #ff4d00)' }}>
                ARBEITEN.
              </span>
            </h2>
          </div>

          <Link
            href="/projekte"
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text-secondary, #8a8799)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--border-visible)',
              paddingBottom: '2px',
              whiteSpace: 'nowrap',
              transition: 'color 0.2s ease, border-color 0.2s ease',
              alignSelf: 'flex-end',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = '#f4efe6'
              el.style.borderColor = '#f4efe6'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.color = 'var(--text-secondary, #8a8799)'
              el.style.borderColor = 'var(--border-visible)'
            }}
          >
            Alle Projekte →
          </Link>
        </header>

        {/* ── 3×2 Grid (responsive via CSS class) ── */}
        <div className="work-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <Link
            href="/projekte"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              color: 'var(--orange-500, #ff4d00)',
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '0.9375rem',
              fontWeight: 500,
              padding: '0.875rem 2rem',
              borderRadius: '999px',
              border: '1px solid var(--orange-500, #ff4d00)',
              textDecoration: 'none',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--orange-500, #ff4d00)'
              el.style.color = '#f4efe6'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'transparent'
              el.style.color = 'var(--orange-500, #ff4d00)'
            }}
          >
            Alle Projekte ansehen →
          </Link>
        </div>
      </div>
    </section>
  )
}
