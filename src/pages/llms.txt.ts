// llms.txt: the hand-written site facts (src/data/llms-base.txt) followed by a
// link list generated from the pages and content collections, so every book,
// setting and tool page is listed and new ones appear without hand edits.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import base from '../data/llms-base.txt?raw';
import pageDates from '../data/page-dates.json';

const SITE = 'https://d6storyteller.alexmerced.com';
const clean = (text: string) => text.replace(/\s+/g, ' ').trim();
const sentence = (text: string) => (/[.!?]$/.test(clean(text)) ? clean(text) : `${clean(text)}.`);

export const GET: APIRoute = async () => {
  const books = (await getCollection('books')).sort((a, b) => a.data.order - b.data.order);
  const settings = (await getCollection('community-settings'))
    .sort((a, b) => a.data.genre.localeCompare(b.data.genre) || a.data.title.localeCompare(b.data.title));
  const updated = Object.values(pageDates as Record<string, string>).sort().at(-1);

  const lines: string[] = [];
  lines.push('## Books', '');
  for (const book of books) {
    lines.push(`- [${book.data.title}](${SITE}/books/${book.id}/): ${clean(book.data.seoDescription)}`);
  }
  lines.push('', '## Play Tools and Printables', '');
  lines.push(
    `- [Get Started](${SITE}/get-started/): how D6 Storyteller works: fiction-first positioning, d6 dice pools, position and effect, characters, and a sample walkthrough.`,
    `- [Free Quickstart](${SITE}/quickstart/): a free 7-page PDF for a first session: player cheat sheet, Storyteller reference, character sheet, and session zero worksheet.`,
    `- [Optional Mechanics](${SITE}/optional-mechanics/): 50 modular plug-in mechanics such as Wound Clocks, Momentum Banks, and Sanity Thresholds.`,
    `- [Story Prompts](${SITE}/prompts/): 30 prompts for building a world from a campaign idea or deepening a character concept.`,
    `- [Resources](${SITE}/resources/): printable sheets, Storyteller aids, the dice roller, and quick reference guides.`,
    `- [Dice Roller](${SITE}/resources/dice-roller/): online dice-pool roller; the highest die sets the outcome tier.`,
    `- [NPC Generator](${SITE}/resources/npc-generator/): named NPCs with an approach, want, method, flaw, and secret.`,
    `- [Scene Starter](${SITE}/resources/scene-starter/): a location, complication, ticking clock, NPC, and opening question.`,
    `- [Solo Runs](${SITE}/resources/solo-runs/): three interactive solo mini-campaigns set in The Burrow Kingdoms.`,
    `- [Downloads](${SITE}/downloads/): printable character sheets, add-on sheets, party trackers, a Storyteller reference card, and a session planner.`,
    `- [Community](${SITE}/community/): the Slack community, local groups, and shared homebrew.`,
    `- [FAQ](${SITE}/faq/): rules, dice, books, optional mechanics, downloads, and the creator.`,
  );
  lines.push('', `## Community Settings (${settings.length})`, '');
  lines.push(`Free online settings for the D6 Storyteller engine. Directory: ${SITE}/supplements/ and ${SITE}/settings/`, '');
  for (const setting of settings) {
    lines.push(`- [${setting.data.title}](${SITE}/community-settings/${setting.id}/): ${setting.data.genre}. ${sentence(setting.data.subtitle)}`);
  }

  // The base file's "## Site Pages" list is replaced by the generated sections.
  const [head, tail = ''] = base.split(/^## Site Pages\n[\s\S]*?(?=^## )/m);
  const body = `${head}${lines.join('\n')}\n\n${tail}`
    .replace(/^# Last updated: .*$/m, `# Last updated: ${updated ?? ''}`);
  return new Response(body.replace(/\n{3,}/g, '\n\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
