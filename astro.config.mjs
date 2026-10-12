import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync } from 'node:fs';

const SITE = 'https://d6storyteller.alexmerced.com';
// Printable sheets are plain HTML in public/downloads/, which Astro copies
// without routing, so the sitemap integration never sees them. List them here.
const downloadPages = readdirSync(new URL('./public/downloads/', import.meta.url))
  .filter((f) => f.endsWith('.html'))
  .map((f) => `${SITE}/downloads/${f.replace(/\.html$/, '')}`);

export default defineConfig({
  site: SITE,
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      customPages: downloadPages,
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/privacy') &&
        !page.includes('/about') &&
        !page.includes('/quickstart/thanks'),
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
