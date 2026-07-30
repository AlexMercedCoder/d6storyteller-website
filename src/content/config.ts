import { defineCollection, z } from 'astro:content';

const settingSchema = z.object({
  name: z.string(),
  premise: z.string(),
  mechanic: z.string().optional(),
  tags: z.array(z.string()),
});

const booksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    coverImage: z.string(),
    coverAlt: z.string(),
    genres: z.array(z.string()),
    settings: z.array(settingSchema),
    amazonUrl: z.string().url(),
    publicationDate: z.string().optional(),
    isbn10: z.string().optional(),
    isbn13: z.string().optional(),
    formats: z.array(z.enum(['Paperback', 'Hardcover', 'Kindle'])).optional(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    socialImage: z.string().optional(),
    order: z.number(),
  }),
});

const communitySettingsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    genre: z.string(),
    tags: z.array(z.string()),
    premise: z.string(),
    mechanic: z.string(),
    accentColor: z.string().optional(),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    author: z.string().default('Alex Merced'),
    publishedDate: z.string().optional(),
  }),
});

export const collections = {
  books: booksCollection,
  'community-settings': communitySettingsCollection,
};
