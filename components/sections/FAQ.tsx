'use client'
import { useState } from 'react'

/* ============================================================
   FAQ DATA
   ============================================================ */
const FAQS: { question: string; answer: string }[] = [
  {
    question: 'Wie lange dauert die Erstellung einer Website?',
    answer:
      'Je nach Umfang 4–10 Wochen. Eine typische Business-Website mit 5–8 Seiten dauert 4–6 Wochen. E-Commerce-Projekte 6–10 Wochen. Wir liefern in festgelegten Meilensteinen — du weißt immer, wo wir stehen.',
  },
  {
    question: 'Was kostet eine professionelle Website?',
    answer:
      'Unsere Projekte starten ab 3.500 € für einfache Business-Sites. E-Commerce beginnt bei 6.000 €. Komplexe Plattformen ab 15.000 €. Kein versteckter Stundensatz — du bekommst immer ein fixes Angebot.',
  },
  {
    question: 'Arbeitet ihr mit WordPress oder eigenen Lösungen?',
    answer:
      'Wir entwickeln primär mit Next.js (für maximale Performance und SEO) oder Webflow (für einfache Pflege ohne Developer). Wir empfehlen keine WordPress-Sites mehr — der Performance-Unterschied ist zu groß.',
  },
  {
    question: 'Was brauche ich, um mit euch zu starten?',
    answer:
      'Ein kostenloses Erstgespräch (30 min). Danach: ein kurzes Briefing-Dokument, das wir gemeinsam ausfüllen. Mehr brauchst du nicht. Wir nehmen dir den Rest ab.',
  },
  {
    question: 'Übernehmt ihr auch bestehende Websites?',
    answer:
      'Ja. Website-Relaunches sind einer unserer stärksten Bereiche. Wir analysieren zuerst, was bereits funktioniert (Traffic, Rankings, Conversion-Pfade), und bauen darauf auf — statt alles wegzuwerfen.',
  },
  {
    question: 'Wie läuft die Übergabe nach dem Launch?',
    answer:
      'Du bekommst alle Zugänge (Domain, Hosting, CMS), eine Bedienungsanleitung per Loom-Video und 30 Tage kostenlosen Support. Auf Wunsch übernehmen wir die laufende Betreuung.',
  },
  {
    question: 'Habt ihr Erfahrung mit SEO?',
    answer:
      'SEO ist kein Addon — es ist Teil jedes Projekts. Technisches SEO (Core Web Vitals, Schema Markup, Site-Struktur) ist in jedem Paket enthalten. Content-SEO-Strategie bieten wir als separate Leistung.',
  },
]

/* ============================================================
   JSON-LD SCHEMA DATA — exported so page.tsx can embed it
   as a server-rendered <script> tag (avoids 'use client' script issue)
   ============================================================ */
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

/* ============================================================
   FAQ ITEM
   ============================================================ */
function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <article
      style={{
        borderBottom: '1px solid rgba(244,239,230,0.06)',
        borderLeft: isOpen ? '2px solid #FF4D00' : '2px solid transparent',
        transition: 'border-left-color 0.3s ease',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          padding: 'clamp(1.25rem, 2.5vw, 1.75rem) clamp(1rem, 3vw, 2rem)',
          background: 'transparent',
          border: 'none',
          textAlign: 'left',
          minHeight: '44px',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
            fontWeight: 500,
            color: isOpen ? '#F4EFE6' : '#8A8799',
            lineHeight: 1.45,
            transition: 'color 0.3s ease',
          }}
        >
          {question}
        </span>

        {/* Icon */}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: '2rem',
            height: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            border: `1px solid ${isOpen ? '#FF4D00' : 'rgba(244,239,230,0.12)'}`,
            color: isOpen ? '#FF4D00' : '#8A8799',
            fontSize: '1.25rem',
            lineHeight: 1,
            fontWeight: 300,
            transition: 'border-color 0.3s ease, color 0.3s ease',
            userSelect: 'none',
          }}
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Answer — CSS height animation */}
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '1rem',
            color: '#8A8799',
            lineHeight: 1.75,
            padding: `0 clamp(1rem, 3vw, 2rem) clamp(1.25rem, 2.5vw, 1.75rem)`,
          }}
        >
          {answer}
        </p>
      </div>
    </article>
  )
}

/* ============================================================
   FAQ SECTION
   ============================================================ */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <section
        id="faq"
        aria-label="Häufige Fragen — PixelCraft Media Webdesign Agentur"
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
          {/* Header */}
          <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.75rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#FF4D00',
                marginBottom: '1.25rem',
              }}
            >
              FAQ
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                color: '#F4EFE6',
                margin: 0,
              }}
            >
              HÄUFIGE
              <span style={{ display: 'block' }}>FRAGEN.</span>
            </h2>
          </div>

          {/* Two-column layout on large screens */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 560px), 1fr))',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'start',
            }}
          >
            {/* Left: first 4 items */}
            <div
              style={{
                borderTop: '1px solid rgba(244,239,230,0.06)',
              }}
            >
              {FAQS.slice(0, 4).map((faq, i) => (
                <FAQItem
                  key={i}
                  index={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => handleToggle(i)}
                />
              ))}
            </div>

            {/* Right: remaining items */}
            <div
              style={{
                borderTop: '1px solid rgba(244,239,230,0.06)',
              }}
            >
              {FAQS.slice(4).map((faq, i) => (
                <FAQItem
                  key={i + 4}
                  index={i + 4}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i + 4}
                  onToggle={() => handleToggle(i + 4)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
