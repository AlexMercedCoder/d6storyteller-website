import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://d6storyteller.alexmerced.com',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/privacy') &&
        !page.includes('/about'),
    }),
  ],
  redirects: {
    '/system': '/get-started/',
    '/community-settings': '/supplements/',
    '/about': '/faq/#about',
  },
  image: {
    remotePatterns: [],
  },
});
