import type { RaceUrlSlug } from "@/data/races/slugs";
import { SiteMetadata } from "@/data/site/metadata";

export const routes = {
  home: `${SiteMetadata.base}/`,
  races: `${SiteMetadata.base}/courses`,
  afterRace: `${SiteMetadata.base}/resultats`,
  volunteer: `${SiteMetadata.base}/benevoles`,
} as const;

export const getRaceDetails = (id: RaceUrlSlug) =>
  `${SiteMetadata.base}/courses/${id}`;
