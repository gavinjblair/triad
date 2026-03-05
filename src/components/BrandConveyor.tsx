import Image from "next/image";
import { cn } from "@/lib/cn";

const brandLogos = [
  { src: "/images/brands/acronis.svg", name: "Acronis" },
  { src: "/images/brands/adobe.svg", name: "Adobe" },
  { src: "/images/brands/apple.svg", name: "Apple" },
  { src: "/images/brands/canon.svg", name: "Canon" },
  { src: "/images/brands/cisco.svg", name: "Cisco" },
  { src: "/images/brands/dell.svg", name: "Dell" },
  { src: "/images/brands/hp.svg", name: "HP" },
  { src: "/images/brands/konica-minolta.svg", name: "Konica Minolta" },
  { src: "/images/brands/lenovo.svg", name: "Lenovo" },
  { src: "/images/brands/microsoft.svg", name: "Microsoft" },
  { src: "/images/brands/veeam.svg", name: "Veeam" },
] as const;

const loopedLogos = [...brandLogos, ...brandLogos];

type BrandConveyorProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export function BrandConveyor({ title, subtitle, className }: BrandConveyorProps) {
  return (
    <div className={cn("msp-brand-conveyor text-center", className)}>
      {title ? <h2 className="text-[42px] font-bold tracking-[-0.02em] text-msp-ink">{title}</h2> : null}

      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="msp-brand-track flex w-max items-center gap-2 sm:gap-3">
          {loopedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-12 min-w-[120px] shrink-0 items-center justify-center rounded-[8px] border border-gray-100 bg-white px-4 shadow-[0_1px_4px_rgba(16,24,39,0.04)] sm:h-[56px] sm:min-w-[140px] sm:px-5"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={132}
                height={32}
                className="h-6 w-auto object-contain sm:h-7"
              />
            </div>
          ))}
        </div>
      </div>

      {subtitle ? <p className="mt-3 text-center text-[13px] text-msp-muted">{subtitle}</p> : null}
    </div>
  );
}
