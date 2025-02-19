"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import HeaderBtns from "./HeaderBtns";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MaxWidthWrapper from "./layout/MaxWidthWrapper";

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

  return (
    <header
      className={cn(
        `fixed top-0 z-50 w-full flex items-center transition-all duration-200 bg-white`,
        isScrolled ? "h-[6rem]" : "h-[10rem]"
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between">
        <Logo />
        <Navigation />
        <HeaderBtns />
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
