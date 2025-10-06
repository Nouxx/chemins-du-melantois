import { raceUrlSlugs } from "@data/races/slugs";
import { LinkSchema } from "@data/schema";
import { z } from "zod";

const anchorIdPattern = /^[a-zA-Z0-9-_]+$/;

export const anchorIdSchema = z.string().regex(anchorIdPattern, {
  message:
    "Invalid anchor ID. Use only letters, numbers, dashes, or underscores.",
});

const racePageSectionBaseSchema = z.strictObject({
  anchorId: anchorIdSchema,
  title: z.string(),
});

export const racePageDataSchema = z.strictObject({
  urlSlug: z.enum(raceUrlSlugs),
  featuredImage: z.strictObject({
    image: z.custom<ImageMetadata>(),
    alt: z.string(),
  }),
  pageTitle: z.string(),
  date: z.string(),
  price: z.string(),
  routeSection: z.strictObject({
    ...racePageSectionBaseSchema.shape,
    description: z.string(),
    tracePDFLink: LinkSchema,
    traceMapsLink: LinkSchema,
  }),
  scheduleSection: z.strictObject({
    ...racePageSectionBaseSchema.shape,
    eventDate: z.string(),
    startTime: z.string(),
    meetingPointAddressLines: z.array(z.string()).max(3),
    additionalScheduleInformation: z.string().optional(),
  }),
  rewardsSection: z
    .strictObject({
      ...racePageSectionBaseSchema.shape,
      description: z.string(),
      rewardsLink: LinkSchema.optional(),
    })
    .optional(),
  registrationSection: z.strictObject({
    ...racePageSectionBaseSchema.shape,
    onlineRegistration: z.strictObject({
      title: z.string(),
      partner: z.string(),
      additionalDescription: z.string().optional(),
      link: LinkSchema,
    }),
    onSiteRegistration: z.strictObject({
      title: z.string(),
      registrationFormLink: LinkSchema,
    }),
  }),
  bibSection: z.strictObject({
    ...racePageSectionBaseSchema.shape,
    description: z.string(),
    pickupScheduleLines: z.array(z.string()),
  }),
  registrationDetailsSection: z.strictObject({
    ...racePageSectionBaseSchema.shape,
    forAdults: z.strictObject({
      title: z.string(),
      description: z.string(),
      requiredDocumentsLines: z.array(z.string()).optional(),
      ppsLink: LinkSchema.optional(),
    }),
    forChildren: z.strictObject({
      title: z.string(),
      description: z.string(),
      requiredDocumentsLines: z.array(z.string()),
      parentalConstentLink: LinkSchema,
      healthQuestionnaireLink: LinkSchema,
    }),
  }),
  regulationSection: z.strictObject({
    ...racePageSectionBaseSchema.shape,
    description: z.string(),
    link: LinkSchema,
  }),
});

export type RacePageSection = z.input<typeof racePageSectionBaseSchema>;

export type RacePageData = z.input<typeof racePageDataSchema>;
