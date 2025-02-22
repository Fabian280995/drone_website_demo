import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const LegalInfo = ({
  children,
  title,
  className,
}: PropsWithChildren<{ title?: string; className?: string }>) => {
  return (
    <div className={cn("mt-8", className)}>
      {title && <h2 className="font-semibold">{title}</h2>}
      <div className=" border-l-4 border-primary pl-4 mt-4">{children}</div>
    </div>
  );
};

export default LegalInfo;
