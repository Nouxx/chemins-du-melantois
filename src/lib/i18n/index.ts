import { getTranslationForKey } from "./getTranslationForKey";
import type { SupportedLanguages, TemplateVariables } from "./types";
import { getInterpolatedTranslation } from "./getInterpolatedTranslation";
import { getTranslations } from "./getTranslations";

export const createTranslator = (lang: SupportedLanguages) => {
  let translations = getTranslations(lang);

  if (import.meta.env.DEV) {
    return function t(key: string, variables?: TemplateVariables): string {
      // reload translations on every request in dev for HMR to take effect
      translations = getTranslations(lang);

      const translationString = getInterpolatedTranslation(
        getTranslationForKey(key, translations),
        variables,
      );

      if (typeof translationString !== "string") {
        console.warn(`Translation key not found: "${key}"`);
        return key;
      }

      return translationString;
    };
  } else {
    // in production, load once only for performance
    return function t(key: string, variables?: TemplateVariables): string {
      const translationString = getInterpolatedTranslation(
        getTranslationForKey(key, translations),
        variables,
      );

      if (typeof translationString !== "string") {
        console.warn(`Translation key not found: "${key}"`);
        return key;
      }

      return translationString;
    };
  }
};

export const t = createTranslator("fr");
