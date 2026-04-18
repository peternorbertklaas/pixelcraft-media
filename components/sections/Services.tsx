'use client'
import { useState } from 'react'
import Link from 'next/link'

/* ============================================================
   SVG ICONS — minimal inline
   ============================================================ */
const icons: Record<string, React.ReactNode> = {
  webdesign: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 8l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  ecommerce: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 6h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  relaunch: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  landing: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v6m0 0l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 16h10M7 19h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  uxui: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  maintenance: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 20V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 20v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
}

/* ============================================================
   SERVICE DATA
   ============================================================ */
interface Service {
  num: string
  icon: keyof typeof icons
  name: string
  description: string
  href: string
}

const SERVICES: Service[] = [
  {
    num: '01',
    icon: 'webdesign',
    name: 'Web Design',
    description:
      'Keine Templates. Jede Website ist eine einzigartige Lösung, die deine Marke perfekt repräsentiert.',
    href: '/leistungen/webdesign',
  },
  {
    num: '02',
    icon: 'ecommerce',
    name: 'E-Commerce',
    description:
      'Shops, die verkaufen. Performance-optimiert, conversion-fokussiert, vom ersten Klick bis zum Checkout.',
    href: '/leistungen/ecommerce',
  },
  {
    num: '03',
    icon: 'relaunch',
    name: 'Website-Relaunch',
    description:
      'Deine bestehende Website hat Potenzial, das noch nicht ausgeschöpft ist. Wir heben es.',
    href: '/leistungen/relaunch',
  },
  {
    num: '04',
    icon: 'landing',
    name: 'Landing Pages',
    description:
      'Eine Seite. Ein Ziel. Maximale Conversion. Jedes Element dient dem Abschluss.',
    href: '/leistungen/landing-pages',
  },
  {
    num: '05',
    icon: 'uxui',
    name: 'UX/UI Design',
    description:
      'Interfaces, die sich intuitiv anfühlen. Weil gutes Design unsichtbar ist — und trotzdem alles verändert.',
    href: '/leistungen/ux-ui-design',
  },
  {
    num: '06',
    icon: 'maintenance',
    name: 'Wartung & Wachstum',
    description:
      'Wir sind nicht weg, wenn die Site live ist. Kontinuierliche Optimierung für nachhaltiges Wachstum.',
    href: '/leistungen/wartung',
  },
]

/* ============================================================
   SERVICE CARD
   ============================================================ */
function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      style={{
        background: 'var(--bg-surface)',
        border: `1px solid ${hovered ? 'var(--orange-500)' : 'var(--border-subtle)'}`,
        borderRadius: '4px',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered
          ? '0 16px 48px rgba(255,77,0,0.10)'
          : '0 0 0 transparent',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Number */}
      <span
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'var(--orange-500)',
          letterSpacing: '0.08em',
        }}
      >
        {service.num}
      </span>

      {/* Icon */}
      <div
        style={{
          color: hovered ? 'var(--orange-500)' : 'var(--text-secondary)',
          transition: 'color 0.3s ease',
          width: '24px',
          height: '24px',
        }}
      >
        {icons[service.icon]}
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#F4EFE6',
          lineHeight: 1.3,
        }}
      >
        {service.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {service.description}
      </p>

      {/* Link */}
      <Link
        href={service.href}
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.8rem',
          fontWeight: 500,
          color: 'var(--orange-500)',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          opacity: hovered ? 1 : 0.7,
          transition: 'opacity 0.2s ease',
        }}
      >
        Mehr erfahren →
      </Link>
    </article>
  )
}

/* ============================================================
   SERVICES SECTION
   ============================================================ */
export default function Services() {
  return (
    <section
      id="leistungen"
      aria-label="Unsere Leistungen — professionelles Webdesign"
      style={{
        background: 'var(--bg-base)',
        paddingTop: 'clamp(5rem, 10vw, 10rem)',
        paddingBottom: 'clamp(5rem, 10vw, 10rem)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        {/* Section heading */}
        <header style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.75rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--orange-500)',
              marginBottom: '1rem',
            }}
          >
            Was wir tun
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 7vw, 8rem)',
              fontWeight: 400,
              lineHeight: 0.93,
              letterSpacing: '-0.02em',
              color: '#F4EFE6',
            }}
          >
            <span style={{ display: 'block' }}>UNSERE</span>
            <span style={{ display: 'block', color: 'var(--orange-500)' }}>
              LEISTUNGEN.
            </span>
          </h2>
        </header>

        {/* Service grid */}
        <div className="services-grid">
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
