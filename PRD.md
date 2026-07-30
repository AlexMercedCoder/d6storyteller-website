# Product Requirements Document: D6 Storyteller Website

**Product:** D6 Storyteller Series Website  
**Domain:** `https://d6storyteller.alexmerced.com`  
**Primary conversion URL:** `https://www.amazon.com/dp/B0HC4XMKW3?binding=paperback&ref_=saga_sdp_cft_dsk`  
**Owner / Author:** Alex Merced  
**Document status:** Draft for implementation  
**Target:** Public launch-ready marketing and discovery website

## 1. Product Summary

Build a fast, accessible, search-optimized website for the **D6 Storyteller** tabletop roleplaying system and its companion books. The site should establish a canonical home for the series, explain the fiction-first D6 engine, showcase every book using supplied cover images, and direct visitors to the complete paperback series on Amazon.

The website should serve four audiences:

1. Tabletop players evaluating the system.
2. Game Masters looking for settings and campaign inspiration.
3. Readers searching for a specific D6 Storyteller companion.
4. Search engines and answer engines seeking authoritative, structured information about the series.

The website is primarily a discovery and conversion property. It will not process payments. Amazon is the primary purchase destination.

## 2. Goals

### 2.1 Primary goals

- Establish `d6storyteller.alexmerced.com` as the canonical online source for D6 Storyteller.
- Clearly explain what the system is, how its fiction-first D6 pool works, and what each companion adds.
- Display the complete series with attractive cover artwork and concise summaries.
- Send qualified visitors to the complete series page on Amazon.
- Rank for branded and high-intent searches related to the series and its genres.
- Make content easy for AI answer engines and retrieval systems to identify, cite, and summarize accurately.

### 2.2 Secondary goals

- Build author credibility around Alex Merced as the creator of D6 Storyteller.
- Create a scalable architecture for future books, downloads, errata, articles, and resources.
- Support sharing on social platforms with polished Open Graph and social preview metadata.
- Provide clear analytics for traffic sources, book interest, and Amazon click-throughs.

### 2.3 Non-goals for initial release

- Direct ecommerce or payment processing.
- User accounts, saved campaigns, forums, or virtual tabletop features.
- Digital character-sheet editing.
- Rules reference requiring authentication.
- Customer support ticketing.

## 3. Success Metrics

Measure the first 90 days after launch.

| Metric | Target |
|---|---:|
| Lighthouse performance score, mobile | 90+ |
| Lighthouse accessibility score | 95+ |
| Core Web Vitals | Pass at 75th percentile |
| Indexed canonical pages | 100% of intended indexable URLs |
| Organic click-through rate for branded queries | 20%+ |
| Homepage-to-Amazon outbound click rate | 8%+ |
| Book-detail-to-Amazon outbound click rate | 15%+ |
| Broken links or invalid structured-data errors | 0 critical |
| Duplicate titles or descriptions | 0 |

## 4. Brand and Positioning

### 4.1 Core positioning statement

**D6 Storyteller is a fiction-first tabletop roleplaying engine that uses accessible six-sided dice pools to help players create dramatic stories across many genres and worlds.**

### 4.2 Messaging pillars

- **Fiction first:** Narrative position and consequences drive play.
- **Easy to start:** The system uses common six-sided dice.
- **Genre flexible:** Companion books adapt the engine to specific styles and settings.
- **Ready to play:** Each companion includes rules, lore, mechanics, archetypes, adventure seeds, and character sheets.
- **Expandable:** Groups can combine published settings or create their own.

### 4.3 Visual direction

Use the visual identity established by the supplied book covers:

- Retro, detailed pixel art.
- Dark navy or near-black foundations.
- Gold typography, dividers, and ornamental borders.
- Bright genre-specific accent colors.
- Prominent glowing D6 imagery.
- Book covers are the primary merchandising assets.

Avoid overly dense ornamental treatment in body-content areas. Decorative elements should frame content rather than reduce readability.

## 5. Content Inventory

The launch catalog should include at least these titles:

1. **D6 Storyteller: The Core Rulebook**  
   *A Fiction-First Tabletop Roleplaying Engine & 10 Starter Worlds*

2. **D6 Storyteller: High & Mythic Fantasy Companion**  
   *A Fiction-First Tabletop Roleplaying Expansion & 10 High & Mythic Fantasy Settings*

3. **D6 Storyteller: Sci-Fi & Cosmic Frontiers Companion**  
   *A Fiction-First Tabletop Roleplaying Expansion & 10 Sci-Fi & Cosmic Frontiers Settings*

4. **D6 Storyteller: Weird West, Piracy & Swashbuckling Companion**  
   *A Fiction-First Tabletop Roleplaying Expansion & 10 Weird West, Piracy & Swashbuckling Settings*

5. **D6 Storyteller: Horror, Occult & Supernatural Companion**  
   *A Fiction-First Tabletop Roleplaying Expansion & 10 Horror, Occult & Supernatural Settings*

