import { ArrowUpRightIcon, GithubIcon } from "lucide-react";
import Image from "next/image";

import { PROJECTS } from "@/features/portfolio/data/projects";
import type { Project } from "@/features/portfolio/types/projects";
import { cn } from "@/lib/utils";

import { Section } from "./section";

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

  return (
    <Section
      id="projects"
      index="02"
      label="projects"
      title="Things I've shipped"
      aside={
        <span className="font-mono text-xs text-muted-foreground tabular-nums">
          {pad(PROJECTS.length)} total
        </span>
      }
    >
      <FeaturedProject project={featured} />

      <ol className="mt-10 boxy:mt-0 boxy:grid boxy:gap-px boxy:bg-edge boxy:sm:grid-cols-2">
        {rest.map((project, i) => (
          <ProjectRow key={project.id} project={project} number={i + 2} />
        ))}
      </ol>
    </Section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const href = primaryLink(project);
  const src = toSrc(project.image);

  return (
    <article className="group relative boxy:border-b boxy:border-edge boxy:p-4">
      {src && (
        <div className="relative overflow-hidden rounded-xl bg-muted ring-1 ring-edge boxy:rounded-sm">
          <Image
            src={src}
            alt={`${project.title} screenshot`}
            width={1200}
            height={630}
            className="aspect-1200/630 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            unoptimized
          />
          <span className="absolute top-3 left-3 rounded-full bg-background/85 px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase backdrop-blur boxy:rounded-sm">
            01 · featured
          </span>
        </div>
      )}

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
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
        "boxy:flex boxy:flex-col boxy:gap-3 boxy:border-t-0 boxy:bg-background boxy:p-4"
      )}
    >
      <span className="pt-0.5 font-mono text-xs text-muted-foreground tabular-nums">
        {pad(number)}
      </span>

      <div className="min-w-0">
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
        <div className="hidden self-center overflow-hidden rounded-md bg-muted ring-1 ring-edge sm:block boxy:order-first boxy:block boxy:w-full boxy:rounded-sm">
          <Image
            src={src}
            alt=""
            width={240}
            height={126}
            className="aspect-1200/630 w-full object-cover opacity-70 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
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
