import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const CONTENT_DIRECTORIES = [
  "strategic-guides-mdx",
  "operational-guides-mdx",
  "security-guides-mdx",
] as const;

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

export type GuideFrontmatter = {
  title: string;
  excerpt: string;
  category: "Strategic" | "Operational" | "Security";
  slug: string;
  date: string;
  readingTime: string;
};

export type Guide = GuideFrontmatter & {
  body: string;
};

const REQUIRED_FIELDS: Array<keyof GuideFrontmatter> = [
  "title",
  "excerpt",
  "category",
  "slug",
  "date",
  "readingTime",
];

function parseFrontmatter(source: string): { frontmatter: GuideFrontmatter; body: string } {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    throw new Error("Invalid guide frontmatter: missing delimiters");
  }

  const rawFrontmatter = match[1];
  const body = source.slice(match[0].length).trim();

  const parsed: Record<string, string> = {};
  for (const line of rawFrontmatter.split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex < 1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^"(.*)"$/, "$1");
    parsed[key] = value;
  }

  for (const field of REQUIRED_FIELDS) {
    if (!parsed[field]) {
      throw new Error(`Invalid guide frontmatter: missing "${field}"`);
    }
  }

  return {
    frontmatter: parsed as GuideFrontmatter,
    body,
  };
}

async function readGuidesFromDirectory(directoryName: (typeof CONTENT_DIRECTORIES)[number]) {
  const directoryPath = path.join(CONTENT_ROOT, directoryName);
  const files = await readdir(directoryPath);
  const mdxFiles = files.filter((fileName) => fileName.endsWith(".mdx"));

  const guideEntries = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const filePath = path.join(directoryPath, fileName);
      const source = await readFile(filePath, "utf8");
      return parseFrontmatter(source);
    }),
  );

  return guideEntries.map(({ frontmatter, body }) => ({
    ...frontmatter,
    body,
  }));
}

export async function getAllGuides(): Promise<Guide[]> {
  const guideCollections = await Promise.all(
    CONTENT_DIRECTORIES.map((directoryName) => readGuidesFromDirectory(directoryName)),
  );

  return guideCollections.flat().sort((left, right) => left.title.localeCompare(right.title));
}

export async function getGuideBySlug(slug: string): Promise<Guide | undefined> {
  const guides = await getAllGuides();
  return guides.find((guide) => guide.slug === slug);
}
