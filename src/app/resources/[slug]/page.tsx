import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { createGuideMdxComponents } from "@/components/mdx/GuideMdxComponents";
import { OnThisPage } from "@/components/mdx/OnThisPage";
import { VisualPlaceholder } from "@/components/VisualPlaceholder";
import { extractGuideHeadings } from "@/lib/mdxHeadings";
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
    imageSrc: "/images/illustrations/resource-strategic-guides-visual.webp",
  },
  Operational: {
    tone: "green",
    imageSrc: "/images/illustrations/resource-operational-guides-visual.webp",
  },
  Security: {
    tone: "amber",
    imageSrc: "/images/illustrations/resource-security-guides-visual.webp",
  },
} as const;

const RELATED_SERVICE_PROMPTS = {
  Strategic: {
    title: "Need structured strategic direction?",
    description:
      "Explore how TRIAD supports planning cadence, prioritisation, and governance through practical vCIO engagement.",
    href: "/services/it-strategy-vcio",
    buttonLabel: "Explore IT Strategy / vCIO",
  },
  Operational: {
    title: "Need stronger day-to-day IT operations?",
    description:
      "Explore TRIAD's managed IT lane for structured delivery, operational accountability, and reliable service cadence.",
    href: "/services/managed-it",
    buttonLabel: "Explore Managed IT",
  },
  Security: {
    title: "Need security controls delivered as an operating discipline?",
    description:
      "Explore TRIAD's cybersecurity lane for practical control baselines, identity governance, and continuous improvement.",
    href: "/services/cybersecurity",
    buttonLabel: "Explore Cybersecurity",
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

function estimateReadingTime(rawBody: string) {
  const withoutCodeFences = rawBody.replace(/```[\s\S]*?```/g, " ");
  const withoutInlineCode = withoutCodeFences.replace(/`[^`]+`/g, " ");
  const withoutLinks = withoutInlineCode.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  const withoutImages = withoutLinks.replace(/!\[([^\]]*)\]\([^)]+\)/g, " ");
  const withoutMdxTags = withoutImages.replace(/<[^>]+>/g, " ");
  const plainText = withoutMdxTags
    .replace(/[#>*_~|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const words = plainText ? plainText.split(" ").length : 0;
  const minutes = Math.max(1, Math.round(words / 225));

  return `${minutes} min read`;
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
  const relatedServicePrompt = RELATED_SERVICE_PROMPTS[guide.category];
  const articleHeadings = extractGuideHeadings(guide.body, { levels: [2, 3] });
  const tocHeadings = articleHeadings.filter((heading) => heading.level === 2);
  const mdxComponents = createGuideMdxComponents(articleHeadings);
  const estimatedReadingTime = estimateReadingTime(guide.body);

  return (
    <>
      <section className="msp-hero-soft border-b border-msp-border py-8 md:py-10">
        <Container size="content" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1080px]">
            <p className="inline-flex rounded-full border border-msp-blue/25 bg-white/80 px-3 py-1 text-[11px] font-bold tracking-[0.14em] text-msp-blue">
              {guide.category.toUpperCase()} GUIDE
            </p>
            <h1 className="mt-5 max-w-[22ch] text-5xl font-semibold leading-tight tracking-[-0.03em] text-msp-ink">
              {guide.title}
            </h1>
            <p className="mt-2 text-[12px] font-medium text-msp-subtle">
              <span className="sr-only">Estimated reading time: </span>
              {estimatedReadingTime}
            </p>
            <p className="mt-4 max-w-[860px] text-[18px] leading-[1.85] text-msp-subtle">{guide.excerpt}</p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-[13px] text-msp-subtle">
              <span>Updated {formatDate(guide.date)}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-8 md:py-10">
        <Container size="content" className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1120px] lg:grid lg:grid-cols-[minmax(0,820px)_220px] lg:items-start lg:gap-12">
            <div className="min-w-0">
              <article className="grid gap-6">
                <MDXRemote source={guide.body} components={mdxComponents} />
              </article>
            </div>
            <div className="hidden border-l border-msp-border/70 pl-6 lg:block">
              <OnThisPage headings={tocHeadings} />
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-[1120px]">
            <div>
              <h2 className="text-[34px] font-bold tracking-[-0.02em] text-msp-ink">Related Guides</h2>
              <p className="mt-3 max-w-[720px] text-[14px] leading-relaxed text-msp-muted">
                Continue with related guidance in this track to build a clearer operational picture.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedGuides.map((relatedGuide) => (
                <Link key={relatedGuide.slug} href={`/resources/${relatedGuide.slug}`} className="block">
                  <article className="h-full rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card transition-colors hover:bg-msp-surface-alt/50">
                    <div className="grid gap-4 md:grid-cols-[1fr_170px] md:items-center">
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
                        className="h-[104px] rounded-[8px] border-gray-100"
                      />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-[1120px] rounded-[12px] border border-gray-100 bg-[#f8fbff] p-6 shadow-[0_1px_8px_rgba(16,24,39,0.04)]">
            <p className="text-[11px] font-bold tracking-[0.12em] text-msp-blue">RELATED SERVICE</p>
            <h3 className="mt-2 text-[26px] font-bold tracking-[-0.02em] text-msp-ink">{relatedServicePrompt.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-msp-muted">{relatedServicePrompt.description}</p>
            <div className="mt-5">
              <Button href={relatedServicePrompt.href} size="sm" variant="secondary">
                {relatedServicePrompt.buttonLabel}
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-[1120px] rounded-[14px] border border-gray-100 bg-white p-7 shadow-msp-card md:p-8">
            <h2 className="text-[34px] font-bold tracking-[-0.02em] text-msp-ink">Need clarity on your current IT environment?</h2>
            <p className="mt-3 text-[16px] leading-relaxed text-msp-muted">
              A structured review provides clear priorities and practical next steps without sales pressure.
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

          <div className="mx-auto mt-8 max-w-[1120px]">
            <Link href="/resources" className="inline-block text-[13px] font-semibold text-msp-blue">
              View all guides
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
