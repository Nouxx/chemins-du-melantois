import { svgIcons } from "@/components/ui/icons/icons";
import { z } from "zod";

const SvgIcon = z.object({
  paths: z.array(z.object({ d: z.string(), class: z.string().optional() })),
  viewBox: z.string(),
  fill: z.string().default("currentColor"),
  class: z.string().optional(),
  height: z.number(),
  width: z.number(),
  strokeWidth: z.string().optional(),
  strokeLinecap: z.enum(["inherit", "round", "butt", "square"]).optional(),
  strokeLinejoin: z.enum(["round", "inherit", "miter", "bevel"]).optional(),
  stroke: z.string().optional(),
  fillRule: z.enum(["evenodd", "nonzero", "inherit"]).optional(),
  clipRule: z.string().optional(),
  title: z.string().optional(),
});
export type SvgIcon = z.input<typeof SvgIcon>;

export type SvgIconName = keyof typeof svgIcons;

// todo: infer SvgIconName in record
export const svgIconsSchema = z.record(SvgIcon);

// todo: errors "Required" is not verbose enough
export const parsedSvgIcons = svgIconsSchema.parse(svgIcons);
