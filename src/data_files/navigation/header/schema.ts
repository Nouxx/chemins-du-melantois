import { z } from "zod";

const RoutesSchema = z.strictObject({
  label: z.string(),
  url: z.string(),
});
