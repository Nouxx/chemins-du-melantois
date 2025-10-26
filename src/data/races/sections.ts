import { externalLinks } from "@data/navigation/externalLinks/externalLinks";
import type { RacePageData } from "@data/races/schema";
import { t2 } from "@lib/i18n";

export const routeSectionBaseData = {
  title: t2("racePage.routeSection.title"),
  anchorId: t2("racePage.routeSection.anchorId"),
  traceMapsLink: {
    label: t2("racePage.linkToMapsTrace"),
    url: externalLinks.edition2025Maps,
  },
};

export const scheduleSectionBaseData = {
  title: t2("racePage.scheduleSection.title"),
  anchorId: t2("racePage.scheduleSection.anchorId"),
  meetingPointLine: t2("racePage.meetingPointLine"),
};

export const rewardsSectionBaseData = {
  title: t2("racePage.rewardsSection.title"),
  anchorId: t2("racePage.rewardsSection.anchorId"),
};

export const registrationSectionBaseData = {
  title: t2("racePage.registrationSection.title"),
  anchorId: t2("racePage.registrationSection.anchorId"),
  onlineRegistration: {
    title: t2("racePage.registrationSection.onlineRegistration.title"),
    description: t2(
      "racePage.registrationSection.onlineRegistration.description",
    ),
    link: {
      label: t2("racePage.registrationSection.onlineRegistration.linkLabel"),
      url: externalLinks.registration,
    },
  },
  onSiteRegistration: {
    title: t2("racePage.registrationSection.onSiteRegistration.title"),
    description: t2(
      "racePage.registrationSection.onSiteRegistration.description",
    ),
    registrationFormLink: {
      label: t2("racePage.registrationSection.onSiteRegistration.linkLabel"),
      url: externalLinks.registrationForm,
    },
  },
};

export const raceRegulationSectionBaseData = {
  title: t2("racePage.regulationSection.title"),
  anchorId: t2("racePage.regulationSection.anchorId"),
  description: t2("racePage.regulationSection.description"),
  link: {
    label: t2("racePage.regulationSection.link"),
    url: externalLinks.sportsRegulations,
  },
};

export const adultRegistrationSectionBaseData: RacePageData["registrationDetailsSection"]["forAdults"] =
  {
    title: t2("racePage.registrationDetailsSection.forAdults"),
    description: t2(
      "racePage.registrationDetailsSection.forAdultsSection.description",
    ),
    requiredDocumentsLines: [
      t2(
        "racePage.registrationDetailsSection.forAdultsSection.requiredDocuments.0",
      ),
      t2(
        "racePage.registrationDetailsSection.forAdultsSection.requiredDocuments.1",
      ),
    ],
    ppsLink: {
      label: t2("racePage.registrationDetailsSection.forAdultsSection.ppsLink"),
      url: externalLinks.pps,
    },
  };

export const noRegistrationForAdultSectionData: RacePageData["registrationDetailsSection"]["forAdults"] =
  {
    title: t2("racePage.registrationDetailsSection.forAdults"),
    description: t2("racePage.registrationDetailsSection.noDocumentRequired"),
  };

export const bibSectionBaseData: RacePageData["bibSection"] = {
  title: t2("racePage.bibSection.title"),
  anchorId: t2("racePage.bibSection.anchorId"),
  description: t2("racePage.bibSection.description"),
  pickupScheduleLines: [
    t2("racePage.bibSection.pickupLines.0"),
    t2("racePage.bibSection.pickupLines.1"),
  ],
};

export const registrationDetailsSectionBaseData = {
  title: t2("racePage.registrationDetailsSection.title"),
  anchorId: t2("racePage.registrationDetailsSection.anchorId"),
  forChildren: {
    title: t2("racePage.registrationDetailsSection.forChildren"),
    description: t2(
      "racePage.registrationDetailsSection.forChildrenSection.description",
    ),
    requiredDocumentsLines: [
      t2(
        "racePage.registrationDetailsSection.forChildrenSection.requiredDocuments.0",
      ),
      t2(
        "racePage.registrationDetailsSection.forChildrenSection.requiredDocuments.1",
      ),
    ],
    healthQuestionnaireLink: {
      label: t2(
        "racePage.registrationDetailsSection.forChildrenSection.healthQuestionnaireLink",
      ),
      url: externalLinks.healthQuestionnaire,
    },
    parentalConstentLink: {
      label: t2(
        "racePage.registrationDetailsSection.forChildrenSection.parentalConstentLink",
      ),
      url: externalLinks.parentalConsentForm,
    },
  },
};
