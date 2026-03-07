import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  UiPanel,
  type UiPanelTone,
  type UiPanelVariant,
} from "@/components/illustrations/UiPanel";
import { cn } from "@/lib/cn";

type Props = ComponentPropsWithoutRef<"div"> & {
  tone?: UiPanelTone;
  variant?: UiPanelVariant;
  label?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePriority?: boolean;
  framed?: boolean;
  spotlight?: boolean;
  children?: ReactNode;
};

export function VisualPlaceholder({
  tone = "blue",
  variant = "dashboard",
  label,
  imageSrc,
  imageAlt,
  imagePriority,
  framed = true,
  spotlight = !framed,
  className,
  style,
  children,
  ...props
}: Props) {
  const content = imageSrc ? (
    <div className={cn("relative h-full w-full", framed && "overflow-hidden rounded-[6px]")}>
      <Image
        src={imageSrc}
        alt={imageAlt ?? label ?? "Illustration"}
        fill
        priority={imagePriority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain"
      />
      {children}
    </div>
  ) : (
    children
  );

  if (!framed) {
    return (
      <div className={cn("relative isolate", className)} style={style} {...props}>
        {spotlight ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 70% 42%, rgba(255, 255, 255, 0.38) 0%, rgba(236, 243, 252, 0.22) 34%, rgba(236, 243, 252, 0) 68%)",
            }}
          />
        ) : null}
        <div className="relative z-10 h-full w-full">{content}</div>
      </div>
    );
  }

  return (
    <UiPanel tone={tone} variant={variant} label={label} className={className} style={style} {...props}>
      {content}
    </UiPanel>
  );
}
