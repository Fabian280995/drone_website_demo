"use client";
import { Service, services } from "@/data/services";
import React from "react";
import ServiceTile from "./ServiceTile";

function ServicesList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-10 mx-auto">
      {services.map((service: Service, index: number) => (
        <ServiceTile key={service.title + "_" + index} service={service} />
      ))}
    </div>
  );
}

export default ServicesList;
