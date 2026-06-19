export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Shipped" },
  { value: 20, suffix: "+", label: "Technologies" },
  { value: 1000, suffix: "+", label: "Git Commits" },
];
