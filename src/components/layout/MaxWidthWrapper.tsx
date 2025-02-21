import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";
import PaddingBox from "./PaddingBox";

interface MaxWidthWrapperProps {
  className?: string;
}

function MaxWidthWrapper({
  children,
  className,
}: PropsWithChildren<MaxWidthWrapperProps>) {
  return (
    <PaddingBox horizontal={"sm"} className="w-full">
      <div className={cn("w-full max-w-screen-3xl mx-auto ", className)}>
        {children}
      </div>
    </PaddingBox>
  );
}

export default MaxWidthWrapper;
