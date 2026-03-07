import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import type { ServiceOffering } from "@/content/services";
import { cn } from "@/lib/cn";

type Props = {
  service: ServiceOffering;
  heroGradient: string;
  heroPatternStyle: CSSProperties;
  HeroWatermarkIcon: LucideIcon;
  heroWatermarkClassName: string;
  heroWatermarkStrokeWidth: number;
};

export function ServiceHeroSection({
  service,
  heroGradient,
  heroPatternStyle,
  HeroWatermarkIcon,
  heroWatermarkClassName,
  heroWatermarkStrokeWidth,
}: Props) {
  return (
    <section className="msp-hero-fade relative overflow-hidden py-24 md:py-28" style={{ backgroundImage: heroGradient }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={heroPatternStyle} />
      </div>

      <Container size="content" className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{service.hero.eyebrow}</p>
            <h1 className="mt-3 max-w-[660px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
              {service.hero.title}
            </h1>
            <p className="mt-5 max-w-[640px] text-[15px] leading-relaxed text-msp-ink">{service.hero.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={service.hero.primaryCtaHref} size="sm">
                {service.hero.primaryCtaLabel}
              </Button>
              <Button href="/services" size="sm" variant="secondary">
                View All Services
              </Button>
            </div>
          </div>

          <div aria-hidden="true" className="pointer-events-none relative h-[250px] overflow-visible md:h-[300px]">
            <div className="absolute right-[3%] top-1/2 -translate-y-1/2 blur-[1px] md:right-[-4%]">
              <HeroWatermarkIcon
                className={cn("h-[330px] w-[330px] sm:h-[380px] sm:w-[380px] md:h-[520px] md:w-[520px]", heroWatermarkClassName)}
                strokeWidth={heroWatermarkStrokeWidth}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
