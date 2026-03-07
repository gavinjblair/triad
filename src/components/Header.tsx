"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ChevronDown, CloseIcon, MenuIcon, SearchIcon, UserIcon } from "@/components/icons";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

type NavChildItem = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavChildItem[];
};

type HeaderProps = {
  topLinks: NavItem[];
  mainLinks: NavItem[];
  ctaHref: string;
  ctaLabel: string;
};

function Brand() {
  return <Logo variant="light" />;
}

function DesktopNav({
  items,
  pathname,
}: {
  items: NavItem[];
  pathname: string;
}) {
  return (
    <nav className="hidden items-center gap-9 text-[16px] font-normal tracking-[-0.01em] text-msp-ink/90 xl:flex">
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const childActive = item.children?.some((child) => pathname.startsWith(child.href)) ?? false;
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href) || childActive;

        return (
          <div key={item.label} className="group relative">
            <Link
              href={item.href}
              className={cn(
                "inline-flex items-center gap-1 rounded-sm py-1 transition-colors hover:text-msp-blue-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-msp-blue/30",
                active && "text-msp-ink",
              )}
            >
              {item.label}
              {hasChildren || item.hasDropdown ? <ChevronDown className="mt-1 h-4 w-4 text-msp-subtle" /> : null}
            </Link>

            {hasChildren ? (
              <div className="pointer-events-none absolute left-0 top-full z-30 pt-3 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="w-[250px] rounded-[10px] border border-gray-100 bg-white p-2 shadow-[0_10px_28px_rgba(16,24,39,0.1)]">
                  {item.children?.map((child) => {
                    const childIsActive = pathname.startsWith(child.href);

                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-[6px] px-3 py-2 text-[14px] text-msp-ink/90 transition-colors hover:bg-msp-surface-alt hover:text-msp-blue-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-msp-blue/30",
                          childIsActive && "bg-msp-surface-alt text-msp-blue-strong",
                        )}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}

function MobileNav({
  open,
  items,
  pathname,
  onClose,
  expandedItem,
  onToggleItem,
  ctaHref,
  ctaLabel,
}: {
  open: boolean;
  items: NavItem[];
  pathname: string;
  onClose: () => void;
  expandedItem: string | null;
  onToggleItem: (href: string) => void;
  ctaHref: string;
  ctaLabel: string;
}) {
  if (!open) return null;

  return (
    <div className="border-t border-msp-border bg-white xl:hidden">
      <Container size="shell" className="py-5">
        <nav aria-label="Main navigation" className="grid gap-2">
          {items.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const childActive = item.children?.some((child) => pathname.startsWith(child.href)) ?? false;
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href) || childActive;
            const submenuId = `mobile-submenu-${item.href.replace(/\//g, "-")}`;

            if (hasChildren) {
              const expanded = expandedItem === item.href;

              return (
                <div key={item.label} className="rounded-md bg-white">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex-1 rounded-md px-3 py-3 text-[16px] text-msp-ink/90 transition-colors hover:bg-msp-surface-alt hover:text-msp-blue-strong",
                        active && "bg-msp-surface-alt text-msp-blue-strong",
                      )}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={expanded ? `Collapse ${item.label} submenu` : `Expand ${item.label} submenu`}
                      aria-expanded={expanded}
                      aria-controls={submenuId}
                      className="mr-1 inline-flex h-9 w-9 items-center justify-center rounded-md border border-msp-border text-msp-muted transition-colors hover:text-msp-ink"
                      onClick={() => onToggleItem(item.href)}
                    >
                      <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
                    </button>
                  </div>

                  {expanded ? (
                    <div id={submenuId} className="grid gap-1 pb-2 pl-5 pr-2">
                      {item.children?.map((child) => {
                        const childIsActive = pathname.startsWith(child.href);

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "rounded-md px-3 py-2 text-[14px] text-msp-ink/90 transition-colors hover:bg-msp-surface-alt hover:text-msp-blue-strong",
                              childIsActive && "bg-msp-surface-alt text-msp-blue-strong",
                            )}
                            onClick={onClose}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-3 text-[16px] text-msp-ink/90 transition-colors hover:bg-msp-surface-alt hover:text-msp-blue-strong",
                  active && "bg-msp-surface-alt text-msp-blue-strong",
                )}
                onClick={onClose}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Button href={ctaHref} size="sm" className="mt-4 w-full" onClick={onClose}>
          {ctaLabel}
        </Button>
      </Container>
    </div>
  );
}

export function Header({ topLinks, mainLinks, ctaHref, ctaLabel }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);

  return (
    <header className="border-b border-msp-border bg-white">
      <Container size="shell">
        <div className="grid grid-cols-1 gap-6 py-4 xl:grid-cols-[330px_1fr] xl:gap-10 xl:py-4">
          <Brand />

          <div className="flex flex-col xl:items-end">
            <div className="hidden xl:flex">
              <div className="flex items-center gap-4 border-b border-msp-border pb-2 text-[12px] text-msp-muted">
                {topLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-msp-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                <span className="text-msp-border-strong">|</span>
                <Link
                  href="/account"
                  aria-label="Account"
                  className="text-msp-muted transition-colors hover:text-msp-ink"
                >
                  <UserIcon className="h-[18px] w-[18px]" />
                </Link>
                <Link
                  href="/search"
                  aria-label="Search"
                  className="text-msp-muted transition-colors hover:text-msp-ink"
                >
                  <SearchIcon className="h-[18px] w-[18px]" />
                </Link>
              </div>
            </div>

            <div className="hidden items-center gap-9 pt-5 xl:flex">
              <DesktopNav items={mainLinks} pathname={pathname} />
              <Button href={ctaHref} size="sm" className="min-w-[238px] text-[12px]">
                {ctaLabel}
              </Button>
            </div>

            <div className="flex items-center justify-between xl:hidden">
              <div className="flex items-center gap-3 text-msp-muted">
                <Link href="/account" aria-label="Account" className="rounded-md border border-msp-border p-2">
                  <UserIcon className="h-4 w-4" />
                </Link>
                <Link href="/search" aria-label="Search" className="rounded-md border border-msp-border p-2">
                  <SearchIcon className="h-4 w-4" />
                </Link>
              </div>
              <button
                type="button"
                onClick={() =>
                  setMobileOpen((prev) => {
                    const nextOpen = !prev;
                    if (!nextOpen) {
                      setMobileExpandedItem(null);
                    }
                    return nextOpen;
                  })
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-msp-border text-msp-muted transition-colors hover:text-msp-ink"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </Container>

      <MobileNav
        open={mobileOpen}
        items={mainLinks}
        pathname={pathname}
        onClose={() => {
          setMobileOpen(false);
          setMobileExpandedItem(null);
        }}
        expandedItem={mobileExpandedItem}
        onToggleItem={(href) => setMobileExpandedItem((prev) => (prev === href ? null : href))}
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
      />
    </header>
  );
}
