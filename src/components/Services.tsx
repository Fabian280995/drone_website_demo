import PaddingBox from "./layout/PaddingBox";

import Image from "next/image";
import Textblock from "./ui/Textblock";

import { Drone, drones } from "@/data/drones";
import { Service, services } from "@/data/services";
import { Spec, specs } from "@/data/specs";

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
  return (
    <div id="services" className="bg-gray-100/40">
      <PaddingBox vertical="lg" className="mt-[10rem] max-w-7xl mx-auto p-8">
        <p className="text-2xl md:text-4xl text-center">
          Die <b>beste Technik</b> für Ihr <b>Projekt</b>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {drones.map((drone: Drone, index: number) => (
            <DroneSystem
              key={drone.src.toString() + "_" + index}
              drone={drone}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-12 mt-12">
          {specs.map((spec: Spec, index: number) => (
            <Image
              key={spec.src.toString() + "_" + index}
              src={spec.src}
              alt={spec.alt}
              height={100}
              width={100}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12 mt-10 mx-auto">
          {services.map((service: Service, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition"
            >
              <service.icon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-500 mt-2">{service.alt}</p>
            </div>
          ))}
        </div>
      </PaddingBox>
    </div>
  );
}

export default Services;
