import { siteConfig } from "./site.config";
import { routes } from "./routes.config";

const { business, site } = siteConfig
const { home, about, works, services, contact } = routes

/* Default SEO settings */
export const defaultSEO = {
  title: `${business.name} | ${business.tagline}`,
  description: business.description,
  canonical: site.url,

  openGraph: {
    type: 'website' as const,
    locale: site.locale,
    url: site.url,
    siteName: business.name,
    images: [
      {
        url: `${site.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${business.name} - ${business.tagline}`,
        type: 'image/jpeg'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image' as const,
    site: '@landscapist',
    creator: '@landscapist',
  },

  // Structured data (JSON-LD)
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    url: site.url,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '8:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '9:00',
        closes: '14:00'
      },
    ],
    sameAs: Object.values(siteConfig.socials),
  },
} as const

/* Page-specific SEO */

export const pageSEO = {
  // HOME page
  [home.href]: {
    title: `${business.name} | Professional Landscaping Services in ${business.city}`,
    description: `Transform your outdoor space with ${business.name}. Expert landscaping, garden design, and lawn care services in ${business.city}, ${business.state}.`,
    keywords: [
      'landscaping services',
      `landscaping ${business.city}`,
      'garden design',
      'lawn care',
      'outdoor design',
      `${business.state} landscaper`,
    ],
    ogImage: '/og-home.jpg',
  },
  // ABOUT page
  [about.href]: {
    title: `About Us | ${business.name}`,
    description: `Learn about ${business.name}'s experienced team and our commitment to creating beautiful, sustainable outdoor environments.`,
    keywords: [
      'about landscaping company',
      `${business.name} team`,
      'landscaping experience',
      'sustainable landscaping',
    ],
    ogImage: '/og-about.jpg',
  },
  // WORKS page
  [works.href]: {
    title: `Portfolio | ${business.name}`,
    description: `View our completed landscaping projects and transformations. See how we've enhanced outdoor spaces throughout ${business.city}.`,
    keywords: [
      'landscaping portfolio',
      'before and after landscaping',
      'landscaping projects',
      `${business.city} landscaping examples`,
      'garden transformations',
    ],
    ogImage: '/og-works.jpg',
  },
  // SERVICES page
  [services.href]: {
    title: `Landscaping Services | ${business.name}`,
    description: `Comprehensive landscaping services including garden design, lawn maintenance, hardscaping, and more. Serving ${business.city} and surrounding areas.`,
    keywords: [
      'landscaping services',
      'garden design services',
      'lawn maintenance',
      'hardscaping',
      'landscape installation',
      `${business.city} landscaping`,
    ],
    ogImage: '/og-services.jpg',
  },
  // CONTACT page
  [contact.href]: {
    title: `Contact Us | ${business.name}`,
    description: `Get in touch with ${business.name} for a free consultation. Call ${business.phone} or fill out our contact form.`,
    keywords: [
      'contact landscaper',
      `${business.city} landscaping quote`,
      'free landscaping consultation',
      'landscaping estimate',
    ],
    ogImage: '/og-contact.jpg',
  },
} as const


/* Helper functions */

// For getting SEO data for a specific page
export function getPageSEO(pathname: string) {
  const pageMeta = pageSEO[pathname as keyof typeof pageSEO]

  if(!pageMeta) {
    return {
      title: defaultSEO.title,
      description: defaultSEO.description,
      keywords: [],
      ogImage: defaultSEO.openGraph.images[0].url
    }
  }

  return {
    ...pageMeta,
    ogImage: `${site.url}${pageMeta.ogImage}`
  }
}

// For generating canonical URL for a page
export function getCanonicalURL(pathname: string) {
  return `${site.url}${pathname}`
}

// For generating structured data for a specific page type
export function getStructuredData(pathname: string, type: 'WebPage' | 'ContactPage' | 'CollectionPage' | 'AboutPage' = "WebPage") {
  const pageMeta = getPageSEO(pathname)

  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: pageMeta.title,
    description: pageMeta.description,
    url: getCanonicalURL(pathname),
    isPartOf: {
      '@type': 'WebSite',
      name: business.name,
      url: site.url,
    },
  }
}

// Type export
export type SEOConfig = {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
  nofollow?: boolean
}