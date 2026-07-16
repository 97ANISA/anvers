import { JourneyData } from "@/types/Journey";

export const earthJourney: JourneyData = {
  id: "earth",

  chapter: "Chapter III",

  title: "Home",

  theme: "earth",

  pages: [
    {
      id: "opening",
      type: "opening",

      eyebrow: "🌍 Earth",

      title: "",

      english:
        "You came back.\n\nWelcome home.",

      indonesian:
        "Kamu kembali.\n\nSelamat pulang.",

      button: "Begin Journey",
    },

    {
      id: "story-1",
      type: "story",

      eyebrow: "Chapter III",

      title: "Home",

      english:
        "I'm Earth.\n\nI've been here\nfor a very long time.\n\nLong enough\nto know...\n\nEveryone needs\nsomewhere\nto return.",

      indonesian:
        "Aku adalah Bumi.\n\nAku sudah ada\ndi sini\nsejak lama.\n\nCukup lama\nuntuk tahu...\n\nSetiap orang\nmembutuhkan\nsebuah tempat\nuntuk pulang.",

      button: "Continue",
    },

    {
      id: "story-2",
      type: "story",

      eyebrow: "Who Am I?",

      title: "",

      english:
        "I've watched\nchildren\nbecome parents.\n\nParents\nbecome grandparents.\n\nThen...\n\nbecome memories.",

      indonesian:
        "Aku melihat\nanak-anak\ntumbuh menjadi orang tua.\n\nOrang tua\nmenjadi kakek dan nenek.\n\nLalu...\n\nmenjadi kenangan.",

      button: "Continue",
    },

    {
      id: "science",
      type: "science",

      eyebrow: "Astronomy",

      title: "The Blue Planet",

      english:
        "About seventy-one percent\nof me\nis water.\n\nThe rest...\n\nis where\nall your stories\nhappen.",

      indonesian:
        "Sekitar tujuh puluh satu persen\ndaritubuhku\nadalah air.\n\nSisanya...\n\nadalah tempat\nsemua cerita kalian\nterjadi.",

      button: "Continue",
    },

    {
      id: "story-3",
      type: "story",

      eyebrow: "A Story",

      title: "",

      english:
        "Every day...\n\nSomeone laughs.\n\nSomeone cries.\n\nSomeone falls in love.\n\nSomeone says goodbye.\n\nI keep them all.",

      indonesian:
        "Setiap hari...\n\nSeseorang tertawa.\n\nSeseorang menangis.\n\nSeseorang jatuh cinta.\n\nSeseorang berpamitan.\n\nAku menyimpan semuanya.",

      button: "Continue",
    },

    {
      id: "reflection-1",
      type: "reflection",

      eyebrow: "Reflection",

      title: "",

      english:
        "People think\nhome\nis a place.\n\nI think...\n\nit's a feeling.",

      indonesian:
        "Banyak orang\nmengira rumah\nadalah sebuah tempat.\n\nMenurutku...\n\nrumah adalah\nsebuah rasa.",

      button: "Continue",
    },

    {
      id: "reflection-2",
      type: "reflection",

      eyebrow: "Reflection",

      title: "",

      english:
        "You don't always\nfind home.\n\nSometimes...\n\nhome\nfinds you.",

      indonesian:
        "Kamu tidak selalu\nmenemukan rumah.\n\nTerkadang...\n\nrumahlah\nyang menemukanmu.",

      button: "Continue",
    },

    {
      id: "question",
      type: "question",

      eyebrow: "A Question",

      title: "",

      english:
        "When was the last time\n\nyou felt\ncompletely\nat home?",

      indonesian:
        "Kapan terakhir kali\n\nkamu merasa\nbenar-benar\npulang?",

      button: "Continue",
    },

    {
      id: "ending",
      type: "ending",

      eyebrow: "🌍 Earth",

      title: "Until We Meet Again",

      english:
        "Take care\nof your home.\n\nI'm doing\nmy best\n\nto take care\nof you.",

      indonesian:
        "Jagalah rumahmu.\n\nAku juga\nsedang berusaha\n\nmenjagamu.",

      button: "Return to Galaxy",
    },
  ],
};