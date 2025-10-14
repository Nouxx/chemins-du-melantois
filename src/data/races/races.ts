import tenKilometerHero from "../../images/races/10km-sem-hero.webp";
import fiveKilometerHero from "../../images/races/5km-sem-hero.webp";
import runAndBikeHero from "../../images/races/run-bike-peronne-hero.webp";
import nineHundredPeronneHero from "../../images/races/900m-peronne-hero.webp";
import nineHundredSainghinHero from "../../images/races/900m-sem-hero.webp";
import { externalLinks } from "@data/navigation/externalLinks/externalLinks";
import type { Link } from "@data/types";
import {
  registrationDetailsSectionBaseData,
  routeSectionBaseData,
  scheduleSectionBaseData,
  rewardsSectionBaseData,
  bibSectionBaseData,
  adultRegistrationSectionBaseData,
  noRegistrationForAdultSectionData,
  registrationSectionBaseData,
  raceRegulationSectionBaseData,
} from "@data/races/sections";
import { racePageDataSchema, type RacePageData } from "@data/races/schema";
import { z } from "zod";
import { t } from "@lib/i18n";

const getImageAltText = (raceName: string) =>
  t("racePage.raceImageAlt", { raceName });

export const eventDate = t("racePage.eventDate");

const egliseSaintNicolasAddressLines: RacePageData["scheduleSection"]["meetingPointAddressLines"] =
  [
    "Église Saint-Nicolas",
    "334-366 rue du Maréchal Leclerc",
    "59262 Sainghin en Mélantois.",
  ];

const mairieDePeronneAddressLines: RacePageData["scheduleSection"]["meetingPointAddressLines"] =
  [
    "Mairie de Péronne-en-Mélantois",
    "10 Rue du Marais",
    "59273 Péronne-en-Mélantois",
  ];

const getTraceLink = (url: string): Link => ({
  label: t("racePage.linkToPdfTrace"),
  url,
});

const rewardsSummaryLink = {
  label: t("racePage.linkToRewardsSummary"),
  url: externalLinks.rewardsSummary,
};

const rewardForEveryonePhrase = t("racePage.rewardsForEveryone");

const tenKilometerRacePageData: RacePageData = {
  urlSlug: "10-km-sainghin-en-melantois",
  featuredImage: {
    image: tenKilometerHero,
    alt: getImageAltText(t("racePage.10km.title")),
  },
  pageTitle: t("racePage.10km.title"),
  date: eventDate,
  price: t("racePage.pricePerParticipant", { price: 11 }),
  routeSection: {
    ...routeSectionBaseData,
    description: t("racePage.10km.description"),
    tracePDFLink: getTraceLink(externalLinks.edition2025Trace10km),
  },
  scheduleSection: {
    ...scheduleSectionBaseData,
    body: t("racePage.scheduleLine", {
      startTime: "10h15",
      eventDate: eventDate,
    }),
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
    additionalScheduleInformation: t("racePage.10km.additionalInfo"),
  },
  rewardsSection: {
    ...rewardsSectionBaseData,
    description:
      "Les récompenses vont jusqu'à 100€ pour le vainqueur du 10 km. Veuillez trouvez le détail des prix en suivant le lien ci dessous.",
    rewardsLink: rewardsSummaryLink,
  },
  registrationSection: registrationSectionBaseData,
  bibSection: bibSectionBaseData,
  registrationDetailsSection: {
    ...registrationDetailsSectionBaseData,
    forAdults: adultRegistrationSectionBaseData,
  },
  regulationSection: raceRegulationSectionBaseData,
};

const runAndBikeRacePageData: RacePageData = {
  urlSlug: "run-and-bike-peronne-en-melantois",
  featuredImage: {
    image: runAndBikeHero,
    alt: getImageAltText("Run and Bike de Péronne en Mélantois"),
  },
  pageTitle: "Run & Bike de Péronne en Mélantois",
  date: eventDate,
  price: "9€ par équipe",
  routeSection: {
    ...routeSectionBaseData,
    description:
      "L'édition 2024 confirme le retour de cette épreuve originale, placée sous le signe du partage et de la transmission. Composée d'un binôme intergénérationnel, elle associe un coureur adulte (parent, grand frère ou sœur, cousin, proche…) et un jeune cycliste, qui ouvre la voie et joue le rôle de lièvre. Le jeune à vélo guide et encourage le coureur à pied, tout au long d'un parcours adapté et sécurisé à travers le village. Une belle manière de vivre la course autrement : en duo, en famille, et dans une ambiance joyeuse et bienveillante.",
    tracePDFLink: getTraceLink(externalLinks.edition2025RunAndBike),
  },
  scheduleSection: {
    ...scheduleSectionBaseData,
    body: t("racePage.scheduleLine", {
      startTime: "10h15",
      eventDate: eventDate,
    }),
    meetingPointAddressLines: mairieDePeronneAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionBaseData,
    description: rewardForEveryonePhrase,
  },
  registrationSection: registrationSectionBaseData,
  bibSection: bibSectionBaseData,
  registrationDetailsSection: {
    ...registrationDetailsSectionBaseData,
    forAdults: noRegistrationForAdultSectionData,
  },
  regulationSection: raceRegulationSectionBaseData,
};

