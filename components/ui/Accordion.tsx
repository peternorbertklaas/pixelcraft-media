'use client'

import { useState, useRef, useEffect } from 'react'

/* ============================================================
   ACCORDION — Reusable FAQ component
   · useState for open index
   · max-height transition for smooth animation
   · Full ARIA support (aria-expanded, role="region")
   ============================================================ */

export interface AccordionItem {
  q: string
  a: string
}

function AccordionRow({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: AccordionItem
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(bodyRef.current.scrollHeight)
    }
  }, [item.a])

  const panelId = `accordion-panel-${index}`
  const headerId = `accordion-header-${index}`

  return (
    <div
      style={{
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      {/* TRIGGER */}
      <button
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          padding: '1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          textAlign: 'left',
          cursor: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
            fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
            fontWeight: 500,
            color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)',
            lineHeight: 1.4,
            transition: 'color 0.25s ease',
            flex: 1,
          }}
        >
          {item.q}
        </span>

        {/* ICON — rotates on open */}
        <span
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: `1px solid ${isOpen ? 'var(--orange-500)' : 'var(--border-visible)'}`,
            flexShrink: 0,
            transition: 'border-color 0.25s ease, transform 0.35s ease, background 0.25s ease',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            background: isOpen ? 'var(--orange-subtle)' : 'transparent',
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <line
              x1="6"
              y1="1"
              x2="6"
              y2="11"
              stroke={isOpen ? 'var(--orange-500)' : 'var(--text-secondary)'}
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ transition: 'stroke 0.25s ease' }}
            />
            <line
              x1="1"
              y1="6"
              x2="11"
              y2="6"
              stroke={isOpen ? 'var(--orange-500)' : 'var(--text-secondary)'}
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ transition: 'stroke 0.25s ease' }}
            />
          </svg>
        </span>
      </button>

      {/* PANEL */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        style={{
          overflow: 'hidden',
          maxHeight: isOpen ? height : 0,
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          ref={bodyRef}
          style={{
            paddingBottom: '1.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), system-ui, sans-serif',
              fontSize: 'clamp(0.875rem, 1.2vw, 0.95rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: '72ch',
            }}
          >
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div
      role="list"
      style={{
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      {items.map((item, i) => (
        <AccordionRow
          key={i}
          item={item}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
