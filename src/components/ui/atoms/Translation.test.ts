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

  expect(result).toBe("Nos 4 courses");
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
        input: "This is a <1>text</1></2>",
      },
    }),
  ).rejects.toThrow(
    "Number of opening tags (1) does not match number of closing tags (2)",
  );
});

test("should throw when there is an additional closing tag", async () => {
  const container = await AstroContainer.create();

  await expect(
    container.renderToString(Translation, {
      props: {
        input: "This is a <1>super</1> <2>text</3>",
      },
    }),
  ).rejects.toThrow("Opening tags (1,2) and closing tags (1,3) does not match");
});

test("should throw when there is an additional opening tag", async () => {
  const container = await AstroContainer.create();

  await expect(
    container.renderToString(Translation, {
      props: {
        input: "This is a <1>text</1><1>",
      },
    }),
  ).rejects.toThrow(
    "Number of opening tags (2) does not match number of closing tags (1)",
  );
});

test("should throw when there is duplicate tag", async () => {
  const container = await AstroContainer.create();

  await expect(
    container.renderToString(Translation, {
      props: {
        input: "This is a <1>text</1> <1>duplicated</1>",
      },
    }),
  ).rejects.toThrow(
    "Duplicate tags found in opening tags (1,1) or closing tags (1,1)",
  );
});

test("should interpolate links", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input: "I am <1>path to heaven.</1>",
      slots: [{ type: "link", to: "/hell" }],
    },
  });

  expect(result).toBe(
    `I am <a href="/hell" class="underline underline-offset-2">path to heaven.</a>`,
  );
});

test("should handle 2 identical slots", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input:
        "Hello <1>Arthur</1>, you have 1 unread message. <2>Go to message</2>.",
      slots: [{ type: "strong" }, { type: "strong" }],
    },
  });

  expect(result).toBe(
    `Hello <span class="font-bold">Arthur</span>, you have 1 unread message.` +
      ` <span class="font-bold">Go to message</span>.`,
  );
});

test("should handle color slot with default color", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input: "I am <1>colored</1>",
      slots: [{ type: "color" }],
    },
  });

  expect(result).toBe(
    `I am <span class="text-brand-light-green">colored</span>`,
  );
});

test("should handle color slot with a specific color", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input: "I am <1>colored</1>",
      slots: [{ type: "color", color: "white" }],
    },
  });

  expect(result).toBe(`I am <span class="text-neutral-50">colored</span>`);
});

test("should handle italic slot", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input: "I am <1>italic</1>",
      slots: [{ type: "italic" }],
    },
  });

  expect(result).toBe(`I am <span class="italic">italic</span>`);
});

test("should handle nested slots wrapping the same string", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input: "I am <1><2>colored and strong</2></1>",
      slots: [{ type: "color" }, { type: "strong" }],
    },
  });

  expect(result).toBe(
    `I am <span class="text-brand-light-green"><span class="font-bold">colored and strong</span></span>`,
  );
});

test("should interpolate 3 nested tags", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Translation, {
    props: {
      input:
        "This is a <1>Strong Text in <2>Italic and <3>Colored</3></2></1>.",
      slots: [{ type: "strong" }, { type: "italic" }, { type: "color" }],
    },
  });

  expect(result).toBe(
    `This is a <span class="font-bold">Strong Text in <span class="italic">Italic and <span class="text-brand-light-green">Colored</span></span></span>.`,
  );
});
