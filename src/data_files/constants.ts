import MelIconSvg from "../images/partners/mel-logo.svg?raw";
import NordIconSvg from "../images/partners/nord-logo.svg?raw";
import CreditMutuelIcon from "../images/partners/credit-mutuel-logo.svg?raw";
import MatchLogoSvg from "../images/partners/match-logo.svg?raw";
import edition2024Hero from "../images/races/2024-edition-hero.webp";
// images
import tenKilometerHero from "../images/races/10km-sem-hero.webp";
import fiveKilometerHero from "../images/races/5km-sem-hero.webp";
import runAndBikeHero from "../images/races/run-bike-peronne-hero.webp";
import nineHundredPeronneHero from "../images/races/900m-peronne-hero.webp";
import nineHundredSainghinHero from "../images/races/900m-sem-hero.webp";

export const SITE = {
  title: "Les Chemins du Mélantois",
  tagline: "Courses nature et conviviales pour tous",
  description:
    "Les Chemins du Mélantois proposent une série de courses accessibles à tous, dans un cadre naturel au cœur du Mélantois. De 900 m à 10 km, venez courir, encourager ou participer à l'organisation dans une ambiance festive et solidaire.",
  description_short:
    "Courses nature au cœur du Mélantois pour petits et grands dans une ambiance conviviale.",
  url: "https://www.lescheminsdumelantois.fr",
  author: "Association Les Chemins du Mélantois",
  base: "", // must match the base path in astro.config.mjs
  contactEmail: "contact@lescheminsdumelantois.fr",
};

export const externalLinks = {
  registration:
    "https://fr.milesrepublic.com/event/les-chemins-du-melantois-2692",
  registrantsList:
    "https://fr.milesrepublic.com/registrants/7b132950-613a-41ab-a1aa-a09332abef18",
  sportsRegulations:
    "https://drive.google.com/file/d/1Vsg-6oMnoK4aV6WU4SKiGCQtKMf9U6YP/view",
  rewardsSummary:
    "https://drive.google.com/file/d/1O0emjGEev_PK5kp0InbYi97MUyXbU3Iy/view",
  pps: "https://pps.athle.fr",
  registrationForm:
    "https://drive.google.com/file/d/1jSWdNn1mdBcu7uIX36LZ2IO5DKhvHaNx/view",
  healthQuestionnaire:
    "https://drive.google.com/file/d/1Do0APrhF2uyEtuNfBvApSosbLSQaqN6h/view",
  parentalConsentForm:
    "https://drive.google.com/file/d/1Dzo98Z8ux2bZa1uR2D8lDSd2tXnNp70B/view",
  edition2025: {
    trace900mPeronne:
      "https://drive.google.com/file/d/1k49m8EhDZEVyvSmPLekSd5AyeuZrK7T-/view",
    trace900mSainghin:
      "https://drive.google.com/file/d/19UOg6khBYYQgmZEIRdQgxvGMq-aE-V8C/view",
    trace10km:
      "https://drive.google.com/file/d/1Qz-piBjGoQ7jHu6FxfO30TLAn8JATZru/view",
    trace5km:
      "https://drive.google.com/file/d/1ziGUKrEfpMk1LaMxYXpmCl48_JZPySYu/view",
    traceRunAndBike:
      "https://drive.google.com/file/d/1N4POCdKh9YlkTZTJHRrQBbUJv2enp1Ar/view",
  },
  edition2024: {
    googlePhotoAlbum: "https://photos.app.goo.gl/3Q6nZiEE1nganQ2G8",
    aSportPage: "http://asport-timing.com/live/chemins-melantois-2024",
  },
  edition2023: {
    googlePhotoAlbum: "https://photos.app.goo.gl/2qFFEmykrpoDL6R9A",
    aSportPage: "http://asport-timing.com/live/chemins-melantois-2023",
  },
  edition2022: {
    proLiveSportPage:
      "https://www.prolivesport.fr/index.php?chap=event&sub=liveV3&eventId=807",
  },
  edition2019: {
    googlePhotoAlbum: "https://photos.app.goo.gl/a4T2keL3KJbHG9yw5",
    googleDriveResultsFile:
      "https://drive.google.com/file/d/17yTd18cnWKm_kuXSySaw0T-OYukFAgBQ/view",
  },
  edition2018: {
    googlePhotoAlbum: "https://photos.app.goo.gl/D7Mzsf99KEkMPkXg9",
    googleDriveResultsFile:
      "https://drive.google.com/file/d/1iQrx-swxy37J-8IabnzNJ7p3BQjAYPBx/view",
  },
  edition2017: {
    googlePhotoAlbum: "https://photos.app.goo.gl/41c8kvRGvkvwvVbAA",
    googleDriveResultsFile:
      "https://drive.google.com/file/d/13V7VPyPgNhWXiqFAfOOt-LXpBvS0cAXv/view",
  },
} as const;

export type ExternalLinkKey = keyof typeof externalLinks;

