import type { Metadata } from "next";
import Link from "next/link";
import { BrandConveyor } from "@/components/BrandConveyor";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

export const metadata: Metadata = {
  title: "Cybersecurity for SMEs Edinburgh & the Lothians | Triad IT",
  description:
    "Cybersecurity for SMEs in Edinburgh and the Lothians. Security-first controls delivered through structured service management, accountable operations and senior oversight.",
};

const problemPoints = [
  "Weak identity controls and inconsistent MFA",
  "Unpatched devices and unmanaged endpoints",
  "Lack of visibility into risks and alerts",
  "Backups that are untested or incomplete",
  "Security decisions made reactively after incidents",
] as const;

const structuredBullets = [
  "Baseline security configuration and hardening",
  "Identity and access controls (MFA, least privilege)",
  "Patch and update management",
  "Endpoint protection and monitoring",
  "Backup and recovery assurance",
] as const;

const includedBullets = [
  "Security baseline review and prioritised action plan",
  "Microsoft 365 security configuration guidance (where applicable)",
  "Device standards and patching approach",
  "Endpoint protection and monitoring setup",
  "Backup verification and recovery checks",
  "Ongoing reviews and continuous improvement",
] as const;

export default function CybersecuritySmesEdinburghPage() {
  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_470px]">
            <div>
              <h1 className="mt-3 max-w-[660px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
                Cybersecurity for SMEs in Edinburgh &amp; the Lothians
              </h1>
              <p className="mt-5 max-w-[620px] text-[15px] leading-relaxed text-msp-ink">
                Security-first IT management delivered with structured controls, accountable operations and senior
                oversight - designed for organisations with 5-20 users.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" size="sm">
                  Book a Free IT Review
                </Button>
              </div>
              <p className="mt-3 max-w-[620px] text-[12px] leading-relaxed text-msp-muted">
                A short consultation to review your current environment, identify security gaps and prioritise
                practical improvements.
              </p>
            </div>
            <VisualPlaceholder
              tone="blue"
              framed={false}
              imageSrc="/images/illustrations/endpoint-security-management.webp"
              imageAlt="Cybersecurity services for SMEs in Edinburgh"
              className="h-[280px] md:h-[336px]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">
              Common Security Gaps in Small Organisations
            </h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">
              Without structured security controls, organisations often face:
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
              <h2 className="text-[40px] font-bold tracking-[-0.02em] text-msp-ink">A Structured Security-First Approach</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">
                Triad IT implements practical cybersecurity controls through structured service management, including:
              </p>
              <ul className="mt-4 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                {structuredBullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">
                The goal is to reduce risk and increase operational stability without complexity.
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">
                Cybersecurity controls are implemented as part of{" "}
                <Link href="/managed-it-services-edinburgh" className="text-msp-blue">
                  structured managed IT services
                </Link>
                .
              </p>
            </div>
            <VisualPlaceholder
              tone="blue"
              variant="split"
              imageSrc="/images/illustrations/identity-access-control.webp"
              imageAlt="Structured cybersecurity controls"
              className="h-[220px] rounded-[10px] border-gray-100"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_420px]">
            <div>
              <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">What&apos;s Included</h2>
              <ul className="mt-3 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                {includedBullets.map((bullet) => (
                  <li key={bullet} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <VisualPlaceholder
              tone="blue"
              imageSrc="/images/illustrations/diagram-compliance-framework.webp"
              imageAlt="Cybersecurity service inclusions"
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
        subtitle="A short consultation to assess your current security posture and discuss how a structured approach can reduce risk."
        buttonLabel="Book a Consultation"
        buttonHref="/contact"
        tone="heroSoft"
      />
    </>
  );
}
