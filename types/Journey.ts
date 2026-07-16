export type JourneyPageType =
  | "opening"
  | "story"
  | "science"
  | "reflection"
  | "question"
  | "ending";

export interface JourneyPage {
  id: string;

  type: JourneyPageType;

  eyebrow: string;

  title?: string;

  english: string;

  indonesian?: string;

  button: string;
}

export interface JourneyData {
  id: string;

  chapter: string;

  title: string;

  theme: string;

  pages: JourneyPage[];
}