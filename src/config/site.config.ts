import { config } from "./env.config"
import { routes } from "./routes.config"


/* Main configuration object for the site */
export const siteConfig = {
  // Business information
  business: {
    name: 'Landscapist',
    city: "City Name",
    state: "State Name",
    tagline: 'Encouraging Natural Beauty — Enhancing Outdoor Spaces',
    description: 'Professional landscaping and garden design services. Creating beautiful, sustainable outdoor environments.',
    email: 'hello@landscapist.com',
    phone: '+1 (555) 123-4567', // Use US format to appeal to US market
  },
  // Site settings
  site: {
    url: config.siteUrl || 'https://landscapist.vercel.app/',
    locale: 'en-US',
    timezone: 'America/Argentina/Buenos_Aires',
  },
  // SEO & Social
  seo: {
    ogImage: '/og-image.jpg',
  },
  // Navigation
  nav: [
    { label: routes.home.label, href: routes.home.href },
    { label: routes.about.label, href: routes.about.href },
    { label: routes.services.label, href: routes.services.href },
    { label: routes.works.label, href: routes.works.href },
    { label: routes.contact.label, href: routes.contact.href },
  ],
  // Company's social media
  socials: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://www.youtube.com/',
  },
  // Business details
  hours: {
    weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 2:00 PM',
    sunday: 'Sunday: Closed',
  },
}