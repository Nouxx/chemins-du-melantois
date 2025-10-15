import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import Translation from "./Translation.astro";

test("should find key and render it", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      i18nKey: "homepage.racesOverview.title",
    },
  });

  expect(result).toBe("Nos 5 courses");
});

test("should render input", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input: "Nos 5 courses",
    },
  });

  expect(result).toBe("Nos 5 courses");
});

test("should render <color>", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      i18nKey: "homepage.welcomeSection.title",
    },
  });

  expect(result).toBe(
    'Bienvenue aux Chemins du <span class="text-brand-light-green">Mélantois</span>',
  );
});
