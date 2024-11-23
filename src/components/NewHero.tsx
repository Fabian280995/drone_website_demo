"use client";
import { easeIn, motion, useScroll, useTransform } from "framer-motion";
import Video from "next-video";
import { PropsWithChildren, useRef } from "react";
import GogglesView from "./GogglesView";
import PaddingBox from "./layout/PaddingBox";
import previewVideo from "/videos/foggy_castle_preview.mp4";
import { Button } from "./ui/button";

function Hero({ children }: PropsWithChildren<{}>) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.6], [0.95, 1]);
  const scrollFadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroBgScale = useTransform(scrollYProgress, [0, 1], [1, 1.5], {
    ease: easeIn,
  });

  const handleButtonClick = () => {
    // scroll to section #contact
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={container} className="h-[300vh] relative">
      <div className="h-[100vh] sticky top-0 overflow-hidden z-0">
        <div className="w-full h-full absolute t-0 flex items-center justify-center">
          <motion.div
            className="w-full h-full overflow-hidden relative"
            style={{
              scale: heroBgScale,
            }}
          >
            <Video src={previewVideo} controls={false} muted={true} autoPlay />
            <div className="bg-black/40 inset-0 absolute"></div>
          </motion.div>
        </div>
        <motion.div
          style={{
            opacity: scrollFadeOut,
          }}
          className="h-full"
        >
          <PaddingBox
            horizontal="xl"
            vertical="xl"
            className="flex flex-col justify-center items-start gap-4 h-full relative max-w-[100vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[60vw]"
          >
            <h1 className="text-white drop-shadow-lg text-[5rem] text-3xl md:text-5xl lg:text-6xl">
              Mit <span className="text-primary-foreground">Cine Eagle</span>{" "}
              neue Höhen erreichen!
            </h1>
            <p className="text-white text-lg lg:text-2xl leading-8 text-balance drop-shadow-md font-medium">
              Mein Name ist{" "}
              <span className="text-primary-foreground">Fabian Lessmann</span> –
              leidenschaftlicher Drohnenpilot und kreativer Filmemacher.
              Gemeinsam bringen wir Ihre Visionen in beeindruckenden Bildern zum
              Leben!
            </p>
            <Button
              variant={"default"}
              size={"lg"}
              className="bg-primary-foreground text-black font-semibold text-lg hover:scale-105 target:scale-95"
              onClick={handleButtonClick}
            >
              Jetzt kontaktieren
            </Button>
          </PaddingBox>
          <PaddingBox
            vertical="xs"
            horizontal="xl"
            className="absolute bottom-0 left-0 right-0 flex items-start justify-between h-[14vh]"
          >
            <div className=""></div>
            <GogglesView />
          </PaddingBox>
        </motion.div>
      </div>

      <motion.div
        style={{
          opacity: scrollOpacity,
        }}
        className="h-[200vh] w-full bg-white z-20 absolute bottom-0"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Hero;

//;
