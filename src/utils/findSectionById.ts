import type { Race, SectionId } from "@/data_files/constants";

export const findSectionById = (race: Race, id: SectionId) => {
  const section = race.sections.find((section) => section.id === id);
  if (!section) throw new Error(`Section with id ${id} not found`);
  return section;
};
