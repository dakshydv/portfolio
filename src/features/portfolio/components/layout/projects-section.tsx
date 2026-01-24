"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { PROJECTS } from "@/features/portfolio/data/projects";

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
        Projects
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {visibleProjects.map((project) => {
          const liveLink = project.liveLink;
          const githubLink = project.githubLink;

          return (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-lg border border-border/60 bg-card transition-colors hover:bg-muted/30"
            >
              {/* Image */}
              {project.image && (
                <div className="aspect-video overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={315}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-3">
                <div className="mb-1.5 flex items-start justify-between gap-2">
                  <h3 className="text-sm font-medium">{project.title}</h3>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {githubLink && (
                      <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        aria-label="View source on GitHub"
                      >
                        <Github className="size-4" />
                      </a>
                    )}
                    {liveLink && (
                      <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        aria-label="Visit project"
                      >
                        <ArrowUpRight className="size-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="rounded bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                      +{project.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {!showAll && PROJECTS.length > 4 && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-md border border-border/60 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            View all projects
          </button>
        </div>
      )}
    </section>
  );
}
