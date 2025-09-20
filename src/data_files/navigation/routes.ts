import { SITE } from "@/data_files/constants";
import { RoutesSchema } from "@/data_files/navigation/schema";
import type { RaceUrlSlug } from "@/data_files/races/slugs";

export const routes = {
  home: `/`,
  races: `${SITE.base}/courses`,
  raceDetails: (id: RaceUrlSlug) => `${SITE.base}/courses/${id}`,
  resultsAndPictures: `${SITE.base}/resultats`,
  volunteer: `${SITE.base}/benevoles`,
} as const;

RoutesSchema.parse(routes);
