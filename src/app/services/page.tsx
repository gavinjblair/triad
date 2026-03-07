import type { Metadata } from "next";
import Image from "next/image";
import { BrandConveyor } from "@/components/BrandConveyor";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { ServicesOverviewTabs } from "@/components/services/ServicesOverviewTabs";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { serviceOfferings, servicesOverviewContent } from "@/content/services";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services | Triad IT",
  description:
    "Explore TRIAD IT service lanes for managed IT, cybersecurity, Microsoft 365, backup and disaster recovery, and IT strategy support.",
};

export default function ServicesPage() {
  const { hero, tabsSection, supportingSection, closingCta } = servicesOverviewContent;

  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{hero.eyebrow}</p>
              <h1 className="mt-3 max-w-[740px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-[700px] text-[15px] leading-relaxed text-msp-ink">{hero.subtitle}</p>
              <div className="mt-6">
                <Button href={hero.ctaHref} size="sm">
                  {hero.ctaLabel}
                </Button>
              </div>
            </div>

            <VisualPlaceholder
              tone="blue"
              framed={false}
              imageSrc={hero.imageSrc}
              imageAlt={hero.imageAlt}
              className="h-[250px] md:h-[300px]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{tabsSection.title}</h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">{tabsSection.subtitle}</p>
          </div>

          <ServicesOverviewTabs services={serviceOfferings} />

          <div className="mt-14 space-y-16 md:space-y-20">
            {serviceOfferings.map((service, index) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-40"
              >
                <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-20">
                  <div className={cn(index % 2 === 1 && "lg:order-2")}>
                    <h3 className="text-[34px] font-bold leading-[1.2] tracking-[-0.02em] text-msp-ink">
                      {service.overview.headline}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{service.overview.description}</p>
                    <div className="mt-6">
                      <Button href={service.href} size="sm">
                        {service.overview.ctaLabel}
                      </Button>
                    </div>
                  </div>

                  <div className={cn(index % 2 === 1 && "lg:order-1")}>
                    <div className="relative h-[230px] w-full md:h-[270px]">
                      <Image
                        src={service.overview.imageSrc}
                        alt={service.overview.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 460px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <BrandConveyor
            title="Technology Platforms We Support"
            subtitle="Structured service delivery across trusted vendor ecosystems."
          />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{supportingSection.title}</h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">
              {supportingSection.intro}
            </p>
          </div>

          <ul className="mx-auto mt-8 grid max-w-[980px] gap-4 md:grid-cols-2">
            {supportingSection.items.map((item) => (
              <li key={item} className="rounded-[12px] border border-gray-100 bg-white p-5 text-[14px] text-msp-ink shadow-msp-card">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand
        title={closingCta.title}
        buttonLabel={closingCta.buttonLabel}
        buttonHref={closingCta.buttonHref}
        tone={closingCta.tone}
      />
    </>
  );
}
