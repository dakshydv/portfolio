import { ArrowUpRightIcon } from "lucide-react";

import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { USER } from "@/features/portfolio/data/user";
import { cn } from "@/lib/utils";

import { CopyEmailButton, EmailLink } from "./email-actions";
import { boxClass, Corners } from "./section";

export function Contact() {
  return (
    <section
      id="contact"
      className={cn(
        "relative reveal border-t border-dashed border-edge py-16 sm:py-20",
        boxClass
      )}
    >
      <Corners />
      <p className="mb-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase select-none lg:absolute lg:top-[5.6rem] lg:right-full lg:mr-12 lg:mb-0 lg:text-right boxy:hidden">
        <span className="text-foreground">04</span>
        <span className="mx-1.5 text-muted-foreground/50">/</span>
        contact
      </p>

      <div className="boxy:relative boxy:overflow-hidden boxy:p-6 boxy:sm:p-10">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-2 -bottom-6 hidden font-mono text-[9rem] leading-none font-medium tracking-tighter text-edge select-none boxy:sm:block"
        >
          04
        </span>
        <p className="mb-6 hidden font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase boxy:block">
          04 / contact
        </p>
        <h2 className="font-serif text-5xl leading-[0.95] tracking-tight sm:text-6xl boxy:font-sans boxy:text-4xl boxy:leading-[1.02] boxy:font-medium boxy:tracking-tighter boxy:sm:text-6xl">
          Have something
          <br />
          <span className="text-muted-foreground italic boxy:not-italic">
            worth building?
          </span>
        </h2>

        <p className="mt-6 max-w-md text-muted-foreground">
          Email is the fastest way to reach me.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <EmailLink
            email={USER.email}
            className="font-mono text-base sm:text-lg"
          />
          <CopyEmailButton email={USER.email} />
        </div>
      </div>

      <ul
        className={cn(
          "mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-edge bg-edge boxy:mt-0 boxy:rounded-none boxy:border-x-0 boxy:border-b-0",
          SOCIAL_LINKS.length % 4 === 0 ? "sm:grid-cols-4" : "sm:grid-cols-3"
        )}
      >
        {SOCIAL_LINKS.map((link) => (
          <li
            key={link.href}
            className="bg-background max-sm:odd:last:col-span-2"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-6 p-4 transition-colors hover:bg-muted/50"
            >
              <span className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                {link.title === "X (Formerly Twitter)" ? "x" : link.title}
                <ArrowUpRightIcon
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </span>
              <span className="truncate text-sm">{link.description}</span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-muted-foreground boxy:relative boxy:mt-0 boxy:border-t boxy:border-edge boxy:px-5 boxy:py-3.5">
        <span>
          © {new Date().getFullYear()} {USER.displayName}
        </span>
      </footer>
    </section>
  );
}
