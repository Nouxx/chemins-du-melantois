import { externalLinks } from "@/data_files/constants";
import type { RacePageData } from "@/data_files/races/schema";

export const routeSectionBaseData = {
  title: "Parcours",
  anchorId: "parcours",
  traceMapsLink: {
    label: "Lien vers les tracés interactifs (Maps)",
    url: externalLinks.edition2025.traceMaps,
  },
};

export const scheduleSectionBaseData = {
  title: "Départ et horaires",
  anchorId: "depart-et-horaires",
};

export const rewardsSectionBaseData = {
  title: "Récompenses",
  anchorId: "recompenses",
};

const milesRepublicPhrase = "Miles Republic";

export const registrationSectionBaseData = {
  title: "Inscription",
  anchorId: "inscription",
  onlineRegistration: {
    title: "En ligne",
    partner: milesRepublicPhrase,
    link: {
      label: "Lien vers l'inscription en ligne",
      url: externalLinks.registration,
    },
  },
  onSiteRegistration: {
    title: "Sur place",
    registrationFormLink: {
      label: "Lien vers le bulletin d'inscription",
      url: externalLinks.registrationForm,
    },
  },
};

export const raceRegulationSectionBaseData = {
  title: "Règlement de course",
  anchorId: "reglement-de-course",
  description:
    "Avant de participer, merci de consulter le règlement officiel de la course, qui précise l'ensemble des modalités de participation, consignes de sécurité, et règles sportives.",
  link: {
    label: "Lien vers le réglement de course",
    url: externalLinks.sportsRegulations,
  },
};

export const adultRegistrationSectionBaseData: RacePageData["registrationDetailsSection"]["forAdults"] =
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

export const noRegistrationForAdultSectionData: RacePageData["registrationDetailsSection"]["forAdults"] =
  {
    title: "Pour les majeurs",
    description:
      "Hormis le bulletin d'inscription si vous souhaitez vous inscrire sur place, aucun document n'est requis.",
  };

export const bibSectionBaseData: RacePageData["bibSection"] = {
  title: "Retrait des dossards",
  anchorId: "retrait-des-dossards",
  description:
    "Les dossards sont à retirer en mairie de Sainghin, aux horaires suivants :",
  pickupScheduleLines: [
    "Samedi 20 septembre : de 14h00 à 17h00",
    "Dimanche 21 septembre : de 7h30 à 9h45",
  ],
};

export const registrationDetailsSectionBaseData = {
  title: "Modalités d'inscription",
  anchorId: "modalites-d-inscription",
  forChildren: {
    title: "Pour les mineurs",
    description:
      "Les participants de moins de 18 ans doivent impérativement fournir les 2 documents suivants :",
    requiredDocumentsLines: [
      "Une autorisation parentale signée",
      `Un questionnaire de santé ou un certificat médical de moins de 6 mois`,
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

export const registrationDetailsSectionAnchor =
  registrationDetailsSectionBaseData.anchorId;
