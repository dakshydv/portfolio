import Image from "next/image";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";

export function TeckStack() {
  return (
    <div className="flex flex-wrap gap-4 select-none">
      {TECH_STACK.map((tech) => {
        return (
          <div key={tech.key} className="flex">
            <SimpleTooltip content={tech.title}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label={tech.title}
                className="block rounded-xl bg-muted/50 p-2 transition-colors hover:bg-muted"
              >
                {tech.theme ? (
                  <>
                    <Image
                      src={`icons/${tech.darkIcon}`}
                      alt={`${tech.title} light icon`}
                      width={24}
                      height={24}
                      className="block dark:hidden"
                      unoptimized
                    />
                    <Image
                      src={`icons/${tech.icon}`}
                      alt={`${tech.title} dark icon`}
                      width={24}
                      height={24}
                      className="hidden dark:block"
                      unoptimized
                    />
                  </>
                ) : (
                  <Image
                    src={`/icons/${tech.icon}`}
                    alt={`${tech.title} icon`}
                    width={24}
                    height={24}
                    unoptimized
                  />
                )}
                <span className="sr-only">{tech.title}</span>
              </a>
            </SimpleTooltip>
          </div>
        );
      })}
    </div>
  );
}
