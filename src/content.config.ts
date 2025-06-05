// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const racesCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/races",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      main: z.object({
        id: z.number(),
        imgCard: image(),
        imgMain: image(),
        imgAlt: z.string(),
      }),
      tabs: z.array(
        z.object({
          id: z.string(),
          dataTab: z.string(),
          title: z.string(),
        }),
      ),
      longDescription: z.object({
        title: z.string(),
        subTitle: z.string(),
        buttonTitle: z.string(),
        buttonURL: z.string(),
      }),
      descriptionItems: z.array(
        z.object({
          title: z.string(),
          subTitle: z.string().optional(),
          list: z.array(z.string()).optional(),
          iconBlock: z
            .object({
              label: z.string(),
              icon: z.string(),
            })
            .optional(),
        }),
      ),
      termOfRegistration: z.object({
        leftSection: z.array(
          z.object({
            title: z.string(),
            subTitle: z.string().optional(),
            list: z.array(z.string()).optional(),
            button: z
              .object({
                label: z.string(),
                url: z.string(),
              })
              .optional(),
            links: z
              .array(
                z.object({
                  label: z.string(),
                  url: z.string(),
                  openInNewTab: z.boolean().default(false),
                }),
              )
              .optional(),
          }),
        ),
        rightSection: z.array(
          z.object({
            title: z.string(),
            subTitle: z.string().optional(),
            list: z.array(z.string()).optional(),
            button: z
              .object({
                label: z.string(),
                url: z.string(),
              })
              .optional(),
            links: z
              .array(
                z.object({
                  label: z.string(),
                  url: z.string(),
                  openInNewTab: z.boolean().default(false),
                }),
              )
              .optional(),
          }),
        ),
      }),
      maps: z.object({
        first: image().optional(),
        second: image().optional(),
      }),
    }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      contents: z.array(z.string()),
      author: z.string(),
      role: z.string().optional(),
      authorImage: image(),
      authorImageAlt: z.string(),
      pubDate: z.date(),
      cardImage: image(),
      cardImageAlt: z.string(),
      readTime: z.number(),
      tags: z.array(z.string()).optional(),
    }),
});

const insightsCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/insights",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // contents: z.array(z.string()),
      cardImage: image(),
      cardImageAlt: z.string(),
    }),
});

export const collections = {
  races: racesCollection,
  blog: blogCollection,
  insights: insightsCollection,
};
