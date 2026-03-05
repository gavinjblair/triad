import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { featuresContent } from "@/content/features";
import { cn } from "@/lib/cn";

function FeaturePanel({ tone }: { tone: "blue" | "amber" | "green" | "purple" }) {
  return (
    <VisualPlaceholder tone={tone} className="h-[160px] rounded-[10px] border-[#eef2f7]">
      <div className="relative h-full p-4">
        <div className="absolute left-4 top-4 h-[68px] w-[42%] rounded-[7px] border border-[#cadeee] bg-white/90" />
        <div className="absolute right-4 top-10 h-[82px] w-[48%] rounded-[7px] border border-[#cadeee] bg-white/90" />
        <div className="absolute bottom-4 left-1/2 h-[96px] w-[70%] -translate-x-1/2 rounded-[7px] border border-[#cadeee] bg-white/92" />
      </div>
    </VisualPlaceholder>
  );
}

function HeroDashboardPanel() {
  return (
    <VisualPlaceholder tone="slate" className="mx-auto h-[260px] max-w-[900px] rounded-[10px] border-gray-100">
      <div className="grid h-full grid-cols-2 gap-3 p-4">
        <div className="rounded border border-[#d2dae5] bg-white/90 p-3">
          <div className="h-2 w-28 rounded-full bg-[#95b6de]" />
          <div className="mt-3 h-16 rounded bg-[#eef3fa]" />
          <div className="mt-2 h-14 rounded bg-[#eef3fa]" />
        </div>
        <div className="rounded border border-[#d2dae5] bg-white/90 p-3">
          <div className="h-2 w-20 rounded-full bg-[#95b6de]" />
          <div className="mt-3 h-10 rounded bg-[#eef3fa]" />
          <div className="mt-2 h-16 rounded bg-[#eef3fa]" />
        </div>
      </div>
    </VisualPlaceholder>
  );
}

export default function FeaturesPage() {
  const { hero, sectionsTitle, sections, closing } = featuresContent;

  return (
    <>
      <section className="msp-hero-soft msp-hero-rings py-24 md:py-28">
        <Container size="content" className="text-center">
          <h1 className="mx-auto max-w-[840px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
            {hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-[880px] text-[15px] leading-relaxed text-msp-ink">{hero.subtitle}</p>
          <Button href={hero.cta.href} size="sm" className="mt-6">
            {hero.cta.label}
          </Button>
          <div className="mt-8">
            <HeroDashboardPanel />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <h2 className="text-center text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{sectionsTitle}</h2>

          <div className="mt-10 space-y-14">
            {sections.map((section) => {
              const visual = <FeaturePanel tone={section.tone} />;
              const text = (
                <div>
                  <h3 className="text-[35px] font-bold tracking-[-0.02em] text-msp-ink">{section.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-msp-ink">{section.body}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-[13px] leading-6 text-msp-ink">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              );

              return (
                <article key={section.title} className="grid items-center gap-10 md:grid-cols-2">
                  <div className={cn(section.align === "right" && "md:order-2")}>{text}</div>
                  <div className={cn(section.align === "right" && "md:order-1")}>{visual}</div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="msp-hero-soft grid items-center gap-6 rounded-[10px] border border-gray-100 p-7 md:grid-cols-[1fr_220px]">
            <div>
              <p className="max-w-[620px] text-[15px] leading-relaxed text-msp-ink">
                <span className="font-bold text-msp-blue">With almost 90% of SMBs</span> {closing.body}
              </p>
              <Button href={closing.cta.href} size="sm" className="mt-4">
                {closing.cta.label}
              </Button>
            </div>
            <VisualPlaceholder tone="slate" className="h-[126px] rounded-[8px] border-gray-100">
              <div className="flex h-full items-center justify-center">
                <svg viewBox="0 0 120 50" className="h-14 w-[150px] text-[#4c7bb4]" fill="none" aria-hidden="true">
                  <path d="M18 26c6 0 10-7 16-7 5 0 8 4 12 4 4 0 7-4 12-4 6 0 9 7 15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 18h12l6 8-6 8H8c-3 0-5-2-5-5v-6c0-3 2-5 5-5Zm104 0h-12l-6 8 6 8h12c3 0 5-2 5-5v-6c0-3-2-5-5-5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </VisualPlaceholder>
          </div>
        </Container>
      </section>
    </>
  );
}
