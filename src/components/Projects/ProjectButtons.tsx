import Link from "next/link";
import React from "react";

export const ProjectButtons = ({
  icon,
  placeholder,
  link,
}: {
  icon: React.ReactElement;
  placeholder: string;
  link: string;
}) => {
  return (
    <Link target="_blank" href={link}>
      <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 flex gap-2 px-2 py-1 text-[10px] text-gray-700 dark:text-gray-300">
        {icon}
        {placeholder}
      </div>
    </Link>
  );
};
