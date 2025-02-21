"use client";
import { ArrowRightCircle } from "lucide-react";
import Video from "next-video";
import { useRef } from "react";
import PaddingBox from "./layout/PaddingBox";
import { Button } from "./ui/button";
import previewVideo from "/videos/Castle Appears in autnumnal and foggy forest.mp4";
import { motion } from "framer-motion";

function Banner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleButtonClick = (destination: string) => {
    // scroll to section #contact
    const contactSection = document.getElementById(destination);
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PaddingBox bottom={"md"}>
      <motion.div
        className="w-full h-[calc(100vh*0.36)] overflow-hidden mt-[4rem] md:mt-[10rem] flex items-center justify-center relative"
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
      >
        <Video
          src={previewVideo}
          controls={false}
          muted
          autoPlay
          loop
          ref={videoRef}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center ">
          <h2 className="text-white font-medium mb-4">Eine neue Perspektive</h2>
          <Button
            variant={"default"}
            size={"lg"}
            className="text-white p-8"
            onClick={() => handleButtonClick("contact")}
          >
            <ArrowRightCircle />
            Jetzt kontaktieren
          </Button>
        </div>
      </motion.div>
    </PaddingBox>
  );
}

export default Banner;

//;
