import React from "react";
import PaddingBox from "./layout/PaddingBox";
import avata2 from "@/assets/images/avata2.png";
import mark5 from "@/assets/images/mark5.png";
import djiLogo from "@/assets/systems/dji-logo.png";
import goproLogo from "@/assets/systems/gopro-logo.png";

import Image, { StaticImageData } from "next/image";

interface Drone {
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
  systems?: {
    src: StaticImageData | string;
  }[];
}

const DroneSystem = ({ src, alt, title, description, systems }: Drone) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={src}
        alt={alt}
        height={320}
        width={320}
        className="object-cover object-center"
      />
      {systems && systems?.length > 0 && (
        <div className="flex space-x-4 mt-4">
          {systems.map((system, index) => (
            <Image
              key={system.src.toString() + alt + index}
              src={system.src}
              alt={system.src.toString()}
              height={64}
              width={64}
              className="object-cover object-center bg-red-200"
            />
          ))}
        </div>
      )}
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-lg text-center leading-relaxed tracking-wide text-gray-700">
        {description}
      </p>
    </div>
  );
};

function Services() {
  const drones = [
    {
      src: avata2,
      alt: "avata2",
      title: "avata2",
      description: "avata2",
      systems: [
        {
          src: djiLogo,
        },
      ],
    },
    {
      src: mark5,
      alt: "mark5",
      title: "mark5",
      description: "mark5",
      systems: [
        {
          src: djiLogo,
        },
        {
          src: goproLogo,
        },
      ],
    },
  ];

  return (
    <div id="services" className="">
      <PaddingBox top="xl" bottom="lg" horizontal="2xl" className="mt-[10rem]">
        <p className="text-2xl md:text-4xl text-center">
          Die <b>beste Technik</b> für Ihr <b>Projekt</b>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
          {drones.map((drone, index) => (
            <DroneSystem
              key={drone.src.toString() + "_" + index}
              src={drone.src}
              alt={drone.alt}
              title={drone.title}
              description={drone.description}
            />
          ))}
        </div>
      </PaddingBox>
    </div>
  );
}

export default Services;
