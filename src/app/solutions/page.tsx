"use client";

import { LifeBuoy, Settings, Shield, TrendingUp } from "lucide-react";
import { useMemo, useState } from "react";
import { BrandConveyor } from "@/components/BrandConveyor";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/components/Icon";
import { Tabs } from "@/components/Tabs";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { solutionsContent } from "@/content/solutions";
import { cn } from "@/lib/cn";

const stepIcons = {
  Operate: Settings,
  Protect: Shield,
  Recover: LifeBuoy,
  Improve: TrendingUp,
} as const;

function ServiceVisual({
  tone,
  imageSrc,
  imageAlt,
}: {
  tone: "blue" | "green" | "amber" | "purple" | "slate";
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <VisualPlaceholder
      tone={tone}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      className="h-[176px] rounded-[8px] border-gray-100"
    />
  );
}

const tabVisuals = {
  "managed-it": [
    "/images/illustrations/hero-managed-infrastructure.webp",
    "/images/illustrations/managed-it-automation.webp",
  ],
  cybersecurity: [
    "/images/illustrations/endpoint-security-management.webp",
    "/images/illustrations/identity-access-control.webp",
  ],
  "microsoft-365": [
    "/images/illustrations/m365-governance-framework.webp",
    "/images/illustrations/Conditional-access-policy-illustration.webp",
  ],
  "backup-dr": [
    "/images/illustrations/backup-replication-on-architecture.webp",
    "/images/illustrations/site-failover-architecture.webp",
  ],
  vcio: [
    "/images/illustrations/hero-it-strategy-review.webp",
    "/images/illustrations/diagram-it-maturity.webp",
  ],
} as const;

function getSolutionVisual(
  tabValue: keyof typeof tabVisuals,
  index: number,
) {
  return tabVisuals[tabValue][index] ?? "/images/illustrations/hero-managed-infrastructure.webp";
}

export default function SolutionsPage() {
  const { platforms, hero, tabs, serviceScopeCoverage, whatYouWontFind, operatingModel, closingCta } = solutionsContent;
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.value ?? "");
  const tabItems = useMemo(
    () => tabs.map((item) => ({ value: item.value, label: item.label })),
    [tabs],
  );
  const activeContent = tabs.find((tab) => tab.value === activeTab) ?? tabs[0];

  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="text-center">
            <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{hero.eyebrow}</p>
            <h1 className="mx-auto mt-3 max-w-[820px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
              {hero.title}
            </h1>
            <p className="mx-auto mt-4 max-w-[820px] text-[15px] leading-relaxed text-msp-ink">{hero.subtitle}</p>
            <div className="mt-6">
              <Button href={hero.cta.href} size="sm">
                {hero.cta.label}
              </Button>
            </div>
            <div className="mx-auto mt-8 max-w-[900px]">
              <VisualPlaceholder
                tone="blue"
                imageSrc="/images/illustrations/hero-hybrid-infrastructure.webp"
                imageAlt="Structured security-first IT management"
                className="h-[260px] rounded-[10px] border-gray-100"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <BrandConveyor title={platforms.title} />
          <p className="mt-3 text-center text-[13px] text-msp-muted">{platforms.subtitle}</p>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <Tabs items={tabItems} value={activeTab} onValueChange={setActiveTab} variant="pill" />

          <div className="mt-8">
            <h2 className="text-[38px] font-bold tracking-[-0.02em] text-msp-ink">{activeContent.label}</h2>
            <p className="mt-3 max-w-[860px] text-[14px] leading-relaxed text-msp-muted">{activeContent.intro}</p>
          </div>

          <div className="mt-8 space-y-12">
            {activeContent.blocks.map((block, index) => (
              <article key={block.title} className="grid items-center gap-10 md:grid-cols-2">
                <div className={cn(index % 2 === 1 && "md:order-2")}>
                  <h3 className="text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-msp-ink">{block.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{block.description}</p>
                  <ul className="mt-4 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="relative pl-4">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={cn(index % 2 === 1 && "md:order-1")}>
                  <ServiceVisual
                    tone={index % 2 === 0 ? "blue" : "slate"}
                    imageSrc={getSolutionVisual(activeContent.value as keyof typeof tabVisuals, index)}
                    imageAlt={`${block.title} illustration`}
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{serviceScopeCoverage.title}</h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">
              {serviceScopeCoverage.intro}
            </p>
          </div>
          <ul className="mx-auto mt-8 grid max-w-[920px] gap-2 text-[13px] leading-relaxed text-msp-muted md:grid-cols-2">
            {serviceScopeCoverage.items.map((item) => (
              <li key={item} className="relative pl-4">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-6 rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card md:grid-cols-[1fr_420px]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">WHAT YOU WON&apos;T FIND</p>
              <h2 className="mt-2 text-[38px] font-bold tracking-[-0.02em] text-msp-ink">{whatYouWontFind.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{whatYouWontFind.subtitle}</p>
            </div>
            <div className="rounded-[10px] border border-gray-100 bg-[#f7f8fa] p-4">
              <ul className="grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                {whatYouWontFind.items.map((item) => (
                  <li key={item} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] font-semibold text-msp-ink">{whatYouWontFind.closing}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">OPERATING MODEL</p>
          <h2 className="mt-2 text-[40px] font-bold tracking-[-0.02em] text-msp-ink">{operatingModel.title}</h2>
          <p className="mt-3 max-w-[820px] text-[14px] leading-relaxed text-msp-muted">{operatingModel.subtitle}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {operatingModel.steps.map((step) => (
              <article key={step} className="rounded-[10px] border border-gray-100 bg-white p-4 shadow-msp-card">
                <div className="flex items-center gap-2">
                  <Icon icon={stepIcons[step as keyof typeof stepIcons]} tone="slate" size={16} badge />
                  <h3 className="text-[20px] font-bold text-msp-ink">{step}</h3>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-[13px] font-semibold text-msp-ink">{operatingModel.summary}</p>
        </Container>
      </section>

      <CTABand
        title={closingCta.title}
        buttonLabel={closingCta.buttonLabel}
        buttonHref={closingCta.buttonHref}
        tone="heroSoft"
      />
    </>
  );
}
