"use client";

import { useId, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TabItem = {
  value: string;
  label: ReactNode;
};

type Variant = "underline" | "pill";

type Props = {
  items: readonly TabItem[];
  value: string;
  onValueChange: (value: string) => void;
  panelIdPrefix?: string;
  variant?: Variant;
  className?: string;
};

export function Tabs({
  items,
  value,
  onValueChange,
  panelIdPrefix,
  variant = "underline",
  className,
}: Props) {
  const autoIdPrefix = useId();
  const idPrefix = panelIdPrefix ?? `tabs-${autoIdPrefix}`;

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    if (!items.length) {
      return;
    }

    const lastIndex = items.length - 1;
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
    } else if (event.key === "ArrowLeft") {
      nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = lastIndex;
    } else {
      return;
    }

    event.preventDefault();
    const nextItem = items[nextIndex];
    if (!nextItem) {
      return;
    }

    onValueChange(nextItem.value);
    const nextTabButton = document.getElementById(`${idPrefix}-tab-${nextItem.value}`);
    if (nextTabButton instanceof HTMLButtonElement) {
      nextTabButton.focus();
    }
  };

  return (
    <div
      className={cn(
        "rounded-[8px] border border-msp-border bg-white",
        variant === "pill" && "mx-auto w-fit rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      <div
        role="tablist"
        aria-orientation="horizontal"
        className={cn(
          "flex overflow-auto",
          variant === "underline" && "justify-start px-2",
          variant === "pill" && "justify-center gap-2 p-1",
        )}
      >
        {items.map((item, index) => {
          const active = item.value === value;
          const tabId = `${idPrefix}-tab-${item.value}`;
          const panelId = panelIdPrefix ? `${idPrefix}-panel-${item.value}` : undefined;
          return (
            <button
              key={item.value}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={panelId}
              tabIndex={active ? 0 : -1}
              onClick={() => onValueChange(item.value)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              className={cn(
                "whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-msp-blue/30",
                variant === "underline" &&
                  "border-b-2 border-transparent px-4 py-4 text-[13px] font-semibold text-msp-muted hover:text-msp-ink",
                variant === "underline" &&
                  active &&
                  "border-msp-blue text-msp-ink",
                variant === "pill" &&
                  "rounded-full border border-transparent px-4 py-2 text-sm font-medium text-msp-muted hover:border-msp-border hover:bg-msp-surface-alt hover:text-msp-ink",
                variant === "pill" &&
                  active &&
                  "border-msp-blue bg-msp-blue text-white hover:bg-msp-blue hover:text-white",
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
