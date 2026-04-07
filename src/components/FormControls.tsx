import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

export function Label({
  className,
  ...props
}: ComponentPropsWithoutRef<"label">) {
  return (
    <label
      className={cn("text-[15px] font-semibold tracking-[-0.01em] text-msp-ink", className)}
      {...props}
    />
  );
}

export function Input({
  className,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={cn(
        "msp-input w-full",
        className,
      )}
      {...props}
    />
  );
}

export function Select({
  className,
  ...props
}: ComponentPropsWithoutRef<"select">) {
  return (
    <select
      className={cn(
        "msp-input w-full appearance-none pr-10",
        className,
      )}
      {...props}
    />
  );
}

export function Checkbox({
  className,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      type="checkbox"
      className={cn(
        "msp-checkbox rounded-[3px] text-msp-blue",
        className,
      )}
      {...props}
    />
  );
}

export function Radio({
  className,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      type="radio"
      className={cn("msp-radio rounded-full text-msp-blue", className)}
      {...props}
    />
  );
}
