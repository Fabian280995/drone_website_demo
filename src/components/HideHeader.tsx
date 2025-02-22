"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";

function AutoHideHeader() {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Nach unten scrollen => Header verstecken
        if (currentScrollY > 120) setIsHidden(true);
      } else {
        // Nach oben scrollen => Header einblenden
        setIsHidden(false);
      }

      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 left-0 right-0 z-50 flex items-center bg-white vertical-padding-sm horizontal-padding-lg",
        // Übergangsanimation
        "transition-transform duration-300 ease-in-out",
        // Bei isHidden nach oben rausfahren, sonst Position 0
        isHidden ? "-translate-y-full" : "translate-y-0",
        isScrolled ? "shadow-md" : "shadow-none"
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between w-full ">
        <Logo />
        <Navigation />
      </MaxWidthWrapper>
    </header>
  );
}

export default AutoHideHeader;
