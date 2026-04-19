'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

/* ============================================================
   METADATA lives in ./layout.tsx (Server Component).
   This file is 'use client' for multi-step form state.
   ============================================================ */

/* ============================================================
   TYPES
   ============================================================ */
type ProjectType =
  | ''
  | 'Web Design'
  | 'E-Commerce'
  | 'Website-Relaunch'
  | 'Landing Page'
  | 'UX/UI Design'
  | 'Sonstiges'

type Budget =
  | ''
  | '3.500–7.000 €'
  | '7.000–15.000 €'
  | '15.000–30.000 €'
  | '30.000+ €'

interface FormData {
  name: string
  email: string
  projectType: ProjectType
  budget: Budget
  message: string
}

/* ============================================================
   FIELD STYLES (shared)
   ============================================================ */
const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#161622',
  border: '1px solid rgba(244,239,230,0.06)',
  borderRadius: '4px',
  padding: '0.875rem 1rem',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '1rem',
  color: '#F4EFE6',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  appearance: 'none',
  WebkitAppearance: 'none',
  minHeight: '44px',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.75rem',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: '#FF4D00',
  marginBottom: '0.5rem',
}

/* ============================================================
   KONTAKT PAGE
   ============================================================ */
export default function KontaktPage() {
  const [step, setStep] = useState<1 | 2>(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({})

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target
    setForm((prev) => ({ ...prev, [name]: e.target.value }))
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleStep1Next = (e: React.FormEvent) => {
    e.preventDefault()
    const errors: { name?: string; email?: string } = {}
    if (!form.name.trim()) errors.name = 'Bitte gib deinen Namen ein.'
    if (!form.email.trim()) {
      errors.email = 'Bitte gib deine E-Mail-Adresse ein.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Bitte eine gültige E-Mail-Adresse eingeben.'
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})
    setStep(2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSubmitError(null)
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setSubmitError(data.error ?? 'Fehler beim Senden. Bitte versuche es erneut.')
      } else {
        setSubmitted(true)
      }
    } catch {
      setSubmitError('Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.')
    } finally {
      setLoading(false)
    }
  }

  const getFocusBorder = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focusedField === field ? '#FF4D00' : 'rgba(244,239,230,0.06)',
  })

  return (
    <>
      {/* Hidden form for Netlify form detection */}
      <form name="contact" data-netlify="true" hidden>
        <input name="name" />
        <input name="email" />
        <input name="projectType" />
        <input name="budget" />
        <textarea name="message" />
      </form>

      <Navigation />

      <main
        style={{
          background: 'var(--bg-base)',
          minHeight: '100svh',
        }}
      >
        {/* ── Hero ────────────────────────────────────────── */}
        <section
          aria-label="Kontakt Hero"
          style={{
            paddingTop: 'clamp(8rem, 14vw, 14rem)',
            paddingBottom: 'clamp(4rem, 8vw, 7rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.75rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#FF4D00',
              marginBottom: '1.5rem',
            }}
          >
            Kontakt
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(4rem, 10vw, 12rem)',
              fontWeight: 400,
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              color: '#F4EFE6',
              margin: 0,
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            Lass uns
            <br />
            <span style={{ color: '#FF4D00' }}>reden.</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#8A8799',
              lineHeight: 1.65,
              maxWidth: '540px',
            }}
          >
            Kostenlose Erstberatung, 30 Minuten. Wir freuen uns auf dein Projekt.
          </p>
        </section>

        {/* ── Main grid: Form + Contact Info ─────────────── */}
        <section
          aria-label="Kontaktformular und Kontaktdaten"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding:
              '0 clamp(1.5rem, 5vw, 4rem) clamp(6rem, 12vw, 12rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(2rem, 5vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* ── Multi-Step Form ──────────────────────────── */}
          <div
            style={{
              background: '#0F0F18',
              borderRadius: '4px',
              border: '1px solid rgba(244,239,230,0.06)',
              padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            }}
          >
            {submitted ? (
              /* Success state */
              <div
                style={{ textAlign: 'center', padding: '2rem 0' }}
                role="status"
                aria-live="polite"
              >
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: 400,
                    color: '#F4EFE6',
                    lineHeight: 1.1,
                    marginBottom: '1rem',
                  }}
                >
                  Nachricht erhalten.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '1rem',
                    color: '#8A8799',
                    marginBottom: '2rem',
                    lineHeight: 1.65,
                  }}
                >
                  Wir melden uns innerhalb von 24 Stunden bei dir.
                </p>
                <Link
                  href="/"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: '#FF4D00',
                    textDecoration: 'none',
                  }}
                >
                  → Zurück zur Startseite
                </Link>
              </div>
            ) : (
              <>
                {/* Progress indicator */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '2rem',
                  }}
                  aria-label={`Schritt ${step} von 2`}
                >
                  {([1, 2] as const).map((s) => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div
                        style={{
                          width: '1.75rem',
                          height: '1.75rem',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background:
                            step >= s ? '#FF4D00' : 'rgba(244,239,230,0.06)',
                          border: `1px solid ${
                            step >= s ? '#FF4D00' : 'rgba(244,239,230,0.12)'
                          }`,
                          transition: 'background 0.3s ease, border-color 0.3s ease',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-dm-sans)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: step >= s ? '#050508' : '#6B6878',
                          }}
                        >
                          {s}
                        </span>
                      </div>
                      {s === 1 && (
                        <div
                          style={{
                            width: '3rem',
                            height: '1px',
                            background:
                              step === 2
                                ? '#FF4D00'
                                : 'rgba(244,239,230,0.12)',
                            transition: 'background 0.3s ease',
                          }}
                        />
                      )}
                    </div>
                  ))}
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans)',
                      fontSize: '0.75rem',
                      color: '#8A8799',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginLeft: '0.25rem',
                    }}
                  >
                    Schritt {step} / 2
                  </span>
                </div>

                {/* Step 1: Name + Email */}
                {step === 1 && (
                  <form onSubmit={handleStep1Next} noValidate>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor="name" style={labelStyle}>
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Max Mustermann"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          ...getFocusBorder('name'),
                          borderColor: fieldErrors.name
                            ? 'rgba(255,100,80,0.6)'
                            : focusedField === 'name'
                            ? '#FF4D00'
                            : 'rgba(244,239,230,0.06)',
                        }}
                        aria-required="true"
                        aria-invalid={!!fieldErrors.name}
                      />
                      {fieldErrors.name && (
                        <span style={{ display: 'block', fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: 'rgba(255,120,100,0.9)', marginTop: '0.375rem' }}>
                          {fieldErrors.name}
                        </span>
                      )}
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label htmlFor="email" style={labelStyle}>
                        E-Mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="max@unternehmen.de"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          ...getFocusBorder('email'),
                          borderColor: fieldErrors.email
                            ? 'rgba(255,100,80,0.6)'
                            : focusedField === 'email'
                            ? '#FF4D00'
                            : 'rgba(244,239,230,0.06)',
                        }}
                        aria-required="true"
                        aria-invalid={!!fieldErrors.email}
                      />
                      {fieldErrors.email && (
                        <span style={{ display: 'block', fontFamily: 'var(--font-dm-sans)', fontSize: '0.75rem', color: 'rgba(255,120,100,0.9)', marginTop: '0.375rem' }}>
                          {fieldErrors.email}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      style={{
                        width: '100%',
                        background: '#FF4D00',
                        color: '#F4EFE6',
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        padding: '0.9375rem 1.5rem',
                        borderRadius: '999px',
                        border: 'none',
                        transition: 'background 0.2s ease, transform 0.2s ease',
                        letterSpacing: '0.02em',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background = '#FF6B24'
                        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.background = '#FF4D00'
                        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                      }}
                    >
                      Weiter →
                    </button>
                  </form>
                )}

                {/* Step 2: Project type + Budget + Message */}
                {step === 2 && (
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor="projectType" style={labelStyle}>
                        Projekttyp
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="projectType"
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('projectType')}
                          onBlur={() => setFocusedField(null)}
                          style={{
                            ...getFocusBorder('projectType'),
                            paddingRight: '2.5rem',
                          }}
                          aria-required="true"
                        >
                          <option value="" disabled>
                            Wähle einen Typ …
                          </option>
                          {(
                            [
                              'Web Design',
                              'E-Commerce',
                              'Website-Relaunch',
                              'Landing Page',
                              'UX/UI Design',
                              'Sonstiges',
                            ] as ProjectType[]
                          ).map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {/* Custom arrow */}
                        <span
                          aria-hidden="true"
                          style={{
                            position: 'absolute',
                            right: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#8A8799',
                            pointerEvents: 'none',
                            fontSize: '0.75rem',
                          }}
                        >
                          ▾
                        </span>
                      </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <label htmlFor="budget" style={labelStyle}>
                        Budget
                      </label>
                      <div style={{ position: 'relative' }}>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('budget')}
                          onBlur={() => setFocusedField(null)}
                          style={{
                            ...getFocusBorder('budget'),
                            paddingRight: '2.5rem',
                          }}
                          aria-required="true"
                        >
                          <option value="" disabled>
                            Budget-Rahmen …
                          </option>
                          {(
                            [
                              '3.500–7.000 €',
                              '7.000–15.000 €',
                              '15.000–30.000 €',
                              '30.000+ €',
                            ] as Budget[]
                          ).map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <span
                          aria-hidden="true"
                          style={{
                            position: 'absolute',
                            right: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: '#8A8799',
                            pointerEvents: 'none',
                            fontSize: '0.75rem',
                          }}
                        >
                          ▾
                        </span>
                      </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                      <label htmlFor="message" style={labelStyle}>
                        Was möchtest du erreichen?{' '}
                        <span
                          style={{
                            color: '#8A8799',
                            textTransform: 'none',
                            letterSpacing: 0,
                          }}
                        >
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Beschreibe kurz dein Projekt, deine Ziele oder was dich bewegt …"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        style={{
                          ...getFocusBorder('message'),
                          resize: 'vertical',
                          minHeight: '6rem',
                          lineHeight: 1.65,
                        }}
                      />
                    </div>

                    {submitError && (
                      <div
                        role="alert"
                        style={{
                          marginBottom: '1rem',
                          padding: '0.75rem 1rem',
                          background: 'rgba(255,80,60,0.08)',
                          border: '1px solid rgba(255,80,60,0.2)',
                          borderRadius: '4px',
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.875rem',
                          color: 'rgba(255,140,120,0.95)',
                          lineHeight: 1.5,
                        }}
                      >
                        {submitError}
                      </div>
                    )}

                    <div
                      style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
                    >
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        disabled={loading}
                        style={{
                          flex: '0 0 auto',
                          background: 'transparent',
                          color: '#8A8799',
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.9375rem',
                          fontWeight: 500,
                          padding: '0.9375rem 1.25rem',
                          borderRadius: '999px',
                          border: '1px solid rgba(244,239,230,0.12)',
                          transition: 'border-color 0.2s ease, color 0.2s ease',
                          cursor: loading ? 'not-allowed' : 'pointer',
                          opacity: loading ? 0.5 : 1,
                        }}
                        onMouseEnter={(e) => {
                          if (!loading) {
                            ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(244,239,230,0.3)'
                            ;(e.currentTarget as HTMLElement).style.color = '#F4EFE6'
                          }
                        }}
                        onMouseLeave={(e) => {
                          ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(244,239,230,0.12)'
                          ;(e.currentTarget as HTMLElement).style.color = '#8A8799'
                        }}
                        aria-label="Zurück zu Schritt 1"
                      >
                        ← Zurück
                      </button>

                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          flex: '1 1 auto',
                          background: loading ? '#CC3D00' : '#FF4D00',
                          color: '#F4EFE6',
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.9375rem',
                          fontWeight: 500,
                          padding: '0.9375rem 1.5rem',
                          borderRadius: '999px',
                          border: 'none',
                          transition: 'background 0.2s ease, transform 0.2s ease',
                          letterSpacing: '0.02em',
                          cursor: loading ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                        }}
                        onMouseEnter={(e) => {
                          if (!loading) {
                            ;(e.currentTarget as HTMLElement).style.background = '#FF6B24'
                            ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!loading) {
                            ;(e.currentTarget as HTMLElement).style.background = '#FF4D00'
                            ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                          }
                        }}
                      >
                        {loading ? (
                          <>
                            <span
                              aria-hidden="true"
                              style={{
                                width: '14px',
                                height: '14px',
                                border: '2px solid rgba(244,239,230,0.3)',
                                borderTopColor: '#F4EFE6',
                                borderRadius: '50%',
                                display: 'inline-block',
                                animation: 'spin 0.7s linear infinite',
                              }}
                            />
                            Wird gesendet …
                          </>
                        ) : (
                          'Nachricht senden →'
                        )}
                      </button>
                    </div>
                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                  </form>
                )}
              </>
            )}
          </div>

          {/* ── Contact Info ─────────────────────────────── */}
          <aside aria-label="Direkte Kontaktmöglichkeiten">
            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: '#F4EFE6',
                lineHeight: 1.2,
                marginBottom: '2rem',
              }}
            >
              Direkte Kontaktmöglichkeiten
            </h2>

            {/* Email */}
            <div style={{ marginBottom: '2rem' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#FF4D00',
                  marginBottom: '0.5rem',
                }}
              >
                E-Mail
              </span>
              <a
                href="mailto:info@pixelcraft-media.de"
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.0625rem',
                  color: '#F4EFE6',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = '#FF4D00'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.color = '#F4EFE6'
                }}
              >
                info@pixelcraft-media.de
              </a>
            </div>

            {/* Response time */}
            <div
              style={{
                marginBottom: '2.5rem',
                paddingLeft: '1rem',
                borderLeft: '2px solid #FF4D00',
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#8A8799',
                  marginBottom: '0.3rem',
                }}
              >
                Antwortzeit
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.0625rem',
                  color: '#8A8799',
                }}
              >
                {'< 24 Stunden'}
              </span>
            </div>

            {/* Trust signal */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(244,239,230,0.04)',
                border: '1px solid rgba(244,239,230,0.06)',
                borderRadius: '4px',
                padding: '0.875rem 1.25rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.875rem',
                  color: '#8A8799',
                  lineHeight: 1.5,
                }}
              >
                47+ Projekte{' '}
                <span
                  style={{
                    color: 'rgba(244,239,230,0.2)',
                    margin: '0 0.25rem',
                  }}
                >
                  ·
                </span>{' '}
                <span style={{ color: '#FF4D00' }}>5 ★</span>
              </span>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  )
}
