import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";

export const metadata: Metadata = {
  title: "Industries We Support | Triad IT",
  description:
    "Industries supported by Triad IT through structured, security-first managed IT services and predictable operational delivery.",
};

const industries = [
  {
    title: "Professional Services",
    description:
      "Consultancies, advisory firms, and small professional organisations that rely on stable cloud systems and secure data handling.",
  },
  {
    title: "Accountancy Firms",
    description:
      "Accounting firms that depend on reliable document management, Microsoft 365 collaboration, and secure client data handling.",
  },
  {
    title: "Legal Practices",
    description:
      "Legal organisations requiring strong access controls, documentation standards, and secure client communications.",
  },
  {
    title: "Architecture & Engineering",
    description:
      "Firms using specialised software and large project files that require stable infrastructure and predictable IT operations.",
  },
  {
    title: "Property & Construction",
    description:
      "Multi-site organisations requiring secure remote access and consistent system availability across locations.",
  },
  {
    title: "Growing Businesses (10-50 employees)",
    description:
      "Small and growing organisations that require structured IT oversight rather than reactive support.",
  },
] as const;

const supportPoints = [
  "Security baseline implementation",
  "Consistent operational standards",
  "Proactive monitoring and maintenance",
  "Defined review cycles",
  "Strategic technology guidance",
] as const;

export default function WhoWeWorkWithPage() {
  return (
    <>
      <section className="bg-white py-20">
        <Container size="content">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
            <div>
              <h1 className="mt-3 max-w-[620px] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
                Industries We Support
              </h1>
              <p className="mt-5 max-w-[640px] text-[15px] leading-relaxed text-msp-ink">
                Different organisations operate under different operational, security, and compliance requirements.
                Triad IT works with organisations that depend on stable systems, secure data, and predictable
                technology operations.
              </p>
              <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-msp-ink">
                These organisations typically rely on Microsoft 365, cloud infrastructure, and structured service
                management to maintain stability and security.
              </p>
            </div>
            <VisualPlaceholder
              tone="blue"
              variant="list"
              framed={false}
              imageSrc="/images/illustrations/hero-managed-infrastructure.webp"
              imageAlt="Industries supported by structured IT operations"
              className="h-[220px]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">
              Professional Organisations That Depend on Stable IT
            </h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">
              Many organisations rely heavily on consistent system availability, secure data handling, and predictable
              IT operations. Structured IT management helps maintain operational continuity while reducing risk.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container size="content">
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link key={industry.title} href="/services" className="block">
                <article className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                  <h3 className="text-[23px] font-bold tracking-[-0.02em] text-msp-ink">{industry.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-msp-muted">{industry.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="text-center">
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">
              How Structured IT Supports These Organisations
            </h2>
            <p className="mx-auto mt-3 max-w-[760px] text-[14px] leading-relaxed text-msp-muted">
              Structured IT management focuses on:
            </p>
          </div>
          <ul className="mx-auto mt-8 grid max-w-[920px] gap-2 text-[13px] leading-relaxed text-msp-muted md:grid-cols-2">
            {supportPoints.map((point) => (
              <li key={point} className="relative pl-4">
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="msp-hero-soft grid items-center gap-6 rounded-[12px] border border-gray-100 p-7 shadow-msp-card md:grid-cols-[1fr_auto_auto]">
            <div>
              <h2 className="text-[38px] font-bold tracking-[-0.02em] text-msp-ink">
                Need clarity on your current IT environment?
              </h2>
            </div>
            <Button href="/contact" size="sm">
              Book a Structured IT Review
            </Button>
            <Button href="/services" size="sm" variant="secondary">
              View Services
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
