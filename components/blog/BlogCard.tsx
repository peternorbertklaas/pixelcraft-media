'use client'

import Link from 'next/link'

interface Post {
  slug: string
  title: string
  category: string
  readTime: string
  excerpt: string
  date: string
  dateFormatted: string
}

const categoryColor: Record<string, string> = {
  Performance: '#ff4d00',
  Conversion: '#ff4d00',
  Design: '#ff4d00',
  'E-Commerce': '#ff4d00',
  SEO: '#ff4d00',
}

export function BlogCard({ post }: { post: Post }) {
  return (
    <article
      style={{
        background: '#0f0f18',
        border: '1px solid rgba(244,239,230,0.06)',
        borderRadius: '4px',
        padding: 'clamp(1.5rem, 3vw, 2rem)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor =
          'rgba(244,239,230,0.16)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor =
          'rgba(244,239,230,0.06)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1.25rem',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: categoryColor[post.category] ?? '#ff4d00',
            background: 'rgba(255,77,0,0.08)',
            border: '1px solid rgba(255,77,0,0.2)',
            borderRadius: '2px',
            padding: '0.2rem 0.5rem',
          }}
        >
          {post.category}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.75rem',
            color: '#8A8799',
          }}
        >
          {post.readTime} Lesezeit
        </span>
      </div>

      <h2
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
          fontWeight: 400,
          lineHeight: 1.15,
          color: '#f4efe6',
          margin: 0,
          marginBottom: '0.875rem',
          letterSpacing: '-0.01em',
        }}
      >
        {post.title}
      </h2>

      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.9375rem',
          color: '#8a8799',
          lineHeight: 1.7,
          margin: 0,
          marginBottom: '1.75rem',
          flexGrow: 1,
        }}
      >
        {post.excerpt}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.25rem',
          borderTop: '1px solid rgba(244,239,230,0.06)',
        }}
      >
        <time
          dateTime={post.date}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.75rem',
            color: '#8A8799',
          }}
        >
          {post.dateFormatted}
        </time>

        <Link
          href={`/blog/${post.slug}`}
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.875rem',
            fontWeight: 500,
            color: '#ff4d00',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.25rem',
            transition: 'gap 0.2s ease',
          }}
          aria-label={`${post.title} lesen`}
        >
          Weiterlesen →
        </Link>
      </div>
    </article>
  )
}
