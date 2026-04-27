export interface Project {
  id: string;

  title: string;

  description: string;

  highlights?: string[];

  stack: string[];

  stackLabel: string;

  liveUrl: string;

  githubUrl: string;

  thumbGradient: "p1" | "p2" | "p3";
}
