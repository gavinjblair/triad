type PillarKey = "infrastructure" | "security" | "documentation" | "monitoring" | "governance";

type PillarBlock = {
  title: string;
  description: string;
  bullets: [string, string, string];
  placeholderLabel: string;
  imageSrc: string;
  imageAlt: string;
};

type PillarTab = {
  value: PillarKey;
  label: string;
  tone: "blue" | "green" | "amber" | "slate" | "purple";
  blocks: PillarBlock[];
};

type MaturityStep = {
  level: string;
  title: string;
  bullets: [string, string, string];
  featured?: boolean;
};

export const homeContent = {
  hero: {
    eyebrow: "OVERVIEW",
    title: "Structured Managed IT in Edinburgh with Stability, Security, and Accountability",
    description:
      "TRIAD delivers structured managed IT with security-first standards, defined ownership, and senior oversight. We support organisations across Edinburgh and the Lothians that need reliable day-to-day operations instead of reactive support.",
    credibilityStrip:
      "A short senior-led review to identify operational gaps, reduce uncertainty, and clarify practical next steps.",
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
      "Defined ownership of systems",
      "Security-first design",
      "Structured service management",
      "Senior oversight of delivery",
    ],
    primaryCta: { label: "Book a Free IT Review", href: "/contact" },
    secondaryCta: { label: "View Services", href: "/services" },
  },
  brands: {
    title: "Technology Platforms We Support",
    subtitle: "Supporting organisations across Edinburgh and the Lothians with structured managed IT services.",
    items: ["Copaque", "intwo", "NETRICH", "Gocloud", "Firstline", "Triad"],
  },
  credibilityBridge: {
    title: "Why Organisations Move to Structured IT",
    body:
      "Growing organisations often outgrow reactive support. A structured operating model improves stability, reduces risk and clarifies ownership of systems.",
    items: [
      "Clear accountability for systems and changes",
      "Reduced downtime through proactive oversight",
      "Security controls applied consistently",
      "Predictable operations with regular reviews",
    ],
  },
  problem: {
    title: "When IT Lacks Structure",
    subtitle:
      "Without structured ownership and standards, day-to-day IT becomes harder to trust. The result is recurring disruption, slower decisions, and unmanaged risk over time.",
    items: [
      {
        title: "Systems that fail without warning",
        body: "Unexpected outages and recurring issues interrupt teams and reduce confidence in day-to-day operations.",
      },
      {
        title: "Hidden security risks",
        body: "Unmanaged configurations and inconsistent controls increase exposure until incidents force urgent action.",
      },
      {
        title: "Slow or reactive support",
        body: "Response becomes ticket-led rather than structured, causing delays and repeated disruption.",
      },
      {
        title: "Unclear ownership of systems",
        body: "Critical infrastructure decisions are left unresolved when accountability and standards are not clearly defined.",
      },
    ],
  },
  maturityModel: {
    title: "From reactive IT to structured environments.",
    subtitle:
      "TRIAD moves organisations up the maturity curve using defined standards, clear ownership, and a measurable operating rhythm.",
    steps: [
      {
        level: "Level 1",
        title: "Reactive",
        bullets: [
          "Break/fix, undocumented systems",
          "Inconsistent security controls",
          "Recovery untested",
        ],
      },
      {
        level: "Level 2",
        title: "Managed",
        bullets: [
          "Monitoring and patching baseline",
          "Basic identity controls (MFA, policies)",
          "Backups configured, partial checks",
        ],
      },
      {
        level: "Level 3",
        title: "Structured",
        bullets: [
          "Defined operating model across clients",
          "Security baseline applied by default",
          "Recovery readiness + clear ownership",
        ],
        featured: true,
      },
      {
        level: "Level 4",
        title: "Governed",
        bullets: [
          "Governance cadence (vCIO) and risk reporting",
          "Control validation (security + recovery)",
          "Metrics-driven continuous improvement",
        ],
      },
    ] satisfies MaturityStep[],
  },
  operatingModel: {
    title: "How Structured Delivery Works",
    description:
      "TRIAD combines defined standards, security-first delivery, and senior accountability into one operating model.",
    bridgeSentence:
      "The stages below show the overall delivery rhythm. The tabs beneath show what that structure looks like in practice.",
    stages: [
      {
        id: "stabilise",
        title: "Stabilise",
        description:
          "Bring the environment under control by improving visibility, reducing recurring issues, and establishing a predictable operating baseline.",
        bullets: [
          "Full operational visibility and ownership",
          "Reduced noise from repeat incidents",
          "Clear documentation of the environment",
        ],
      },
      {
        id: "secure",
        title: "Secure",
        description:
          "Apply consistent security baselines across identity, devices, and core services to reduce exposure and improve resilience.",
        bullets: [
          "Security standards applied by default",
          "Reduced attack surface and misconfiguration",
          "Verified backup and recovery readiness",
        ],
      },
      {
        id: "improve",
        title: "Improve",
        description:
          "Use structured reviews and planning to drive continual improvement, lifecycle decisions, and measurable progress over time.",
        bullets: [
          "Regular reviews with clear actions",
          "Risk reduction and improvement roadmap",
          "Lifecycle planning and prioritised change",
        ],
      },
    ],
    tabs: [
      {
        value: "infrastructure",
        label: "Infrastructure",
        tone: "blue",
        blocks: [
          {
            title: "One operating model across every client.",
            description:
              "Infrastructure standards are applied consistently so environments remain stable, predictable, and supportable. This creates a dependable baseline for day-to-day operations and change.",
            bullets: [
              "Documented baseline and expected state",
              "Version and lifecycle management discipline",
              "Operational consistency across estates",
            ],
            placeholderLabel: "Infrastructure ? operating model placeholder",
            imageSrc: "/images/illustrations/core-network-architecture.webp",
            imageAlt: "Core network architecture diagram",
          },
          {
            title: "Baselines applied by default.",
            description:
              "Core infrastructure configurations are applied as standard during onboarding and maintained through review and ownership. This reduces drift and removes avoidable variation.",
            bullets: [
              "Standard configurations applied consistently",
              "Patch and update discipline built in",
              "Reduced configuration drift over time",
            ],
            placeholderLabel: "Infrastructure ? baselines placeholder",
            imageSrc: "/images/illustrations/managed-it-automation.webp",
            imageAlt: "Managed IT automation illustration",
          },
          {
            title: "Backup oversight and recovery readiness.",
            description:
              "Backups are treated as a recovery capability, not just a setup task. Coverage and success are monitored so recovery remains reliable when it matters.",
            bullets: [
              "Backup coverage for critical systems",
              "Monitoring of success and failure signals",
              "Recovery readiness reviewed over time",
            ],
            placeholderLabel: "Infrastructure ? backup placeholder",
            imageSrc: "/images/illustrations/backup-replication-on-architecture.webp",
            imageAlt: "Backup replication architecture diagram",
          },
          {
            title: "Reviews that drive improvement.",
            description:
              "Operational signals are used to prioritise reliability improvements and reduce recurring disruption. This keeps the environment moving forward in a controlled way.",
            bullets: [
              "Trends used to guide improvements",
              "Reliability issues addressed systematically",
              "Clear actions and ownership from reviews",
            ],
            placeholderLabel: "Infrastructure ? reviews placeholder",
            imageSrc: "/images/illustrations/hero-operational-dashboard.webp",
            imageAlt: "Operational dashboard illustration",
          },
          {
            title: "Defined leadership rhythm.",
            description:
              "Regular operational cadence ensures infrastructure decisions are intentional, prioritised, and owned. This creates accountability and predictable progress.",
            bullets: [
              "Defined operational check-ins",
              "Lifecycle and capacity planning support",
              "Accountability for outcomes and change",
            ],
            placeholderLabel: "Infrastructure ? governance rhythm placeholder",
            imageSrc: "/images/illustrations/hero-it-strategy-review.webp",
            imageAlt: "IT strategy review illustration",
          },
        ],
      },
      {
        value: "security",
        label: "Security",
        tone: "green",
        blocks: [
          {
            title: "Security baselines applied by default.",
            description:
              "Security is delivered as a consistent baseline across identity, devices, and core services. The focus is on reducing exposure and making controls measurable.",
            bullets: [
              "Controls applied consistently from onboarding",
              "Reduced misconfiguration and attack surface",
              "Security posture tracked over time",
            ],
            placeholderLabel: "Security ? baselines placeholder",
            imageSrc: "/images/illustrations/endpoint-security-management.webp",
            imageAlt: "Endpoint security management illustration",
          },
          {
            title: "Identity and access hardening.",
            description:
              "Identity is treated as the control plane for modern environments. Access is hardened so risk is reduced without relying on ad-hoc user behaviour.",
            bullets: [
              "Strong authentication enforced consistently",
              "Access policies aligned to risk",
              "Clear ownership of identity controls",
            ],
            placeholderLabel: "Security ? identity placeholder",
            imageSrc: "/images/illustrations/Conditional-access-policy-illustration.webp",
            imageAlt: "Conditional access policy illustration",
          },
          {
            title: "Device and service protection.",
            description:
              "Devices and core services are protected using a consistent approach to reduce common attack paths. This creates resilience across the estate.",
            bullets: [
              "Standard security controls across devices",
              "Reduced exposure from inconsistent setup",
              "Protection maintained through review",
            ],
            placeholderLabel: "Security ? device/service placeholder",
            imageSrc: "/images/illustrations/endpoint-security-management.webp",
            imageAlt: "Endpoint security management illustration",
          },
          {
            title: "Security reporting with clear ownership.",
            description:
              "Security is made visible through reporting that supports decision-making. The goal is clarity: what’s improving, what’s at risk, and what’s next.",
            bullets: [
              "Clear visibility of security posture",
              "Risks prioritised with ownership",
              "Progress tracked through reviews",
            ],
            placeholderLabel: "Security ? reporting placeholder",
            imageSrc: "/images/illustrations/diagram-compliance-framework.webp",
            imageAlt: "Compliance framework diagram",
          },
          {
            title: "Resilience supported by recovery readiness.",
            description:
              "Security includes the ability to recover. Recovery readiness is validated so incidents don’t become business-ending events.",
            bullets: [
              "Recovery capability treated as essential",
              "Readiness verified through review",
              "Reduced impact when disruption occurs",
            ],
            placeholderLabel: "Security ? resilience placeholder",
            imageSrc: "/images/illustrations/site-failover-architecture.webp",
            imageAlt: "Site failover architecture diagram",
          },
        ],
      },
      {
        value: "documentation",
        label: "Documentation",
        tone: "amber",
        blocks: [
          {
            title: "Operational documentation that supports consistent delivery.",
            description:
              "Documentation turns environments into something that can be supported consistently and improved safely. It reduces dependency on individuals and improves reliability.",
            bullets: [
              "Reduced reliance on tribal knowledge",
              "Improved supportability across the estate",
              "Safer, more predictable change",
            ],
            placeholderLabel: "Documentation ? overview placeholder",
            imageSrc: "/images/illustrations/diagram-it-lifecycle.webp",
            imageAlt: "IT lifecycle diagram",
          },
          {
            title: "Documented baseline and expected state.",
            description:
              "Standards and expected state are documented so delivery is repeatable. This prevents drift and makes gaps easy to identify.",
            bullets: [
              "Clear standards and expected state",
              "Gaps identified quickly",
              "Consistency maintained over time",
            ],
            placeholderLabel: "Documentation ? baseline placeholder",
            imageSrc: "/images/illustrations/diagram-it-maturity.webp",
            imageAlt: "IT maturity diagram",
          },
          {
            title: "Asset and configuration visibility.",
            description:
              "Accurate records support faster support, safer change, and clearer planning. Visibility enables decisions that don’t rely on guesswork.",
            bullets: [
              "Accurate asset records",
              "Configuration visibility where it matters",
              "Better planning and lifecycle decisions",
            ],
            placeholderLabel: "Documentation ? asset/config placeholder",
            imageSrc: "/images/illustrations/hero-managed-infrastructure.webp",
            imageAlt: "Managed infrastructure illustration",
          },
          {
            title: "Operational procedures where they matter.",
            description:
              "Key operational procedures are captured so delivery remains consistent. This improves handovers, response, and recovery.",
            bullets: [
              "Repeatable operational processes",
              "Clear escalation and ownership",
              "Improved continuity of delivery",
            ],
            placeholderLabel: "Documentation ? procedures placeholder",
            imageSrc: "/images/illustrations/illustration-client-onboarding.webp",
            imageAlt: "Client onboarding illustration",
          },
          {
            title: "Recoverability supported by clarity.",
            description:
              "Documentation supports recovery by making systems understandable. When problems occur, the environment can be restored predictably.",
            bullets: [
              "Systems easier to understand and recover",
              "Reduced recovery time through clarity",
              "Improved resilience during disruption",
            ],
            placeholderLabel: "Documentation ? recovery placeholder",
            imageSrc: "/images/illustrations/diagram-it-lifecycle.webp",
            imageAlt: "IT lifecycle diagram",
          },
        ],
      },
      {
        value: "monitoring",
        label: "Monitoring",
        tone: "slate",
        blocks: [
          {
            title: "Monitoring that reduces noise and improves visibility.",
            description:
              "We monitor the environment to surface meaningful signals, not endless alerts. This improves response and reduces avoidable disruption.",
            bullets: [
              "Meaningful signals over alert noise",
              "Faster detection and response",
              "Improved operational visibility",
            ],
            placeholderLabel: "Monitoring ? overview placeholder",
            imageSrc: "/images/illustrations/hero-operational-dashboard.webp",
            imageAlt: "Operational dashboard illustration",
          },
          {
            title: "Early detection before disruption.",
            description:
              "Monitoring is used to identify issues early, before they become user-visible incidents. This supports stability and predictability.",
            bullets: [
              "Issues detected earlier",
              "Reduced disruption to users",
              "Improved stability over time",
            ],
            placeholderLabel: "Monitoring ? early detection placeholder",
            imageSrc: "/images/illustrations/hero-hybrid-infrastructure.webp",
            imageAlt: "Hybrid infrastructure illustration",
          },
          {
            title: "Signal-over-noise alerting approach.",
            description:
              "Alerts are structured to prioritise what matters. This reduces fatigue and keeps focus on resolving the right problems.",
            bullets: [
              "Reduced alert fatigue",
              "Better prioritisation of incidents",
              "Clear escalation signals",
            ],
            placeholderLabel: "Monitoring ? signal/noise placeholder",
            imageSrc: "/images/illustrations/managed-it-automation.webp",
            imageAlt: "Automation illustration representing alert handling",
          },
          {
            title: "Performance and availability visibility.",
            description:
              "Operational visibility supports better decisions and smoother change. Trends provide a basis for improvement rather than guesswork.",
            bullets: [
              "Performance and availability tracked",
              "Trends used for planning",
              "Improvement decisions grounded in data",
            ],
            placeholderLabel: "Monitoring ? performance placeholder",
            imageSrc: "/images/illustrations/core-network-architecture.webp",
            imageAlt: "Architecture diagram representing system visibility",
          },
          {
            title: "Trends used to guide improvements.",
            description:
              "Monitoring isn’t only reactive—it supports improvement. Recurring signals drive prioritised actions and measurable progress.",
            bullets: [
              "Recurring issues identified and reduced",
              "Improvements prioritised from trends",
              "Progress visible through review",
            ],
            placeholderLabel: "Monitoring ? trends placeholder",
            imageSrc: "/images/illustrations/diagram-it-maturity.webp",
            imageAlt: "IT maturity diagram representing improvement over time",
          },
        ],
      },
      {
        value: "governance",
        label: "Governance",
        tone: "purple",
        blocks: [
          {
            title: "Governance that creates accountability and progress.",
            description:
              "Governance turns operational insight into clear actions and measurable outcomes. It ensures decisions are prioritised and owned.",
            bullets: [
              "Clear actions with ownership",
              "Prioritised decision-making",
              "Measurable progress over time",
            ],
            placeholderLabel: "Governance ? overview placeholder",
            imageSrc: "/images/illustrations/diagram-compliance-framework.webp",
            imageAlt: "Compliance framework diagram",
          },
          {
            title: "Regular operational and security reviews.",
            description:
              "Structured reviews ensure stability and security remain under control. Reviews focus on what matters and what changes next.",
            bullets: [
              "Regular review cadence",
              "Clear visibility of risks and issues",
              "Actions tracked to completion",
            ],
            placeholderLabel: "Governance ? reviews placeholder",
            imageSrc: "/images/illustrations/hero-operational-dashboard.webp",
            imageAlt: "Operational dashboard illustration",
          },
          {
            title: "Prioritised actions with clear ownership.",
            description:
              "Governance ensures improvements don’t stall. Actions are prioritised and owned so progress is consistent.",
            bullets: [
              "Priorities agreed and recorded",
              "Ownership assigned clearly",
              "Delivery tracked through review",
            ],
            placeholderLabel: "Governance ? ownership placeholder",
            imageSrc: "/images/illustrations/diagram-it-maturity.webp",
            imageAlt: "IT maturity diagram",
          },
          {
            title: "Roadmap and lifecycle planning support.",
            description:
              "Lifecycle planning reduces surprise and supports controlled improvement. Decisions are made early, not during emergencies.",
            bullets: [
              "Lifecycle decisions made proactively",
              "Roadmap aligned to operational needs",
              "Reduced risk from end-of-life systems",
            ],
            placeholderLabel: "Governance ? roadmap placeholder",
            imageSrc: "/images/illustrations/diagram-it-lifecycle.webp",
            imageAlt: "IT lifecycle diagram",
          },
          {
            title: "Defined leadership rhythm.",
            description:
              "A consistent leadership rhythm supports confident decisions. This creates continuity, accountability, and steady improvement.",
            bullets: [
              "Defined cadence and checkpoints",
              "Consistency across environments",
              "Clear direction and accountability",
            ],
            placeholderLabel: "Governance ? rhythm placeholder",
            imageSrc: "/images/illustrations/hero-it-strategy-review.webp",
            imageAlt: "IT strategy review illustration",
          },
        ],
      },
    ] satisfies PillarTab[],
  },
  coreServices: {
    title: "Core services with defined scope",
    subtitle: "Structured services delivered through a single operating model.",
    cards: [
      {
        title: "Managed IT Services",
        body: "Proactive management of your IT systems, ensuring stability, security and structured operational oversight.",
        href: "/managed-it-services-edinburgh",
      },
      {
        title: "Cybersecurity",
        body: "Security-first design and continuous monitoring to reduce risk and protect organisational data.",
        href: "/cybersecurity-smes-edinburgh",
      },
      {
        title: "Microsoft 365 Management",
        body: "Secure configuration and management of Microsoft 365 environments for reliable collaboration and communication.",
        href: "/microsoft-365-management-edinburgh",
      },
      {
        title: "Backup & Disaster Recovery",
        body: "Management of backup, recovery and core systems to maintain stable operations.",
      },
      {
        title: "IT Strategy / vCIO",
        body: "Senior oversight, roadmap planning and accountable governance to keep IT aligned with business operations.",
      },
    ],
  },
  serviceScopeCoverage: {
    title: "Service Scope and Operational Coverage",
    intro:
      "Triad IT provides structured IT operations management covering the systems organisations rely on every day.",
    items: [
      "Microsoft 365 environments and identity systems",
      "Endpoint devices and configuration standards",
      "Backup and recovery readiness",
      "Security baseline controls and monitoring",
      "Network and infrastructure oversight",
    ],
  },
  whoWeWorkWith: {
    title: "Who We Work With",
    intro: "Triad IT is designed for organisations that value structured, security-first IT operations.",
    items: [
      "Professional services",
      "Finance & advisory",
      "Architecture & engineering",
      "Growing SMEs (5–20 users)",
    ],
  },
  proof: {
    title: "The delivery rhythm",
    subtitle: "A simple operating cadence that keeps support, protection, recovery, and improvement moving together.",
    items: [
      "Structured service management",
      "Security-first architecture",
      "Defined system ownership",
      "Senior oversight of delivery",
      "No reactive-only support models",
    ],
  },
  resourcesPreview: {
    title: "Recommended reading",
    cards: [
      {
        title: "What Managed IT Costs in Scotland (2026 Guide)",
        description: "Board-level clarity on pricing models, scope boundaries, and accountability expectations.",
        href: "/resources/managed-it-costs-scotland-2026",
      },
      {
        title: "Security Baselines for Microsoft 365",
        description: "What businesses miss most often and how to close practical gaps without disruption.",
        href: "/resources/microsoft-365-security-baseline",
      },
      {
        title: "From Reactive IT to Structured Environments",
        description: "A practical framework to move from firefighting to controlled, measurable operations.",
        href: "/resources/reactive-to-structured-it",
      },
    ],
  },
  bookingProcess: {
    title: "What Happens After You Book",
    intro: "A simple, structured process — no sales script.",
    steps: [
      {
        title: "Initial review (30 minutes)",
        description: "We discuss your current setup, risks, pain points and priorities.",
      },
      {
        title: "Structured findings summary",
        description: "You receive a short summary of key risks, gaps and recommended next steps.",
      },
      {
        title: "Clear options",
        description:
          "If there’s a fit, we’ll outline support options (fully managed or co-managed) and agree next actions.",
      },
    ],
  },
  closingCta: {
    title: "Book a Free IT Review",
    subtitle:
      "A short consultation to review your current IT environment and discuss how structured IT management could improve stability and security. No obligation — if we’re not a fit, you’ll still leave with clear next steps. What you'll get: • A clear view of your biggest IT risks • A prioritised set of improvements • Options for fully managed or co-managed support",
    buttonLabel: "Book a Consultation",
    buttonHref: "/contact",
  },
} as const;
