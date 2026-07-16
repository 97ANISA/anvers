export interface PlanetData {
  id: string;
  title: string;
  subtitle: string;

  color: string;

  size: number;

  orbit: number;

  speed: number;

  theme: string;
}

export const planets: PlanetData[] = [
  {
    id: "mercury",
    title: "Mercury",
    subtitle: "The Beginning",
    color: "#B8B8B8",
    size: 18,
    orbit: 120,
    speed: 8,
    theme: "Purpose",
  },

  {
    id: "venus",
    title: "Venus",
    subtitle: "Love & Kindness",
    color: "#E8B974",
    size: 24,
    orbit: 180,
    speed: 12,
    theme: "Love",
  },

  {
    id: "earth",
    title: "Earth",
    subtitle: "Home",
    color: "#4EA8DE",
    size: 26,
    orbit: 250,
    speed: 16,
    theme: "Life",
  },

  {
    id: "mars",
    title: "Mars",
    subtitle: "Strength",
    color: "#D04E4E",
    size: 22,
    orbit: 330,
    speed: 20,
    theme: "Strength",
  },

  {
    id: "jupiter",
    title: "Jupiter",
    subtitle: "Wisdom",
    color: "#D5A176",
    size: 42,
    orbit: 430,
    speed: 28,
    theme: "Wisdom",
  },

  {
    id: "saturn",
    title: "Saturn",
    subtitle: "Time",
    color: "#D8C27A",
    size: 38,
    orbit: 540,
    speed: 35,
    theme: "Time",
  },

  {
    id: "uranus",
    title: "Uranus",
    subtitle: "Different",
    color: "#8DE1E7",
    size: 34,
    orbit: 660,
    speed: 45,
    theme: "Identity",
  },

  {
    id: "neptune",
    title: "Neptune",
    subtitle: "Dreams",
    color: "#4A70E6",
    size: 34,
    orbit: 770,
    speed: 55,
    theme: "Dreams",
  },

  {
    id: "pluto",
    title: "Pluto",
    subtitle: "Letting Go",
    color: "#ECECEC",
    size: 12,
    orbit: 880,
    speed: 70,
    theme: "Acceptance",
  },
];