import type { TemplateVariables } from "./types";

/**
 * simpler implementation similar to i18n's interpolation: https://www.i18next.com/translation-function/interpolation
 */
export const getInterpolatedTranslation = (
  template: string,
  values?: TemplateVariables,
): string => {
  if (!values) {
    return template;
  }

  return template.replace(/{{\w+}}/g, (matchedKey) => {
    const key = matchedKey.replaceAll("{{", "").replaceAll("}}", "");

    if (Object.hasOwn(values, key)) {
      return String(values[key]);
    }

    return matchedKey;
  });
};