6. **D6 Storyteller: Cybernetics, Speculative & Alternate Tech Companion**  
   *A Fiction-First Tabletop Roleplaying Expansion & 10 Cybernetics, Speculative & Alternate Tech Settings*

7. **D6 Storyteller: Superheroes, Kaiju & Anime Tropes Companion**  
   *A Fiction-First Tabletop Roleplaying Expansion & 10 Superheroes, Kaiju & Anime Tropes Settings*

8. **D6 Storyteller: Historical & Alternate History Companion**  
   *A Fiction-First Tabletop Roleplaying Expansion & 10 Historical & Alternate History Settings*

9. **D6 Storyteller: Quirky, Experimental & Micro-Scale Companion**  
   *A Fiction-First Tabletop Roleplaying Expansion & 10 Quirky, Experimental & Micro-Scale Settings*

10. **D6 Storyteller: Post-Apocalyptic & Speculative Worlds Companion**  
    *A Fiction-First Tabletop Roleplaying Expansion & 10 Post-Apocalyptic & Speculative Worlds Settings*

The content model must allow additional books without redesigning the site.

## 6. Information Architecture

### 6.1 Required routes

| Route | Purpose | Indexing |
|---|---|---|
| `/` | Series homepage and primary conversion page | Index |
| `/books/` | Complete book catalog | Index |
| `/books/[slug]/` | Individual book detail page | Index |
| `/system/` | Explanation of the fiction-first D6 engine | Index |
| `/settings/` | Browse all settings across books | Index |
| `/settings/[slug]/` | Optional setting detail pages | Index when substantive |
| `/about/` | About D6 Storyteller and Alex Merced | Index |
| `/faq/` | Questions about the system, books, dice, compatibility, and buying | Index |
| `/resources/` | Character sheets, errata, downloads, or links | Index |
| `/privacy/` | Privacy policy | Index or noindex by preference |
| `/404.html` or framework equivalent | Helpful not-found page | Noindex |
| `/robots.txt` | Crawler directives | Public |
| `/sitemap.xml` | XML sitemap or sitemap index | Public |
| `/llms.txt` | Curated LLM-readable site guide | Public |
| `/llms-full.txt` | Optional expanded LLM-readable corpus | Public |
| `/feed.xml` | Optional content feed if articles are added | Public |

### 6.2 Navigation

Primary navigation:

- Home
- Books
- How It Works
- Settings
- Resources
- FAQ
- About
- **Explore the Series on Amazon**

Mobile navigation must expose the Amazon action without requiring multiple nested interactions.

## 7. Page Requirements

## 7.1 Homepage

### Purpose

Introduce the system, demonstrate breadth, feature the full series, and drive Amazon clicks.

### Required sections

1. **Hero**
   - H1: “D6 Storyteller”
   - One-sentence value proposition.
   - Primary CTA: “Explore the Complete Series on Amazon.”
   - Secondary CTA: “Browse the Books.”
   - Feature the Core Rulebook cover and optionally a fan of companion covers.

2. **What is D6 Storyteller?**
   - Concise explanation of fiction-first play.
   - Explain that the engine uses six-sided dice pools.
   - Link to `/system/`.

3. **The Complete Series**
   - Responsive cover grid.
   - Each card includes cover, title, subtitle, genre tags, detail link, and Amazon CTA.

4. **Ten Worlds in Every Volume**
   - Explain the repeatable companion-book format.
   - Highlight genre-specific mechanics, archetypes, starter adventures, and custom character sheets.

5. **Choose Your World**
   - Genre navigation tiles.

6. **About Alex Merced**
   - Brief author bio.
   - Link to `https://WhoIsAlexMerced.com` if desired.

7. **FAQ preview**
   - Four to six concise questions with links to the full FAQ.

8. **Final CTA**
   - Repeat the Amazon series action.

## 7.2 Books catalog

- Grid and list view are optional. Grid is required.
- Allow filtering by broad genre, such as fantasy, science fiction, horror, history, superheroes, experimental, and post-apocalyptic.
- Filter state should be represented in the UI but should not create crawlable duplicate URLs unless deliberate landing pages are created.
- Each book card must use a descriptive image alt attribute.
- Each book card must link to a unique detail page.
- Include one prominent series-level Amazon CTA above and below the catalog.

## 7.3 Individual book page

Each book page requires:

- Unique `<title>`, H1, meta description, canonical URL, and social preview.
- Cover image with descriptive alt text.
- Exact subtitle.
- Two-to-four paragraph overview.
- “Inside this companion” feature list.
- Ten setting summaries where applicable.
- Explanation of the intended audience.
- Primary Amazon CTA with outbound tracking.
- Links to previous and next books.
- Breadcrumb navigation.
- `Book`, `WebPage`, and `BreadcrumbList` JSON-LD.
- FAQ section with only questions answered visibly on the page.

