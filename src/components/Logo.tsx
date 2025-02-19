import React from "react";
import { motion } from "framer-motion";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <motion.h1
      className="uppercase text-gray-900 flex flex-col font-medium"
      aria-label="Cinematic Eagle FPV - Logo"
    >
      <span className="tracking-[0.09em] leading-8">Fabian Lessmann</span>
      <span className="text-lg md:text-xl xl:text-3xl tracking-[0.1em] text-gray-600">
        CineEagle
      </span>
    </motion.h1>
  );
};

export default Logo;
