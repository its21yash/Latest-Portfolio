import React from "react";
import SkillsGroup from "./SkillsGroup";

const frontendSkills = [
  { name: "React & Next.js", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "HTML & CSS", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "ShadCN & Radix", level: "Advanced" },
  { name: "Zustand & Redux", level: "Advanced" },
  { name: "React Query", level: "Intermediate" },
  { name: "React Native", level: "Intermediate" },
  { name: "Expo", level: "Intermediate" },
];

const Frontend = () => {
  return <SkillsGroup title="Frontend & Mobile" skills={frontendSkills} />;
};

export default Frontend;
