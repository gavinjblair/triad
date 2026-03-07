export const pricingContent = {
  hero: {
    eyebrow: "PRICING",
    title: "Transparent, structured pricing",
    subtitle:
      "Structured environments are priced by responsibility - not incidents - so leadership can plan with clarity.",
    bullets: [
      "No opaque per-incident billing.",
      "Defined scope tied to service depth and standards.",
      "Service level reflects operational maturity.",
    ],
    primaryCta: { label: "Book a Structured IT Review", href: "/contact" },
    secondaryCta: { label: "View Services", href: "/services" },
  },
  philosophy: {
    eyebrow: "PRICING PHILOSOPHY",
    title: "Structured environments priced by responsibility - not incidents",
    points: [
      "Reactive support rewards noise; structured delivery rewards control.",
      "Pricing aligns with operating depth, security posture, and accountability.",
      "Clear boundaries avoid hidden effort and surprise costs.",
    ],
    principleTitle: "PRINCIPLE",
    principleLines: ["No seat pricing for tickets.", "No incentives for uncontrolled environments."],
  },
  tiers: {
    guidanceLine:
      "Most organisations start with Business and expand based on security and governance requirements.",
    title: "Choose the depth of operational control",
    subtitle: "All service levels run through a defined operating model.",
    reassuranceLine: "No long-term lock-ins. Clear scope. Structured delivery.",
    cards: [
      {
        name: "Essential",
        price: "GBP 89",
        note: "per managed user / month",
        fit: "For environments needing defined support, patching, and operational stability.",
        includes: [
          "Managed endpoint support",
          "Patch and monitoring baseline",
          "Core documentation ownership",
          "Monthly service summary",
        ],
      },
      {
        name: "Business",
        highlightLabel: "Most organisations choose this",
        price: "GBP 119",
        note: "per managed user / month",
        fit: "For organisations requiring deeper security and governance controls.",
        includes: [
          "Everything in Essential",
          "Enhanced Microsoft 365 security baseline",
          "Identity and access control review",
          "Quarterly structured service review",
        ],
        featured: true,
      },
      {
        name: "Enterprise",
        price: "GBP 149",
        note: "per managed user / month",
        fit: "For complex environments requiring broad control and senior oversight.",
        includes: [
          "Everything in Business",
          "Advanced governance cadence",
          "Extended recovery and continuity planning",
          "Senior-level strategic oversight",
        ],
      },
    ],
  },
  scopeModel: {
    title: "Service level defines depth / Environment defines scope",
    body:
      "Scope is built around your actual environment and operating requirements. Service level reflects depth of control and accountability.",
    bullets: [
      "User count and endpoint profile.",
      "Microsoft 365 and identity complexity.",
      "Security baseline and compliance needs.",
      "Backup, recovery, and continuity posture.",
      "Operational maturity and governance cadence.",
    ],
  },
  faq: [
    {
      id: "faq-1",
      title: "Is there a minimum service term?",
      content:
        "Yes. Structured management is delivered on defined terms to support onboarding, baseline work, and consistent outcomes.",
    },
    {
      id: "faq-2",
      title: "Can you support mixed Microsoft 365 setups?",
      content:
        "Yes. We review current tenant posture, licensing, and policy state, then define the scope needed for controlled delivery.",
    },
    {
      id: "faq-3",
      title: "Are project costs included in monthly pricing?",
      content:
        "Monthly pricing covers managed service scope. Projects are scoped separately with written deliverables and agreed outcomes.",
    },
    {
      id: "faq-4",
      title: "How quickly can service start?",
      content:
        "Service start depends on environment complexity and onboarding requirements. We provide a defined onboarding timeline during review.",
    },
    {
      id: "faq-5",
      title: "Do you support hybrid environments?",
      content:
        "Yes - we support mixed Microsoft 365, on-prem, and cloud environments. Scope is defined during onboarding and reflected in the service level.",
    },
  ],
  faqTitle: "Frequently asked questions",
  tierButtonLabel: "Book a Structured IT Review",
  closingCta: {
    title: "Ready to bring structure to your IT environment?",
    buttonLabel: "Book a Structured IT Review",
    buttonHref: "/contact",
  },
} as const;
