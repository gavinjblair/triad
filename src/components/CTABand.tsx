import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
  tone?: "hero" | "heroSoft";
  className?: string;
};

export function CTABand({
  title,
  subtitle,
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
        <div className="mt-6">
          <Button href={buttonHref} variant="primary" size="sm">
            {buttonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
