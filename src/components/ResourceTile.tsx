import { cn } from "@/lib/cn";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

type Props = {
  label: string;
  tone?: Parameters<typeof VisualPlaceholder>[0]["tone"];
  highlightLabel?: string;
  className?: string;
};

export function ResourceTile({ label, tone = "blue", highlightLabel, className }: Props) {
  return (
    <article className={cn("w-[170px]", className)}>
      <div className="overflow-hidden rounded-[8px] border border-msp-border bg-white">
        <div className="relative">
          <VisualPlaceholder tone={tone} className="h-[95px] rounded-none border-0">
            {highlightLabel ? (
              <div className="absolute inset-0 flex items-center justify-center bg-[#2a2f38]/70 text-[11px] font-bold text-white">
                {highlightLabel}
              </div>
            ) : null}
          </VisualPlaceholder>
        </div>
        <div className="px-3 py-3 text-[11px] font-semibold leading-4 text-msp-ink">{label}</div>
      </div>
    </article>
  );
}
