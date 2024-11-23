import { Satellite } from "lucide-react";

function GPS() {
  return (
    <div className="flex justify-center items-start ml-6">
      <Satellite size={42} color="white" />
      <span className="text-white font-bold mr-2 leading-4 w-6 italic text-center -ml-1 text-md">
        24
      </span>
    </div>
  );
}

export default GPS;
