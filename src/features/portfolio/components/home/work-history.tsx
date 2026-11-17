import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";

import { Markdown } from "@/components/markdown";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { EXPERIENCES } from "@/features/portfolio/data/experiences";
import type {
  Experience,
  ExperiencePosition,
} from "@/features/portfolio/types/experiences";
import { cn } from "@/lib/utils";

import { ExperienceIcon } from "../experiences/experience-position-icon";
import { Section } from "./section";

export function WorkHistory() {
  return (
    <Section id="work" index="02" label="work" title="Where I've worked">
      <ol>
        {EXPERIENCES.map((experience) => (
          <Company key={experience.id} experience={experience} />
        ))}
      </ol>
    </Section>
  );
}

function Company({ experience }: { experience: Experience }) {
  const name = experience.companyName ?? "";
  const isEducation = experience.id === "education";

  return (
    <li
      className={cn(
        "relative grid grid-cols-[2.25rem_1fr] gap-x-4 border-t border-dashed border-edge py-5 first:border-t-0 first:pt-0",
        "before:absolute before:top-[3.75rem] before:bottom-2 before:left-[1.125rem] before:w-px before:bg-linear-to-b before:from-edge before:to-transparent first:before:top-11",
        "boxy:block boxy:border-solid boxy:p-0 boxy:before:hidden boxy:first:pt-0"
      )}
    >
      <div className="contents boxy:flex boxy:items-center boxy:gap-3 boxy:px-5 boxy:pt-5 boxy:pb-1.5">
        <div className="relative z-1 size-9 shrink-0 overflow-hidden rounded-lg ring-1 ring-edge select-none boxy:size-8 boxy:rounded-sm">
          <CompanyMark experience={experience} />
        </div>

        <h3 className="flex h-9 items-center gap-2 font-medium boxy:h-auto boxy:min-w-0 boxy:flex-1 boxy:flex-wrap boxy:gap-x-2 boxy:gap-y-0.5 boxy:leading-snug">
          {name}
          {experience.isCurrentEmployer && !isEducation && (
            <span className="rounded-full bg-success/10 px-1.5 py-px font-mono text-[10px] text-success boxy:rounded-sm">
              now
            </span>
          )}
        </h3>

        <CompanySpan experience={experience} />
      </div>

      <ul className="col-start-2 mt-1 space-y-0.5 boxy:mt-0 boxy:space-y-0 boxy:px-5 boxy:pb-4">
        {experience.positions?.map((position) => (
          <Position key={position.id} position={position} />
        ))}
      </ul>
    </li>
  );
}

function initials(name: string) {
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).replace(/^./, (c) => c.toUpperCase());
}

/**
 * Company logo, or a dark tile matching how real logos sit in the list:
 * an icon when one is configured, otherwise the company's initials.
 */
function CompanyMark({ experience }: { experience: Experience }) {
  const name = experience.companyName ?? "";

  if (experience.companyLogo) {
    return (
      <Image
        src={experience.companyLogo}
        alt=""
        width={36}
        height={36}
        className="size-full object-cover"
        unoptimized
      />
    );
  }

  return (
    <span className="flex size-full items-center justify-center bg-linear-to-br from-zinc-800 to-zinc-950 text-zinc-100 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]">
      {experience.companyIcon ? (
        <ExperienceIcon icon={experience.companyIcon} className="size-4" />
      ) : (
        <span className="font-mono text-[11px] font-semibold tracking-tight">
          {initials(name)}
        </span>
      )}
    </span>
  );
}

/** Overall tenure across all roles; positions are listed newest first. */
function CompanySpan({ experience }: { experience: Experience }) {
  const positions = experience.positions ?? [];
  const start = positions.at(-1)?.employmentPeriod?.start;
  if (!start) return null;
  const end = positions[0]?.employmentPeriod?.end ?? "now";

  return (
    <span className="hidden shrink-0 font-mono text-[11px] text-muted-foreground tabular-nums boxy:sm:inline">
      {start} – {end}
    </span>
  );
}

/**
 * Tree connector for roles in the boxy design: a vertical spine aligned to
 * the company logo, with a short tick into each role.
 */
const treeBranch = cn(
  "boxy:relative boxy:pl-8",
  "boxy:before:absolute boxy:before:top-0 boxy:before:bottom-0 boxy:before:left-4 boxy:before:w-px boxy:before:bg-edge",
  "boxy:last:before:bottom-auto boxy:last:before:h-[1.0625rem]",
  "boxy:after:absolute boxy:after:top-[1.0625rem] boxy:after:left-4 boxy:after:h-px boxy:after:w-2.5 boxy:after:bg-edge"
);

function Period({ position }: { position: ExperiencePosition }) {
  const { start, end } = position.employmentPeriod ?? {};
  if (!start) return null;

  return (
    <span className="font-mono text-xs whitespace-nowrap text-muted-foreground tabular-nums">
      {start} – {end ?? "now"}
    </span>
  );
}

function PositionLabel({ position }: { position: ExperiencePosition }) {
  return (
    <span className="min-w-0 text-sm text-foreground/90">
      {position.title}
      {position.employmentType && (
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">
          {position.employmentType.toLowerCase()}
        </span>
      )}
    </span>
  );
}

function Position({ position }: { position: ExperiencePosition }) {
  const hasDetails = Boolean(
    position.description?.trim() || position.skills?.length
  );

  if (!hasDetails) {
    return (
      <li
        className={cn(
          "flex flex-col gap-0.5 py-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4",
          treeBranch
        )}
      >
        <PositionLabel position={position} />
        <span className="sm:pr-5.5">
          <Period position={position} />
        </span>
      </li>
    );
  }

  return (
    <li className={treeBranch}>
      <Collapsible defaultOpen={position.isExpanded}>
        <CollapsibleTrigger className="group/pos -mx-2 flex w-[calc(100%+1rem)] flex-col gap-0.5 rounded-md px-2 py-1.5 text-left transition-colors hover:bg-accent2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 boxy:rounded-sm">
          <PositionLabel position={position} />
          <span className="flex shrink-0 items-center gap-2 max-sm:justify-between">
            <Period position={position} />
            <ChevronDownIcon
              className="size-3.5 translate-y-0.5 text-muted-foreground transition-transform duration-300 group-data-[state=open]/pos:rotate-180"
              aria-hidden
            />
          </span>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
          <div className="pt-2 pb-4">
            {position.description && (
              <div className="text-sm leading-relaxed text-pretty text-muted-foreground [&_li]:relative [&_li]:pl-4 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-muted-foreground/50 [&_li]:before:content-['—'] [&_li+li]:mt-1.5 [&_strong]:font-medium [&_strong]:text-foreground [&_ul_ul]:mt-1.5">
                <Markdown>{position.description}</Markdown>
              </div>
            )}

            {position.skills && position.skills.length > 0 && (
              <p className="mt-3 font-mono text-[11px] leading-relaxed text-muted-foreground/80">
                {position.skills.join(" · ")}
              </p>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </li>
  );
}
