import { readFileSync } from "fs";
import { threadId } from "worker_threads";

type Variables = Record<string, string | number>;
type Translations = { [key: string]: string | Translations };
type SupportedLanguages = "fr";

/**
 * Loads and parses a JSON translation file from a given language code.
 * @param lang the JSON filename in `src/i18n/translations` (e.g., 'fr' for `fr.json`).
 */
export const getTranslations = (lang: SupportedLanguages): Translations => {
  // To-do: Add Zod validation here after parsing.
  return JSON.parse(
    readFileSync(`${import.meta.dirname}/translations/${lang}.json`, "utf8"),
  );
};

/**
 * simpler implementation similar to i18n's interpolation: https://www.i18next.com/translation-function/interpolation
 */
const getInterpolatedTranslation = (
  template: string,
  values?: Variables,
): string => {
  if (!values) {
    return template;
  }

  return template.replace(/(?<={{)\w+(?=}})/g, (placeholder, key) => {
    if (Object.hasOwn(values, key)) {
      return String(values[key]);
    }
    // if a key is missing in the variables, return the original placeholder
    return placeholder;
  });
};

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

function hasKey<T extends object>(object: T, key: PropertyKey): key is keyof T {
  return Object.hasOwn(object, key);
}

export const getTranslationForKey = (
  path: string,
  translations: Translations,
): string => {
  const found = path
    .split(".")
    .reduce((currentObject: Translations | string | undefined, currentKey) => {
      if (
        typeof currentObject === "object" &&
        hasKey(currentObject, currentKey)
      ) {
        return currentObject[currentKey];
      }
      return undefined;
    }, translations);

  if (typeof found !== "string") {
    throw new Error("Not a string");
  }
  return found;
};

export const createTranslator = (lang: SupportedLanguages) => {
  const translations = getTranslations(lang);

  return function t(key: string, variables?: Variables): string {
    const translationString = interpolate(
      getTranslationForKey(key, translations),
      variables,
    );

    // If the key wasn't found, return the key itself as a fallback.
    // This makes it easy to spot missing translations during development.
    if (typeof translationString !== "string") {
      console.warn(`Translation key not found: "${key}"`);
      return key;
    }

    return translationString;
  };
};

export const t = createTranslator("fr");
