import {
  FrequentlyAskedQuestionsSchema,
  type FrequentlyAskedQuestion,
} from "@/data_files/faq/schema";

const faqs: FrequentlyAskedQuestion[] = [
  {
    question: "Les courses sont-elles labellisées ?",
    answer:
      "Seule la course du 10 km bénéficie d'un label départemental. Les autres formats ne sont pas labellisés.",
  },
  {
    question: "Quelle est la fréquence des ravitaillements ?",
    answer:
      "Le parcours du 10 km propose 4 points de ravitaillement répartis équitablement. Le 5 km dispose d'un point unique. Les autres courses n'ont pas de ravitaillement prévu.",
  },
  {
    question: "Où puis-je me garer ?",
    answer:
      "Le stationnement est interdit dans le centre de Sainghin-en-Mélantois, mais le parking du stade est accessible avant 9h.",
  },
  {
    question: "Que contient le sac coureur remis avant le départ ?",
    answer:
      "Chaque participant reçoit un petit cadeau surprise au moment de la remise des dossards. Les enfants inscrits aux courses de 900 m repartent quant à eux avec une médaille.",
  },
  {
    question: "Où puis-je consulter mes résultats après la course ?",
    answer:
      "Les résultats seront publiés sur notre site dans la rubrique « Après-course » et accessibles via notre site partenaire.",
  },
];

export const faqsData = FrequentlyAskedQuestionsSchema.parse(faqs);
