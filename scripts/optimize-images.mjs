// Writes smaller WebP variants of the book covers and supplement art so pages
// can serve them with srcset instead of the full files:
//   public/images/covers/<name>.webp       -> <name>-360.webp, <name>-560.webp
//   public/images/supplements/<name>.png   -> <name>-400.webp, <name>-800.webp
// Existing variants are kept, so this is cheap to rerun after adding art.
// Run it and commit the output: `node scripts/optimize-images.mjs`.
import sharp from 'sharp';
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const jobs = [
  { dir: 'public/images/covers', match: /^(?!.*-\d+\.webp$).+\.webp$/, widths: [360, 560] },
  { dir: 'public/images/supplements', match: /\.png$/, widths: [400, 800] },
];

let written = 0;
for (const { dir, match, widths } of jobs) {
  for (const name of readdirSync(dir).filter((f) => match.test(f)).sort()) {
    const src = join(dir, name);
    for (const width of widths) {
      const out = src.replace(/\.(png|webp)$/, `-${width}.webp`);
      if (existsSync(out)) continue;
      await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
      written++;
    }
  }
}
console.log(`[optimize-images] wrote ${written} WebP variants`);
