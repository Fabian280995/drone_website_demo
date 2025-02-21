"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";

function Header() {
  const previousScroll = useRef(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > previousScroll.current && scrollTop > 100) {
        setIsScrolled(true);
      } else if (scrollTop < previousScroll.current && scrollTop < 100) {
        setIsScrolled(false);
      }

      previousScroll.current = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        `fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-200 bg-white`,
        isScrolled ? "h-[4rem] md:h-[6rem]" : "h-[6rem] md:h-[10rem]"
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between w-full horizontal-padding-lg">
        <Logo />
        <Navigation />
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
