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
  ).rejects.toThrow(
    "The number of opening tags (1) and closing tags (2) does not match.",
  );
});

test("should throw when there is an additional opening tag", async () => {
  const container = await AstroContainer.create();

  await expect(
    container.renderToString(Translation, {
      props: {
        input: "This <strong>is a <color>text</color>",
      },
    }),
  ).rejects.toThrow(
    "The number of opening tags (2) and closing tags (1) does not match.",
  );
});

test("should interpolate 2 nested tags", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input:
        "This is a <strong>Strong Text in <italic>Italic</italic></strong>.",
    },
  });

  expect(result).toBe(
    `This is a <span class="font-bold">Strong Text in <span class="italic">Italic</span></span>.`,
  );
});

test("should interpolate 3 nested tags", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input:
        "This is a <strong>Strong Text in <italic>Italic and <color>Colored</color></italic></strong>.",
    },
  });

  expect(result).toBe(
    `This is a <span class="font-bold">Strong Text in <span class="italic">Italic and <span class="text-brand-light-green">Colored</span></span></span>.`,
  );
});

test("should interpolate 2 tags encapsulating the same string", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input:
        "This is a <strong><italic>Strong and Italic</italic></strong> text.",
    },
  });

  expect(result).toBe(
    `This is a <span class="font-bold"><span class="italic">Strong and Italic</span></span> text.`,
  );
});

test("should interpolate a link", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input: "This is a <link>link</link> in a text.",
      link: "#anchorId",
    },
  });

  expect(result).toBe(
    `This is a <a href="#anchorId" class="underline underline-offset-2">link</a> in a text.`,
  );
});

test("should interpolate a link", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input:
        "This is a <italic><strong>strong text</strong></strong> in a text.",
    },
  });

  // maybe we shouldn't allow this?
  expect(result).toBe(
    `This is a <span class="italic"><span class="font-bold">strong text</span></span> in a text.`,
  );
});
