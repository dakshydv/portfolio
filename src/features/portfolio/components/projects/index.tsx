import { PROJECTS } from "../../data/projects";
import { ExpandableProjectList } from "./expandable-list";
import { ProjectItem2 } from "./projectItem";

export function Projects() {
  return (
    <ExpandableProjectList>
      {PROJECTS.map((project, index) => (
        <ProjectItem2 key={index} project={project} />
      ))}
    </ExpandableProjectList>
  );
}
