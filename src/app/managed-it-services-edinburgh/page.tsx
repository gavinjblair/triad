import type { Metadata } from "next";
import Link from "next/link";
import { BrandConveyor } from "@/components/BrandConveyor";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

export const metadata: Metadata = {
  title: "Managed IT Services in Edinburgh & the Lothians | Triad IT",
  description:
    "Managed IT services in Edinburgh and the Lothians for organisations needing structured, security-first IT management with accountable operations and senior oversight.",
};

const problemPoints = [
  "Systems that fail without warning",
  "Hidden security risks",
  "Slow or reactive support",
  "Unclear ownership of systems",
] as const;

const structuredBullets = [
  "Defined ownership of systems",
  "Security-first design",
  "Structured service management",
  "Senior oversight of delivery",
] as const;

export default function ManagedItServicesEdinburghPage() {
  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_470px]">
            <div>
              <h1 className="mt-3 max-w-[660px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
                Managed IT Services in Edinburgh &amp; the Lothians
              </h1>
              <p className="mt-5 max-w-[620px] text-[15px] leading-relaxed text-msp-ink">
                Structured, security-first IT management with accountable operations and senior oversight - designed for
                organisations with 5-20 users.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" size="sm">
                  Book a Free IT Review
                </Button>
              </div>
              <p className="mt-3 max-w-[620px] text-[12px] leading-relaxed text-msp-muted">
                A short consultation to review your current IT environment and identify risks or operational gaps.
              </p>
            </div>
            <VisualPlaceholder
              tone="blue"
              imageSrc="/images/illustrations/hero-operational-dashboard.webp"
              imageAlt="Managed IT services operational dashboard"
              className="h-[280px] rounded-[10px] border-gray-100 md:h-[336px]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">When IT Lacks Structure</h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">
              Organisations without structured IT management often experience:
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {problemPoints.map((point) => (
              <article key={point} className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                <h3 className="text-[22px] font-bold tracking-[-0.02em] text-msp-ink">{point}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-6 rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card md:grid-cols-[1fr_360px]">
            <div>
              <h2 className="text-[40px] font-bold tracking-[-0.02em] text-msp-ink">Structured IT Management</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">
                Triad IT provides a structured approach to IT operations, combining:
              </p>
              <ul className="mt-4 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                {structuredBullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <VisualPlaceholder
              tone="blue"
              variant="split"
              imageSrc="/images/illustrations/operating-model-blueprint.webp"
              imageAlt="Structured IT management operating model"
              className="h-[220px] rounded-[10px] border-gray-100"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_420px]">
            <div>
              <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">Managed IT Services</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">
                Proactive management of your IT systems, ensuring stability, security and structured operational
                oversight.
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">
                Explore our{" "}
                <Link href="/cybersecurity-smes-edinburgh" className="text-msp-blue">
                  cybersecurity approach
                </Link>{" "}
                and{" "}
                <Link href="/microsoft-365-management-edinburgh" className="text-msp-blue">
                  Microsoft 365 management
                </Link>{" "}
                for additional service detail.
              </p>
            </div>
            <VisualPlaceholder
              tone="blue"
              imageSrc="/images/illustrations/hero-managed-infrastructure.webp"
              imageAlt="Managed IT services infrastructure"
              className="h-[210px] rounded-[10px] border-gray-100"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <BrandConveyor
            title="Technology Platforms We Support"
            subtitle="Supporting organisations across Edinburgh and the Lothians with structured managed IT services."
          />
        </Container>
      </section>

      <CTABand
        title="Book a Free IT Review"
        subtitle="A short consultation to review your current IT environment and identify risks or operational gaps."
        buttonLabel="Book a Consultation"
        buttonHref="/contact"
        tone="heroSoft"
      />
    </>
  );
}
