import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Tone = "blue" | "green" | "purple" | "amber" | "slate";

const toneClasses: Record<Tone, { icon: string; badge: string }> = {
  blue: {
    icon: "text-[#4f86d6]",
    badge: "border-[#d6e6f8] bg-[#edf5ff]",
  },
  green: {
    icon: "text-[#4a9b63]",
    badge: "border-[#d8eddc] bg-[#eef9f1]",
  },
  purple: {
    icon: "text-[#7565b8]",
    badge: "border-[#e1daf7] bg-[#f2effd]",
  },
  amber: {
    icon: "text-[#c18b3b]",
    badge: "border-[#f2e1c2] bg-[#fff7e9]",
  },
  slate: {
    icon: "text-[#5f6d82]",
    badge: "border-[#dce4ee] bg-[#f1f5fa]",
  },
};

type Props = {
  icon: LucideIcon;
  tone?: Tone;
  size?: number;
  strokeWidth?: number;
  badge?: boolean;
  className?: string;
};

export function Icon({
  icon: IconComponent,
  tone = "blue",
  size = 23,
  strokeWidth = 1.9,
  badge = false,
  className,
}: Props) {
  if (!badge) {
    return (
      <span className={cn("inline-flex items-center justify-center", toneClasses[tone].icon, className)}>
        <IconComponent size={size} strokeWidth={strokeWidth} aria-hidden="true" />
      </span>
    );
  }

  const badgeSize = Math.max(30, Math.round(size + 12));

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border",
        toneClasses[tone].badge,
        toneClasses[tone].icon,
        className,
      )}
      style={{ width: badgeSize, height: badgeSize }}
    >
      <IconComponent size={size} strokeWidth={strokeWidth} aria-hidden="true" />
    </span>
  );
}
