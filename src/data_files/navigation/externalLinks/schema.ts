import { z } from "zod";

const urlSchema = z.string().url();

export const externalLinksSchema: z.ZodType<any> = z.lazy(() =>
  z.record(z.union([urlSchema, externalLinksSchema])),
);

export type ExternalLinks = z.infer<typeof externalLinksSchema>;
