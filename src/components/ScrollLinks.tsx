import { ScrollLinks as ScrollLinksData } from "@/data/links";
import { cn } from "@/lib/utils";

interface Props {
  onClick: (id: string) => void;
}

const ScrollLinks = ({ onClick }: Props) => {
  return ScrollLinksData.map((link) => (
    <li key={link.title}>
      <button
        type="button"
        onClick={() => onClick(link.sectionId)}
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
      </button>
    </li>
  ));
};

export default ScrollLinks;
