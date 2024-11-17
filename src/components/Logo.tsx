import React from "react";

const Logo: React.FC = () => {
  return (
    <h1
      className="uppercase font-audiowide text-2xl font-black leading-5"
      aria-label="Cinematic Eagle FPV - Logo"
    >
      <div className="tracking-[0.095em]">
        <span className="text-black" role="text">
          CINE
        </span>
        <span className=" text-gray-300" role="text">
          MATICS
        </span>
      </div>
      <div className="tracking-tight">
        <span className=" text-black" role="text">
          EAGLE
        </span>
        <span className=" text-gray-300" role="text">
          DRONE
        </span>
      </div>
    </h1>
  );
};

export default Logo;
