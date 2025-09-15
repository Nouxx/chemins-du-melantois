import { externalLinks, routes, SITE } from "@/data_files/constants";

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
    section: "Liens Rapides",
    links: [
      {
        name: "Bulletin d'inscription",
        url: externalLinks.registrationForm,
        openInNewTab: true,
      },
      {
        name: "Liste des inscrits 2025",
        url: externalLinks.registrantsList,
        openInNewTab: true,
      },
      {
        name: "PPS",
        url: externalLinks.pps,
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
  footerLinks,
  socialLinks,
};
