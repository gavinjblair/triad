import { cn } from "@/lib/cn";

type Tone = "blue" | "green" | "amber" | "purple" | "slate";

const toneClass: Record<Tone, string> = {
  blue: "from-blue-50 to-blue-100",
  green: "from-emerald-50 to-emerald-100",
  amber: "from-amber-50 to-amber-100",
  purple: "from-indigo-50 to-indigo-100",
  slate: "from-slate-50 to-slate-100",
};

type Props = {
  tone?: Tone;
  className?: string;
  label?: string;
};

export function MockPanel({ tone = "blue", className, label }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-msp-border bg-gradient-to-br",
        toneClass[tone],
        className,
      )}
    >
      <div className="absolute inset-0 opacity-35 [background:radial-gradient(circle_at_20%_30%,rgba(31,106,215,0.22)_0%,transparent_55%),radial-gradient(circle_at_80%_20%,rgba(227,27,35,0.12)_0%,transparent_50%)]" />
      {label ? (
        <div className="absolute left-3 top-3 rounded-md border border-white/60 bg-white/70 px-2 py-1 text-[11px] font-semibold text-msp-ink/80">
          {label}
        </div>
      ) : null}
      <div className="h-full w-full" />
    </div>
  );
}

