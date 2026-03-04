"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import { CartIcon, DollarIcon, GlobeIcon, PlayCircleIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

const footerTopLinks = [
  "About us",
  "EULA",
  "Terms of service",
  "Security",
  "Compliance",
  "Privacy policy",
  "Cookie policy",
  "Affiliate program",
] as const;

const footerBottomLinks = ["Newsletter", "Contact sales", "Our offices"] as const;

function ActionStrip() {
  const actions = [
    { label: "Request Demo", icon: <PlayCircleIcon className="h-4 w-4" />, href: "/demo" },
    { label: "Get Quote", icon: <DollarIcon className="h-4 w-4" />, href: "/get-quote" },
    { label: "Buy Now", icon: <CartIcon className="h-4 w-4" />, href: "/store" },
  ] as const;

  return (
    <div className="border-y border-white/15 bg-black">
      <Container
        size="shell"
        className="flex h-[84px] flex-wrap items-center justify-center gap-8 text-center md:justify-between"
      >
        <Link
          href="/free-trial"
          className="inline-flex h-[48px] min-w-[160px] items-center justify-center rounded-[6px] bg-msp-red px-6 text-[17px] font-bold text-white transition-colors hover:bg-msp-red-strong"
        >
          Free Trial
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

function DemoWidget() {
  return (
    <div className="fixed bottom-4 right-4 z-30 w-[260px] rounded-t-md border border-white/20 bg-[#1d1f24] text-white shadow-msp-soft">
      <div className="flex justify-end pr-2 pt-1 text-xs text-white/70">-</div>
      <div className="px-4 pb-4">
        <div className="text-[12px] font-bold">Do you want a Personalized Demo?</div>
        <div className="mt-3 grid gap-2">
          {["Yes", "No"].map((item) => (
            <button
              type="button"
              key={item}
              className="flex h-8 items-center gap-2 rounded-full bg-white/10 px-3 text-left text-[12px] font-semibold hover:bg-white/15"
            >
              <span className="inline-block h-3 w-3 rounded-full border border-white/55 bg-white" />
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Footer({ className }: Props) {
  const pathname = usePathname();
  const hideActionStrip = pathname === "/get-quote";
  const hideFloaters = pathname === "/get-quote";

  return (
    <footer className={cn("msp-footer-bg relative text-white", className)}>
      {!hideActionStrip ? <ActionStrip /> : null}

      <Container size="shell" className="py-9 text-center">
        <div className="mx-auto flex max-w-[1020px] flex-wrap items-center justify-center gap-y-3 text-[15px] text-white/82">
          {footerTopLinks.map((label, index) => (
            <Link
              key={label}
              href="#"
              className={cn(
                "px-3 transition-colors hover:text-white",
                index !== footerTopLinks.length - 1 && "msp-link-divider",
              )}
              aria-label={label}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-3 flex max-w-[1020px] flex-wrap items-center justify-center gap-y-3 text-[15px] text-white/82">
          {footerBottomLinks.map((label) => (
            <Link
              key={label}
              href="#"
              className="msp-link-divider px-3 transition-colors hover:text-white"
              aria-label={label}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#"
            className="inline-flex items-center gap-1 px-3 text-[#1c7bed] transition-colors hover:text-[#58a0fb]"
            aria-label="Global (English)"
          >
            <GlobeIcon className="h-4 w-4" />
            Global (English)
            <span className="text-[11px]">v</span>
          </Link>
        </div>

        <div className="mt-7 text-[15px] text-white/68">
          (c) 2026 Zoho Corporation Pvt. Ltd. All rights reserved.
        </div>
      </Container>

      {!hideFloaters ? (
        <>
          <CookieBubble />
          <DemoWidget />
        </>
      ) : null}
    </footer>
  );
}
