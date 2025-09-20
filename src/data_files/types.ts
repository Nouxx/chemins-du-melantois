import type { LinkSchema } from "@/data_files/schema";
import type { z } from "zod";

export type Link = z.input<typeof LinkSchema>;

export type SvgLogoLink = {
  /** must be imported with ?raw */
  svg: string;
  link: Link;
};
