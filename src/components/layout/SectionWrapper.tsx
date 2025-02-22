import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface Props {
  id?: string;
  className?: string;
}

const SectionWrapper = ({
  children,
  id,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <section
      id={id}
      className={cn(
        // horizontal padding
        "horizontal-padding-lg",
        // vertical padding
        "vertical-padding-xl",
        className
      )}
    >
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </section>
  );
};

export default SectionWrapper;
