import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { slugifyHeading, type GuideHeading } from "@/lib/mdxHeadings";

type NoteProps = ComponentPropsWithoutRef<"aside">;

type KeyTakeawayProps = ComponentPropsWithoutRef<"aside"> & {
  title?: string;
};

function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

function getNodeText(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map((child) => getNodeText(child)).join("");
  }

  if (typeof node === "object" && "props" in node) {
    const maybeChildren = (node as { props?: { children?: ReactNode } }).props?.children;
    return getNodeText(maybeChildren);
  }

  return "";
}

function MdxLink({ href = "#", className, children, ...props }: ComponentPropsWithoutRef<"a">) {
  const sharedClassName = cn(
    "font-semibold text-msp-blue underline decoration-msp-blue/35 underline-offset-4 transition-colors hover:text-msp-blue-strong hover:decoration-msp-blue",
    className,
  );

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={sharedClassName} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={sharedClassName} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>
  );
}

export function Note({ className, children, ...props }: NoteProps) {
  return (
    <aside
      className={cn(
        "my-8 rounded-[12px] border border-msp-border-strong bg-[#f8fbff] px-5 py-4 shadow-[0_1px_8px_rgba(16,24,39,0.04)]",
        className,
      )}
      {...props}
    >
      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-msp-ink/70">Note</p>
      <div className="mt-2 text-[15px] leading-relaxed text-msp-muted">{children}</div>
    </aside>
  );
}

export function KeyTakeaway({ title = "Key takeaway", className, children, ...props }: KeyTakeawayProps) {
  return (
    <aside
      className={cn(
        "my-8 rounded-[12px] border border-msp-border-strong bg-white px-5 py-5 shadow-msp-card",
        className,
      )}
      {...props}
    >
      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-msp-blue">{title}</p>
      <p className="mt-2 text-[16px] leading-relaxed text-msp-ink">{children}</p>
    </aside>
  );
}

function normalizeHeadingText(value: string) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function createHeadingKey(level: 2 | 3, text: string) {
  return `${level}:${normalizeHeadingText(text)}`;
}

function InlineCode({ className, ...props }: ComponentPropsWithoutRef<"code">) {
  const hasLanguageClass = Boolean(className?.includes("language-"));
  if (hasLanguageClass) {
    return <code className={cn("font-mono text-[13px]", className)} {...props} />;
  }

  return (
    <code
      className={cn(
        "rounded-[4px] border border-msp-border-strong bg-msp-surface-alt px-1.5 py-0.5 font-mono text-[13px] text-msp-ink",
        className,
      )}
      {...props}
    />
  );
}

function CodeBlock({ className, ...props }: ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      className={cn(
        "my-8 overflow-x-auto rounded-[12px] border border-msp-border-strong bg-[#f7f9fc] px-4 py-4 font-mono text-[13px] leading-relaxed text-msp-ink shadow-msp-card",
        className,
      )}
      {...props}
    />
  );
}

function MdxTable({ className, ...props }: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="my-8 overflow-x-auto rounded-[12px] border border-msp-border-strong bg-white shadow-[0_1px_8px_rgba(16,24,39,0.04)]">
      <table className={cn("min-w-full border-collapse text-left text-[14px] text-msp-muted", className)} {...props} />
    </div>
  );
}

export function createGuideMdxComponents(headings: GuideHeading[]) {
  const headingQueues = new Map<string, string[]>();

  headings.forEach((heading) => {
    const key = createHeadingKey(heading.level, heading.text);
    const existing = headingQueues.get(key) ?? [];
    headingQueues.set(key, [...existing, heading.id]);
  });

  const resolveHeadingId = (level: 2 | 3, headingText: string, explicitId?: string) => {
    if (explicitId) {
      return explicitId;
    }

    const key = createHeadingKey(level, headingText);
    const queue = headingQueues.get(key);
    if (queue?.length) {
      const nextId = queue.shift();
      headingQueues.set(key, queue);
      return nextId;
    }

    return slugifyHeading(headingText);
  };

  return {
    h2: ({ id, children, ...props }: ComponentPropsWithoutRef<"h2">) => {
      const headingText = getNodeText(children).trim();
      const headingId = resolveHeadingId(2, headingText, id);

      return (
        <h2
          id={headingId}
          className="mt-20 scroll-mt-24 text-[32px] font-bold leading-tight tracking-[-0.02em] text-msp-ink first:mt-12 md:text-[34px]"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ id, children, ...props }: ComponentPropsWithoutRef<"h3">) => {
      const headingText = getNodeText(children).trim();
      const headingId = resolveHeadingId(3, headingText, id);

      return (
        <h3
          id={headingId}
          className="mt-8 scroll-mt-24 text-[24px] font-semibold leading-tight tracking-[-0.02em] text-msp-ink md:text-[26px]"
          {...props}
        >
          {children}
        </h3>
      );
    },
    h4: (props: ComponentPropsWithoutRef<"h4">) => (
      <h4 className="mt-7 text-[20px] font-semibold leading-tight text-msp-ink" {...props} />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
      <p className="text-[17px] leading-[1.85] text-msp-muted/95" {...props} />
    ),
    ul: (props: ComponentPropsWithoutRef<"ul">) => (
      <ul
        className="my-7 grid list-disc gap-3.5 pl-6 text-[16px] leading-relaxed text-msp-muted/95 marker:text-msp-blue/85"
        {...props}
      />
    ),
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className="my-7 grid list-decimal gap-3.5 pl-6 text-[16px] leading-relaxed text-msp-muted/95 marker:font-semibold marker:text-msp-ink"
        {...props}
      />
    ),
    li: (props: ComponentPropsWithoutRef<"li">) => <li className="pl-1.5" {...props} />,
    a: MdxLink,
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className="my-8 border-l-2 border-msp-blue/35 bg-[#f8fbff] px-5 py-4 text-[16px] italic leading-relaxed text-msp-muted/95"
        {...props}
      />
    ),
    strong: (props: ComponentPropsWithoutRef<"strong">) => (
      <strong className="font-semibold text-msp-ink" {...props} />
    ),
    hr: (props: ComponentPropsWithoutRef<"hr">) => (
      <hr className="my-10 border-0 border-t border-msp-border-strong" {...props} />
    ),
    table: MdxTable,
    thead: (props: ComponentPropsWithoutRef<"thead">) => <thead className="bg-[#f7f9fc] text-msp-ink" {...props} />,
    tbody: (props: ComponentPropsWithoutRef<"tbody">) => <tbody {...props} />,
    tr: (props: ComponentPropsWithoutRef<"tr">) => <tr className="border-t border-msp-border" {...props} />,
    th: (props: ComponentPropsWithoutRef<"th">) => (
      <th className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-msp-subtle" {...props} />
    ),
    td: (props: ComponentPropsWithoutRef<"td">) => <td className="px-4 py-3 align-top leading-relaxed" {...props} />,
    pre: CodeBlock,
    code: InlineCode,
    Note,
    KeyTakeaway,
  } as const;
}
