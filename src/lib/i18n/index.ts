import { getTranslationForKey } from "./getTranslationForKey";
import type { SupportedLanguages, TemplateVariables } from "./types";
import { getInterpolatedTranslation } from "./getInterpolatedTranslation";
import { getTranslations } from "./getTranslations";

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