const fiveKilometerRacePageData: RacePageData = {
  urlSlug: "5-km-sainghin-en-melantois",
  featuredImage: {
    image: fiveKilometerHero,
    alt: getImageAltText("5 km de Sainghin en Mélantois"),
  },
  pageTitle: "5 km de Sainghin en Mélantois",
  date: eventDate,
  price: "7€ par participant",
  routeSection: {
    ...routeSectionBaseData,
    description:
      "Découvrez les paysages emblématiques du Mélantois en empruntant un itinéraire nature qui vous mène à travers le Bois de la Noyelle et le long des rives paisibles de la Marque. Composé à 70 % de sentiers, ce parcours se rapproche davantage de l'esprit trail que de la course sur route classique.",
    tracePDFLink: getTraceLink(externalLinks.edition2025Trace5km),
  },
  scheduleSection: {
    ...scheduleSectionBaseData,
    body: t("racePage.scheduleLine", {
      startTime: "10h15",
      eventDate: eventDate,
    }),
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionBaseData,
    description:
      "Les récompenses vont jusqu'à 40€ pour le vainqueur du 5 km. Veuillez trouvez le détail des prix en suivant le lien ci dessous.",
    rewardsLink: rewardsSummaryLink,
  },
  registrationSection: registrationSectionBaseData,
  bibSection: bibSectionBaseData,
  registrationDetailsSection: {
    ...registrationDetailsSectionBaseData,
    forAdults: adultRegistrationSectionBaseData,
  },
  regulationSection: raceRegulationSectionBaseData,
};

const nineHundredSainghinRacePageData: RacePageData = {
  urlSlug: "900-m-sainghin-en-melantois",
  featuredImage: {
    image: nineHundredSainghinHero,
    alt: getImageAltText("900 m de Sainghin en Mélantois"),
  },
  pageTitle: "900 m de Sainghin en Mélantois",
  date: eventDate,
  price: "Gratuit",
  routeSection: {
    ...routeSectionBaseData,
    description:
      "Un parcours court, ludique et sécurisé, idéal pour les enfants et leurs familles souhaitant s’initier à la course à pied dans une ambiance conviviale. À travers les rues du village de Sainghin, cette boucle accessible met l’accent sur le plaisir de courir ensemble, sans pression de performance. C’est l’occasion parfaite de partager un moment sportif intergénérationnel, dans un cadre chaleureux et festif.",
    tracePDFLink: getTraceLink(externalLinks.edition2025Trace900mSainghin),
  },
  scheduleSection: {
    ...scheduleSectionBaseData,
    body: t("racePage.scheduleLine", {
      startTime: "10h15",
      eventDate: eventDate,
    }),
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionBaseData,
    description: rewardForEveryonePhrase,
  },
  registrationSection: registrationSectionBaseData,
  bibSection: bibSectionBaseData,
  registrationDetailsSection: {
    ...registrationDetailsSectionBaseData,
    forAdults: noRegistrationForAdultSectionData,
  },
  regulationSection: raceRegulationSectionBaseData,
};

const nineHundredPeronneRacePageData: RacePageData = {
  urlSlug: "900-m-peronne-en-melantois",
  featuredImage: {
    image: nineHundredPeronneHero,
    alt: getImageAltText("900 m de Péronne en Mélantois"),
  },
  pageTitle: "900 m de Péronne en Mélantoi",
  date: eventDate,
  price: "Gratuit",
  routeSection: {
    ...routeSectionBaseData,
    description:
      "Ce parcours a été spécialement conçu pour les enfants et leurs familles désireux de s'initier à la course à pied dans une ambiance conviviale et accessible. À travers les rues paisibles et le cadre champêtre du village de Péronne, cette course familiale offre une belle occasion de partager un moment sportif, ludique et intergénérationnel, tout en découvrant le plaisir de courir ensemble, quel que soit son niveau.",
    tracePDFLink: getTraceLink(externalLinks.edition2025Trace900mPeronne),
  },
  scheduleSection: {
    ...scheduleSectionBaseData,
    body: t("racePage.scheduleLine", {
      startTime: "10h15",
      eventDate: eventDate,
    }),
    meetingPointAddressLines: mairieDePeronneAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionBaseData,
    description: rewardForEveryonePhrase,
  },
  registrationSection: registrationSectionBaseData,
  bibSection: bibSectionBaseData,
  registrationDetailsSection: {
    ...registrationDetailsSectionBaseData,
    forAdults: noRegistrationForAdultSectionData,
  },
  regulationSection: raceRegulationSectionBaseData,
};

export const racesPageData: RacePageData[] = [
  tenKilometerRacePageData,
  runAndBikeRacePageData,
  fiveKilometerRacePageData,
  nineHundredSainghinRacePageData,
  nineHundredPeronneRacePageData,
];

z.array(racePageDataSchema).parse(racesPageData);
