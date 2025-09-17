import { svgIcons } from "@/components/ui/icons/icons";
import { z } from "zod";

const PathSchema = z.strictObject({ d: z.string() });
const LineSchema = z.strictObject({
  x1: z.number(),
  y1: z.number(),
  x2: z.number(),
  y2: z.number(),
});

const SvgIconBase = z.strictObject({
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

const SvgIconWithPaths = SvgIconBase.extend({
  paths: z.array(PathSchema),
});

const SvgIconWithLines = SvgIconBase.extend({
  lines: z.array(LineSchema),
});

export const SvgIcon = z.union([SvgIconWithPaths, SvgIconWithLines]);

export type SvgIcon = z.input<typeof SvgIcon>;

export type SvgIconName = keyof typeof svgIcons;

const svgIconsSchema = z.record(SvgIcon);

export const parsedSvgIcons = svgIconsSchema.parse(svgIcons);
