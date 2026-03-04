import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

type Props = {
  title: string;
  subtitle?: string;
};

export function PlaceholderPage({ title, subtitle }: Props) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} tone="heroSoft" size="md" />
      <Section className="py-16">
        <Container size="content">
          <Card className="text-center">
            <p className="text-[15px] text-msp-muted">
              Placeholder page. Add screenshot guidance for this route to clone it pixel-for-pixel.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
