"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import React from "react";

import type { OssContributions } from "@/features/portfolio/types/contributions";
import { cn } from "@/lib/utils";

export function ContributionsItem({
  className,
  contributions,
}: {
  className?: string;
  contributions: OssContributions;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <a
      className={cn(
        "group/cert flex items-center border-b border-dashed border-border pr-2",
        className
      )}
      href={contributions.url}
      target="_blank"
      rel="noopener"
    >
      <Image
        src={
          mounted && resolvedTheme === "light"
            ? "images/pr-light.png"
            : "images/pr.png"
        }
        alt="hislkf lkjsaf"
        width={32}
        height={32}
        quality={100}
        className="mx-4 flex size-6 shrink-0 select-none"
        unoptimized
        aria-hidden
      />

      <div className="w-full flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2">
        <h3 className="leading-snug font-medium text-balance underline-offset-4 group-hover/cert:underline">
          {contributions.title}
          {/* This is the title of the contributions */}
        </h3>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <dl>
            <dt className="sr-only">Issued by</dt>
            <dd>
              <span aria-hidden>@</span>
              <span className="ml-0.5">{contributions.org}</span>
              {/* <span className="ml-0.5">This is the issuer of the certificate</span> */}
            </dd>
          </dl>

          {/* <Separator
            className="data-[orientation=vertical]:h-4"
            orientation="vertical"
          /> */}

          {/* <dl>
            <dt className="sr-only">Issued on</dt>
            <dd>
              <time dateTime={dayjs(certification.issueDate).toISOString()}>
                {dayjs('Thu Nov 20 2025 16:20:08 GMT+0530 (India Standard Time)').format("DD.MM.YYYY")}
              </time>
            </dd>
          </dl> */}
        </div>
      </div>

      {/* {certification.credentialURL && ( */}
      {/* {contributions.url && (
        <ArrowUpRightIcon
          className="size-4 text-muted-foreground"
          aria-hidden
        />
      )} */}
    </a>
  );
}
