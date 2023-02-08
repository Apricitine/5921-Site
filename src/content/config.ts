import { z, defineCollection } from 'astro:content';

export const collections = {
  'articles': defineCollection({
    schema: z.object({
      title: z.string(),
      author: z.string(),
      image: z.string().optional()
    })
  })
};