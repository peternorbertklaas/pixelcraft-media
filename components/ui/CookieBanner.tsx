'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

/* ============================================================
   DSGVO COOKIE BANNER
   - Kein Dark Pattern
   - Klar: Ablehnen genau so einfach wie Akzeptieren
   - Kompakt, nicht aufdringlich
   - Nach Akzeptanz/Ablehnung: localStorage gesetzt
   ============================================================ */

const STORAGE_KEY = 'pcm_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      // Small delay so it doesn't clash with the loader
      const t = setTimeout(() => setVisible(true), 2400)
      return () => clearTimeout(t)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!mounted || !visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Einstellungen"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: '1.5rem',
        right: '1.5rem',
        maxWidth: '480px',
        zIndex: 9990,
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-visible)',
        borderRadius: '8px',
        padding: '1.5rem',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        animation: 'fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      {/* Heading */}
      <p
        style={{
          fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '0.5rem',
          letterSpacing: '0.01em',
        }}
      >
        Cookies & Datenschutz
      </p>

      {/* Body */}
      <p
        style={{
          fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
          fontSize: '0.8125rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          marginBottom: '1.25rem',
        }}
      >
        Wir nutzen Cookies für Analyse und Performance-Messung. Keine
        Weitergabe an Dritte.{' '}
        <Link
          href="/datenschutz"
          style={{
            color: 'var(--orange-500)',
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
          }}
        >
          Datenschutzerklärung
        </Link>
      </p>

      {/* Actions */}
      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Accept — primary */}
        <button
          onClick={handleAccept}
          style={{
            flex: 1,
            minWidth: '120px',
            background: 'var(--orange-500)',
            color: '#050508',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '0.8125rem',
            fontWeight: 600,
            padding: '0.6rem 1.25rem',
            borderRadius: '999px',
            border: 'none',
            cursor: 'none',
            transition: 'background 0.2s ease',
            letterSpacing: '0.02em',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background =
              'var(--orange-400)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.background =
              'var(--orange-500)'
          }}
        >
          Alle akzeptieren
        </button>

        {/* Decline — equally visible (no dark pattern) */}
        <button
          onClick={handleDecline}
          style={{
            flex: 1,
            minWidth: '120px',
            background: 'transparent',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '0.8125rem',
            fontWeight: 500,
            padding: '0.6rem 1.25rem',
            borderRadius: '999px',
            border: '1px solid var(--border-visible)',
            cursor: 'none',
            transition: 'color 0.2s ease, border-color 0.2s ease',
            letterSpacing: '0.02em',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.color = 'var(--text-primary)'
            el.style.borderColor = 'rgba(244,239,230,0.25)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.color = 'var(--text-secondary)'
            el.style.borderColor = 'var(--border-visible)'
          }}
        >
          Ablehnen
        </button>
      </div>
    </div>
  )
}
