import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://landscapist.vercel.app',
  integrations: [
    sitemap({
      // Excluded pages from sitemap
      filter: (page) => !page.includes('/404'),
      // any additional pages not in src/pages/
      customPages: [],
    })
  ],
});
