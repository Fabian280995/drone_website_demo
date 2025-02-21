import { NavLinks } from "@/data/navLinks";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React from "react";
import SidebarNavigation from "./SidebarNavigation";
import { Button } from "./ui/button";

function Navigation() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  // Funktion, um nach oben zu scrollen, wenn "Home" geklickt wird
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Verhindert das Standard-Anchor-Verhalten
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrollt sanft nach oben
    setSidebarOpen(false);
  };
  return (
    <nav>
      <div className="lg:hidden">
        <Button
          className=""
          variant={"ghost"}
          size={"icon"}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="text-gray-700" />
          ) : (
            <Menu className="text-gray-700" />
          )}
        </Button>
        <SidebarNavigation
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        >
          <ul className="flex flex-col gap-y-4">
            {NavLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  onClick={
                    link.title === "Home"
                      ? handleHomeClick
                      : () => {
                          setSidebarOpen(false);
                        }
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
        </SidebarNavigation>
      </div>
      <ul className="hidden lg:flex gap-x-4">
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
  );
}

export default Navigation;
