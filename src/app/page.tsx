"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
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

function ModelVisual({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="relative h-[176px] w-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain"
      />
    </div>
  );
}

export default function HomePage() {
  const {
    hero,
    problem,
    maturityModel,
    operatingModel,
    coreServices,
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
            <VisualPlaceholder
              tone="blue"
              framed={false}
              imageSrc="/images/illustrations/hero-operational-dashboard.webp"
              imageAlt="Operational dashboard overview"
              className="h-[280px] md:h-[336px]"
            />
          </div>
          <p className="mx-auto mt-8 max-w-[860px] text-center text-[12px] font-medium leading-relaxed text-msp-muted">
            {hero.credibilityStrip}
          </p>
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

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{maturityModel.title}</h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">{maturityModel.subtitle}</p>
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
                <h3 className="mt-2 text-[24px] font-bold tracking-[-0.02em] text-msp-ink">{step.title}</h3>
                <ul className="mt-3 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
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

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{operatingModel.title}</h2>
            <p className="mx-auto mt-3 max-w-[780px] text-[14px] leading-relaxed text-msp-muted">
              {operatingModel.description}
            </p>
            <p className="mx-auto mt-3 max-w-[780px] text-[14px] leading-relaxed text-msp-muted">
              {operatingModel.bridgeSentence}
            </p>
          </div>
          <Tabs
            items={modelTabs}
            value={activeModelTab}
            onValueChange={setActiveModelTab}
            variant="pill"
            className="mt-8"
          />

          <div className="mt-10 space-y-12">
            {activeModelContent.blocks.map((block, index) => (
              <article key={`${activeModelContent.value}-${block.title}`} className="grid items-center gap-10 md:grid-cols-2">
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
                  <ModelVisual imageSrc={block.imageSrc} imageAlt={block.imageAlt} />
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
            {coreServices.cards.map((card) => {
              const cardContent = (
                <article className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                  <div className="flex items-center gap-2.5">
                    <Icon
                      icon={coreServiceIcons[card.title as keyof typeof coreServiceIcons]}
                      tone="blue"
                      badge
                      size={15}
                    />
                    <h3 className="text-[23px] font-bold tracking-[-0.02em] text-msp-ink">{card.title}</h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{card.body}</p>
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
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">OPERATING MODEL</p>
          <h2 className="mt-2 text-[40px] font-bold tracking-[-0.02em] text-msp-ink">How TRIAD IT Works</h2>
          <p className="mt-3 max-w-[820px] text-[14px] leading-relaxed text-msp-muted">
            Operate, protect, recover, and improve through one structured operating rhythm.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {(Object.keys(workStepIcons) as Array<keyof typeof workStepIcons>).map((step) => (
              <article key={step} className="rounded-[10px] border border-gray-100 bg-white p-4 shadow-msp-card">
                <div className="flex items-center gap-2">
                  <Icon icon={workStepIcons[step]} tone="slate" size={16} badge />
                  <h3 className="text-[20px] font-bold text-msp-ink">{step}</h3>
                </div>
              </article>
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
        subtitle="A short consultation to review your current IT environment and discuss how structured IT management could improve stability and security."
        reassuranceLine="No obligation. If we’re not the right fit, you’ll still leave with clear recommendations for improving your current environment."
        reviewGainTitle="What you'll gain from the review:"
        reviewGainItems={[
          "A clear view of your current IT risks",
          "Practical recommendations to improve stability and security",
          "Guidance on whether structured IT management is the right approach",
        ]}
        buttonLabel={closingCta.buttonLabel}
        buttonHref={closingCta.buttonHref}
        tone="heroSoft"
      />
    </>
  );
}
