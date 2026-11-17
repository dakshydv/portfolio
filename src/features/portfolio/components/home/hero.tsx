import { ArrowUpRightIcon } from "lucide-react";

import { Markdown } from "@/components/markdown";
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { USER } from "@/features/portfolio/data/user";
import { cn } from "@/lib/utils";

import { brandIconFor } from "./brand-icons";
import { CopyEmailButton } from "./email-actions";
// import { GitHubActivity } from "./github-activity";
import { boxClass, Corners } from "./section";

const SHORT_LABELS: Record<string, string> = {
  "X (Formerly Twitter)": "X",
};

const pill =
  "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 font-mono text-xs transition-colors boxy:rounded-sm";

export function Hero() {
  const [current] = USER.jobs;
  const resume = SOCIAL_LINKS.find((link) => link.title === "Resume");
  const profiles = SOCIAL_LINKS.filter((link) => link !== resume);

  return (
    <header
      className={cn(
        "relative pt-14 pb-12 sm:pt-20",
        boxClass,
        "boxy:mt-8 boxy:sm:pt-0"
      )}
    >
      <Corners />

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-[-50vw] top-0 -z-1 h-80",
          "bg-[radial-gradient(var(--color-edge)_1px,transparent_0)] bg-size-[14px_14px]",
          "mask-[radial-gradient(ellipse_50%_100%_at_50%_0%,black,transparent)]",
          "boxy:hidden"
        )}
      />

      <div
        style={{ animationDelay: "0ms" }}
        className="mb-8 flex items-center justify-between gap-4 motion-safe:animate-rise boxy:mb-0 boxy:border-b boxy:border-edge boxy:px-5 boxy:py-3"
      >
        {current && (
          <a
            href={current.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-edge bg-background py-1 pr-3 pl-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground boxy:rounded-sm boxy:border-0 boxy:p-0"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-40" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {current.title} {current.company}
            <ArrowUpRightIcon className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
        <span className="hidden font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase boxy:inline">
          00 / profile
        </span>
      </div>

      <div
        style={{ animationDelay: "80ms" }}
        className="flex items-end gap-5 motion-safe:animate-rise boxy:items-stretch boxy:gap-0"
      >
        <div className="shrink-0 boxy:border-r boxy:border-edge boxy:bg-muted/20 boxy:p-2">
          <img
            src="/images/profile.jpeg"
            alt={`${USER.displayName}'s portrait`}
            fetchPriority="high"
            className={cn(
              "size-20 -rotate-2 rounded-2xl object-cover ring-1 ring-edge ring-offset-4 ring-offset-background grayscale transition duration-500 select-none hover:rotate-0 hover:grayscale-0 sm:size-24",
              "boxy:size-28 boxy:rotate-0 boxy:rounded-sm boxy:ring-0 boxy:ring-offset-0 boxy:sm:size-36"
            )}
          />
        </div>

        <div className="min-w-0 pb-1 boxy:flex boxy:flex-1 boxy:flex-col boxy:justify-end boxy:pb-0">
          <div aria-hidden className="hidden flex-1 boxy:block" />
          <h1 className="font-serif text-5xl leading-[0.9] tracking-tight sm:text-6xl boxy:border-t boxy:border-edge boxy:px-5 boxy:py-3 boxy:font-sans boxy:text-4xl boxy:leading-none boxy:font-medium boxy:tracking-tighter boxy:sm:text-5xl">
            {USER.firstName}{" "}
            <span className="text-muted-foreground italic boxy:text-foreground boxy:not-italic">
              {USER.lastName}
            </span>
          </h1>
          <p className="mt-2 font-mono text-xs text-muted-foreground sm:text-sm boxy:mt-0 boxy:border-t boxy:border-edge boxy:px-5 boxy:py-2.5">
            {USER.jobTitle}
          </p>
        </div>
      </div>

      <div
        style={{ animationDelay: "160ms" }}
        className={cn(
          "mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-pretty text-muted-foreground motion-safe:animate-rise",
          "[&_strong]:font-medium [&_strong]:text-foreground",
          "[&_a]:underline [&_a]:decoration-muted-foreground/40 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:decoration-foreground",
          "[&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:top-[0.7em] [&_li]:before:left-1 [&_li]:before:size-1.5 [&_li]:before:rounded-full [&_li]:before:bg-muted-foreground/40 boxy:[&_li]:before:rounded-none [&_li+li]:mt-2",
          "boxy:mt-0 boxy:max-w-none boxy:border-t boxy:border-edge boxy:p-5 boxy:text-base"
        )}
      >
        <Markdown>{USER.intro}</Markdown>
      </div>

      <div
        style={{ animationDelay: "240ms" }}
        className="mt-8 flex flex-wrap gap-2 motion-safe:animate-rise boxy:mt-0 boxy:border-t boxy:border-edge boxy:px-5 boxy:py-4"
      >
        {resume && (
          <a
            href={resume.href}
            target="_blank"
            rel="noopener"
            className={cn(
              pill,
              "border-foreground bg-foreground text-background hover:opacity-85"
            )}
          >
            resume
            <ArrowUpRightIcon className="size-3" aria-hidden />
          </a>
        )}
        {profiles.map((link) => {
          const Icon = brandIconFor(link.href);
          const platform = SHORT_LABELS[link.title] ?? link.title;

          return (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${platform}: ${link.description}`}
              className={cn(
                pill,
                "border-edge text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              )}
            >
              {Icon && <Icon className="size-3" />}
              {link.description ?? platform.toLowerCase()}
            </a>
          );
        })}
        <CopyEmailButton email={USER.email} />
      </div>

      {/* Live GitHub activity panel, hidden for now.
      <div
        style={{ animationDelay: "320ms" }}
        className="motion-safe:animate-rise"
      >
        <GitHubActivity />
      </div>
      */}
    </header>
  );
}
