"use client";
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
            className="flex dark:text-white text-gray-600 gap-3 font-medium"
          >
            <Link target="_blank" href={"https://x.com/dakshydv_"}>
              <IconBrandX strokeWidth={1} />
            </Link>
            <Link target="_blank" href={"https://github.com/dakshydv"}>
              <IconBrandGithub strokeWidth={1} />
            </Link>
            <Link target="_blank" href={"mailto:dakshyadav.dev@gmail.com"}>
              <Mail strokeWidth={1} />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/daksh-dev/"}
            >
              <Linkedin strokeWidth={1} />
            </Link>
          </motion.div>
        </div>
        <SubHeading>
          I build web applications that actually work well - from the pretty
          interface all the way down to the database. My playground includes
          stuff like React with TypeScript, Next.js for those slick fast-loading
          pages, and Node.js to make the backend magic happen. Need real-time
          features? I&apos;ve got WebSockets in my toolbox. For data, I juggle
          between MongoDB&apos;s flexibility and PostgreSQL&apos;s reliability,
          with Redis keeping everything speedy. And yeah, I make it all look
          decent with TailwindCSS too.
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} bottomBorder={true} />
        <Experience />
        <ContactLanding />
      </Container>
    </div>
  );
}
