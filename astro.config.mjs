import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

const SITE = 'https://d6storyteller.alexmerced.com';
// Printable sheets in public/downloads/ are deliberately left out of the
// sitemap and served with noindex (meta tag plus public/_headers): they are
// tools to print, not pages to land on.
// lastmod is each page's content date (scripts/page-dates.mjs), never build time.
const pageDates = JSON.parse(readFileSync(new URL('./src/data/page-dates.json', import.meta.url), 'utf8'));

export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/privacy') &&
        !page.includes('/about') &&
        !page.includes('/quickstart/thanks'),
      serialize(item) {
        const date = pageDates[new URL(item.url).pathname];
        if (date) item.lastmod = date;
        return item;
      },
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
