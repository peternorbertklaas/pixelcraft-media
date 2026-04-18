import type { Metadata } from 'next'
import Script from 'next/script'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import MarqueeSection from '@/components/sections/MarqueeSection'
import Showreel from '@/components/sections/Showreel'
import Work from '@/components/sections/Work'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Statement from '@/components/sections/Statement'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import { FAQ, faqSchema } from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'

/* ============================================================
   HOMEPAGE SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title:
    'PixelCraft Media — Webdesign Agentur DE/AT/CH | Crafted to the Pixel.',
  description:
    'Professionelles Webdesign für Unternehmen, die wachsen wollen. PixelCraft Media baut Websites, die Besucher in Kunden verwandeln — mit Handwerk bis ins letzte Detail. Ø +280% mehr Anfragen.',
  keywords: [
    'Webdesign Agentur',
    'professionelles Webdesign',
    'Website erstellen lassen',
    'Webdesign Deutschland',
    'Webdesign Österreich',
    'Webdesign Schweiz',
    'PixelCraft Media',
    'E-Commerce Webdesign',
    'Landing Page Agentur',
    'UX UI Design Agentur',
    'Website Relaunch',
    'Conversion Optimierung',
  ],
  authors: [{ name: 'PixelCraft Media', url: 'https://pixelcraft-media.de' }],
  creator: 'PixelCraft Media',
  publisher: 'PixelCraft Media',
  metadataBase: new URL('https://pixelcraft-media.de'),
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
      'de-AT': '/',
      'de-CH': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://pixelcraft-media.de',
    siteName: 'PixelCraft Media',
    title: 'PixelCraft Media — Crafted to the Pixel.',
    description:
      'Premium Webdesign Agentur. Wir bauen Websites, die Besucher in Kunden verwandeln — Ø +280% mehr Anfragen, kein einziges Template.',
    images: [
      {
        url: '/pictures/hero/06_hero_brand-og-image.png',
        width: 1200,
        height: 630,
        alt: 'PixelCraft Media — Webdesign Agentur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelCraft Media — Webdesign Agentur',
    description:
      'Premium Webdesign Agentur DE/AT/CH — Crafted to the Pixel. Ø +280% mehr Anfragen.',
    images: ['/pictures/hero/06_hero_brand-og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

/* ============================================================
   JSON-LD SCHEMA — LocalBusiness + WebDesign Service
   ============================================================ */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://pixelcraft-media.de/#organization',
      name: 'PixelCraft Media',
      description:
        'Premium Webdesign Agentur für Unternehmen in Deutschland, Österreich und der Schweiz. Wir bauen Websites, die Besucher in Kunden verwandeln.',
      url: 'https://pixelcraft-media.de',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pixelcraft-media.de/favicon.svg',
      },
      email: 'info@pixelcraft-media.de',
      telephone: '+4915128787232',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Am Bild 27a',
        addressLocality: 'Tauberbischofsheim',
        postalCode: '97941',
        addressCountry: 'DE',
      },
      priceRange: '€€€',
      areaServed: [
        { '@type': 'Country', name: 'Deutschland' },
        { '@type': 'Country', name: 'Österreich' },
        { '@type': 'Country', name: 'Schweiz' },
      ],
      knowsAbout: [
        'Webdesign',
        'E-Commerce',
        'UX/UI Design',
        'Landing Pages',
        'Website Relaunch',
        'SEO',
        'Conversion Rate Optimierung',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Webdesign & Digital Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UX/UI Design' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing Pages' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Relaunch' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wartung & Wachstum' } },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '47',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://pixelcraft-media.de/#website',
      url: 'https://pixelcraft-media.de',
      name: 'PixelCraft Media',
      publisher: { '@id': 'https://pixelcraft-media.de/#organization' },
    },
  ],
}

/* ============================================================
   HOMEPAGE
   ============================================================ */
export default function HomePage() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Navigation />
        <Hero />
        <MarqueeSection />
        <Showreel />
        <Work />
        <Statement />
        <Services />
        <Process />
        <Stats />
        <Testimonials />
        <About />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