Suggested slug pattern:

```text
/books/core-rulebook/
/books/high-mythic-fantasy-companion/
/books/sci-fi-cosmic-frontiers-companion/
/books/weird-west-piracy-swashbuckling-companion/
/books/horror-occult-supernatural-companion/
/books/cybernetics-speculative-alternate-tech-companion/
/books/superheroes-kaiju-anime-tropes-companion/
/books/historical-alternate-history-companion/
/books/quirky-experimental-micro-scale-companion/
/books/post-apocalyptic-speculative-worlds-companion/
```

## 7.4 System page

Explain the system without publishing copyrighted book text wholesale.

Recommended sections:

- What “fiction first” means.
- D6 dice pools.
- Position, effect, consequences, and narrative stakes.
- Characters and archetypes.
- Genre-specific mechanics.
- How the Core Rulebook and companions work together.
- What a new group needs to begin.

This page should answer high-intent queries such as:

- What is D6 Storyteller?
- How does the D6 Storyteller system work?
- Is D6 Storyteller beginner friendly?
- What dice does D6 Storyteller use?
- Can settings be combined?

## 7.5 Settings directory

Build a structured directory of all included worlds.

Each setting record should include:

- Setting name.
- Parent book.
- One-to-two sentence premise.
- Featured custom mechanic or track.
- Genre and theme tags.
- Link to the parent book.

The directory should support client-side filtering while maintaining one canonical `/settings/` URL. Create individual setting pages only when each can contain enough original content to be useful and avoid thin pages.

## 7.6 FAQ

Recommended questions:

- What is D6 Storyteller?
- Which book should I start with?
- Do I need the Core Rulebook to use a companion?
- What dice are required?
- Is the game designed for players, Game Masters, or both?
- Does each companion contain ten settings?
- Are character sheets included?
- Can mechanics and settings be mixed between books?
- Where can I buy the books?
- Is D6 Storyteller available in paperback and Kindle formats?

Only add `FAQPage` structured data if the visible page contains the same questions and answers. Do not use FAQ markup solely to manipulate search presentation.

## 8. Functional Requirements

### 8.1 Cover-image ingestion

The owner will place all cover images in a folder. The implementation must support automated association between images and book records.

Recommended structure:

```text
/public/images/covers/
  core-rulebook.webp
  high-mythic-fantasy-companion.webp
  sci-fi-cosmic-frontiers-companion.webp
  weird-west-piracy-swashbuckling-companion.webp
  horror-occult-supernatural-companion.webp
  cybernetics-speculative-alternate-tech-companion.webp
  superheroes-kaiju-anime-tropes-companion.webp
  historical-alternate-history-companion.webp
  quirky-experimental-micro-scale-companion.webp
  post-apocalyptic-speculative-worlds-companion.webp
```

Requirements:

- Source images may be PNG, but production should emit optimized AVIF and WebP variants where supported.
- Preserve a high-resolution source for social images and high-density displays.
- Set explicit image width and height to prevent layout shift.
- Use responsive `srcset` and `sizes`.
- Lazy-load below-the-fold covers.
- Do not lazy-load the primary hero image.
- Use human-readable file names.

Suggested alt-text pattern:

```text
Pixel-art cover of D6 Storyteller: [Book Title] by Alex Merced
```

Alt text should describe meaningful visual content when useful and avoid keyword stuffing.

### 8.2 Catalog data model

Store book metadata in a structured file or CMS collection.

```ts
interface Book {
  slug: string;
  title: string;
  subtitle: string;
  shortTitle: string;
  description: string;
  coverImage: string;
  coverAlt: string;
  genres: string[];
  settings: Setting[];
  amazonUrl: string;
  publicationDate?: string;
  isbn10?: string;
  isbn13?: string;
  formats?: Array<'Paperback' | 'Hardcover' | 'Kindle'>;
  seoTitle: string;
  seoDescription: string;
  socialImage?: string;
}

interface Setting {
  name: string;
  premise: string;
  mechanic?: string;
  tags: string[];
}
```

Do not fabricate ISBNs, publication dates, prices, ratings, or availability. Add them only from verified source data.

### 8.3 Amazon outbound links

Primary URL:

```text
https://www.amazon.com/dp/B0HC4XMKW3?binding=paperback&ref_=saga_sdp_cft_dsk
```

Requirements:

- Use the supplied URL for series-level CTAs.
- Open in the same tab by default for predictable accessibility unless product requirements specify otherwise.
- If opening a new tab, include `rel="noopener noreferrer"`.
- Do not add `nofollow` solely because the link is commercial. Add `rel="sponsored"` only if the link is an affiliate or paid placement.
- Track outbound events without modifying or breaking the destination URL.

Suggested analytics event:

