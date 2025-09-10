import { RaceLink } from "@/data_files/races/schema";
import { z } from "astro/zod";

export const RaceHighlightDataSchema = z.strictObject({
  title: z.string(),
  subline: z.string(),
  featuredImage: z.strictObject({
    image: z.custom<ImageMetadata>(),
    alt: z.string(),
  }),
  participantsLines: z.array(
    z.strictObject({
      participantsCount: z.number().min(1),
      raceName: z.string(),
    }),
  ),
  resultsLink: RaceLink,
  picturesLinks: RaceLink.optional(),
});

export type RaceHighlightData = z.input<typeof RaceHighlightDataSchema>;
