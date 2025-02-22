"use client";

import { useState } from "react";
import { Service, services } from "@/data/services";
import FlipCard from "./ServiceFlipCard";
import { Button } from "./button";

function ServicesList() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices: Service[] = showAll ? services : services.slice(0, 3);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 my-16 mx-auto">
        {visibleServices.map((service: Service, index: number) => (
          <FlipCard key={service.title + "_" + index} service={service} />
        ))}
      </div>

      {services.length > 3 && (
        <Button
          variant={"ghost"}
          size={"lg"}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Weniger anzeigen" : "Mehr anzeigen"}
        </Button>
      )}
    </div>
  );
}

export default ServicesList;
