/* Server component — no 'use client' needed */
import type { CSSProperties } from 'react'

const ITEMS =
  'WEBDESIGN · BRANDING · E-COMMERCE · PERFORMANCE · CRAFT · SEO · UX/UI DESIGN · '

const itemStyle: CSSProperties = {
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.75rem',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.15em',
  color: 'var(--text-muted)',
  whiteSpace: 'nowrap',
  paddingRight: '0',
}

export default function MarqueeSection() {
  return (
    <div
      aria-label="Service Tags"
      style={{
        background: 'var(--bg-void)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '0.75rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Row 1 — left to right */}
      <div
        className="marquee-track"
        aria-hidden="true"
        style={{ marginBottom: '0.5rem' }}
      >
        <div
          className="marquee-content"
          style={{ ...itemStyle, '--marquee-duration': '28s' } as CSSProperties}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>{ITEMS}</span>
          ))}
        </div>
        <div
          className="marquee-content"
          aria-hidden="true"
          style={{ ...itemStyle, '--marquee-duration': '28s' } as CSSProperties}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>{ITEMS}</span>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="marquee-track" aria-hidden="true">
        <div
          className="marquee-content"
          data-direction="right"
          style={{ ...itemStyle, '--marquee-duration': '32s' } as CSSProperties}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>{ITEMS}</span>
          ))}
        </div>
        <div
          className="marquee-content"
          data-direction="right"
          aria-hidden="true"
          style={{ ...itemStyle, '--marquee-duration': '32s' } as CSSProperties}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>{ITEMS}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
