import { z, defineCollection } from "astro:content";
import { complexityValues, categoryValues } from "../schema";

const complexitySchema = z.enum(complexityValues).optional();
export type Complexity = z.infer<typeof complexitySchema>;

const categorySchema = z.enum(categoryValues);
export type Category = z.infer<typeof categorySchema>;

const recipesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    complexity: complexitySchema,
    category: categorySchema,
    isMealIdeaOnly: z.boolean(),
  }),
});

export const collections = {
  recipes: recipesCollection,
};
