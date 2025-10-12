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

  // todo: test accents
  return template.replace(/{{\w+}}/g, (rawKey) => {
    const key = rawKey.replaceAll("{{", "").replaceAll("}}", "");

    if (Object.hasOwn(values, key)) {
      return String(values[key]);
    }
    // to do: throw in prod mode
    return rawKey;
  });
};
