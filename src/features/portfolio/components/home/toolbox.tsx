import Image from "next/image";

import { TECH_STACK } from "@/features/portfolio/data/tech-stack";
import type { TechStack } from "@/features/portfolio/types/tech-stack";

import { Section } from "./section";

const GROUPS: { label: string; keys: string[] }[] = [
  { label: "languages", keys: ["typescript", "rust", "js", "go", "py"] },
  {
    label: "frontend",
    keys: [
      "next",
      "react",
      "tailwindcss",
      "shadcn-ui",
      "zustand",
      "zod",
      "motion",
    ],
  },
  {
    label: "backend",
    keys: ["nodejs", "axum", "tokio", "expressjs", "trpc", "fastapi", "bun"],
  },
  { label: "data", keys: ["postgresql", "mongodb", "redis"] },
  {
    label: "infra & tools",
    keys: [
      "docker",
      "github-actions",
      "cloudflare",
      "aws",
      "vercel",
      "git",
      "postman",
      "chatgpt",
    ],
  },
];

const byKey = new Map(TECH_STACK.map((tech) => [tech.key, tech]));

export function Toolbox() {
  return (
    <Section id="stack" index="03" label="stack" title="What I reach for">
      <dl className="divide-y divide-dashed divide-edge border-y border-dashed border-edge boxy:divide-solid boxy:border-y-0">
        {GROUPS.map((group) => {
          const items = group.keys
            .map((key) => byKey.get(key))
            .filter((tech): tech is TechStack => Boolean(tech));

          return (
            <div
              key={group.label}
              className="grid gap-3 py-4 sm:grid-cols-[8rem_1fr] sm:items-center boxy:gap-0 boxy:py-0 boxy:sm:items-stretch"
            >
              <dt className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase boxy:flex boxy:items-center boxy:bg-muted/20 boxy:px-5 boxy:pt-4 boxy:max-sm:bg-transparent boxy:sm:border-r boxy:sm:border-edge boxy:sm:py-4">
                {group.label}
              </dt>
              <dd className="boxy:px-5 boxy:pt-2.5 boxy:pb-4 boxy:sm:py-4">
                <ul className="flex flex-wrap gap-1.5 boxy:gap-x-5 boxy:gap-y-2.5">
                  {items.map((tech) => (
                    <li
                      key={tech.key}
                      className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-muted/40 py-1 pr-2 pl-1.5 text-sm transition-colors hover:border-foreground/20 boxy:border-0 boxy:bg-transparent boxy:p-0 boxy:text-muted-foreground boxy:hover:text-foreground"
                    >
                      <TechIcon tech={tech} />
                      {tech.title}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          );
        })}
      </dl>
    </Section>
  );
}

function TechIcon({ tech }: { tech: TechStack }) {
  const common = {
    width: 16,
    height: 16,
    unoptimized: true,
    className: "size-4 object-contain",
  };

  if (!tech.icon) {
    return (
      <span
        aria-hidden
        className="flex size-4 items-center justify-center rounded-[3px] bg-foreground font-mono text-[9px] leading-none font-semibold text-background boxy:rounded-[1px]"
      >
        {tech.title.charAt(0).toUpperCase()}
      </span>
    );
  }

  // For themed entries `darkIcon` is the variant drawn for light backgrounds.
  if (tech.theme && tech.darkIcon) {
    return (
      <>
        <Image
          alt=""
          {...common}
          src={`/icons/${tech.darkIcon}`}
          className={`${common.className} dark:hidden`}
        />
        <Image
          alt=""
          {...common}
          src={`/icons/${tech.icon}`}
          className={`${common.className} hidden dark:block`}
        />
      </>
    );
  }

  return <Image alt="" {...common} src={`/icons/${tech.icon}`} />;
}
