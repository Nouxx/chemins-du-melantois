import { z } from "zod";

export const raceUrlSlugs = [
  "10-km-sainghin-en-melantois",
  "run-and-bike-peronne-en-melantois",
  "5-km-sainghin-en-melantois",
  "900-m-sainghin-en-melantois",
  "900-m-peronne-en-melantois",
] as const;

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const urlSlugSchema = z.string().regex(slugPattern, {
  message:
    "Invalid slug format. Use lowercase letters, numbers and single dashes only.",
});

z.array(urlSlugSchema).parse(raceUrlSlugs);

export type RaceUrlSlug = (typeof raceUrlSlugs)[number];
