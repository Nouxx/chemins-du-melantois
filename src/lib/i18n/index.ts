import { getTranslationForKey } from "./getTranslationForKey";
import type { SupportedLanguages, TemplateVariables } from "./types";
import { getInterpolatedTranslation } from "./getInterpolatedTranslation";
import { getTranslations } from "./getTranslations";
import frenchTranslations from "@data/translations/fr.json";

import i18next from "i18next";

export const createTranslator = (lang: SupportedLanguages) => {
  let translations = getTranslations(lang);

  return function t(key: string, variables?: TemplateVariables): string {
    const translatedString = getInterpolatedTranslation(
      getTranslationForKey(key, translations),
      variables,
    );

    if (typeof translatedString !== "string") {
      throw new Error(`Translation key not found: "${key}"`);
    }

    return translatedString;
  };
};

export const t = createTranslator("fr");

await i18next.init({
  lng: "fr",
  debug: true,
  resources: {
    fr: {
      translation: frenchTranslations,
    },
  },
});

export const t2 = i18next.t;
