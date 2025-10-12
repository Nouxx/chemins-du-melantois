import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://www.lescheminsdumelantois.fr",
  base: "",
  image: {
    responsiveStyles: true,
    layout: "full-width",
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["en", "fr"],
    fallback: {
      en: "fr",
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: {
          fr: "fr",
        },
      },
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx(),
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    server: {
      watch: {
        paths: ['src/lib/i18n/translations/*.json']
      }
    },
    plugins: [tailwindcss()],
  },
});
