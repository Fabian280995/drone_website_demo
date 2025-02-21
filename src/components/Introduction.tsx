import profileImage from "@/assets/images/profilbild.jpeg";
import Textblock from "./ui/Textblock";
import WobblyFrame from "./ui/WobblyFrame";
import SectionWrapper from "./layout/SectionWrapper";

function Introduction() {
  const paragraphs = [
    {
      text: `Hallo, mein Name ist Fabian Lessmann und ich bin professioneller Drohnen- und FPV-Pilot aus Hilden. Meine Leidenschaft gilt der Luft-Videographie und der Kunst, spektakuläre Perspektiven aus der Luft einzufangen.`,
      highlightedWords: ["Fabian Lessmann", "Hilden"],
    },
    {
      text: `Mit modernster Drohnentechnologie erstelle ich beeindruckende Aufnahmen für verschiedenste Projekte – von Imagefilmen über Event-Dokumentationen bis hin zu dynamischen FPV-Shots, die atemberaubende Geschwindigkeit und Präzision vereinen.`,
      highlightedWords: ["Imagefilmen", "Event-Dokumentationen", "FPV-Shots"],
    },
    {
      text: `Ob für Unternehmen, Filmproduktionen oder kreative Projekte – ich bringe Ihre Vision aus der Luft in Perfektion auf den Bildschirm. Lassen Sie uns gemeinsam einzigartige Perspektiven entdecken!`,
      highlightedWords: ["einzigartige Perspektiven"],
    },
  ];

  return (
    <SectionWrapper id="introduction">
      <div className="flex items-center justify-center max-w-5xl mx-auto text-center">
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
          {paragraphs.map(({ text, highlightedWords }, index) => (
            <Textblock
              key={index}
              text={text}
              highlightedWords={highlightedWords}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Introduction;
