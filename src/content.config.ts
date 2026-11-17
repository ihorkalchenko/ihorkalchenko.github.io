import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
    thumbnail: z.string(),
    alt: z.string().optional().default(''),
    stack: z.string(),
    link: z.string(),
  }),
});

export const collections = { projects };