```json
{
  "event": "amazon_click",
  "book_slug": "core-rulebook",
  "placement": "homepage_hero",
  "destination": "series_page"
}
```

## 9. SEO Requirements

## 9.1 Technical SEO baseline

- All public content must be server-rendered or statically generated.
- Every indexable page must return HTTP 200.
- Retired URLs must use HTTP 301 redirects to their closest replacement.
- Unknown URLs return a true HTTP 404.
- Use HTTPS exclusively.
- Redirect all HTTP traffic to HTTPS.
- Select one hostname format and redirect alternatives to it.
- Use lowercase, readable, trailing-slash-consistent URLs.
- Avoid query parameters for canonical content.
- Avoid rendering critical text only after client-side JavaScript runs.
- Include a self-referencing canonical on every indexable page.

## 9.2 Canonical tags

Homepage:

```html
<link rel="canonical" href="https://d6storyteller.alexmerced.com/">
```

Book page example:

```html
<link rel="canonical" href="https://d6storyteller.alexmerced.com/books/high-mythic-fantasy-companion/">
```

Rules:

- Canonicals must use HTTPS and the preferred hostname.
- Canonicals must match the final redirected URL.
- Do not canonicalize all pages to the homepage.
- Include only canonical URLs in the XML sitemap.
- Ensure internal links use canonical URLs directly.

## 9.3 Title tags

Keep most titles within approximately 50–60 visible characters when practical, but prioritize clarity over a rigid character count.

Templates:

```text
Homepage: D6 Storyteller | Fiction-First Tabletop RPG by Alex Merced
Books: D6 Storyteller Books and Companion Settings
Book: [Short Book Name] | D6 Storyteller
System: How D6 Storyteller Works | Fiction-First D6 RPG
Settings: D6 Storyteller Settings | Browse Every World
FAQ: D6 Storyteller FAQ | Rules, Books, Dice, and Settings
About: About D6 Storyteller and Alex Merced
```

Long book names may need a shorter SEO title while keeping the full name in the H1.

## 9.4 Meta descriptions

Write a unique, accurate description for every indexable page. Target roughly 140–165 characters where possible, without treating the limit as mandatory.

Homepage example:

```html
<meta name="description" content="Explore D6 Storyteller, a fiction-first tabletop RPG engine by Alex Merced, plus genre companions featuring ten ready-to-play settings each.">
```

Book-page pattern:

```text
Explore [Book Name], a D6 Storyteller companion with ten [genre] settings, custom mechanics, adventure seeds, archetypes, and character sheets.
```

## 9.5 Robots meta directives

Default indexable pages:

```html
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">
```

Non-indexable utility or duplicate pages:

```html
<meta name="robots" content="noindex,follow">
```

Do not block a URL in `robots.txt` when relying on a page-level `noindex`, because crawlers must access the page to see the directive.

## 9.6 Heading rules

- Exactly one descriptive H1 per page.
- Use H2 and H3 elements hierarchically.
- Do not use headings solely for visual styling.
- Include the exact book name as the H1 on each book page.
- Write descriptive section headings that can stand alone in answer-engine excerpts.

## 9.7 Internal linking

- Homepage links to every book page.
- Every book page links to the system, settings, FAQ, Amazon, previous book, and next book.
- Setting entries link back to their parent book.
- Related companions link to one another based on overlapping genres.
- Use descriptive anchor text rather than repeated “learn more.”
- Include breadcrumb navigation on all pages below the homepage.

## 9.8 Open Graph metadata

Every indexable page should include:

```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="D6 Storyteller">
<meta property="og:title" content="D6 Storyteller | Fiction-First Tabletop RPG">
<meta property="og:description" content="Explore the D6 Storyteller core rules and genre companion books by Alex Merced.">
<meta property="og:url" content="https://d6storyteller.alexmerced.com/">
<meta property="og:image" content="https://d6storyteller.alexmerced.com/images/social/d6-storyteller-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="D6 Storyteller tabletop roleplaying book series by Alex Merced">
<meta property="og:locale" content="en_US">
```

Book pages should use the book cover or a purpose-built 1200×630 crop that retains readable title text.

