import type { Metadata } from 'next'

/* ============================================================
   KONTAKT ROUTE — Metadata
   Metadata must live in a Server Component (layout or page).
   The page itself is 'use client' for multi-step form state,
   so metadata is exported from this layout instead.
   ============================================================ */
export const metadata: Metadata = {
  title: 'Kontakt — Kostenloses Erstgespräch | PixelCraft Media',
  description:
    'Starte dein Webdesign-Projekt. Kostenloses Erstgespräch, 30 Minuten, ohne Verpflichtung. PixelCraft Media — Ø +280% mehr Anfragen für unsere Kunden.',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt — Kostenloses Erstgespräch | PixelCraft Media',
    description:
      'Starte dein Webdesign-Projekt. Kostenloses Erstgespräch, 30 Minuten, ohne Verpflichtung.',
    url: 'https://pixelcraft-media.de/kontakt',
    siteName: 'PixelCraft Media',
    locale: 'de_DE',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
