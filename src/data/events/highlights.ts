import {
  EventHighlightDataSchema,
  type EventHighlightData,
} from "@data/events/schema";
import edition2025Hero from "@images/races/2025-edition-hero.webp";
import edition2024Hero from "@images/races/2024-edition-hero.webp";
import edition2022Hero from "@images/races/2022-edition-hero.webp";
import edition2023Hero from "@images/races/2023-edition-hero.webp";
import edition2019Hero from "@images/races/2019-edition-hero.webp";
import { externalLinks } from "@data/navigation/externalLinks/externalLinks";
import { z } from "zod";
import { t2 } from "@lib/i18n";

const resultsButtonPhrase = t2("resultsPage.results");
const picturesButtonPhrase = t2("resultsPage.photos");

const edition2025Data: EventHighlightData = {
  title: t2("resultsPage.yearlyEdition", { year: 2025 }),
  subline: t2("resultsPage.2025edition.description"),
  featuredImage: {
    image: edition2025Hero,
    alt: t2("resultsPage.2025edition.imageAlt"),
  },
  participantsLines: [
    { participantsCount: 531, raceName: t2("resultsPage.10kmName") },
    { participantsCount: 247, raceName: t2("resultsPage.5kmName") },
    { participantsCount: 179, raceName: t2("resultsPage.900mSainghinName") },
    { participantsCount: 70, raceName: t2("resultsPage.900mPeronneName") },
    { participantsCount: 34, raceName: t2("resultsPage.RunAndBikeName") },
  ],
  resultsLink: {
    label: resultsButtonPhrase,
    url: externalLinks.edition2025Results,
  },
  picturesLinks: [
    {
      label: t2("resultsPage.startPictures"),
      url: externalLinks.edition2025StartPhotos,
    },
    {
      label: t2("resultsPage.10kPictures"),
      url: externalLinks.edition202510kPhotos,
    },
    {
      label: t2("resultsPage.5kPictures"),
      url: externalLinks.edition20255kPhotos,
    },
    {
      label: t2("resultsPage.900mSainghinPictures"),
      url: externalLinks.edition2025900mSainghinPhotos,
    },
    {
      label: t2("resultsPage.PeronnePictures"),
      url: externalLinks.edition2025PeronnePhotos,
    },
  ],
};

const edition2024Data: EventHighlightData = {
  title: t2("resultsPage.yearlyEdition", { year: 2024 }),
  subline: t2("resultsPage.2024edition.description"),
  featuredImage: {
    image: edition2024Hero,
    alt: t2("resultsPage.2024edition.imageAlt"),
  },
  participantsLines: [
    { participantsCount: 349, raceName: t2("resultsPage.10kmName") },
    { participantsCount: 162, raceName: t2("resultsPage.5kmName") },
    { participantsCount: 35, raceName: t2("resultsPage.RunAndBikeName") },
    { participantsCount: 190, raceName: t2("resultsPage.900mSainghinName") },
    { participantsCount: 54, raceName: t2("resultsPage.900mPeronneName") },
  ],
  resultsLink: {
    label: resultsButtonPhrase,
    url: externalLinks.edition2024TimingLive,
  },
  picturesLinks: [
    {
      label: picturesButtonPhrase,
      url: externalLinks.edition2024Album,
    },
  ],
};

const edition2023Data: EventHighlightData = {
  title: t2("resultsPage.yearlyEdition", { year: 2023 }),
  subline: t2("resultsPage.2023edition.description"),
  featuredImage: {
    image: edition2023Hero,
    alt: t2("resultsPage.2023edition.imageAlt"),
  },
  participantsLines: [
    { participantsCount: 261, raceName: t2("resultsPage.10kmName") },
    { participantsCount: 105, raceName: t2("resultsPage.5kmName") },
    { participantsCount: 14, raceName: t2("resultsPage.RunAndBikeName") },
    { participantsCount: 201, raceName: t2("resultsPage.900mSainghinName") },
    { participantsCount: 72, raceName: t2("resultsPage.900mPeronneName") },
  ],
  resultsLink: {
    label: resultsButtonPhrase,
    url: externalLinks.edition2023TimingLive,
  },
  picturesLinks: [
    {
      label: picturesButtonPhrase,
      url: externalLinks.edition2023Album,
    },
  ],
};

const edition2022Data: EventHighlightData = {
  title: t2("resultsPage.yearlyEdition", { year: 2022 }),
  subline: t2("resultsPage.2022edition.description"),
  featuredImage: {
    image: edition2022Hero,
    alt: t2("resultsPage.2022edition.imageAlt"),
  },
  participantsLines: [
    { participantsCount: 311, raceName: t2("resultsPage.10kmName") },
    { participantsCount: 78, raceName: t2("resultsPage.5kmName") },
    { participantsCount: 14, raceName: t2("resultsPage.1dot5kmName") },
    { participantsCount: 201, raceName: t2("resultsPage.900mSainghinName") },
    { participantsCount: 73, raceName: t2("resultsPage.900mPeronneName") },
  ],
  resultsLink: {
    label: resultsButtonPhrase,
    url: externalLinks.edition2022Live,
  },
};

const edition2019Data: EventHighlightData = {
  title: t2("resultsPage.yearlyEdition", { year: 2019 }),
  subline: t2("resultsPage.2019edition.description"),
  featuredImage: {
    image: edition2019Hero,
    alt: t2("resultsPage.2019edition.imageAlt"),
  },
  participantsLines: [
    { participantsCount: 418, raceName: t2("resultsPage.10kmName") },
    { participantsCount: 82, raceName: t2("resultsPage.5kmName") },
    { participantsCount: 16, raceName: t2("resultsPage.1dot5kmName") },
    { participantsCount: 125, raceName: t2("resultsPage.900mSainghinName") },
    { participantsCount: 20, raceName: t2("resultsPage.900mPeronneName") },
  ],
  resultsLink: {
    label: resultsButtonPhrase,
    url: externalLinks.edition2019Results,
  },
  picturesLinks: [
    {
      label: picturesButtonPhrase,
      url: externalLinks.edition2019Album,
    },
  ],
};

export const eventsHighlightsData = [
  edition2025Data,
  edition2024Data,
  edition2023Data,
  edition2022Data,
  edition2019Data,
];

z.array(EventHighlightDataSchema).min(1).parse(eventsHighlightsData);
