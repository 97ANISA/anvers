import { JourneyData } from "@/types/Journey";

export const marsJourney: JourneyData = {
  id: "mars",

  chapter: "Chapter IV",

  title: "The Explorer",

  theme: "mars",

  pages: [
    {
      id: "opening",
      type: "opening",

      eyebrow: "♂ Mars",

      title: "",

      english:
        "...\n\nYou made it.\n\nNot everyone\ncomes this far.\n\nI'm Mars.",

      indonesian:
        "...\n\nKamu sampai juga.\n\nTidak semua orang\nmau datang sejauh ini.\n\nAku adalah Mars.",

      button: "Begin Journey",
    },

    {
      id: "story-1",
      type: "story",

      eyebrow: "Chapter IV",

      title: "The Explorer",

      english:
        "People call me\nThe Red Planet.\n\nI don't mind.\n\nI've been called\nworse.",

      indonesian:
        "Orang-orang\nmemanggilku\nPlanet Merah.\n\nAku tidak keberatan.\n\nAku pernah dipanggil\nlebih buruk dari itu.",

      button: "Continue",
    },

    {
      id: "story-2",
      type: "story",

      eyebrow: "Who Am I?",

      title: "",

      english:
        "I'm dry.\n\nCold.\n\nQuiet.\n\nMost people\nthink\nI'm empty.",

      indonesian:
        "Aku kering.\n\nDingin.\n\nSunyi.\n\nBanyak orang\nmengira\naku kosong.",

      button: "Continue",
    },

    {
      id: "science",
      type: "science",

      eyebrow: "Astronomy",

      title: "The Red Planet",

      english:
        "My red color\ncomes from\niron oxide.\n\nThe same thing\nyou call...\n\nrust.",

      indonesian:
        "Warna merahku\nberasal dari\nbesi yang berkarat.\n\nHal yang sama\nyang kalian sebut...\n\nkarat.",

      button: "Continue",
    },

    {
      id: "story-3",
      type: "story",

      eyebrow: "A Story",

      title: "",

      english:
        "Humans\nhave dreamed\nof reaching me\nfor centuries.\n\nFunny...\n\nYou're always\ncurious about\nwhat's far away.",

      indonesian:
        "Manusia\ntelah bermimpi\nmencapai diriku\nselama berabad-abad.\n\nLucu ya...\n\nKalian selalu penasaran\npada sesuatu\nyang jauh.",

      button: "Continue",
    },

    {
      id: "reflection-1",
      type: "reflection",

      eyebrow: "Reflection",

      title: "",

      english:
        "Distance\nrarely stops people.\n\nFear does.",

      indonesian:
        "Jarak\njarang menghentikan seseorang.\n\nRasa takutlah\nyang melakukannya.",

      button: "Continue",
    },

    {
      id: "reflection-2",
      type: "reflection",

      eyebrow: "Reflection",

      title: "",

      english:
        "Every explorer\nstarts\nexactly the same way.\n\nOne step.",

      indonesian:
        "Setiap penjelajah\nselalu memulai\ndengan cara yang sama.\n\nSatu langkah.",

      button: "Continue",
    },

    {
      id: "question",
      type: "question",

      eyebrow: "A Question",

      title: "",

      english:
        "If fear\nwasn't there...\n\nWhere\nwould you go?",

      indonesian:
        "Kalau rasa takut\nmenghilang...\n\nKe mana\nkamu akan pergi?",

      button: "Continue",
    },

    {
      id: "ending",
      type: "ending",

      eyebrow: "♂ Mars",

      title: "Until We Meet Again",

      english:
        "I'll still be here.\n\nWaiting.\n\nExplorers\nalways come back.",

      indonesian:
        "Aku akan tetap di sini.\n\nMenunggu.\n\nPara penjelajah\nselalu kembali.",

      button: "Return to Galaxy",
    },
  ],
};