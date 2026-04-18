'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ============================================================
   NAVIGATION — Refined Editorial
   Sentence case links, solid orange CTA, underline hover,
   72px height, 1400px maxWidth, improved mobile overlay
   ============================================================ */

const NAV_LINKS = [
  { label: 'Arbeiten',   href: '/projekte',   num: '01' },
  { label: 'Leistungen', href: '/leistungen', num: '02' },
  { label: 'Preise',     href: '/preise',     num: '03' },
  { label: 'Blog',       href: '/blog',       num: '04' },
  { label: 'Über uns',   href: '/ueber-uns',  num: '05' },
]

export function Navigation() {
  const [scrolled,    setScrolled]    = useState(false)
  const [progress,    setProgress]    = useState(0)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY  = window.scrollY
      setScrolled(scrollY > 40)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? (scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: 'background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
          background:    scrolled ? 'rgba(5,5,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(244,239,230,0.07)' : '1px solid transparent',
        }}
      >
        <nav
          aria-label="Hauptnavigation"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 clamp(1.5rem, 5vw, 4rem)',
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {/* LOGO */}
          <a
            href="/"
            aria-label="PixelCraft Media — Startseite"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#F4EFE6',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              PixelCraft
            </span>
            <span
              aria-hidden="true"
              style={{
                width: 5, height: 5,
                borderRadius: '50%',
                background: '#FF4D00',
                boxShadow: '0 0 10px rgba(255,77,0,0.7)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
                fontSize: '0.8rem',
                fontWeight: 400,
                color: 'rgba(244,239,230,0.55)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Media
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <ul
            className="nav-links"
            style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  <span className="nav-link-num">{link.num}</span>
                  <span className="nav-link-label">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="/kontakt"
            className="nav-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FF4D00',
              color: '#F4EFE6',
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 600,
              padding: '0.75rem 1.375rem',
              borderRadius: '999px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
              whiteSpace: 'nowrap',
              minHeight: '44px',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#FF6B24'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 28px rgba(255,77,0,0.3)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#FF4D00'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            Termin buchen
          </a>

          {/* HAMBURGER */}
          <button
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-hamburger"
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 5,
              background: 'transparent',
              border: 'none',
              padding: '10px 8px',
              cursor: 'pointer',
              width: 44,
              minHeight: '44px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  height: 1.5,
                  background: '#F4EFE6',
                  borderRadius: 2,
                  transition: 'transform 0.25s ease, opacity 0.25s ease, width 0.25s ease',
                  width: i === 1 ? (mobileOpen ? 28 : 20) : 28,
                  transform: mobileOpen
                    ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                    : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                    : 'scaleX(0)'
                    : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>

        {/* PROGRESS BAR */}
        <div
          ref={progressRef}
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0, left: 0,
            height: 1,
            width: `${progress}%`,
            background: '#FF4D00',
            boxShadow: '0 0 8px rgba(255,77,0,0.5)',
            transition: 'width 0.1s linear',
          }}
        />
      </header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: '#050508',
              display: 'flex',
              flexDirection: 'column',
              padding: 'clamp(1.5rem, 5vw, 3rem)',
            }}
          >
            {/* Top: logo */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <a
                href="/"
                onClick={() => setMobileOpen(false)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}
              >
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 700, color: '#F4EFE6', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  PixelCraft
                </span>
                <span aria-hidden="true" style={{ width: 5, height: 5, borderRadius: '50%', background: '#FF4D00', boxShadow: '0 0 10px rgba(255,77,0,0.7)' }} />
                <span style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8rem', fontWeight: 400, color: 'rgba(244,239,230,0.55)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Media
                </span>
              </a>
            </div>

            {/* Links */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto', display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingTop: '4rem' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4, ease: 'easeOut' }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(2.75rem, 9vw, 4.5rem)',
                      fontWeight: 400,
                      color: '#F4EFE6',
                      textDecoration: 'none',
                      letterSpacing: '-0.01em',
                      lineHeight: 1.05,
                      display: 'block',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FF4D00' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#F4EFE6' }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Bottom: CTA + contact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '3rem' }}
            >
              <a
                href="/kontakt"
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  background: '#FF4D00',
                  color: '#F4EFE6',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  padding: '0.875rem 2rem',
                  borderRadius: '999px',
                  textDecoration: 'none',
                }}
              >
                Termin buchen →
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <a href="tel:+4915128787232" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8125rem', color: 'rgba(244,239,230,0.55)', textDecoration: 'none', letterSpacing: '0.02em' }}>
                  +49 151 287 87 232
                </a>
                <a href="mailto:info@pixelcraft-media.de" style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.8125rem', color: 'rgba(244,239,230,0.55)', textDecoration: 'none' }}>
                  info@pixelcraft-media.de
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* ── Nav link: numbered editorial style ── */
        .nav-link {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
          text-decoration: none;
          position: relative;
          padding-bottom: 3px;
        }
        .nav-link-num {
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          font-size: 0.5rem;
          font-weight: 700;
          color: transparent;
          letter-spacing: 0.2em;
          line-height: 1;
          transition: color 0.25s ease;
          user-select: none;
        }
        .nav-link-label {
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: rgba(244,239,230,0.5);
          letter-spacing: 0.03em;
          transition: color 0.25s ease;
          line-height: 1;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #FF4D00;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link:hover .nav-link-num  { color: #FF4D00; }
        .nav-link:hover .nav-link-label { color: #F4EFE6; }
        .nav-link:hover::after { width: 100%; }

        @media (max-width: 720px) {
          .nav-links     { display: none !important; }
          .nav-cta       { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 721px) and (max-width: 1100px) {
          .nav-links { gap: 1.5rem !important; }
        }
      `}</style>
    </>
  )
}
