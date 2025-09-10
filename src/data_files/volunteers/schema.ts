import { z } from "zod";

export const VolunteerRoleDataSchema = z.strictObject({
  roleImage: z.strictObject({
    image: z.custom<ImageMetadata>(),
    alt: z.string(),
  }),
  role: z.string(),
  content: z.string(),
});

export type VolunteerRoleData = z.input<typeof VolunteerRoleDataSchema>;
