"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

import { useIsClient } from "@/hooks/use-is-client";
import { cn } from "@/lib/utils";
import { decodeEmail } from "@/utils/string";

export function EmailLink({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const isClient = useIsClient();
  const decoded = isClient ? decodeEmail(email) : null;

  return (
    <a
      href={decoded ? `mailto:${decoded}` : "#"}
      className={cn(
        "underline decoration-muted-foreground/40 underline-offset-[6px] transition-colors hover:decoration-foreground",
        className
      )}
    >
      {decoded ?? "[email protected]"}
    </a>
  );
}

export function CopyEmailButton({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(decodeEmail(email));
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${decodeEmail(email)}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-full border border-edge px-3 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground boxy:rounded-sm",
        className
      )}
    >
      {copied ? (
        <CheckIcon className="size-3.5 text-success" aria-hidden />
      ) : (
        <CopyIcon className="size-3.5" aria-hidden />
      )}
      <span aria-live="polite">{copied ? "copied" : "copy email"}</span>
    </button>
  );
}
