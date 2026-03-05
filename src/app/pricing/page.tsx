import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { pricingContent } from "@/content/pricing";
import { cn } from "@/lib/cn";

export default function PricingPage() {
  const { hero, philosophy, tiers, scopeModel, faq, faqTitle, tierButtonLabel, closingCta } = pricingContent;

  return (
    <>
      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{hero.eyebrow}</p>
              <h1 className="mt-3 max-w-[620px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-[640px] text-[15px] leading-relaxed text-msp-ink">{hero.subtitle}</p>
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
            <VisualPlaceholder tone="blue" className="h-[210px] rounded-[10px] border-gray-100" />
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-6 rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card md:grid-cols-[1fr_360px]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{philosophy.eyebrow}</p>
              <h2 className="mt-2 text-[40px] font-bold tracking-[-0.02em] text-msp-ink">{philosophy.title}</h2>
              <ul className="mt-4 grid gap-2 text-[14px] leading-relaxed text-msp-muted">
                {philosophy.points.map((point) => (
                  <li key={point} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[10px] border border-gray-100 bg-[#f7f8fa] p-4">
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{philosophy.principleTitle}</p>
              {philosophy.principleLines.map((line, index) => (
                <p key={line} className={cn("text-[14px] leading-relaxed text-msp-ink", index === 0 ? "mt-3" : "mt-2")}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{tiers.title}</h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">{tiers.subtitle}</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {tiers.cards.map((card) => (
              <article
                key={card.name}
                className={cn(
                  "rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card",
                  ("featured" in card && card.featured) && "ring-2 ring-msp-blue/40",
                )}
              >
                <h3 className="text-[28px] font-bold tracking-[-0.02em] text-msp-ink">{card.name}</h3>
                <p className="mt-3 text-[35px] font-bold tracking-[-0.02em] text-msp-ink">{card.price}</p>
                <p className="text-[12px] text-msp-muted">{card.note}</p>
                <p className="mt-4 text-[13px] leading-relaxed text-msp-muted">{card.fit}</p>
                <ul className="mt-4 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                  {card.includes.map((item) => (
                    <li key={item} className="relative pl-4">
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" size="sm" className="mt-5 w-full">
                  {tierButtonLabel}
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-[40px] font-bold tracking-[-0.02em] text-msp-ink">{scopeModel.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{scopeModel.body}</p>
              <ul className="mt-4 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                {scopeModel.bullets.map((item) => (
                  <li key={item} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card">
              <h3 className="text-[30px] font-bold tracking-[-0.02em] text-msp-ink">{faqTitle}</h3>
              <Accordion items={faq.map((item) => ({ ...item }))} defaultOpenId={faq[0]?.id} className="mt-4" />
            </div>
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
