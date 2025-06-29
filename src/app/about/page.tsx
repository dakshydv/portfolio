import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

export default function About() {
  return (
    <div className={`min-h-screen flex items-start justify-start`}>
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>About Me</Heading>
        <p className="text-secondary text-sm md:text-base pt-4 max-w-2xl">
          I'm a passionate software engineer dedicated to crafting elegant
          solutions for complex problems. With expertise in full-stack
          development, I enjoy building user-centric applications that make a
          difference. When I'm not coding, you can find me exploring new
          technologies, contributing to open-source projects, or sharing my
          knowledge through technical writing.
        </p>
      </Container>
    </div>
  );
}
