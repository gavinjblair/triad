export type ResourceItem = {
  label: string;
  tone?: "blue" | "slate" | "green" | "amber" | "purple" | "dark";
  highlightLabel?: string;
};

export const resourcesContent = {
  title: "Resources",
  subtitle: "Explore MSP Central better with free access to our complete library of online resources.",
  categories: ["Overview", "Documents", "Featured Resources", "Newsletter"],
  sections: [
    {
      id: "overview",
      title: "Overview",
      items: [
        { label: "Compliance", tone: "blue" },
        { label: "Architecture", tone: "blue" },
        { label: "Getting Started Guide", tone: "blue" },
        { label: "Business Benefits", tone: "blue" },
      ] satisfies ResourceItem[],
    },
    {
      id: "documents",
      title: "Documents",
      items: [
        { label: "Help", tone: "blue" },
        { label: "How to", tone: "blue" },
        { label: "Knowledge Base", tone: "blue" },
        { label: "Integrations", tone: "dark", highlightLabel: "READ NOW" },
      ] satisfies ResourceItem[],
    },
    {
      id: "featured",
      title: "Featured Resources",
      items: [
        { label: "What are Managed IT Services?", tone: "blue" },
        { label: "AI in MSP Central", tone: "blue" },
        { label: "Automation in MSP Central", tone: "blue" },
        { label: "Client Onboarding", tone: "blue" },
        { label: "Datasheet", tone: "blue" },
      ] satisfies ResourceItem[],
    },
    {
      id: "newsletter",
      title: "Newsletter",
      items: [
        { label: "February 2026", tone: "dark" },
        { label: "January 2026", tone: "purple" },
        { label: "December 2025", tone: "blue" },
        { label: "November 2025", tone: "blue" },
        { label: "October 2025", tone: "blue" },
        { label: "September 2025", tone: "blue" },
        { label: "August 2025", tone: "blue" },
        { label: "July 2025", tone: "dark", highlightLabel: "READ NOW" },
        { label: "June 2025", tone: "blue" },
        { label: "May 2025", tone: "blue" },
        { label: "April 2025", tone: "blue" },
        { label: "March 2025", tone: "blue" },
        { label: "February 2025", tone: "blue" },
        { label: "January 2025", tone: "blue" },
      ] satisfies ResourceItem[],
    },
  ],
} as const;
