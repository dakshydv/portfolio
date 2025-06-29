"use client";
import React from "react";
import { motion } from "motion/react";

export const SubHeading = ({
  as: Tag = "h1",
  children,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2,
      }}
      viewport={{ once: true }}
    >
      <Tag className="text-gray-600 dark:text-gray-400 text-sm md:text-base pt-4 px-4 max-w-xl">
        {children}
      </Tag>
    </motion.div>
  );
};
