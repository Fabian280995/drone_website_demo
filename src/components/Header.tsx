"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import PaddingBox from "./layout/PaddingBox";

const NavLinks = [
  { title: "Home", href: "#home" },
  { title: "Leistungen", href: "#services" },
  { title: "Zusammenarbeit", href: "#workflow" },
  { title: "Galerie", href: "#gallery" },
  { title: "Kontakt", href: "#contact" },
];

function Header() {
  const previousScroll = useRef(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > previousScroll.current && scrollTop > 10) {
        setIsScrolled(true);
      } else if (scrollTop < previousScroll.current && scrollTop === 0) {
        setIsScrolled(false);
      }

      previousScroll.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funktion, um nach oben zu scrollen, wenn "Home" geklickt wird
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Verhindert das Standard-Anchor-Verhalten
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrollt sanft nach oben
  };

  return (
    <header
      className={cn(
        `fixed top-0 z-50 w-full flex items-center transition-all duration-200 bg-white`,
        isScrolled ? "h-[6rem]" : "h-[10rem]"
      )}
    >
      <PaddingBox
        vertical="sm"
        horizontal="xl"
        className="w-full flex justify-between items-center"
      >
        <Logo />
        <nav>
          <ul className="flex space-x-4">
            {NavLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  onClick={link.title === "Home" ? handleHomeClick : undefined} // Scroll-Funktion nur für "Home"
                  className={cn(
                    "uppercase text-xl transition-colors duration-200 group text-gray-400"
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
