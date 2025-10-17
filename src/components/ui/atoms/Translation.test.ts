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

test("should throw when no input or key are provided", async () => {
  const container = await AstroContainer.create();

  await expect(
    container.renderToString(Translation, {
      props: {},
    }),
  ).rejects.toThrow();
});

test("should throw when there is an additional closing tag", async () => {
  const container = await AstroContainer.create();

  await expect(
    container.renderToString(Translation, {
      props: {
        input: "This is a <color>text</color></strong>",
      },
    }),
  ).rejects.toThrow();
});

test("should throw when there is an additional opening tag", async () => {
  const container = await AstroContainer.create();

  await expect(
    container.renderToString(Translation, {
      props: {
        input: "This <strong>is a <color>text</color>",
      },
    }),
  ).rejects.toThrow();
});

test.only("should YE", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input:
        "This is a <strong>Strong Text</strong> and a <strong>A <strong>Very strong</strong></strong> and a <italic><strong>Strong and italic</strong> here</italic> and a <color>Colored and <strong>Strong</strong></color> text.",
    },
  });

  expect(result).toBe(`This is a <span class="font-bold">Strong Text</span> and a <span class="font-bold">A <span class="font-bold">Very strong</span></span> and a <span class="italic"><span class="font-bold">Strong and italic</span> here</span> and a <span class="text-brand-light-green">Colored and <span class="font-bold">Strong</span></span> text.`,
);
});
