export type GuideHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

type ExtractHeadingOptions = {
  levels?: Array<2 | 3>;
};

const MARKDOWN_HEADING_PATTERN = /^(#{2,3})\s+(.+?)\s*$/;

function stripInlineMarkdown(value: string) {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/[*_~]/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function extractGuideHeadings(
  source: string,
  { levels = [2] }: ExtractHeadingOptions = {},
): GuideHeading[] {
  const headings: GuideHeading[] = [];
  const allowedLevels = new Set(levels);
  const slugCounts = new Map<string, number>();
  const lines = source.split(/\r?\n/);
  let inCodeFence = false;

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inCodeFence = !inCodeFence;
      continue;
    }

    if (inCodeFence) {
      continue;
    }

    const match = line.match(MARKDOWN_HEADING_PATTERN);
    if (!match) {
      continue;
    }

    const level = match[1].length as 2 | 3;
    if (!allowedLevels.has(level)) {
      continue;
    }

    const text = stripInlineMarkdown(match[2]);
    if (!text) {
      continue;
    }

    const baseSlug = slugifyHeading(text);
    if (!baseSlug) {
      continue;
    }
    const nextCount = (slugCounts.get(baseSlug) ?? 0) + 1;
    slugCounts.set(baseSlug, nextCount);
    const id = nextCount === 1 ? baseSlug : `${baseSlug}-${nextCount}`;

    headings.push({
      level,
      text,
      id,
    });
  }

  return headings;
}
