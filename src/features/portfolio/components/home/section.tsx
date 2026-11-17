import { cn } from "@/lib/utils";

/**
 * In the boxy design every block becomes a framed cell: solid border,
 * hairlines bleeding to the viewport edges, and crosshair marks on corners.
 */
export const boxClass =
  "group/box boxy:mt-12 boxy:-mx-px boxy:border boxy:border-solid boxy:border-edge boxy:bg-background boxy:py-0 boxy:screen-line-before boxy:screen-line-after";

export function Corners() {
  return (
    <span aria-hidden className="pointer-events-none hidden boxy:block">
      {[
        "-top-[5px] -left-[5px]",
        "-top-[5px] -right-[5px]",
        "-bottom-[5px] -left-[5px]",
        "-right-[5px] -bottom-[5px]",
      ].map((position) => (
        <svg
          key={position}
          viewBox="0 0 9 9"
          className={cn(
            "absolute z-1 size-[9px] text-muted-foreground/60 transition-[color,rotate] duration-500 group-hover/box:rotate-90 group-hover/box:text-foreground",
            position
          )}
        >
          <path d="M4.5 0v9M0 4.5h9" stroke="currentColor" />
        </svg>
      ))}
    </span>
  );
}

export function SectionLabel({
  index,
  label,
  className,
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase select-none lg:absolute lg:top-[4.6rem] lg:right-full lg:mr-12 lg:mb-0 lg:text-right",
        "boxy:hidden",
        className
      )}
    >
      <span className="text-foreground">{index}</span>
      <span className="mx-1.5 text-muted-foreground/50">/</span>
      {label}
    </p>
  );
}

type SectionProps = Omit<React.ComponentProps<"section">, "title"> & {
  index: string;
  label: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
};

/**
 * Page section. Editorial: numbered label hangs in the left margin and a
 * serif heading opens the block. Boxy: a header bar with an index cell.
 */
export function Section({
  index,
  label,
  title,
  aside,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative reveal border-t border-dashed border-edge py-14 sm:py-16",
        boxClass,
        className
      )}
      {...props}
    >
      <Corners />
      <SectionLabel index={index} label={label} />

      <div className="mb-8 flex items-end justify-between gap-4 boxy:mb-0 boxy:items-stretch boxy:gap-0 boxy:border-b boxy:border-edge">
        <span className="hidden w-14 shrink-0 items-center justify-center border-r border-edge bg-muted/30 font-mono text-xs text-muted-foreground tabular-nums transition-colors group-hover/box:text-foreground boxy:flex">
          {index}
        </span>
        <h2 className="font-serif text-4xl leading-none tracking-tight sm:text-[2.75rem] boxy:flex-1 boxy:px-5 boxy:py-4 boxy:font-sans boxy:text-[1.375rem] boxy:leading-none boxy:font-medium boxy:tracking-tight boxy:sm:text-[1.375rem]">
          {title}
        </h2>
        <div className="boxy:flex boxy:items-center boxy:px-5">
          {aside ?? (
            <span className="hidden font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase boxy:inline">
              {label}
            </span>
          )}
        </div>
      </div>

      {children}
    </section>
  );
}
