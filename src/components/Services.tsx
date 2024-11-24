"use client";
import PaddingBox from "./layout/PaddingBox";
import Video from "next-video";
import previewVideo from "/videos/Castle Appears in autnumnal and foggy forest.mp4";
import { motion } from "framer-motion";
import { Asset } from "next-video/dist/assets.js";
import { cn } from "@/lib/utils";

interface ServiceSectionProps {
  title: string;
  description: string;
  videoSrc: Asset;
  inverted?: boolean;
  number?: number;
}

const ServiceSection = ({
  title,
  description,
  videoSrc,
  inverted = false,
  number = 0,
}: ServiceSectionProps) => {
  const numberString: string = (number <= 9 ? "0" : "") + number.toString();
  const TextSection = () => (
    <motion.div
      className={cn(
        "flex flex-col justify-center relative",
        inverted ? "items-start ml-8" : "items-end mr-8"
      )}
      initial={{ opacity: 0, x: !inverted ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <span
        className={cn(
          "absolute top-1/2 font-bebas-neue font-bold text-[8rem] md:text-[12rem] lg:text-[18rem] opacity-15 text-gray-400 -translate-y-1/2 -z-10",
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
      viewport={{ once: true, amount: 0.8 }}
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

function Services() {
  const services = [
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
    <section id="services" className="w-full h-full">
      <PaddingBox top="xl" bottom="lg" horizontal="xl" className="h-full">
        <h2 className="text-center">So arbeiten wir!</h2>
        <div className="flex flex-col justify-evenly h-full">
          {services.map((service, index) => (
            <ServiceSection
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

export default Services;
