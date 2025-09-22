import {
  externalLinksSchema,
  type ExternalLinks,
} from "@/data_files/navigation/externalLinks/schema";

export const externalLinks: ExternalLinks = {
  registration:
    "https://fr.milesrepublic.com/event/les-chemins-du-melantois-2692",
  registrantsList:
    "https://fr.milesrepublic.com/registrants/7b132950-613a-41ab-a1aa-a09332abef18",
  sportsRegulations:
    "https://drive.google.com/file/d/1Vsg-6oMnoK4aV6WU4SKiGCQtKMf9U6YP/view",
  rewardsSummary:
    "https://drive.google.com/file/d/1O0emjGEev_PK5kp0InbYi97MUyXbU3Iy/view",
  pps: "https://pps.athle.fr",
  registrationForm:
    "https://drive.google.com/file/d/1jSWdNn1mdBcu7uIX36LZ2IO5DKhvHaNx/view",
  healthQuestionnaire:
    "https://drive.google.com/file/d/1Do0APrhF2uyEtuNfBvApSosbLSQaqN6h/view",
  parentalConsentForm:
    "https://drive.google.com/file/d/1Dzo98Z8ux2bZa1uR2D8lDSd2tXnNp70B/view",
  edition2025: {
    trace900mPeronne:
      "https://drive.google.com/file/d/1k49m8EhDZEVyvSmPLekSd5AyeuZrK7T-/view",
    trace900mSainghin:
      "https://drive.google.com/file/d/19UOg6khBYYQgmZEIRdQgxvGMq-aE-V8C/view",
    trace10km:
      "https://drive.google.com/file/d/1Qz-piBjGoQ7jHu6FxfO30TLAn8JATZru/view",
    trace5km:
      "https://drive.google.com/file/d/1ziGUKrEfpMk1LaMxYXpmCl48_JZPySYu/view",
    traceRunAndBike:
      "https://drive.google.com/file/d/1N4POCdKh9YlkTZTJHRrQBbUJv2enp1Ar/view",
    traceMaps:
      "https://www.google.fr/maps/d/u/0/edit?mid=1YDOG0-5eHR_vzE_yyXufJq-fc0YbTdA",
  },
  edition2024: {
    youtubeVideo: "https://youtu.be/JSbhbnNtyr8?si=1WUyL2MXtpcpsgbP",
    googlePhotoAlbum: "https://photos.app.goo.gl/3Q6nZiEE1nganQ2G8",
    aSportPage: "http://asport-timing.com/live/chemins-melantois-2024",
  },
  edition2023: {
    googlePhotoAlbum: "https://photos.app.goo.gl/2qFFEmykrpoDL6R9A",
    aSportPage: "http://asport-timing.com/live/chemins-melantois-2023",
  },
  edition2022: {
    proLiveSportPage:
      "https://www.prolivesport.fr/index.php?chap=event&sub=liveV3&eventId=807",
  },
  edition2019: {
    googlePhotoAlbum: "https://photos.app.goo.gl/a4T2keL3KJbHG9yw5",
    googleDriveResultsFile:
      "https://drive.google.com/file/d/17yTd18cnWKm_kuXSySaw0T-OYukFAgBQ/view",
  },
  edition2018: {
    googlePhotoAlbum: "https://photos.app.goo.gl/D7Mzsf99KEkMPkXg9",
    googleDriveResultsFile:
      "https://drive.google.com/file/d/1iQrx-swxy37J-8IabnzNJ7p3BQjAYPBx/view",
  },
  edition2017: {
    googlePhotoAlbum: "https://photos.app.goo.gl/41c8kvRGvkvwvVbAA",
    googleDriveResultsFile:
      "https://drive.google.com/file/d/13V7VPyPgNhWXiqFAfOOt-LXpBvS0cAXv/view",
  },
  facebook: "https://www.facebook.com/lescheminsdumelantois",
  instagram:
    "https://www.instagram.com/lescheminsdumelantois?igsh=dnN3ZnBvMmJ5bW96",
} as const;

externalLinksSchema.parse(externalLinks);

export type ExternalLinkKey = keyof typeof externalLinks;
