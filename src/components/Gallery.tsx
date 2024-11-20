"use client";
import React from "react";
import { Button } from "./ui/button";
import ZoomParallax from "./ZoomParallax";

function Gallery() {
  return (
    <section id="gallery" className="bg-slate-100 pt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-audiowide font-bold text-primary">
          Leistungen
        </h2>
      </div>
      <ZoomParallax />
    </section>
  );
}

export default Gallery;
