import { externalLinks, SITE } from "@/data_files/constants";

const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Courses", url: `${SITE.base}/races` },
  { name: "Services", url: `${SITE.base}/fr/services` },
  { name: "Blog", url: `${SITE.base}/fr/blog` },
  { name: "Contact", url: `${SITE.base}/fr/contact` },
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
    section: "Liens pratiques",
    links: [
      {
        name: "Liste des inscrits 2024",
        url: externalLinks.registrantsList,
        openInNewTab: true,
      },
      {
        name: "Réglement de course",
        url: externalLinks.sportsRegulations,
        openInNewTab: true,
      },
      {
        name: "Parcours Prévention Santé (PPS)",
        url: externalLinks.pps,
        openInNewTab: true,
      },
    ],
  },
  {
    section: "Documents",
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
        name: "433 Rue du Maréchal Leclerc, 59262 Sainghin-en-Mélantois",
      },
      {
        name: "contact@lescheminsdumelantois.fr",
        url: "mailto:contact@lescheminsdumelantois.fr",
      },
      { name: "03 20 61 90 30", url: "tel:+33 3 20 61 90 30" },
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
