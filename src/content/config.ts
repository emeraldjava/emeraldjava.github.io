import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

// see https://docs.astro.build/en/guides/content-collections/#defining-a-collection-schema

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      date: z.coerce.date(),
      //pubDate: z.coerce.date().optional(),
      modDatetime: z.coerce.date().optional().nullable(),
      //pubDatetime: z.coerce.date(),
      //modDatetime: z.coerce.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      summary: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = { blog };
