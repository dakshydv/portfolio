"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const SECTIONS = ["work", "projects", "stack", "contact"] as const;

/** Header anchors that highlight whichever section is currently in view. */
export function SectionNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {SECTIONS.map((id) => (
        <a
          key={id}
          href={`/#${id}`}
          aria-current={active === id ? "location" : undefined}
          className={cn(
            "relative rounded-md px-1.5 py-1 font-mono text-xs transition-colors sm:px-2",
            active === id
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {id}
          <span
            aria-hidden
            className={cn(
              "absolute inset-x-1.5 -bottom-0.5 h-px bg-foreground transition-transform duration-300 sm:inset-x-2",
              active === id ? "scale-x-100" : "scale-x-0"
            )}
          />
        </a>
      ))}
    </>
  );
}
