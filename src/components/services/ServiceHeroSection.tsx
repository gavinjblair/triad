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
  const focusPanelThemes = {
    blue: {
      card: "border-[#d6e6f8] bg-[#f8fbff]",
      badge: "border-[#d6e6f8] bg-[#edf5ff] text-msp-blue",
      label: "text-msp-blue",
      bullet: "bg-msp-blue",
    },
    green: {
      card: "border-[#d8eddc] bg-[#f7fbfa]",
      badge: "border-[#d8eddc] bg-[#eef9f1] text-[#4a9b63]",
      label: "text-[#4a9b63]",
      bullet: "bg-[#5fa39f]",
    },
    amber: {
      card: "border-[#f2e1c2] bg-[#fdf9f4]",
      badge: "border-[#f2e1c2] bg-[#fff7e9] text-[#c18b3b]",
      label: "text-[#c18b3b]",
      bullet: "bg-[#bf8f58]",
    },
    purple: {
      card: "border-[#dde1f5] bg-[#f8f9fd]",
      badge: "border-[#dde1f5] bg-[#f5f7fd] text-[#7385b0]",
      label: "text-[#7385b0]",
      bullet: "bg-[#7385b0]",
    },
    slate: {
      card: "border-[#dce4ee] bg-[#f8fafc]",
      badge: "border-[#dce4ee] bg-[#f1f5fa] text-[#5f6d82]",
      label: "text-[#5f6d82]",
      bullet: "bg-[#7b8797]",
    },
    dark: {
      card: "border-gray-200 bg-white",
      badge: "border-gray-200 bg-[#f7f9fc] text-msp-ink",
      label: "text-msp-ink",
      bullet: "bg-msp-ink",
    },
  } as const;
  const focusTheme = focusPanelThemes[service.hero.tone];

  return (
    <section className="msp-hero-fade relative overflow-hidden py-24 md:py-28" style={{ backgroundImage: heroGradient }}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={heroPatternStyle} />
      </div>

      <Container size="content" className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="msp-eyebrow">{service.hero.eyebrow}</p>
            <h1 className="msp-hero-title mt-3 max-w-[660px]">
              {service.hero.title}
            </h1>
            <p className="msp-lead mt-5 max-w-[640px]">{service.hero.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={service.hero.primaryCtaHref} size="sm">
                {service.hero.primaryCtaLabel}
              </Button>
              <Button href="/services" size="sm" variant="secondary">
                View All Services
              </Button>
            </div>
          </div>

          <div className="relative h-[270px] md:h-[320px]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-visible">
              <div className="absolute right-[3%] top-1/2 -translate-y-1/2 blur-[1px] md:right-[-4%]">
                <HeroWatermarkIcon
                  className={cn("h-[330px] w-[330px] sm:h-[380px] sm:w-[380px] md:h-[520px] md:w-[520px]", heroWatermarkClassName)}
                  strokeWidth={heroWatermarkStrokeWidth}
                />
              </div>
            </div>

            <div className="relative z-10 flex h-full items-center justify-end">
              <div
                className={cn(
                  "w-full max-w-[348px] rounded-[20px] border bg-white/94 p-7 shadow-msp-card backdrop-blur-[1px]",
                  focusTheme.card,
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className={cn("text-[11px] font-bold tracking-[0.2em]", focusTheme.label)}>{service.heroFocus.title}</p>
                  <span
                    className={cn(
                      "inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
                      focusTheme.badge,
                    )}
                  >
                    {service.overview.badge}
                  </span>
                </div>
                <ul className="msp-list mt-5 grid gap-3">
                  {service.heroFocus.items.map((item) => (
                    <li key={item} className="relative pl-5">
                      <span className={cn("absolute left-0 top-2 h-2 w-2 rounded-full", focusTheme.bullet)} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
