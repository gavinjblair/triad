import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type UiPanelVariant = "dashboard" | "split" | "list" | "form" | "stats";
export type UiPanelTone = "blue" | "slate" | "green" | "amber" | "purple" | "dark";

const toneClass: Record<UiPanelTone, string> = {
  blue: "from-[#e8f3ff] to-[#d5e8ff]",
  slate: "from-[#edf1f6] to-[#e2e8f0]",
  green: "from-[#ecfaef] to-[#dff5e6]",
  amber: "from-[#fff7e5] to-[#faefd3]",
  purple: "from-[#f0ecff] to-[#e2dcff]",
  dark: "from-[#5f6774] to-[#3e4551]",
};

type Props = ComponentPropsWithoutRef<"div"> & {
  variant?: UiPanelVariant;
  tone?: UiPanelTone;
  label?: string;
  children?: ReactNode;
};

function PanelChrome({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 h-full w-full p-3">
      <div className="h-full rounded-[8px] border border-white/65 bg-white/55 p-3">{children}</div>
    </div>
  );
}

function DashboardVariant() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-2">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={`metric-${index}`} className="rounded-[6px] border border-[#dbe7f3] bg-white/90 px-2 py-1.5">
            <div className="h-1.5 w-10 rounded-full bg-[#8ab3e3]" />
            <div className="mt-2 h-2 w-8 rounded-full bg-[#dbe8f7]" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[1.15fr_0.85fr] gap-2">
        <div className="rounded-[7px] border border-[#dbe7f3] bg-white/90 p-2">
          <svg viewBox="0 0 180 82" className="h-full w-full">
            <polyline
              points="4,58 38,51 68,56 95,44 122,47 153,32 176,36"
              fill="none"
              stroke="#66a2e4"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="95" cy="44" r="3" fill="#66a2e4" />
            <circle cx="153" cy="32" r="3" fill="#66a2e4" />
          </svg>
        </div>
        <div className="grid gap-2">
          <div className="rounded-[7px] border border-[#dbe7f3] bg-white/90 p-2">
            <div className="h-1.5 w-12 rounded-full bg-[#8ab3e3]" />
            <div className="mt-2 h-6 rounded bg-[#eef5ff]" />
          </div>
          <div className="rounded-[7px] border border-[#dbe7f3] bg-white/90 p-2">
            <div className="h-1.5 w-10 rounded-full bg-[#8ab3e3]" />
            <div className="mt-2 h-6 rounded bg-[#eef5ff]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SplitVariant() {
  return (
    <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-2">
      <div className="grid gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={`split-row-${index}`} className="rounded-[6px] border border-[#dbe7f3] bg-white/90 px-2.5 py-2">
            <div className="h-1.5 w-12 rounded-full bg-[#8ab3e3]" />
            <div className="mt-2 h-1.5 w-full rounded-full bg-[#e7f0fb]" />
          </div>
        ))}
      </div>
      <div className="grid gap-2">
        <div className="rounded-[7px] border border-[#dbe7f3] bg-white/90 p-2">
          <div className="h-1.5 w-10 rounded-full bg-[#8ab3e3]" />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="h-7 rounded bg-[#eef5ff]" />
            <div className="h-7 rounded bg-[#eef5ff]" />
          </div>
        </div>
        <div className="rounded-[7px] border border-[#dbe7f3] bg-white/90 p-2">
          <div className="h-1.5 w-8 rounded-full bg-[#8ab3e3]" />
          <div className="mt-2 h-7 rounded bg-[#eef5ff]" />
        </div>
      </div>
    </div>
  );
}

function ListVariant() {
  return (
    <div className="grid h-full gap-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={`list-${index}`} className="flex items-center gap-2 rounded-[6px] border border-[#dbe7f3] bg-white/90 px-2 py-1.5">
          <div className="h-4 w-4 rounded-[4px] bg-[#dceafb]" />
          <div className="h-1.5 w-full rounded-full bg-[#e4eef9]" />
        </div>
      ))}
    </div>
  );
}

function FormVariant() {
  return (
    <div className="grid h-full grid-rows-[auto_auto_1fr_auto] gap-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="h-7 rounded-[6px] border border-[#dbe7f3] bg-white/90" />
        <div className="h-7 rounded-[6px] border border-[#dbe7f3] bg-white/90" />
      </div>
      <div className="h-7 rounded-[6px] border border-[#dbe7f3] bg-white/90" />
      <div className="rounded-[7px] border border-[#dbe7f3] bg-white/90 p-2">
        <div className="h-full rounded bg-[#eef5ff]" />
      </div>
      <div className="h-7 w-24 rounded-full bg-[#5f98df]" />
    </div>
  );
}

function StatsVariant() {
  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-2">
      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={`stats-card-${index}`} className="rounded-[7px] border border-[#dbe7f3] bg-white/90 px-2.5 py-2">
            <div className="h-1.5 w-10 rounded-full bg-[#8ab3e3]" />
            <div className="mt-2 h-2 w-8 rounded-full bg-[#dbe8f7]" />
          </div>
        ))}
      </div>
      <div className="rounded-[7px] border border-[#dbe7f3] bg-white/90 p-2">
        <div className="h-1.5 w-16 rounded-full bg-[#8ab3e3]" />
        <div className="mt-2 space-y-2">
          <div className="h-2 rounded-full bg-[#e8eef6]">
            <div className="h-2 w-[78%] rounded-full bg-[#79a9e4]" />
          </div>
          <div className="h-2 rounded-full bg-[#e8eef6]">
            <div className="h-2 w-[56%] rounded-full bg-[#88c49a]" />
          </div>
          <div className="h-2 rounded-full bg-[#e8eef6]">
            <div className="h-2 w-[33%] rounded-full bg-[#d9a966]" />
          </div>
        </div>
      </div>
    </div>
  );
}

const variantRender: Record<UiPanelVariant, () => ReactNode> = {
  dashboard: DashboardVariant,
  split: SplitVariant,
  list: ListVariant,
  form: FormVariant,
  stats: StatsVariant,
};

export function UiPanel({
  variant = "dashboard",
  tone = "blue",
  label,
  className,
  children,
  ...props
}: Props) {
  const Variant = variantRender[variant];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[10px] border border-gray-100 bg-gradient-to-br shadow-[0_2px_10px_rgba(0,0,0,0.05)]",
        toneClass[tone],
        className,
      )}
      {...props}
    >
      <div className="msp-contour-bg absolute inset-0 opacity-55" />
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/45 blur-2xl" />
      <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/35 blur-xl" />

      {label ? (
        <div className="absolute left-3 top-3 z-20 rounded-md border border-white/70 bg-white/70 px-2 py-1 text-[10px] font-bold text-msp-muted">
          {label}
        </div>
      ) : null}

      <PanelChrome>{children ?? <Variant />}</PanelChrome>
    </div>
  );
}
