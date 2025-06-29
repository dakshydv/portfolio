import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-4xl relative bg-white md:pt-0 dark:bg-[#171717]",
        className
      )}
    >
      {children}
    </div>
  );
};
