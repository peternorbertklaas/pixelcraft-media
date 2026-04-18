'use client'

interface Service {
  slug: string
  number: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  stat: string
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={`/leistungen/${service.slug}`}
      style={{
        display: 'block',
        padding: '3rem 2.5rem',
        background: 'var(--bg-surface)',
        textDecoration: 'none',
        position: 'relative',
        borderRight: '1.5px solid var(--border-subtle)',
        borderBottom: '1.5px solid var(--border-subtle)',
        transition: 'background 0.3s ease',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLAnchorElement).style.background =
          'var(--bg-elevated)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLAnchorElement).style.background =
          'var(--bg-surface)'
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 500,
          color: 'var(--text-muted)',
          letterSpacing: '0.15em',
          display: 'block',
          marginBottom: '1.5rem',
        }}
      >
        {service.number}
      </span>

      <h3
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
          fontWeight: 400,
          color: 'var(--text-primary)',
          lineHeight: 1.1,
          marginBottom: '0.25rem',
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 500,
          color: 'var(--orange-400)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          marginBottom: '1.25rem',
        }}
      >
        {service.subtitle}
      </p>

      <p
        style={{
          fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
          marginBottom: '2rem',
        }}
      >
        {service.description}
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2rem',
        }}
      >
        {service.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              padding: '0.3rem 0.75rem',
              borderRadius: 100,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: 'var(--orange-400)',
            letterSpacing: '0.02em',
          }}
        >
          {service.stat}
        </span>
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: '1rem',
            color: 'var(--text-muted)',
          }}
        >
          →
        </span>
      </div>
    </a>
  )
}
