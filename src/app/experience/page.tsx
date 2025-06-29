import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { Experiences, projects } from "@/lib/utils";
import { ExperienceItem } from "@/components/ExperienceItem";

export default function ExperiencePage() {
  return (
    <div
      className={`min-h-screen flex items-start bg-white dark:bg-[#171717] justify-start`}
    >
      <Container className="min-h-screen pt-15 md:pt-20 md:pb-4">
        <Heading>Experience</Heading>
        <SubHeading>
          I have worked in several highly reputed firms and here is their details
        </SubHeading>
        {Experiences.map((experience, idx) => (
            <ExperienceItem
            company={experience.company}
            timeline={experience.timeline}
            role={experience.role}
            desc={experience.desc}
            key={idx} />
        ))}
      </Container>
    </div>
  );
}
