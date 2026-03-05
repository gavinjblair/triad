"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { ChevronDown, CloseIcon, MenuIcon, SearchIcon, UserIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
};

type HeaderProps = {
  topLinks: NavItem[];
  mainLinks: NavItem[];
  ctaHref: string;
  ctaLabel: string;
};

function ManageEngineMark() {
  return (
    <span className="relative mt-0.5 h-[18px] w-[18px] shrink-0">
      <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#f17f2a] border-r-[#1f9bda]" />
      <span className="absolute inset-[2px] rounded-full border-2 border-transparent border-t-[#1da9d6] border-r-[#f2bf42]" />
      <span className="absolute inset-[5px] rounded-full bg-white" />
    </span>
  );
}

function Brand() {
  return (
    <Link href="/" className="inline-flex flex-col leading-none">
      <div className="flex items-start gap-1.5">
        <span className="text-[20px] font-bold tracking-[-0.01em] text-msp-ink sm:text-[22px]">
          ManageEngine
        </span>
        <ManageEngineMark />
      </div>
      <span className="mt-1.5 text-[41px] font-bold tracking-[-0.02em] text-msp-ink sm:text-[43px]">
        MSP Central
      </span>
    </Link>
  );
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
        const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "inline-flex items-center gap-1 rounded-sm py-1 transition-colors hover:text-msp-blue-strong",
              active && "text-msp-ink",
            )}
          >
            {item.label}
            {item.hasDropdown ? <ChevronDown className="mt-1 h-4 w-4 text-msp-subtle" /> : null}
          </Link>
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
  ctaHref,
  ctaLabel,
}: {
  open: boolean;
  items: NavItem[];
  pathname: string;
  onClose: () => void;
  ctaHref: string;
  ctaLabel: string;
}) {
  if (!open) return null;

  return (
    <div className="border-t border-msp-border bg-white xl:hidden">
      <Container size="shell" className="py-5">
        <nav aria-label="Main navigation" className="grid gap-2">
          {items.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
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
                onClick={() => setMobileOpen((prev) => !prev)}
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
        onClose={() => setMobileOpen(false)}
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
      />
    </header>
  );
}