## 9.9 X / Twitter metadata

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="D6 Storyteller | Fiction-First Tabletop RPG">
<meta name="twitter:description" content="Explore the D6 Storyteller core rules and ten-world companion books.">
<meta name="twitter:image" content="https://d6storyteller.alexmerced.com/images/social/d6-storyteller-home.jpg">
<meta name="twitter:image:alt" content="D6 Storyteller tabletop roleplaying book series by Alex Merced">
```

Add `twitter:site` and `twitter:creator` only after confirming the correct handles.

## 9.10 Favicons and application metadata

Provide:

- `/favicon.ico`
- `/favicon.svg`
- `/apple-touch-icon.png`
- `/site.webmanifest`
- 192×192 and 512×512 application icons
- Theme color matching the dark navy brand foundation

Example:

```html
<meta name="theme-color" content="#07111f">
<link rel="manifest" href="/site.webmanifest">
```

## 10. AEO and GEO Requirements

“Answer Engine Optimization” and “Generative Engine Optimization” should be treated as extensions of strong information architecture, crawlability, structured data, entity clarity, and useful content. Do not create low-value pages solely for AI systems.

### 10.1 Entity clarity

The website should consistently define:

- **D6 Storyteller** as a tabletop roleplaying game system and book series.
- **Alex Merced** as the author and creator.
- The **Core Rulebook** as the foundational rules volume.
- **Companions** as themed expansions containing ten settings.
- The supplied Amazon URL as the primary place to find the series.

Use the same wording and identifiers across HTML, JSON-LD, `llms.txt`, social profiles, and metadata.

### 10.2 Answer-first content blocks

Each important page should begin major sections with concise, direct statements before elaboration.

Example:

> D6 Storyteller is a fiction-first tabletop roleplaying engine that resolves uncertain actions with pools of six-sided dice.

Book-page summary example:

> D6 Storyteller: Horror, Occult & Supernatural Companion expands the core system with ten horror settings, genre-specific mechanics, starter adventures, and custom character sheets.

These statements should be visible HTML, not hidden metadata.

### 10.3 Question-oriented content

Use natural questions as headings where appropriate:

- What is D6 Storyteller?
- What is included in each companion?
- Which D6 Storyteller book should I start with?
- What dice do I need?
- Can I combine settings and mechanics?

Answers should be concise, factual, and self-contained in their opening sentence.

### 10.4 Quotable facts

Maintain a central source of verified facts for reuse:

```text
Name: D6 Storyteller
Type: Fiction-first tabletop roleplaying system and book series
Creator and author: Alex Merced
Core resolution: Six-sided dice pools
Core book: D6 Storyteller: The Core Rulebook
Companion format: Ten themed settings per companion
Official website: https://d6storyteller.alexmerced.com/
Series purchase page: https://www.amazon.com/dp/B0HC4XMKW3?binding=paperback&ref_=saga_sdp_cft_dsk
```

Do not claim awards, sales figures, review ratings, compatibility, licensing terms, or community size without verified evidence.

### 10.5 Content provenance

- Display Alex Merced as the author on every book page.
- Include visible “Last updated” dates on rules explanations, FAQs, errata, and resources when they may change.
- Add editorial ownership and contact information.
- Distinguish official descriptions from reader reviews or third-party commentary.

## 11. `llms.txt`

`llms.txt` is an emerging proposal, not a universal access-control standard. Implement it as a curated guide for language models and agents. It does not replace `robots.txt`, sitemaps, semantic HTML, or structured data.

Create `/llms.txt` at the site root:

```markdown
# D6 Storyteller

> D6 Storyteller is a fiction-first tabletop roleplaying system and book series created by Alex Merced. It uses pools of six-sided dice and expands through companion books containing ten themed settings each.

Official website: https://d6storyteller.alexmerced.com/
Author: Alex Merced
Primary series page: https://www.amazon.com/dp/B0HC4XMKW3?binding=paperback&ref_=saga_sdp_cft_dsk

## Core Information

