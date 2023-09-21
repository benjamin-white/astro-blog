import { defineCollection, z } from "astro:content";

const blogPostSchema = {
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
  }),
};

const css = defineCollection(blogPostSchema);
const typescript = defineCollection(blogPostSchema);
const stuff = defineCollection(blogPostSchema);
const radar = defineCollection(blogPostSchema);

export const collections = { css, typescript, stuff, radar };

export const TAXONOMIES = [
  {
    name: "CSS",
    slug: "css",
    description: "Stuff about CSS",
  },
  {
    name: "Typescript",
    slug: "typescript",
    description: "Stuff about Typescript",
  },
  {
    name: "Stuff",
    slug: "stuff",
    description: "Stuff about stuff",
  },
  {
    name: "Radar",
    slug: "radar",
    description: "What's new?",
  },
];
