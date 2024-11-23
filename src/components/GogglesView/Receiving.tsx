import React from "react";

function Receiving({ text }: { text: string }) {
  return (
    <div className="flex items-end">
      <span className="text-white font-bold mr-2 leading-4 w-6 italic">
        {text}
      </span>
      <div className="flex gap-0.5 items-end">
        {[...Array(4)].map((_, index) => {
          return (
            <div
              key={index}
              style={{
                height: `calc(0.5rem * ${index / 1.8 + 0.5})`,
              }}
              className={`w-1 bg-white rounded-md`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Receiving;
