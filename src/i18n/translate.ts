import { readFileSync } from "fs";

const getTranslations = () => {
  // throws if invalid JSON
  // to do: Zod validation?
  return JSON.parse(
    readFileSync(import.meta.dirname + "/translations/fr.json", "utf8"),
  );
};

// todo: rename
export const interpolate = (
  input: string,
  values: Record<string, string | number>,
): string => {
  let result = input;

  const reg = new RegExp(/(?<={{)\w+(?=}})/g);
  const variables = input.matchAll(reg);

  if (variables) {
    for (const variable of variables) {
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

const translations = getTranslations();

export function t(key: string, object: any) {
  if (!object) {
    // to do: safely type from unknown
    object = translations;
  }

  if (key.includes(".")) {
    const split = key.split(".");
    const leftHand = split[0];
    const rightHand = split.slice(1).join(".");
    return t(rightHand, object[leftHand]);
  }

  return object[key];
}
