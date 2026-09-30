import d6Books from './d6-books.json';

export type D6Book = { slug: string; title: string; canonicalPage: string; amazon: string };

const bySlug = new Map((d6Books.books as D6Book[]).map((b) => [b.slug, b]));
const book = (slug: string) => bySlug.get(`d6-storyteller-${slug}`);

export const coreRulebook = book('the-core-rulebook')!;

/**
 * Keyword rules that map a setting's free-text genre to the companion books whose
 * toolkits fit it. Checked in order; a setting can match more than one companion.
 */
const RULES: Array<[RegExp, string]> = [
  [/horror|occult|gothic|supernatural|spiritual|folklore|undead/i, 'horror-occult-supernatural-companion'],
  [/cyberpunk|biopunk|nukepunk|hydropunk|steampunk|post-human|upload/i, 'cybernetics-speculative-alternate-tech-companion'],
  [/sci-fi|space|cosmic|solarpunk|oceanic sci/i, 'sci-fi-cosmic-frontiers-companion'],
  [/post-apocalyptic|wasteland|dystopia/i, 'post-apocalyptic-speculative-worlds-companion'],
  [/western|maritime|swashbuckl|pira/i, 'weird-west-piracy-swashbuckling-companion'],
  [/historical|history|prehistoric/i, 'historical-alternate-history-companion'],
  [/superhero|kaiju/i, 'superheroes-kaiju-anime-tropes-companion'],
  [/comed|comic|humor|satire/i, 'quirky-experimental-micro-scale-companion'],
  [/fantasy|mythic|mytholog|fairy/i, 'high-mythic-fantasy-companion'],
];

export function companionsForGenre(genre: string, max = 2): D6Book[] {
  const slugs: string[] = [];
  for (const [pattern, slug] of RULES) {
    if (pattern.test(genre) && !slugs.includes(slug)) slugs.push(slug);
  }
  return slugs.slice(0, max).flatMap((s) => book(s) ?? []);
}

/** One title pattern for every setting page: name, genre, and the system. */
export function settingPageTitle(title: string, genre: string): string {
  const candidates = [
    `${title} | ${genre} RPG Setting | D6 Storyteller`,
    `${title} | ${genre} | D6 Storyteller`,
  ];
  return candidates.find((t) => t.length <= 80) ?? `${title} | D6 Storyteller`;
}
