import { raceUrlSlugs } from "@/data_files/races/slugs";
import { z } from "zod";

export const RoutesSchema = z.object({
  home: z.literal("/"),
  races: z.string(),
  raceDetails: z.function().args(z.enum(raceUrlSlugs)).returns(z.string()),
  resultsAndPictures: z.string(),
  volunteer: z.string(),
});
