"use client";

type SkillsProps = { title: string; skills: string[]; score: number };
type ProjectsProps = { name: string; detail: string; tech: string[] };

const SkillCard = ({ title, skills, score }: SkillsProps) => {
  return <div>Skillcard</div>;
};

const ProjectCard = ({ name, detail, tech }: ProjectsProps) => {
  return <div>Skillcard</div>;
};

export { SkillCard, ProjectCard };
