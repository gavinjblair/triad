import Image from "next/image";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  UiPanel,
  type UiPanelTone,
  type UiPanelVariant,
} from "@/components/illustrations/UiPanel";

type Props = ComponentPropsWithoutRef<"div"> & {
  tone?: UiPanelTone;
  variant?: UiPanelVariant;
  label?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePriority?: boolean;
  children?: ReactNode;
};

export function VisualPlaceholder({
  tone = "blue",
  variant = "dashboard",
  label,
  imageSrc,
  imageAlt,
  imagePriority,
  children,
  ...props
}: Props) {
  const content = imageSrc ? (
    <div className="relative h-full w-full overflow-hidden rounded-[6px]">
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

  return (
    <UiPanel tone={tone} variant={variant} label={label} {...props}>
      {content}
    </UiPanel>
  );
}
