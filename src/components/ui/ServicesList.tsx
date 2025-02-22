"use client";

import { useState, useEffect } from "react";
import { Service, services } from "@/data/services";
import FlipCard from "./ServiceFlipCard";
import { Button } from "./button";

function ServicesList() {
  const [showAll, setShowAll] = useState(false);
  const [defaultVisibleCount, setDefaultVisibleCount] = useState(
    window.innerWidth >= 1536 ? 4 : 3
  );

  useEffect(() => {
    const updateVisibleCount = () => {
      setDefaultVisibleCount(window.innerWidth >= 1536 ? 4 : 3);
    };

    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visibleServices: Service[] = showAll
    ? services
    : services.slice(0, defaultVisibleCount);

  const scrollToServiceList = () => {
    const serviceListSection = document.getElementById("servicelist");
    serviceListSection?.scrollIntoView({
      behavior: "smooth",
      block: showAll ? "center" : "start",
    });
  };

  const handleShowButtonClick = () => {
    setShowAll(!showAll);
    setTimeout(scrollToServiceList, 100);
  };

  return (
    <div id="servicelist" className="flex flex-col items-center w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-12 my-8 md:my-16 mx-auto">
        {visibleServices.map((service: Service, index: number) => (
          <FlipCard key={service.title + "_" + index} service={service} />
        ))}
      </div>

      {services.length > defaultVisibleCount && (
        <Button
          variant="ghost"
          size="lg"
          onClick={handleShowButtonClick}
          className="text-secondary"
        >
          {showAll ? "Weniger anzeigen" : "Mehr anzeigen"}
        </Button>
      )}
    </div>
  );
}

export default ServicesList;
