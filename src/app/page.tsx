"use client"
import { Container } from "@/components/Container";
import { Projects } from "@/components/Projects/Projects";
import { Heading } from "@/components/Heading";
import { SubHeading } from "@/components/SubHeading";
import { projects } from "@/lib/utils";
import { Experience } from "@/components/Experience";
import { ContactLanding } from "@/components/ContactLanding";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`min-h-screen flex items-start justify-start bg-white dark:bg-[#171717]`}
    >
      <Container className="min-h-screen md:pt-20 pt-15 relative">
        <div className="flex items-center gap-5">
          <Heading>Daksh Yadav</Heading>
          <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex text-white gap-3 font-medium">
            <Link href={"https://x.com/dakshydv_"}>
              <IconBrandX strokeWidth={1} />
            </Link>
            <Link href={"https://github.com/dakshydv"}>
              <IconBrandGithub strokeWidth={1} />
            </Link>
            <Link href={"mailto:dakshyadav.dev@gmail.com"}>
              <Mail strokeWidth={1} />
            </Link>
            <Link href={"https://www.linkedin.com/in/daksh-dev/"}>
              <Linkedin strokeWidth={1} />
            </Link>
          </motion.div>
        </div>
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
