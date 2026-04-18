import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gastro Group Case Study — PixelCraft Media',
  description:
    'Wie wir für die Gastro Group eine moderne Restaurantgruppen-Website gebaut haben: +240% Online-Reservierungen, -68% Absprungrate, vollständige Markenstrategie.',
  alternates: { canonical: 'https://pixelcraft-media.de/projekte/gastro-group' },
  openGraph: {
    title: 'Gastro Group — +240% Online-Reservierungen | PixelCraft Media',
    description: 'Case Study: Kompletter Webauftritt für eine Premium-Restaurantgruppe.',
    url: 'https://pixelcraft-media.de/projekte/gastro-group',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
