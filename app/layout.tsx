import type { Metadata, Viewport } from 'next'
import './globals.css'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { Loader } from '@/components/ui/Loader'
import { SmoothScrollProvider } from '@/components/ui/SmoothScrollProvider'
import { CookieBanner } from '@/components/ui/CookieBanner'

/* ============================================================
   VIEWPORT
   ============================================================ */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
  themeColor: '#FF4D00',
}

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: 'PixelCraft Media — Webdesign Agentur | Crafted to the Pixel.',
  description:
    'PixelCraft Media ist eine Premium Webdesign Agentur für Unternehmen, die wachsen wollen. Wir bauen Websites, die Besucher in Kunden verwandeln — mit Handwerk bis ins letzte Detail.',
  keywords: [
    'Webdesign Agentur',
    'professionelles Webdesign',
    'Website erstellen lassen',
    'Web Design Agency',
    'PixelCraft Media',
  ],
  authors: [{ name: 'PixelCraft Media' }],
  creator: 'PixelCraft Media',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://pixelcraft-media.de',
    siteName: 'PixelCraft Media',
    title: 'PixelCraft Media — Crafted to the Pixel.',
    description:
      'Premium Webdesign Agentur. Wir bauen Websites, die Besucher in Kunden verwandeln.',
    images: [
      {
        url: 'https://pixelcraft-media.de/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'PixelCraft Media — Crafted to the Pixel.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelCraft Media',
    description: 'Premium Webdesign Agentur — Crafted to the Pixel.',
    images: ['https://pixelcraft-media.de/opengraph-image'],
  },
  manifest: '/site.webmanifest',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://pixelcraft-media.de' },
  metadataBase: new URL('https://pixelcraft-media.de'),
}

/* ============================================================
   JSON-LD SCHEMA
   ============================================================ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'PixelCraft Media',
  description: 'Premium Webdesign Agentur — Crafted to the Pixel.',
  url: 'https://pixelcraft-media.de',
  logo: 'https://pixelcraft-media.de/logo.png',
  priceRange: '€€€',
  areaServed: ['DE', 'AT', 'CH'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Webdesign Services',
  },
}

/* ============================================================
   ROOT LAYOUT
   ============================================================ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased"
      >
        {/* Grain texture — sits above everything, pointer-events: none */}
        <div className="grain-overlay" aria-hidden="true" />

        {/* Ambient iridescent orbs — subtle background depth */}
        <div
          className="orb-orange"
          aria-hidden="true"
          style={{ top: '-10%', left: '-5%' }}
        />
        <div
          className="orb-indigo"
          aria-hidden="true"
          style={{ bottom: '10%', right: '-5%' }}
        />

        {/* Custom branded cursor */}
        <CustomCursor />

        {/* Page-load screen */}
        <Loader />

        {/* Lenis smooth scroll wrapper */}
        <SmoothScrollProvider>{children}</SmoothScrollProvider>

        {/* DSGVO Cookie Banner */}
        <CookieBanner />
      </body>
    </html>
  )
}
