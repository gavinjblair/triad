"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ChartGantt,
  Cloud,
  Compass,
  DatabaseBackup,
  FileText,
  LifeBuoy,
  Network,
  Settings,
  Server,
  Shield,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/components/Icon";
import { Tabs } from "@/components/Tabs";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/cn";

const modelTabIcons = {
  infrastructure: Network,
  security: Shield,
  documentation: FileText,
  monitoring: Activity,
  governance: ChartGantt,
} as const;

const coreServiceIcons = {
  "Managed IT Services": Server,
  Cybersecurity: ShieldCheck,
  "Microsoft 365 Management": Cloud,
  "Backup & Disaster Recovery": DatabaseBackup,
  "IT Strategy / vCIO": Compass,
} as const;

const workStepIcons = {
  Operate: Settings,
  Protect: Shield,
  Recover: LifeBuoy,
  Improve: TrendingUp,
} as const;

const deliveryStepDescriptions = {
  Operate: "Defined support and service ownership keep day-to-day operations controlled.",
  Protect: "Security baselines are applied consistently instead of reactively.",
  Recover: "Backup and restore readiness are reviewed as operational disciplines.",
  Improve: "Regular reviews turn insight into prioritised action and measurable progress.",
} as const;

export default function HomePage() {
  const {
    hero,
    problem,
    maturityModel,
    operatingModel,
    coreServices,
    proof,
    resourcesPreview,
    closingCta,
  } = homeContent;

  const [activeModelTab, setActiveModelTab] = useState<string>("infrastructure");
  const modelTabs = useMemo(
    () =>
      operatingModel.tabs.map((tab) => {
        const IconSymbol = modelTabIcons[tab.value as keyof typeof modelTabIcons];

        return {
          value: tab.value,
          label: (
            <span className="inline-flex items-center gap-1.5">
              <Icon icon={IconSymbol} tone="slate" badge={false} size={15} className="text-msp-subtle" />
              <span>{tab.label}</span>
            </span>
          ),
        };
      }),
    [operatingModel.tabs],
  );
  const activeModelContent = useMemo(
    () => operatingModel.tabs.find((tab) => tab.value === activeModelTab) ?? operatingModel.tabs[0],
    [activeModelTab, operatingModel.tabs],
  );

  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_470px]">
            <div>
              <p className="msp-eyebrow">{hero.eyebrow}</p>
              <h1 className="msp-hero-title mt-3 max-w-[660px]">
                {hero.title}
              </h1>
              <p className="msp-lead mt-5 max-w-[620px]">{hero.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={hero.primaryCta.href} size="sm">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="secondary" size="sm">
                  {hero.secondaryCta.label}
                </Button>
              </div>
              <div className="mt-5 grid gap-2 md:grid-cols-3">
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
              <p className="mt-5 max-w-[620px] text-[12px] font-medium leading-relaxed text-msp-muted">
                {hero.credibilityStrip}
              </p>
            </div>
            <VisualPlaceholder
              tone="blue"
              framed={false}
              imageSrc="/images/illustrations/hero-operational-dashboard.webp"
              imageAlt="Operational dashboard overview"
              imageLoading="eager"
              className="h-[280px] md:h-[336px]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div>
              <p className="msp-eyebrow">THE PROBLEM</p>
              <h2 className="msp-section-title mt-2 max-w-[760px]">{problem.title}</h2>
              <p className="msp-body mt-3 max-w-[760px]">{problem.subtitle}</p>
            </div>
            <div className="rounded-[16px] border border-gray-100 bg-[#f7f9fc] p-5">
              <p className="text-[11px] font-bold tracking-[0.18em] text-msp-blue">WHAT THIS CREATES</p>
              <p className="mt-4 text-[16px] font-semibold leading-relaxed text-msp-ink">
                These are rarely isolated support issues. They are signs that ownership, standards, and review cadence are missing.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {problem.items.map((item) => (
              <article key={item.title} className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                <h3 className="msp-card-title">{item.title}</h3>
                <p className="msp-body mt-3">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <p className="msp-eyebrow">MATURITY MODEL</p>
            <h2 className="msp-section-title mt-2">{maturityModel.title}</h2>
            <p className="msp-body mx-auto mt-3 max-w-[760px]">{maturityModel.subtitle}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {maturityModel.steps.map((step, index) => (
              <article
                key={`${step.level}-${step.title}`}
                className={cn(
                  "relative min-h-[220px] rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card",
                  step.featured && "border-msp-blue/30 bg-[#edf4ff]",
                  index < maturityModel.steps.length - 1 &&
                    "xl:after:absolute xl:after:right-[-10px] xl:after:top-1/2 xl:after:w-5 xl:after:border-t xl:after:border-msp-border xl:after:content-['']",
                )}
              >
                <p className={cn("text-[11px] font-bold tracking-[0.2em] text-msp-subtle", step.featured && "text-msp-blue")}>
                  {step.level}
                </p>
                <h3 className="msp-card-title mt-2">{step.title}</h3>
                <ul className="msp-list mt-3 grid gap-2">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-4">
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-16 md:py-18">
        <Container size="content">
          <div className="text-center">
            <p className="msp-eyebrow">DELIVERY MODEL</p>
            <h2 className="msp-section-title mt-2">{operatingModel.title}</h2>
            <p className="msp-body mx-auto mt-3 max-w-[780px]">
              {operatingModel.description}
            </p>
            <p className="msp-body mx-auto mt-3 max-w-[780px]">
              {operatingModel.bridgeSentence}
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {operatingModel.stages.map((stage) => (
              <article key={stage.id} className="rounded-[14px] border border-gray-100 bg-white p-4 shadow-msp-card">
                <p className="text-[11px] font-bold tracking-[0.18em] text-msp-blue">{stage.title.toUpperCase()}</p>
                <p className="msp-body mt-2.5">{stage.description}</p>
              </article>
            ))}
          </div>

          <Tabs
            items={modelTabs}
            value={activeModelTab}
            onValueChange={setActiveModelTab}
            variant="pill"
            className="mt-7"
          />

          <div className="mt-8 space-y-6">
            {activeModelContent.blocks.map((block, index) => {
              const showVisual = index === 0 || index === 2;

              return (
                <article
                  key={`${activeModelContent.value}-${block.title}`}
                  className="rounded-[16px] border border-gray-100 bg-white p-5 shadow-msp-card md:p-6"
                >
                  {showVisual ? (
                    <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                      <div className={cn(index % 2 === 1 && "lg:order-2")}>
                        <h3 className="msp-subsection-title">{block.title}</h3>
                        <p className="msp-body mt-3">{block.description}</p>
                        <ul className="msp-list mt-4 grid gap-2">
                          {block.bullets.map((bullet) => (
                            <li key={bullet} className="relative pl-4">
                              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={cn(index % 2 === 1 && "lg:order-1")}>
                        <VisualPlaceholder
                          tone={activeModelContent.tone}
                          variant="split"
                          framed={false}
                          imageSrc={block.imageSrc}
                          imageAlt={block.imageAlt}
                          className="h-[165px] md:h-[190px]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
                      <div className="max-w-[760px]">
                        <h3 className="msp-subsection-title">{block.title}</h3>
                        <p className="msp-body mt-3">{block.description}</p>
                      </div>
                      <div className="rounded-[14px] border border-[#e7edf4] bg-[#f7f9fc] p-5">
                        <p className="text-[11px] font-bold tracking-[0.18em] text-msp-blue">IN PRACTICE</p>
                        <ul className="msp-list mt-4 grid gap-2">
                          {block.bullets.map((bullet) => (
                            <li key={bullet} className="relative pl-4">
                              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
            <div>
              <p className="msp-eyebrow">SERVICE LANES</p>
              <h2 className="msp-section-title mt-2">{coreServices.title}</h2>
              <p className="msp-body mt-3 max-w-[260px]">{coreServices.subtitle}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {coreServices.cards.map((card) => {
                const cardContent = (
                  <article className="group min-h-[204px] rounded-[14px] border border-gray-100 bg-white p-6 shadow-msp-card transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#d9e4f2] hover:shadow-[0_8px_26px_rgba(15,23,42,0.07)]">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <Icon
                          icon={coreServiceIcons[card.title as keyof typeof coreServiceIcons]}
                          tone="blue"
                          badge
                          size={15}
                        />
                        <h3 className="msp-card-title">{card.title}</h3>
                      </div>
                      {"href" in card ? <ArrowRight className="h-4 w-4 text-msp-subtle transition-transform group-hover:translate-x-0.5" /> : null}
                    </div>
                    <p className="msp-body mt-3">{card.body}</p>
                  </article>
                );

                return "href" in card ? (
                  <Link key={card.title} href={card.href} className="block">
                    {cardContent}
                  </Link>
                ) : (
                  <div key={card.title}>{cardContent}</div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <p className="msp-eyebrow">DELIVERY RHYTHM</p>
          <h2 className="msp-section-title mt-2">{proof.title}</h2>
          <p className="msp-body mt-3 max-w-[820px]">
            {proof.subtitle}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {(Object.keys(workStepIcons) as Array<keyof typeof workStepIcons>).map((step) => (
              <article key={step} className="rounded-[10px] border border-gray-100 bg-white p-4 shadow-msp-card">
                <div className="flex items-center gap-2">
                  <Icon icon={workStepIcons[step]} tone="slate" size={16} badge />
                  <h3 className="msp-card-title">{step}</h3>
                </div>
                <p className="msp-list mt-3">{deliveryStepDescriptions[step]}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
            <div>
              <p className="msp-eyebrow">RESOURCES</p>
              <h2 className="msp-section-title mt-2">{resourcesPreview.title}</h2>
              <p className="msp-body mt-3 max-w-[260px]">
                Practical guidance for pricing, security posture, and moving from reactive support to structured delivery.
              </p>
            </div>
            <div className="space-y-4">
              {resourcesPreview.cards.map((card, index) => {
                const cardContent = (
                  <article className="rounded-[14px] border border-gray-100 bg-white p-5 shadow-msp-card transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#d9e4f2] hover:shadow-[0_8px_26px_rgba(15,23,42,0.07)]">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <span className="inline-flex rounded-full border border-[#d6e6f8] bg-[#edf5ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-msp-blue">
                        Guide {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-msp-subtle">Read guide</span>
                    </div>
                    <h3 className="msp-card-title mt-4">{card.title}</h3>
                    <p className="msp-body mt-3 max-w-[700px]">{card.description}</p>
                  </article>
                );

                return (
                  <Link key={card.title} href={card.href} className="block">
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        title={closingCta.title}
        subtitle="A short senior-led review to clarify your biggest risks, the most practical next improvements, and whether structured IT management is the right fit."
        reassuranceLine="No obligation. You’ll leave with a clearer view of risk, priorities, and whether structured support is the right next step."
        reviewGainTitle="What you’ll gain from the review:"
        reviewGainItems={[
          "A clearer view of your current operational and security risks",
          "The most practical next improvements to stabilise the environment",
          "A straightforward sense of whether TRIAD is the right fit",
        ]}
        buttonLabel={closingCta.buttonLabel}
        buttonHref={closingCta.buttonHref}
        tone="heroSoft"
      />
    </>
  );
}
