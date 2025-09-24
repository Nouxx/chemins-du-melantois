import { SiteMetadata } from "@/data/site/metadata";

export const SEOData = {
  title: SiteMetadata.title,
  description: SiteMetadata.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "fr-FR",
    "@id": SiteMetadata.url,
    url: SiteMetadata.url,
    name: SiteMetadata.title,
    description: SiteMetadata.description,
    isPartOf: {
      "@type": "WebSite",
      url: SiteMetadata.url,
      name: SiteMetadata.title,
      description: SiteMetadata.description,
    },
  },
} as const;

export const getPageTitle = (name: string) =>
  `${name} | ${SiteMetadata.title} `;

export const getStructuredDataForPage = (pageDescription: string) => {
  return { ...SEOData.structuredData, description: pageDescription };
};
