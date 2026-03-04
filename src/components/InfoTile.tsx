import Link from "next/link";
import type { ReactNode } from "react";
import { Card } from "@/components/Card";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  className?: string;
};

export function InfoTile({ title, description, icon, href = "#", className }: Props) {
  return (
    <Card variant="tight" className={cn("group p-7", className)}>
      <Link href={href} className="block">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 text-msp-blue">{icon}</span>
          <div>
            <div className="text-[16px] font-bold text-msp-blue transition-colors group-hover:text-msp-blue-strong">
              {title}
            </div>
            <p className="mt-3 text-[13px] leading-[1.55] text-msp-ink">{description}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
}
