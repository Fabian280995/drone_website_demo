import { NavLinks as NavLinksData } from "@/data/navLinks";
import { cn } from "@/lib/utils";

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const handleOnClick = () => {
    if (onClick) onClick();
  };

  return NavLinksData.map((link) => (
    <li key={link.title}>
      <a
        href={link.href}
        onClick={handleOnClick}
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
  ));
};

export default NavLinks;
