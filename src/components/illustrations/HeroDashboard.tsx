import { DatabaseBackup, HardDriveDownload, Server, ShieldCheck, Ticket } from "lucide-react";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

function MetricCard({
  title,
  value,
  icon,
  tone,
  className,
  valueClassName,
  helper,
}: {
  title: string;
  value: string;
  icon: typeof Server;
  tone: "blue" | "green" | "purple" | "amber" | "slate";
  className?: string;
  valueClassName?: string;
  helper?: string;
}) {
  return (
    <article className={cn("rounded-xl border border-gray-100 bg-white px-3 py-3 shadow-msp-card", className)}>
      <div className="flex items-center gap-2">
        <Icon icon={icon} tone={tone} size={14} badge />
        <p className="text-[11px] font-semibold text-msp-muted">{title}</p>
      </div>
      <p className={cn("mt-2 text-[28px] font-bold tracking-[-0.02em] text-msp-ink", valueClassName)}>{value}</p>
      {helper ? <p className="text-[10px] text-msp-muted">{helper}</p> : null}
    </article>
  );
}

function SystemHealthCard({ className }: { className?: string }) {
  return (
    <article className={cn("rounded-xl border border-gray-100 bg-white px-3 py-3 shadow-msp-card", className)}>
      <p className="text-[11px] font-semibold text-msp-muted">System Health</p>
      <div className="mt-2 flex items-center gap-3">
        <svg viewBox="0 0 120 120" className="h-[72px] w-[72px]">
          <circle cx="60" cy="60" r="45" stroke="#e5edf6" strokeWidth="14" fill="none" />
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="#68b07d"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="180 290"
            transform="rotate(-90 60 60)"
          />
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="#d8a95f"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="58 290"
            transform="rotate(130 60 60)"
          />
          <circle
            cx="60"
            cy="60"
            r="45"
            stroke="#da7770"
            strokeWidth="14"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="30 290"
            transform="rotate(202 60 60)"
          />
        </svg>
        <div className="space-y-1 text-[10px] font-medium text-msp-muted">
          <p className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#68b07d]" />
            Healthy
          </p>
          <p className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#d8a95f]" />
            Warning
          </p>
          <p className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#da7770]" />
            Critical
          </p>
        </div>
      </div>
    </article>
  );
}

function PatchComplianceCard({ className }: { className?: string }) {
  return (
    <article className={cn("rounded-xl border border-gray-100 bg-white px-3 py-3 shadow-msp-card", className)}>
      <div className="flex items-center gap-2">
        <Icon icon={HardDriveDownload} tone="blue" size={14} badge />
        <p className="text-[11px] font-semibold text-msp-muted">Patch Compliance</p>
      </div>
      <div className="mt-2 flex items-end gap-2">
        <p className="text-[28px] font-bold tracking-[-0.02em] text-msp-ink">92%</p>
        <p className="pb-1 text-[10px] text-msp-muted">current cycle</p>
      </div>
      <div className="mt-2 h-2 rounded-full bg-[#e7edf6]">
        <div className="h-2 w-[92%] rounded-full bg-[#6ea6e6]" />
      </div>
    </article>
  );
}

export function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="absolute inset-0 rounded-[18px] border border-[#dce8f5] bg-white/30 shadow-[0_8px_28px_rgba(22,54,90,0.1)]" />

      <div className="relative z-10 grid gap-3 p-3 md:hidden">
        <MetricCard title="Devices Online" value="362" icon={Server} tone="blue" helper="managed endpoints" />
        <MetricCard title="Security Alerts" value="3" icon={ShieldCheck} tone="amber" helper="active warnings" />
        <MetricCard title="Backup Status" value="Healthy" icon={DatabaseBackup} tone="green" valueClassName="text-[24px] text-[#2f9a63]" />
        <MetricCard title="Open Tickets" value="18" icon={Ticket} tone="slate" helper="awaiting action" />
        <SystemHealthCard />
        <PatchComplianceCard />
      </div>

      <div className="relative hidden h-[336px] md:block">
        <MetricCard
          title="Devices Online"
          value="362"
          icon={Server}
          tone="blue"
          helper="managed endpoints"
          className="absolute left-4 top-3 w-[220px]"
        />
        <MetricCard
          title="Security Alerts"
          value="3"
          icon={ShieldCheck}
          tone="amber"
          helper="active warnings"
          className="absolute right-10 top-0 w-[188px]"
        />
        <MetricCard
          title="Backup Status"
          value="Healthy"
          icon={DatabaseBackup}
          tone="green"
          valueClassName="text-[24px] text-[#2f9a63]"
          className="absolute right-2 top-[104px] w-[192px]"
        />
        <MetricCard
          title="Open Tickets"
          value="18"
          icon={Ticket}
          tone="slate"
          helper="awaiting action"
          className="absolute left-0 top-[118px] w-[188px]"
        />
        <SystemHealthCard className="absolute bottom-1 left-[112px] w-[220px]" />
        <PatchComplianceCard className="absolute bottom-4 right-[92px] w-[242px]" />
      </div>
    </div>
  );
}
