import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Size = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
type Unit = "em" | "rem" | "px";

interface Props {
  top?: Size;
  left?: Size;
  right?: Size;
  bottom?: Size;
  vertical?: Size;
  horizontal?: Size;
  unit?: Unit;
  className?: string;
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
  const size: { [key: string]: number } = {
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
        paddingTop: !vertical
          ? top
            ? `${size[top] + unit}`
            : undefined
          : `${size[vertical] + unit}`,
        paddingBottom: !vertical
          ? bottom
            ? `${size[bottom] + unit}`
            : undefined
          : `${size[vertical] + unit}`,
        paddingLeft: !horizontal
          ? left
            ? `${size[left] + unit}`
            : undefined
          : `${size[horizontal] + unit}`,
        paddingRight: !horizontal
          ? right
            ? `${size[right] + unit}`
            : undefined
          : `${size[horizontal] + unit}`,
      }}
      className={cn(className)}
    >
      {children}
    </div>
  );
}

export default PaddingBox;
