"use client";

import { useEffect, useState, type MouseEvent } from "react";
import type { ServiceOffering } from "@/content/services";
import { cn } from "@/lib/cn";

type Props = {
  services: ServiceOffering[];
};

export function ServicesOverviewTabs({ services }: Props) {
  const [activeTarget, setActiveTarget] = useState<string>(services[0]?.slug ?? "");

  useEffect(() => {
    const handleHashChange = () => {
      const nextHash = window.location.hash.replace("#", "");
      if (nextHash) {
        setActiveTarget(nextHash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveTarget(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5],
      },
    );

    services.forEach((service) => {
      const section = document.getElementById(service.slug);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      observer.disconnect();
    };
  }, [services]);

  const handleTabClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const targetSection = document.getElementById(targetId);
    if (!targetSection) {
      return;
    }

    event.preventDefault();
    setActiveTarget(targetId);
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <div className="sticky top-0 z-30 mt-8 bg-[#f5f5f6]/95 py-2 backdrop-blur-[1px]">
      <div className="max-w-full overflow-x-auto">
        <nav aria-label="Services sections" className="mx-auto flex w-max items-center gap-2.5 px-1">
          {services.map((service) => {
            const active = activeTarget === service.slug;

            return (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                onClick={(event) => handleTabClick(event, service.slug)}
                className={cn(
                  "whitespace-nowrap rounded-[10px] border px-8 py-4 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-msp-blue/30",
                  active
                    ? "border-msp-blue bg-msp-blue text-white hover:bg-msp-blue hover:text-white"
                    : "border-msp-border bg-white text-msp-ink hover:border-msp-border-strong hover:bg-msp-surface-alt",
                )}
              >
                {service.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
