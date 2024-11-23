import React from "react";

function Akku() {
  return (
    <div className="flex flex-col">
      <span className="text-white drop-shadow-md font-bold text-xl text-center italic">
        12,8 V
      </span>
      <div className="bg-white/10 rounded-xl  border-white border-2 p-1 relative shadow-md scale-90">
        <div className="w-[90%] h-6 bg-gray-600 rounded-md flex items-center justify-center rounded-r-none relative overflow-hidden">
          <div className="absolute w-full h-full bg-green-400 animate-pulse" />
          <span className="text-sm font-bold text-white drop-shadow-md italic ">
            90%
          </span>
        </div>
        <div className="absolute right-0 top-0 bg-white w-[0.46rem] h-4 translate-x-full translate-y-1/2 rounded-sm" />
      </div>
    </div>
  );
}

export default Akku;
