export interface SkillCategory {
  title: string;

  accent: "c1" | "c2" | "c3";

  tags: { label: string; colour: "teal" | "orange" | "lavender" | "muted" }[];
}
