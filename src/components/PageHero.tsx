import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

type Props = {
  title: string;
  subtitle?: string;
  tone?: "hero" | "heroSoft" | "flat";
  size?: "lg" | "md";
  className?: string;
};

export function PageHero({
  title,
  subtitle,
  tone = "heroSoft",
  size = "lg",
  className,
}: Props) {
  return (
    <section
      className={cn(
        tone === "hero" && "msp-hero",
        tone === "heroSoft" && "msp-hero-soft",
        tone === "flat" && "border-y border-msp-border bg-[#dbdde1]",
        tone === "flat" ? "py-3" : "py-16 md:py-[72px]",
        className,
      )}
    >
      <Container size="content" className="text-center">
        <h1
          className={cn(
            "font-bold tracking-[-0.02em] text-msp-ink",
            tone === "flat" && "text-[38px]",
            tone !== "flat" && size === "lg" && "text-[50px] md:text-[58px]",
            tone !== "flat" && size === "md" && "text-[48px] md:text-[54px]",
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-[900px] text-[18px] leading-8 text-msp-muted">
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
