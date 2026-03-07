"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { GlobeIcon, MailIcon, PlayCircleIcon, PoundIcon } from "@/components/icons";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

const footerPrimaryLinks = [
  { label: "Overview", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

function ActionStrip() {
  const actions = [
    { label: "Book a Structured IT Review", icon: <PlayCircleIcon className="h-4 w-4" />, href: "/contact" },
    { label: "View Pricing", icon: <PoundIcon className="h-4 w-4" />, href: "/pricing" },
    { label: "Contact", icon: <MailIcon className="h-4 w-4" />, href: "/contact" },
  ] as const;

  return (
    <div className="border-y border-white/15 bg-black">
      <Container
        size="shell"
        className="flex h-[84px] flex-wrap items-center justify-center gap-8 text-center md:justify-between"
      >
        <Link
          href="/contact"
          className="inline-flex min-w-[240px] items-center justify-center rounded-md bg-msp-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-msp-red-strong"
        >
          Book a Structured IT Review
        </Link>
        <div className="flex items-center gap-12 text-white/90">
          {actions.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="grid justify-items-center gap-0.5 text-[12px] transition-colors hover:text-white"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

function CookieBubble() {
  return (
    <button
      type="button"
      aria-label="Cookie settings"
      className="fixed bottom-4 left-3 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-[#e5d8bd] bg-[#fff4db] text-[24px] shadow-msp-soft"
    >
      <span className="relative block h-7 w-7 rounded-full bg-[#f2b269]">
        <span className="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-[#cc7a2e]" />
        <span className="absolute right-1.5 top-2 h-1.5 w-1.5 rounded-full bg-[#cc7a2e]" />
        <span className="absolute bottom-1.5 left-2 h-1.5 w-1.5 rounded-full bg-[#cc7a2e]" />
      </span>
    </button>
  );
}

export function Footer({ className }: Props) {
  const pathname = usePathname();
  const hideActionStrip = pathname === "/get-quote";
  const hideCookieBubble = pathname === "/get-quote";

  return (
    <footer className={cn("msp-footer-bg relative text-white", className)}>
      {!hideActionStrip ? <ActionStrip /> : null}

      <Container size="shell" className="py-14 text-center">
        <div className="inline-block">
          <Logo variant="dark" />
        </div>

        <p className="mx-auto max-w-[940px] text-[12px] leading-relaxed text-white/62">
          Structured delivery. Defined standards. Clear accountability.
        </p>

        <div className="mx-auto flex max-w-[1020px] flex-wrap items-center justify-center gap-y-3 text-[15px] text-white/82">
          {footerPrimaryLinks.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "px-3 transition-colors hover:text-white",
                index !== footerPrimaryLinks.length - 1 && "msp-link-divider",
              )}
              aria-label={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-3 flex max-w-[1020px] flex-wrap items-center justify-center gap-y-3 text-[15px] text-white/82">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 px-3 text-[#1c7bed] transition-colors hover:text-[#58a0fb]"
            aria-label="Region"
          >
            <GlobeIcon className="h-4 w-4" />
            Supporting organisations across Edinburgh, Glasgow and Central Scotland.
          </Link>
        </div>

        <div className="mt-7 text-[15px] text-white/68">
          (c) 2026 TRIAD IT. All rights reserved.
        </div>
      </Container>

      {!hideCookieBubble ? <CookieBubble /> : null}
    </footer>
  );
}
