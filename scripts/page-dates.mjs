// Writes src/data/page-dates.json: the content date for every page in the
// sitemap, keyed by URL path. A page's date is the last commit that changed
// its own source, skipping commits that only touched shared chrome or metadata
// (footer, network head, consent, CTA, WebMCP, SEO/title passes, framework
// moves). Community settings also count their frontmatter publishedDate.
// On a shallow clone the committed JSON is kept as is.
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';

const OUT = 'src/data/page-dates.json';
const CHROME = /\[mechanical\]|\[metadata-only\]|footer|webmcp|navigation|\bnav\b|cta strip|consent mode|network head|network plumbing|person @id|ga4|analytics|redirect|sitemap|astro 7|content layer|^seo|json-ld|page titles|search titles|icons|responsive|webp/i;
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();

let shallow = true;
try { shallow = git('rev-parse', '--is-shallow-repository') !== 'false'; } catch { shallow = true; }
if (shallow) {
  console.log(`[page-dates] shallow or no git history; keeping ${existsSync(OUT) ? 'committed' : 'no'} ${OUT}`);
  if (!existsSync(OUT)) writeFileSync(OUT, '{}\n');
  process.exit(0);
}

const contentDate = (...files) => {
  const rows = git('log', '--format=%ad%x09%s', '--date=short', '--', ...files.filter(existsSync))
    .split('\n').filter(Boolean).map((line) => line.split('\t'));
  return (rows.find(([, subject]) => !CHROME.test(subject)) ?? rows.at(-1))?.[0];
};
const newest = (...dates) => dates.filter(Boolean).sort().at(-1);

const out = {};
// Static pages: src/pages/x.astro or src/pages/x/index.astro -> /x/
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(`${dir}/${e.name}`) : [`${dir}/${e.name}`]);
for (const file of walk('src/pages').filter((f) => f.endsWith('.astro') && !f.includes('['))) {
  const route = file.replace(/^src\/pages/, '').replace(/(\/index)?\.astro$/, '/');
  out[route === '' ? '/' : route] = contentDate(file);
}
for (const f of readdirSync('src/content/books').filter((f) => f.endsWith('.md'))) {
  out[`/books/${f.replace(/\.md$/, '')}/`] = contentDate(`src/content/books/${f}`);
}
let newestSetting;
for (const f of readdirSync('src/content/community-settings').filter((f) => f.endsWith('.md'))) {
  const file = `src/content/community-settings/${f}`;
  const published = readFileSync(file, 'utf8').match(/^publishedDate:\s*"?(\d{4}-\d{2}-\d{2})/m)?.[1];
  const date = newest(published, contentDate(file));
  out[`/community-settings/${f.replace(/\.md$/, '')}/`] = date;
  newestSetting = newest(newestSetting, date);
}
// Listing pages change when a setting is added.
for (const path of ['/supplements/', '/settings/']) out[path] = newest(out[path], newestSetting);

const sorted = Object.fromEntries(Object.entries(out).filter(([, d]) => d).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(OUT, JSON.stringify(sorted, null, 2) + '\n');
console.log(`[page-dates] wrote ${Object.keys(sorted).length} entries to ${OUT}`);
