import type { CSSProperties } from "react";
import Image from "next/image";
import { Compass, LayoutGrid, RotateCw, Server, Shield } from "lucide-react";
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
            <h2 className="mb-8 text-[42px] font-bold tracking-[-0.02em] text-msp-ink">Who this is for</h2>
            <p className="mx-auto mb-4 max-w-[820px] text-[14px] leading-relaxed text-msp-muted">
              {service.whoThisIsForIntro}
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-[1100px] gap-4 md:grid-cols-3">
            {service.whoThisIsFor.map((card) => (
              <article key={card.title} className="rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card">
                <h3 className="text-[20px] font-semibold leading-tight text-msp-ink">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{card.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24" style={{ backgroundImage: featuresSectionGradient }}>
        <Container size="content">
          <div className="space-y-24">
            {service.features.map((feature, index) => (
              <article key={feature.title} className="grid items-center gap-10 md:grid-cols-2">
                <div className={cn(index % 2 === 1 && "md:order-2")}>
                  <h2 className="mb-8 text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-msp-ink">{feature.title}</h2>
                  <p className="mb-4 text-[14px] leading-relaxed text-msp-muted">{feature.description}</p>
                  <ul className="grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="relative pl-4">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={cn(index % 2 === 1 && "md:order-1")}>
                  <div className="relative h-[200px] w-full md:h-[230px]">
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
            <h2 className="mb-8 text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{service.outcomes.title}</h2>
            <p className="mx-auto mb-4 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">{service.outcomes.intro}</p>
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
              <h2 className="mb-8 text-[42px] font-bold tracking-[-0.02em] text-msp-ink">Typical improvements organisations see</h2>
            </div>

            <div className="mx-auto grid max-w-[900px] gap-4 md:grid-cols-2">
              {service.typicalImprovements.map((item) => (
                <article key={item.title} className="rounded-[10px] border border-[#e6edf3] bg-[#f8fafc] p-[18px]">
                  <h3 className="text-[20px] font-semibold leading-tight text-msp-ink">{item.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{item.description}</p>
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
