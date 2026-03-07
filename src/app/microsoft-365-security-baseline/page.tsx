import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { CTABand } from "@/components/CTABand";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

export const metadata: Metadata = {
  title: "Microsoft 365 Security Baseline for SMEs | Triad IT",
  description:
    "Microsoft 365 security baseline guidance for SMEs, covering identity controls, configuration standards, operational risks, and structured remediation.",
};

const securityGaps = [
  "Missing multi-factor authentication",
  "Overly permissive sharing settings",
  "Unmanaged device access",
  "Lack of configuration documentation",
] as const;

const baselineIncludes = [
  "Identity protection and MFA",
  "Conditional access policies",
  "Device compliance standards",
  "Secure sharing configuration",
] as const;

const faqItems = [
  {
    id: "m365-backup",
    title: "Do we need backup for Microsoft 365?",
    content:
      "Microsoft provides platform resilience but does not guarantee protection against accidental deletion, ransomware, or malicious changes. A structured backup approach ensures data can be recovered when needed.",
  },
  {
    id: "m365-secure-default",
    title: "Is Microsoft 365 secure by default?",
    content:
      "Default deployments often lack baseline security controls such as MFA enforcement, conditional access policies, and secure sharing restrictions.",
  },
  {
    id: "m365-baseline-definition",
    title: "What is a Microsoft 365 security baseline?",
    content:
      "A defined configuration standard that ensures identity protection, device access policies, and monitoring are applied consistently across the tenant.",
  },
  {
    id: "m365-review-cadence",
    title: "How often should Microsoft 365 security be reviewed?",
    content:
      "Security baselines should be reviewed regularly to ensure configuration drift has not occurred and new risks are addressed.",
  },
] as const;

export default function Microsoft365SecurityBaselinePage() {
  return (
    <>
      <section className="msp-hero py-24 md:py-28">
        <Container size="content">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_470px]">
            <div>
              <h1 className="mt-3 max-w-[660px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
                Microsoft 365 Security Baseline for SMEs
              </h1>
              <p className="mt-5 max-w-[620px] text-[15px] leading-relaxed text-msp-ink">
                Microsoft 365 environments often contain hidden security gaps when deployed without structured
                governance. A defined baseline ensures identity controls, configuration standards and monitoring are
                applied consistently.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact" size="sm">
                  Book a Free IT Review
                </Button>
              </div>
            </div>
            <VisualPlaceholder
              tone="blue"
              framed={false}
              imageSrc="/images/illustrations/m365-governance-framework.webp"
              imageAlt="Microsoft 365 security baseline overview"
              className="h-[280px] md:h-[336px]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid gap-8 md:grid-cols-[1fr_420px]">
            <div>
              <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">
                Common Microsoft 365 security gaps
              </h2>
              <ul className="mt-4 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                {securityGaps.map((bullet) => (
                  <li key={bullet} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <VisualPlaceholder
              tone="blue"
              variant="list"
              imageSrc="/images/illustrations/Conditional-access-policy-illustration.webp"
              imageAlt="Microsoft 365 security gap examples"
              className="h-[210px] rounded-[10px] border-gray-100"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-8 md:grid-cols-[1fr_420px]">
            <div>
              <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">What a proper baseline includes</h2>
              <ul className="mt-4 grid gap-2 text-[13px] leading-relaxed text-msp-muted">
                {baselineIncludes.map((bullet) => (
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
              imageSrc="/images/illustrations/identity-access-control.webp"
              imageAlt="Microsoft 365 baseline inclusions"
              className="h-[210px] rounded-[10px] border-gray-100"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid gap-6 rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card md:grid-cols-[1fr_360px]">
            <div>
              <h2 className="text-[40px] font-bold tracking-[-0.02em] text-msp-ink">
                Operational risks without a baseline
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">
                Without a defined baseline, organisations face increased exposure to data leakage, account compromise,
                and compliance failures caused by inconsistent controls and unmanaged configuration drift.
              </p>
            </div>
            <VisualPlaceholder
              tone="blue"
              imageSrc="/images/illustrations/diagram-compliance-framework.webp"
              imageAlt="Operational risk from missing Microsoft 365 baseline"
              className="h-[210px] rounded-[10px] border-gray-100"
            />
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-6 rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card md:grid-cols-[1fr_360px]">
            <div>
              <h2 className="text-[40px] font-bold tracking-[-0.02em] text-msp-ink">
                How structured IT management solves this
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">
                Structured IT operations management applies consistent Microsoft 365 standards, ownership, and
                monitoring so configuration quality is maintained over time and risks are identified before they become
                operational problems.
              </p>
            </div>
            <VisualPlaceholder
              tone="blue"
              imageSrc="/images/illustrations/hero-operational-dashboard.webp"
              imageAlt="Structured IT management for Microsoft 365 security"
              className="h-[210px] rounded-[10px] border-gray-100"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-[40px] font-bold tracking-[-0.02em] text-msp-ink">Frequently Asked Questions</h2>
            </div>
            <div className="rounded-[12px] border border-gray-100 bg-white p-6 shadow-msp-card">
              <Accordion items={[...faqItems]} defaultOpenId={faqItems[0].id} />
            </div>
          </div>
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
