import {
  Activity,
  ChartGantt,
  Compass,
  FileText,
  LayoutGrid,
  LifeBuoy,
  Network,
  RotateCw,
  Server,
  Settings,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceFrameworkIconKey, ServiceFrameworkItem } from "@/content/services";

type Props = {
  items: readonly ServiceFrameworkItem[];
  label?: string;
};

const frameworkIconMap: Record<ServiceFrameworkIconKey, LucideIcon> = {
  activity: Activity,
  "chart-gantt": ChartGantt,
  compass: Compass,
  "file-text": FileText,
  "layout-grid": LayoutGrid,
  "life-buoy": LifeBuoy,
  network: Network,
  "rotate-cw": RotateCw,
  server: Server,
  settings: Settings,
  shield: Shield,
};

export function ServiceFrameworkStrip({
  items,
  label = "HOW THIS SERVICE IS DELIVERED",
}: Props) {
  return (
    <div className="border-t border-[#e6edf3] pt-5">
      <p className="text-center text-lg font-semibold tracking-[0.1em] text-msp-subtle/90 md:text-xl">{label}</p>
      <ul className="mt-5 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {items.map((item) => {
          const IconSymbol = frameworkIconMap[item.icon];

          return (
            <li key={item.label} className="flex min-h-[150px] items-start gap-4 rounded-[10px] bg-white/65 p-6 md:p-8">
              <IconSymbol aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-msp-subtle/85 md:h-7 md:w-7" strokeWidth={1.8} />
              <div>
                <p className="text-base font-semibold text-msp-ink/95 md:text-lg">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-msp-muted">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
