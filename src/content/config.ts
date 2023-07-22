import { z, defineCollection } from 'astro:content';
import { complexityValues, categoryValues } from '../schema';

const recipesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        complexity: z.enum(complexityValues).optional(),
        category: z.enum(categoryValues),
        isMealIdeaOnly: z.boolean(),
    })
})

export const collections = {
    'recipes': recipesCollection,
  };