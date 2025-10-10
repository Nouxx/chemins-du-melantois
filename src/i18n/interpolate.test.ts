import { interpolate } from "src/i18n/translate";
import { expect, test } from "vitest";

test("", () => {
  expect(
    interpolate("The temperature in {{city}} is {{degrees}}°C.", {
      city: "Montréal",
      degrees: 10,
    }),
  ).toBe("The temperature in Montréal is 10°C.");
});
