// Responsive sources for covers and supplement art. Variants are written by
// scripts/optimize-images.mjs; when one is missing the original is used.
import { existsSync } from 'node:fs';

const VARIANTS: Array<[RegExp, number[]]> = [
  [/^\/images\/covers\/.+\.webp$/, [360, 560]],
  [/^\/images\/supplements\/.+\.png$/, [400, 800]],
];

export function responsive(src: string): { src: string; srcset?: string } {
  const widths = VARIANTS.find(([re]) => re.test(src))?.[1];
  if (!widths) return { src };
  const files = widths.map((w) => [w, src.replace(/\.(png|webp)$/, `-${w}.webp`)] as const);
  if (!files.every(([, f]) => existsSync(`public${f}`))) return { src };
  return { src: files[0][1], srcset: files.map(([w, f]) => `${f} ${w}w`).join(', ') };
}
