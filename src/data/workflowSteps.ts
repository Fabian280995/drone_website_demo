import { Asset } from "next-video/dist/assets.js";

import previewVideo from "/videos/Castle Appears in autnumnal and foggy forest.mp4";

export type WorkflowStep = {
  title: string;
  description: string;
  videoSrc: Asset;
  highlighted?: string[];
};

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Briefing",
    description:
      "In einem ersten Gespräch lernen wir Ihre Wünsche und Anforderungen kennen und entwickeln gemeinsam ein Konzept für Ihr Projekt.",
    videoSrc: previewVideo,
    highlighted: ["Gespräch", "Wünsche", "Anforderungen"],
  },
  {
    title: "Drehtag",
    description:
      "Am Drehtag setzen wir Ihre Ideen in die Realität um. Mit modernster Technik und einem Auge für Details erfassen wir beeindruckende Luft- und Bodenaufnahmen.",
    videoSrc: previewVideo,
    highlighted: ["modernster Technik", "Luft", "Bodenaufnahmen"],
  },
  {
    title: "Postproduktion",
    description:
      "In der Postproduktion veredeln wir Ihre Aufnahmen mit professionellem Color Grading, präzisem Schnitt und visuellen Effekten.",
    videoSrc: previewVideo,
    highlighted: ["Color Grading", "Schnitt", "visuellen Effekten"],
  },
  {
    title: "Auslieferung",
    description:
      "Nach der Fertigstellung erhalten Sie die finalen Aufnahmen in höchster Qualität – perfekt abgestimmt auf Ihre Bedürfnisse.",
    videoSrc: previewVideo,
    highlighted: ["höchster Qualität", "Ihre Bedürfnisse"],
  },
];
