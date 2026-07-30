import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://d6storyteller.alexmerced.com',
  output: 'static',
  redirects: {
    '/system': '/get-started/',
    '/community-settings': '/supplements/',
  },
  image: {
    remotePatterns: [],
  },
});
