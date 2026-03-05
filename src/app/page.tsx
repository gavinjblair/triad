"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { BrandConveyor } from "@/components/BrandConveyor";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { Tabs } from "@/components/Tabs";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/cn";

function HeroDashboard() {
  return (
    <div className="mx-auto w-full max-w-[760px]">
      <Image
        src="/images/illustrations/hero-dashboard.svg"
        alt="MSP operations dashboard with devices, security, backup, tickets, health and patch metrics"
        width={760}
        height={460}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}

function ModelVisual({ tone }: { tone: "blue" | "slate" | "green" | "amber" | "purple" }) {
  return (
    <VisualPlaceholder tone={tone} className="h-[176px] rounded-[8px] border-[#eef2f7]">
      <div className="relative h-full p-3">
        <div className="absolute left-3 top-2 rounded border border-[#d6e4f2] bg-white px-2.5 py-1 text-[9px] font-semibold text-msp-muted">
          Baseline
        </div>
        <div className="absolute right-3 top-2 rounded border border-[#d6e4f2] bg-white px-2.5 py-1 text-[9px] font-semibold text-msp-muted">
          Review
        </div>
        <div className="absolute left-3 top-8 h-9 w-16 rounded-[6px] border border-[#d6e4f2] bg-white/90" />
        <div className="absolute right-3 top-8 h-9 w-16 rounded-[6px] border border-[#d6e4f2] bg-white/90" />
        <div className="absolute bottom-4 left-1/2 h-[78px] w-[62%] -translate-x-1/2 rounded-[7px] border border-[#d6e4f2] bg-white/90" />
      </div>
    </VisualPlaceholder>
  );
}

export default function HomePage() {
  const {
    hero,
    brands,
    problem,
    operatingModel,
    coreServices,
    proof,
    resourcesPreview,
    closingCta,
  } = homeContent;

  const [activeModelTab, setActiveModelTab] = useState<string>(operatingModel.tabs[0]?.value ?? "");
  const modelTabs = useMemo(() => operatingModel.tabs, [operatingModel.tabs]);

  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_470px]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{hero.eyebrow}</p>
              <h1 className="mt-3 max-w-[660px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-[620px] text-[15px] leading-relaxed text-msp-ink">{hero.description}</p>
              <ul className="mt-4 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                {hero.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={hero.primaryCta.href} size="sm">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary" size="sm">
                  {hero.secondaryCta.label}
                </Button>
              </div>
              <div className="mt-4 grid gap-2 md:grid-cols-3">
                {hero.proofStrip.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[10px] border border-gray-100 bg-white/80 px-3 py-2 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                  >
                    <p className="text-[12px] font-semibold text-msp-ink">{item.title}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-msp-muted">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <HeroDashboard />
          </div>
          <p className="mx-auto mt-8 max-w-[860px] text-center text-[12px] font-medium leading-relaxed text-msp-muted">
            {hero.credibilityStrip}
          </p>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <BrandConveyor title={brands.title} subtitle={brands.subtitle} />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{problem.title}</h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">{problem.subtitle}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {problem.items.map((item) => (
              <article key={item.title} className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                <h3 className="text-[22px] font-bold tracking-[-0.02em] text-msp-ink">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{operatingModel.title}</h2>
            <p className="mx-auto mt-3 max-w-[780px] text-[14px] leading-relaxed text-msp-muted">
              {operatingModel.description}
            </p>
          </div>

          <Tabs items={modelTabs} value={activeModelTab} onValueChange={setActiveModelTab} variant="pill" className="mt-8" />

          <div className="mt-10 space-y-12">
            {operatingModel.blocks.map((block, index) => (
              <article key={block.id} className="grid items-center gap-10 md:grid-cols-2">
                <div className={cn(index % 2 === 1 && "md:order-2")}>
                  <h3 className="text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-msp-ink">{block.title}</h3>
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
                  <ModelVisual tone={block.tone} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{coreServices.title}</h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">{coreServices.subtitle}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.cards.map((card) => (
              <article key={card.title} className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                <h3 className="text-[23px] font-bold tracking-[-0.02em] text-msp-ink">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{card.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{proof.title}</h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">{proof.subtitle}</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-[920px] gap-3 md:grid-cols-2">
            {proof.items.map((item) => (
              <div key={item} className="rounded-[10px] border border-gray-100 bg-white px-4 py-3 text-[13px] text-msp-ink shadow-msp-card">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{resourcesPreview.title}</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-[980px] gap-4 md:grid-cols-3">
            {resourcesPreview.cards.map((card) => (
              <article key={card.title} className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                <h3 className="text-[20px] font-bold leading-tight text-msp-ink">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{card.description}</p>
              </article>
            ))}
          </div>
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
