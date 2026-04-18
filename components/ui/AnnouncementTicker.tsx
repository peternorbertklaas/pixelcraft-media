'use client'
import { useState, useRef, useEffect } from 'react'

/* ============================================================
   ANNOUNCEMENT TICKER
   Full-width marquee bar above the header.
   - Orange background, near-black text
   - CSS marquee animation (no JS scroll logic)
   - Closeable with slide-up animation
   ============================================================ */

const TICKER_TEXT =
  'Available for new projects · Starting May 2026 · info@pixelcraft-media.de ·'

export function AnnouncementTicker() {
  const [visible, setVisible] = useState(true)
  const [closing, setClosing] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  /* Slide-up close animation */
  function handleClose() {
    setClosing(true)
  }

  /* After animation ends, remove from DOM flow */
  function handleAnimationEnd() {
    if (closing) {
      setVisible(false)
    }
  }

  if (!visible) return null

  /* Repeat text 4× so the marquee never shows a gap */
  const repeated = Array.from({ length: 4 }, (_, i) => (
    <span key={i} style={{ paddingRight: '2.5rem' }}>
      {TICKER_TEXT}
    </span>
  ))

  return (
    <div
      ref={barRef}
      role="banner"
      aria-label="Ankündigung"
      onAnimationEnd={handleAnimationEnd}
      style={{
        position: 'relative',
        zIndex: 60,
        height: '36px',
        background: '#FF4D00',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        /* Slide-up close animation */
        animation: closing
          ? 'tickerSlideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards'
          : 'none',
      }}
    >
      {/* ── Marquee track ─────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          flex: 1,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          display: 'flex',
        }}
      >
        {/* Two identical inner sets so the seam is invisible */}
        <span
          style={{
            display: 'inline-flex',
            flexShrink: 0,
            animation: 'tickerMarquee 25s linear infinite',
            willChange: 'transform',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '0.75rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#050508',
            lineHeight: '36px',
            paddingLeft: '2.5rem',
          }}
        >
          {repeated}
          {/* Duplicate for seamless loop */}
          {repeated}
        </span>
      </div>

      {/* ── Close button ──────────────────────────────────────── */}
      <button
        onClick={handleClose}
        aria-label="Ankündigung schließen"
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'none',
          flexShrink: 0,
          transition: 'background 0.18s ease',
          color: '#050508',
          fontSize: '0.875rem',
          lineHeight: 1,
          fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLButtonElement).style.background =
            'rgba(255,255,255,0.35)'
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
        }}
      >
        ×
      </button>

      {/* ── Inline keyframes (injected once via <style>) ──────── */}
      <style>{`
        @keyframes tickerMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes tickerSlideUp {
          from {
            height: 36px;
            opacity: 1;
          }
          to {
            height: 0;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
