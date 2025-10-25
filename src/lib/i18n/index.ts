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

// todo: throw in build mode if no translation found for a key
await i18next.init({
  lng: "fr",
  debug: false,
  resources: {
    fr: {
      translation: frenchTranslations,
    },
  },
});

type TParameters = Parameters<typeof i18next.t>;

export function t2(...args: TParameters): string {
  const result = i18next.t(...args);
  const key = args[0];
  if (import.meta.env.PROD && result === key) {
    throw new Error(`Translation key not found: "${key}"`);
  }
  return result;
}
