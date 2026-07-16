import { JourneyData } from "@/types/Journey";

export const mercuryJourney: JourneyData = {
  id: "mercury",

  chapter: "Chapter I",

  title: "The Beginning",

  theme: "mercury",

  pages: [
    {
      id: "opening",
      type: "opening",

      eyebrow: "☿ Mercury",

      title: "",

      english:
        "Welcome.\n\nI'm Mercury.",

      indonesian:
        "Selamat datang.\n\nAku adalah Merkurius.",

      button: "Begin Journey",
    },

    {
      id: "story-1",
      type: "story",

      eyebrow: "Chapter I",

      title: "The Beginning",

      english:
        "I may be the smallest planet.\n\nBut every journey\nhas to begin\nsomewhere.",

      indonesian:
        "Mungkin aku adalah planet yang paling kecil.\n\nNamun setiap perjalanan\nselalu dimulai\ndari suatu tempat.",

      button: "Continue",
    },

    {
      id: "story-2",
      type: "story",

      eyebrow: "Who Am I?",

      title: "",

      english:
        "People often notice\nhow small I am.\n\nFew notice\nhow much I endure.",

      indonesian:
        "Banyak orang hanya melihat\nbetapa kecil diriku.\n\nSedikit yang menyadari\nbetapa banyak yang harus kutanggung.",

      button: "Continue",
    },

    {
      id: "science",
      type: "science",

      eyebrow: "Astronomy",

      title: "Closest to the Sun",

      english:
        "I travel closer to the Sun\nthan any other planet.\n\nOne year for me\nlasts only\n88 Earth days.",

      indonesian:
        "Aku mengelilingi Matahari\nlebih dekat daripada\nplanet mana pun.\n\nSatu tahunku\nhanya berlangsung\n88 hari di Bumi.",

      button: "Continue",
    },

    {
      id: "story-3",
      type: "story",

      eyebrow: "A Story",

      title: "",

      english:
        "Many believe\nbeing closer to the light\nmakes life easier.\n\nI learned\nthe opposite.",

      indonesian:
        "Banyak orang percaya\nsemakin dekat dengan cahaya,\nhidup akan semakin mudah.\n\nAku justru belajar\nhal yang sebaliknya.",

      button: "Continue",
    },

    {
      id: "reflection-1",
      type: "reflection",

      eyebrow: "Reflection",

      title: "",

      english:
        "Being close to the light\nalso means\nbearing its greatest heat.",

      indonesian:
        "Dekat dengan cahaya\njuga berarti\nmenanggung panas\nyang paling besar.",

      button: "Continue",
    },

    {
      id: "reflection-2",
      type: "reflection",

      eyebrow: "Reflection",

      title: "",

      english:
        "Perhaps...\n\nYour hardest season\nis preparing you\nfor your brightest future.",

      indonesian:
        "Mungkin...\n\nMasa tersulitmu\nsedang mempersiapkanmu\nuntuk masa depan\nyang paling bersinar.",

      button: "Continue",
    },

    {
      id: "question",
      type: "question",

      eyebrow: "A Question",

      title: "Pause",

      english:
        "What is one step\nyou've been afraid\nto take?",

      indonesian:
        "Langkah apa\nyang selama ini\nkamu takut\nuntuk ambil?",

      button: "Continue",
    },

    {
      id: "ending",
      type: "ending",

      eyebrow: "☿ Mercury",

      title: "Until We Meet Again",

      english:
        "I'll keep moving.\n\nMaybe...\n\nit's your turn now.",

      indonesian:
        "Aku akan terus bergerak.\n\nMungkin...\n\nsekarang giliranmu.",

      button: "Return to Galaxy",
    },
  ],
};