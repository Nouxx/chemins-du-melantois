import { SiteMetadata } from "@/data/site/metadata";
import edition2024Hero from "@/images/races/2024-edition-hero.webp";

export const OpenGraphData = {
  locale: "fr_FR",
  type: "website",
  url: `${SiteMetadata.url}${SiteMetadata.base}`,
  title: `${SiteMetadata.title} - ${SiteMetadata.tagline}`,
  description: SiteMetadata.description,
  image: edition2024Hero,
  imageAlt:
    "Une vue en hauteur du départ de la course 2024 des Chemins du Mélantois",
} as const;
