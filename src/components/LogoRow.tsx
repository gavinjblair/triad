import { cn } from "@/lib/cn";

export type LogoItem = {
  name: string;
};

type Props = {
  title?: string;
  items: LogoItem[];
  className?: string;
};

export function LogoRow({ title, items, className }: Props) {
  return (
    <div className={cn("text-center", className)}>
      {title ? (
        <h2 className="text-[44px] font-bold tracking-[-0.02em] text-msp-ink">
          {title}
        </h2>
      ) : null}
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex h-[48px] min-w-[170px] items-center justify-center rounded-[4px] border border-msp-border bg-white px-7 text-[28px] font-bold text-msp-ink/95"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
