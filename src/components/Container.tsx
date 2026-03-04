import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"div"> & {
  size?: "shell" | "content";
};

export function Container({ className, size = "content", ...props }: Props) {
  return (
    <div
      className={cn(size === "shell" ? "msp-container" : "msp-content", className)}
      {...props}
    />
  );
}
