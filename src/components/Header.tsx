"use client";

import { cn } from "@/lib/utils";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import PaddingBox from "./layout/PaddingBox";

const NavLinks = [
  { title: "Home", href: "#home" },
  { title: "Leistungen", href: "#services" },
  { title: "Galerie", href: "#gallery" },
  { title: "Kontakt", href: "#contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if scroll position is beyond 100vh
      setIsScrolled(scrollTop > windowHeight - windowHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <header
      className={cn(
        `fixed top-0 z-50 w-full flex items-center transition-colors duration-200`,
        isScrolled ? "bg-white  shadow-md" : "bg-transparent"
      )}
    >
      <PaddingBox
        vertical="sm"
        horizontal="xl"
        className="w-full flex justify-between items-center"
      >
        <Logo dark={isScrolled} />
        <nav>
          <ul className="flex space-x-4">
            {NavLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className={cn(
                    "font-geist text-2xl transition-colors duration-200 group",
                    isScrolled ? "text-gray-900" : "text-white"
                  )}
                >
                  {link.title.split("").map((char, index) => (
                    <span
                      key={index}
                      className={`inline-block group-hover:text-primary-foreground delay-[${
                        index * 500
                      }ms]`}
                    >
                      {char}
                    </span>
                  ))}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PaddingBox>
    </header>
  );
}

export default Header;
