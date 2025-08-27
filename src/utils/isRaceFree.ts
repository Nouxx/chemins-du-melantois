import type { Race } from "@/data_files/constants";

export const isRaceFree = (race: Race) => {
  return !race.price;
};
