import { LinkSchema } from "@data/schema";
import { z } from "astro/zod";

export const EventHighlightDataSchema = z.strictObject({
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
  resultsLink: LinkSchema,
  picturesLinks: z.array(LinkSchema).optional(),
});

export type EventHighlightData = z.input<typeof EventHighlightDataSchema>;
