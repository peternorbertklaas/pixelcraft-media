'use client'

import { useState } from 'react'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

/* ============================================================
   TYPES
   ============================================================ */
type FilterCategory = 'Alle' | 'Web Design' | 'E-Commerce' | 'Landing Page' | 'UX/UI'

interface Project {
  slug: string
  name: string
  category: string
  tags: string[]
  metric: string
  metricLabel: string
  year: string
  image: string
}

/* ============================================================
   DATA
   ============================================================ */
const PROJECTS: Project[] = [
  {
    slug: 'luxecommerce',
    name: 'LuxeCommerce',
    category: 'E-Commerce',
    tags: ['E-Commerce', 'Webdesign'],
    metric: '+380%',
    metricLabel: 'organischer Traffic',
    year: '2026',
    image: '/pictures/mockups/01_luxecommerce-mockup.png',
  },
  {
    slug: 'medtech-solutions',
    name: 'MedTech Solutions',
    category: 'Web Design',
    tags: ['SaaS', 'UX/UI Design'],
    metric: '0.8% → 3.4%',
    metricLabel: 'Conversion Rate',
    year: '2026',
    image: '/pictures/mockups/02_medtech-mockup.png',
  },
  {
    slug: 'gastro-group',
    name: 'Gastro Group',
    category: 'Web Design',
    tags: ['Restaurants', 'Branding'],
    metric: '+240%',
    metricLabel: 'Online-Reservierungen',
    year: '2026',
    image: '/pictures/mockups/03_gastrogroup-mockup.png',
  },
  {
    slug: 'financeone',
    name: 'FinanceOne',
    category: 'Landing Page',
    tags: ['Fintech', 'Landing Page'],
    metric: '7.8s → 1.1s',
    metricLabel: 'Ladezeit',
    year: '2026',
    image: '/pictures/mockups/04_financeone-mockup.png',
  },
  {
    slug: 'vitalis-klinik',
    name: 'Vitalis Klinik',
    category: 'Web Design',
    tags: ['Healthcare', 'Web Design'],
    metric: '+280%',
    metricLabel: 'Terminbuchungen',
    year: '2026',
    image: '/pictures/mockups/05_vitalis-mockup.png',
  },
  {
    slug: 'bauart-studio',
    name: 'Bauart Studio',
    category: 'Web Design',
    tags: ['Architektur', 'Branding'],
    metric: '+340%',
    metricLabel: 'Projektanfragen',
    year: '2026',
    image: '/pictures/mockups/06_bauart-mockup.png',
  },
]

const FILTER_TABS: FilterCategory[] = ['Alle', 'Web Design', 'E-Commerce', 'Landing Page', 'UX/UI']

/* ============================================================
   PROJECT CARD
   ============================================================ */
function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)

  const hasCaseStudy = ['luxecommerce', 'medtech-solutions', 'financeone'].includes(project.slug)

  const cardContent = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#161622' : '#0f0f18',
        border: `1px solid ${hovered ? 'rgba(255,77,0,0.2)' : 'rgba(244,239,230,0.06)'}`,
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Project image */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <img
          src={project.image}
          alt={`${project.name} Website Mockup`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
          }}
        />
        {/* Year badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.75rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#F4EFE6',
            background: 'rgba(5,5,8,0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(244,239,230,0.1)',
            padding: '0.25rem 0.625rem',
            borderRadius: '999px',
          }}
        >
          {project.year}
        </div>
        {/* Orange line bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #ff4d00, transparent)',
            width: hovered ? '100%' : '0%',
            transition: 'width 0.4s ease',
          }}
        />
      </div>

      {/* Card body */}
      <div
        style={{
          padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          flex: 1,
        }}
      >
        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#ff4d00',
                background: 'rgba(255,77,0,0.06)',
                border: '1px solid rgba(255,77,0,0.12)',
                padding: '0.2rem 0.5rem',
                borderRadius: '2px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Name */}
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 400,
            color: '#f4efe6',
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: '-0.01em',
          }}
        >
          {project.name}
        </h2>

        {/* Metric */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.5rem',
            paddingTop: '0.25rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: '#ff4d00',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            {project.metric}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.75rem',
              color: '#8a8799',
              lineHeight: 1.3,
              maxWidth: '120px',
            }}
          >
            {project.metricLabel}
          </span>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(244,239,230,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.8125rem',
              fontWeight: 500,
              color: hasCaseStudy ? '#ff4d00' : '#6b6878',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              transition: 'gap 0.2s ease',
            }}
          >
            {hasCaseStudy ? 'Case Study ansehen →' : 'Demnächst'}
          </span>
        </div>
      </div>
    </div>
  )

  if (hasCaseStudy) {
    return (
      <Link
        href={`/projekte/${project.slug}`}
        style={{ textDecoration: 'none', display: 'block', height: '100%' }}
        aria-label={`${project.name} Case Study ansehen`}
      >
        {cardContent}
      </Link>
    )
  }

  return <div style={{ height: '100%' }}>{cardContent}</div>
}

