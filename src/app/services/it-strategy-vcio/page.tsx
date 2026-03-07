import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { serviceOfferingsBySlug } from "@/content/services";

const service = serviceOfferingsBySlug["it-strategy-vcio"];

export const metadata: Metadata = {
  title: `${service.label} Services | Triad IT`,
  description: service.hero.description,
};

export default function ItStrategyVcioServicesPage() {
  return <ServiceLandingPage service={service} />;
}
