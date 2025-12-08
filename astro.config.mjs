import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'
import { siteConfig } from 'src/config/site.config';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.site.url,
  integrations: [
    sitemap({
      // Excluded pages from sitemap
      filter: (page) => !page.includes('/404'),
      // any additional pages not in src/pages/
      customPages: [],
    })
  ],
});
