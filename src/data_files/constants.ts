import ogImageSrc from "@images/social.png";

import MelIconSvg from "../images/partners/mel-logo.svg?raw";
import NordIconSvg from "../images/partners/nord-logo.svg?raw";
import CreditMutuelIcon from "../images/partners/credit-mutuel-logo.svg?raw";
import MatchLogoSvg from "../images/partners/match-logo.svg?raw";

export const SITE = {
  title: "Les Chemins du Mélantois",
  tagline: "Top-quality Hardware Tools",
  description:
    "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short:
    "ScrewFast offers top-tier hardware tools and expert construction services to meet all your project needs.",
  url: "https://www.lescheminsdumelantois.fr",
  author: "Association Les Chemins du Mélantois",
  base: "/chemins-du-melantois", // base path for all routes (can be empty)
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description:
    "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
};

export const partnersData = [
  {
    icon: MelIconSvg, // todo: clean svg inner padding
    name: "MEL Métropole Européene de Lille",
    href: "https://www.lillemetropole.fr",
  },
  {
    icon: NordIconSvg,
    name: "Département du Nord",
    href: "https://lenord.fr",
  },
  {
    icon: CreditMutuelIcon,
    name: "Crédit Mutuel",
    href: "https://www.creditmutuel.fr",
  },
  {
    icon: MatchLogoSvg,
    name: "Supermarchés Match",
    href: "https://www.supermarchesmatch.fr",
  },
];
