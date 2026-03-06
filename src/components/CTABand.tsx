import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  subtitle?: string;
  reassuranceLine?: string;
  reviewGainTitle?: string;
  reviewGainItems?: string[];
  buttonLabel: string;
  buttonHref: string;
  tone?: "hero" | "heroSoft";
  className?: string;
};

export function CTABand({
  title,
  subtitle,
  reassuranceLine,
  reviewGainTitle,
  reviewGainItems,
  buttonLabel,
  buttonHref,
  tone = "heroSoft",
  className,
}: Props) {
  return (
    <section className={cn("py-24 md:py-28", tone === "hero" ? "msp-hero" : "msp-hero-soft", className)}>
      <Container size="content" className="text-center">
        <h2 className="text-[56px] font-bold tracking-[-0.02em] text-msp-ink">
          {title}
        </h2>
        {subtitle ? <p className="mt-3 text-[15px] text-msp-muted">{subtitle}</p> : null}
        {reassuranceLine ? <p className="mt-3 text-[15px] text-msp-muted">{reassuranceLine}</p> : null}
        {reviewGainTitle ? <p className="mt-4 text-[15px] text-msp-muted">{reviewGainTitle}</p> : null}
        {reviewGainItems?.length ? (
          <ul className="mx-auto mt-3 grid max-w-[820px] gap-2 text-[13px] leading-relaxed text-msp-muted">
            {reviewGainItems.map((item) => (
              <li key={item} className="relative pl-4 text-left">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-6">
          <Button href={buttonHref} variant="primary" size="sm">
            {buttonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
