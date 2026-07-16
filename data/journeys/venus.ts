import { JourneyData } from "@/types/Journey";

export const venusJourney: JourneyData = {
  id: "venus",

  chapter: "Chapter II",

  title: "The Mirror",

  theme: "venus",

  pages: [
    {
      id: "opening",
      type: "opening",

      eyebrow: "♀ Venus",

      title: "",

      english:
        "Welcome.\n\nI'm Venus.\n\nPeople know me\nas the brightest\nplanet in the sky.",

      indonesian:
        "Selamat datang.\n\nAku adalah Venus.\n\nBanyak orang mengenalku\nsebagai planet\npaling terang di langit.",

      button: "Begin Journey",
    },

    {
      id: "story-1",
      type: "story",

      eyebrow: "Chapter II",

      title: "The Mirror",

      english:
        "Every night,\nI glow.\n\nBut none of\nthat light\nbelongs to me.",

      indonesian:
        "Setiap malam,\naku bersinar.\n\nNamun tak satu pun\ncahaya itu\nbenar-benar milikku.",

      button: "Continue",
    },

    {
      id: "story-2",
      type: "story",

      eyebrow: "Who Am I?",

      title: "",

      english:
        "I don't create\nmy own light.\n\nI simply\nreflect\nsomeone else's.",

      indonesian:
        "Aku tidak\nmenciptakan\ncahayaku sendiri.\n\nAku hanya\nmemantulkan\ncahaya yang lain.",

      button: "Continue",
    },

    {
      id: "science",
      type: "science",

      eyebrow: "Astronomy",

      title: "The Brightest Planet",

      english:
        "Venus shines\nso brightly\nbecause thick clouds\nreflect sunlight.\n\nThat's why\nI'm often called\nEarth's sister.",

      indonesian:
        "Venus tampak\nsangat terang\nkarena awannya\nmemantulkan cahaya Matahari.\n\nKarena ukurannya,\naku juga sering disebut\nsaudara Bumi.",

      button: "Continue",
    },

    {
      id: "story-3",
      type: "story",

      eyebrow: "A Story",

      title: "",

      english:
        "People admire\nmy beauty.\n\nFew know\nmy skies\nare filled\nwith poison.",

      indonesian:
        "Banyak orang\nmengagumi keindahanku.\n\nSedikit yang tahu\nlangitku\npenuh racun.",

      button: "Continue",
    },

    {
      id: "reflection-1",
      type: "reflection",

      eyebrow: "Reflection",

      title: "",

      english:
        "Not everything\nbeautiful\nis peaceful.",

      indonesian:
        "Tidak semua\nyang indah\nselalu membawa ketenangan.",

      button: "Continue",
    },

    {
      id: "reflection-2",
      type: "reflection",

      eyebrow: "Reflection",

      title: "",

      english:
        "Sometimes\npeople smile\nbecause\nit's easier\nthan explaining\nwhat they feel.",

      indonesian:
        "Terkadang\nseseorang tersenyum\nkarena itu\nlebih mudah\ndaripada menjelaskan\napa yang ia rasakan.",

      button: "Continue",
    },

    {
      id: "question",
      type: "question",

      eyebrow: "A Question",

      title: "Look Within",

      english:
        "Tell me...\n\nHave you ever\nhidden your pain\nbehind\na beautiful smile?",

      indonesian:
        "Coba renungkan...\n\nPernahkah kamu\nmenyembunyikan rasa sakit\n di balik\nsebuah senyuman?",

      button: "Continue",
    },

    {
      id: "ending",
      type: "ending",

      eyebrow: "♀ Venus",

      title: "Until We Meet Again",

      english:
        "You don't need\nto shine\nfor everyone.\n\nThe people\nwho truly love you\nwill stay\nwhen your light\nbecomes dim.",

      indonesian:
        "Kamu tidak harus\nbersinar\nuntuk semua orang.\n\nMereka yang benar-benar\nmenyayangimu\nakan tetap tinggal\nbahkan ketika\ncahayamu meredup.",

      button: "Return to Galaxy",
    },
  ],
};