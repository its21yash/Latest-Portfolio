import React from "react";
import SkillsGroup from "./SkillsGroup";

const backendSkills = [
  { name: "REST APIs", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Prisma", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Supabase", level: "Intermediate" },
  { name: "Firebase", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: ".NET & C#", level: "Basic" },
  { name: "Git & GitHub", level: "Advanced" },
  { name: "Vercel & CI/CD", level: "Intermediate" },
];

const Backend = () => {
  return <SkillsGroup title="Backend & Tooling" skills={backendSkills} />;
};

export default Backend;
