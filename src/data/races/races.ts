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
    description: t("racePage.10km.rewards"),
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
    alt: getImageAltText(t("racePage.runAndBike.title")),
  },
  pageTitle: t("racePage.runAndBike.title"),
  date: eventDate,
  price: t("racePage.pricePerTeam", { price: 9 }),
  routeSection: {
    ...routeSectionBaseData,
    description: t("racePage.runAndBike.description"),
    tracePDFLink: getTraceLink(externalLinks.edition2025RunAndBike),
  },
  scheduleSection: {
    ...scheduleSectionBaseData,
    body: t("racePage.scheduleLine", {
      startTime: "9h45",
      eventDate: eventDate,
    }),
    meetingPointAddressLines: mairieDePeronneAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionBaseData,
    description: t("racePage.rewardsForEveryone"),
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
    alt: getImageAltText(t("racePage.5km.title")),
  },
  pageTitle: t("racePage.5km.title"),
  date: eventDate,
  price: t("racePage.pricePerParticipant", { price: 7 }),
  routeSection: {
    ...routeSectionBaseData,
    description: t("racePage.5km.description"),
    tracePDFLink: getTraceLink(externalLinks.edition2025Trace5km),
  },
  scheduleSection: {
    ...scheduleSectionBaseData,
    body: t("racePage.scheduleLine", {
      startTime: "9h00",
      eventDate: eventDate,
    }),
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionBaseData,
    description: t("racePage.5km.rewards"),
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
    alt: getImageAltText(t("racePage.900mSainghin.title")),
  },
  pageTitle: t("racePage.900mSainghin.title"),
  date: eventDate,
  price: t("racePage.free"),
  routeSection: {
    ...routeSectionBaseData,
    description: t("racePage.900mSainghin.description"),
    tracePDFLink: getTraceLink(externalLinks.edition2025Trace900mSainghin),
  },
  scheduleSection: {
    ...scheduleSectionBaseData,
    body: t("racePage.scheduleLine", {
      startTime: "9h45",
      eventDate: eventDate,
    }),
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionBaseData,
    description: t("racePage.rewardsForEveryone"),
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
    alt: getImageAltText(t("racePage.900mPeronne.title")),
  },
  pageTitle: t("racePage.900mPeronne.title"),
  date: eventDate,
  price: t("racePage.free"),
  routeSection: {
    ...routeSectionBaseData,
    description: t("racePage.900mPeronne.description"),
    tracePDFLink: getTraceLink(externalLinks.edition2025Trace900mPeronne),
  },
  scheduleSection: {
    ...scheduleSectionBaseData,
    body: t("racePage.scheduleLine", {
      startTime: "9h15",
      eventDate: eventDate,
    }),
    meetingPointAddressLines: mairieDePeronneAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionBaseData,
    description: t("racePage.rewardsForEveryone"),
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
