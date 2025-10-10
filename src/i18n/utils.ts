import { readFileSync } from "fs";

const getTranslations = () => {
  // throws if invalid JSON
  // to do: Zod validation?
  return JSON.parse(
    readFileSync(import.meta.dirname + "/translations/fr.json", "utf8"),
  );
};

const translations = getTranslations();

export function useTranslations() {
  return function t(key: string, object: any) {
    if (!object) {
      // to do: safely type from unknown
      object = translations;
    }

    if (key.includes(".")) {
      const split = key.split(".");
      const newKey = split.slice(1).join(".");
      return t(newKey, object[key]);
    }

    return object[key];
  };
}
