import tenKilometerHero from "../../images/races/10km-sem-hero.webp";
import fiveKilometerHero from "../../images/races/5km-sem-hero.webp";
import runAndBikeHero from "../../images/races/run-bike-peronne-hero.webp";
import nineHundredPeronneHero from "../../images/races/900m-peronne-hero.webp";
import nineHundredSainghinHero from "../../images/races/900m-sem-hero.webp";
import { externalLinks } from "@/data_files/constants";
import type { RaceLink, RacePageData } from "@/data_files/races/schema";

const getMapAltText = (raceName: string) =>
  `Tracé du parcours du ${raceName} des Chemins du Mélantois, édition 2025`;

export const eventDate = "21 septembre 2025";

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

const getTraceLink = (url: string): RaceLink => ({
  label: "Lien vers le tracé (PDF)",
  url,
});

const traceMapsLink: RaceLink = {
  label: "Lien vers les tracés interactifs (Maps)",
  url: externalLinks.edition2025.traceMaps,
};

const bibSectionData: RacePageData["bibSection"] = {
  title: "Retrait des dossards",
  anchorId: "retrait-des-dossards",
  description:
    "Les dossards sont à retirer en mairie de Sainghin, aux horaires suivants :",
  pickupScheduleLines: [
    "Samedi 20 septembre : de 14h00 à 17h00",
    "Dimanche 21 septembre : de 7h30 à 9h45",
  ],
};

const routeSectionSharedData = {
  title: "Parcours",
  anchorId: "parcours",
  traceMapsLink: traceMapsLink,
};

const scheduleSectionSharedData = {
  title: "Départ et horaires",
  anchorId: "depart-et-horaires",
};

const rewardsSummaryLink = {
  label: "Lien vers le tableau des récompenses",
  url: externalLinks.rewardsSummary,
};

const rewardsSectionSharedData = {
  title: "Récompenses",
  anchorId: "recompenses",
};

const getScheduleSectionDescription = (time: string) =>
  `La course a lieu le ${eventDate} et le départ sera lancé à ${time}.`;

const registrationDetailsSectionSharedData = {
  title: "Modalités d'inscription",
  anchorId: "modalites-d-inscription",
  forChildren: {
    title: "Pour les mineurs",
    description:
      "Les participants de moins de 18 ans doivent impérativement fournir les 2 documents suivants :",
    requiredDocumentsLines: [
      "Une autorisation parentale signée",
      `Un questionnaire de santé <span class="font-bold">ou</span> un certificat médical de moins de 6 mois`,
    ],
    healthQuestionnaireLink: {
      label: "Lien vers l'autorisation parentale ",
      url: externalLinks.healthQuestionnaire,
    },
    parentalConstentLink: {
      label: "Lien vers le questionnaire de santé",
      url: externalLinks.parentalConsentForm,
    },
  },
};

const adultRegistrationDetailsSectionData: RacePageData["registrationDetailsSection"]["forAdults"] =
  {
    title: "Pour les majeurs",
    description:
      "Pour valider votre inscription, vous devez fournir l'un des deux documents suivants :",
    requiredDocumentsLines: [
      "Une Licence conforme et en cours de validité",
      "Un PPS (Parcours Prévention Santé), déclaration remplaçant le certificat médical pour les non licenciés",
    ],
    ppsLink: {
      label: "En savoir plus sur le PPS",
      url: externalLinks.pps,
    },
  };

const noRegistrationForAdultData: RacePageData["registrationDetailsSection"]["forAdults"] =
  {
    title: "Pour les majeurs",
    description:
      "Hormis le bulletin d'inscription si vous souhaitez vous inscrire sur place, aucun document n'est requis.",
  };

// todo: rename anchor id
export const registrationDetailsId =
  registrationDetailsSectionSharedData.anchorId;

const registrationSectionData = {
  title: "Inscription",
  anchorId: "inscription",
  onlineRegistration: {
    title: "En ligne",
    description:
      "Les inscriptions en ligne sont ouvertes jusqu'au samedi 20 septembre à 12h00 via notre plateforme partenaire <span class=\"font-bold italic\">Miles Republic</span>. Le paiement s'effectue également sur cette plateforme.",
    link: {
      label: "Lien vers l'inscription en ligne",
      url: externalLinks.registration,
    },
  },
  onSiteRegistration: {
    title: "Sur place",
    description: `Vous pouvez également vous inscrire à la Maison des Associations de
      Sainghin en Mélantois le samedi 20 septembre, de 14h00 à 17h00. Veillez à
      venir muni de votre bulletin d'inscription rempli ainsi que tous les
      documents requis pour finaliser votre inscription (voir les
      <a class="link__text font-bold" href={#${registrationDetailsId}}>
        Modalités d'inscriptions
      </a>
      plus bas).`,
    registrationFormLink: {
      label: "Lien vers le bulletin d'inscription",
      url: externalLinks.registrationForm,
    },
  },
};

