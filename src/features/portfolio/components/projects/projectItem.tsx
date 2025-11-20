import { Github, Globe, PinIcon } from "lucide-react";
import Image from "next/image";

import { Markdown } from "@/components/markdown";
import { Tag } from "@/components/ui/tag";
import { ProseMono } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import type { Project } from "../../types/projects";

export function ProjectItem2({ project }: { project: Project }) {
  // Normalize link fields: project data may use `link` or typed fields `liveLink`/`githubLink`.
  // Use `any` to be resilient to different data shapes.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = project as any;
  const liveLink: string | undefined = p.liveLink ?? p.link ?? undefined;
  const githubLink: string | undefined =
    p.githubLink ??
    (typeof p.link === "string" && p.link.includes("github.com")
      ? p.link
      : undefined);
  return (
    <div
      className={cn(
        "group/post flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      {/* {post.metadata.image && ( */}
      <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
        {project.image && (
          <Image
            src={project.image ?? ""}
            alt={project.title}
            width={1200}
            height={630}
            quality={100}
            className="w-full rounded-xl object-cover"
            unoptimized
          />
        )}
        {project.video && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-xl object-cover"
          >
            <source src={project.video} type="video/mp4" />
          </video>
        )}

        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />

        {/* {post.metadata.new && (
            <span className="absolute top-1.5 right-1.5 rounded-md bg-info px-1.5 font-mono text-sm font-medium text-white text-shadow-xs">
              New
            </span>
          )} */}

        {/* {post.metadata.pinned && ( */}
        {project.pinned && (
          <span className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-md bg-secondary">
            <PinIcon className="size-4 rotate-45 text-secondary-foreground" />
            <span className="sr-only">Pinned</span>
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 p-2">
        <h3 className="px-4 py-2 text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
          <div className="flex items-center justify-between gap-3">
            <span className="truncate">{project.title}</span>
            <div className="flex items-center gap-2">
              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit project site"
                  className="text-foreground hover:text-link"
                >
                  <Globe size={18} className="size-4" />
                </a>
              )}

              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source on GitHub"
                  className="text-foreground hover:text-link"
                >
                  <Github size={18} className="size-4" />
                </a>
              )}
            </div>
          </div>
        </h3>
        <div className="border-t border-edge shadow-inner">
          <div className="space-y-4 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in">
            {project.description && (
              <ProseMono>
                <Markdown>{project.description}</Markdown>
              </ProseMono>
            )}

            {project.skills.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, index) => (
                  <li key={index} className="flex">
                    <Tag>{skill}</Tag>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-sm text-muted-foreground">
            {/* <time dateTime={dayjs(post.metadata.createdAt).toISOString()}> */}
            {/* {dayjs(post.metadata.createdAt).format("DD.MM.YYYY")} */}
            {/* </time> */}
          </dd>
        </dl>
      </div>
    </div>
  );
}
