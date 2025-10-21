import type { SupportedLanguages, Translations } from "./types";
import frenchTranslations from "@data/translations/fr.json";

const allTranslations: Record<SupportedLanguages, Translations> = {
  fr: frenchTranslations,
};

export const getTranslations = (lang: SupportedLanguages): Translations => {
  // To-do: Add Zod validation here after parsing.
  return allTranslations[lang];
};
