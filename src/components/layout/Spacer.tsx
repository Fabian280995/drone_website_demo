import React from "react";
import { cn } from "@/lib/utils"; // deine Utility-Funktion zum Zusammenführen von Klassen

type SpacerSize = "sm" | "md" | "lg" | "xl" | "2xl";

interface SpacerProps {
  /** Definiert die Höhe des Spacers */
  size?: SpacerSize;
  /** Optional weitere Klassen */
  className?: string;
}

/**
 * Erzeugt einen leeren Block ("Spacer") mit dynamischer Höhe,
 * gesteuert über die size-Prop (sm, md, lg, xl, 2xl).
 */
export default function Spacer({ size = "md", className }: SpacerProps) {
  // Mapping von size => Tailwind-Höhenklassen
  const heightClasses: Record<SpacerSize, string> = {
    sm: "h-4", // entspricht 1rem
    md: "h-8", // entspricht 2rem
    lg: "h-12", // entspricht 3rem
    xl: "h-16", // entspricht 4rem
    "2xl": "h-24", // entspricht 6rem
  };

  return <div className={cn(heightClasses[size], className)} />;
}
