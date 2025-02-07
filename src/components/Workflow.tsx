"use client";
import PaddingBox from "./layout/PaddingBox";
import Video from "next-video";
import previewVideo from "/videos/Castle Appears in autnumnal and foggy forest.mp4";
import { motion } from "framer-motion";
import { Asset } from "next-video/dist/assets.js";
import { cn } from "@/lib/utils";

interface WorkFlowStepProps {
  title: string;
  description: string;
  videoSrc: Asset;
  inverted?: boolean;
  number?: number;
}

const WorkFlowStep = ({
  title,
  description,
  videoSrc,
  inverted = false,
  number = 0,
}: WorkFlowStepProps) => {
  const numberString: string = (number <= 9 ? "0" : "") + number.toString();
  const TextSection = () => (
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
          "absolute top-1/2 font-bold text-[8rem] md:text-[12rem] lg:text-[18rem] opacity-15 text-gray-400 -translate-y-1/2 -z-10",
          !inverted ? "left-0" : "right-0"
        )}
      >
        {numberString}
      </span>
      <h3 className={cn(`mb-2`, inverted ? "text-left" : "text-right")}>
        {title}
      </h3>
      <p
        className={cn(
          `text-lg lg:text-xl leading-relaxed`,
          inverted ? "text-left" : "text-right"
        )}
      >
        {description}
      </p>
    </motion.div>
  );

  const VideoSection = () => (
    <motion.div
      initial={{ opacity: 0, x: !inverted ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <Video src={videoSrc} controls={false} loop />
    </motion.div>
  );

  return (
    <PaddingBox vertical="md">
      <div className={cn("grid grid-cols-1 md:grid-cols-2")}>
        {!inverted && <TextSection />}
        <VideoSection />
        {inverted && <TextSection />}
      </div>
    </PaddingBox>
  );
};

function Workflow() {
  const workflowSteps = [
    {
      title: "Drehtag",
      description:
        "Am Drehtag setzen wir Ihre Ideen in die Realität um. Mit modernster Technik und einem Auge für Details erfassen wir beeindruckende Luft- und Bodenaufnahmen.",
      videoSrc: previewVideo,
    },
    {
      title: "Postproduktion",
      description:
        "In der Postproduktion veredeln wir Ihre Aufnahmen mit professionellem Color Grading, präzisem Schnitt und visuellen Effekten.",
      videoSrc: previewVideo,
    },
    {
      title: "Auslieferung",
      description:
        "Nach der Fertigstellung erhalten Sie die finalen Aufnahmen in höchster Qualität – perfekt abgestimmt auf Ihre Bedürfnisse.",
      videoSrc: previewVideo,
    },
  ];

  return (
    <section id="workflow" className="w-full h-full">
      <PaddingBox top="xl" bottom="lg" horizontal="xl" className="h-full">
        <p className="text-2xl md:text-4xl text-center">
          So erreichen wir <b>zusammen</b> das <b>beste Ergebnis</b>
        </p>
        <div className="flex flex-col justify-evenly h-full">
          {workflowSteps.map((service, index) => (
            <WorkFlowStep
              key={index}
              {...service}
              inverted={index % 2 !== 0}
              number={index + 1}
            />
          ))}
        </div>
      </PaddingBox>
    </section>
  );
}

export default Workflow;
