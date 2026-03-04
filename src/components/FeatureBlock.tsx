import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  align?: "left" | "right";
  mockTone?: "blue" | "green" | "amber" | "purple" | "slate";
};

const mockToneClass: Record<NonNullable<Props["mockTone"]>, string> = {
  blue: "from-blue-50 to-blue-100",
  green: "from-emerald-50 to-emerald-100",
  amber: "from-amber-50 to-amber-100",
  purple: "from-indigo-50 to-indigo-100",
  slate: "from-slate-50 to-slate-100",
};

export function FeatureBlock({
  title,
  description,
  ctaLabel,
  ctaHref = "#",
  align = "left",
  mockTone = "blue",
}: Props) {
  const text = (
    <div>
      <h3 className="text-xl font-semibold text-msp-ink">{title}</h3>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      {ctaLabel ? (
        <div className="mt-5">
          <Button href={ctaHref} variant="secondary" size="sm">
            {ctaLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );

  const mock = (
    <Card>
      <div
        className={cn(
          "h-[170px] w-full rounded-lg border border-msp-border bg-gradient-to-br",
          mockToneClass[mockTone],
        )}
      />
    </Card>
  );

  return (
    <div className="grid items-center gap-8 lg:grid-cols-2">
      {align === "left" ? (
        <>
          {text}
          {mock}
        </>
      ) : (
        <>
          {mock}
          {text}
        </>
      )}
    </div>
  );
}
