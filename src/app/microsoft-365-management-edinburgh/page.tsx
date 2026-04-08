import type { Metadata } from "next";
import Link from "next/link";
import { BrandConveyor } from "@/components/BrandConveyor";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

export const metadata: Metadata = {
  title: "Microsoft 365 Management Edinburgh & the Lothians | Triad IT",
  description:
    "Microsoft 365 management in Edinburgh and the Lothians. Secure configuration, structured governance and accountable operations with senior oversight for SMEs.",
};

const problemPoints = [
  "Inconsistent MFA and access controls",
  "Email security gaps and phishing exposure",
  "Unclear ownership of tenant settings",
  "Messy permissions and data sharing risk",
  "Support that is reactive rather than structured",
] as const;

const structuredBullets = [
  "Secure identity and access configuration",
  "Tenant standards and governance",
  "Email security improvements",
  "Device and user onboarding/offboarding processes",
  "Ongoing oversight and continuous improvement",
] as const;

const includedBullets = [
  "Tenant review and security baseline",
  "MFA and conditional access guidance (where applicable)",
  "Email security configuration improvements",
  "Account lifecycle management (joiners/movers/leavers)",
  "Policy and standards documentation",
  "Regular reviews and structured support",
] as const;

export default function Microsoft365ManagementEdinburghPage() {
  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_470px]">
            <div>
              <h1 className="mt-3 max-w-[660px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
                Microsoft 365 Management in Edinburgh &amp; the Lothians
              </h1>
              <p className="mt-5 max-w-[620px] text-[15px] leading-relaxed text-msp-ink">
                Secure configuration and structured management of Microsoft 365 - delivered with accountable operations
                and senior oversight for organisations with 5-20 users.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" size="sm">
                  Book a Free IT Review
                </Button>
              </div>
              <p className="mt-3 max-w-[620px] text-[12px] leading-relaxed text-msp-muted">
                A short consultation to review your Microsoft 365 setup, identify risks and improve reliability.
              </p>
            </div>
            <VisualPlaceholder
              tone="blue"
              framed={false}
              imageSrc="/images/illustrations/m365-governance-framework.webp"
              imageAlt="Microsoft 365 management in Edinburgh"
              className="h-[280px] md:h-[336px]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">
              When Microsoft 365 Isn&apos;t Managed Properly
            </h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">
              Organisations often experience:
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
              <h2 className="text-[40px] font-bold tracking-[-0.02em] text-msp-ink">Structured Microsoft 365 Management</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">
                Triad IT manages Microsoft 365 using structured service management, focusing on:
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
                The result is a more secure, reliable environment that supports stable day-to-day operations.
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">
                Microsoft 365 environments are most effective when managed as part of{" "}
                <Link href="/managed-it-services-edinburgh" className="text-msp-blue">
                  structured managed IT services
                </Link>
                .
              </p>
            </div>
            <VisualPlaceholder
              tone="blue"
              variant="split"
              imageSrc="/images/illustrations/Conditional-access-policy-illustration.webp"
              imageAlt="Structured Microsoft 365 management approach"
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
              imageSrc="/images/illustrations/m365-service-inclusions-visual.webp"
              imageAlt="Microsoft 365 service inclusions"
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
        subtitle="A short consultation to review your Microsoft 365 configuration and discuss how structured management can improve security and stability."
        buttonLabel="Book a Consultation"
        buttonHref="/contact"
        tone="heroSoft"
      />
    </>
  );
}
