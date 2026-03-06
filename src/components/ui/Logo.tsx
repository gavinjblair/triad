import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
};

export default function Logo({ variant = "light" }: LogoProps) {
  const iconSrc =
    variant === "dark"
      ? "/images/icons/logo-icon-white.svg"
      : "/images/icons/logo-icon.svg";

  const textColor =
    variant === "dark"
      ? "text-white"
      : "text-slate-900";

  return (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="Triad IT Home"
    >
      <Image
        src={iconSrc}
        alt="Triad IT logo"
        width={32}
        height={32}
        priority
      />

      <span
        className={`font-semibold tracking-wide text-lg ${textColor}`}
      >
        TRIAD-IT
      </span>
    </Link>
  );
}
