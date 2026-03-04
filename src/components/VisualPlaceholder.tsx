import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "blue" | "slate" | "green" | "amber" | "purple" | "dark";

const toneClass: Record<Tone, string> = {
  blue: "from-[#e8f3ff] to-[#d5e8ff]",
  slate: "from-[#edf1f6] to-[#e2e8f0]",
  green: "from-[#ecfaef] to-[#dff5e6]",
  amber: "from-[#fff7e5] to-[#faefd3]",
  purple: "from-[#f0ecff] to-[#e2dcff]",
  dark: "from-[#5f6774] to-[#3e4551]",
};

type Props = ComponentPropsWithoutRef<"div"> & {
  tone?: Tone;
  label?: string;
  children?: ReactNode;
};

export function VisualPlaceholder({ tone = "blue", label, className, children, ...props }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[10px] border border-msp-border bg-gradient-to-br",
        toneClass[tone],
        className,
      )}
      {...props}
    >
      <div className="msp-contour-bg absolute inset-0 opacity-60" />
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/45 blur-2xl" />
      <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/35 blur-xl" />
      {label ? (
        <div className="absolute left-3 top-3 rounded-md border border-white/70 bg-white/70 px-2 py-1 text-[10px] font-bold text-msp-muted">
          {label}
        </div>
      ) : null}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
