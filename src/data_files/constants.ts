import ogImageSrc from "@images/social.png";

import MelIconSvg from "../images/partners/mel-logo.svg?raw";
import NordIconSvg from "../images/partners/nord-logo.svg?raw";
import CreditMutuelIcon from "../images/partners/credit-mutuel-logo.svg?raw";
import MatchLogoSvg from "../images/partners/match-logo.svg?raw";

export const SITE = {
  title: "Les Chemins du Mélantois",
  tagline: "Courses nature et conviviales pour tous",
  description:
    "Les Chemins du Mélantois proposent une série de courses accessibles à tous, dans un cadre naturel au cœur du Mélantois. De 900 m à 10 km, venez courir, encourager ou participer à l'organisation dans une ambiance festive et solidaire.",
  description_short:
    "Courses nature au cœur du Mélantois pour petits et grands dans une ambiance conviviale.",
  url: "https://www.lescheminsdumelantois.fr",
  author: "Association Les Chemins du Mélantois",
  base: "/chemins-du-melantois",
};

export const externalLinks = {
  registration:
    "https://fr.milesrepublic.com/event/les-chemins-du-melantois-2692",
  registrantsList:
    "https://fr.milesrepublic.com/registrants/f263e60a-6018-40ac-901c-5ea0d01c5322",
  sportsRegulations:
    "https://drive.google.com/file/d/1wJoziwxjZGibpH6H8LGX2RFDFugI8jOb/view",
  pps: "https://pps.athle.fr",
  registrationForm:
    "https://drive.google.com/file/d/1MQhT1DbQk1DuGpGzt6YBE3KQWzYrBPNq/view",
  healthQuestionnaire:
    "https://www.lescheminsdumelantois.fr/wp-content/uploads/2023/08/Questionnaire-sante-2023-1.pdf",
  parentalConsentForm:
    "https://drive.google.com/file/d/1E-FdgMfEByDnSmkPhzZmkz84Lsqq9zM6/view",
  edition2024: {
    googlePhotoAlbum: "https://photos.app.goo.gl/3Q6nZiEE1nganQ2G8",
    aSportPage: "http://asport-timing.com/live/chemins-melantois-2024"
  },
  event2023: {
    googlePhotoAlbum: "https://photos.app.goo.gl/2qFFEmykrpoDL6R9A",
    aSportPage: "http://asport-timing.com/live/chemins-melantois-2023",
  },
  event2022: {
    proLiveSportPage: "https://www.prolivesport.fr/index.php?chap=event&sub=liveV3&eventId=807",
  },
  event2019: {
    googlePhotoAlbum: "https://photos.app.goo.gl/a4T2keL3KJbHG9yw5",
    googleDriveLink: "https://drive.google.com/file/d/17yTd18cnWKm_kuXSySaw0T-OYukFAgBQ/view",
  },
  event2018: {
    googlePhotoAlbum: "https://photos.app.goo.gl/D7Mzsf99KEkMPkXg9",
    googleDriveLink: "https://drive.google.com/file/d/1iQrx-swxy37J-8IabnzNJ7p3BQjAYPBx/view",
  },
  event2017: {
    googlePhotoAlbum: "https://photos.app.goo.gl/41c8kvRGvkvwvVbAA",
    googleDriveLink: "https://drive.google.com/file/d/13V7VPyPgNhWXiqFAfOOt-LXpBvS0cAXv/view",
  }
} as const;

export type ExternalLinkKey = keyof typeof externalLinks;

export const routes = {
  home: `${SITE.base}`,
  races: `${SITE.base}/courses`,
  raceDetails: (id: string) => `${routes.races}/${id}`,
  resultsAndPictures: `${SITE.base}/resultats`,
  volunteer: `${SITE.base}/benevoles`,
} as const;

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "fr-FR",
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
