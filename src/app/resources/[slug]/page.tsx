import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { getAllGuides, getGuideBySlug } from "@/lib/guides";

type Props = {
  params: Promise<{ slug: string }>;
};

const RELATED_GUIDE_SLUGS = {
  Strategic: [
    "managed-it-what-it-includes",
    "managed-it-costs-scotland-2026",
    "reactive-to-structured-it",
  ],
  Operational: [
    "what-good-onboarding-looks-like",
    "structured-it-operational-baseline-assessment",
    "service-scope-and-sla-response-times",
  ],
  Security: [
    "microsoft-365-security-baseline",
    "identity-risk-and-access-control",
    "backup-readiness-and-recovery-testing",
  ],
} as const;

const RELATED_GUIDE_VISUALS = {
  Strategic: {
    tone: "blue",
    imageSrc: "/images/illustrations/hero-it-strategy-review.webp",
  },
  Operational: {
    tone: "green",
    imageSrc: "/images/illustrations/hero-operational-dashboard.webp",
  },
  Security: {
    tone: "amber",
    imageSrc: "/images/illustrations/endpoint-security-management.webp",
  },
} as const;

export async function generateStaticParams() {
  const guides = await getAllGuides();
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guide not found | TRIAD IT",
    };
  }

  return {
    title: `${guide.title} | TRIAD IT`,
    description: guide.excerpt,
  };
}

const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-[28px] font-bold tracking-[-0.02em] text-msp-ink" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-[22px] font-bold tracking-[-0.02em] text-msp-blue" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-[16px] leading-relaxed text-msp-muted" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="grid list-disc gap-2 pl-5 text-[16px] leading-relaxed text-msp-muted marker:text-msp-blue"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="grid list-decimal gap-2 pl-5 text-[16px] leading-relaxed text-msp-muted marker:font-semibold marker:text-msp-ink"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li className="pl-1" {...props} />,
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a className="font-semibold text-msp-blue underline-offset-2 hover:underline" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-msp-ink" {...props} />
  ),
};

function formatDate(rawDate: string) {
  const parsedDate = new Date(rawDate);
  if (Number.isNaN(parsedDate.getTime())) {
    return rawDate;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

export default async function ResourceGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  const guides = await getAllGuides();

  if (!guide) {
    notFound();
  }

  const relatedGuides = RELATED_GUIDE_SLUGS[guide.category]
    .map((relatedSlug) => guides.find((entry) => entry.slug === relatedSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const relatedGuideVisual = RELATED_GUIDE_VISUALS[guide.category];

  return (
    <section className="bg-white py-20">
      <Container size="content">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[11px] font-bold tracking-[0.2em] text-msp-blue">{guide.category.toUpperCase()} GUIDE</p>
          <h1 className="mt-3 text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">{guide.title}</h1>
          <p className="mt-5 text-[16px] leading-relaxed text-msp-muted">{guide.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-msp-subtle">
            <span>{formatDate(guide.date)}</span>
            <span aria-hidden="true">•</span>
            <span>{guide.readingTime}</span>
          </div>

          <article className="mt-10 grid gap-6">
            <MDXRemote source={guide.body} components={mdxComponents} />
          </article>

          <div className="mt-12">
            <h2 className="text-[28px] font-bold tracking-[-0.02em] text-msp-ink">Related Guides</h2>
            <div className="mt-5 grid gap-4">
              {relatedGuides.map((relatedGuide) => (
                <Link key={relatedGuide.slug} href={`/resources/${relatedGuide.slug}`} className="block">
                  <article className="rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card">
                    <div className="grid gap-4 md:grid-cols-[1fr_190px] md:items-center">
                      <div>
                        <h3 className="text-[24px] font-bold text-msp-ink">{relatedGuide.title}</h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-msp-muted">{relatedGuide.excerpt}</p>
                        <span className="mt-3 inline-block text-[12px] font-semibold text-msp-blue">Read guide</span>
                      </div>
                      <VisualPlaceholder
                        tone={relatedGuideVisual.tone}
                        variant="list"
                        imageSrc={relatedGuideVisual.imageSrc}
                        imageAlt={`${relatedGuide.title} guide illustration`}
                        className="h-[110px] rounded-[8px] border-gray-100"
                      />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-[28px] font-bold tracking-[-0.02em] text-msp-ink">
              Need clarity on your current IT environment?
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-msp-muted">
              A structured review provides clear priorities and practical next steps - without sales pressure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" size="sm">
                Book a Structured IT Review
              </Button>
              <Button href="/managed-it-services-edinburgh" size="sm" variant="secondary">
                View Managed IT Services
              </Button>
            </div>
          </div>

          <Link href="/resources" className="mt-6 inline-block text-[13px] font-semibold text-msp-blue">
            View all guides
          </Link>
        </div>
      </Container>
    </section>
  );
}
