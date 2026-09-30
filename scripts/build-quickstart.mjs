// Assembles public/downloads/d6-storyteller-quickstart.pdf from the cover page in
// scripts/quickstart/cover.html and four printables that already live in public/downloads.
// Needs a local Chrome and poppler's pdfunite; run by hand when a printable changes:
// `npm run build:quickstart`. The PDF is committed, so the Netlify build does not run this.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(new URL('..', import.meta.url).pathname);
const chrome = process.env.CHROME ?? 'google-chrome';
const pages = [
  'scripts/quickstart/cover.html',
  'public/downloads/d6-player-cheat-sheet.html',
  'public/downloads/d6-storyteller-reference.html',
  'public/downloads/d6-character-sheet.html',
  'public/downloads/d6-session-zero-worksheet.html',
];
const tmp = mkdtempSync(join(tmpdir(), 'd6-quickstart-'));
const parts = pages.map((page, i) => {
  const out = join(tmp, `${i}.pdf`);
  execFileSync(chrome, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000',
    `--print-to-pdf=${out}`, `file://${join(root, page)}`,
  ], { stdio: 'ignore' });
  return out;
});
execFileSync('pdfunite', [...parts, join(root, 'public/downloads/d6-storyteller-quickstart.pdf')]);
rmSync(tmp, { recursive: true, force: true });
console.log('wrote public/downloads/d6-storyteller-quickstart.pdf');
