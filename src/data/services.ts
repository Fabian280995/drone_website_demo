import {
  Building,
  Flag,
  Car,
  Bike,
  Camera,
  Film,
  AirVent,
  Landmark,
} from "lucide-react";
import immoImage from "@/assets/images/fly_through.jpg";
import sportOutdoorImage from "@/assets/images/from_above.jpg";
import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  alt: string;
  icon: LucideIcon;
  image?: StaticImageData | string;
}

export const services: Service[] = [
  {
    title: "Immobilienaufnahmen",
    alt: "Professionelle Luftaufnahmen für Immobilien, Architektur und Exposés.",
    icon: Building,
    image: immoImage,
  },
  {
    title: "Sport- & Outdoor-Events",
    alt: "Dynamische FPV-Aufnahmen für Sportveranstaltungen, Wettkämpfe und Extremsport.",
    icon: Flag,
    image: sportOutdoorImage,
  },
  {
    title: "Motorsport & KFZ",
    alt: "High-Speed FPV-Drohnenflüge für Motorsport, Car Commercials und Verfolgungsszenen.",
    icon: Car,
  },
  {
    title: "Motorrad & Fahrrad",
    alt: "Rasante FPV-Verfolgung von Motorrädern, Mountainbikes oder Rennrädern.",
    icon: Bike,
  },
  {
    title: "Werbung & Marketing",
    alt: "Kreative Drohnenaufnahmen für Werbespots, Imagefilme und Social Media.",
    icon: Camera,
  },
  {
    title: "Film & TV-Produktionen",
    alt: "Professionelle Luftaufnahmen für Filmprojekte, Musikvideos und Serien.",
    icon: Film,
  },
  {
    title: "Indoor & Werksflüge",
    alt: "Sichere FPV-Drohnenflüge in Produktionshallen, Fabriken und engen Räumen.",
    icon: AirVent,
  },
  {
    title: "Tourismus & Landschaft",
    alt: "Beeindruckende Drohnenbilder für Hotels, Resorts und Outdoor-Abenteuer.",
    icon: Landmark,
  },
];
