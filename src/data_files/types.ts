import { z } from "zod";

export const Link = z.strictObject({
  label: z.string(),
  url: z.string(),
  newTab: z.boolean().default(false),
});

export type Link = z.input<typeof Link>;

export type SvgLogoLink = {
  /** must be imported with ?raw */
  svg: string;
  link: Link;
};
