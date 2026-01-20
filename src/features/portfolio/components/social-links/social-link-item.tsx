import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import type { SocialLink } from "@/features/portfolio/types/social-links";
import { cn } from "@/lib/utils";

import { SocialIcon } from "../social-icon";

export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 p-4 pr-2 transition-colors select-none hover:bg-accent2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-lingge-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-muted/50">
        {icon.includes(".") ? (
          <>
            <Image
              className="rounded-xl"
              src={`/icons/${icon}`}
              alt={title}
              width={48}
              height={48}
              unoptimized
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
          </>
        ) : (
          <SocialIcon title={title} className="size-6 text-foreground" />
        )}
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
