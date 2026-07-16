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
        "Welcome.\n\nYou've travelled\na long way\nto get here.\n\nI'm Mercury.",

      indonesian:
        "Selamat datang.\n\nKamu telah menempuh\nperjalanan yang panjang\nuntuk sampai di sini.\n\nAku adalah Merkurius.",

      button: "Begin Journey",
    },

    {
      id: "beginning",
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
      id: "about-me",
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
      id: "heat",
      type: "story",

      eyebrow: "A Story",

      title: "",

      english:
        "Many believe\nbeing closer to the light\nmakes life easier.\n\nI learned the opposite.",

      indonesian:
        "Banyak yang percaya\nsemakin dekat dengan cahaya,\nhidup akan menjadi lebih mudah.\n\nAku justru belajar sebaliknya.",

      button: "Continue",
    },

    {
      id: "reflection",
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
      id: "lesson",
      type: "reflection",

      eyebrow: "Life Lesson",

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

      title: "",

      english:
        "Tell me...\n\nWhat is one step\nyou've been afraid\nto take?",

      indonesian:
        "Coba renungkan...\n\nLangkah apa\nyang selama ini\nkamu takut\nuntuk ambil?",

      button: "Continue",
    },

    {
      id: "goodbye",
      type: "reflection",

      eyebrow: "Farewell",

      title: "",

      english:
        "Take that step.\n\nNo journey\nbegins with certainty.\n\nIt begins\nwith courage.",

      indonesian:
        "Ambillah langkah itu.\n\nTidak ada perjalanan\nyang dimulai\ndengan kepastian.\n\nSemuanya dimulai\ndengan keberanian.",

      button: "Continue",
    },

    {
      id: "ending",
      type: "ending",

      eyebrow: "☿ Mercury",

      title: "Until We Meet Again",

      english:
        "I'll keep moving\naround the Sun.\n\nMaybe...\n\nit's your turn\nto move forward.",

      indonesian:
        "Aku akan terus\nmengelilingi Matahari.\n\nMungkin...\n\nsekarang giliranmu\nuntuk melangkah maju.",

      button: "Return to Galaxy",
    },
  ],
};