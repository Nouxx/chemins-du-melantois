type ListItem = {
  title: string;
  content: string;
};

export type RacePage = {
  position: number;
  url: string;
  title: string;
  date: string;
  imagePaths: {
    card: string;
    main: string;
    alt: string;
  };
  descriptionTab: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
    list: ListItem[];
  };
  termsOfRegistration: {
    leftSection: ListItem[];
    rightSection: ListItem[];
  };
  route: {
    imgPath: string;
  };
};

const RACE_RUN_10K: RacePage = {
  position: 1,
  url: "10km-sainghin",
  title: "10km de Sainghin en Mélantois",
  date: "22 septembre 2025",
  imagePaths: {
    card: "@/images/10km-sem-hero.jpg",
    main: "@/images/10km-sem-hero.jpg",
    alt: "coureurs",
  },
  descriptionTab: {
    title: "Un parcours axé trail",
    description:
      "La boucle de 10km traverse le Bois de la Noyelle, l’étang de pêche de Sainghin, jusqu’à effleurer les Marais de la Marque. Elle a été mesurée officiellement une première fois en 2011, puis en 2016 pour être labellisée au niveau départemental.",
    buttonLabel: "Inscription au 10km de Sainghin",
    buttonUrl: "#",
    list: [
      {
        title: "Horaires",
        content:
          "10h00 : Echauffement encadré face à l’église de Sainghin en Mélantois. 10h15 : Départ face à l’église.",
      },
      {
        title: "Sac du coureur",
        content:
          "A chaque inscription vous est offert un sac du coureur avec : Le dossard, Un porte gourde aux couleurs de l’évènement.",
      },
      {
        title: "Récompenses",
        content:
          "La prime est de 100€ pour le 1er, 50€ pour le 2nd et 30€ pour le 3ème toute catégories confondues. Pour les coureurs nées avant 1988, les trois places du podium sont récompensés à hauteur de 30€. Pour les coureurs nées entre 2001 et 2007, seul le vainqueur obtient une récompense de 30€",
      },
    ],
  },
  termsOfRegistration: {
    leftSection: [
      {
        title: "Inscription en ligne",
        content: "En ligne jusqu’au Samedi 21 septembre à 12h00",
      },
      {
        title: "Inscription sur place",
        content:
          "à la maison des associations de Sainghin (210 bd du Mal Leclerc)  le samedi 21 septembre de 14h00 à 17h00,",
      },
      {
        title: "Inscription par voie postale",
        content:
          "Envoi ou dépose des dossiers aux Mairies de Sainghin ou Péronne le mercredi 18 septembre dernier délai.",
      },
      {
        title: "Retrait des dossards",
        content:
          "Retrait des dossards en mairie de Sainghin : Le samedi 21 septembre de 14h00 à 17h00, Le dimanche 22 septembre de 7h30 à 9h45.",
      },
      {
        title: "Règlement de course",
        content: "Retrouvez notre règlement de course",
      },
    ],
    rightSection: [
      {
        title: "Tarifs & Bulletin d’inscription",
        content:
          "10 € (par CB en ligne et en espèce ou chèque sur place). Bulletin d’inscription à télécharger ICI",
      },
      {
        title: "Pièces à fournir",
        content:
          "Une Licence conforme et en cours de validité ou un PPS (Parcours Prévention Santé), document déclaratif remplaçant le certificat médical. Ce document s’obtient depuis le lien suivant  https://pps.athle.fr. Il suffit de répondre au questionnaire et de télécharger une attestation de déclaration en fin de process. Il est à fournir lors de l’inscription.",
      },
      {
        title: "Pour les mineurs",
        content:
          "Autorisation parentale (à télécharger ICI). Questionnaire de santé (à télécharger ICI) ou certificat médical datant de moins de 6 mois",
      },
    ],
  },
  route: {
    imgPath: "@/images/10km-sem-map.jpeg",
  },
};

export const RACES: RacePage[] = [RACE_RUN_10K];