export const routes = {
  home: `/`,
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
  locale: "fr_FR",
  type: "website",
  url: `${SITE.url}${SITE.base}`,
  title: `${SITE.title} - ${SITE.tagline}`,
  description: SITE.description,
  image: edition2024Hero,
  imageAlt:
    "Une vue en hauteur du départ de la course 2024 des Chemins du Mélantois",
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

// todo: use zod
export type Race = {
  id: string;
  title: string;
  hero: {
    image: ImageMetadata;
    alt: string;
  };
  date: string;
  startTime: string;
  additionalScheduleInformation?: string;
  price?: string;
  pricePerTeam?: boolean;
  description: string;
  traceLink: string;
  meetingPointAddressLines: string[];
  rewardsSummary?: string;
  displayRewardsSummaryLink?: boolean;
  adultRegistrationRequirement?: boolean; // default true (with zod)
};

export const eventDate = "21 septembre 2025";

export const registrationDetailsId = "modalites-d-inscription"; // technical id for anchor link

const egliseSaintNicolasAddressLines: Race["meetingPointAddressLines"] = [
  "Église Saint-Nicolas",
  "334-366 rue du Maréchal Leclerc",
  "59262 Sainghin en Mélantois.",
];

const mairieDePeronneAddressLines: Race["meetingPointAddressLines"] = [
  "Mairie de Péronne-en-Mélantois",
  "10 Rue du Marais",
  "59273 Péronne-en-Mélantois",
];

export const races: Race[] = [
  {
    id: "10-km-sainghin-en-melantois",
    title: "10 km de Sainghin en Mélantois",
    hero: {
      image: tenKilometerHero,
      alt: "Participants au départ du 10km de Sainghin en Mélantois, au centre du village",
    },
    date: eventDate,
    startTime: "10h15",
    additionalScheduleInformation:
      "Un échauffement encadré est proposé à 10h00.",
    price: "11",
    description:
      "Le parcours de 10 km sillonne le Bois de la Noyelle, emprunte le nouveau chemin le long de la Marque ouvert en 2025, longe l’étang de pêche de Sainghin et frôle les Marais de la Marque. Il est re-mesuré tous les 5 ans et a donc fait l’objet d’une nouvelle labellisation en 2025.",
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
    traceLink: externalLinks.edition2025.trace10km,
    adultRegistrationRequirement: true,
    rewardsSummary:
      "Les récompenses vont jusqu'à 100€ pour le vainqueur du 10 km. Veuillez trouvez le détail des prix en suivant le lien ci dessous.",
  },
  {
    id: "run-and-bike-peronne-en-melantois",
    title: "Run & Bike de Péronne en Mélantois",
    hero: {
      image: runAndBikeHero,
      alt: "Participants au départ du Run & Bike de Péronne en Mélantois, au centre du village",
    },
    date: eventDate,
    traceLink: externalLinks.edition2025.traceRunAndBike,
    startTime: "9h15",
    price: "9",
    pricePerTeam: true,
    description:
      "L’édition 2024 confirme le retour de cette épreuve originale, placée sous le signe du partage et de la transmission. Composée d’un binôme intergénérationnel, elle associe un coureur adulte (parent, grand frère ou sœur, cousin, proche…) et un jeune cycliste, qui ouvre la voie et joue le rôle de lièvre. Le jeune à vélo guide et encourage le coureur à pied, tout au long d’un parcours adapté et sécurisé à travers le village. Une belle manière de vivre la course autrement : en duo, en famille, et dans une ambiance joyeuse et bienveillante.",
    meetingPointAddressLines: mairieDePeronneAddressLines,
    adultRegistrationRequirement: true,
  },
  {
    id: "5-km-sainghin-en-mepplantois",
    title: "5 km de Sainghin en Mélantois",
    hero: {
      image: fiveKilometerHero,
      alt: "Participants au départ du 5km de Sainghin en Mélantois, au centre du village",
    },
    date: eventDate,
    traceLink: externalLinks.edition2025.trace5km,
    price: "7",
    startTime: "9h00",
    description:
      "Découvrez les paysages emblématiques du Mélantois en empruntant un itinéraire nature qui vous mène à travers le Bois de la Noyelle et le long des rives paisibles de la Marque. Composé à 70 % de sentiers, ce parcours se rapproche davantage de l’esprit trail que de la course sur route classique.",
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
    adultRegistrationRequirement: true,
    rewardsSummary:
      "Les récompenses vont jusqu'à 40€ pour le vainqueur du 5 km. Veuillez trouvez le détail des prix en suivant le lien ci dessous.",
  },
  {
    id: "900-m-sainghin-en-mélantois",
    title: "900 m de Sainghin en Mélantois",
    hero: {
      image: nineHundredSainghinHero,
      alt: "Participants au départ du 900m de Sainghin en Mélantois, au centre du village",
    },
    date: eventDate,
    traceLink: externalLinks.edition2025.trace900mSainghin,
    startTime: "9h45",
    description:
      "Un parcours court, ludique et sécurisé, idéal pour les enfants et leurs familles souhaitant s’initier à la course à pied dans une ambiance conviviale. À travers les rues du village de Sainghin, cette boucle accessible met l’accent sur le plaisir de courir ensemble, sans pression de performance. C’est l’occasion parfaite de partager un moment sportif intergénérationnel, dans un cadre chaleureux et festif.",
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
    rewardsSummary: "Une médaille est remise à chaque participant.",
    displayRewardsSummaryLink: false,
  },
  {
    id: "900-m-peronne-en-mélantois",
    title: "900 m de Péronne en Mélantois",
    hero: {
      image: nineHundredPeronneHero,
      alt: "Participants au départ du 900m de Péronne en Mélantois, au centre du village",
    },
    date: eventDate,
    startTime: "9h15",
    description:
      "Ce parcours a été spécialement conçu pour les enfants et leurs familles désireux de s’initier à la course à pied dans une ambiance conviviale et accessible. À travers les rues paisibles et le cadre champêtre du village de Péronne, cette course familiale offre une belle occasion de partager un moment sportif, ludique et intergénérationnel, tout en découvrant le plaisir de courir ensemble, quel que soit son niveau.",
    traceLink: externalLinks.edition2025.trace900mPeronne,
    meetingPointAddressLines: mairieDePeronneAddressLines,
    displayRewardsSummaryLink: false,
    rewardsSummary: "Une médaille est remise à chaque participant.",
  },
];
