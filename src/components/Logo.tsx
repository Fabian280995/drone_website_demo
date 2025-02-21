import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="uppercase text-gray-900 flex flex-col font-medium"
      aria-label="Cinematic Eagle FPV - Logo"
    >
      <h1 className="tracking-[0.09em] leading-8">Fabian Lessmann</h1>
      <h2 className="text-lg md:text-xl xl:text-3xl tracking-[0.1em] text-gray-600">
        CineEagle
      </h2>
    </Link>
  );
};

export default Logo;
