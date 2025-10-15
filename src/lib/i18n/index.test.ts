import { describe, expect, test } from "vitest";
import { t } from "./";

// no mock in this test, we use the translations from translations/fr.json

describe("find keys", () => {
  test("find first level key", () => {
    expect(t("homepage.welcomeSection.title")).toBe("Bienvenue aux Chemins du <color>Mélantois</color>");
  });

  test("find key in array", () => {
    expect(t("homepage.faqSection.faqs.0.question")).toBe("Les courses sont-elles labellisées ?");
  });
});

describe("interpolation", () => {
  test("should interpolate number", () => {
    expect(t("homepage.racesOverview.races.pricePerParticipant", { price: 7 })).toBe(
      "7€ par participant",
    );
  });

  test("should not interpolate missing variable", () => {
    expect(t("homepage.racesOverview.races.pricePerParticipant")).toBe(
      "{{price}}€ par participant",
    );
  });
});
