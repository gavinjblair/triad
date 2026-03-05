export const homeContent = {
  hero: {
    eyebrow: "OVERVIEW",
    title: "Structured IT leadership for stable, secure operations.",
    description:
      "Proactive IT leadership through structured service management designed to keep environments secure, stable, and predictable.",
    credibilityStrip: "Trusted by organisations across Edinburgh, Glasgow and Central Scotland.",
    proofStrip: [
      {
        title: "Senior-led delivery",
        body: "Work directly with the lead consultant.",
      },
      {
        title: "Defined scope & standards",
        body: "Clear boundaries, documented delivery.",
      },
      {
        title: "1 business-day response",
        body: "Every enquiry answered within one business day.",
      },
    ],
    bullets: [
      "No reactive support model by default.",
      "Defined systems owned by senior oversight.",
      "Structured accountability and clear reporting.",
      "Scope and responsibilities documented in writing.",
    ],
    primaryCta: { label: "Book a Structured IT Review", href: "/contact" },
    secondaryCta: { label: "View Solutions", href: "/solutions" },
  },
  brands: {
    title: "Brands that trust structured delivery",
    subtitle: "Trusted by organisations that value controlled and reliable IT.",
    items: ["Copaque", "intwo", "NETRICH", "Gocloud", "Firstline", "Triad"],
  },
  problem: {
    title: "When IT lacks structure, leadership absorbs the risk.",
    subtitle: "Three recurring pressure points we resolve through defined delivery.",
    items: [
      {
        title: "Operational Drift",
        body: "Standards vary by engineer, documentation decays, and accountability becomes unclear across day-to-day support.",
      },
      {
        title: "Hidden Risk",
        body: "Security gaps, legacy setup, and weak ownership remain unseen until incidents force urgent action.",
      },
      {
        title: "Reactive Delivery",
        body: "Support becomes incident-driven, with priorities changing constantly and no defined model for improvement.",
      },
    ],
  },
  operatingModel: {
    title: "Operating model: Stabilise -> Secure -> Improve",
    description:
      "A practical operating model used across managed environments to create consistency, reduce noise, and support measurable progress.",
    tabs: [
      { value: "infrastructure", label: "Infrastructure" },
      { value: "security", label: "Security" },
      { value: "documentation", label: "Documentation" },
      { value: "monitoring", label: "Monitoring" },
      { value: "governance", label: "Governance" },
    ],
    blocks: [
      {
        id: "infrastructure",
        title: "One operating model across every client.",
        description:
          "Infrastructure standards are applied consistently so environments remain stable, predictable, and supportable.",
        bullets: [
          "Documented baseline and expected state.",
          "Version and lifecycle management discipline.",
          "Operational consistency across estates.",
        ],
        tone: "blue",
      },
      {
        id: "security",
        title: "Baselines applied by default.",
        description:
          "Security controls are applied from onboarding and maintained through review, ownership, and practical enforcement.",
        bullets: [
          "Identity and access hardening.",
          "Policy enforcement at service level.",
          "Security reporting with clear ownership.",
        ],
        tone: "green",
      },
      {
        id: "documentation",
        title: "Backup oversight and recovery readiness.",
        description:
          "Recovery planning is continuously reviewed with practical validation and documented accountability.",
        bullets: [
          "Defined recovery model.",
          "Restore testing cadence.",
          "Continuity review in service cycle.",
        ],
        tone: "amber",
      },
      {
        id: "monitoring",
        title: "Reviews that drive improvement.",
        description:
          "Structured reviews turn operational insight into prioritised actions, measured outcomes, and accountable progress.",
        bullets: [
          "Scope and standards review.",
          "Risk priority tracking.",
          "Monthly service improvement plan.",
        ],
        tone: "slate",
      },
      {
        id: "governance",
        title: "Defined leadership rhythm.",
        description:
          "Governance creates calm operations through regular checkpoints, ownership clarity, and practical decision support.",
        bullets: [
          "Senior-level oversight cadence.",
          "Defined escalation and communication path.",
          "Transparent reporting for leadership.",
        ],
        tone: "purple",
      },
    ],
    bullets: [
      "Infrastructure standards and lifecycle control.",
      "Security baseline with identity, device, and access hardening.",
      "Documentation discipline and ownership visibility.",
      "Monitoring and patching with defined review cadence.",
      "Governance through structured monthly oversight.",
    ],
  },
  coreServices: {
    title: "Core services with defined scope",
    subtitle: "Structured services delivered through a single operating model.",
    cards: [
      {
        title: "Managed IT Services",
        body: "Controlled support, patching, monitoring, and standards management for day-to-day stability.",
      },
      {
        title: "Cybersecurity",
        body: "Security-first configuration, identity controls, response readiness, and practical risk reduction.",
      },
      {
        title: "Microsoft 365 Management",
        body: "Tenant governance, security baselines, policy control, and documented administration.",
      },
      {
        title: "Backup & Disaster Recovery",
        body: "Backup design, recovery validation, and continuity planning for controlled resilience.",
      },
      {
        title: "IT Strategy / vCIO",
        body: "Senior-level planning, accountability reviews, and operational direction aligned to business goals.",
      },
    ],
  },
  proof: {
    title: "Delivery built on defined systems",
    subtitle: "Clear service foundations designed for predictable, accountable delivery.",
    items: [
      "Defined SLA and response structure",
      "Clear ownership of infrastructure and risk",
      "Structured onboarding and documentation",
      "Quarterly service reviews with leadership",
    ],
  },
  resourcesPreview: {
    title: "Guidance for confident IT decisions",
    cards: [
      {
        title: "What Managed IT Costs in Scotland (2026 Guide)",
        description: "Board-level clarity on pricing models, scope boundaries, and accountability expectations.",
      },
      {
        title: "Security Baselines for Microsoft 365",
        description: "What businesses miss most often and how to close practical gaps without disruption.",
      },
      {
        title: "From Reactive IT to Structured Environments",
        description: "A practical framework to move from firefighting to controlled, measurable operations.",
      },
    ],
  },
  closingCta: {
    title: "Ready for controlled, accountable IT delivery?",
    buttonLabel: "Book a Structured IT Review",
    buttonHref: "/contact",
  },
} as const;
