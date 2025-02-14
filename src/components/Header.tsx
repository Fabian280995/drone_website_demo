"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import PaddingBox from "./layout/PaddingBox";
import { Button } from "./ui/button";

const NavLinks = [
  { title: "Home", href: "#home" },
  { title: "Leistungen", href: "#services" },
  { title: "Zusammenarbeit", href: "#workflow" },
  // { title: "Galerie", href: "#gallery" },
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
        <div className="flex-1 flex items-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
          <Logo />
          <nav>
            <ul className="flex space-x-4">
              {NavLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    onClick={
                      link.title === "Home" ? handleHomeClick : undefined
                    } // Scroll-Funktion nur für "Home"
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
        </div>
        <div className="flex items-center gap-2">
          <Button className="px-4 py-6 bg-white border-gray-700 border-2 hover:border-primary hover:text-white text-gray-700 text-sm">
            fabianlessmann@cineeagle.com
          </Button>
          <Button className="px-4 py-6 bg-white border-gray-700 border-2 hover:border-primary hover:text-white text-gray-700 text-sm">
            +49 151 16773509
          </Button>
        </div>
      </PaddingBox>
    </header>
  );
}

export default Header;
