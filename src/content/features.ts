export const featuresContent = {
  hero: {
    title: "A comprehensive RMM platform that every MSP needs",
    subtitle:
      "Integrated remote monitoring and management, MSP-specific and built to scale with growing operations. From patching and scripting to alerts, asset tracking, and remote access, all managed through a single pane of glass.",
    cta: { label: "GET QUOTE", href: "/get-quote" },
  },
  sectionsTitle: "Everything You Need to Monitor IT Health",
  sections: [
    {
      title: "Automated patch management",
      body:
        "Stay ahead of vulnerabilities with fully automated, risk-driven patch management.",
      bullets: [
        "Deploy patches for 1,200+ third-party apps, operating systems, drivers, BIOS, and firmware updates automatically.",
        "Monitor and enforce patch compliance across client networks at any time.",
        "Drive patch cycles from release to deployment with minimal manual intervention.",
        "Prioritize patching based on the severity of vulnerabilities and risk levels.",
      ],
      tone: "blue",
      align: "left",
    },
    {
      title: "Native remote troubleshooting kit",
      body:
        "Resolve endpoint issues swiftly and securely with a full-featured, privacy-first troubleshooting toolkit.",
      bullets: [
        "Protect client privacy with remote sessions that only begin with end-user consent.",
        "Leverage multi-monitor support and diagnostic utilities for deeper analysis.",
        "Tailor each troubleshooting session to the specific needs and environment of each client.",
      ],
      tone: "amber",
      align: "right",
    },
    {
      title: "Network monitoring",
      body:
        "Gain complete visibility into client networks across on-site, remote, and hybrid environments.",
      bullets: [
        "Track performance metrics across 450+ vendor templates and 11,000+ device templates.",
        "Understand bandwidth consumption and traffic patterns using NetFlow, sFlow, J-Flow, CFlow, and AppFlow technologies.",
        "Remotely triage, configure, and troubleshoot network devices to reduce downtime and manual effort.",
        "Monitor distributed software-defined networks in real time across client environments.",
      ],
      tone: "green",
      align: "left",
    },
    {
      title: "Endpoint automation",
      body:
        "Automate the entire device lifecycle, from onboarding to retirement, for maximum operational efficiency.",
      bullets: [
        "Instantly provision and configure endpoints using scripts, templates, and policy-based automation.",
        "Deploy apps from Apple App Store, Google Play, in-house apps, and more with ready-to-use templates.",
        "Access endpoint health, performance, and troubleshooting insights to stay proactive at all times.",
      ],
      tone: "purple",
      align: "right",
    },
    {
      title: "Broad OS Offering",
      body:
        "Manage every endpoint type with comprehensive platform coverage, no device left behind.",
      bullets: [
        "Windows, Linux, macOS, iOS, Android, tvOS, and ChromeOS.",
        "Deploy apps from Apple App Store, Google Play, in-house apps, and more with ready-to-use templates.",
        "Servers, workstations, mobile devices, IoT devices, wearables, rugged devices, kiosks, and POS systems.",
      ],
      tone: "amber",
      align: "left",
    },
  ],
  closing: {
    body:
      "With almost 90% of SMBs using or considering MSPs to manage their IT and OT, it's time to take the lead. Partner with us to deliver what they truly need.",
    cta: { label: "GET QUOTE", href: "/get-quote" },
  },
} as const;
