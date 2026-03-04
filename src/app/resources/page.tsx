import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { ResourceTile } from "@/components/ResourceTile";
import { resourcesContent } from "@/content/resources";
import { cn } from "@/lib/cn";

export default function ResourcesPage() {
  const { title, subtitle, categories, sections } = resourcesContent;

  return (
    <>
      <PageHero title={title} subtitle={subtitle} tone="heroSoft" size="md" className="py-14" />

      <section className="bg-[#f4f5f7] py-8 pb-16">
        <Container size="content">
          <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
            <aside className="h-fit rounded-[4px] border border-[#eceff3] bg-[#f7f8fa] p-5">
              <h2 className="text-[14px] font-bold text-msp-ink">CATEGORIES</h2>
              <nav className="mt-4 grid gap-1.5 text-[12px] text-msp-muted">
                {categories.map((label, index) => (
                  <a
                    key={label}
                    href={`#${sections[index]?.id}`}
                    className={cn(
                      "rounded-[4px] px-2 py-1.5 transition-colors hover:bg-[#eaf2ff] hover:text-msp-blue",
                      index === categories.length - 1 && "bg-[#eaf2ff] text-msp-blue",
                    )}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-14">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-20">
                  <h3 className="text-[37px] font-bold tracking-[-0.02em] text-msp-ink">{section.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {section.items.map((item) => (
                      <ResourceTile
                        key={item.label}
                        label={item.label}
                        tone={item.tone}
                        highlightLabel={"highlightLabel" in item ? item.highlightLabel : undefined}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
