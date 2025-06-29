import { Experiences } from "@/lib/utils";
import { ExperienceItem } from "./ExperienceItem";
import { Heading } from "./Heading";

export const Experience = () => {
  return (
    <div className="my-6 pb-8 border-b-2 border-neutral-100 dark:border-neutral-800">
      <Heading>Experience</Heading>
      <div className="flex-col gap-3">
        {Experiences.map((experience, idx) => (
          <ExperienceItem
            key={idx}
            company={experience.company}
            timeline={experience.timeline}
            role={experience.role}
            desc={experience.desc}
          />
        ))}
      </div>
    </div>
  );
};
