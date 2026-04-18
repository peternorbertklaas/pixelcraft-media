'use client'

import { useEffect, useRef, useState } from 'react'

/* ============================================================
   CUSTOM CURSOR
   Three-layer branded cursor:
   · cursor-trail — 8 × 4 px orange dots, LERP-delayed trail
   · cursor-dot   — 12 px filled orange circle, no lag
   · cursor-ring  — 40 px orange ring, follows with lerp
   ============================================================ */

const TRAIL_COUNT = 8

// Lerp factor per trail dot (slower = more delay = further behind)
const TRAIL_LERPS = [0.10, 0.085, 0.07, 0.06, 0.05, 0.04, 0.035, 0.03] as const

// Opacity per trail dot (front → back)
const TRAIL_OPACITIES = [0.55, 0.45, 0.36, 0.28, 0.21, 0.15, 0.10, 0.06] as const

// Dot size per trail dot — slight taper
const TRAIL_SIZES = [4, 4, 3.5, 3.5, 3, 3, 2.5, 2] as const

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<(HTMLDivElement | null)[]>(
    Array.from({ length: TRAIL_COUNT }, () => null)
  )

  const [mounted, setMounted]   = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Master cursor position (no lag)
  const pos = useRef({ x: -100, y: -100 })

  // Ring lerp position
  const ringPos = useRef({ x: -100, y: -100 })

  // Trail lerp positions — each dot has its own smoothed position
  const trailPos = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
  )

  const rafId = useRef<number>(0)

  const ringState = useRef<{
    scale: number
    showText: boolean
    shrinkDot: boolean
  }>({ scale: 1, showText: false, shrinkDot: false })

  useEffect(() => {
    setMounted(true)
    if (window.innerWidth < 768) {
      setIsMobile(true)
      return
    }

    /* ---- mouse tracking ---- */
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    /* ---- hover detection ---- */
    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target) return

      if (target.closest('[data-cursor="view"]')) {
        ringState.current = { scale: 1.6, showText: true, shrinkDot: false }
      } else if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="pointer"]')
      ) {
        ringState.current = { scale: 1.6, showText: false, shrinkDot: true }
      }
    }
    const onLeave = () => {
      ringState.current = { scale: 1, showText: false, shrinkDot: false }
    }
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    /* ---- RAF loop ---- */
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const RING_LERP = 0.14

    const tick = () => {
      const mx = pos.current.x
      const my = pos.current.y

      // ── Dot — precise ──────────────────────────────────────
      const dot = dotRef.current
      if (dot) {
        const { shrinkDot } = ringState.current
        dot.style.transform = `translate(${mx - 6}px, ${my - 6}px) scale(${shrinkDot ? 0.5 : 1})`
      }

      // ── Ring — lerped ──────────────────────────────────────
      ringPos.current.x = lerp(ringPos.current.x, mx, RING_LERP)
      ringPos.current.y = lerp(ringPos.current.y, my, RING_LERP)
      const ring = ringRef.current
      if (ring) {
        const { scale, showText } = ringState.current
        const ringSize = 40 * scale
        ring.style.width  = `${ringSize}px`
        ring.style.height = `${ringSize}px`
        ring.style.transform = `translate(${ringPos.current.x - ringSize / 2}px, ${ringPos.current.y - ringSize / 2}px)`
        ring.dataset.showText = showText ? 'true' : 'false'
      }

      // ── Trail dots — each with own LERP, no dependency on previous ──
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const tp = trailPos.current[i]
        tp.x = lerp(tp.x, mx, TRAIL_LERPS[i])
        tp.y = lerp(tp.y, my, TRAIL_LERPS[i])

        const el = trailRefs.current[i]
        if (el) {
          const half = TRAIL_SIZES[i] / 2
          el.style.transform = `translate(${tp.x - half}px, ${tp.y - half}px)`
        }
      }

      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (!mounted || isMobile) return null

  return (
    <>
      {/* ── TRAIL DOTS (rendered below dot & ring) ── */}
      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={`trail-${i}`}
          ref={(el) => { trailRefs.current[i] = el }}
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: TRAIL_SIZES[i],
            height: TRAIL_SIZES[i],
            borderRadius: '50%',
            background: '#ff4d00',
            opacity: TRAIL_OPACITIES[i],
            zIndex: 9996,
            pointerEvents: 'none',
            willChange: 'transform',
          }}
        />
      ))}

      {/* ── DOT ── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: '#ff4d00',
          zIndex: 9999,
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'transform 0.05s linear',
        }}
      />

      {/* ── RING ── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1.5px solid #ff4d00',
          background: 'transparent',
          zIndex: 9998,
          pointerEvents: 'none',
          willChange: 'transform, width, height',
          transition: 'transform 0.12s ease-out, width 0.2s ease, height 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* VIEW label — shown when data-cursor="view" hovered */}
        <span
          style={{
            fontSize: 9,
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            color: '#ff4d00',
            letterSpacing: '0.1em',
            fontWeight: 600,
            textTransform: 'uppercase',
            opacity: 0,
            transition: 'opacity 0.15s ease',
            userSelect: 'none',
          }}
          className="cursor-view-label"
        />
      </div>

      {/* Inline style: show VIEW text via data attribute */}
      <style>{`
        .cursor-view-label {
          opacity: 0;
        }
        [data-show-text="true"] .cursor-view-label {
          opacity: 1;
          content: "VIEW";
        }
      `}</style>
    </>
  )
}
