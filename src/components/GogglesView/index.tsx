import React from "react";
import Akku from "./Akku";
import Receiving from "./Receiving";
import PaddingBox from "../layout/PaddingBox";
import GPS from "./GPS";
import Bitrate from "./Bitrate";
import Speed from "./Speed";

function GogglesView() {
  return (
    <PaddingBox className="opacity-70 max-md:scale-90">
      <div className="w-full h-full flex items-end justify-between flex-wrap gap-6">
        <div className="flex flex-col">
          {/* <div className="flex gap-12">
            <Speed speed="2.4" />
            <Speed pre="D" speed="16.2" />
          </div> */}
        </div>
        <div className="flex flex-row items-end">
          <Akku />
          <div className="flex flex-col gap-0 ml-8 mb-1">
            <Receiving text="RC" />
            <Receiving text="HD" />
          </div>
          <Bitrate />
          <GPS />
        </div>
      </div>
    </PaddingBox>
  );
}

export default GogglesView;
