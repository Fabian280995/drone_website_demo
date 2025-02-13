"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface WobblyFrameProps {
  src: StaticImageData | string;
  alt?: string;
  className?: string;
}

export default function WobblyFrame({
  src,
  alt = "",
  className,
}: WobblyFrameProps) {
  return (
    <motion.div
      initial={{ rotate: 0, scale: 1 }}
      whileHover={{
        rotate: [-2, 2, -1, 1, 0], // Wobble-Effekt
        scale: [1, 1.05, 1], // Leichtes Pulsieren
        transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
      }}
      className={cn(
        "relative w-64 h-64 md:w-96 md:h-96 rounded-[45%_55%_50%_40%/50%_40%_60%_50%] overflow-hidden shadow-2xl shadow-gray-300",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center"
        placeholder="blur"
      />
    </motion.div>
  );
}
