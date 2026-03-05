"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { Tabs } from "@/components/Tabs";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { solutionsContent } from "@/content/solutions";
import { cn } from "@/lib/cn";

function ServiceVisual({ tone }: { tone: "blue" | "green" | "amber" | "purple" | "slate" }) {
  return (
    <VisualPlaceholder tone={tone} className="h-[176px] rounded-[8px] border-gray-100">
      <div className="relative h-full p-3">
        <div className="absolute left-3 top-3 h-8 w-16 rounded-[6px] border border-[#d8e5f1] bg-white/90" />
        <div className="absolute right-3 top-3 h-8 w-16 rounded-[6px] border border-[#d8e5f1] bg-white/90" />
        <div className="absolute bottom-4 left-1/2 h-[84px] w-[64%] -translate-x-1/2 rounded-[7px] border border-[#d8e5f1] bg-white/90" />
      </div>
    </VisualPlaceholder>
  );
}

export default function SolutionsPage() {
  const { hero, tabs, whatYouWontFind, operatingModel, closingCta } = solutionsContent;
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
          </div>
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
                  <ServiceVisual tone={index % 2 === 0 ? "blue" : "slate"} />
                </div>
              </article>
            ))}
          </div>
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
                <h3 className="text-[20px] font-bold text-msp-ink">{step}</h3>
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
