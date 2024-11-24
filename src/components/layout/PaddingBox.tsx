import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
type Unit = "em" | "rem" | "px";

interface ResponsivePadding {
  default?: Size;
  sm?: Size;
  md?: Size;
  lg?: Size;
  xl?: Size;
}

interface Props {
  top?: ResponsivePadding | Size;
  left?: ResponsivePadding | Size;
  right?: ResponsivePadding | Size;
  bottom?: ResponsivePadding | Size;
  vertical?: ResponsivePadding | Size;
  horizontal?: ResponsivePadding | Size;
  unit?: Unit;
  className?: string;
}

function resolveResponsivePadding(
  size: ResponsivePadding | Size | undefined,
  key: keyof ResponsivePadding,
  unit: Unit,
  sizeMap: { [key: string]: number }
): string | undefined {
  if (!size) return undefined;
  if (typeof size === "string") {
    return `${sizeMap[size]}${unit}`;
  }
  return size[key] ? `${sizeMap[size[key]!]}${unit}` : undefined;
}

function PaddingBox({
  children,
  top,
  left,
  right,
  bottom,
  vertical,
  horizontal,
  unit = "rem",
  className,
}: PropsWithChildren<Props>) {
  const sizeMap: { [key: string]: number } = {
    xxs: 0.25,
    xs: 0.5,
    sm: 1,
    md: 2,
    lg: 4,
    xl: 8,
    "2xl": 16,
    "3xl": 32,
    "4xl": 64,
  };

  return (
    <div
      style={{
        paddingTop: resolveResponsivePadding(
          vertical || top,
          "default",
          unit,
          sizeMap
        ),
        paddingBottom: resolveResponsivePadding(
          vertical || bottom,
          "default",
          unit,
          sizeMap
        ),
        paddingLeft: resolveResponsivePadding(
          horizontal || left,
          "default",
          unit,
          sizeMap
        ),
        paddingRight: resolveResponsivePadding(
          horizontal || right,
          "default",
          unit,
          sizeMap
        ),
      }}
      className={cn(
        className,
        vertical && typeof vertical === "object"
          ? {
              "sm:pt-[1rem] sm:pb-[1rem]": vertical.sm,
              "md:pt-[2rem] md:pb-[2rem]": vertical.md,
              "lg:pt-[4rem] lg:pb-[4rem]": vertical.lg,
            }
          : "",
        horizontal && typeof horizontal === "object"
          ? {
              "sm:pl-[1rem] sm:pr-[1rem]": horizontal.sm,
              "md:pl-[2rem] md:pr-[2rem]": horizontal.md,
              "lg:pl-[4rem] lg:pr-[4rem]": horizontal.lg,
            }
          : ""
      )}
    >
      {children}
    </div>
  );
}

export default PaddingBox;
