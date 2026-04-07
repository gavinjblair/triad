type VisualTone = "blue" | "slate" | "green" | "amber" | "purple" | "dark";

export type ServiceSlug =
  | "managed-it"
  | "cybersecurity"
  | "microsoft-365"
  | "backup-disaster-recovery"
  | "domain-web-hosting"
  | "it-strategy-vcio";

export type ServiceFeatureRow = {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  tone: VisualTone;
};

export type ServiceHeroFocus = {
  title: string;
  items: [string, string, string];
};

export type ServiceSignaturePanel = {
  eyebrow: string;
  title: string;
  description: string;
  points: [string, string, string];
};

export type ServiceAudienceCard = {
  title: string;
  description: string;
};

export type ServiceImprovementCard = {
  title: string;
  description: string;
};

export type ServiceFrameworkIconKey =
  | "activity"
  | "chart-gantt"
  | "compass"
  | "file-text"
  | "layout-grid"
  | "life-buoy"
  | "network"
  | "rotate-cw"
  | "server"
  | "settings"
  | "shield";

export type ServiceFrameworkItem = {
  icon: ServiceFrameworkIconKey;
  label: string;
  description: string;
};

export type ServiceOffering = {
  slug: ServiceSlug;
  label: string;
  navLabel: string;
  href: `/services/${ServiceSlug}`;
  overview: {
    badge: string;
    headline: string;
    description: string;
    ctaLabel: string;
    imageSrc: string;
    imageAlt: string;
    tone: VisualTone;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    imageSrc: string;
    imageAlt: string;
    tone: VisualTone;
  };
  heroFocus: ServiceHeroFocus;
  signaturePanel: ServiceSignaturePanel;
  frameworkStrip: {
    label?: string;
    items: [ServiceFrameworkItem, ServiceFrameworkItem, ServiceFrameworkItem, ServiceFrameworkItem];
  };
  whoThisIsForIntro: string;
  whoThisIsFor: ServiceAudienceCard[];
  signatureFeatureIndex: number;
  features: ServiceFeatureRow[];
  outcomes: {
    title: string;
    intro: string;
    items: string[];
  };
  typicalImprovements: ServiceImprovementCard[];
  closingCta: {
    title: string;
    subtitle: string;
    buttonLabel: string;
    buttonHref: string;
    reassuranceLine?: string;
    tone: "hero" | "heroSoft";
  };
};

export const servicesOverviewContent = {
  hero: {
    eyebrow: "SERVICES",
    title: "Structured, security-first IT management.",
    subtitle:
      "Six service lanes delivered through one operating model with clear scope, defined standards, and accountable delivery.",
    ctaLabel: "Book a Structured IT Review",
    ctaHref: "/contact",
    imageSrc: "/images/illustrations/hero-hybrid-infrastructure.webp",
    imageAlt: "Structured service architecture",
  },
  tabsSection: {
    title: "Choose a service lane",
    subtitle:
      "Explore each service area in a focused view, then go deeper into the dedicated page for full detail.",
  },
  supportingSection: {
    title: "Service Scope and Operational Coverage",
    intro:
      "Every service lane is delivered through the same structured cadence so outcomes remain predictable as environments evolve.",
    items: [
      "Defined ownership for systems, controls, and actions",
      "Security-first standards applied consistently",
      "Documented scope and escalation pathways",
      "Regular service reviews and prioritised next steps",
    ],
  },
  closingCta: {
    title: "Ready to properly define and control your IT environment?",
    buttonLabel: "Book a Structured IT Review",
    buttonHref: "/contact",
    tone: "heroSoft" as const,
  },
} as const;

