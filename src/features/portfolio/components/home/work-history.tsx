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

import { Section } from "./section";

export function WorkHistory() {
  return (
    <Section id="work" index="01" label="work" title="Where I've worked">
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
        "boxy:border-solid boxy:px-4 boxy:before:hidden boxy:first:pt-5"
      )}
    >
      <div className="relative z-1 flex size-9 items-center justify-center overflow-hidden rounded-lg bg-muted ring-1 ring-edge select-none boxy:rounded-sm">
        {experience.companyLogo ? (
          <Image
            src={experience.companyLogo}
            alt=""
            width={36}
            height={36}
            className="size-full object-cover"
            unoptimized
          />
        ) : (
          <span className="font-serif text-lg text-muted-foreground italic">
            {name.charAt(0).toLowerCase()}
          </span>
        )}
      </div>

      <div className="min-w-0">
        <h3 className="flex h-9 items-center gap-2 font-medium">
          {name}
          {experience.isCurrentEmployer && !isEducation && (
            <span className="rounded-full bg-success/10 px-1.5 py-px font-mono text-[10px] text-success boxy:rounded-sm">
              now
            </span>
          )}
        </h3>

        <ul className="mt-1 space-y-0.5">
          {experience.positions?.map((position) => (
            <Position key={position.id} position={position} />
          ))}
        </ul>
      </div>
    </li>
  );
}

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
      <li className="flex flex-col gap-0.5 py-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <PositionLabel position={position} />
        <span className="sm:pr-5.5">
          <Period position={position} />
        </span>
      </li>
    );
  }

  return (
    <li>
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
