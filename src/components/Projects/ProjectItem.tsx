import Image from "next/image";
import { IconWorld, IconBrandGithub } from "@tabler/icons-react";
import { ProjectButtons } from "./ProjectButtons";
import { ProjectTypes } from "@/lib/utils";
import { ProjectTags } from "./ProjectTags";
import { motion } from "motion/react";

export const ProjectItem = ({
  title,
  timeline,
  skills,
  src,
  webUrl,
  gitUrl,
  desc,
}: ProjectTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.1,
      }}
      className="rounded-lg bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100 flex flex-col overflow-hidden border border-neutral-300 dark:border-neutral-800 hover:shadow-lg transition-all duration-300 ease-out h-full"
    >
      {/* image */}
      <Image alt="project1" src={src} width={1000} height={1000} />
      <div className="flex flex-col px-2">
        <div className="space-y-1">
          <h3 className="font-semibold tracking-tight mt-1 text-base">
            {title}
          </h3>
          <time className="font-sans text-xs text-gray-600 dark:text-gray-400">
            {timeline}
          </time>
          <div className="hidden font-sans text-xs underline print:visible"></div>
          <div className="prose max-w-full text-pretty font-sans text-xs text-gray-600 dark:text-gray-400 dark:prose-invert">
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div className="text-pretty font-sans text-sm text-gray-600 dark:text-gray-400 mt-auto flex flex-col px-2">
        <div className="mt-2 flex flex-wrap gap-1">
          {/* skills */}
          {skills.map((skill, idx) => (
            <ProjectTags skill={skill} key={idx} />
          ))}
        </div>
      </div>
      <div className="flex items-center pt-2 px-2 pb-2">
        <div className="flex flex-row flex-wrap items-start gap-1">
          {webUrl && (
            <ProjectButtons
              icon={<IconWorld size={13} />}
              link={webUrl}
              placeholder="Website"
            />
          )}
          {gitUrl && (
            <ProjectButtons
              icon={<IconBrandGithub size={13} />}
              link={gitUrl}
              placeholder="Source"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};
