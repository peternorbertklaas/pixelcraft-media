import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vitalis Klinik Case Study — PixelCraft Media',
  description:
    'Wie wir für die Vitalis Klinik eine patientenorientierte Website gebaut haben: +280% Online-Terminbuchungen, -75% Telefonbelastung, Lighthouse Score 98.',
  alternates: { canonical: 'https://pixelcraft-media.de/projekte/vitalis-klinik' },
  openGraph: {
    title: 'Vitalis Klinik — +280% Terminbuchungen | PixelCraft Media',
    description: 'Case Study: Patientenorientierte Website für eine moderne Privatklinik.',
    url: 'https://pixelcraft-media.de/projekte/vitalis-klinik',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
