import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects/Projects";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { projects } from "@/lib/utils";
import { Experience } from "@/components/Experience";
import { ContactLanding } from "@/components/ContactLanding";

export default function Home() {
  return (
    <div
      className={`min-h-screen flex items-start justify-start bg-white dark:bg-[#171717]`}
    >
      <Container className="min-h-screen md:pt-20 pt-15 relative">
        <Heading>Daksh Yadav</Heading>
        <SubHeading>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as a software engineer
          at Google.
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} bottomBorder={true} />
        <Experience />
        <ContactLanding />
      </Container>
    </div>
  );
}
