"use client";

import { Service } from "@/data/services";
import { useContactStore } from "@/store/useContactStore";
import Textblock from "./Textblock";

const ServiceTile = ({ service }: { service: Service }) => {
  const setSubject = useContactStore((state) => state.setSubject);

  const handleServiceClick = () => {
    setSubject(`Buchung: ${service.title}`);

    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm bg-white hover:shadow-lg transition cursor-pointer"
      onClick={handleServiceClick}
    >
      <service.icon className="h-12 w-12 text-primary" />
      <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
      <Textblock
        text={service.alt}
        className="text-sm text-gray-400 font-semibold mt-4 max-md:hidden"
      />
    </div>
  );
};

export default ServiceTile;
