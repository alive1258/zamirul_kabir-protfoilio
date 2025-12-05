import { BlogStage } from "../../../../utils/blogs";

// Add these to your types/blog.ts for more flexibility
export interface CodeExample {
  language: string;
  code: string;
  description: string;
}

export interface ComparisonTable {
  headers: string[];
  rows: Array<{
    cells: string[];
  }>;
}

export interface ProsCons {
  pros: string[];
  cons: string[];
}

// Update BlogSection type
export type BlogSectionType =
  | "lead"
  | "paragraph"
  | "stage"
  | "author"
  | "hashtags"
  | "code"
  | "table"
  | "proscons"
  | "header"
  | "quote";

export interface BlogSection {
  type: BlogSectionType;
  content?: string;
  data?: BlogStage | CodeExample | ComparisonTable | ProsCons;
  level?: number; // For headers (h1, h2, h3)
}
