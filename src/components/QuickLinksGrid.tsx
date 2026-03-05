import { cn } from "@/lib/cn";

export type QuickLink = {
  title: string;
  href: string;
  tone: "blue" | "green" | "amber" | "red" | "slate";
};

const toneClass: Record<QuickLink["tone"], string> = {
  blue: "border-blue-200 bg-blue-50 text-blue-800",
  green: "border-emerald-200 bg-emerald-50 text-emerald-800",
  amber: "border-amber-200 bg-amber-50 text-amber-900",
  red: "border-rose-200 bg-rose-50 text-rose-900",
  slate: "border-slate-200 bg-slate-50 text-slate-800",
};

type Props = {
  title?: string;
  items: readonly QuickLink[];
  className?: string;
};

export function QuickLinksGrid({ title, items, className }: Props) {
  return (
    <div className={cn(className)}>
      {title ? (
        <h2 className="text-center text-[52px] font-bold tracking-[-0.02em] text-msp-ink">
          {title}
        </h2>
      ) : null}
      <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className={cn(
              "group flex min-h-[104px] flex-col items-center justify-center rounded-[8px] border p-4 text-center transition-colors hover:bg-white",
              toneClass[item.tone],
            )}
          >
            <div className="h-9 w-9 rounded-md border border-current/20 bg-white/60" />
            <div className="mt-3 text-[14px] font-semibold leading-[1.25]">{item.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
