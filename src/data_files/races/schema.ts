import { raceUrlSlugs } from "@/data_files/races/slugs";
import { Link } from "@/data_files/types";
import { z } from "zod";

const anchorIdPattern = /^[a-zA-Z0-9-_]+$/;

export const anchorIdSchema = z.string().regex(anchorIdPattern, {
  message:
    "Invalid anchor ID. Use only letters, numbers, dashes, or underscores.",
});

const RacePageSectionBase = z.strictObject({
  anchorId: anchorIdSchema,
  title: z.string(),
});

export const RacePageDataSchema = z.strictObject({
  urlSlug: z.enum(raceUrlSlugs),
  featuredImage: z.strictObject({
    image: z.custom<ImageMetadata>(),
    alt: z.string(),
  }),
  pageTitle: z.string(),
  date: z.string(),
  price: z.string(),
  routeSection: z.strictObject({
    ...RacePageSectionBase.shape,
    description: z.string(),
    tracePDFLink: Link,
    traceMapsLink: Link,
  }),
  scheduleSection: z.strictObject({
    ...RacePageSectionBase.shape,
    eventDate: z.string(),
    startTime: z.string(),
    meetingPointAddressLines: z.array(z.string()).max(3),
    additionalScheduleInformation: z.string().optional(),
  }),
  rewardsSection: z
    .strictObject({
      ...RacePageSectionBase.shape,
      description: z.string(),
      rewardsLink: Link.optional(),
    })
    .optional(),
  registrationSection: z.strictObject({
    ...RacePageSectionBase.shape,
    onlineRegistration: z.strictObject({
      title: z.string(),
      partner: z.string(),
      additionalDescription: z.string().optional(),
      link: Link,
    }),
    onSiteRegistration: z.strictObject({
      title: z.string(),
      registrationFormLink: Link,
    }),
  }),
  bibSection: z.strictObject({
    ...RacePageSectionBase.shape,
    description: z.string(),
    pickupScheduleLines: z.array(z.string()),
  }),
  registrationDetailsSection: z.strictObject({
    ...RacePageSectionBase.shape,
    forAdults: z.strictObject({
      title: z.string(),
      description: z.string(),
      requiredDocumentsLines: z.array(z.string()).optional(),
      ppsLink: Link.optional(),
    }),
    forChildren: z.strictObject({
      title: z.string(),
      description: z.string(),
      requiredDocumentsLines: z.array(z.string()),
      parentalConstentLink: Link,
      healthQuestionnaireLink: Link,
    }),
  }),
  regulationSection: z.strictObject({
    ...RacePageSectionBase.shape,
    description: z.string(),
    link: Link,
  }),
});

export type RacePageSection = z.input<typeof RacePageSectionBase>;

export type RacePageData = z.input<typeof RacePageDataSchema>;
