import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { resourcesContent } from "@/content/resources";
import { cn } from "@/lib/cn";

const sectionIllustrations = {
  "strategic-guides": [
    "/images/illustrations/hero-it-strategy-review.webp",
    "/images/illustrations/hero-it-strategy-review.webp",
    "/images/illustrations/hero-it-strategy-review.webp",
    "/images/illustrations/hero-it-strategy-review.webp",
    "/images/illustrations/hero-it-strategy-review.webp",
  ],
  "operational-guides": [
    "/images/illustrations/hero-operational-dashboard.webp",
    "/images/illustrations/hero-operational-dashboard.webp",
    "/images/illustrations/hero-operational-dashboard.webp",
  ],
  "security-guides": [
    "/images/illustrations/endpoint-security-management.webp",
    "/images/illustrations/endpoint-security-management.webp",
    "/images/illustrations/endpoint-security-management.webp",
  ],
} as const;

export default function ResourcesPage() {
  const { hero, categories, sections, closingCta } = resourcesContent;

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
            <VisualPlaceholder
              tone="blue"
              variant="list"
              framed={false}
              imageSrc="/images/illustrations/hero-it-strategy-review.webp"
              imageAlt="Structured guidance resources"
              className="h-[220px]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
            <aside className="h-fit rounded-[6px] border border-gray-100 bg-white p-5 shadow-msp-card">
              <h3 className="text-[14px] font-bold text-msp-ink">CATEGORIES</h3>
              <nav className="mt-4 grid gap-2 text-[12px] text-msp-muted">
                {categories.map((label, index) => (
                  <a
                    key={label}
                    href={`#${sections[index]?.id}`}
                    className={cn(
                      "rounded-[4px] px-2 py-1.5 transition-colors hover:bg-[#edf4ff] hover:text-msp-blue",
                      index === 0 && "bg-[#edf4ff] text-msp-blue",
                    )}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-12">
              {sections.map((section, sectionIndex) => (
                <section key={section.id} id={section.id} className="scroll-mt-20">
                  <h2 className="text-[38px] font-bold tracking-[-0.02em] text-msp-ink">{section.title}</h2>
                  <div className="mt-5 grid gap-4">
                    {section.items.map((item, itemIndex) => {
                      const guideHref = "href" in item ? item.href : undefined;
                      const card = (
                        <article className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                          <div className="grid gap-4 md:grid-cols-[1fr_190px] md:items-center">
                            <div>
                              <h3 className="text-[24px] font-bold text-msp-ink">{item.label}</h3>
                              {!guideHref ? <p className="mt-1 text-[12px] text-msp-subtle">Coming soon</p> : null}
                              <p className="mt-2 text-[14px] leading-relaxed text-msp-muted">{item.description}</p>
                              {guideHref ? (
                                <span className="mt-3 inline-block text-[12px] font-semibold text-msp-blue">Read guide</span>
                              ) : (
                                <span className="mt-3 inline-block text-[12px] font-semibold text-msp-subtle">Read guide</span>
                              )}
                            </div>
                            <VisualPlaceholder
                              tone={item.tone ?? (sectionIndex % 2 === 0 ? "blue" : "green")}
                              variant="list"
                              imageSrc={
                                sectionIllustrations[section.id as keyof typeof sectionIllustrations][itemIndex] ??
                                "/images/illustrations/diagram-it-lifecycle.webp"
                              }
                              imageAlt={`${item.label} guide illustration`}
                              className="h-[110px] rounded-[8px] border-gray-100"
                            />
                          </div>
                        </article>
                      );

                      return (
                        guideHref ? (
                          <Link key={item.label} href={guideHref} className="block">
                            {card}
                          </Link>
                        ) : (
                          <div key={item.label}>{card}</div>
                        )
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="msp-hero-soft grid items-center gap-6 rounded-[12px] border border-gray-100 p-7 shadow-msp-card md:grid-cols-[1fr_auto_auto]">
            <div>
              <h2 className="text-[38px] font-bold tracking-[-0.02em] text-msp-ink">{closingCta.title}</h2>
            </div>
            <Button href={closingCta.buttonHref} size="sm">
              {closingCta.buttonLabel}
            </Button>
            <Button href={closingCta.secondaryHref} size="sm" variant="secondary">
              {closingCta.secondaryLabel}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
