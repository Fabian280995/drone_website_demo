import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface MaxWidthWrapperProps {
  className?: string;
}

function MaxWidthWrapper({
  children,
  className,
}: PropsWithChildren<MaxWidthWrapperProps>) {
  return (
    <div className={cn("max-w-screen-3xl mx-auto", className)}>{children}</div>
  );
}

export default MaxWidthWrapper;
