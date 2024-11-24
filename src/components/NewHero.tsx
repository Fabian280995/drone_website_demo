"use client";
import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import Video from "next-video";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import GogglesView from "./GogglesView";
import PaddingBox from "./layout/PaddingBox";
import previewVideo from "/videos/Castle Appears in autnumnal and foggy forest.mp4";
import { Button } from "./ui/button";
import BackgroundVideo from "next-video/background-video";
import {
  ArrowBigRight,
  ArrowBigRightDash,
  ArrowRight,
  ArrowRightCircle,
  ChevronDown,
} from "lucide-react";

function Hero({ children }: PropsWithChildren<{}>) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.25], [0.5, 0.9]);
  const scrollFadeOut = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1, 1.5], {
    ease: easeIn,
  });

  const handleButtonClick = () => {
    // scroll to section #contact
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={container} className="h-[280vh] relative">
      <div className="h-[100vh] sticky top-0 overflow-hidden z-0 relative">
        <div className="w-full h-full absolute t-0 flex items-center justify-center z-0">
          <motion.div
            className="w-full h-full overflow-hidden relative"
            style={{
              scale: heroBgScale,
            }}
          >
            <Video src={previewVideo} controls={false} muted={true} />
            <div className="bg-black/35 inset-0 absolute"></div>
          </motion.div>
        </div>
        <motion.div
          style={{
            opacity: scrollFadeOut,
          }}
        >
          <PaddingBox
            horizontal="xl"
            className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col justify-end items-start max-w-[100vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw]"
          >
            <span className="text-white drop-shadow-lg text-[5rem] text-3xl md:text-5xl lg:text-6xl font-bebas-neue">
              Mit Cine Eagle neue Höhen erreichen!
            </span>
            <Button
              variant={"ghost"}
              size={"lg"}
              className="text-primary-foreground p-0 font-bold text-xl hover:scale-105 target:scale-95 hover:bg-transparent hover:text-primary transition-all"
              onClick={handleButtonClick}
            >
              <ArrowRightCircle />
              Jetzt kontaktieren
            </Button>
          </PaddingBox>
          <PaddingBox
            vertical="xs"
            horizontal="xl"
            className="absolute bottom-0 left-0 right-0 grid grid-cols-3 h-[14vh] "
          >
            <div className=""></div>
            <div className="h-full w-full flex items-center justify-center">
              <ChevronDown
                size={48}
                className="text-secondary-foreground opacity-100 animate-pulse"
              />
            </div>
            <div className="flex items-start justify-center ">
              <GogglesView />
            </div>
          </PaddingBox>
        </motion.div>
      </div>

      <div className="h-[180vh] w-full  absolute bottom-0 z-20">
        <motion.div
          style={{ opacity: scrollOpacity }}
          className="bg-white  absolute inset-0 -z-10"
        />
        <div className="opacity-100">{children}</div>
      </div>
    </div>
  );
}

export default Hero;

//;
