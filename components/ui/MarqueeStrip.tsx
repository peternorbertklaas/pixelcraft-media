'use client'

/* ============================================================
   MARQUEE STRIP
   Infinite horizontal scroll strip.
   Items are duplicated for seamless loop.
   ============================================================ */

const DEFAULT_ITEMS = [
  'WEBDESIGN',
  'BRANDING',
  'E-COMMERCE',
  'PERFORMANCE',
  'CRAFT',
  'SEO',
  'UX/UI',
]

interface MarqueeStripProps {
  items?: string[]
  direction?: 'left' | 'right'
  /** Animation duration in seconds. Default: 30 */
  speed?: number
  className?: string
}

export function MarqueeStrip({
  items = DEFAULT_ITEMS,
  direction = 'left',
  speed = 30,
  className,
}: MarqueeStripProps) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div
      className={`marquee-track${className ? ` ${className}` : ''}`}
      aria-hidden="true"
      style={
        { '--marquee-duration': `${speed}s` } as React.CSSProperties
      }
    >
      <div
        className="marquee-content"
        data-direction={direction === 'right' ? 'right' : undefined}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.25rem',
              paddingRight: '1.25rem',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            {item}
            {/* Separator dot */}
            <span
              style={{
                display: 'inline-block',
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: 'var(--orange-500)',
                opacity: 0.6,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