export const serviceOfferings: ServiceOffering[] = [
  {
    slug: "managed-it",
    label: "Managed IT",
    navLabel: "Managed IT",
    href: "/services/managed-it",
    overview: {
      badge: "Operations",
      headline: "Structured managed IT delivery with defined operational ownership.",
      description:
        "A disciplined support model covering monitoring, patching, and clear service cadence.",
      ctaLabel: "Explore Managed IT",
      imageSrc: "/images/illustrations/hero-managed-infrastructure.webp",
      imageAlt: "Managed infrastructure environment",
      tone: "blue",
    },
    hero: {
      eyebrow: "MANAGED IT",
      title: "Managed IT With Defined Standards And Clear Accountability",
      description:
        "TRIAD applies one structured operating model across support, maintenance, and improvement so your environment stays stable, documented, and supportable.",
      primaryCtaLabel: "Book a Structured IT Review",
      primaryCtaHref: "/contact",
      imageSrc: "/images/illustrations/hero-managed-infrastructure.webp",
      imageAlt: "Managed IT service delivery",
      tone: "blue",
    },
    heroFocus: {
      title: "SERVICE FOCUS",
      items: ["Defined support ownership", "Operational standards by default", "Regular review and improvement rhythm"],
    },
    signaturePanel: {
      eyebrow: "SIGNATURE FOCUS",
      title: "Operational ownership, not reactive dependency.",
      description:
        "Managed IT works best when support, maintenance, and improvement follow one controlled service model with visible ownership.",
      points: ["Defined support pathways", "Service standards held consistently", "Reviews that translate into actions"],
    },
    frameworkStrip: {
      items: [
        {
          icon: "server",
          label: "Defined support",
          description: "Clear ownership of day-to-day support.",
        },
        {
          icon: "activity",
          label: "Monitoring discipline",
          description: "Structured monitoring and patching routines.",
        },
        {
          icon: "shield",
          label: "Baselines applied",
          description: "Standardised configurations and security defaults.",
        },
        {
          icon: "chart-gantt",
          label: "Review cadence",
          description: "Regular service reviews and improvement actions.",
        },
      ],
    },
    whoThisIsForIntro:
      "Designed for organisations that need stable, well-managed IT operations rather than reactive support.",
    whoThisIsFor: [
      {
        title: "Growing businesses",
        description:
          "Businesses needing structured IT support instead of reactive break/fix assistance.",
      },
      {
        title: "Organisations requiring operational stability",
        description:
          "Companies that depend on consistent infrastructure management and support.",
      },
      {
        title: "Teams without internal IT leadership",
        description:
          "Businesses that need accountability, reporting, and ownership of IT operations.",
      },
    ],
    signatureFeatureIndex: 3,
    features: [
      {
        title: "Defined support operations",
        description:
          "Support follows clear ownership, documented pathways, and controlled escalation.",
        bullets: [
          "Service requests triaged by priority and impact",
          "Escalation pathways defined before incidents occur",
          "Consistent response standards across the environment",
        ],
        imageSrc: "/images/illustrations/hero-operational-dashboard.webp",
        imageAlt: "Operational support dashboard",
        tone: "blue",
      },
      {
        title: "Predictable service outcomes",
        description:
          "A structured cadence replaces firefighting and gives leadership clearer visibility.",
        bullets: [
          "Regular service reporting and review rhythm",
          "Actions tracked to completion with ownership",
          "Service quality measured against agreed standards",
        ],
        imageSrc: "/images/illustrations/diagram-it-maturity.webp",
        imageAlt: "Service maturity path",
        tone: "slate",
      },
      {
        title: "Monitoring and patching discipline",
        description:
          "Monitoring and update processes are managed as operational controls, not ad-hoc tasks.",
        bullets: [
          "Signal-focused monitoring with reduced alert noise",
          "Patch lifecycle managed with clear accountability",
          "Recurring issues identified and reduced over time",
        ],
        imageSrc: "/images/illustrations/managed-it-automation.webp",
        imageAlt: "Managed IT automation",
        tone: "green",
      },
      {
        title: "Baselines applied by default",
        description:
          "Core infrastructure standards are established early and maintained through routine checks.",
        bullets: [
          "Documented expected state for key systems",
          "Configuration drift reduced through review",
          "Operational consistency across managed assets",
        ],
        imageSrc: "/images/illustrations/core-network-architecture.webp",
        imageAlt: "Core network architecture",
        tone: "amber",
      },
      {
        title: "Reviews that drive improvement",
        description:
          "Service insights translate into practical, prioritised improvements rather than static reporting.",
        bullets: [
          "Regular cadence for risk and performance review",
          "Prioritised roadmap based on business impact",
          "Measured progress across reliability and support outcomes",
        ],
        imageSrc: "/images/illustrations/hero-it-strategy-review.webp",
        imageAlt: "IT strategy review session",
        tone: "purple",
      },
    ],
    outcomes: {
      title: "What this delivers",
      intro:
        "Managed IT should create operational confidence, not dependency on reactive support.",
      items: [
        "Predictable day-to-day support outcomes",
        "Clear ownership and escalation structure",
        "Reduced downtime and recurring disruption",
        "Continuous improvement with measurable progress",
      ],
    },
    typicalImprovements: [
      {
        title: "Support noise reduced",
        description: "Structured workflows and ownership reduce repetitive reactive incidents.",
      },
      {
        title: "Patch compliance improved",
        description: "Consistent maintenance discipline keeps systems current and more resilient.",
      },
      {
        title: "Security posture strengthened",
        description: "Baseline controls applied by default reduce unnecessary exposure.",
      },
      {
        title: "Leadership visibility improved",
        description: "Regular reviews provide clearer operational insight and decision context.",
      },
    ],
    closingCta: {
      title: "Need structured managed IT without reactive noise?",
      subtitle:
        "Book a short review to assess your current service posture and identify practical next steps.",
      buttonLabel: "Schedule an IT operations review",
      buttonHref: "/contact",
      reassuranceLine: "20-30 minute discussion • No obligation • Practical guidance",
      tone: "heroSoft",
    },
  },
  {
    slug: "cybersecurity",
    label: "Cybersecurity",
    navLabel: "Cybersecurity",
    href: "/services/cybersecurity",
    overview: {
      badge: "Protection",
      headline: "Security-first controls applied consistently across identity, endpoint, and operations.",
      description:
        "Practical risk reduction through baseline controls, hardening, and regular review.",
      ctaLabel: "Explore Cybersecurity",
      imageSrc: "/images/illustrations/endpoint-security-management.webp",
      imageAlt: "Cybersecurity management",
      tone: "green",
    },
    hero: {
      eyebrow: "CYBERSECURITY",
      title: "Practical Cybersecurity Delivered Through Structured Operations",
      description:
        "TRIAD applies security baselines by default, with focused identity control, endpoint hardening, and ongoing governance to reduce operational risk.",
      primaryCtaLabel: "Book a Structured IT Review",
      primaryCtaHref: "/contact",
      imageSrc: "/images/illustrations/endpoint-security-management.webp",
      imageAlt: "Security operations oversight",
      tone: "green",
    },
    heroFocus: {
      title: "SERVICE FOCUS",
      items: ["Identity and access control", "Endpoint hardening and hygiene", "Visible governance of security posture"],
    },
    signaturePanel: {
      eyebrow: "SIGNATURE FOCUS",
      title: "Identity-led protection with practical hardening.",
      description:
        "The strongest security posture comes from consistent controls across identity, endpoints, and governance rather than isolated tooling decisions.",
      points: ["Access policies with clear ownership", "Hardening applied as routine discipline", "Review cadence tied to real risk"],
    },
    frameworkStrip: {
      items: [
        {
          icon: "shield",
          label: "Security baselines",
          description: "Practical protection applied by default.",
        },
        {
          icon: "network",
          label: "Identity control",
          description: "Access and identity policies kept consistent.",
        },
        {
          icon: "settings",
          label: "Endpoint hardening",
          description: "Devices managed with risk reduction in mind.",
        },
        {
          icon: "chart-gantt",
          label: "Governance review",
          description: "Security progress reviewed through clear cadence.",
        },
      ],
    },
    whoThisIsForIntro:
      "Designed for organisations that require structured protection across users, devices, and systems.",
    whoThisIsFor: [
      {
        title: "Businesses with security responsibilities",
        description:
          "Organisations that must protect sensitive systems, users, and data.",
      },
      {
        title: "Companies concerned about cyber risk",
        description:
          "Businesses that want structured protection against modern threats.",
      },
      {
        title: "Organisations with compliance obligations",
        description:
          "Companies needing clear security controls and governance.",
      },
    ],
    signatureFeatureIndex: 1,
    features: [
      {
        title: "Security baselines by default",
        description:
          "Core security controls are applied consistently from onboarding and maintained through review.",
        bullets: [
          "Standardised baseline controls across environments",
          "Reduced exposure from inconsistent setup",
          "Security posture tracked over time",
        ],
        imageSrc: "/images/illustrations/diagram-compliance-framework.webp",
        imageAlt: "Compliance and control framework",
        tone: "green",
      },
      {
        title: "Identity and access control",
        description:
          "Identity is treated as the control plane, with policy enforcement focused on practical protection.",
        bullets: [
          "Strong authentication and role controls",
          "Conditional access aligned to operational risk",
          "Clear ownership for identity governance",
        ],
        imageSrc: "/images/illustrations/identity-access-control.webp",
        imageAlt: "Identity access control",
        tone: "blue",
      },
      {
        title: "Endpoint and user risk reduction",
        description:
          "Endpoint posture is managed through policy consistency and routine hygiene, not one-off fixes.",
        bullets: [
          "Device standards and hardening approach",
          "Patch and vulnerability discipline",
          "Practical controls that support users, not slow them",
        ],
        imageSrc: "/images/illustrations/managed-it-automation.webp",
        imageAlt: "Endpoint automation and policy",
        tone: "amber",
      },
      {
        title: "Monitoring with practical hardening",
        description:
          "Signals from monitoring inform remediation priorities and reduce recurring security gaps.",
        bullets: [
          "Monitoring tuned for meaningful alerting",
          "Findings translated into clear actions",
          "Controls improved through regular cadence",
        ],
        imageSrc: "/images/illustrations/hero-operational-dashboard.webp",
        imageAlt: "Security monitoring dashboard",
        tone: "slate",
      },
      {
        title: "Ongoing review and governance",
        description:
          "Security outcomes are sustained through routine review and visible accountability.",
        bullets: [
          "Regular risk review with leadership context",
          "Priority actions tracked to completion",
          "Security roadmap tied to operational reality",
        ],
        imageSrc: "/images/illustrations/hero-it-strategy-review.webp",
        imageAlt: "Security governance review",
        tone: "purple",
      },
    ],
    outcomes: {
      title: "What this delivers",
      intro:
        "Security should be managed as an operational discipline with visible ownership and measurable progress.",
      items: [
        "Reduced risk from inconsistent controls",
        "Clear identity and endpoint governance",
        "Improved resilience against common threats",
        "Practical reporting for informed decisions",
      ],
    },
    typicalImprovements: [
      {
        title: "Identity risk reduced",
        description: "Access controls and authentication standards close common exposure points.",
      },
      {
        title: "Endpoint hygiene improved",
        description: "Hardening and patch cadence reduce preventable security drift.",
      },
      {
        title: "Alert quality improved",
        description: "Monitoring tuned to practical signals reduces noise and improves response focus.",
      },
      {
        title: "Governance confidence improved",
        description: "Regular review cadence creates clear accountability and progress visibility.",
      },
    ],
    closingCta: {
      title: "Need a structured, security-first operating posture?",
      subtitle:
        "Book a review to identify current control gaps and define a practical remediation path.",
      buttonLabel: "Discuss your security posture",
      buttonHref: "/contact",
      reassuranceLine: "20-30 minute discussion • No obligation • Practical guidance",
      tone: "heroSoft",
    },
  },
  {
    slug: "microsoft-365",
    label: "Microsoft 365",
    navLabel: "Microsoft 365",
    href: "/services/microsoft-365",
    overview: {
      badge: "Platform",
      headline: "Secure Microsoft 365 management with tenant governance and operational consistency.",
      description:
        "Identity, collaboration, and administration managed through defined standards and governance.",
      ctaLabel: "Explore Microsoft 365",
      imageSrc: "/images/illustrations/m365-governance-framework.webp",
      imageAlt: "Microsoft 365 governance",
      tone: "blue",
    },
    hero: {
      eyebrow: "MICROSOFT 365",
      title: "Microsoft 365 Management With Governance And Ownership",
      description:
        "TRIAD applies structured tenant standards, identity controls, and review cadence so Microsoft 365 environments stay stable, secure, and supportable.",
      primaryCtaLabel: "Book a Structured IT Review",
      primaryCtaHref: "/contact",
      imageSrc: "/images/illustrations/m365-governance-framework.webp",
      imageAlt: "Microsoft 365 operating model",
      tone: "blue",
    },
    heroFocus: {
      title: "SERVICE FOCUS",
      items: ["Tenant governance and policy control", "Identity and conditional access discipline", "Admin consistency across workloads"],
    },
    signaturePanel: {
      eyebrow: "SIGNATURE FOCUS",
      title: "Tenant governance that holds across daily administration.",
      description:
        "Microsoft 365 becomes easier to secure and support when tenant controls, identity decisions, and admin routines all follow the same operating standard.",
      points: ["Tenant standards held across workloads", "Conditional access aligned to real use", "Admin ownership kept consistent"],
    },
    frameworkStrip: {
      items: [
        {
          icon: "layout-grid",
          label: "Tenant standards",
          description: "Core Microsoft 365 settings kept consistent.",
        },
        {
          icon: "shield",
          label: "Identity controls",
          description: "Access and authentication managed deliberately.",
        },
        {
          icon: "settings",
          label: "Admin consistency",
          description: "Operational tasks handled through clear standards.",
        },
        {
          icon: "chart-gantt",
          label: "Ownership cadence",
          description: "Regular oversight improves reliability and control.",
        },
      ],
    },
    whoThisIsForIntro:
      "Designed for organisations that rely on Microsoft 365 and need stronger control, governance, and security.",
    whoThisIsFor: [
      {
        title: "Microsoft 365 dependent businesses",
        description:
          "Organisations relying heavily on Microsoft tools for daily operations.",
      },
      {
        title: "Companies needing tenant governance",
        description:
          "Businesses requiring clear structure, permissions, and security management.",
      },
      {
        title: "Teams struggling with administration",
        description:
          "Organisations needing expert oversight of Microsoft 365 configuration.",
      },
    ],
    signatureFeatureIndex: 1,
    features: [
      {
        title: "Secure Microsoft 365 configuration",
        description:
          "Tenant configuration is managed through baseline controls rather than ad-hoc changes.",
        bullets: [
          "Documented tenant standards and expected state",
          "Security settings reviewed against baseline",
          "Configuration quality sustained through cadence",
        ],
        imageSrc: "/images/illustrations/m365-governance-framework.webp",
        imageAlt: "Microsoft 365 baseline configuration",
        tone: "blue",
      },
      {
        title: "Identity and conditional controls",
        description:
          "Access posture is designed around role clarity and practical security controls.",
        bullets: [
          "MFA and role governance applied consistently",
          "Conditional controls aligned to operational risk",
          "Identity hygiene maintained through lifecycle processes",
        ],
        imageSrc: "/images/illustrations/Conditional-access-policy-illustration.webp",
        imageAlt: "Conditional access policy",
        tone: "green",
      },
      {
        title: "Tenant governance and hygiene",
        description:
          "Permissions, sharing posture, and admin standards are maintained through defined routines.",
        bullets: [
          "Sharing and access standards reviewed regularly",
          "Administrative consistency across workloads",
          "Reduced drift across collaboration environments",
        ],
        imageSrc: "/images/illustrations/diagram-compliance-framework.webp",
        imageAlt: "Governance and compliance controls",
        tone: "amber",
      },
      {
        title: "Collaboration and admin consistency",
        description:
          "Operational processes help teams collaborate securely while keeping tenant administration controlled.",
        bullets: [
          "Structured onboarding and offboarding pathways",
          "Clear ownership for admin and support tasks",
          "Consistent experience for users and leadership",
        ],
        imageSrc: "/images/illustrations/illustration-client-onboarding.webp",
        imageAlt: "Structured onboarding process",
        tone: "slate",
      },
      {
        title: "Ongoing review and ownership",
        description:
          "Regular reviews turn tenant insight into actions that improve security and operational reliability.",
        bullets: [
          "Service review cadence focused on outcomes",
          "Prioritised actions with assigned ownership",
          "Improvement roadmap aligned to business priorities",
        ],
        imageSrc: "/images/illustrations/hero-it-strategy-review.webp",
        imageAlt: "Microsoft 365 review session",
        tone: "purple",
      },
    ],
    outcomes: {
      title: "What this delivers",
      intro:
        "Microsoft 365 performs best when governance, security, and day-to-day ownership are aligned.",
      items: [
        "Secure and consistent tenant posture",
        "Clear accountability for identity and admin decisions",
        "Reduced configuration drift and sharing risk",
        "Operational clarity for leadership and users",
      ],
    },
    typicalImprovements: [
      {
        title: "Tenant consistency improved",
        description: "Defined standards reduce configuration drift across key Microsoft 365 workloads.",
      },
      {
        title: "Identity control strengthened",
        description: "Access posture becomes more predictable through structured role and policy management.",
      },
      {
        title: "Administration effort reduced",
        description: "Clear ownership and repeatable processes reduce day-to-day admin friction.",
      },
      {
        title: "Collaboration risk reduced",
        description: "Governed sharing and permission hygiene improve operational confidence.",
      },
    ],
    closingCta: {
      title: "Need confident control of your Microsoft 365 environment?",
      subtitle:
        "Book a review to assess tenant posture and define practical improvements with clear ownership.",
      buttonLabel: "Review your Microsoft 365 environment",
      buttonHref: "/contact",
      reassuranceLine: "20-30 minute discussion • No obligation • Practical guidance",
      tone: "heroSoft",
    },
  },
  {
    slug: "backup-disaster-recovery",
    label: "Backup & DR",
    navLabel: "Backup & DR",
    href: "/services/backup-disaster-recovery",
    overview: {
      badge: "Resilience",
      headline: "Recovery readiness managed as a core operational discipline, not a one-time setup.",
      description:
        "Backup oversight, validation, and restore confidence delivered through structured cadence.",
      ctaLabel: "Explore Backup & DR",
      imageSrc: "/images/illustrations/site-failover-architecture.webp",
      imageAlt: "Backup and disaster recovery architecture",
      tone: "amber",
    },
    hero: {
      eyebrow: "BACKUP & DR",
      title: "Backup And Disaster Recovery With Clear Readiness And Validation",
      description:
        "TRIAD treats recovery capability as essential operational control, with coverage clarity, restore validation, and continuity ownership.",
      primaryCtaLabel: "Book a Structured IT Review",
      primaryCtaHref: "/contact",
      imageSrc: "/images/illustrations/site-failover-architecture.webp",
      imageAlt: "Disaster recovery planning",
      tone: "amber",
    },
    heroFocus: {
      title: "SERVICE FOCUS",
      items: ["Coverage clarity across critical systems", "Restore validation and evidence", "Continuity support with defined ownership"],
    },
    signaturePanel: {
      eyebrow: "SIGNATURE FOCUS",
      title: "Recovery confidence built on validation, not assumption.",
      description:
        "Backup and DR only become dependable when coverage, restore testing, and escalation readiness are treated as part of normal service operations.",
      points: ["Coverage mapped to critical systems", "Restore evidence reviewed routinely", "Continuity decisions backed by ownership"],
    },
    frameworkStrip: {
      items: [
        {
          icon: "rotate-cw",
          label: "Recovery readiness",
          description: "Recovery capability treated as an operational discipline.",
        },
        {
          icon: "file-text",
          label: "Validation checks",
          description: "Backup success and restore readiness reviewed routinely.",
        },
        {
          icon: "network",
          label: "Coverage clarity",
          description: "Protected systems and expectations clearly defined.",
        },
        {
          icon: "life-buoy",
          label: "Continuity support",
          description: "Escalation and continuity planning kept practical.",
        },
      ],
    },
    whoThisIsForIntro:
      "Designed for organisations that cannot afford uncertainty when systems or data are at risk.",
    whoThisIsFor: [
      {
        title: "Businesses with critical data",
        description:
          "Companies that cannot afford permanent data loss.",
      },
      {
        title: "Organisations requiring recovery planning",
        description:
          "Businesses that need tested recovery procedures and resilience.",
      },
      {
        title: "Teams seeking operational continuity",
        description:
          "Companies needing dependable restoration capabilities during incidents.",
      },
    ],
    signatureFeatureIndex: 1,
    features: [
      {
        title: "Recovery readiness as a managed discipline",
        description:
          "Recovery objectives are managed continuously, with clear ownership and routine checks.",
        bullets: [
          "Recovery priorities aligned to business needs",
          "Operational ownership for restore capability",
          "Readiness discussed as part of service cadence",
        ],
        imageSrc: "/images/illustrations/site-failover-architecture.webp",
        imageAlt: "Recovery readiness model",
        tone: "amber",
      },
      {
        title: "Backup oversight and validation",
        description:
          "Backup jobs are monitored and validated so confidence is based on evidence, not assumption.",
        bullets: [
          "Coverage and success monitored proactively",
          "Failures triaged with clear escalation paths",
          "Validation steps built into routine operations",
        ],
        imageSrc: "/images/illustrations/backup-replication-on-architecture.webp",
        imageAlt: "Backup replication architecture",
        tone: "blue",
      },
      {
        title: "Coverage clarity across systems",
        description:
          "Critical workloads and retention expectations are documented and reviewed for alignment.",
        bullets: [
          "Protected systems mapped against business priorities",
          "Retention approach documented for leadership visibility",
          "Gaps identified and addressed with ownership",
        ],
        imageSrc: "/images/illustrations/diagram-it-lifecycle.webp",
        imageAlt: "Lifecycle and coverage planning",
        tone: "green",
      },
      {
        title: "Restore testing and confidence",
        description:
          "Testing turns backup from a checkbox into an operationally trusted recovery capability.",
        bullets: [
          "Restore tests planned and evidenced",
          "Results reviewed with clear actions",
          "Confidence built through repeatable validation",
        ],
        imageSrc: "/images/illustrations/hero-operational-dashboard.webp",
        imageAlt: "Restore testing visibility",
        tone: "slate",
      },
      {
        title: "Continuity support and escalation readiness",
        description:
          "Continuity decisions are supported by defined escalation pathways and practical response planning.",
        bullets: [
          "Escalation process documented before incidents",
          "Continuity considerations included in service reviews",
          "Leadership kept informed with clear remediation priorities",
        ],
        imageSrc: "/images/illustrations/hero-it-strategy-review.webp",
        imageAlt: "Continuity planning review",
        tone: "purple",
      },
    ],
    outcomes: {
      title: "What this delivers",
      intro:
        "Backup and DR should provide operational confidence that recovery can happen when it matters.",
      items: [
        "Greater confidence in restore capability",
        "Clear visibility over backup coverage and gaps",
        "Reduced recovery risk through validation discipline",
        "Continuity readiness supported by defined ownership",
      ],
    },
    typicalImprovements: [
      {
        title: "Recovery confidence increased",
        description: "Validation checks turn backup status into dependable recovery readiness.",
      },
      {
        title: "Coverage gaps reduced",
        description: "Clear mapping of protected systems improves continuity assurance.",
      },
      {
        title: "Restore outcomes improved",
        description: "Routine testing increases confidence that restores will work when needed.",
      },
      {
        title: "Escalation clarity improved",
        description: "Defined continuity pathways reduce uncertainty during incidents.",
      },
    ],
    closingCta: {
      title: "Need confidence in recovery readiness, not assumptions?",
      subtitle:
        "Book a review to assess backup posture, validate coverage, and strengthen continuity outcomes.",
      buttonLabel: "Review your backup readiness",
      buttonHref: "/contact",
      reassuranceLine: "20-30 minute discussion • No obligation • Practical guidance",
      tone: "heroSoft",
    },
  },
  {
    slug: "domain-web-hosting",
    label: "Domain & Web Hosting",
    navLabel: "Domain & Hosting",
    href: "/services/domain-web-hosting",
    overview: {
      badge: "Web Infrastructure",
      headline: "Clear ownership of domains, DNS, hosting, renewals, and website continuity.",
      description:
        "A structured approach to registrar control, DNS changes, certificates, hosting stability, and renewals.",
      ctaLabel: "Explore Domain & Web Hosting",
      imageSrc: "/images/illustrations/operating-model-blueprint.webp",
      imageAlt: "Domain and hosting infrastructure overview",
      tone: "slate",
    },
    hero: {
      eyebrow: "DOMAIN & WEB HOSTING",
      title: "Domain And Web Hosting With Clear Ownership And Control",
      description:
        "TRIAD provides accountable oversight of domains, DNS, hosting providers, certificates, and renewals so critical web infrastructure stays secure, stable, and properly owned.",
      primaryCtaLabel: "Book a Structured IT Review",
      primaryCtaHref: "/contact",
      imageSrc: "/images/illustrations/hero-hybrid-infrastructure.webp",
      imageAlt: "Domain and web hosting oversight",
      tone: "slate",
    },
    heroFocus: {
      title: "SERVICE FOCUS",
      items: ["Registrar and ownership clarity", "DNS and hosting change control", "Renewal, certificate, and continuity oversight"],
    },
    signaturePanel: {
      eyebrow: "SIGNATURE FOCUS",
      title: "Web infrastructure stays safer when ownership is explicit.",
      description:
        "Domains, DNS, hosting, certificates, and renewals are often spread across different people and providers. This service brings them back under one accountable operating model.",
      points: ["Registrar and access ownership clarified", "DNS and hosting changes handled cleanly", "Renewal risk surfaced before disruption"],
    },
    frameworkStrip: {
      items: [
        {
          icon: "network",
          label: "DNS control",
          description: "Records, routing, and changes handled through defined ownership.",
        },
        {
          icon: "server",
          label: "Hosting stability",
          description: "Provider coordination and hosting oversight kept accountable.",
        },
        {
          icon: "shield",
          label: "Certificate hygiene",
          description: "HTTPS and related access controls reviewed proactively.",
        },
        {
          icon: "file-text",
          label: "Renewal continuity",
          description: "Renewal, access, and ownership records kept clear and current.",
        },
      ],
    },
    whoThisIsForIntro:
      "Designed for organisations that need one accountable owner for domains, DNS, website hosting, renewals, and related access.",
    whoThisIsFor: [
      {
        title: "Businesses with critical public-facing websites",
        description:
          "Organisations that rely on websites and domains for enquiries, trust, and continuity.",
      },
      {
        title: "Teams with fragmented domain or hosting ownership",
        description:
          "Businesses that have inherited registrar accounts, shared admin access, or unclear renewal responsibility.",
      },
      {
        title: "Organisations needing stable web infrastructure",
        description:
          "Companies that want domain, hosting, DNS, and certificate oversight handled with less risk and more accountability.",
      },
    ],
    signatureFeatureIndex: 1,
    features: [
      {
        title: "Domain ownership and registrar control",
        description:
          "Domains are only reliable assets when ownership, registrar access, and renewal responsibility are clear and controlled.",
        bullets: [
          "Registrar ownership reviewed and documented",
          "Administrative access aligned to named responsibility",
          "Renewal dependencies made visible before they become risks",
        ],
        imageSrc: "/images/illustrations/operating-model-blueprint.webp",
        imageAlt: "Domain and registrar ownership overview",
        tone: "slate",
      },
      {
        title: "DNS management and change control",
        description:
          "DNS changes need to be accurate, authorised, and recoverable. Structured control lowers disruption risk.",
        bullets: [
          "DNS records reviewed against current services",
          "Changes handled through clear ownership and validation",
          "Dependencies understood before edits are made",
        ],
        imageSrc: "/images/illustrations/core-network-architecture.webp",
        imageAlt: "DNS and routing control overview",
        tone: "blue",
      },
      {
        title: "SSL certificate and HTTPS oversight",
        description:
          "Certificates, expiry dates, and related access paths are tracked so web services remain trusted and uninterrupted.",
        bullets: [
          "Certificate ownership and expiry tracked clearly",
          "HTTPS posture reviewed as part of operational oversight",
          "Avoidable outages and trust issues reduced",
        ],
        imageSrc: "/images/illustrations/diagram-compliance-framework.webp",
        imageAlt: "Certificate and security oversight framework",
        tone: "green",
      },
      {
        title: "Hosting stability and provider coordination",
        description:
          "Hosting becomes more reliable when provider responsibilities, dependencies, and recovery expectations are clearly understood.",
        bullets: [
          "Hosting providers and responsibilities documented",
          "Stability issues escalated through clear paths",
          "Operational visibility improved across the stack",
        ],
        imageSrc: "/images/illustrations/hero-managed-infrastructure.webp",
        imageAlt: "Hosting platform stability oversight",
        tone: "amber",
      },
      {
        title: "Renewal continuity and recovery readiness",
        description:
          "Renewals, access, and web infrastructure dependencies are reviewed so a missed payment or lost login does not become a business interruption.",
        bullets: [
          "Renewal timelines reviewed before they become urgent",
          "Access recovery pathways documented clearly",
          "Continuity risks reduced through better ownership hygiene",
        ],
        imageSrc: "/images/illustrations/diagram-it-lifecycle.webp",
        imageAlt: "Renewal and lifecycle continuity planning",
        tone: "purple",
      },
    ],
    outcomes: {
      title: "What this delivers",
      intro:
        "Domains and hosting should be controlled assets with clear ownership, not hidden operational risks.",
      items: [
        "Clear ownership of domains, registrar access, and renewals",
        "Reduced DNS and hosting change risk",
        "Better continuity across websites, certificates, and providers",
        "More confidence in web infrastructure stability and recoverability",
      ],
    },
    typicalImprovements: [
      {
        title: "Renewal risk reduced",
        description: "Clear ownership and visibility reduce avoidable surprises around domains and certificates.",
      },
      {
        title: "DNS changes become safer",
        description: "Better records and change control lower the chance of disruption from simple edits.",
      },
      {
        title: "Hosting accountability improves",
        description: "Providers, access, and escalation paths become easier to manage and support.",
      },
      {
        title: "Website continuity strengthens",
        description: "Critical public-facing services are less vulnerable to preventable ownership and access issues.",
      },
    ],
    closingCta: {
      title: "Need clearer control of domains, DNS, and hosting?",
      subtitle:
        "Book a review to identify ownership gaps, reduce renewal risk, and bring web infrastructure under clearer operational control.",
      buttonLabel: "Review your domain and hosting setup",
      buttonHref: "/contact",
      reassuranceLine: "20-30 minute discussion • No obligation • Practical guidance",
      tone: "heroSoft",
    },
  },
  {
    slug: "it-strategy-vcio",
    label: "IT Strategy / vCIO",
    navLabel: "IT Strategy / vCIO",
    href: "/services/it-strategy-vcio",
    overview: {
      badge: "Leadership",
      headline: "Leadership cadence and structured decision support for measurable IT improvement.",
      description:
        "Strategic guidance grounded in operational reality, with practical planning and governance.",
      ctaLabel: "Explore IT Strategy / vCIO",
      imageSrc: "/images/illustrations/hero-it-strategy-review.webp",
      imageAlt: "IT strategy and governance review",
      tone: "purple",
    },
    hero: {
      eyebrow: "IT STRATEGY / VCIO",
      title: "Structured IT Strategy Support With Practical Leadership Cadence",
      description:
        "TRIAD provides senior review rhythm, roadmap support, and risk visibility so technology decisions stay aligned with operational priorities.",
      primaryCtaLabel: "Book a Structured IT Review",
      primaryCtaHref: "/contact",
      imageSrc: "/images/illustrations/hero-it-strategy-review.webp",
      imageAlt: "vCIO planning session",
      tone: "purple",
    },
    heroFocus: {
      title: "SERVICE FOCUS",
      items: ["Leadership cadence and review rhythm", "Practical prioritisation and roadmap support", "Clearer decisions grounded in operational reality"],
    },
    signaturePanel: {
      eyebrow: "SIGNATURE FOCUS",
      title: "Direction improves when decisions follow a steady leadership cadence.",
      description:
        "Strategy support is most useful when it turns operational reality into clearer priorities, visible trade-offs, and accountable next steps for leadership.",
      points: ["Leadership reviews happen on a clear rhythm", "Roadmaps stay tied to business priorities", "Risk and investment decisions gain context"],
    },
    frameworkStrip: {
      items: [
        {
          icon: "compass",
          label: "Leadership rhythm",
          description: "Strategy reviews happen on a consistent cadence.",
        },
        {
          icon: "chart-gantt",
          label: "Roadmap priorities",
          description: "Improvements are sequenced by business need.",
        },
        {
          icon: "activity",
          label: "Risk visibility",
          description: "Technology risks are surfaced clearly for leadership.",
        },
        {
          icon: "file-text",
          label: "Decision support",
          description: "Recommendations are tied to practical outcomes.",
        },
      ],
    },
    whoThisIsForIntro:
      "Designed for organisations that need clear direction, planning, and stronger ownership of technology decisions.",
    whoThisIsFor: [
      {
        title: "Growing organisations",
        description:
          "Businesses planning technology growth and transformation.",
      },
      {
        title: "Companies lacking IT leadership",
        description:
          "Organisations needing guidance and oversight of technology decisions.",
      },
      {
        title: "Teams requiring structured planning",
        description:
          "Businesses that benefit from long-term IT strategy and governance.",
      },
    ],
    signatureFeatureIndex: 0,
    features: [
      {
        title: "Leadership cadence and review rhythm",
        description:
          "Regular strategic review keeps priorities visible and actions moving with clear ownership.",
        bullets: [
          "Defined cadence for leadership-level IT review",
          "Actions tracked against agreed priorities",
          "Clear accountability for strategic outcomes",
        ],
        imageSrc: "/images/illustrations/hero-it-strategy-review.webp",
        imageAlt: "Leadership review cadence",
        tone: "purple",
      },
      {
        title: "Roadmaps and priority setting",
        description:
          "Roadmaps focus on practical outcomes and sequence change around risk and operational need.",
        bullets: [
          "Priorities aligned to business impact",
          "Sequenced initiatives with realistic delivery paths",
          "Roadmap decisions backed by operational evidence",
        ],
        imageSrc: "/images/illustrations/diagram-it-maturity.webp",
        imageAlt: "IT maturity roadmap",
        tone: "blue",
      },
      {
        title: "Risk visibility and operational planning",
        description:
          "Operational and security risks are reviewed in context to inform confident decisions.",
        bullets: [
          "Risk posture discussed in clear business terms",
          "Operational dependencies made visible",
          "Planning informed by current-state reality",
        ],
        imageSrc: "/images/illustrations/diagram-compliance-framework.webp",
        imageAlt: "Risk and compliance visibility",
        tone: "green",
      },
      {
        title: "Budget-conscious improvement planning",
        description:
          "Improvement pathways are designed to support control and progress without unnecessary spend.",
        bullets: [
          "Options prioritised by value and risk reduction",
          "Investment decisions tied to clear outcomes",
          "Change planning balanced against operational load",
        ],
        imageSrc: "/images/illustrations/diagram-it-lifecycle.webp",
        imageAlt: "Lifecycle and investment planning",
        tone: "amber",
      },
      {
        title: "Structured decision support",
        description:
          "Leadership receives clear recommendations and next steps, without abstract strategy theatre.",
        bullets: [
          "Practical recommendations with explicit ownership",
          "Decision support rooted in operational detail",
          "Steady progress through a consistent governance rhythm",
        ],
        imageSrc: "/images/illustrations/hero-operational-dashboard.webp",
        imageAlt: "Decision support dashboard",
        tone: "slate",
      },
    ],
    outcomes: {
      title: "What this delivers",
      intro:
        "Strategy support should reduce uncertainty and create a dependable rhythm for technology decisions.",
      items: [
        "Clearer priorities for change and investment",
        "Better risk visibility for leadership decisions",
        "Stronger alignment between operations and strategy",
        "Measured progress through accountable governance",
      ],
    },
    typicalImprovements: [
      {
        title: "Planning clarity improved",
        description: "Leadership gets a clearer sequence of priorities aligned to business outcomes.",
      },
      {
        title: "Decision confidence improved",
        description: "Operational context strengthens technology decisions and trade-off discussions.",
      },
      {
        title: "Risk visibility strengthened",
        description: "Structured review rhythm surfaces risk earlier and supports proactive planning.",
      },
      {
        title: "Execution alignment improved",
        description: "Governance cadence keeps initiatives connected to operational reality.",
      },
    ],
    closingCta: {
      title: "Need practical strategy support with clear operational grounding?",
      subtitle:
        "Book a review to establish governance rhythm, prioritise improvements, and align next decisions.",
      buttonLabel: "Schedule a strategy discussion",
      buttonHref: "/contact",
      reassuranceLine: "20-30 minute discussion • No obligation • Practical guidance",
      tone: "heroSoft",
    },
  },
];

export const serviceNavigationItems = serviceOfferings.map((service) => ({
  label: service.navLabel,
  href: service.href,
}));

export const serviceOfferingsBySlug = serviceOfferings.reduce(
  (accumulator, service) => {
    accumulator[service.slug] = service;
    return accumulator;
  },
  {} as Record<ServiceSlug, ServiceOffering>,
);
