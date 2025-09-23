import type { LinkSchema } from "@/data/schema";
import type { z } from "zod";

export type Link = z.input<typeof LinkSchema>;
