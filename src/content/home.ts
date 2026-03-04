export const homeContent = {
  hero: {
    title: {
      lead: "A ",
      highlight: "Single Platform",
      tail: " for ITSM, RMM, and Cybersecurity",
    },
    subtitle: "All your MSP tools, in one place.",
    cta: { label: "START A FREE TRIAL", href: "/free-trial" },
  },
  brands: {
    title: "Brands that trust us",
    items: ["BLAZE", "Copaque", "intwo", "NETRICH", "ivision"],
  },
  integrated: {
    title: "Integrated Platform for Managed Services",
    body:
      "MSP Central brings remote monitoring and management, service delivery, security, and deep automation into one unified stack, engineered for fast-moving MSP teams. Consolidate the entire service desk and endpoint lifecycle into one platform.",
    stats: [
      { value: "16,000+", label: "MSPs and teams empowered" },
      { value: "15+", label: "Countries across the world" },
      { value: "2M+", label: "Cloud devices managed" },
      { value: "7,100+", label: "MSPs powered" },
    ],
  },
  operations: {
    title: "One place where MSP operations come together",
    tabs: [
      { value: "rmm", label: "RMM" },
      { value: "itsm", label: "ITSM" },
      { value: "server", label: "Server management" },
      { value: "security", label: "Endpoint security" },
      { value: "reports", label: "Reports and analytics" },
    ],
    blocks: [
      {
        id: "rmm",
        title:
          "Monitor, patch, and troubleshoot devices remotely with a robust RMM engine that scales across clients and geographies.",
        description:
          "Automate routine tasks, enforce policy controls, and handle alerts from one command center.",
        cta: "EXPLORE RMM",
        tone: "blue",
        align: "left",
      },
      {
        id: "itsm",
        title:
          "Manage tickets, contracts, billing, and SLAs from a single ITSM console that aligns your service desk and business operations.",
        description:
          "Empower technicians with contextual views and streamline workflows to boost productivity.",
        cta: "EXPLORE ITSM",
        tone: "slate",
        align: "right",
      },
      {
        id: "server",
        title:
          "Track uptime, network performance, server loads, and service availability with 80+ KPIs, alongside IT automation to enable self-healing of servers.",
        description:
          "Get alerts before incidents escalate and resolve faster with automation-first workflows.",
        cta: "EXPLORE SERVER MONITORING",
        tone: "green",
        align: "left",
      },
      {
        id: "security",
        title:
          "Protect every device with layered endpoint security, integrating an antivirus tool, vulnerability scans, browser security capabilities, and application controls.",
        description:
          "Use centralized lock-down rules and hardening policies to keep environments resilient.",
        cta: "EXPLORE ENDPOINT SECURITY",
        tone: "amber",
        align: "right",
      },
      {
        id: "reports",
        title:
          "Visualize service performance, technician KPIs, asset usage, and client health with customizable reports and dashboards.",
        description:
          "Turn raw data into actionable insights your team and clients can understand instantly.",
        cta: "EXPLORE REPORTS & ANALYTICS",
        tone: "purple",
        align: "left",
      },
    ],
  },
  compliance: {
    title: "Stay compliant—stay trusted",
    subtitle: "Built to meet global standards across security, privacy, and industry regulations.",
    items: ["SOC 2", "ISO 27001", "ISO 27701", "HIPAA", "GDPR", "PCI DSS"],
  },
  integrations: {
    title: "Drive efficiency with contextual integrations",
    subtitle:
      "From service desk tools to collaboration platforms, it works with what you already use. Or personalize the experience using our open APIs.",
    topRow: ["CONNECTWISE", "servicenow", "BigPanda", "PagerDuty", "Opsgenie", "HALOPSA"],
    bottomRow: ["webhooks", "Moogsoft", "slack", "zendesk", "freshservice"],
  },
  quickLinks: {
    title: "Quick Links",
    items: [
      { title: "ROI calculator", href: "#", tone: "blue" as const },
      { title: "Client Onboarding", href: "#", tone: "green" as const },
      { title: "Help Documentation", href: "#", tone: "amber" as const },
      { title: "Getting started guide", href: "#", tone: "red" as const },
      { title: "Newsletters", href: "/resources", tone: "slate" as const },
    ],
  },
  closingCta: {
    title: "Not just a tool—a partner",
    subtitle: "Set the platform, services, and support to grow your MSP business.",
    buttonLabel: "START A FREE TRIAL",
    buttonHref: "/free-trial",
  },
} as const;
