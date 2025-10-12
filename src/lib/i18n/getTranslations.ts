import type { SupportedLanguages, Translations } from "./types";
import { readFileSync } from "fs";

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
