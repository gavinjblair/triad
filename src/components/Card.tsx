import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Props = ComponentPropsWithoutRef<"div"> & {
  variant?: "default" | "tight";
};

export function Card({ className, variant = "default", ...props }: Props) {
  return (
    <div
      className={cn(variant === "tight" ? "msp-card-tight" : "msp-card", className)}
      {...props}
    />
  );
}

