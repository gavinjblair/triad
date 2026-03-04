"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
};

export function Accordion({ items, defaultOpenId, className }: Props) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className={cn("divide-y divide-msp-border", className)}>
      {items.map((item) => {
        const open = item.id === openId;
        return (
          <div key={item.id} className="py-5">
            <button
              type="button"
              onClick={() => setOpenId(open ? null : item.id)}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <span className="text-[20px] font-bold tracking-[-0.01em] text-msp-ink">
                {item.title}
              </span>
              <span className="mt-1 select-none text-[19px] text-msp-muted">
                {open ? "−" : "+"}
              </span>
            </button>
            {open ? <p className="mt-3 text-[15px] leading-7 text-msp-muted">{item.content}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
