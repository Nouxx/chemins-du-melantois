import frenchTranslations from "@data/translations/fr.json";

import i18next from "i18next";

await i18next.init({
  lng: "fr",
  debug: false,
  resources: {
    fr: {
      translation: frenchTranslations,
    },
  },
  interpolation: {
    // Astro auto-escapes text expressions; disable i18next escaping to
    // avoid double-escaping interpolated values (e.g. "Run & Bike" -> "Run &amp; Bike")
    escapeValue: false,
  },
});

type TParameters = Parameters<typeof i18next.t>;

function tStrict(...args: TParameters): string {
  const result = i18next.t(...args);
  const key = args[0];

  // it's okay to have unfound translations in dev mode, but for production build
  if (import.meta.env.PROD && result === key) {
    throw new Error(`Translation key not found: "${key}"`);
  }
  return result;
}

export const t = tStrict;
