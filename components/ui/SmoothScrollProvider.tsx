'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

/* ============================================================
   SMOOTH SCROLL PROVIDER
   Wraps the app with Lenis smooth scrolling.
   RAF loop drives lenis.raf() so it integrates with GSAP/framer.
   ============================================================ */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
