import React from "react";
import PaddingBox from "./layout/PaddingBox";
import WobblyFrame from "./ui/WobblyFrame";
import profileImage from "@/assets/images/goggles.jpg";

function Introduction() {
  return (
    <PaddingBox top="md" vertical="lg" horizontal="xl">
      <div className="flex items-center justify-center max-w-6xl mx-auto text-center">
        <p className="text-2xl md:text-4xl">
          Ihr Partner für <b>dynamische</b> und{" "}
          <b>hochqualitative Drohnenaufnahmen</b>
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12 mt-12">
        <div className="flex items-center justify-center">
          <WobblyFrame
            src={profileImage}
            alt="Wackelnder Rahmen"
            className="max-w-sm"
          />
        </div>
        <div className="flex flex-col gap-6 max-w-2xl text-lg leading-relaxed tracking-wide text-gray-700">
          <p>
            Hallo, mein Name ist <strong>Fabian Lessmann</strong> und ich bin
            professioneller Drohnen- und FPV-Pilot aus <strong>Hilden</strong>.
            Meine Leidenschaft gilt der Luft-Videographie und der Kunst,
            spektakuläre Perspektiven aus der Luft einzufangen.
          </p>

          <p>
            Mit modernster Drohnentechnologie erstelle ich beeindruckende
            Aufnahmen für verschiedenste Projekte – von Imagefilmen über
            Event-Dokumentationen bis hin zu dynamischen FPV-Shots, die
            atemberaubende Geschwindigkeit und Präzision vereinen.
          </p>

          <p>
            Ob für Unternehmen, Filmproduktionen oder kreative Projekte – ich
            bringe Ihre Vision aus der Luft in Perfektion auf den Bildschirm.
            Lassen Sie uns gemeinsam einzigartige Perspektiven entdecken!
          </p>
        </div>
      </div>
    </PaddingBox>
  );
}

export default Introduction;
