"use client";

import { ChevronDown, Code, GraduationCap } from "lucide-react";
import { useState } from "react";

import { EXPERIENCES } from "@/features/portfolio/data/experiences";

export function ExperienceSection() {
  const [expandedPositions, setExpandedPositions] = useState<Set<string>>(
    () => {
      const initial = new Set<string>();
      EXPERIENCES.forEach((exp) => {
        exp.positions?.forEach((pos) => {
          if (pos.isExpanded) initial.add(pos.id);
        });
      });
      return initial;
    }
  );

  const togglePosition = (positionId: string) => {
    setExpandedPositions((prev) => {
      const next = new Set(prev);
      if (next.has(positionId)) {
        next.delete(positionId);
      } else {
        next.add(positionId);
      }
      return next;
    });
  };

  const isEducation = (companyName?: string) =>
    companyName?.toLowerCase() === "education";

  return (
    <section id="work" className="scroll-mt-20">
      <h2 className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
        Experience
      </h2>

      <div className="space-y-0">
        {EXPERIENCES.map((experience, expIdx) => (
          <div key={experience.id}>
            {/* Company separator */}
            {expIdx > 0 && (
              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="size-1 rounded-full bg-border" />
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            )}

            {/* Company header */}
            <div className="mb-4 flex items-center gap-3">
              {experience.companyLogo ? (
                <img
                  src={experience.companyLogo}
                  alt={experience.companyName ?? ""}
                  className="size-8 rounded-lg border border-border/60 object-cover"
                />
              ) : (
                <div className="flex size-8 items-center justify-center rounded-lg border border-border/60 bg-muted">
                  {isEducation(experience.companyName) ? (
                    <GraduationCap className="size-4 text-muted-foreground" />
                  ) : (
                    <Code className="size-4 text-muted-foreground" />
                  )}
                </div>
              )}
              <div>
                <h3 className="text-sm font-medium">
                  {experience.companyName}
                </h3>
                {experience.isCurrentEmployer && (
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
                    Current
                  </span>
                )}
              </div>
            </div>

            {/* Positions */}
            <div className="relative ml-2">
              {/* Continuous timeline line */}
              <div className="absolute top-[6px] bottom-[6px] left-[3px] w-px bg-border/40" />

              <div className="space-y-5">
                {experience.positions?.map((position, idx) => {
                  const isExpanded = expandedPositions.has(position.id);
                  const bulletPoints = position.description
                    ?.split("\n")
                    .map((line) => line.replace(/^-\s*/, "").trim())
                    .filter((line) => line.length > 0);
                  const isLast =
                    idx === (experience.positions?.length ?? 0) - 1;

                  return (
                    <div key={position.id} className="relative pl-6">
                      {/* Timeline dot - centered on the line */}
                      <div className="absolute top-[6px] left-0 flex size-[7px] items-center justify-center">
                        <div className="size-[7px] rounded-full border-2 border-border bg-background" />
                      </div>

                      {/* Header - clickable */}
                      <button
                        onClick={() => togglePosition(position.id)}
                        className="flex w-full items-start justify-between gap-2 text-left"
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                            <span className="text-sm font-medium">
                              {position.title}
                            </span>
                            {position.employmentType && (
                              <span className="text-[10px] text-muted-foreground">
                                {position.employmentType}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {position.employmentPeriod?.start}
                            {position.employmentPeriod?.end
                              ? ` — ${position.employmentPeriod.end}`
                              : " — Present"}
                          </p>
                        </div>
                        <ChevronDown
                          className={`mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Expandable content */}
                      <div
                        className={`grid transition-all duration-200 ease-in-out ${
                          isExpanded
                            ? "mt-3 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          {/* Description bullet points */}
                          {bulletPoints && bulletPoints.length > 0 && (
                            <ul className="space-y-1.5">
                              {bulletPoints.map((point, i) => (
                                <li
                                  key={i}
                                  className="flex gap-2 text-xs leading-relaxed text-foreground/70"
                                >
                                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Skills */}
                          {position.skills && position.skills.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1">
                              {position.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="rounded bg-muted/60 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
