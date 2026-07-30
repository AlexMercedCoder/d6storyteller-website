# D6 Storyteller Website

Marketing and discovery website for the D6 Storyteller tabletop RPG series by Alex Merced.

**Live site:** https://d6storyteller.alexmerced.com  
**Buy on Amazon:** https://www.amazon.com/dp/B0HC4XMKW3?binding=paperback&ref_=saga_sdp_cft_dsk

## Tech Stack

- [Astro](https://astro.build) — static site generator
- Vanilla CSS with custom design tokens
- @astrojs/sitemap — automatic sitemap generation

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  content/books/     — Book content (Markdown + frontmatter)
  content/settings/  — Setting entries
  components/        — Reusable Astro components
  layouts/           — Page layouts
  pages/             — All routes
  styles/            — Global CSS
public/
  images/covers/     — Book cover images (WebP)
  images/social/     — OG social images
  robots.txt
  llms.txt
  site.webmanifest
```
