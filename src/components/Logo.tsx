import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  isScrolledPastHero: boolean;
}

const Logo: React.FC<LogoProps> = ({ isScrolledPastHero }) => {
  return (
    <motion.h1
      className="uppercase font-audiowide text-2xl font-black leading-5 drop-shadow-md"
      aria-label="Cinematic Eagle FPV - Logo"
    >
      <div className="tracking-[0.095em]">
        <motion.span
          role="text"
          className="text-primary-foreground" // Initialfarbe: Weiß // Dynamische Animation
          transition={{ duration: 0.3 }} // Geschmeidige Transition
        >
          CINE
        </motion.span>
        <motion.span
          role="text"
          initial={{ color: "white" }}
          animate={{ color: isScrolledPastHero ? "black" : "white" }}
          transition={{ duration: 0.3 }}
        >
          MATICS
        </motion.span>
      </div>
      <div className="tracking-tight">
        <motion.span
          role="text"
          className="text-primary-foreground"
          transition={{ duration: 0.3 }}
        >
          EAGLE
        </motion.span>
        <motion.span
          role="text"
          initial={{ color: "white" }}
          animate={{ color: isScrolledPastHero ? "black" : "white" }}
          transition={{ duration: 0.3 }}
        >
          DRONE
        </motion.span>
      </div>
    </motion.h1>
  );
};

export default Logo;
