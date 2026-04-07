import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  ClipboardList,
  FileSearch,
  Gauge,
  KeyRound,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { resourcesContent } from "@/content/resources";
import { cn } from "@/lib/cn";

const sectionGuideIcons: Record<string, LucideIcon[]> = {
  "strategic-guides": [
    BriefcaseBusiness,
    WalletCards,
    ArrowUpRight,
    ClipboardList,
    AlertTriangle,
  ],
  "operational-guides": [
    BadgeCheck,
    FileSearch,
    Gauge,
  ],
  "security-guides": [
    ShieldCheck,
    KeyRound,
    BadgeCheck,
  ],
};

export default function ResourcesPage() {
  const { hero, categories, sections, closingCta } = resourcesContent;
  const sectionStyles = {
    "strategic-guides": {
      card: "border-l-4 border-l-msp-blue",
      chip: "border-[#d6e6f8] bg-[#edf5ff] text-msp-blue",
      badge: "ring-4 ring-[#edf5ff]",
    },
    "operational-guides": {
      card: "border-l-4 border-l-[#4a9b63]",
      chip: "border-[#d8eddc] bg-[#eef9f1] text-[#4a9b63]",
      badge: "ring-4 ring-[#eef9f1]",
    },
    "security-guides": {
      card: "border-l-4 border-l-[#c18b3b]",
      chip: "border-[#f2e1c2] bg-[#fff7e9] text-[#c18b3b]",
      badge: "ring-4 ring-[#fff7e9]",
    },
  } as const;

  return (
    <>
      <section className="bg-white py-20">
        <Container size="content">
          <div className="max-w-[860px]">
            <p className="msp-eyebrow">{hero.eyebrow}</p>
            <h1 className="msp-hero-title mt-3 max-w-[760px]">
              {hero.title}
            </h1>
            <p className="msp-lead mt-5 max-w-[760px]">{hero.subtitle}</p>
            <ul className="msp-list mt-5 grid max-w-[760px] gap-2">
              {hero.bullets.map((bullet) => (
                <li key={bullet} className="relative pl-4">
                  <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-msp-blue" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href} size="sm">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} size="sm" variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
            <aside className="h-fit rounded-[8px] border border-gray-100 bg-white p-6 shadow-msp-card lg:sticky lg:top-24">
              <h3 className="text-[15px] font-bold tracking-[-0.01em] text-msp-ink">CATEGORIES</h3>
              <nav className="mt-5 grid gap-2.5 text-[14px] text-msp-muted">
                {categories.map((label, index) => (
                  <a
                    key={label}
                    href={`#${sections[index]?.id}`}
                    className={cn(
                      "rounded-[6px] px-3 py-2 transition-colors hover:bg-[#edf4ff] hover:text-msp-blue",
                      index === 0 && "bg-[#edf4ff] text-msp-blue",
                    )}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-12">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-20">
                  <h2 className="msp-section-title">{section.title}</h2>
                  <div className="mt-7 grid gap-4">
                    {section.items.map((item, itemIndex) => {
                      const guideHref = "href" in item ? item.href : undefined;
                      const GuideIcon = sectionGuideIcons[section.id]?.[itemIndex] ?? ClipboardList;
                      const iconTone = (item.tone ?? "blue") as "blue" | "green" | "amber" | "purple" | "slate";
                      const sectionStyle = sectionStyles[section.id as keyof typeof sectionStyles];
                      const card = (
                        <article
                          className={cn(
                            "rounded-[12px] border border-gray-100 bg-white p-5 shadow-msp-card transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#d9e4f2] hover:bg-[#fbfcfe] hover:shadow-[0_8px_26px_rgba(15,23,42,0.07)]",
                            sectionStyle.card,
                          )}
                        >
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <Icon
                                icon={GuideIcon}
                                tone={iconTone}
                                badge
                                size={22}
                                className={cn(
                                  "shadow-[0_6px_16px_rgba(15,23,42,0.08)] saturate-[1.08]",
                                  sectionStyle.badge,
                                )}
                              />
                              <span
                                className={cn(
                                  "inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]",
                                  sectionStyle.chip,
                                )}
                              >
                                {section.title.replace(" Guides", "")}
                              </span>
                            </div>
                            {guideHref ? (
                              <span className="inline-block pt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-msp-subtle">
                                Read guide
                              </span>
                            ) : (
                              <span className="inline-block pt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-msp-subtle">
                                Coming soon
                              </span>
                            )}
                          </div>
                          <div className="mt-3">
                            <h3 className="msp-card-title">{item.label}</h3>
                            <p className="msp-body mt-2">{item.description}</p>
                          </div>
                        </article>
                      );

                      return (
                        guideHref ? (
                          <Link key={item.label} href={guideHref} className="block">
                            {card}
                          </Link>
                        ) : (
                          <div key={item.label}>{card}</div>
                        )
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f5f5f6] py-20">
        <Container size="content">
          <div className="msp-hero-soft grid items-center gap-6 rounded-[12px] border border-gray-100 p-7 shadow-msp-card md:grid-cols-[1fr_auto_auto]">
            <div>
              <h2 className="msp-section-title">{closingCta.title}</h2>
            </div>
            <Button href={closingCta.buttonHref} size="sm">
              {closingCta.buttonLabel}
            </Button>
            <Button href={closingCta.secondaryHref} size="sm" variant="secondary">
              {closingCta.secondaryLabel}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
