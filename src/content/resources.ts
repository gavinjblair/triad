export type ResourceItem = {
  label: string;
  description: string;
  href?: string;
  tone?: "blue" | "slate" | "green" | "amber" | "purple" | "dark";
};

export const resourcesContent = {
  hero: {
    eyebrow: "RESOURCES",
    title: "Structured guidance for confident IT decisions.",
    subtitle:
      "Practical decision support for security, Microsoft 365, continuity, and managed service planning.",
    bullets: [
      "Executive-level clarity without jargon or sales pressure.",
      "Structured comparisons focused on scope, risk, and accountability.",
      "Actionable guidance written for owners and leadership teams.",
    ],
    primaryCta: { label: "Book a Structured IT Review", href: "/contact" },
    secondaryCta: { label: "View Solutions", href: "/solutions" },
  },
  categories: ["Strategic Guides", "Operational Guides", "Security Guides"],
  sections: [
    {
      id: "strategic-guides",
      title: "Strategic Guides",
      items: [
        {
          label: "What Managed IT Actually Includes (Beyond Tickets)",
          description:
            "A clear explanation of what structured managed IT covers - scope, standards, responsibility, and what to expect.",
          tone: "blue",
        },
        {
          label: "What Managed IT Costs in Scotland (2026 Guide)",
          description:
            "A practical breakdown of what influences cost in Scotland and how to compare providers properly.",
          tone: "blue",
        },
        {
          label: "From Reactive IT to Structured Environments",
          description:
            "Why reactive support creates long-term risk and what changes when environments are run with structure.",
          tone: "blue",
        },
      ] satisfies ResourceItem[],
    },
    {
      id: "operational-guides",
      title: "Operational Guides",
      items: [
        {
          label: "What Good Onboarding Looks Like",
          description:
            "What a proper onboarding process includes - discovery, baselines, documentation, and stabilisation.",
          tone: "green",
        },
        {
          label: "Structured IT Operational Baseline Assessment",
          description:
            "A practical framework used to review scope, security posture, and documented responsibility before management begins.",
          tone: "green",
        },
        {
          label: "Service Scope and SLA Response Times",
          description:
            "How to evaluate response commitments and whether providers can deliver controlled service outcomes.",
          tone: "green",
        },
      ] satisfies ResourceItem[],
    },
    {
      id: "security-guides",
      title: "Security Guides",
      items: [
        {
          label: "Security Baselines for Microsoft 365 (What Most Businesses Miss)",
          description:
            "The practical security essentials most organisations overlook when adopting Microsoft 365.",
          tone: "amber",
        },
        {
          label: "Identity Risk and Access Control Essentials",
          description:
            "How to reduce identity risk using policy design, role control, and practical governance.",
          tone: "amber",
        },
        {
          label: "Backup Readiness and Recovery Testing",
          description:
            "What recovery readiness really requires and how to validate continuity in operational reality.",
          tone: "amber",
        },
      ] satisfies ResourceItem[],
    },
  ],
  closingCta: {
    title: "Need clarity on your current IT position?",
    buttonLabel: "Book a Structured IT Review",
    secondaryLabel: "View Pricing",
    buttonHref: "/contact",
    secondaryHref: "/pricing",
  },
} as const;
