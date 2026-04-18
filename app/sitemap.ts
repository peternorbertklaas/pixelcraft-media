import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://pixelcraft-media.de'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/leistungen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/leistungen/webdesign`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/leistungen/ecommerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/leistungen/relaunch`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/leistungen/landing-pages`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/leistungen/ux-ui-design`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/leistungen/wartung`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/projekte`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/projekte/luxecommerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/projekte/medtech-solutions`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/projekte/gastro-group`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/projekte/financeone`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/projekte/vitalis-klinik`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/projekte/bauart-studio`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/blog/core-web-vitals-2025`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/conversion-rate-optimierung-website`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/webdesign-trends-2026`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/shopify-woocommerce-custom-vergleich`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/website-relaunch-seo-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/ueber-uns`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/preise`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ]
}
