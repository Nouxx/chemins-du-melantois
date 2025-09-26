import { routes } from "@data/navigation/routes/routes";
import { SiteMetadata } from "@data/site/metadata";
import { z } from "zod";

const routesKeys = Object.keys(routes);

const routesSchema = z.strictObject({
  ...Object.fromEntries(
    routesKeys.map((key) => [
      key,
      z.string().startsWith(`${SiteMetadata.base}/`),
    ]),
  ),
});

routesSchema.parse(routes);
