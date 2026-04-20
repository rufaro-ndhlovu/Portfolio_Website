export interface Project {
  id: string;

  title: string;

  subtitle?: string;

  description: string;

  highlights?: string[];

  stack: string[];

  stackLabel: string; // short label for badge e.g. "React · Next.js · Firebase"

  liveUrl: string;

  githubUrl: string;

  featured: boolean;

  thumbGradient: "p1" | "p2" | "p3";
}
