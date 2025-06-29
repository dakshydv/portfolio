import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects/Projects";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { projects } from "@/lib/utils";

export default function ProjectsPage() {
  return (
    <div
      className={`min-h-screen flex items-start bg-white dark:bg-[#171717] justify-start`}
    >
      <Container className="min-h-screen pt-15 md:pt-20 md:pb-4">
        <Heading>Projects</Heading>
        <SubHeading>
          I'm a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference. When I'm not coding, you can find me exploring new
          technologies, contributing to open-source projects, or sharing my
          knowledge through technical writing.
        </SubHeading>
        <Projects projects={projects} bottomBorder={false} />
      </Container>
    </div>
  );
}
