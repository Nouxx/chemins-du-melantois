import MelIconSvg from "../images/sponsors/mel-logo.svg?raw";
import NordIconSvg from "../images/sponsors/nord-logo.svg?raw";
import CreditMutuelIcon from "../images/sponsors/credit-mutuel-logo.svg?raw";
import MatchLogoSvg from "../images/sponsors/match-logo.svg?raw";
import ReKeepLogoSvg from "../images/sponsors/rekeep-logo.svg?raw";

export interface Sponsor {
  icon: string;
  name: string;
  href: string;
}

export const sponsorsData: Sponsor[] = [
  {
    icon: MelIconSvg, // todo: clean svg inner padding
    name: "Logo de la MEL: Métropole Européenne de Lille",
    href: "https://www.lillemetropole.fr",
  },
  {
    icon: NordIconSvg,
    name: "Logo du Département du Nord",
    href: "https://lenord.fr",
  },
  {
    icon: CreditMutuelIcon,
    name: "Logo du Crédit Mutuel",
    href: "https://www.creditmutuel.fr",
  },
  {
    icon: MatchLogoSvg,
    name: "Logo du Supermarchés Match",
    href: "https://www.supermarchesmatch.fr",
  },
  {
    icon: ReKeepLogoSvg,
    name: "Logo de l'entreprise Rekeep",
    href: "https://rekeepfrance.com",
  },
];
