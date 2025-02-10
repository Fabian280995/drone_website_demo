import { cn } from "@/lib/utils";
import React from "react";

interface TextblockProps {
  text: string;
  className?: string;
  highlightedWords?: string[];
}

function Textblock({ text, highlightedWords = [], className }: TextblockProps) {
  if (!highlightedWords.length) {
    return <div>{text}</div>;
  }

  // Erstelle eine Regex, um die Wörter unabhängig von Satzzeichen zu finden
  const wordRegex = new RegExp(`\\b(${highlightedWords.join("|")})\\b`, "gi");

  const parts = text.split(wordRegex);

  return (
    <p
      className={cn(
        "text-lg leading-relaxed tracking-wide text-gray-700",
        className
      )}
    >
      {parts.map((part, index) =>
        highlightedWords.some(
          (word) => word.toLowerCase() === part.toLowerCase()
        ) ? (
          <b key={index}>{part}</b>
        ) : (
          part
        )
      )}
    </p>
  );
}

export default Textblock;
