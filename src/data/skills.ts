export type Skill = { name: string; level: number; category: "Data Science" | "Visualization" | "Tools" };

export const skills: Skill[] = [
  { name: "Python", level: 85, category: "Data Science" },
  { name: "SQL", level: 80, category: "Data Science" },
  { name: "Machine Learning", level: 70, category: "Data Science" },
  { name: "EDA", level: 82, category: "Data Science" },
  { name: "Statistical Analysis", level: 75, category: "Data Science" },
  { name: "Data Cleaning", level: 88, category: "Data Science" },
  { name: "Model Evaluation", level: 72, category: "Data Science" },
  { name: "Data Quality Review", level: 80, category: "Data Science" },
  { name: "Tableau", level: 78, category: "Visualization" },
  { name: "Power BI", level: 70, category: "Visualization" },
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "REST APIs", level: 65, category: "Tools" },
];

export const skillCategories = ["All", "Data Science", "Visualization", "Tools"] as const;
