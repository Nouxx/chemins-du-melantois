import { RoutesSchema } from "@/data_files/navigation/routes/schema";
import type { RaceUrlSlug } from "@/data_files/races/slugs";
import { SiteMetadata } from "@/data_files/site/metadata";

export const routes = {
  home: `/`,
  races: `${SiteMetadata.base}/courses`,
  raceDetails: (id: RaceUrlSlug) => `${SiteMetadata.base}/courses/${id}`,
  resultsAndPictures: `${SiteMetadata.base}/resultats`,
  volunteer: `${SiteMetadata.base}/benevoles`,
} as const;

RoutesSchema.parse(routes);
