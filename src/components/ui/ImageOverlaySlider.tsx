"use client";

import React, { useRef, useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";
import { Button } from "./button";

interface ImageOverlaySliderProps {
  beforeImage: ImageProps; // Bild ohne Color Grading (unten)
  afterImage: ImageProps; // Bild mit Color Grading (oben)
}

const ImageOverlaySlider: React.FC<ImageOverlaySliderProps> = ({
  beforeImage,
  afterImage,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderValue, setSliderValue] = useState(50); // Prozentuale Position (50% Startwert)
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current || !isDragging) return;

    let clientX = 0;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const { left, width } = containerRef.current.getBoundingClientRect();
    let newValue = ((clientX - left) / width) * 100;
    newValue = Math.max(0, Math.min(100, newValue)); // Begrenzung zwischen 0% und 100%

    setSliderValue(newValue);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <Image
        {...beforeImage}
        alt={beforeImage.alt || "Before Image"}
        className="absolute inset-0 h-full aspect-video object-cover"
      />
      <div className="absolute inset-0 bg-transparent" />

      <motion.div
        className="absolute inset-0"
        style={{
          width: `${sliderValue}%`,
          overflow: "hidden",
        }}
      >
        <div className="relative h-full aspect-video">
          <Image
            {...afterImage}
            alt={afterImage.alt || "After Image"}
            className="w-full h-full object-left object-cover"
          />
          <div className="absolute inset-0 bg-transparent" />
        </div>
      </motion.div>

      <div
        className="absolute inset-0 flex items-center"
        style={{ left: `${sliderValue}%` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div className="absolute h-full w-[4px] bg-white/50 hover:bg-gray-100 hover:w-[8px] shadow-md cursor-pointer transform -translate-x-1/2" />
      </div>
      <div className="absolute top-0 right-0">
        <Button
          onClick={() => setSliderValue(50)}
          variant={"ghost"}
          size={"icon"}
          className="hover:bg-transparent"
        >
          <RefreshCcw className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default ImageOverlaySlider;
