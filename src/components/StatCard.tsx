import { cn } from "@/lib/cn";

type Props = {
  value: string;
  label: string;
  className?: string;
};

export function StatCard({ value, label, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-[12px] border border-gray-100 bg-[#f5f9ff] px-5 py-4 shadow-msp-card",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[32px] font-bold tracking-[-0.01em] text-msp-ink">{value}</div>
          <div className="mt-1 text-[14px] text-msp-muted">{label}</div>
        </div>
        <div className="h-12 w-12 rounded-md border border-gray-100 bg-white" />
      </div>
    </div>
  );
}
