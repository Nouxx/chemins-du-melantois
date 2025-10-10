import { readFileSync } from "fs";

type Variables = Record<string, string | number>;
type Translations = { [key: string]: string | Translations };

/**
 * Loads and parses a JSON translation file from a given language code.
 * @param lang the JSON filename in `src/i18n/translations` (e.g., 'fr' for `fr.json`).
 */
const getTranslations = (lang: string): Translations => {
  // To-do: Add Zod validation here after parsing.
  return JSON.parse(
    readFileSync(`${import.meta.dirname}/translations/${lang}.json`, "utf8"),
  );
};

const translations = getTranslations("fr");

// todo: rename
export const interpolate = (
  input: string,
  values?: Record<string, string | number>,
): string => {
  let result = input;

  const stringsInCurlyBraces = input.matchAll(/(?<={{)\w+(?=}})/g);

  if (stringsInCurlyBraces && values) {
    for (const variable of stringsInCurlyBraces) {
      // search for variable in values
      const key = variable[0];

      if (!Object.hasOwn(values, key)) {
        throw new Error(
          `String interpolation impossible because key ${key} has not been provided.`,
        );
      }

      const interpolatedValue = String(values[key]);

      result = result.replace(`{{${key}}}`, interpolatedValue);
    }
  }

  return result;
};

export function getTranslationForKey(key: string, object: any) {
  if (!object) {
    // to do: safely type from unknown
    object = translations;
  }

  if (key.includes(".")) {
    const split = key.split(".");
    const leftHand = split[0];
    const rightHand = split.slice(1).join(".");
    return getTranslationForKey(rightHand, object[leftHand]);
  }

  return object[key];
}

export function t(key: string, variables: Record<string, string | number>) {
  return interpolate(getTranslationForKey(key, translations), variables);
}
