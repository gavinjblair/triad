export const solutionsContent = {
  hero: {
    title: "Your all-in-one MSP workspace",
    subtitle: "Manage devices, tickets, and alerts across clients — all from one place",
    cta: { label: "START A FREE TRIAL", href: "/free-trial" },
  },
  tabs: [
    "ITSM & ticketing",
    "Endpoint management",
    "Mobile device management",
    "Endpoint security",
    "Advanced server & network monitoring",
    "Reporting & analytics",
  ],
  automation: {
    title: "Professional service automation",
    subtitle:
      "Centralize ticketing, contracts, SLAs, and billing to streamline client service delivery and business operations.",
    ctaLabel: "LEARN MORE",
    accordion: [
      {
        id: "account",
        title: "Account management",
        content:
          "Manage multiple client accounts from a unified console with isolated configurations and data sets. Onboard clients with personalised SLAs, knowledge bases, assets, and workflows tailored to each account.",
      },
      {
        id: "itsm",
        title: "ITSM framework",
        content:
          "Align ticketing, tasks, assets, and service-level objectives into one ITSM-driven process that scales with your client base.",
      },
      {
        id: "helpdesk",
        title: "Help desk automation",
        content:
          "Route and prioritize issues automatically using business rules, alert context, and SLA-based triggers.",
      },
      {
        id: "service",
        title: "Service desk",
        content:
          "Track requests, maintain detailed service histories, and deliver consistent support from a single technician workspace.",
      },
      {
        id: "billing",
        title: "Billing",
        content:
          "Connect contracts, billable worklogs, and recurring plans to reduce revenue leakage and keep billing cycles predictable.",
      },
    ],
  },
  manageTitle: "Manage everything with MSP Central",
  integrations: {
    title: "Drive efficiency with contextual integrations",
    subtitle:
      "From orchestration tools to collaboration platforms, it works with what you already use. Or personalize the experience using our open APIs.",
    topRow: ["CONNECTWISE", "servicenow", "BigPanda", "PagerDuty", "Opsgenie", "HALOPSA"],
    bottomRow: ["webhooks", "Moogsoft", "slack", "zendesk", "freshservice"],
  },
  cta: {
    title: "Ready to explore MSP Central?",
    buttonLabel: "TAKE A DEMO",
    buttonHref: "/demo",
  },
} as const;
