import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { USER } from "@/features/portfolio/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

// Sidebar path: src/features/portfolio/components/layout/sidebar.tsx
// Verified path: src/features/portfolio/components/verified-icon.tsx
// Sidebar path: src/features/portfolio/components/layout/sidebar.tsx
// Verified path: src/features/portfolio/components/verified-icon.tsx
// Relative path: ../verified-icon
import { SocialIcon } from "../social-icon";
// If Button doesn't exist, I'll check components.json or just use standard elements.
// Checking recent file list, I saw components.json so shadcn is likely used.
// But I haven't listed src/components/ui/button.tsx. I'll use simple elements to be safe or check first.
// I'll stick to standard tailwind classes for now to avoid dependency issues if I'm not sure about the UI library path.
import { VerifiedIcon } from "../verified-icon"; // Adjusted import path assuming Sidebar is in components/layout/sidebar.tsx and VerifiedIcon is in components/verified-icon.tsx. VerifiedIcon is in features/portfolio/components/verified-icon.tsx.

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "flex h-full flex-col px-6 pt-6 pb-6 lg:px-8 lg:pt-12 lg:pb-4",
        className
      )}
    >
      {/* Profile Info */}
      <div className="flex flex-row items-center gap-6 lg:flex-col lg:items-start lg:gap-4">
        <Link href="/" className="block shrink-0">
          <img
            src={USER.avatar}
            alt={USER.displayName}
            className="size-16 rounded-full border-2 border-primary/10 object-cover shadow-sm lg:size-24"
          />
        </Link>

        <div className="space-y-1">
          <h1 className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground lg:text-2xl">
            {USER.displayName}
            <VerifiedIcon
              className="size-5 text-info select-none"
              aria-label="Verified"
            />
          </h1>
          {/* <h2 className="text-base font-medium text-muted-foreground lg:text-lg">
            {USER.jobTitle}
          </h2> */}
          {/* Mobile: Flip sentences hidden or compact? Keeping hidden for now or standard flow. */}
          <div className="h-6 max-w-[200px] text-sm text-balance text-muted-foreground lg:hidden">
            <FlipSentences>{USER.flipSentences}</FlipSentences>
            {/* Shorter info on mobile if needed, or keeping it simpel */}
            {/* hi there */}
          </div>
        </div>
      </div>

      <div className="hidden h-12 max-w-xs text-sm text-balance text-muted-foreground lg:block">
        <FlipSentences>{USER.flipSentences}</FlipSentences>
      </div>

      {/* Navigation */}
      <nav className="mt-10 flex-1 lg:mt-28">
        <ul className="grid grid-cols-2 gap-2 lg:flex lg:flex-col lg:gap-0 lg:space-y-3">
          {["About", "Projects", "Stack", "Experience"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="group flex items-center gap-3 p-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground lg:p-0"
              >
                <span className="hidden h-px w-8 bg-border transition-all duration-300 group-hover:w-16 group-hover:bg-foreground lg:block" />
                <span className="text-xs tracking-widest uppercase">
                  {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="mt-10 flex items-center gap-4 border-t border-border/40 pt-4 lg:mt-48 lg:mt-auto lg:border-0 lg:pt-0">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label={link.title}
          >
            <SocialIcon title={link.title} className="size-5" />
          </a>
        ))}
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
