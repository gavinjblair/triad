import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { serviceOfferingsBySlug } from "@/content/services";

const service = serviceOfferingsBySlug.cybersecurity;

export const metadata: Metadata = {
  title: `${service.label} Services | Triad IT`,
  description: service.hero.description,
};

export default function CybersecurityServicesPage() {
  return <ServiceLandingPage service={service} />;
}
