import Link from "next/link";

import { cn } from "@/lib/utils";

import { SectionNav } from "./section-nav";
import { SiteHeaderWrapper } from "./site-header-wrapper";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <SiteHeaderWrapper
      className={cn(
        "group/header sticky top-0 z-50 border-b border-transparent bg-background/80 backdrop-blur-md",
        "transition-colors duration-300 data-[affix=true]:border-edge",
        "boxy:border-edge boxy:bg-background/90 boxy:px-3"
      )}
    >
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between gap-4 px-4 boxy:h-12 boxy:max-w-3xl boxy:border-x boxy:border-edge boxy:pr-2 boxy:pl-3">
        <Link
          href="/"
          aria-label="Home"
          className="group/mark flex items-center"
        >
          <span
            aria-hidden
            className={cn(
              "relative flex size-8 items-center justify-center border border-edge font-mono text-[10px] font-medium tracking-[0.12em] text-foreground/85 transition-colors group-hover/mark:text-foreground",
              "before:absolute before:-top-px before:-left-px before:size-2 before:border-t before:border-l before:border-foreground before:transition-all before:duration-300 group-hover/mark:before:size-[calc(100%+2px)]",
              "after:absolute after:-right-px after:-bottom-px after:size-2 after:border-r after:border-b after:border-foreground after:transition-all after:duration-300 group-hover/mark:after:size-[calc(100%+2px)]"
            )}
          >
            DY
          </span>
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          <SectionNav />
          <span className="mx-1 h-4 w-px bg-border" aria-hidden />
          <ThemeToggle />
        </nav>
      </div>
    </SiteHeaderWrapper>
  );
}
