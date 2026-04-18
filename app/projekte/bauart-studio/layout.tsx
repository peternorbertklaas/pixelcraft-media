import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bauart Studio Case Study — PixelCraft Media',
  description:
    'Wie wir für Bauart Studio ein preisgekröntes Architektur-Portfolio gebaut haben: +340% Projektanfragen, +520% Portfolio-Views, Ladezeit von 4.8s auf 1.2s.',
  alternates: { canonical: 'https://pixelcraft-media.de/projekte/bauart-studio' },
  openGraph: {
    title: 'Bauart Studio — +340% Projektanfragen | PixelCraft Media',
    description: 'Case Study: Preisgekröntes Portfolio-Website für ein Architekturstudio.',
    url: 'https://pixelcraft-media.de/projekte/bauart-studio',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
