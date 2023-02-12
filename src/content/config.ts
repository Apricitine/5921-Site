import { z, defineCollection } from 'astro:content';

const zod = z;

export const collections = {
  'articles': defineCollection({
    schema: zod.object({
      title: zod.string(),
      author: zod.string(),
      image: zod.string().optional()
    })
  })
};