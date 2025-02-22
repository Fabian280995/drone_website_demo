"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import ScrollLinks from "./ScrollLinks";
import SidebarNavigation from "./SidebarNavigation";
import { buttonVariants } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

function Navigation() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    // scroll to section
    const section = document.getElementById(id);
    console.log(section);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavLinkClick = (id: string) => {
    if (sidebarOpen) setSidebarOpen(false);
    if (pathname == "/") {
      scrollToSection(id);
      return;
    }

    router.replace("/");
    setTimeout(() => {
      scrollToSection(id);
    }, 300);
  };

  return (
    <nav>
      <div className="lg:hidden">
        <button
          className="size-12 justify-center items-center flex"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="text-gray-700" />
          ) : (
            <Menu className="text-gray-700" />
          )}
        </button>
        <SidebarNavigation
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          className="flex flex-col items-center justify-between"
        >
          <ul className="flex flex-col items-center gap-y-8 mt-10">
            <ScrollLinks onClick={handleNavLinkClick} />
          </ul>
          <ul className="flex flex-col items-center justify-center gap-y-2 mt-16">
            <li>
              <Link
                href="/impressum"
                onClick={() => {
                  setSidebarOpen(false);
                }}
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                onClick={() => {
                  setSidebarOpen(false);
                }}
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </SidebarNavigation>
      </div>
      <ul className="hidden lg:flex gap-x-4 ">
        <ScrollLinks onClick={handleNavLinkClick} />
      </ul>
    </nav>
  );
}

export default Navigation;
