import Link from "next/link";
import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <Container className="bg-white dark:bg-[#171717] flex justify-between items-center py-4 md:pt-4 px-6 min-h-[30px] border-t border-t-neutral-300 dark:border-t-neutral-700 border-x border-neutral-300 dark:border-x dark:border-neutral-700 ">
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        Built with love by Daksh Yadav
      </p>
      <div className="flex justify-center items-center gap-4">
        <Link href={"https://x.com/dakshydv_"} target="_blank">
          <IconBrandX className="size-4 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300" />
        </Link>
        <Link href={"https://www.linkedin.com/in/daksh-dev/"} target="_blank">
          <IconBrandLinkedin className="size-4 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300" />
        </Link>
        <Link href={"https://github.com/dakshydv"} target="_blank">
          <IconBrandGithub className="size-4 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300" />
        </Link>
      </div>
    </Container>
  );
};