- [How D6 Storyteller Works](https://d6storyteller.alexmerced.com/system/): Overview of the fiction-first D6 engine.
- [Complete Book Series](https://d6storyteller.alexmerced.com/books/): Canonical catalog of all books.
- [Settings Directory](https://d6storyteller.alexmerced.com/settings/): Index of settings and their parent books.
- [Frequently Asked Questions](https://d6storyteller.alexmerced.com/faq/): Answers about rules, books, dice, and compatibility.
- [About Alex Merced](https://d6storyteller.alexmerced.com/about/): Author and creator information.

## Books

- [The Core Rulebook](https://d6storyteller.alexmerced.com/books/core-rulebook/)
- [High & Mythic Fantasy Companion](https://d6storyteller.alexmerced.com/books/high-mythic-fantasy-companion/)
- [Sci-Fi & Cosmic Frontiers Companion](https://d6storyteller.alexmerced.com/books/sci-fi-cosmic-frontiers-companion/)
- [Weird West, Piracy & Swashbuckling Companion](https://d6storyteller.alexmerced.com/books/weird-west-piracy-swashbuckling-companion/)
- [Horror, Occult & Supernatural Companion](https://d6storyteller.alexmerced.com/books/horror-occult-supernatural-companion/)
- [Cybernetics, Speculative & Alternate Tech Companion](https://d6storyteller.alexmerced.com/books/cybernetics-speculative-alternate-tech-companion/)
- [Superheroes, Kaiju & Anime Tropes Companion](https://d6storyteller.alexmerced.com/books/superheroes-kaiju-anime-tropes-companion/)
- [Historical & Alternate History Companion](https://d6storyteller.alexmerced.com/books/historical-alternate-history-companion/)
- [Quirky, Experimental & Micro-Scale Companion](https://d6storyteller.alexmerced.com/books/quirky-experimental-micro-scale-companion/)
- [Post-Apocalyptic & Speculative Worlds Companion](https://d6storyteller.alexmerced.com/books/post-apocalyptic-speculative-worlds-companion/)

## Optional

- [Expanded machine-readable site summary](https://d6storyteller.alexmerced.com/llms-full.txt)
- [XML Sitemap](https://d6storyteller.alexmerced.com/sitemap.xml)

## Usage Notes

Use the official book titles and descriptions shown on this website. Do not infer prices, availability, editions, ratings, or licensing terms that are not explicitly published.
```

Optional `/llms-full.txt` may contain a plain-text or Markdown compilation of substantive public page content. It must exclude private data, unpublished manuscripts, analytics details, and copyrighted book interiors.

## 12. `robots.txt`

Recommended production file:

```text
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /preview/
Disallow: /_next/static/chunks/pages/api/

Sitemap: https://d6storyteller.alexmerced.com/sitemap.xml
```

Adjust framework-specific paths. Do not disallow CSS, JavaScript, images, or other assets required for rendering. Remove nonexistent paths rather than accumulating irrelevant directives.

Optional AI-crawler policy must be a deliberate owner decision. Do not assume that all AI crawler names, behavior, or compliance are stable. If restrictions are desired, document the business decision and maintain crawler-specific directives separately.

## 13. XML Sitemap

Generate automatically at build or request time.

Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://d6storyteller.alexmerced.com/</loc>
    <lastmod>2026-07-30</lastmod>
  </url>
  <url>
    <loc>https://d6storyteller.alexmerced.com/books/</loc>
    <lastmod>2026-07-30</lastmod>
  </url>
  <url>
    <loc>https://d6storyteller.alexmerced.com/books/core-rulebook/</loc>
    <lastmod>2026-07-30</lastmod>
  </url>
</urlset>
```

Requirements:

- Include only canonical, indexable, HTTP 200 URLs.
- Use accurate `lastmod` dates tied to meaningful content changes.
- Do not include `priority` or `changefreq` unless there is a defined operational reason.
- Split into a sitemap index if the site later exceeds protocol limits.
- Reference the sitemap in `robots.txt`.
- Submit through Google Search Console and Bing Webmaster Tools after deployment.

An optional image sitemap is unnecessary if cover images are present in crawlable HTML with proper image metadata. Add one only if image discovery becomes a measurable problem.

## 14. Structured Data and JSON-LD

Use JSON-LD. All structured information must match visible page content.

### 14.1 Homepage graph

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://d6storyteller.alexmerced.com/#website",
      "url": "https://d6storyteller.alexmerced.com/",
      "name": "D6 Storyteller",
      "description": "A fiction-first tabletop roleplaying system and book series by Alex Merced.",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://d6storyteller.alexmerced.com/#publisher"
      }
    },
    {
      "@type": "Person",
      "@id": "https://d6storyteller.alexmerced.com/#alex-merced",
      "name": "Alex Merced",
      "url": "https://d6storyteller.alexmerced.com/about/"
    },
    {
      "@type": "Organization",
      "@id": "https://d6storyteller.alexmerced.com/#publisher",
      "name": "Alex Merced Studio",
      "url": "https://d6storyteller.alexmerced.com/",
      "founder": {
        "@id": "https://d6storyteller.alexmerced.com/#alex-merced"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://d6storyteller.alexmerced.com/#webpage",
      "url": "https://d6storyteller.alexmerced.com/",
      "name": "D6 Storyteller | Fiction-First Tabletop RPG by Alex Merced",
      "isPartOf": {
        "@id": "https://d6storyteller.alexmerced.com/#website"
      },
      "about": {
        "@id": "https://d6storyteller.alexmerced.com/#series"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "CreativeWorkSeries",
      "@id": "https://d6storyteller.alexmerced.com/#series",
      "name": "D6 Storyteller",
      "description": "A fiction-first tabletop roleplaying system and companion book series.",
      "creator": {
        "@id": "https://d6storyteller.alexmerced.com/#alex-merced"
      },
      "url": "https://d6storyteller.alexmerced.com/books/"
    }
  ]
}
</script>
```

Use `Organization` only if “Alex Merced Studio” is the intended public publisher entity. Otherwise use the `Person` as publisher and remove the organization node.

### 14.2 Book page graph

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Book",
      "@id": "https://d6storyteller.alexmerced.com/books/core-rulebook/#book",
      "name": "D6 Storyteller: The Core Rulebook",
      "alternateName": "A Fiction-First Tabletop Roleplaying Engine & 10 Starter Worlds",
      "url": "https://d6storyteller.alexmerced.com/books/core-rulebook/",
      "image": "https://d6storyteller.alexmerced.com/images/covers/core-rulebook.webp",
      "inLanguage": "en-US",
      "author": {
        "@type": "Person",
        "@id": "https://d6storyteller.alexmerced.com/#alex-merced",
        "name": "Alex Merced"
      },
      "isPartOf": {
        "@type": "CreativeWorkSeries",
        "@id": "https://d6storyteller.alexmerced.com/#series",
        "name": "D6 Storyteller"
      },
      "sameAs": "https://www.amazon.com/dp/B0HC4XMKW3?binding=paperback&ref_=saga_sdp_cft_dsk"
    },
    {
      "@type": "WebPage",
      "@id": "https://d6storyteller.alexmerced.com/books/core-rulebook/#webpage",
      "url": "https://d6storyteller.alexmerced.com/books/core-rulebook/",
      "name": "D6 Storyteller: The Core Rulebook",
      "mainEntity": {
        "@id": "https://d6storyteller.alexmerced.com/books/core-rulebook/#book"
      },
      "breadcrumb": {
        "@id": "https://d6storyteller.alexmerced.com/books/core-rulebook/#breadcrumb"
      },
      "isPartOf": {
        "@id": "https://d6storyteller.alexmerced.com/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://d6storyteller.alexmerced.com/books/core-rulebook/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://d6storyteller.alexmerced.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Books",
          "item": "https://d6storyteller.alexmerced.com/books/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "The Core Rulebook",
          "item": "https://d6storyteller.alexmerced.com/books/core-rulebook/"
        }
      ]
    }
  ]
}
</script>
```

Add these only when verified:

- `isbn`
- `datePublished`
- `bookEdition`
- `numberOfPages`
- `bookFormat`
- `publisher`
- `offers`

Do not place one series-level Amazon URL in every `Book.sameAs` if it does not identify the specific book. Use a specific Amazon book URL where available. Until then, treat the series URL as a purchase CTA rather than an identity URL on individual `Book` nodes.

### 14.3 Catalog page

Use `CollectionPage` and `ItemList` for the books catalog.

### 14.4 FAQ

Use `FAQPage` only when the same questions and complete answers appear visibly on the page. Do not mark up promotional statements as questions.

### 14.5 Validation

- Validate with Schema.org Validator.
- Validate Google-supported rich result types with Google Rich Results Test.
- Treat valid Schema.org markup as entity clarity, not a guarantee of rich-result display.
- Run validation in CI against representative pages.

## 15. Performance Requirements

- Static generation is preferred.
- Minimize client-side JavaScript.
- Use system fonts or self-hosted, licensed web fonts with appropriate preload behavior.
- Do not load decorative scripts before meaningful content.
- Optimize cover assets during build.
- Use CDN caching for immutable assets.
- Compress HTML, CSS, JSON, SVG, and JavaScript.
- Avoid autoplay video.
- Prevent layout shift by reserving image dimensions.
- Target initial HTML under 100 KB when practical.
- Target homepage total transfer under 2 MB on first mobile load, with below-the-fold cover images deferred.

Suggested Core Web Vitals targets:

| Metric | Target |
|---|---:|
| LCP | ≤ 2.5 seconds |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |

## 16. Accessibility Requirements

Meet WCAG 2.2 AA where practical.

- Keyboard-accessible navigation, filters, dialogs, and CTAs.
- Visible focus indicators.
- Skip-to-content link.
- Semantic landmarks.
- Sufficient contrast for gold text on navy backgrounds.
- Do not place long body text directly over detailed artwork.
- Respect `prefers-reduced-motion`.
- Descriptive alt text for meaningful covers and illustrations.
- Empty alt text for purely decorative flourishes.
- Form controls require visible labels.
- Touch targets at least 44×44 CSS pixels where practical.
- No information conveyed by color alone.

## 17. Analytics and Search Operations

Recommended analytics:

- Privacy-conscious web analytics or GA4, based on owner preference.
- Google Search Console.
- Bing Webmaster Tools.

Track:

- Amazon outbound clicks.
- Book-card clicks.
- Genre-filter use.
- Resource downloads.
- FAQ expansion events.
- Internal search terms if site search is added.

Do not send cover filenames, query text, or other potentially sensitive values as accidental personally identifiable information.

## 18. Suggested Technology

A static-first framework is recommended because the site is content-driven.

Preferred options:

1. **Astro** with content collections and static output.
2. **Next.js** with static generation if the owner expects richer application features later.
3. **Eleventy** for a minimal static implementation.

Suggested deployment:

- Netlify, Cloudflare Pages, or Vercel.
- DNS CNAME or platform-specific configuration for `d6storyteller.alexmerced.com`.
- Automatic HTTPS.
- Preview deployments for pull requests.

Suggested content source:

- Markdown or MDX files in Git for launch.
- Upgrade to a headless CMS only if nontechnical editing becomes necessary.

## 19. Content and Repository Structure

```text
/
  public/
    images/
      covers/
      social/
      icons/
    robots.txt
    llms.txt
    llms-full.txt
    site.webmanifest
  src/
    content/
      books/
      pages/
      settings/
    components/
      BookCard
      BookGrid
      AmazonCTA
      Breadcrumbs
      FAQ
      SEOHead
      StructuredData
    layouts/
    pages/
  scripts/
    validate-metadata
    validate-jsonld
    optimize-images
  tests/
  PRD.md
```

## 20. Metadata Acceptance Checklist

Every indexable page must have:

- Unique title.
- Unique meta description.
- Self-referencing canonical.
- One H1.
- Index/follow directive.
- Open Graph title, description, image, URL, and alt text.
- X/Twitter card tags.
- Appropriate JSON-LD.
- Breadcrumbs when not the homepage.
- Inclusion in sitemap.
- Internal links from at least one other indexable page.
- No broken images or links.

## 21. QA and Acceptance Criteria

### 21.1 Visual

- Site matches the pixel-art, navy, and gold series identity.
- Covers retain correct aspect ratio and are not distorted.
- Text remains readable at 320 CSS pixels wide.
- No major page text is baked solely into imagery.
- Amazon CTA is visually prominent but not disruptive.

### 21.2 Functional

- Every book opens a unique detail page.
- Every Amazon CTA resolves to the supplied series URL or a verified book-specific URL.
- Filters work by keyboard and pointer.
- 404 handling works.
- All routes work when loaded directly.

### 21.3 SEO and AEO/GEO

- Canonicals are absolute and correct.
- Sitemap contains only canonical 200 URLs.
- `robots.txt` references the sitemap.
- `/llms.txt` is available as plain UTF-8 text or Markdown-compatible text.
- JSON-LD validates without critical errors.
- No unverified values appear in structured data.
- Visible answer blocks match structured facts.
- No page depends on `llms.txt` for normal indexing.

### 21.4 Performance and accessibility

- Lighthouse targets are met on homepage, catalog, and one representative book page.
- Keyboard test passes.
- Screen-reader landmarks and headings are logical.
- Images have correct alt behavior.
- No horizontal scrolling at common mobile widths.

## 22. Launch Plan

### Phase 1: Foundation

- Confirm final book catalog and cover filenames.
- Confirm author bio and publisher naming.
- Confirm whether Amazon links are affiliate links.
- Establish repository, framework, domain, and deployment pipeline.

### Phase 2: Core build

- Build global layout and navigation.
- Implement content models.
- Build homepage, catalog, system, about, FAQ, resources, and book-page templates.
- Add covers and social images.

### Phase 3: Discovery layer

- Add metadata system.
- Add canonical tags, robots directives, sitemap, `llms.txt`, and JSON-LD.
- Add internal linking and breadcrumbs.
- Add analytics events.

### Phase 4: QA

- Validate URLs, markup, accessibility, performance, and responsive behavior.
- Test Amazon links.
- Confirm all book titles and subtitles against source data.

### Phase 5: Launch

- Point DNS.
- Verify HTTPS and redirect behavior.
- Submit sitemap to Google Search Console and Bing Webmaster Tools.
- Request indexing for the homepage, catalog, system page, and representative book pages.
- Monitor coverage, structured-data reports, Core Web Vitals, and outbound conversions.

## 23. Open Decisions

The following require owner confirmation before final implementation:

1. Is the public publisher name “Alex Merced,” “Alex Merced Studio,” or another entity?
2. Should the site link to `WhoIsAlexMerced.com`, `AlexMerced.com`, or both?
3. Are the Amazon links affiliate links?
4. Are there verified individual Amazon URLs, ISBNs, publication dates, and formats for every book?
5. Will character sheets or sample materials be available for direct download?
6. Should the site include a newsletter signup?
7. Should the website permit major AI crawlers, block selected crawlers, or apply a mixed policy?
8. Will the website include reviews or testimonials, and can each be verified and attributed?
9. Does the owner want individual setting pages at launch, or only the consolidated settings directory?
10. Is “D6 Storyteller” a registered or pending trademark requiring a mark in site copy?

## 24. Reference Sources for Implementation

Use these sources when validating the implementation:

- Google Search Central documentation: `https://developers.google.com/search/docs`
- Google canonicalization guidance: `https://developers.google.com/search/docs/crawling-indexing/canonicalization`
- Google robots documentation: `https://developers.google.com/search/docs/crawling-indexing/robots/intro`
- Google sitemap documentation: `https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap`
- Google structured-data introduction: `https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data`
- Google guidance for AI features: `https://developers.google.com/search/docs/fundamentals/ai-optimization-guide`
- Schema.org: `https://schema.org/`
- Sitemap protocol: `https://www.sitemaps.org/`
- `llms.txt` proposal: `https://github.com/AnswerDotAI/llms-txt`

