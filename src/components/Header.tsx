"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Logo from "./Logo";
import PaddingBox from "./layout/PaddingBox";
import { initialize } from "next/dist/server/lib/render-server";

const NavLinks = [
  { title: "Home", href: "#home" },
  { title: "Leistungen", href: "#services" },
  { title: "Galerie", href: "#gallery" },
  { title: "Kontakt", href: "#contact" },
];

function Header() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if scroll position is beyond 100vh
      setIsScrolledPastHero(scrollTop > windowHeight + 40);

      // Update text color for navigation
      if (scrollTop < windowHeight) {
        controls.start({ color: "white" });
      } else {
        controls.start({ color: "black" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const charMotion = {
    initial: { y: 0 },
    hover: { y: -1, color: "rgb(125 211 252)" },
  };

  return (
    <motion.header
      className={`absolute top-0 z-50 w-full h-20 flex items-center transition-colors duration-500 ${
        isScrolledPastHero
          ? "bg-white/75 backdrop-blur-md" // Weißer Hintergrund mit Blur
          : "bg-transparent" // Transparenter Hintergrund in der Hero-Section
      }`}
    >
      <PaddingBox
        vertical="sm"
        horizontal="xl"
        className="w-full flex justify-between items-center"
      >
        <div className="flex items-center space-x-2">
          <Logo isScrolledPastHero={isScrolledPastHero} />
        </div>
        <nav>
          <ul className="flex space-x-4">
            {NavLinks.map((link) => (
              <motion.li key={link.title}>
                <motion.a
                  href={link.href}
                  className="font-geist text-2xl transition-colors duration-300"
                  initial={{ color: "white" }} // Startfarbe Weiß
                  animate={controls} // Dynamische Farbänderung
                  whileHover={"hover"}
                >
                  {link.title.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      variants={charMotion}
                      transition={{ delay: index * 0.035 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </PaddingBox>
    </motion.header>
  );
}

export default Header;
