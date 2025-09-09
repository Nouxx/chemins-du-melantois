import { z } from "astro/zod";

// todo: move to a global type
const RaceLink = z.strictObject({
  label: z.string(),
  url: z.string(),
});

const RacePageSectionMandatoryFields = z.strictObject({
  anchorId: z.string(), // todo: make sure id can be converted in a URL safe string
  title: z.string(),
});

export const RacePageDataSchema = z.strictObject({
  urlSlug: z.string(), // todo: make sure id can be converted in a URL safe string
  featuredImage: z.strictObject({
    image: z.custom<ImageMetadata>(),
    alt: z.string(),
  }),
  pageTitle: z.string(),
  date: z.string(),
  price: z.string(),
  routeSection: z.strictObject({
    ...RacePageSectionMandatoryFields.shape,
    description: z.string(),
    tracePDFLink: RaceLink,
    traceMapsLink: RaceLink,
  }),
  scheduleSection: z.strictObject({
    ...RacePageSectionMandatoryFields.shape,
    eventDate: z.string(),
    startTime: z.string(),
    meetingPointAddressLines: z.array(z.string()).max(3),
    additionalScheduleInformation: z.string().optional(),
  }),
  rewardsSection: z
    .strictObject({
      ...RacePageSectionMandatoryFields.shape,
      description: z.string(),
      rewardsLink: RaceLink.optional(),
    })
    .optional(),
  registrationSection: z.strictObject({
    ...RacePageSectionMandatoryFields.shape,
    onlineRegistration: z.strictObject({
      title: z.string(),
      partner: z.string(),
      additionalDescription: z.string().optional(),
      link: RaceLink,
    }),
    onSiteRegistration: z.strictObject({
      title: z.string(),
      registrationFormLink: RaceLink,
    }),
  }),
  bibSection: z.strictObject({
    ...RacePageSectionMandatoryFields.shape,
    description: z.string(),
    pickupScheduleLines: z.array(z.string()),
  }),
  registrationDetailsSection: z.strictObject({
    ...RacePageSectionMandatoryFields.shape,
    forAdults: z.strictObject({
      title: z.string(),
      description: z.string(),
      requiredDocumentsLines: z.array(z.string()).optional(),
      ppsLink: RaceLink.optional(),
    }),
    forChildren: z.strictObject({
      title: z.string(),
      description: z.string(),
      requiredDocumentsLines: z.array(z.string()),
      parentalConstentLink: RaceLink,
      healthQuestionnaireLink: RaceLink,
    }),
  }),
  regulationSection: z.strictObject({
    ...RacePageSectionMandatoryFields.shape,
    description: z.string(),
    link: RaceLink,
  }),
});

export type RaceLink = z.input<typeof RaceLink>;

export type RacePageSection = z.input<typeof RacePageSectionMandatoryFields>;

export type RacePageData = z.input<typeof RacePageDataSchema>;
