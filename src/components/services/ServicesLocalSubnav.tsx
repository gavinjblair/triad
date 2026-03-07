import Link from "next/link";
import { serviceOfferings, type ServiceSlug } from "@/content/services";
import { cn } from "@/lib/cn";

type Props = {
  activeSlug: ServiceSlug;
};

export function ServicesLocalSubnav({ activeSlug }: Props) {
  return (
    <nav aria-label="Services pages">
      <div className="max-w-full overflow-x-auto">
        <ul className="mx-auto flex w-max items-center gap-2.5 px-1">
          {serviceOfferings.map((item) => {
            const isActive = item.slug === activeSlug;

            return (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "inline-flex whitespace-nowrap rounded-[10px] border px-8 py-4 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-msp-blue/30",
                    isActive
                      ? "border-msp-blue bg-msp-blue text-white hover:bg-msp-blue hover:text-white"
                      : "border-msp-border bg-white text-msp-ink hover:border-msp-border-strong hover:bg-msp-surface-alt",
                  )}
                >
                  {item.navLabel}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
