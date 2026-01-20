import { EXPERIENCES } from "../../data/experiences";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  return (
    <div className="ml-2 space-y-0 border-l border-border/50 pl-4">
      {EXPERIENCES.map((experience) => (
        <div
          key={experience.id}
          className="border-b border-border/50 py-6 first:pt-0 last:border-0"
        >
          <ExperienceItem experience={experience} />
        </div>
      ))}
    </div>
  );
}
