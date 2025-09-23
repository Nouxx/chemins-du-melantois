import type { RaceUrlSlug } from "@/data_files/races/slugs";
import { SiteMetadata } from "@/data_files/site/metadata";

export const routes = {
  home: `${SiteMetadata.base}/`,
  races: `${SiteMetadata.base}/courses`,
  afterRace: `${SiteMetadata.base}/resultats`,
  volunteer: `${SiteMetadata.base}/benevoles`,
} as const;

export const getRaceDetails = (id: RaceUrlSlug) =>
  `${SiteMetadata.base}/courses/${id}`;
