import type { Metadata } from "next";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { serviceOfferingsBySlug } from "@/content/services";

const service = serviceOfferingsBySlug["microsoft-365"];

export const metadata: Metadata = {
  title: `${service.label} Services | Triad IT`,
  description: service.hero.description,
};

export default function Microsoft365ServicesPage() {
  return <ServiceLandingPage service={service} />;
}
