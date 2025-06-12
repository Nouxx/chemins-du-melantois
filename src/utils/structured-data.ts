import { SEO, SITE } from "@/data_files/constants";

export const getPageTitle = (name: string) => `${name} | ${SITE.title} `;

export const getStructuredDataForPage = (pageDescription: string) => {
  return { ...SEO.structuredData, description: pageDescription };
};
