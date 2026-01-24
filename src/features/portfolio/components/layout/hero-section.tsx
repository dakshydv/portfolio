import { ArrowUpRight } from "lucide-react";

import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { USER } from "@/features/portfolio/data/user";
import { FlipSentences } from "@/registry/flip-sentences";

import { SocialIcon } from "../social-icon";
import { VerifiedIcon } from "../verified-icon";

export function HeroSection() {
  return (
    <section id="about" className="scroll-mt-20">
      {/* Main Hero Content */}
      <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-10 sm:text-left">
        {/* Avatar with glow effect */}
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-60 blur-md" />
          <div className="relative">
            <img
              src={USER.avatar}
              alt={USER.displayName}
              className="size-28 rounded-full border-2 border-border/40 object-cover ring-1 ring-white/10 sm:size-32"
            />
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 flex-1 space-y-4 sm:mt-0">
          <div>
            <h1 className="flex items-center justify-center gap-2.5 text-2xl font-bold tracking-tight sm:justify-start sm:text-3xl">
              {USER.displayName}
              <VerifiedIcon
                className="size-5 text-blue-500"
                aria-label="Verified"
              />
            </h1>
            <FlipSentences className="mt-1.5 text-base text-muted-foreground">
              {USER.flipSentences}
            </FlipSentences>
          </div>

          {/* Social Links - minimal icons with subtle hover */}
          <div className="flex items-center justify-center gap-1 pt-3 sm:justify-start">
            {SOCIAL_LINKS.filter(
              (link) => link.title !== "Email" && link.title !== "Resume"
            ).map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("/") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("/") ? undefined : "noopener noreferrer"
                }
                className="group relative flex items-center justify-center rounded-lg p-2.5 text-muted-foreground/70 transition-colors duration-150 hover:text-foreground"
                aria-label={link.title}
              >
                <span className="absolute inset-0 rounded-lg bg-foreground/0 transition-colors duration-150 group-hover:bg-foreground/5" />
                <SocialIcon
                  title={link.title}
                  className="relative size-[18px]"
                />
              </a>
            ))}
            {/* Email icon */}
            {SOCIAL_LINKS.find((l) => l.title === "Email") && (
              <a
                href={
                  SOCIAL_LINKS.find((l) => l.title === "Email")?.href ?? "#"
                }
                className="group relative flex items-center justify-center rounded-lg p-2.5 text-muted-foreground/70 transition-colors duration-150 hover:text-foreground"
                aria-label="Email"
              >
                <span className="absolute inset-0 rounded-lg bg-foreground/0 transition-colors duration-150 group-hover:bg-foreground/5" />
                <SocialIcon title="Email" className="relative size-[18px]" />
              </a>
            )}
            <span className="mx-2 h-4 w-px bg-border/50" />
            <a
              href={SOCIAL_LINKS.find((l) => l.title === "Resume")?.href ?? "#"}
              className="text-xs font-medium text-muted-foreground/70 transition-colors duration-150 hover:text-foreground"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* About Section - minimal elegant styling */}
      <div className="relative mt-12 pl-4 before:absolute before:top-0 before:left-0 before:h-full before:w-px before:bg-gradient-to-b before:from-border before:via-border/50 before:to-transparent">
        <h2 className="mb-2 text-[10px] font-medium tracking-[0.2em] text-muted-foreground/60 uppercase">
          About
        </h2>
        <p className="text-sm leading-relaxed text-foreground/70">
          {USER.about
            .replace(/- /g, "")
            .replace(/\*\*/g, "")
            .split("\n")
            .filter((line) => line.trim())
            .slice(0, 2)
            .join(" ")}
        </p>
      </div>
    </section>
  );
}
