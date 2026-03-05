export const contactContent = {
  hero: {
    eyebrow: "CONTACT",
    title: "Book a structured IT assessment",
    subtitle:
      "Get a structured review that clarifies risk, responsibility, and practical next steps for your environment.",
    bullets: [
      "No-obligation assessment focused on operational clarity.",
      "Senior-level review of risk, scope, and priorities.",
      "Clear findings with practical recommendations and next actions.",
    ],
    primaryCta: { label: "Book a Structured IT Review", href: "#assessment-form" },
    secondaryCta: { label: "Get a Free IT Cost Comparison", href: "/pricing" },
  },
  process: {
    title: "What happens next?",
    subtitle: "A defined review process. Calm, structured, and outcome-focused.",
    steps: [
      {
        label: "01",
        title: "Initial call (20-30 minutes)",
        body: "We understand your current setup, priorities, and operational challenges.",
      },
      {
        label: "02",
        title: "Environment review",
        body: "High-level review of systems, security posture, documentation, and operational risk.",
      },
      {
        label: "03",
        title: "Practical recommendations",
        body: "Clear, practical recommendations with defined scope and no obligation.",
      },
    ],
  },
  form: {
    title: "Request IT Assessment",
    fields: {
      name: "Full Name",
      company: "Company Name",
      industry: "Industry (optional)",
      email: "Email",
      users: "Number of Users",
      phone: "Phone",
      setup: "Current IT setup",
      goal: "Primary goal / biggest pain (optional)",
    },
    industryPlaceholder: "e.g. Construction, Finance, Retail",
    usersOptions: ["Select", "1-10", "11-25", "26-50", "51-100", "100+"],
    submitLabel: "Request IT Assessment",
    privacyNote: "Your information is confidential and never shared.",
    consentLabel: "I agree to be contacted about this assessment request.",
  },
  trustPanel: {
    title: "Why businesses choose TRIAD IT",
    bullets: [
      "Structured operating model",
      "Defined SLAs",
      "Security-first configuration",
      "Senior-level oversight",
      "Transparent pricing",
    ],
    closing: "Defined systems. Measured change. Controlled environments.",
  },
  direct: {
    title: "Prefer to email or call?",
    subtitle: "All enquiries are reviewed directly and responded to within one business day.",
    name: "TRIAD IT",
    email: "info@triad-it.co.uk",
    phone: "0131 555 0123",
    region: "Edinburgh - Glasgow - Stirling and surrounding areas",
  },
  closingCta: {
    title: "Prefer to explore first?",
    subtitle: "View solutions and pricing before booking an assessment.",
    primaryLabel: "View Solutions",
    primaryHref: "/solutions",
    secondaryLabel: "View Pricing",
    secondaryHref: "/pricing",
  },
} as const;
