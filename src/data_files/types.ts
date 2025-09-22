import type { LinkSchema } from "@/data_files/schema";
import type { z } from "zod";

export type Link = z.input<typeof LinkSchema>;
