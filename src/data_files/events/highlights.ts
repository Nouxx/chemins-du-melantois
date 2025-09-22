import {
  EventHighlightDataSchema,
  EventsHighlightDataSchema,
  type EventHighlightData,
} from "@/data_files/events/schema";
import edition2024Hero from "@images/races/2024-edition-hero.webp";
import edition2022Hero from "@images/races/2022-edition-hero.webp";
import edition2023Hero from "@images/races/2023-edition-hero.webp";
import edition2019Hero from "@images/races/2019-edition-hero.webp";
import { externalLinks } from "@/data_files/navigation/externalLinks/externalLinks";

const resultsButtonPhrase = "Résultats";
const picturesButtonPhrase = "Photos";

const edition2024Data: EventHighlightData = {
  title: "Édition 2024",
  subline:
    "L'édition 2024 des chemins du Mélantois a eu lieu le 24 septembre 2024 et a rassemblé 790 participants, soit le plus grand nombre d'inscrits depuis 8 ans !",
  featuredImage: {
    image: edition2024Hero,
    alt: "Départ de la course 2024 à Sainghin-en-Mélantois : des centaines de coureurs réunis sous l'arche jaune dans une ambiance festive et conviviale.",
  },
  participantsLines: [
    { participantsCount: 349, raceName: "10 km" },
    { participantsCount: 162, raceName: "5 km" },
    { participantsCount: 35, raceName: "Run & Bike" },
    { participantsCount: 190, raceName: "900 m de Sainghin" },
    { participantsCount: 54, raceName: "900 m de Péronne" },
  ],
  resultsLink: {
    label: resultsButtonPhrase,
    url: externalLinks.edition2024TimingLive,
  },
  picturesLinks: {
    label: picturesButtonPhrase,
    url: externalLinks.edition2024Album,
  },
};

const edition2023Data: EventHighlightData = {
  title: "Édition 2023",
  subline:
    "L'édition 2023 des chemins du Mélantois s'est tenue le 17 septembre 2023 et a regroupé un total de 653 participants.",
  featuredImage: {
    image: edition2023Hero,
    alt: "Participants des Chemins du Mélantois 2024 posant fièrement devant l'église de Sainghin-en-Mélantois avant le départ de la course.",
  },
  participantsLines: [
    { participantsCount: 261, raceName: "10 km" },
    { participantsCount: 105, raceName: "5 km" },
    { participantsCount: 14, raceName: "Run & Bike" },
    { participantsCount: 201, raceName: "900 m de Sainghin" },
    { participantsCount: 72, raceName: "900 m de Péronne" },
  ],
  resultsLink: {
    label: resultsButtonPhrase,
    url: externalLinks.edition2023TimingLive,
  },
  picturesLinks: {
    label: picturesButtonPhrase,
    url: externalLinks.edition2023Album,
  },
};

const edition2022Data: EventHighlightData = {
  title: "Édition 2022",
  subline:
    "L'édition 2022 des chemins du Mélantois a eu lieu le 18 septembre 2022 et a regroupé un total de 677 participants.",
  featuredImage: {
    image: edition2022Hero,
    alt: "Un coureur souriant portant un enfant dans ses bras après sa course lors des Chemins du Mélantois, entouré de spectateurs.",
  },
  participantsLines: [
    { participantsCount: 311, raceName: "10 km" },
    { participantsCount: 78, raceName: "5 km" },
    { participantsCount: 14, raceName: "1,5 km" },
    { participantsCount: 201, raceName: "900 m de Sainghin" },
    { participantsCount: 73, raceName: "900 m de Péronne" },
  ],
  resultsLink: {
    label: resultsButtonPhrase,
    url: externalLinks.edition2022Live,
  },
};

const edition2019Data: EventHighlightData = {
  title: "Édition 2019",
  subline:
    "L'édition 2019 des chemins du Mélantois a eu lieu le 15 septembre 2019 et a regroupé un total de 661 participants.",
  featuredImage: {
    image: edition2019Hero,
    alt: "Des enfants attendant le départ de la course des Chemins du Mélantois sur la ligne de départ.",
  },
  participantsLines: [
    { participantsCount: 418, raceName: "10 km" },
    { participantsCount: 82, raceName: "5 km" },
    { participantsCount: 16, raceName: "1,5 km" },
    { participantsCount: 125, raceName: "900 m de Sainghin" },
    { participantsCount: 20, raceName: "900 m de Péronne" },
  ],
  resultsLink: {
    label: resultsButtonPhrase,
    url: externalLinks.edition2019Results,
  },
  picturesLinks: {
    label: picturesButtonPhrase,
    url: externalLinks.edition2019Album,
  },
};

export const eventsHighlights: EventHighlightData[] =
  EventsHighlightDataSchema.parse([
    EventHighlightDataSchema.parse(edition2024Data),
    EventHighlightDataSchema.parse(edition2023Data),
    EventHighlightDataSchema.parse(edition2022Data),
    EventHighlightDataSchema.parse(edition2019Data),
  ]);
