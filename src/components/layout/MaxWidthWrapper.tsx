import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

interface MaxWidthWrapperProps {
  className?: string;
}

function MaxWidthWrapper({
  children,
  className,
}: PropsWithChildren<MaxWidthWrapperProps>) {
  return (
    <div className={cn("w-full px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