const raceRegulationData = {
  title: "Règlement de course",
  anchorId: "reglement-de-course",
  description:
    "Avant de participer, merci de consulter le règlement officiel de la course, qui précise l'ensemble des modalités de participation, consignes de sécurité, et règles sportives.",
  link: {
    label: "Lien vers le réglement de course",
    url: externalLinks.sportsRegulations,
  },
};

const rewardForEveryonePhrase = "Une médaille est remise à chaque participant.";

const tenKilometerRacePageData: RacePageData = {
  urlSlug: "10-km-sainghin-en-melantois",
  featuredImage: {
    image: tenKilometerHero,
    alt: getMapAltText("10 km de Sainghin en Mélantois"),
  },
  pageTitle: "10 km de Sainghin en Mélantois",
  date: eventDate,
  price: "11€ par participant",
  routeSection: {
    ...routeSectionSharedData,
    description:
      "Le parcours de 10 km sillonne le Bois de la Noyelle, emprunte le nouveau chemin le long de la Marque ouvert en 2025, longe l'étang de pêche de Sainghin et frôle les Marais de la Marque. Il est re-mesuré tous les 5 ans et a donc fait l'objet d'une nouvelle labellisation en 2025.",
    tracePDFLink: getTraceLink(externalLinks.edition2025.trace10km),
  },
  scheduleSection: {
    ...scheduleSectionSharedData,
    eventDate: eventDate,
    startTime: "10h15",
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
    additionalScheduleInformation:
      "Un échauffement encadré est proposé à 10h00.",
  },
  rewardsSection: {
    ...rewardsSectionSharedData,
    description:
      "Les récompenses vont jusqu'à 100€ pour le vainqueur du 10 km. Veuillez trouvez le détail des prix en suivant le lien ci dessous.",
    rewardsLink: rewardsSummaryLink,
  },
  registrationSection: registrationSectionData,
  bibSection: bibSectionData,
  registrationDetailsSection: {
    ...registrationDetailsSectionSharedData,
    forAdults: adultRegistrationDetailsSectionData,
  },
  regulationSection: raceRegulationData,
};

const runAndBikeRacePageData: RacePageData = {
  urlSlug: "run-and-bike-peronne-en-melantois",
  featuredImage: {
    image: runAndBikeHero,
    alt: getMapAltText("Run and Bike de Péronne en Mélantois"),
  },
  pageTitle: "Run & Bike de Péronne en Mélantois",
  date: eventDate,
  price: "9€ par équipe",
  routeSection: {
    ...routeSectionSharedData,
    description:
      "L'édition 2024 confirme le retour de cette épreuve originale, placée sous le signe du partage et de la transmission. Composée d'un binôme intergénérationnel, elle associe un coureur adulte (parent, grand frère ou sœur, cousin, proche…) et un jeune cycliste, qui ouvre la voie et joue le rôle de lièvre. Le jeune à vélo guide et encourage le coureur à pied, tout au long d'un parcours adapté et sécurisé à travers le village. Une belle manière de vivre la course autrement : en duo, en famille, et dans une ambiance joyeuse et bienveillante.",
    tracePDFLink: getTraceLink(externalLinks.edition2025.traceRunAndBike),
  },
  scheduleSection: {
    ...scheduleSectionSharedData,
    eventDate: eventDate,
    startTime: "9h45",
    meetingPointAddressLines: mairieDePeronneAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionSharedData,
    description: rewardForEveryonePhrase,
  },
  registrationSection: registrationSectionData,
  bibSection: bibSectionData,
  registrationDetailsSection: {
    ...registrationDetailsSectionSharedData,
    forAdults: noRegistrationForAdultData,
  },
  regulationSection: raceRegulationData,
};

