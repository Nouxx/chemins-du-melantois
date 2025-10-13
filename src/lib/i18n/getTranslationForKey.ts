import type { Translations } from "src/lib/i18n/types";

function hasKey<T extends object>(object: T, key: PropertyKey): key is keyof T {
  return Object.hasOwn(object, key);
}

export function getTranslationForKey(
  path: string,
  translations: Translations,
): string {
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
    throw new Error(`Could not find translation for key: ${path}`);
  }

  return found;
}
