"use client";

import React, { useRef, useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RefreshCcw } from "lucide-react";
import { Button } from "./button";

interface ImageOverlaySliderProps {
  beforeImage: ImageProps;
  afterImage: ImageProps;
  initialSliderValue?: number;
}

const ImageOverlaySlider: React.FC<ImageOverlaySliderProps> = ({
  beforeImage,
  afterImage,
  initialSliderValue = 50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderValue, setSliderValue] = useState(initialSliderValue); // Prozentuale Position (50% Startwert)
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
        <div className="absolute h-full w-[64px] cursor-col-resize transform -translate-x-1/2">
          <ChevronLeft className="w-6 h-6 text-white/80 absolute top-1/2 right-3/4 animate-pulse" />
          <ChevronRight className="w-6 h-6 text-white/80 absolute top-1/2 left-3/4 animate-pulse" />
        </div>
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