const fiveKilometerRacePageData: RacePageData = {
  urlSlug: "5-km-sainghin-en-melantois",
  featuredImage: {
    image: fiveKilometerHero,
    alt: getMapAltText("5 km de Sainghin en Mélantois"),
  },
  pageTitle: "5 km de Sainghin en Mélantois",
  date: eventDate,
  price: "7€ par participant",
  routeSection: {
    ...routeSectionSharedData,
    description:
      "Découvrez les paysages emblématiques du Mélantois en empruntant un itinéraire nature qui vous mène à travers le Bois de la Noyelle et le long des rives paisibles de la Marque. Composé à 70 % de sentiers, ce parcours se rapproche davantage de l'esprit trail que de la course sur route classique.",
    tracePDFLink: getTraceLink(externalLinks.edition2025.trace5km),
  },
  scheduleSection: {
    ...scheduleSectionSharedData,
    eventDate: eventDate,
    startTime: "9h00",
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionSharedData,
    description:
      "Les récompenses vont jusqu'à 40€ pour le vainqueur du 5 km. Veuillez trouvez le détail des prix en suivant le lien ci dessous.",
    rewardsLink: rewardsSummaryLink,
  },
  registrationSection: registrationSectionData,
  bibSection: bibSectionData,
  registrationDetailsSection: {
    ...registrationDetailsSectionSharedData,
    forAdults: adultRegistrationDetailsSectionData,
  },
  regulationSection: raceRegulationData,
};

const nineHundredSainghinRacePageData: RacePageData = {
  urlSlug: "900-m-sainghin-en-melantois",
  featuredImage: {
    image: nineHundredSainghinHero,
    alt: getMapAltText("900 m de Sainghin en Mélantois"),
  },
  pageTitle: "900 m de Sainghin en Mélantois",
  date: eventDate,
  price: "Gratuit",
  routeSection: {
    ...routeSectionSharedData,
    description:
      "Un parcours court, ludique et sécurisé, idéal pour les enfants et leurs familles souhaitant s’initier à la course à pied dans une ambiance conviviale. À travers les rues du village de Sainghin, cette boucle accessible met l’accent sur le plaisir de courir ensemble, sans pression de performance. C’est l’occasion parfaite de partager un moment sportif intergénérationnel, dans un cadre chaleureux et festif.",
    tracePDFLink: getTraceLink(externalLinks.edition2025.trace900mSainghin),
  },
  scheduleSection: {
    ...scheduleSectionSharedData,
    eventDate: eventDate,
    startTime: "9h45",
    meetingPointAddressLines: egliseSaintNicolasAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionSharedData,
    description: rewardForEveryonePhrase,
  },
  registrationSection: registrationSectionData,
  bibSection: bibSectionData,
  registrationDetailsSection: {
    ...registrationDetailsSectionSharedData,
    forAdults: noRegistrationForAdultData,
  },
  regulationSection: raceRegulationData,
};

const nineHundredPeronneRacePageData: RacePageData = {
  urlSlug: "900-m-peronne-en-melantois",
  featuredImage: {
    image: nineHundredPeronneHero,
    alt: getMapAltText("900 m de Péronne en Mélantois"),
  },
  pageTitle: "900 m de Péronne en Mélantoi",
  date: eventDate,
  price: "Gratuit",
  routeSection: {
    ...routeSectionSharedData,
    description:
      "Ce parcours a été spécialement conçu pour les enfants et leurs familles désireux de s'initier à la course à pied dans une ambiance conviviale et accessible. À travers les rues paisibles et le cadre champêtre du village de Péronne, cette course familiale offre une belle occasion de partager un moment sportif, ludique et intergénérationnel, tout en découvrant le plaisir de courir ensemble, quel que soit son niveau.",
    tracePDFLink: getTraceLink(externalLinks.edition2025.trace900mPeronne),
  },
  scheduleSection: {
    ...scheduleSectionSharedData,
    eventDate: eventDate,
    startTime: "9h15",
    meetingPointAddressLines: mairieDePeronneAddressLines,
  },
  rewardsSection: {
    ...rewardsSectionSharedData,
    description: rewardForEveryonePhrase,
  },
  registrationSection: registrationSectionData,
  bibSection: bibSectionData,
  registrationDetailsSection: {
    ...registrationDetailsSectionSharedData,
    forAdults: noRegistrationForAdultData,
  },
  regulationSection: raceRegulationData,
};

export const racesPageData: RacePageData[] = [
  tenKilometerRacePageData,
  runAndBikeRacePageData,
  fiveKilometerRacePageData,
  nineHundredSainghinRacePageData,
  nineHundredPeronneRacePageData,
];
