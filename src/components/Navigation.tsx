import { Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
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
          className="flex flex-col items-center justify-between"
        >
          <ul className="flex flex-col items-center gap-y-8 mt-10">
            <NavLinks
              onClick={() => {
                setSidebarOpen(false);
              }}
            />
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
        <NavLinks />
      </ul>
    </nav>
  );
}

export default Navigation;
