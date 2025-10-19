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
    title: t("racePage.registrationDetailsSection.forAdults"),
    description: t(
      "racePage.registrationDetailsSection.forAdultsSection.description",
    ),
    requiredDocumentsLines: [
      t(
        "racePage.registrationDetailsSection.forAdultsSection.requiredDocuments.0",
      ),
      t(
        "racePage.registrationDetailsSection.forAdultsSection.requiredDocuments.1",
      ),
    ],
    ppsLink: {
      label: t("racePage.registrationDetailsSection.forAdultsSection.ppsLink"),
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
  title: t("racePage.bibSection.title"),
  anchorId: t("racePage.bibSection.anchorId"),
  description: t("racePage.bibSection.description"),
  pickupScheduleLines: [
    t("racePage.bibSection.pickupLines.0"),
    t("racePage.bibSection.pickupLines.1"),
  ],
};

export const registrationDetailsSectionBaseData = {
  title: t("racePage.registrationDetailsSection.title"),
  anchorId: t("racePage.registrationDetailsSection.anchorId"),
  forChildren: {
    title: t("racePage.registrationDetailsSection.forChildren"),
    description: t(
      "racePage.registrationDetailsSection.forChildrenSection.description",
    ),
    requiredDocumentsLines: [
      t(
        "racePage.registrationDetailsSection.forChildrenSection.requiredDocuments.0",
      ),
      t(
        "racePage.registrationDetailsSection.forChildrenSection.requiredDocuments.1",
      ),
    ],
    healthQuestionnaireLink: {
      label: t(
        "racePage.registrationDetailsSection.forChildrenSection.healthQuestionnaireLink",
      ),
      url: externalLinks.healthQuestionnaire,
    },
    parentalConstentLink: {
      label: t(
        "racePage.registrationDetailsSection.forChildrenSection.parentalConstentLink",
      ),
      url: externalLinks.parentalConsentForm,
    },
  },
};

export const registrationDetailsSectionAnchor =
  registrationDetailsSectionBaseData.anchorId;
