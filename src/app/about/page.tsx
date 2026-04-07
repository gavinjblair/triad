import { ArrowRight, BriefcaseBusiness, MapPinned, ShieldCheck, Waypoints } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { aboutContent } from "@/content/about";

export default function AboutPage() {
  const { hero, whyTriad, philosophy, founder, partnership, whoWeWorkWith, regions, closingCta } = aboutContent;
  const philosophyIcons = [Waypoints, ShieldCheck, BriefcaseBusiness] as const;

  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_400px]">
            <div>
              <p className="msp-eyebrow">{hero.eyebrow}</p>
              <h1 className="msp-hero-title mt-3 max-w-[640px]">
                {hero.title}
              </h1>
              <p className="msp-lead mt-5 max-w-[640px]">{hero.subtitle}</p>
              <p className="msp-body mt-3 max-w-[680px]">{hero.credibilityLine}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={hero.primaryCta.href} size="sm">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} size="sm" variant="secondary">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>
            <div className="rounded-[18px] border border-gray-100 border-l-4 border-l-msp-blue bg-white/92 p-7 shadow-msp-card">
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">WHAT THIS MEANS</p>
              <p className="mt-4 text-[16px] font-semibold leading-relaxed text-msp-ink">
                Direct ownership stays close to delivery, with standards and accountability visible from the start.
              </p>
              <ul className="msp-list mt-5 grid gap-3">
                {hero.bullets.map((bullet) => (
                  <li key={bullet} className="relative pl-5">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-msp-blue" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[12px] font-semibold text-msp-blue">Senior-led delivery. Defined systems. No reactive support theatre.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <p className="msp-eyebrow">WHY TRIAD</p>
              <h2 className="msp-section-title mt-2">{whyTriad.title}</h2>
              <div className="msp-body mt-4 grid gap-3">
                {whyTriad.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="rounded-[16px] border border-gray-100 bg-[#f7f9fc] p-6 shadow-[0_1px_10px_rgba(15,23,42,0.03)]">
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">CORE POSITION</p>
              <p className="mt-4 text-[18px] font-semibold leading-relaxed text-msp-ink">
                Structured systems, clear ownership, and direct accountability instead of reactive support theatre.
              </p>
              <div className="mt-5 grid gap-3 rounded-[12px] border border-white bg-white/80 p-4">
                {["Defined scope from the outset", "Senior oversight stays visible", "Security-first standards are applied consistently"].map((line) => (
                  <p key={line} className="text-[14px] leading-relaxed text-msp-muted">
                    {line}
                  </p>
                ))}
              </div>
              <p className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-msp-blue">
                Built for organisations that need calm control
                <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <p className="msp-eyebrow">PHILOSOPHY</p>
          <h2 className="msp-section-title mt-2">{philosophy.title}</h2>
          <p className="msp-body mt-3 max-w-[780px]">{philosophy.subtitle}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {philosophy.pillars.map((pillar, index) => {
              const PillarIcon = philosophyIcons[index];

              return (
                <article key={pillar.title} className="rounded-[14px] border border-gray-100 bg-white p-5 shadow-msp-card">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e6f8] bg-[#edf5ff] text-msp-blue">
                      <PillarIcon className="h-4.5 w-4.5" />
                    </span>
                    <p className="text-[11px] font-bold tracking-[0.18em] text-msp-subtle">PILLAR {index + 1}</p>
                  </div>
                  <h3 className="msp-card-title mt-4">{pillar.title}</h3>
                  <p className="msp-body mt-3">{pillar.body}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
            <div className="max-w-[860px]">
            <p className="msp-eyebrow">WHO WE WORK WITH</p>
            <h2 className="msp-section-title mt-2">{whoWeWorkWith.title}</h2>
            <p className="msp-body mt-3 max-w-[760px]">{whoWeWorkWith.intro}</p>
          </div>
          <div className="mt-8 grid max-w-[920px] gap-4 md:grid-cols-2">
            {whoWeWorkWith.items.map((item) => (
              <article key={item} className="rounded-[12px] border border-gray-100 bg-white px-5 py-4 shadow-msp-card">
                <p className="text-[11px] font-bold tracking-[0.16em] text-msp-subtle">BEST FIT</p>
                <p className="mt-2 text-[14px] font-semibold text-msp-ink">{item}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-8 md:grid-cols-[1.05fr_1fr]">
            <div>
              <h2 className="msp-section-title">{founder.title}</h2>
              <p className="msp-body mt-4 max-w-[620px]">
                The operating model only works if responsibility stays senior, visible, and close to delivery.
              </p>
              <div className="mt-5 rounded-[14px] border border-gray-100 bg-white p-5 shadow-msp-card">
                <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">DELIVERY POSTURE</p>
                <ul className="msp-list mt-4 grid gap-3">
                  {founder.deliveryPosture.map((item) => (
                    <li key={item} className="relative pl-5">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-msp-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className="msp-eyebrow">LEADERSHIP</p>
              <h3 className="msp-subsection-title mt-2">{founder.heading}</h3>
              <div className="msp-body mt-4 grid gap-3">
                {founder.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 border-t border-[#e9eef4]">
        <Container size="content">
          <div className="grid gap-8 md:grid-cols-[1fr_420px]">
            <div>
              <p className="msp-eyebrow">PARTNERSHIP</p>
              <h2 className="msp-section-title mt-2">{partnership.title}</h2>
              <p className="msp-body mt-3">{partnership.body}</p>
              <div className="mt-5 rounded-[12px] border border-[#d6e6f8] bg-[#edf5ff] px-4 py-3">
                <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">OPERATING MODEL</p>
                <p className="mt-2 text-[13px] font-semibold text-msp-ink">{partnership.modelLine}</p>
              </div>
            </div>
            <div className="rounded-[14px] border border-gray-100 bg-white p-5 shadow-msp-card">
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">OPERATING PRINCIPLES</p>
              <ul className="msp-list mt-4 grid gap-3">
                {partnership.principles.map((item) => (
                  <li key={item} className="relative pl-5">
                    <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-msp-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
            <div>
              <p className="msp-eyebrow">COVERAGE</p>
              <h2 className="msp-section-title mt-2 max-w-[540px]">{regions.title}</h2>
              <p className="msp-body mt-3 max-w-[700px]">{regions.body}</p>
            </div>
            <div className="rounded-[14px] border border-gray-100 bg-white p-5 shadow-msp-card">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6e6f8] bg-[#edf5ff] text-msp-blue">
                  <MapPinned className="h-4.5 w-4.5" />
                </span>
                <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">SERVICE AREA</p>
              </div>
              <p className="msp-body mt-4">
                Edinburgh, Glasgow, Stirling, and surrounding areas, with structured delivery designed for SMEs that need direct accountability rather than a layered support chain.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        title={closingCta.title}
        buttonLabel={closingCta.buttonLabel}
        buttonHref={closingCta.buttonHref}
        tone="hero"
      />
    </>
  );
}
