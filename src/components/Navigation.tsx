import { NavLinks } from "@/data/navLinks";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import SidebarNavigation from "./SidebarNavigation";
import { buttonVariants } from "./ui/button";

function Navigation() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  // Funktion, um nach oben zu scrollen, wenn "Home" geklickt wird

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
        >
          <ul className="flex flex-col items-center gap-y-8 mt-6">
            {NavLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  onClick={() => {
                    setSidebarOpen(false);
                  }} // Scroll-Funktion nur für "Home"
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
          <ul className="flex flex-col items-center gap-y-2 mt-20 self-end">
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
      <ul className="hidden lg:flex gap-x-4">
        {NavLinks.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
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
  );
}

export default Navigation;
