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
    "Explore TRIAD IT service lanes for managed IT, cybersecurity, Microsoft 365, backup and disaster recovery, domain and web hosting, and IT strategy support.",
};

export default function ServicesPage() {
  const { hero, tabsSection, supportingSection, closingCta } = servicesOverviewContent;
  const badgeClasses = {
    blue: "border-[#d6e6f8] bg-[#edf5ff] text-msp-blue",
    green: "border-[#d8eddc] bg-[#eef9f1] text-[#4a9b63]",
    amber: "border-[#f2e1c2] bg-[#fff7e9] text-[#c18b3b]",
    purple: "border-[#dde1f5] bg-[#f5f7fd] text-[#7385b0]",
    slate: "border-[#dce4ee] bg-[#f1f5fa] text-[#5f6d82]",
    dark: "border-gray-200 bg-[#f7f9fc] text-msp-ink",
  } as const;
  const rowAccentClasses = {
    blue: "border-l-msp-blue",
    green: "border-l-[#5fa39f]",
    amber: "border-l-[#bf8f58]",
    purple: "border-l-[#7385b0]",
    slate: "border-l-[#7b8797]",
    dark: "border-l-msp-ink",
  } as const;

  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
            <div>
              <p className="msp-eyebrow">{hero.eyebrow}</p>
              <h1 className="msp-hero-title mt-3 max-w-[740px]">
                {hero.title}
              </h1>
              <p className="msp-lead mt-5 max-w-[700px]">{hero.subtitle}</p>
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
            <h2 className="msp-section-title">{tabsSection.title}</h2>
            <p className="msp-body mx-auto mt-3 max-w-[760px]">{tabsSection.subtitle}</p>
          </div>

          <ServicesOverviewTabs services={serviceOfferings} />

          <div className="mt-14 space-y-16 md:space-y-20">
            {serviceOfferings.map((service, index) => (
              <article
                key={service.slug}
                id={service.slug}
                className="scroll-mt-40"
              >
                <div className={cn("grid items-center gap-8 rounded-[18px] border border-gray-100 border-l-4 bg-white p-6 shadow-msp-card lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16 lg:p-7", rowAccentClasses[service.overview.tone])}>
                  <div className={cn(index % 2 === 1 && "lg:order-2")}>
                    <span className={cn("inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]", badgeClasses[service.overview.tone])}>
                      {service.overview.badge}
                    </span>
                    <h3 className="msp-subsection-title mt-4 max-w-[540px]">
                      {service.overview.headline}
                    </h3>
                    <p className="msp-body mt-3 max-w-[520px]">
                      {service.overview.description}
                    </p>
                    <div className="mt-6">
                      <Button href={service.href} size="sm">
                        {service.overview.ctaLabel}
                      </Button>
                    </div>
                  </div>

                  <div className={cn(index % 2 === 1 && "lg:order-1")}>
                    <div className="relative h-[210px] w-full md:h-[245px]">
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
            <h2 className="msp-section-title">{supportingSection.title}</h2>
            <p className="msp-body mx-auto mt-3 max-w-[760px]">
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
