import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LuxeCommerce Case Study — +380% Traffic in 90 Tagen | PixelCraft Media',
  description:
    'Wie wir für LuxeCommerce den organischen Traffic in 90 Tagen um 380% gesteigert haben. E-Commerce Redesign, Performance-Optimierung, SEO-Strategie.',
  alternates: { canonical: '/projekte/luxecommerce' },
  openGraph: {
    title: 'LuxeCommerce Case Study — +380% Traffic in 90 Tagen',
    description:
      'Wie wir für LuxeCommerce den organischen Traffic in 90 Tagen um 380% gesteigert haben.',
    type: 'article',
  },
}

export default function LuxeCommerceLayout({ children }: { children: React.ReactNode }) {
  return children
}
