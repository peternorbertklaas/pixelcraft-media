'use client'

import { useRef, useEffect, ReactNode } from 'react'

/* ============================================================
   MAGNETIC BUTTON
   Applies a subtle magnetic pull when cursor is within 80 px
   of the element's center. Uses GSAP quickTo for smooth,
   physics-based movement.
   ============================================================ */
interface MagneticButtonProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  /** Distance in px within which magnetism activates. Default: 80 */
  magnetRadius?: number
  /** Movement factor (0–1). Default: 0.3 */
  factor?: number
}

export function MagneticButton({
  children,
  className,
  style,
  magnetRadius = 80,
  factor = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gsapRef = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const xTo = useRef<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const yTo = useRef<any>(null)

  // Load GSAP once on mount
  useEffect(() => {
    let cancelled = false
    import('gsap').then(({ default: gsap }) => {
      if (cancelled) return
      gsapRef.current = gsap
    })
    return () => {
      cancelled = true
    }
  }, [])

  const initQuickTo = () => {
    const gsap = gsapRef.current
    if (!gsap || !ref.current) return
    if (!xTo.current) {
      xTo.current = gsap.quickTo(ref.current, 'x', {
        duration: 0.5,
        ease: 'power3.out',
      })
    }
    if (!yTo.current) {
      yTo.current = gsap.quickTo(ref.current, 'y', {
        duration: 0.5,
        ease: 'power3.out',
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !gsapRef.current) return
    initQuickTo()

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    const dist = Math.sqrt(distX * distX + distY * distY)

    if (dist < magnetRadius) {
      xTo.current?.(distX * factor)
      yTo.current?.(distY * factor)
    }
  }

  const handleMouseLeave = () => {
    if (!ref.current || !gsapRef.current) return
    initQuickTo()
    xTo.current?.(0)
    yTo.current?.(0)
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: 'inline-block', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
