import { StaticImageData } from "next/image";
import avata2 from "@/assets/images/avata2.png";
import mark5 from "@/assets/images/mark5.png";
import mavic3pro from "@/assets/images/mavic3pro.png"; // Falls du ein Bild hast, ansonsten als String belassen

export interface Drone {
  src: StaticImageData | string;
  alt: string;
  title: string;
  name: string;
  description: string;
  highlights?: string[];
  pros?: string[];
  cons?: string[];
}

export const drones: Drone[] = [
  {
    src: avata2,
    alt: "avata2",
    name: "DJI Avata 2",
    title: "Perfekte Stabilität & immersive Aufnahmen",
    description:
      "Die DJI Avata 2 liefert stabile 4K/100FPS-Aufnahmen. Mit Propellerschutz ideal für sichere Flüge in Innenräumen oder bei Events.",
    highlights: [
      "DJI Avata 2",
      "4K/100FPS",
      "Propellerschutz",
      "Innenräume",
      "Events",
    ],
    pros: ["Sehr stabil", "Einfache Steuerung", "Sicherer Flug"],
    cons: [
      "Begrenzte Reichweite",
      "Kurze Akkulaufzeit",
      "Kein Wechselobjektiv",
    ],
  },
  {
    src: mark5,
    alt: "mark5",
    name: "5'' FPV-Drohne",
    title: "Maximale Dynamik & Geschwindigkeit",
    description:
      "Die 5'' FPV-Drohne liefert rasante 4K/120FPS-Aufnahmen und kann eine Action-Kamera tragen. Perfekt für Verfolgungsszenen und spektakuläre Perspektiven.",
    highlights: [
      "5'' FPV-Drohne",
      "4K/120FPS",
      "Action-Kamera",
      "Verfolgungsszenen",
      "spektakuläre Perspektiven",
    ],
    pros: ["Sehr agil", "Hohe Geschwindigkeit", "Kompakte Größe"],
    cons: ["Schwierige Steuerung", "Kurze Flugzeit", "Hoher Crash-Risiko"],
  },
  {
    src: mavic3pro,
    alt: "mavic3pro",
    name: "DJI Mavic 3 Pro",
    title: "5.1K HDR-Luftaufnahmen mit Triple-Kamera",
    description:
      "Die DJI Mavic 3 Pro bietet gestochen scharfe 5.1K/50FPS-Aufnahmen mit HDR. Ideal für professionelle Film- und Fotoaufnahmen.",
    highlights: [
      "DJI Mavic 3 Pro",
      "5.1K/50FPS",
      "HDR",
      "Film",
      "Fotoaufnahmen",
    ],
    pros: [
      "Hervorragende Bildqualität",
      "Lange Flugzeit",
      "Mehrere Brennweiten",
    ],
    cons: ["Relativ groß", "Teuer", "Nicht wendig"],
  },
];
