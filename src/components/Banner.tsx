"use client";
import { ArrowRightCircle } from "lucide-react";
import Video from "next-video";
import { PropsWithChildren } from "react";
import { Button } from "./ui/button";
import previewVideo from "/videos/Castle Appears in autnumnal and foggy forest.mp4";
import PaddingBox from "./layout/PaddingBox";

function Banner({ children }: PropsWithChildren<{}>) {
  const handleButtonClick = (destination: string) => {
    // scroll to section #contact
    const contactSection = document.getElementById(destination);
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PaddingBox bottom={"md"}>
      <div className="w-full h-[calc(100vh*0.36)] overflow-hidden mt-[10rem] flex items-center justify-center relative">
        <Video src={previewVideo} controls={false} muted={true} autoPlay loop />
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
      </div>
    </PaddingBox>
  );
}

export default Banner;

//;
