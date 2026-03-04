export const getQuoteContent = {
  title: "Request a price quote!",
  quote: {
    body:
      "The licensing system is easy to understand and support, their prices are affordable, their support desk is very friendly and respects the contracted SLAs, which gives us confidence and assurance that they will be there when needed.",
    author: "Humberto P,",
    role: "IT Director / CIO",
  },
  form: {
    modules: ["Endpoints", "Helpdesk", "Monitors"],
    pricing: ["Annual", "Monthly"],
    cta: "GET QUOTE",
    countries: ["United Kingdom", "United States", "Canada", "Australia"],
  },
} as const;
