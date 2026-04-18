import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MedTech Solutions Case Study — 0.8% auf 3.4% Conversion | PixelCraft Media',
  description:
    'Wie wir für MedTech Solutions die Conversion Rate um 325% steigerten. SaaS-Website Redesign, UX-Optimierung, Trust-Building für komplexe B2B-Produkte.',
  alternates: { canonical: '/projekte/medtech-solutions' },
  openGraph: {
    title: 'MedTech Solutions Case Study — Conversion Rate von 0.8% auf 3.4%',
    description:
      'SaaS-Website Redesign mit Story-first Design. +325% Conversion Rate, +156% Demo-Buchungen.',
    type: 'article',
  },
}

export default function MedTechLayout({ children }: { children: React.ReactNode }) {
  return children
}
