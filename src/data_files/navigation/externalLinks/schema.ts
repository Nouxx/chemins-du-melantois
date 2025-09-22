import { externalLinks } from "@/data_files/navigation/externalLinks/externalLinks";
import { z } from "zod";

const externalLinksKeys = Object.keys(externalLinks);

const externalLinksSchema = z.strictObject({
  ...Object.fromEntries(
    externalLinksKeys.map((key) => [key, z.string().url()]),
  ),
});

externalLinksSchema.parse(externalLinks);

export type ExternalLinks = z.infer<typeof externalLinksSchema>;
