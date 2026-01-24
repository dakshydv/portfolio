import Image from "next/image";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { TECH_STACK } from "@/features/portfolio/data/tech-stack";

export function TechSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="mb-4 text-xs font-medium tracking-widest text-muted-foreground uppercase">
        Skills
      </h2>

      <div className="flex flex-wrap gap-2">
        {TECH_STACK.map((tech) => (
          <SimpleTooltip key={tech.key} content={tech.title}>
            <div className="flex items-center gap-1.5 rounded-md border border-border/50 bg-card px-2 py-1 transition-colors hover:bg-muted/50">
              <div className="relative size-4">
                {tech.theme ? (
                  <>
                    <Image
                      src={`/icons/${tech.darkIcon}`}
                      alt=""
                      width={16}
                      height={16}
                      className="block dark:hidden"
                      unoptimized
                    />
                    <Image
                      src={`/icons/${tech.icon}`}
                      alt=""
                      width={16}
                      height={16}
                      className="hidden dark:block"
                      unoptimized
                    />
                  </>
                ) : (
                  <Image
                    src={`/icons/${tech.icon}`}
                    alt=""
                    width={16}
                    height={16}
                    unoptimized
                  />
                )}
              </div>
              <span className="text-xs">{tech.title}</span>
            </div>
          </SimpleTooltip>
        ))}
      </div>
    </section>
  );
}
