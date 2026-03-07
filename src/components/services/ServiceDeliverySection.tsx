import { Container } from "@/components/Container";
import { ServiceFrameworkStrip } from "@/components/services/ServiceFrameworkStrip";
import type { ServiceOffering } from "@/content/services";

type Props = {
  frameworkStrip: ServiceOffering["frameworkStrip"];
};

export function ServiceDeliverySection({ frameworkStrip }: Props) {
  return (
    <section className="mb-12 mt-6">
      <Container size="content">
        <div className="mx-auto max-w-[1120px] rounded-[12px] border border-[#e6edf3] bg-[#f8fafc]/92 px-4 pb-5 pt-3 shadow-[0_1px_4px_rgba(16,24,39,0.04)]">
          <ServiceFrameworkStrip label={frameworkStrip.label} items={frameworkStrip.items} />
        </div>
      </Container>
    </section>
  );
}
