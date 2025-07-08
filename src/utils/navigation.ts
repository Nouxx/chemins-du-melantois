import { externalLinks, routes, SITE } from "@/data_files/constants";

const navBarLinks = [
  { name: "Accueil", url: routes.home },
  { name: "Courses", url: routes.races },
  { name: "Après-course", url: routes.resultsAndPictures },
  { name: "Bénévoles", url: routes.volunteer },
];

interface FooterLinks {
  section: string;
  links: FooterLink[];
}

interface FooterLink {
  name: string;
  url?: string;
  openInNewTab?: boolean;
}

const footerLinks: FooterLinks[] = [
  {
    section: "Liens Pratiques",
    links: [
      {
        name: "Bulletin d'inscription",
        url: externalLinks.registrationForm,
        openInNewTab: true,
      },
      {
        name: "Questionnaire de santé",
        url: externalLinks.healthQuestionnaire,
        openInNewTab: true,
      },
      {
        name: "Autorisation parentale",
        url: externalLinks.parentalConsentForm,
        openInNewTab: true,
      },
    ],
  },
  {
    section: "Nous contacter",
    links: [
      {
        name: "Par email",
        url: `mailto:${SITE.contactEmail}`,
      },
      { name: "Devenir bénévole", url: routes.volunteer },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/lescheminsdumelantois",
  instagram:
    "https://www.instagram.com/lescheminsdumelantois?igsh=dnN3ZnBvMmJ5bW96",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
