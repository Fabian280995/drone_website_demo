import React from "react";
import Logo from "./Logo";

const NavLinks = [
  { title: "Home", href: "#home" },
  { title: "Galerie", href: "#gallery" },
  { title: "Kontakt", href: "#contact" },
];

function Header() {
  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>
        <nav>
          <ul className="flex space-x-4">
            {NavLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="text-primary hover:text-gray-400 font-geist"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
