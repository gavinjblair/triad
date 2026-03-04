"use client";

import { cn } from "@/lib/cn";

export type TabItem = {
  value: string;
  label: string;
};

type Variant = "underline" | "pill";

type Props = {
  items: readonly TabItem[];
  value: string;
  onValueChange: (value: string) => void;
  variant?: Variant;
  className?: string;
};

export function Tabs({
  items,
  value,
  onValueChange,
  variant = "underline",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-msp-border bg-white",
        variant === "pill" && "mx-auto w-fit shadow-sm",
        className,
      )}
    >
      <div
        className={cn(
          "flex overflow-auto",
          variant === "underline" && "justify-start px-2",
          variant === "pill" && "justify-center gap-1 p-1",
        )}
      >
        {items.map((item) => {
          const active = item.value === value;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onValueChange(item.value)}
              className={cn(
                "whitespace-nowrap transition-colors",
                variant === "underline" &&
                  "border-b-2 border-transparent px-4 py-4 text-[13px] font-semibold text-msp-muted hover:text-msp-ink",
                variant === "underline" &&
                  active &&
                  "border-msp-blue text-msp-ink",
                variant === "pill" &&
                  "rounded-md px-4 py-2.5 text-[12px] font-semibold text-msp-muted hover:bg-msp-surface-alt hover:text-msp-ink",
                variant === "pill" &&
                  active &&
                  "bg-[#4e8cf2] text-white hover:bg-[#4e8cf2] hover:text-white",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
