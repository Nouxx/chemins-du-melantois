import { externalLinks } from "@data/navigation/externalLinks/externalLinks";
import type { RacePageData } from "@data/races/schema";
import { t } from "@lib/i18n";

export const routeSectionBaseData = {
  title: t("racePage.routeSection.title"),
  anchorId: t("racePage.routeSection.anchorId"),
  traceMapsLink: {
    label: t("racePage.linkToMapsTrace"),
    url: externalLinks.edition2025Maps,
  },
};

export const scheduleSectionBaseData = {
  title: t("racePage.scheduleSection.title"),
  anchorId: t("racePage.scheduleSection.anchorId"),
};

export const rewardsSectionBaseData = {
  title: t("racePage.rewardsSection.title"),
  anchorId: t("racePage.rewardsSection.anchorId"),
};

export const registrationSectionBaseData = {
  title: t("racePage.registrationSection.title"),
  anchorId: t("racePage.registrationSection.anchorId"),
  onlineRegistration: {
    title: t("racePage.registrationSection.onlineRegistration.title"),
    description: t(
      "racePage.registrationSection.onlineRegistration.description",
    ),
    link: {
      label: t("racePage.registrationSection.onlineRegistration.linkLabel"),
      url: externalLinks.registration,
    },
  },
  onSiteRegistration: {
    title: t("racePage.registrationSection.onSiteRegistration.title"),
    description: t(
      "racePage.registrationSection.onSiteRegistration.description",
    ),
    registrationFormLink: {
      label: t("racePage.registrationSection.onSiteRegistration.linkLabel"),
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
