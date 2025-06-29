"use client";
import { ProjectTypes } from "@/lib/utils";
import { ProjectItem } from "./ProjectItem";
import { Heading } from "../Heading";

export const Projects = ({
  projects,
  bottomBorder,
}: {
  projects: ProjectTypes[];
  bottomBorder: boolean;
}) => {
  return (
    <div
      className={`mt-6 py-6 border-t-2 border-neutral-100 dark:border-neutral-800 ${
        bottomBorder && "border-b-2"
      }`}
    >
      <Heading>My Latest Work</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10 p-4">
        {projects.map((project, idx) => (
          <ProjectItem
            title={project.title}
            timeline={project.timeline}
            src={project.src}
            webUrl={project.webUrl}
            gitUrl={project.gitUrl}
            skills={project.skills}
            desc={project.desc}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};
