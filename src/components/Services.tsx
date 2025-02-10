import React from "react";
import PaddingBox from "./layout/PaddingBox";
import avata2 from "@/assets/images/avata2.png";
import mark5 from "@/assets/images/mark5.png";
import djiLogo from "@/assets/systems/dji-logo.png";
import goproLogo from "@/assets/systems/gopro-logo.png";

import Image, { StaticImageData } from "next/image";
import Textblock from "./ui/Textblock";

type Drone = {
  src: StaticImageData | string;
  alt: string;
  title: string;
  name: string;
  description: string;
  highlights?: string[];
};

type Spec = {
  src: StaticImageData | string;
  alt: string;
};

interface DroneSystemProps {
  drone: Drone;
}

const DroneSystem = ({ drone }: DroneSystemProps) => {
  const { src, alt, title, description, highlights, name } = drone;
  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      <Image
        src={src}
        alt={alt}
        height={320}
        width={320}
        className="object-cover object-center"
      />
      <p className="text-center text-lg font-semibold text-gray-500">{name}</p>
      <h4 className="text-center mb-8 font-semibold">{title}</h4>
      <Textblock
        text={description}
        highlightedWords={highlights}
        className="text-center text-base"
      />
    </div>
  );
};

function Services() {
  const drones: Drone[] = [
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

  const specs: Spec[] = [
    {
      src: djiLogo,
      alt: "DJI Logo",
    },
    {
      src: goproLogo,
      alt: "GoPro Logo",
    },
  ];

  return (
    <div id="services" className="bg-primary/5">
      <PaddingBox vertical="xl" horizontal="2xl" className="mt-[10rem]">
        <p className="text-2xl md:text-4xl text-center">
          Die <b>beste Technik</b> für Ihr <b>Projekt</b>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {drones.map((drone, index) => (
            <DroneSystem
              key={drone.src.toString() + "_" + index}
              drone={drone}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-12 mt-12">
          {specs.map((spec, index) => (
            <Image
              key={spec.src.toString() + "_" + index}
              src={spec.src}
              alt={spec.alt}
              height={100}
              width={100}
            />
          ))}
        </div>
      </PaddingBox>
    </div>
  );
}

export default Services;
