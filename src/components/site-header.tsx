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
          className="flex size-7 items-center justify-center rounded-md bg-foreground font-mono text-[11px] font-semibold tracking-tight text-background transition-transform hover:-rotate-6 boxy:rounded-sm"
        >
          dy
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1">
          <SectionNav />
          <span className="mx-1 h-4 w-px bg-border" aria-hidden />
          <ThemeToggle />
        </nav>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 -bottom-px h-px scroll-progress bg-foreground/60"
      />
    </SiteHeaderWrapper>
  );
}
