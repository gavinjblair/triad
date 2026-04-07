import type { CSSProperties } from "react";
import Image from "next/image";
import { Compass, Globe, LayoutGrid, RotateCw, Server, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BrandConveyor } from "@/components/BrandConveyor";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { ServiceDeliverySection } from "@/components/services/ServiceDeliverySection";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { ServiceNavigationSection } from "@/components/services/ServiceNavigationSection";
import type { ServiceSlug, ServiceOffering } from "@/content/services";
import { cn } from "@/lib/cn";

type Props = {
  service: ServiceOffering;
};

type HeroBackgroundTheme = {
  gradient: string;
  patternSvg: string;
  patternSize: string;
  patternOpacity: number;
  watermarkIcon: LucideIcon;
  watermarkClassName: string;
  watermarkStrokeWidth: number;
};

const asSvgDataUri = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

const heroBackgroundByService: Record<ServiceSlug, HeroBackgroundTheme> = {
  "managed-it": {
    gradient:
      "radial-gradient(920px 430px at 18% 48%, rgba(214, 244, 252, 0.84) 0%, rgba(214, 244, 252, 0) 63%), radial-gradient(760px 360px at 70% 46%, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0) 70%), linear-gradient(180deg, #b2d5ec 0%, #c8deee 56%, #ddebf4 100%)",
    patternSvg:
      "<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180' fill='none'><path d='M0 45H180M0 90H180M0 135H180M45 0V180M90 0V180M135 0V180' stroke='%233b84e8' stroke-opacity='.16' stroke-width='1'/><rect x='1' y='1' width='178' height='178' rx='10' stroke='%233b84e8' stroke-opacity='.1'/></svg>",
    patternSize: "180px 180px",
    patternOpacity: 0.28,
    watermarkIcon: Server,
    watermarkClassName: "text-[#2f75d8]/4",
    watermarkStrokeWidth: 1.2,
  },
  cybersecurity: {
    gradient:
      "radial-gradient(900px 420px at 18% 46%, rgba(214, 247, 239, 0.78) 0%, rgba(214, 247, 239, 0) 64%), radial-gradient(760px 360px at 72% 46%, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0) 70%), linear-gradient(180deg, #b7dcdb 0%, #cde7e6 56%, #e0efef 100%)",
    patternSvg:
      "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220' fill='none'><path d='M36 66L110 32L184 70L166 152L92 186L34 128Z' stroke='%2318837a' stroke-opacity='.14' stroke-width='1.2'/><circle cx='36' cy='66' r='4' fill='%2318837a' fill-opacity='.26'/><circle cx='110' cy='32' r='4' fill='%2318837a' fill-opacity='.26'/><circle cx='184' cy='70' r='4' fill='%2318837a' fill-opacity='.26'/><circle cx='166' cy='152' r='4' fill='%2318837a' fill-opacity='.26'/><circle cx='92' cy='186' r='4' fill='%2318837a' fill-opacity='.26'/><circle cx='34' cy='128' r='4' fill='%2318837a' fill-opacity='.26'/><path d='M36 66L34 128M110 32L92 186M184 70L34 128M166 152L36 66' stroke='%2318837a' stroke-opacity='.1' stroke-width='1'/></svg>",
    patternSize: "220px 220px",
    patternOpacity: 0.24,
    watermarkIcon: Shield,
    watermarkClassName: "text-[#1f8d82]/4",
    watermarkStrokeWidth: 1.3,
  },
  "microsoft-365": {
    gradient:
      "radial-gradient(920px 420px at 20% 48%, rgba(255, 255, 255, 0.86) 0%, rgba(255, 255, 255, 0) 64%), radial-gradient(760px 360px at 78% 46%, rgba(253, 233, 235, 0.48) 0%, rgba(253, 233, 235, 0) 70%), linear-gradient(90deg, #ffffff 0%, #fff8f8 58%, #fdf1f2 100%)",
    patternSvg:
      "<svg xmlns='http://www.w3.org/2000/svg' width='210' height='210' viewBox='0 0 210 210' fill='none'><rect x='24' y='24' width='54' height='54' rx='12' stroke='%235377b5' stroke-opacity='.16' stroke-width='1.2'/><rect x='90' y='24' width='96' height='54' rx='12' stroke='%235377b5' stroke-opacity='.16' stroke-width='1.2'/><rect x='24' y='90' width='54' height='96' rx='12' stroke='%235377b5' stroke-opacity='.16' stroke-width='1.2'/><rect x='90' y='90' width='44' height='44' rx='10' stroke='%235377b5' stroke-opacity='.14' stroke-width='1.2'/><rect x='142' y='90' width='44' height='44' rx='10' stroke='%235377b5' stroke-opacity='.14' stroke-width='1.2'/><rect x='90' y='142' width='96' height='44' rx='10' stroke='%235377b5' stroke-opacity='.14' stroke-width='1.2'/></svg>",
    patternSize: "210px 210px",
    patternOpacity: 0.24,
    watermarkIcon: LayoutGrid,
    watermarkClassName: "text-[#4f73be]/4",
    watermarkStrokeWidth: 1.25,
  },
  "backup-disaster-recovery": {
    gradient:
      "radial-gradient(900px 420px at 20% 48%, rgba(249, 237, 217, 0.7) 0%, rgba(249, 237, 217, 0) 64%), radial-gradient(760px 360px at 72% 46%, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0) 70%), linear-gradient(180deg, #e4d7c5 0%, #ecdfd0 56%, #f1e8dd 100%)",
    patternSvg:
      "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220' fill='none'><path d='M110 34a76 76 0 0 1 72 52' stroke='%23b5823f' stroke-opacity='.16' stroke-width='1.4' stroke-linecap='round'/><path d='M184 84l-11 1 4-10' stroke='%23b5823f' stroke-opacity='.2' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/><path d='M110 186a76 76 0 0 1-72-52' stroke='%23b5823f' stroke-opacity='.16' stroke-width='1.4' stroke-linecap='round'/><path d='M36 136l11-1-4 10' stroke='%23b5823f' stroke-opacity='.2' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='110' cy='110' r='48' stroke='%23b5823f' stroke-opacity='.1' stroke-width='1.2'/></svg>",
    patternSize: "220px 220px",
    patternOpacity: 0.22,
    watermarkIcon: RotateCw,
    watermarkClassName: "text-[#b5823f]/4",
    watermarkStrokeWidth: 1.3,
  },
  "domain-web-hosting": {
    gradient:
      "radial-gradient(900px 420px at 18% 48%, rgba(224, 232, 241, 0.8) 0%, rgba(224, 232, 241, 0) 64%), radial-gradient(760px 360px at 74% 46%, rgba(255, 255, 255, 0.58) 0%, rgba(255, 255, 255, 0) 70%), linear-gradient(180deg, #d1d9e4 0%, #dde4ec 56%, #e8edf3 100%)",
    patternSvg:
      "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220' fill='none'><circle cx='110' cy='110' r='70' stroke='%23536b87' stroke-opacity='.16' stroke-width='1.3'/><path d='M40 110H180M110 40V180' stroke='%23536b87' stroke-opacity='.12' stroke-width='1.2'/><path d='M60 72C78 84 142 84 160 72M60 148C78 136 142 136 160 148' stroke='%23536b87' stroke-opacity='.12' stroke-width='1.2' stroke-linecap='round'/></svg>",
    patternSize: "220px 220px",
    patternOpacity: 0.24,
    watermarkIcon: Globe,
    watermarkClassName: "text-[#5b6f88]/4",
    watermarkStrokeWidth: 1.2,
  },
  "it-strategy-vcio": {
    gradient:
      "radial-gradient(900px 420px at 20% 48%, rgba(224, 233, 243, 0.76) 0%, rgba(224, 233, 243, 0) 64%), radial-gradient(760px 360px at 72% 46%, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0) 70%), linear-gradient(180deg, #c5d2e0 0%, #d6dee8 56%, #e4eaf1 100%)",
    patternSvg:
      "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220' fill='none'><path d='M20 44H200M20 88H170M20 132H192M20 176H154' stroke='%23476689' stroke-opacity='.14' stroke-width='1.2'/><path d='M44 20V200M88 20V172M132 20V200M176 20V152' stroke='%23476689' stroke-opacity='.1' stroke-width='1.2'/><path d='M36 168L86 128L130 140L184 96' stroke='%23476689' stroke-opacity='.2' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/><circle cx='36' cy='168' r='3' fill='%23476689' fill-opacity='.24'/><circle cx='86' cy='128' r='3' fill='%23476689' fill-opacity='.24'/><circle cx='130' cy='140' r='3' fill='%23476689' fill-opacity='.24'/><circle cx='184' cy='96' r='3' fill='%23476689' fill-opacity='.24'/></svg>",
    patternSize: "220px 220px",
    patternOpacity: 0.24,
    watermarkIcon: Compass,
    watermarkClassName: "text-[#4b6486]/4",
    watermarkStrokeWidth: 1.25,
  },
};

