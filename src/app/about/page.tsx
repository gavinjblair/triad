import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { aboutContent } from "@/content/about";

export default function AboutPage() {
  const { hero, whyTriad, philosophy, founder, partnership, whoWeWorkWith, regions, closingCta } = aboutContent;

  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{hero.eyebrow}</p>
              <h1 className="mt-3 max-w-[640px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-[640px] text-[15px] leading-relaxed text-msp-ink">{hero.subtitle}</p>
              <p className="mt-3 max-w-[680px] text-[14px] leading-relaxed text-msp-muted">{hero.credibilityLine}</p>
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
                <Button href={hero.secondaryCta.href} size="sm" variant="secondary">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>
            <VisualPlaceholder
              tone="dark"
              variant="dashboard"
              imageSrc="/images/illustrations/hero-hybrid-infrastructure.webp"
              imageAlt="Structured IT delivery with accountability"
              className="h-[220px] rounded-[10px] border-gray-100"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">WHY TRIAD</p>
          <h2 className="mt-2 text-[40px] font-bold tracking-[-0.02em] text-msp-ink">{whyTriad.title}</h2>
          <div className="mt-4 grid gap-3 text-[14px] leading-relaxed text-msp-muted">
            {whyTriad.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">PHILOSOPHY</p>
          <h2 className="mt-2 text-[40px] font-bold tracking-[-0.02em] text-msp-ink">{philosophy.title}</h2>
          <p className="mt-3 max-w-[780px] text-[14px] leading-relaxed text-msp-muted">{philosophy.subtitle}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {philosophy.pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                <h3 className="text-[24px] font-bold tracking-[-0.02em] text-msp-ink">{pillar.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{pillar.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{whoWeWorkWith.title}</h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">{whoWeWorkWith.intro}</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-[920px] gap-3 md:grid-cols-2">
            {whoWeWorkWith.items.map((item) => (
              <div key={item} className="rounded-[10px] border border-gray-100 bg-white px-4 py-3 text-[13px] text-msp-ink shadow-msp-card">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-8 md:grid-cols-[1.05fr_1fr]">
            <div>
              <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{founder.title}</h2>
              <VisualPlaceholder
                tone="blue"
                variant="split"
                imageSrc="/images/illustrations/hero-managed-infrastructure.webp"
                imageAlt="Managed infrastructure environment"
                className="mt-5 h-[210px] rounded-[10px] border-gray-100"
              />
              <div className="mt-5 rounded-[10px] border border-gray-100 bg-white p-4 shadow-msp-card">
                <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">DELIVERY POSTURE</p>
                <ul className="mt-3 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                  {founder.deliveryPosture.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">LEADERSHIP</p>
              <h3 className="mt-2 text-[38px] font-bold tracking-[-0.02em] text-msp-ink">{founder.heading}</h3>
              <div className="mt-4 grid gap-3 text-[14px] leading-relaxed text-msp-muted">
                {founder.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid gap-8 md:grid-cols-[1fr_420px]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">PARTNERSHIP</p>
              <h2 className="mt-2 text-[40px] font-bold tracking-[-0.02em] text-msp-ink">{partnership.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{partnership.body}</p>
              <p className="mt-3 text-[11px] font-bold tracking-[0.2em] text-msp-blue">{partnership.modelLine}</p>
            </div>
            <div className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">OPERATING PRINCIPLES</p>
              <ul className="mt-3 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                {partnership.principles.map((item) => (
                  <li key={item} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
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
          <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">COVERAGE</p>
          <h2 className="mt-2 max-w-[540px] text-[40px] font-bold tracking-[-0.02em] text-msp-ink">{regions.title}</h2>
          <p className="mt-3 max-w-[700px] text-[14px] leading-relaxed text-msp-muted">{regions.body}</p>
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
