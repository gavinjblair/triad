import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { featuresContent } from "@/content/features";
import { cn } from "@/lib/cn";

const featureIllustrations: Record<string, string> = {
  "Automated patch management": "/images/illustrations/managed-it-automation.webp",
  "Native remote troubleshooting kit": "/images/illustrations/endpoint-security-management.webp",
  "Network monitoring": "/images/illustrations/core-network-architecture.webp",
  "Endpoint automation": "/images/illustrations/features-automation-support-diagram.webp",
  "Broad OS Offering": "/images/illustrations/hero-hybrid-infrastructure.webp",
};

function getFeatureIllustration(title: string) {
  return featureIllustrations[title] ?? "/images/illustrations/hero-managed-infrastructure.webp";
}

function FeaturePanel({
  tone,
  imageSrc,
  imageAlt,
}: {
  tone: "blue" | "amber" | "green" | "purple";
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <VisualPlaceholder
      tone={tone}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      className="h-[160px] rounded-[10px] border-[#eef2f7]"
    />
  );
}

function HeroDashboardPanel() {
  return (
    <VisualPlaceholder
      tone="slate"
      framed={false}
      imageSrc="/images/illustrations/hero-operational-dashboard.webp"
      imageAlt="RMM operations dashboard"
      className="mx-auto h-[260px] max-w-[900px]"
    />
  );
}

export default function FeaturesPage() {
  const { hero, sectionsTitle, sections, closing } = featuresContent;

  return (
    <>
      <section className="msp-hero-soft msp-hero-rings py-24 md:py-28">
        <Container size="content" className="text-center">
          <h1 className="mx-auto max-w-[840px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
            {hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-[880px] text-[15px] leading-relaxed text-msp-ink">{hero.subtitle}</p>
          <Button href={hero.cta.href} size="sm" className="mt-6">
            {hero.cta.label}
          </Button>
          <div className="mt-8">
            <HeroDashboardPanel />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <h2 className="text-center text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{sectionsTitle}</h2>

          <div className="mt-10 space-y-14">
            {sections.map((section) => {
              const visual = (
                <FeaturePanel
                  tone={section.tone}
                  imageSrc={getFeatureIllustration(section.title)}
                  imageAlt={`${section.title} illustration`}
                />
              );
              const text = (
                <div>
                  <h3 className="text-[35px] font-bold tracking-[-0.02em] text-msp-ink">{section.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-msp-ink">{section.body}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[13px] leading-6 text-msp-ink">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              );

              return (
                <article key={section.title} className="grid items-center gap-10 md:grid-cols-2">
                  <div className={cn(section.align === "right" && "md:order-2")}>{text}</div>
                  <div className={cn(section.align === "right" && "md:order-1")}>{visual}</div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="msp-hero-soft grid items-center gap-6 rounded-[10px] border border-gray-100 p-7 md:grid-cols-[1fr_220px]">
            <div>
              <p className="max-w-[620px] text-[15px] leading-relaxed text-msp-ink">
                <span className="font-bold text-msp-blue">With almost 90% of SMBs</span> {closing.body}
              </p>
              <Button href={closing.cta.href} size="sm" className="mt-4">
                {closing.cta.label}
              </Button>
            </div>
            <VisualPlaceholder
              tone="slate"
              imageSrc="/images/illustrations/site-failover-architecture.webp"
              imageAlt="Managed resilience illustration"
              className="h-[126px] rounded-[8px] border-gray-100"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
