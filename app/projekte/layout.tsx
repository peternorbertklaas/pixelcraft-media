import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projekte — Webdesign Portfolio | PixelCraft Media',
  description:
    'Unsere Webdesign-Projekte: E-Commerce, SaaS, Restaurants, Fintech. Echte Ergebnisse, keine Stockfotos. Ø +280% mehr Anfragen. DE/AT/CH.',
  alternates: { canonical: '/projekte' },
}

export default function ProjekteLayout({ children }: { children: React.ReactNode }) {
  return children
}