export function ServiceLandingPage({ service }: Props) {
  const heroTheme = heroBackgroundByService[service.slug];
  const heroPatternStyle: CSSProperties = {
    backgroundImage: asSvgDataUri(heroTheme.patternSvg),
    backgroundRepeat: "repeat",
    backgroundSize: heroTheme.patternSize,
    opacity: heroTheme.patternOpacity,
  };
  const HeroWatermarkIcon = heroTheme.watermarkIcon;
  const audienceSectionGradient = "linear-gradient(180deg, #ffffff 0%, #fafbfd 100%)";
  const featuresSectionGradient = "linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%)";
  const platformsSectionGradient = "linear-gradient(180deg, #f7f9fc 0%, #f4f6f9 100%)";
  const outcomesSectionGradient = "linear-gradient(180deg, #f4f6f9 0%, #eef2f6 100%)";
  const improvementsSectionGradient = "linear-gradient(180deg, #eef2f6 0%, #f4f7fb 100%)";
  const laneAccents = {
    blue: {
      card: "border-t-msp-blue",
      chip: "border-[#d6e6f8] bg-[#edf5ff] text-msp-blue",
      highlight: "border-l-msp-blue bg-[#f8fbff]",
      panel: "border-[#d6e6f8] bg-[#f8fbff]",
    },
    green: {
      card: "border-t-[#5fa39f]",
      chip: "border-[#d8eddc] bg-[#eef9f1] text-[#4a9b63]",
      highlight: "border-l-[#5fa39f] bg-[#f7fbfa]",
      panel: "border-[#d8eddc] bg-[#f7fbfa]",
    },
    amber: {
      card: "border-t-[#bf8f58]",
      chip: "border-[#f2e1c2] bg-[#fff7e9] text-[#c18b3b]",
      highlight: "border-l-[#bf8f58] bg-[#fdf9f4]",
      panel: "border-[#f2e1c2] bg-[#fdf9f4]",
    },
    purple: {
      card: "border-t-[#7385b0]",
      chip: "border-[#dde1f5] bg-[#f5f7fd] text-[#7385b0]",
      highlight: "border-l-[#7385b0] bg-[#f8f9fd]",
      panel: "border-[#dde1f5] bg-[#f8f9fd]",
    },
    slate: {
      card: "border-t-[#7b8797]",
      chip: "border-[#dce4ee] bg-[#f1f5fa] text-[#5f6d82]",
      highlight: "border-l-[#7b8797] bg-[#f8fafc]",
      panel: "border-[#dce4ee] bg-[#f8fafc]",
    },
    dark: {
      card: "border-t-msp-ink",
      chip: "border-gray-200 bg-[#f7f9fc] text-msp-ink",
      highlight: "border-l-msp-ink bg-[#f8f9fb]",
      panel: "border-gray-200 bg-[#f8f9fb]",
    },
  } as const;
  const laneAccent = laneAccents[service.hero.tone];

  return (
    <>
      <ServiceHeroSection
        service={service}
        heroGradient={heroTheme.gradient}
        heroPatternStyle={heroPatternStyle}
        HeroWatermarkIcon={HeroWatermarkIcon}
        heroWatermarkClassName={heroTheme.watermarkClassName}
        heroWatermarkStrokeWidth={heroTheme.watermarkStrokeWidth}
      />

      <ServiceNavigationSection activeSlug={service.slug} />

      <ServiceDeliverySection frameworkStrip={service.frameworkStrip} />

      <section className="pb-12 pt-24" style={{ backgroundImage: audienceSectionGradient }}>
        <Container size="content">
          <div className="text-center">
            <h2 className="msp-section-title mb-8">Who this is for</h2>
            <p className="msp-body mx-auto mb-4 max-w-[820px]">
              {service.whoThisIsForIntro}
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-[1100px] gap-4 md:grid-cols-3">
            {service.whoThisIsFor.map((card) => (
              <article
                key={card.title}
                className={cn("rounded-[12px] border border-gray-100 border-t-4 bg-white p-6 shadow-msp-card", laneAccent.card)}
              >
                <p className="text-[11px] font-bold tracking-[0.16em] text-msp-subtle">BEST FIT</p>
                <h3 className="msp-card-title mt-3">{card.title}</h3>
                <p className="msp-body mt-3">{card.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24" style={{ backgroundImage: featuresSectionGradient }}>
        <Container size="content">
          <article className={cn("mb-12 rounded-[20px] border p-7 shadow-msp-card md:p-8", laneAccent.panel)}>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-start">
              <div>
                <span
                  className={cn(
                    "inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
                    laneAccent.chip,
                  )}
                >
                  {service.signaturePanel.eyebrow}
                </span>
                <h2 className="msp-subsection-title mt-4 max-w-[720px]">
                  {service.signaturePanel.title}
                </h2>
                <p className="msp-body mt-4 max-w-[720px]">
                  {service.signaturePanel.description}
                </p>
              </div>

              <ul className="grid gap-3">
                {service.signaturePanel.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-[12px] border border-white/80 bg-white/75 px-4 py-3 text-[13px] leading-relaxed text-msp-ink"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <div className="space-y-12">
            {service.features.map((feature, index) => (
              <article
                key={feature.title}
                className={cn(
                  "grid items-center gap-8 rounded-[18px] border border-gray-100 bg-white p-6 shadow-msp-card md:grid-cols-2 md:p-7",
                  index === service.signatureFeatureIndex && cn("border-l-4", laneAccent.highlight),
                )}
              >
                <div className={cn(index % 2 === 1 && "md:order-2")}>
                  {index === service.signatureFeatureIndex ? (
                    <span className={cn("inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]", laneAccent.chip)}>
                      Signature Focus
                    </span>
                  ) : null}
                  <h2 className={cn("msp-subsection-title", index === service.signatureFeatureIndex ? "mt-4" : undefined)}>
                    {feature.title}
                  </h2>
                  <p className="msp-body mt-3">{feature.description}</p>
                  <ul className="msp-list mt-4 grid gap-2">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="relative pl-4">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={cn(index % 2 === 1 && "md:order-1")}>
                  <div className="relative h-[190px] w-full md:h-[220px]">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24" style={{ backgroundImage: platformsSectionGradient }}>
        <Container size="content">
          <BrandConveyor
            title="Technology Platforms We Support"
            subtitle="Structured service delivery across trusted vendor ecosystems."
            className="[&_h2]:font-bold [&>div]:mt-8 [&_p]:mt-4"
          />
        </Container>
      </section>

      <section className="py-24" style={{ backgroundImage: outcomesSectionGradient }}>
        <Container size="content">
          <div className="text-center">
            <h2 className="msp-section-title mb-8">{service.outcomes.title}</h2>
            <p className="msp-body mx-auto mb-4 max-w-[760px]">{service.outcomes.intro}</p>
          </div>

          <ul className="mx-auto mt-8 grid max-w-[980px] gap-4 md:grid-cols-2">
            {service.outcomes.items.map((item) => (
              <li key={item} className="rounded-[12px] border border-gray-100 bg-white p-5 text-[14px] text-msp-ink shadow-msp-card">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24" style={{ backgroundImage: improvementsSectionGradient }}>
        <Container size="content">
          <div className="mx-auto max-w-[900px]">
            <div className="text-center">
              <h2 className="msp-section-title mb-8">Typical improvements organisations see</h2>
            </div>

            <div className="mx-auto grid max-w-[900px] gap-4 md:grid-cols-2">
              {service.typicalImprovements.map((item) => (
                <article key={item.title} className="rounded-[10px] border border-[#e6edf3] bg-[#f8fafc] p-[18px]">
                  <h3 className="msp-card-title">{item.title}</h3>
                  <p className="msp-body mt-3">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        title={service.closingCta.title}
        subtitle={service.closingCta.subtitle}
        buttonLabel={service.closingCta.buttonLabel}
        buttonHref={service.closingCta.buttonHref}
        reassuranceLine={service.closingCta.reassuranceLine}
        reassuranceLinePosition="below"
        tone={service.closingCta.tone}
        backgroundImage={heroTheme.gradient}
      />
    </>
  );
}
