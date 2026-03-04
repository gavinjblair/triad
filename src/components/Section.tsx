import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"section"> & {
  tone?: "default" | "hero" | "heroSoft";
};

export function Section({ className, tone = "default", ...props }: Props) {
  return (
    <section
      className={cn(
        "msp-section",
        tone === "hero" && "msp-hero",
        tone === "heroSoft" && "msp-hero-soft",
        className,
      )}
      {...props}
    />
  );
}

