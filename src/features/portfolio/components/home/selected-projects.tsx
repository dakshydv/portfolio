import { ArrowUpRightIcon, ChevronDownIcon, GithubIcon } from "lucide-react";
import Image from "next/image";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PROJECTS } from "@/features/portfolio/data/projects";
import type { Project } from "@/features/portfolio/types/projects";
import { cn } from "@/lib/utils";

import { Section } from "./section";

/** Projects shown below the featured one before "show more". */
const VISIBLE_PROJECTS = 2;

const listClass = "boxy:grid boxy:gap-px boxy:bg-edge boxy:sm:grid-cols-2";

function toSrc(path?: string) {
  if (!path) return undefined;
  return path.startsWith("/") || path.startsWith("http") ? path : `/${path}`;
}

function primaryLink(project: Project) {
  return project.liveLink ?? project.githubLink;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function SelectedProjects() {
  const featured = PROJECTS.find((p) => p.pinned) ?? PROJECTS[0];
  const rest = PROJECTS.filter((p) => p !== featured);
  const visible = rest.slice(0, VISIBLE_PROJECTS);
  const hidden = rest.slice(VISIBLE_PROJECTS);

  return (
    <Section
      id="projects"
      index="01"
      label="projects"
      title="Things I've shipped"
      aside={
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {pad(PROJECTS.length)} total
        </span>
      }
    >
      <FeaturedProject project={featured} />

      <Collapsible>
        <ol className={cn(listClass, "mt-10 boxy:mt-0")}>
          {visible.map((project, i) => (
            <ProjectRow key={project.id} project={project} number={i + 2} />
          ))}
        </ol>

        {hidden.length > 0 && (
          <>
            <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
              <ol className={cn(listClass, "boxy:border-t boxy:border-edge")}>
                {hidden.map((project, i) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    number={i + 2 + visible.length}
                  />
                ))}
              </ol>
            </CollapsibleContent>

            <CollapsibleTrigger
              className={cn(
                "group/more flex w-full items-center justify-center gap-2 border-t border-dashed border-edge pt-5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground",
                "boxy:border-solid boxy:py-3.5 boxy:hover:bg-muted/30"
              )}
            >
              <span className="group-data-[state=open]/more:hidden">
                show {hidden.length} more
              </span>
              <span className="hidden group-data-[state=open]/more:inline">
                show less
              </span>
              <ChevronDownIcon
                className="size-3.5 transition-transform duration-300 group-data-[state=open]/more:rotate-180"
                aria-hidden
              />
            </CollapsibleTrigger>
          </>
        )}
      </Collapsible>
    </Section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const href = primaryLink(project);
  const src = toSrc(project.image);

  return (
    <article className="group relative boxy:border-b boxy:border-edge">
      {src && (
        <div className="relative overflow-hidden rounded-xl bg-muted ring-1 ring-edge boxy:rounded-none boxy:border-b boxy:border-edge boxy:bg-background boxy:p-6 boxy:pt-10 boxy:ring-0 boxy:sm:px-10">
          <Image
            src={src}
            alt={`${project.title} screenshot`}
            width={1200}
            height={630}
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015] boxy:rounded-sm boxy:shadow-[0_24px_48px_-24px_rgb(0_0_0/0.5)] boxy:ring-1 boxy:ring-edge boxy:group-hover:-translate-y-1 boxy:group-hover:scale-100"
            unoptimized
          />
          <span className="absolute top-3 left-3 rounded-full bg-background/85 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase backdrop-blur boxy:top-3 boxy:left-4 boxy:rounded-none boxy:bg-transparent boxy:p-0 boxy:text-muted-foreground boxy:backdrop-blur-none">
            01 · featured
          </span>
        </div>
      )}

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 boxy:mt-0 boxy:p-5">
        <div className="min-w-0">
          <h3 className="text-xl font-medium tracking-tight">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0" aria-hidden />
              {project.title}
            </a>
          </h3>
          {project.description && (
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-pretty text-muted-foreground">
              {project.description}
            </p>
          )}
          <Skills skills={project.skills} className="mt-3" />
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function ProjectRow({ project, number }: { project: Project; number: number }) {
  const href = primaryLink(project);
  const src = toSrc(project.image);

  return (
    <li
      className={cn(
        "group relative grid grid-cols-[2rem_1fr] gap-x-3 border-t border-dashed border-edge py-5 sm:grid-cols-[2rem_1fr_8.5rem] sm:gap-x-5",
        "boxy:flex boxy:flex-col boxy:gap-0 boxy:border-t-0 boxy:bg-background boxy:p-0"
      )}
    >
      <span className="pt-0.5 font-mono text-xs text-muted-foreground tabular-nums boxy:hidden">
        {pad(number)}
      </span>

      <div className="min-w-0 boxy:p-5 boxy:pt-4">
        <div className="flex items-center gap-3">
          <h3 className="font-medium">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0" aria-hidden />
              {project.title}
            </a>
          </h3>
          <ArrowUpRightIcon
            className="size-3.5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            aria-hidden
          />
        </div>
        {project.description && (
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-pretty text-muted-foreground">
            {project.description}
          </p>
        )}
        <div className="mt-2.5 flex items-center justify-between gap-4">
          <Skills skills={project.skills} />
          <ProjectLinks project={project} compact />
        </div>
      </div>

      {src && (
        <div className="hidden self-center overflow-hidden rounded-md bg-muted ring-1 ring-edge sm:block boxy:relative boxy:order-first boxy:block boxy:w-full boxy:rounded-none boxy:border-b boxy:border-edge boxy:bg-background boxy:px-6 boxy:pt-9 boxy:pb-6 boxy:ring-0">
          <span className="absolute top-3 left-4 hidden font-mono text-[10px] tracking-[0.18em] text-muted-foreground tabular-nums boxy:block">
            {pad(number)}
          </span>
          <Image
            src={src}
            alt=""
            width={240}
            height={126}
            className="aspect-video w-full object-cover object-top transition duration-500 boxy:rounded-sm boxy:shadow-[0_16px_32px_-20px_rgb(0_0_0/0.5)] boxy:ring-1 boxy:ring-edge boxy:group-hover:-translate-y-1"
            unoptimized
          />
        </div>
      )}
    </li>
  );
}

function Skills({
  skills,
  className,
}: {
  skills: string[];
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] leading-relaxed text-muted-foreground/80",
        className
      )}
    >
      {skills.join(" · ")}
    </p>
  );
}

function ProjectLinks({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const linkClass =
    "relative z-1 inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground";

  return (
    <div className="flex shrink-0 items-center gap-3">
      {project.liveLink && !compact && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          live
          <ArrowUpRightIcon className="size-3" aria-hidden />
        </a>
      )}
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          aria-label={`${project.title} source on GitHub`}
        >
          <GithubIcon className="size-3.5" aria-hidden />
          {!compact && "source"}
        </a>
      )}
    </div>
  );
}
