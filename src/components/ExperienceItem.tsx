"use client"
import { ExperienceTypes } from "@/lib/utils";
import { motion } from "motion/react"

export const ExperienceItem = ({
  company,
  timeline,
  role,
  desc,
}: ExperienceTypes) => {
  return (
    <motion.div 
    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    className="w-full flex-col px-4 mt-4">
      <div className="flex justify-between">
        <h3 className="font-semibold tracking-tight mt-1 text-lg text-gray-900 dark:text-gray-100">
          {company}
        </h3>
        <h3 className="font-medium tracking-tight mt-1 text-sm text-gray-600 dark:text-gray-400">
          {timeline}
        </h3>
      </div>
      <h3 className="font-medium text-neutral-800 dark:text-neutral-200 mt-1 tracking-tight text-md">
        {role}
      </h3>
     {desc && Array.isArray(desc) && (
        <ul className="list-disc text-gray-900 dark:text-gray-400 list-inside mt-2 space-y-1">
          {desc.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )} 
    </motion.div>
  );
};
