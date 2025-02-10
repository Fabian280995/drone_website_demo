import { StaticImageData } from "next/image";
import djiLogo from "@/assets/systems/dji-logo.png";
import goproLogo from "@/assets/systems/gopro-logo.png";

export interface Spec {
  src: StaticImageData | string;
  alt: string;
}

export const specs: Spec[] = [
  {
    src: djiLogo,
    alt: "DJI Logo",
  },
  {
    src: goproLogo,
    alt: "GoPro Logo",
  },
];
