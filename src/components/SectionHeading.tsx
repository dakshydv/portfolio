"use client";
import { motion } from "motion/react";

export const SectionHeading = ({ children }: { children: string }) => {
  return (
    <h2 className="font-normal text-sm md:text-base pb-2 pt-10 max-w-xl">
      {children.split(" ").map((word, idx) => (
        <motion.span
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(2px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={word + idx}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h2>
  );
};
