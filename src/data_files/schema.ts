import { z } from "zod";

export const LinkSchema = z.strictObject({
  label: z.string(),
  url: z.string(),
  newTab: z.boolean().default(false),
});
