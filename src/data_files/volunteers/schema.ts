import { z } from "zod";

export const VolunteerRoleDataSchema = z.strictObject({
  roleImage: z.strictObject({
    image: z.custom<ImageMetadata>(),
    alt: z.string(),
  }),
  role: z.string(),
  content: z.string(),
});

export const VolunteerRolesDataSchema = z.array(VolunteerRoleDataSchema).min(1);

export type VolunteerRoleData = z.input<typeof VolunteerRoleDataSchema>;