/* ============================================================
   PROJEKTE PAGE
   ============================================================ */
export default function ProjektePage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('Alle')

  const filtered = PROJECTS.filter((p) => {
    if (activeFilter === 'Alle') return true
    if (activeFilter === 'UX/UI') return p.tags.some((t) => t.includes('UX'))
    return p.category === activeFilter || p.tags.includes(activeFilter)
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PixelCraft Media — Projekte & Case Studies',
    description: 'Portfolio von Webdesign-Projekten: E-Commerce, SaaS, Restaurants, Fintech.',
    url: 'https://pixelcraft-media.de/projekte',
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      description: `${p.category} Projekt — ${p.metric} ${p.metricLabel}`,
      url: `https://pixelcraft-media.de/projekte/${p.slug}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />

      <main style={{ background: 'var(--bg-base)', minHeight: '100svh' }}>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section
          aria-label="Portfolio Hero"
          style={{
            paddingTop: 'clamp(8rem, 14vw, 14rem)',
            paddingBottom: 'clamp(3rem, 6vw, 6rem)',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{ marginBottom: '2rem' }}
          >
            <ol
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              <li>
                <Link
                  href="/"
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#8A8799',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = '#8a8799'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = '#6b6878'
                  }}
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" style={{ color: '#8A8799', fontSize: '0.75rem' }}>
                /
              </li>
              <li>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#ff4d00',
                  }}
                  aria-current="page"
                >
                  Projekte
                </span>
              </li>
            </ol>
          </nav>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(4.5rem, 11vw, 14rem)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#f4efe6',
              margin: 0,
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            UNSERE
            <br />
            PROJEKTE.
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: '#8a8799',
              lineHeight: 1.65,
              maxWidth: '480px',
            }}
          >
            47 Projekte. Jedes davon mit einem Ziel: Messbare Ergebnisse.
          </p>
        </section>

        {/* ── Filter Tabs ───────────────────────────────────── */}
        <section
          aria-label="Projekt-Filter"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          <div
            role="tablist"
            aria-label="Projekttyp-Filter"
            style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              borderBottom: '1px solid rgba(244,239,230,0.06)',
              paddingBottom: '0',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeFilter === tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: activeFilter === tab ? '#ff4d00' : '#6b6878',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `2px solid ${activeFilter === tab ? '#ff4d00' : 'transparent'}`,
                  padding: '0.75rem 0',
                  marginRight: '1.5rem',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  marginBottom: '-1px',
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== tab) {
                    ;(e.currentTarget as HTMLElement).style.color = '#8a8799'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== tab) {
                    ;(e.currentTarget as HTMLElement).style.color = '#6b6878'
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(1.25rem, 2.5vw, 2rem)',
              alignItems: 'start',
            }}
          >
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                paddingTop: '4rem',
                paddingBottom: '4rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  color: '#8A8799',
                  fontWeight: 300,
                }}
              >
                Keine Projekte in dieser Kategorie.
              </p>
            </div>
          )}
        </section>

        {/* ── Bottom CTA ────────────────────────────────────── */}
        <section
          aria-label="Projekt anfragen"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
            paddingBottom: 'clamp(6rem, 12vw, 12rem)',
            borderTop: '1px solid rgba(244,239,230,0.06)',
            paddingTop: 'clamp(4rem, 8vw, 8rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 4rem)',
              fontWeight: 400,
              color: '#f4efe6',
              lineHeight: 1.15,
              margin: 0,
              maxWidth: '640px',
            }}
          >
            Dein Projekt könnte das nächste sein.
          </p>
          <Link
            href="/kontakt"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#050508',
              background: '#ff4d00',
              textDecoration: 'none',
              padding: '0.875rem 2rem',
              borderRadius: '999px',
              transition: 'background 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = '#ff6b24'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.background = '#ff4d00'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            }}
          >
            Projekt besprechen →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
