import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['live', 'building', 'concept']),
    url: z.string().optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { products };
