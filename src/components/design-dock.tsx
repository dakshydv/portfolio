"use client";

import { ArrowUpIcon, LayoutGridIcon, NewspaperIcon } from "lucide-react";
import { useSyncExternalStore } from "react";

import { useSound } from "@/hooks/use-sound";
import { cn } from "@/lib/utils";

type Design = "editorial" | "boxy";

const DESIGNS: { value: Design; label: string; icon: typeof NewspaperIcon }[] =
  [
    { value: "editorial", label: "editorial", icon: NewspaperIcon },
    { value: "boxy", label: "boxy", icon: LayoutGridIcon },
  ];

function readDesign(): Design {
  return document.documentElement.dataset.design === "editorial"
    ? "editorial"
    : "boxy";
}

function subscribeDesign(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-design"],
  });
  return () => observer.disconnect();
}

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function applyDesign(design: Design) {
  document.documentElement.dataset.design = design;
  try {
    localStorage.setItem("design", design);
  } catch {
    // Storage can be unavailable (private mode); the switch still applies.
  }
}

/** Floating control for switching page layouts, plus scroll-to-top. */
export function DesignDock() {
  const design = useSyncExternalStore<Design>(
    subscribeDesign,
    readDesign,
    () => "boxy"
  );
  const scrolled = useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 480,
    () => false
  );
  const playClick = useSound("/audio/ui-sounds/click.wav");

  const select = (next: Design) => {
    if (next === design) return;
    playClick();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(() => applyDesign(next));
    } else {
      applyDesign(next);
    }
  };

  return (
    <div
      className={cn(
        "fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] z-50 lg:right-6 lg:bottom-6",
        "flex items-center gap-1 rounded-full border border-edge bg-background/85 p-1 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.35)] backdrop-blur-md",
        "boxy:rounded-md"
      )}
    >
      <div role="radiogroup" aria-label="Page design" className="flex gap-0.5">
        {DESIGNS.map(({ value, label, icon: Icon }) => {
          const active = design === value;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => select(value)}
              className={cn(
                "inline-flex h-7 items-center gap-1.5 rounded-full px-2.5 font-mono text-[11px] transition-colors boxy:rounded-sm",
                active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="size-3.5" aria-hidden />
              {label}
            </button>
          );
        })}
      </div>

      <div
        className={cn(
          "flex items-center overflow-hidden transition-[width,opacity] duration-300",
          scrolled ? "w-8 opacity-100" : "w-0 opacity-0"
        )}
      >
        <span className="mx-0.5 h-4 w-px shrink-0 bg-border" aria-hidden />
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          tabIndex={scrolled ? 0 : -1}
          className="inline-flex size-7 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground boxy:rounded-sm"
        >
          <ArrowUpIcon className="size-3.5" aria-hidden />
          <span className="sr-only">Scroll to top</span>
        </button>
      </div>
    </div>
  );
}
