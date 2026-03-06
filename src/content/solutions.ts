export const solutionsContent = {
  platforms: {
    title: "Technology Platforms We Support",
    subtitle: "We standardise on proven platforms to keep environments stable, secure, and supportable.",
  },
  hero: {
    eyebrow: "SOLUTIONS",
    title: "Structured, security-first IT management.",
    subtitle:
      "Five service lanes delivered through one operating model: clear scope, defined standards, and accountable delivery.",
    cta: { label: "Book a Structured IT Review", href: "/contact" },
  },
  tabs: [
    {
      value: "managed-it",
      label: "Managed IT",
      intro:
        "Focused service delivery with defined monitoring, patching, and operational standards across every managed endpoint.",
      blocks: [
        {
          title: "Defined support operations",
          description:
            "Stability is maintained through structured ticket handling, documented standards, and fixed service cadence.",
          bullets: [
            "Ticket ownership and escalation control.",
            "Patch management and monitored baselines.",
            "Documented standards for every managed environment.",
            "Operational reporting with clear accountability.",
          ],
        },
        {
          title: "Predictable service outcomes",
          description:
            "Support is delivered inside a controlled model - not ad-hoc firefighting - with consistent service quality.",
          bullets: [
            "Defined SLAs and response expectations.",
            "Senior oversight on scope and priorities.",
            "Monthly service review and improvement actions.",
            "Environment-level visibility across clients.",
          ],
        },
      ],
    },
    {
      value: "cybersecurity",
      label: "Cybersecurity",
      intro:
        "Security-first delivery across identity, endpoint posture, and ongoing review for measurable risk reduction.",
      blocks: [
        {
          title: "Identity and endpoint hardening",
          description: "Security is applied through baseline controls, policy enforcement, and measured review.",
          bullets: [
            "Microsoft 365 and Entra baseline controls.",
            "Multi-factor and conditional access alignment.",
            "Device compliance and endpoint hardening.",
            "Policy drift detection and remediation.",
          ],
        },
        {
          title: "Security operations with ownership",
          description:
            "Risk is managed through routine review and practical controls, not one-off setup activities.",
          bullets: [
            "Security posture reviews and action plans.",
            "Backup integrity linked to security readiness.",
            "Documented incident response pathways.",
            "Defined ownership of security responsibilities.",
          ],
        },
      ],
    },
    {
      value: "microsoft-365",
      label: "Microsoft 365",
      intro:
        "Structured Microsoft 365 management covering tenant governance, identity controls, and configuration consistency.",
      blocks: [
        {
          title: "Tenant governance and control",
          description:
            "Configuration and access are managed through documented standards to reduce drift and protect continuity.",
          bullets: [
            "Tenant baseline and policy governance.",
            "Licensing and role assignment oversight.",
            "Documentation of business-critical configuration.",
            "Controlled change process for Microsoft 365.",
          ],
        },
        {
          title: "Practical security and continuity alignment",
          description:
            "Microsoft 365 is aligned to business continuity through defined backup posture and operational safeguards.",
          bullets: [
            "Identity risk reduction through policy controls.",
            "Backup and recovery readiness for core workloads.",
            "Configuration review with accountable ownership.",
            "Regular reporting for leadership visibility.",
          ],
        },
      ],
    },
    {
      value: "backup-dr",
      label: "Backup & DR",
      intro:
        "Backup and disaster recovery delivered with defined recovery standards, testing cadence, and clear ownership.",
      blocks: [
        {
          title: "Recovery readiness by design",
          description:
            "Continuity planning is structured around recovery objectives, tested processes, and verified outcomes.",
          bullets: [
            "Backup strategy aligned to business priorities.",
            "Recovery targets documented and agreed.",
            "Regular restore testing and verification.",
            "Coverage mapped across key services and data.",
          ],
        },
        {
          title: "Continuity that can be measured",
          description:
            "Backup is treated as an operational control with reporting, review, and clear remediation ownership.",
          bullets: [
            "Monitoring and alerting for backup health.",
            "Monthly review of recovery performance.",
            "Action tracking for gaps and failed jobs.",
            "Evidence-based continuity reporting.",
          ],
        },
      ],
    },
    {
      value: "vcio",
      label: "IT Strategy / vCIO",
      intro:
        "Senior-level oversight focused on operational control, risk priorities, and practical roadmap direction.",
      blocks: [
        {
          title: "Leadership rhythm and governance",
          description:
            "Decision-making is supported by regular review cadence, defined priorities, and measurable outcomes.",
          bullets: [
            "Quarterly structured service reviews.",
            "Roadmap planning tied to risk and stability.",
            "Defined ownership for strategic actions.",
            "Clear prioritisation based on business impact.",
          ],
        },
        {
          title: "Practical strategy without theatre",
          description:
            "Advice is grounded in scope, risk, and accountability so leadership can make decisions confidently.",
          bullets: [
            "Transparent recommendations with next steps.",
            "No inflated roadmaps or abstract strategy decks.",
            "Measured change through defined operating model.",
            "Consistent executive-level communication.",
          ],
        },
      ],
    },
  ],
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
  whatYouWontFind: {
    title: "What you won't find here",
    subtitle: "Delivery is built on clear scope and accountability.",
    items: [
      "Ad-hoc break/fix timelines.",
      "Undefined scope and shifting standards.",
      "Unmanaged environments.",
      "Firefighting as default.",
    ],
    closing: "Clear boundaries. Measurable outcomes.",
  },
  operatingModel: {
    title: "Service flow in practice.",
    subtitle: "Structured delivery follows a defined loop.",
    steps: ["Operate", "Protect", "Recover", "Improve"],
    summary: "Operating model in action: control, protection, recovery, and measurable improvement.",
  },
  closingCta: {
    title: "Ready to properly define and control your IT environment?",
    buttonLabel: "Book a Structured IT Review",
    buttonHref: "/contact",
  },
} as const;
