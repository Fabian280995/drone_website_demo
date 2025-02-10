import { StaticImageData } from "next/image";
import avata2 from "@/assets/images/avata2.png";
import mark5 from "@/assets/images/mark5.png";

export interface Drone {
  src: StaticImageData | string;
  alt: string;
  title: string;
  name: string;
  description: string;
  highlights?: string[];
}

export const drones: Drone[] = [
  {
    src: avata2,
    alt: "avata2",
    name: "DJI Avata 2",
    title: "Perfekte Stabilität & immersive Aufnahmen",
    description:
      "Die DJI Avata 2 liefert stabile und flüssige 4K-Aufnahmen mit bis zu 100FPS. Dank des Propellerschutzes ist sie perfekt für sichere Flüge in Innenräumen oder in der Nähe von Menschen.",
    highlights: [
      "DJI Avata 2",
      "4K/100FPS",
      "stabile und flüssige Aufnahmen",
      "Propellerschutz",
      "sichere Flüge",
      "Innenräume",
      "weiche Kamerafahrten",
      "hochwertige Imagefilme",
      "Eventaufnahmen",
    ],
  },
  {
    src: mark5,
    alt: "mark5",
    name: "5'' FPV-Drohne",
    title: "Ultimative Dynamik & Geschwindigkeit",
    description:
      "Die 5'' FPV-Drohne liefert rasante, dynamische Luftaufnahmen mit bis zu 4K/120FPS. Zusätzlich kann sie eine hochauflösende Action-Kamera tragen, um Aufnahmen in bester Qualität zu liefern. Sie ist schnell, wendig und perfekt für actionreiche Verfolgungsszenen oder spektakuläre Perspektiven.",
    highlights: [
      "5'' FPV-Drohne",
      "4K/120FPS",
      "dynamische Luftaufnahmen",
      "hochauflösende Action-Kamera",
      "beste Qualität",
      "schnell und wendig",
      "actionreiche Verfolgungsszenen",
      "spektakuläre Perspektiven",
      "kompakte Größe",
      "enge Lücken",
      "Hindernisse",
    ],
  },
];
