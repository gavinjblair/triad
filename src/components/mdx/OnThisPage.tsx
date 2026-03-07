"use client";

import { useEffect, useState, type MouseEvent } from "react";
import type { GuideHeading } from "@/lib/mdxHeadings";
import { cn } from "@/lib/cn";

type Props = {
  headings: GuideHeading[];
};

export function OnThisPage({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "");

  useEffect(() => {
    const headingIds = headings.map((heading) => heading.id);
    const headingElements = headingIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!headingElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (mostVisible?.target.id) {
          setActiveId(mostVisible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
    setActiveId(targetId);
  };

  if (!headings.length) {
    return null;
  }

  return (
    <aside className="block">
      <div className="sticky top-24">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-msp-subtle/90">On this page</p>
        <nav aria-label="On this page">
          <ul className="mt-3 grid gap-1 border-l border-msp-border/80 pl-3">
            {headings.map((heading) => {
              const isActive = heading.id === activeId;

              return (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    onClick={(event) => handleLinkClick(event, heading.id)}
                    className={cn(
                      "block text-[11px] leading-relaxed text-msp-subtle transition-colors hover:text-msp-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-msp-blue/30",
                      isActive && "-ml-[13px] border-l-2 border-msp-blue/80 pl-[11px] font-medium text-msp-ink",
                    )}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
