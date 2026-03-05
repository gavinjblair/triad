import { cn } from "@/lib/cn";

type Props = {
  title: string;
  subtitle?: string;
  topRow: readonly string[];
  bottomRow: readonly string[];
  className?: string;
};

export function IntegrationsRow({
  title,
  subtitle,
  topRow,
  bottomRow,
  className,
}: Props) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="text-[52px] font-bold tracking-[-0.02em] text-msp-ink">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-[880px] text-[18px] leading-relaxed text-msp-muted">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-10 grid gap-2">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {topRow.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-[7px] border border-msp-border bg-white px-4 py-2 text-xs font-semibold text-msp-ink/85"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {bottomRow.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-[7px] border border-msp-border bg-white px-4 py-2 text-xs font-semibold text-msp-ink/85"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
