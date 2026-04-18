'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/* ============================================================
   LOADER — "Pixel Assembly" Animation
   Timeline:
     0ms       — black screen
     0–300ms   — dot-grid fades in
     300–900ms — logo region pixels assemble (random order)
     900–1100ms — breathe hold
     0–1600ms  — percentage counter 000 → 100
     1900ms    — exit (y: -20, opacity 0)
   ============================================================ */

// ── Pixel-Art bitmap for "PCM" in 5×7 font, letters separated ──
const LETTER_P: number[][] = [
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
]
const LETTER_C: number[][] = [
  [0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1],
]
const LETTER_M: number[][] = [
  [1, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
]

// Build flat list of {col, row} pixel coords for "PCM" with 1-col gap between letters
function buildLogoPixels(
  offsetCol: number,
  offsetRow: number
): Array<{ col: number; row: number }> {
  const pixels: Array<{ col: number; row: number }> = []
  const letters = [LETTER_P, LETTER_C, LETTER_M]
  let colCursor = offsetCol

  for (const letter of letters) {
    for (let r = 0; r < letter.length; r++) {
      for (let c = 0; c < letter[r].length; c++) {
        if (letter[r][c]) {
          pixels.push({ col: colCursor + c, row: offsetRow + r })
        }
      }
    }
    colCursor += 6 // letter width 5 + 1 gap
  }
  return pixels
}

// Fisher-Yates shuffle
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function Loader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [percentage, setPercentage] = useState(0)
  const [visible, setVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  // ── Canvas animation ──────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const COLS = 26
    const ROWS = 14
    const DOT_RADIUS = 1.5
    let W = window.innerWidth
    let H = window.innerHeight

    const resize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }
    resize()
    window.addEventListener('resize', resize)

    const cellW = () => W / COLS
    const cellH = () => H / ROWS

    // Logo centered: PCM = 17 cols wide (3×5 + 2 gaps), 7 rows tall
    // Place it centered in the grid
    const logoOffsetCol = Math.floor((COLS - 17) / 2)
    const logoOffsetRow = Math.floor((ROWS - 7) / 2)
    const logoPixels = buildLogoPixels(logoOffsetCol, logoOffsetRow)
    const logoSet = new Set(logoPixels.map((p) => `${p.col},${p.row}`))

    // Randomised assembly order
    const shuffledLogo = shuffle(logoPixels)

    // Phase timings (ms)
    const T_GRID_FADE_END = 300
    const T_ASSEMBLE_END = 900
    const T_HOLD_END = 1100
    const T_EXIT_END = 1600

    let startTime: number | null = null
    let rafId: number

    // Per-dot exit velocity (disperse upward)
    type DotVelocity = { vy: number; vx: number }
    const exitVelocities = new Map<string, DotVelocity>()
    const getExitVel = (key: string): DotVelocity => {
      if (!exitVelocities.has(key)) {
        exitVelocities.set(key, {
          vy: -(Math.random() * 0.04 + 0.015),
          vx: (Math.random() - 0.5) * 0.012,
        })
      }
      return exitVelocities.get(key)!
    }
    const exitOffsets = new Map<string, { x: number; y: number }>()

    const draw = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const cw = cellW()
      const ch = cellH()

      ctx.clearRect(0, 0, W, H)

      // ── PHASE: grid dots ──────────────────────────────────────
      const gridAlpha = Math.min(elapsed / T_GRID_FADE_END, 1) * 0.18

      // How many logo pixels are assembled so far
      const assembleProgress =
        elapsed < T_GRID_FADE_END
          ? 0
          : Math.min(
              (elapsed - T_GRID_FADE_END) / (T_ASSEMBLE_END - T_GRID_FADE_END),
              1
            )
      const assembledCount = Math.floor(assembleProgress * shuffledLogo.length)
      const assembledSet = new Set(
        shuffledLogo.slice(0, assembledCount).map((p) => `${p.col},${p.row}`)
      )

      // After hold, background dots fade out
      const bgFadeOut =
        elapsed > T_HOLD_END
          ? Math.min((elapsed - T_HOLD_END) / (T_EXIT_END - T_HOLD_END), 1)
          : 0

      // Exit: logo dots disperse upward
      const exitProgress =
        elapsed > T_HOLD_END
          ? Math.min((elapsed - T_HOLD_END) / (T_EXIT_END - T_HOLD_END), 1)
          : 0

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const key = `${c},${r}`
          const isLogo = logoSet.has(key)
          const isAssembled = assembledSet.has(key)

          const cx = (c + 0.5) * cw
          const cy = (r + 0.5) * ch

          if (isLogo && isAssembled) {
            // Assembled logo pixel — orange, full opacity
            // During exit: disperse upward
            let dx = 0
            let dy = 0
            if (exitProgress > 0) {
              const vel = getExitVel(key)
              const prev = exitOffsets.get(key) ?? { x: 0, y: 0 }
              const nx = prev.x + vel.vx * (elapsed - T_HOLD_END)
              const ny = prev.y + vel.vy * (elapsed - T_HOLD_END)
              exitOffsets.set(key, { x: nx, y: ny })
              dx = nx * cw
              dy = ny * ch
            }
            const logoAlpha = 1 - exitProgress * exitProgress
            ctx.beginPath()
            ctx.arc(cx + dx, cy + dy, DOT_RADIUS + 1.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255,77,0,${logoAlpha})`
            ctx.fill()

            // Glow
            if (exitProgress < 0.5) {
              ctx.beginPath()
              ctx.arc(cx + dx, cy + dy, DOT_RADIUS + 4, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(255,77,0,${0.12 * (1 - exitProgress * 2)})`
              ctx.fill()
            }
          } else if (!isLogo) {
            // Background grid dot
            const alpha = gridAlpha * (1 - bgFadeOut * 1.5)
            if (alpha > 0) {
              ctx.beginPath()
              ctx.arc(cx, cy, DOT_RADIUS, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(255,77,0,${Math.max(alpha, 0)})`
              ctx.fill()
            }
          } else {
            // Logo pixel not yet assembled — show faint grid dot
            const alpha = gridAlpha * 0.6 * (1 - bgFadeOut)
            if (alpha > 0) {
              ctx.beginPath()
              ctx.arc(cx, cy, DOT_RADIUS, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(255,77,0,${Math.max(alpha, 0)})`
              ctx.fill()
            }
          }
        }
      }

      if (elapsed < T_EXIT_END + 200) {
        rafId = requestAnimationFrame(draw)
      }
    }

    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // ── Percentage counter 0 → 100 over 1.6 s ────────────────────
  useEffect(() => {
    setMounted(true)

    const DURATION = 1600
    const INTERVAL = 16
    const steps = DURATION / INTERVAL
    let current = 0

    const timer = setInterval(() => {
      current += 1
      const eased = Math.round(100 * (1 - Math.pow(2, (-10 * current) / steps)))
      setPercentage(Math.min(eased, 100))
      if (current >= steps) {
        clearInterval(timer)
        setPercentage(100)
      }
    }, INTERVAL)

    // Exit after 1.9 s
    const exitTimer = setTimeout(() => setVisible(false), 1900)

    return () => {
      clearInterval(timer)
      clearTimeout(exitTimer)
    }
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            background: '#050508',
            overflow: 'hidden',
            pointerEvents: visible ? 'all' : 'none',
          }}
          aria-live="polite"
          aria-label="Loading PixelCraft Media"
        >
          {/* ── Grain texture ── */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.04,
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
              backgroundRepeat: 'repeat',
              backgroundSize: '200px 200px',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* ── Canvas — Pixel Assembly ── */}
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 2,
            }}
          />

          {/* ── Studio label — fades in after grid appear ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2.5rem',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
            aria-hidden="true"
          >
            <span
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
                fontWeight: 300,
                color: 'rgba(244,239,230,0.45)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >
              PIXELCRAFT MEDIA
            </span>
            <span
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.75rem',
                fontStyle: 'italic',
                color: 'rgba(255,77,0,0.5)',
                letterSpacing: '0.08em',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
              }}
            >
              <span>Crafted</span>
              <span>to the Pixel.</span>
            </span>
          </motion.div>

          {/* ── Percentage counter — bottom right ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              right: '2.5rem',
              zIndex: 3,
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 300,
              color: 'rgba(244,239,230,0.35)',
              letterSpacing: '0.12em',
              fontVariantNumeric: 'tabular-nums',
            }}
            aria-hidden="true"
          >
            {String(percentage).padStart(3, '0')}
          </motion.div>

          {/* ── Progress line ── */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              height: 1,
              width: `${percentage}%`,
              background: '#ff4d00',
              transition: 'width 0.016s linear',
              boxShadow: '0 0 10px rgba(255,77,0,0.7), 0 0 24px rgba(255,77,0,0.2)',
              zIndex: 4,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
