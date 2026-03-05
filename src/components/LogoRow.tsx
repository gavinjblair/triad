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
        <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">
          {title}
        </h2>
      ) : null}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex h-[34px] min-w-[96px] items-center justify-center rounded-[3px] border border-gray-100 bg-white px-5 text-[12px] font-semibold tracking-[0.01em] text-msp-ink"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
