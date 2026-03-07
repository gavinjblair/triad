import { Container } from "@/components/Container";
import { ServicesLocalSubnav } from "@/components/services/ServicesLocalSubnav";
import type { ServiceSlug } from "@/content/services";

type Props = {
  activeSlug: ServiceSlug;
};

export function ServiceNavigationSection({ activeSlug }: Props) {
  return (
    <section className="sticky top-0 z-30 mt-16 bg-[#f5f5f6]/95 py-2 backdrop-blur-[1px] md:mt-20">
      <Container size="content">
        <div className="mx-auto max-w-[1120px]">
          <ServicesLocalSubnav activeSlug={activeSlug} />
        </div>
      </Container>
    </section>
  );
}
