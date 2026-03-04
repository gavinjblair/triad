import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { IntegrationsRow } from "@/components/IntegrationsRow";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { solutionsContent } from "@/content/solutions";

function WorkspaceDiagram() {
  return (
    <div className="mx-auto mt-8 max-w-[760px] rounded-[8px] border border-[#d8e3ef] bg-[#f5f9ff] p-5">
      <div className="mx-auto w-[180px] rounded-[8px] border border-[#bdd4ef] bg-white px-4 py-3 text-center text-[13px] font-bold text-[#2e6fbf]">
        ENDPOINT DEVICES
      </div>
      <div className="mx-auto mt-5 flex max-w-[640px] items-center justify-between gap-4">
        {["Desktop", "Laptop", "Servers"].map((item) => (
          <div
            key={item}
            className="flex h-12 min-w-[96px] items-center justify-center rounded-md border border-[#cdddef] bg-white text-[11px] font-semibold text-msp-muted"
          >
            {item}
          </div>
        ))}
        {["Rugged", "TV", "Kiosk"].map((item) => (
          <div
            key={item}
            className="flex h-12 min-w-[96px] items-center justify-center rounded-md border border-[#cdddef] bg-white text-[11px] font-semibold text-msp-muted"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-[11px] font-semibold text-msp-muted">
        {["Windows", "FreeBSD", "Apple", "HP AX", "Linux", "IBM AX"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  const { hero, tabs, automation, manageTitle, integrations, cta } = solutionsContent;

  return (
    <>
      <section className="msp-hero py-14">
        <Container size="content" className="text-center">
          <h1 className="text-[54px] font-bold tracking-[-0.03em] text-msp-ink">{hero.title}</h1>
          <p className="mt-3 text-[18px] text-msp-ink">{hero.subtitle}</p>
          <Button href={hero.cta.href} size="sm" className="mt-6 h-[44px] px-6 text-[13px]">
            {hero.cta.label}
          </Button>
        </Container>
      </section>

      <section className="bg-white pb-16 pt-6">
        <Container size="content">
          <div className="overflow-hidden rounded-[9px] border border-msp-border bg-white">
            <div className="flex flex-wrap">
              {tabs.map((tab, index) => (
                <button
                  type="button"
                  key={tab}
                  className="border-r border-msp-border px-4 py-4 text-[13px] font-semibold text-msp-muted transition-colors hover:text-msp-ink last:border-r-0"
                >
                  <span className={index === 0 ? "border-b-2 border-msp-blue pb-3 text-msp-ink" : ""}>{tab}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-5">
            <div>
              <h2 className="text-[45px] font-bold tracking-[-0.02em] text-msp-ink">{automation.title}</h2>
              <p className="mt-2 max-w-[640px] text-[14px] leading-7 text-msp-ink">{automation.subtitle}</p>
            </div>
            <Button href="#" variant="secondary" size="sm" className="h-[40px] min-w-[132px] text-[12px]">
              {automation.ctaLabel}
            </Button>
          </div>

          <div className="mt-6 grid gap-0 overflow-hidden rounded-[10px] border border-[#dbe4ee] md:grid-cols-2">
            <VisualPlaceholder tone="blue" className="min-h-[310px] rounded-none border-0 border-r border-[#dbe4ee]">
              <div className="grid h-full grid-cols-2 gap-3 p-4">
                <div className="rounded border border-[#c9d8eb] bg-white/90 p-3" />
                <div className="rounded border border-[#c9d8eb] bg-white/90 p-3" />
                <div className="col-span-2 rounded border border-[#c9d8eb] bg-white/90 p-3" />
              </div>
            </VisualPlaceholder>
            <div className="bg-[#edf2f7] p-5">
              <Accordion
                items={automation.accordion.map((item) => ({ ...item }))}
                defaultOpenId={automation.accordion[0]?.id}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-14 pt-6">
        <Container size="content" className="text-center">
          <h2 className="text-[46px] font-bold tracking-[-0.02em] text-msp-ink">{manageTitle}</h2>
          <WorkspaceDiagram />
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

      <CTABand
        title={cta.title}
        buttonLabel={cta.buttonLabel}
        buttonHref={cta.buttonHref}
        tone="heroSoft"
      />
    </>
  );
}
