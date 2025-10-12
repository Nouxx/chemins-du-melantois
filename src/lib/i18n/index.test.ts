import { describe, expect, test } from "vitest";
import { t } from "./";

// no mock in this test, we use the translations from translations/fr.json

describe("find keys", () => {
  test("find first level key", () => {
    expect(t("welcome")).toBe("Bienvenue aux Chemins du Mélantois");
  });

  test("find second level key", () => {
    expect(t("racesOverview.free")).toBe("Gratuit");
  });
});

describe("interpolation", () => {
  test("should interpolate number", () => {
    expect(t("racesOverview.pricePerParticipant", { price: 7 })).toBe(
      "7€ par participant",
    );
  });

  test("should not interpolate missing variable", () => {
    expect(t("racesOverview.pricePerParticipant")).toBe(
      "{{price}}€ par participant",
    );
  });
});
