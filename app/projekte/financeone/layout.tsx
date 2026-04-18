import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FinanceOne Case Study — Ladezeit 7.8s auf 1.1s | PixelCraft Media',
  description:
    'Performance-Relaunch für FinanceOne. Ladezeit von 7.8s auf 1.1s. Lighthouse 97. SEO-Rankings verdoppelt in 6 Wochen. Fintech Website-Optimierung.',
  alternates: { canonical: '/projekte/financeone' },
  openGraph: {
    title: 'FinanceOne Case Study — Performance-Relaunch: Ladezeit 7.8s auf 1.1s',
    description:
      'Migration von WordPress zu Next.js. Lighthouse von 23 auf 97. Rankings in Top 3 in 6 Wochen.',
    type: 'article',
  },
}

export default function FinanceOneLayout({ children }: { children: React.ReactNode }) {
  return children
}
