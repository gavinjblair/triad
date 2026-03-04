"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { IntegrationsRow } from "@/components/IntegrationsRow";
import { LogoRow } from "@/components/LogoRow";
import { QuickLinksGrid } from "@/components/QuickLinksGrid";
import { StatCard } from "@/components/StatCard";
import { Tabs } from "@/components/Tabs";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/cn";

function HeroDashboard() {
  return (
    <VisualPlaceholder tone="blue" className="h-[250px] rounded-[10px] border-[#b8cfe9]">
      <div className="grid h-full grid-cols-2 gap-3 p-4">
        <div className="rounded-[7px] border border-[#c3d8ef] bg-white/85 p-3">
          <div className="h-2 w-24 rounded-full bg-[#8bb7ef]" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-8 rounded bg-[#e8f1fd]" />
            <div className="h-8 rounded bg-[#e8f1fd]" />
            <div className="h-8 rounded bg-[#e8f1fd]" />
          </div>
        </div>
        <div className="rounded-[7px] border border-[#c3d8ef] bg-white/85 p-3">
          <div className="h-2 w-20 rounded-full bg-[#8bb7ef]" />
          <div className="mt-4 h-20 rounded bg-[#edf4ff]" />
        </div>
        <div className="rounded-[7px] border border-[#c3d8ef] bg-white/85 p-3">
          <div className="h-2 w-16 rounded-full bg-[#8bb7ef]" />
          <div className="mt-3 h-12 rounded bg-[#edf4ff]" />
        </div>
        <div className="rounded-[7px] border border-[#c3d8ef] bg-white/85 p-3">
          <div className="h-2 w-16 rounded-full bg-[#8bb7ef]" />
          <div className="mt-3 h-12 rounded bg-[#edf4ff]" />
        </div>
      </div>
    </VisualPlaceholder>
  );
}

function OperationVisual({ tone }: { tone: "blue" | "slate" | "green" | "amber" | "purple" }) {
  return (
    <VisualPlaceholder tone={tone} className="h-[186px] rounded-[8px] border-[#d4e0ef]">
      <div className="relative h-full p-3">
        <div className="absolute left-3 top-3 rounded border border-[#c8d9ed] bg-white px-3 py-2 text-[10px] font-semibold text-msp-muted">
          Overview
        </div>
        <div className="absolute right-3 top-3 rounded border border-[#c8d9ed] bg-white px-3 py-2 text-[10px] font-semibold text-msp-muted">
          Analytics
        </div>
        <div className="absolute bottom-4 left-1/2 h-[78px] w-[62%] -translate-x-1/2 rounded-[7px] border border-[#c8d9ed] bg-white/90" />
      </div>
    </VisualPlaceholder>
  );
}

export default function HomePage() {
  const { hero, brands, integrated, operations, compliance, integrations, quickLinks, closingCta } =
    homeContent;

  const [activeTab, setActiveTab] = useState<string>(
    operations.tabs[operations.tabs.length - 1]?.value ?? "reports",
  );
  const tabs = useMemo(() => operations.tabs, [operations.tabs]);

  return (
    <>
      <section className="msp-hero py-14 md:py-16">
        <Container size="content">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_470px]">
            <div>
              <h1 className="max-w-[620px] text-[54px] font-bold leading-[1.08] tracking-[-0.03em] text-msp-ink">
                {hero.title.lead}
                <span className="text-msp-blue">{hero.title.highlight}</span>
                {hero.title.tail}
              </h1>
              <p className="mt-5 text-[21px] text-msp-ink">{hero.subtitle}</p>
              <div className="mt-6">
                <Button href={hero.cta.href} size="sm" className="h-[44px] px-5 text-[13px]">
                  {hero.cta.label}
                </Button>
              </div>
            </div>
            <HeroDashboard />
          </div>
        </Container>
      </section>

      <section className="bg-white py-14">
        <Container size="content">
          <LogoRow title={brands.title} items={brands.items.map((name) => ({ name }))} />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container size="content" className="text-center">
          <h2 className="text-[44px] font-bold tracking-[-0.02em] text-msp-ink">{integrated.title}</h2>
          <p className="mx-auto mt-5 max-w-[880px] text-[15px] leading-7 text-msp-muted">{integrated.body}</p>
          <div className="mx-auto mt-8 grid max-w-[820px] gap-4 md:grid-cols-2">
            {integrated.stats.map((item) => (
              <StatCard key={item.value} value={item.value} label={item.label} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container size="content">
          <h2 className="text-center text-[42px] font-bold tracking-[-0.02em] text-msp-ink">
            {operations.title}
          </h2>
          <Tabs items={tabs} value={activeTab} onValueChange={setActiveTab} variant="pill" className="mt-8" />

          <div className="mt-10 space-y-14">
            {operations.blocks.map((block) => (
              <article key={block.id} className="grid items-center gap-10 md:grid-cols-2">
                <div className={cn(block.align === "right" && "md:order-2")}>
                  <h3 className="text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-msp-ink">
                    {block.title}
                  </h3>
                  <p className="mt-4 max-w-[500px] text-[14px] leading-7 text-msp-muted">{block.description}</p>
                  <Button
                    href="#"
                    variant="secondary"
                    size="sm"
                    className="mt-5 h-[38px] rounded-[2px] px-4 text-[11px]"
                  >
                    {block.cta}
                  </Button>
                </div>
                <div className={cn(block.align === "right" && "md:order-1")}>
                  <OperationVisual tone={block.tone} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container size="content" className="text-center">
          <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{compliance.title}</h2>
          <p className="mx-auto mt-3 max-w-[760px] text-[14px] text-msp-muted">{compliance.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            {compliance.items.map((item) => (
              <div key={item} className="flex h-[52px] min-w-[116px] items-center justify-center rounded-full border border-msp-border bg-white px-5 text-[12px] font-semibold text-msp-muted">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f4f6] py-16">
        <Container size="content">
          <IntegrationsRow
            title={integrations.title}
            subtitle={integrations.subtitle}
            topRow={integrations.topRow}
            bottomRow={integrations.bottomRow}
          />
        </Container>
      </section>

      <section className="bg-[#f3f4f6] py-16">
        <Container size="content">
          <QuickLinksGrid title={quickLinks.title} items={quickLinks.items} />
        </Container>
      </section>

      <CTABand
        title={closingCta.title}
        subtitle={closingCta.subtitle}
        buttonLabel={closingCta.buttonLabel}
        buttonHref={closingCta.buttonHref}
        tone="heroSoft"
      />
    </>
  );
}
