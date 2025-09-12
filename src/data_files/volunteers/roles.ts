import {
  VolunteerRoleDataSchema,
  VolunteerRolesDataSchema,
  type VolunteerRoleData,
} from "@/data_files/volunteers/schema";
import imgVolunteersRegistration from "@images/volunteers/women-at-the-registration-desk.webp";
import imgVolunteersFood from "@images/volunteers/women-preparing-food.webp";
import imgVolunteersManCycling from "@images/volunteers/man-cycling-on-the-road.webp";
import imgVolunteersManTakingAPicture from "@images/volunteers/man-taking-pictures.webp";
import imgVolunteersInstallations from "@images/volunteers/finish-line-before-the-race.webp";
import imgVolunteersPosing from "@images/volunteers/volunteers-and-participant-posing.webp";

const MarshalRoleData: VolunteerRoleData = {
  role: "Signaleur",
  content:
    "Je suis positionné sur un point du parcours pour indiquer la direction aux coureurs ou sécuriser un carrefour.",
  roleImage: {
    image: imgVolunteersManCycling,
    alt: "Bénevole en vélo sur le parcours, vêtu d'un gilet orange, indiquant la direction aux coureurs.",
  },
};

const AidStationCrewRoleData: VolunteerRoleData = {
  role: "Ravitaillement",
  content:
    "Je prépare et distribue eau et encas aux coureurs sur les points de ravitaillement.",
  roleImage: {
    image: imgVolunteersFood,
    alt: "Trois bénévoles préparant gobelets et encas pour les coureurs.",
  },
};

const SetupCrewRoleData: VolunteerRoleData = {
  role: "Installation",
  content:
    "J'aide à mettre en place et démonter les équipements : barrières, signalétique, zones de départ et d'arrivée.",
  roleImage: {
    image: imgVolunteersInstallations,
    alt: "Entrée du village de course à Sainghin-en-Mélantois préparée par les bénévoles.",
  },
};

const registrationeCrewRoleData: VolunteerRoleData = {
  role: "Inscription",
  content:
    "J'aide les coureurs à s'inscrire, à récupérer leurs dossards et à répondre à leurs questions.",
  roleImage: {
    image: imgVolunteersRegistration,
    alt: "Quatre bénévoles à la table d'inscription, souriantes et accueillantes.",
  },
};

const photographerRoleData: VolunteerRoleData = {
  role: "Photographe",
  content:
    "Je capture les moments forts de la course : départs, arrivées, sourires, efforts et émotions.",
  roleImage: {
    image: imgVolunteersManTakingAPicture,
    alt: "Photographe postée sur un balcon prenant des photos de la course.",
  },
};

const andMuchMoreRoleData: VolunteerRoleData = {
  role: "Et bien plus !",
  content:
    "Vous avez une autre compétence et envie de participer ? Nous avons sûrement un rôle pour vous !",
  roleImage: {
    image: imgVolunteersPosing,
    alt: "Bénévoles souriants avec un jeune coureur.",
  },
};

export const volunteerRolesData: VolunteerRoleData[] =
  VolunteerRolesDataSchema.parse([
    VolunteerRoleDataSchema.parse(MarshalRoleData),
    VolunteerRoleDataSchema.parse(AidStationCrewRoleData),
    VolunteerRoleDataSchema.parse(SetupCrewRoleData),
    VolunteerRoleDataSchema.parse(registrationeCrewRoleData),
    VolunteerRoleDataSchema.parse(photographerRoleData),
    VolunteerRoleDataSchema.parse(andMuchMoreRoleData),
  ]);
