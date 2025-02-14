"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Video from "next-video";
import { Asset } from "next-video/dist/assets.js";
import Image, { StaticImageData } from "next/image";
import { use, useEffect, useRef, useState } from "react";
import Textblock from "./Textblock";

interface WorkflowStepTextAreaProps {
  inverted?: boolean;
  number?: number;
  title: string;
  description: string;
  highlightedWords: string[];
}

export const WorkflowStepTextArea = ({
  inverted = false,
  number = 0,
  title,
  description,
  highlightedWords,
}: WorkflowStepTextAreaProps) => {
  const numberString: string = (number <= 9 ? "0" : "") + number.toString();
  return (
    <motion.div
      className={cn(
        "flex flex-col justify-center relative bg-transparent",
        inverted ? "items-start ml-8" : "items-end mr-8"
      )}
      initial={{ opacity: 0, x: !inverted ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span
        className={cn(
          "absolute top-1/2 font-bold text-[6rem] md:text-[8rem] lg:text-[12rem] xl:text-[18rem] opacity-15 text-gray-400 -translate-y-1/2 z-0",
          !inverted ? "left-0" : "right-0"
        )}
      >
        {numberString}
      </span>
      <h3 className={cn(`mb-2`, inverted ? "text-left" : "text-right")}>
        {title}
      </h3>
      <Textblock
        text={description}
        highlightedWords={highlightedWords}
        className={cn("max-w-5xl", inverted ? "text-left" : "text-right")}
      />
    </motion.div>
  );
};

interface WorkflowStepVideoAreaProps {
  inverted?: boolean;
  videoSrc: Asset;
}

export const WorkflowStepVideoArea = ({
  inverted = false,
  videoSrc,
}: WorkflowStepVideoAreaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: !inverted ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => {
        if (videoRef.current) {
          videoRef.current.muted = true; // Muted für Autoplay aktivieren
          videoRef.current
            .play()
            .catch((err) => console.warn("Autoplay blockiert:", err));
        }
      }}
      onViewportLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="aspect-video"
    >
      <Video
        ref={videoRef}
        src={videoSrc}
        controls={false}
        muted
        loop={true}
        accentColor="#497D74"
      />
    </motion.div>
  );
};

interface WorkflowStepImageAreaProps {
  inverted?: boolean;
  src: StaticImageData | string;
  alt: string;
}

export const WorkflowStepImageArea = ({
  inverted = false,
  src,
  alt,
}: WorkflowStepImageAreaProps) => (
  <motion.div
    initial={{ opacity: 0, x: !inverted ? 100 : -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "circOut" }}
    className="aspect-video "
  >
    <Image
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-center"
      placeholder="blur"
    />
  </motion.div>
);
