import React from "react";

function Speed({
  pre = "H",
  speed = "0.0",
  unit = "m/s",
}: {
  pre?: "H" | "D";
  speed?: string;
  unit?: string;
}) {
  return (
    <div className="flex items-center">
      <span className="text-white font-bold italic text-center text-2xl -mb-1">
        {pre + " "}
        {speed}
        {unit}
      </span>
    </div>
  );
}

export default Speed;
