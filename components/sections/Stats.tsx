'use client'
import { useEffect, useRef, useState } from 'react'

/* ============================================================
   COUNTER HOOK — counts from 0 to target when in view
   ============================================================ */
function useCountUp(target: number, duration: number = 1800) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null!)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, ref }
}

/* ============================================================
   STAT DATA
   ============================================================ */
interface Stat {
  value: number
  suffix: string
  prefix: string
  label: string[]
}

const STATS: Stat[] = [
  {
    value: 47,
    suffix: '+',
    prefix: '',
    label: ['Projekte', 'abgeliefert'],
  },
  {
    value: 280,
    suffix: '%',
    prefix: '+',
    label: ['Ø Traffic-', 'Steigerung'],
  },
  {
    value: 98,
    suffix: '%',
    prefix: '',
    label: ['Kunden', 'empfehlen uns'],
  },
]

/* ============================================================
   SINGLE STAT
   ============================================================ */
function StatItem({ stat, isLast }: { stat: Stat; isLast: boolean }) {
  const { value, ref } = useCountUp(stat.value)

  return (
    <div
      ref={ref}
      style={{
        flex: '1 1 160px',
        minWidth: '160px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)',
        position: 'relative',
      }}
    >
      {/* Vertical divider (desktop, not on last item) */}
      {!isLast && (
        <div
          aria-hidden="true"
          className="stat-divider"
          style={{
            position: 'absolute',
            right: 0,
            top: '20%',
            bottom: '20%',
            width: '1px',
            background: 'var(--border-subtle)',
          }}
        />
      )}

      {/* Number */}
      <div
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(4rem, 8vw, 10rem)',
          fontWeight: 400,
          color: 'var(--orange-500)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          marginBottom: '0.75rem',
        }}
      >
        {stat.prefix}
        {value}
        {stat.suffix}
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          lineHeight: 1.5,
        }}
      >
        {stat.label.map((line, i) => (
          <span key={i} style={{ display: 'block' }}>
            {line}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   STATS SECTION
   ============================================================ */
export default function Stats() {
  return (
    <section
      aria-label="Unsere Erfolge in Zahlen"
      style={{
        position: 'relative',
        background: 'var(--bg-base)',
        paddingTop: 'clamp(3rem, 6vw, 6rem)',
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
        overflow: 'hidden',
      }}
    >
      {/* Aurora background orbs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {/* Orange orb */}
        <div
          style={{
            position: 'absolute',
            left: '15%',
            top: '-30%',
            width: '50vw',
            height: '50vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,77,0,0.07) 0%, transparent 65%)',
          }}
        />
        {/* Indigo orb */}
        <div
          style={{
            position: 'absolute',
            right: '10%',
            bottom: '-20%',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* Border lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} isLast={i === STATS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
