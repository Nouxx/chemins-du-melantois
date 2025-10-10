import i18next from "i18next";
import Backend from "i18next-fs-backend";
const { join } = require("path");

export const i18n = await i18next.use(Backend).init({
  backend: {
    loadPath: join(__dirname, "translations/{{lng}}.json"),
  },
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
});
