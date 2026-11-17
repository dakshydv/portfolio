import { ArrowUpRightIcon } from "lucide-react";
import { Suspense } from "react";

import type { Activity } from "@/components/kibo-ui/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";
import { getGitHubContributions } from "@/features/portfolio/data/github-contributions";
import { cn } from "@/lib/utils";

const CELL = 10;
const GAP = 2;
const MOBILE_WEEKS = 26;

const LEVEL_FILL = [
  "fill-muted",
  "fill-foreground/25",
  "fill-foreground/45",
  "fill-foreground/70",
  "fill-foreground",
];

type Stats = {
  total: number;
  activeDays: number;
  bestStreak: number;
  currentStreak: number;
};

function getStats(days: Activity[]): Stats {
  let best = 0;
  let run = 0;
  for (const day of days) {
    run = day.count > 0 ? run + 1 : 0;
    best = Math.max(best, run);
  }

  // Today may not have activity yet, so a streak ending yesterday still counts.
  let current = 0;
  let i = days.length - 1;
  if (i >= 0 && days[i].count === 0) i--;
  while (i >= 0 && days[i].count > 0) {
    current++;
    i--;
  }

  return {
    total: days.reduce((sum, day) => sum + day.count, 0),
    activeDays: days.filter((day) => day.count > 0).length,
    bestStreak: best,
    currentStreak: current,
  };
}

/** Groups days into Sunday-first week columns, padding the first week. */
function toWeeks(days: Activity[]) {
  if (days.length === 0) return [];
  const pad = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();
  const cells: (Activity | null)[] = [...Array(pad).fill(null), ...days];
  const weeks: (Activity | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
  return weeks;
}

function monthLabels(weeks: (Activity | null)[][]) {
  const labels: { index: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, index) => {
    const first = week.find(Boolean);
    if (!first) return;
    const date = new Date(`${first.date}T00:00:00Z`);
    const month = date.getUTCMonth();
    const lastLabel = labels.at(-1);
    if (month !== lastMonth && (!lastLabel || index - lastLabel.index >= 3)) {
      labels.push({
        index,
        label: date
          .toLocaleString("en-US", { month: "short", timeZone: "UTC" })
          .toLowerCase(),
      });
    }
    lastMonth = month;
  });
  return labels;
}

function Heatmap({
  weeks,
  className,
}: {
  weeks: (Activity | null)[][];
  className?: string;
}) {
  const width = weeks.length * (CELL + GAP) - GAP;
  const height = 7 * (CELL + GAP) - GAP;
  const labels = monthLabels(weeks);

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="block h-auto w-full"
        role="img"
        aria-label="GitHub contribution graph"
      >
        {weeks.map((week, x) =>
          week.map((day, y) =>
            day ? (
              <rect
                key={day.date}
                x={x * (CELL + GAP)}
                y={y * (CELL + GAP)}
                width={CELL}
                height={CELL}
                className={cn(
                  LEVEL_FILL[day.level] ?? LEVEL_FILL[0],
                  "[rx:2px] boxy:[rx:0.5px]"
                )}
              >
                <title>
                  {`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}
                </title>
              </rect>
            ) : null
          )
        )}
      </svg>

      <div className="relative mt-2 h-3 font-mono text-[10px] text-muted-foreground select-none">
        {labels.map(({ index, label }) => (
          <span
            key={index}
            className="absolute top-0"
            style={{ left: `${(index / weeks.length) * 100}%` }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-background px-3 py-3 sm:px-4 boxy:sm:px-5">
      <dt className="font-mono text-[10px] tracking-[0.08em] whitespace-nowrap text-muted-foreground uppercase sm:tracking-[0.18em]">
        {label}
      </dt>
      <dd className="mt-1 text-sm tabular-nums">{value}</dd>
    </div>
  );
}

function unit(n: number, word: string) {
  return (
    <>
      {n.toLocaleString("en-US")}
      <span className="text-muted-foreground">
        {" "}
        {word}
        {n === 1 ? "" : "s"}
      </span>
    </>
  );
}

const frame = cn(
  "mt-12 overflow-hidden rounded-xl border border-edge",
  "boxy:mt-0 boxy:rounded-none boxy:border-x-0 boxy:border-b-0"
);

async function GitHubActivityContent() {
  let days: Activity[];
  try {
    days = await getGitHubContributions();
  } catch {
    return null;
  }
  if (!days?.length) return null;

  const stats = getStats(days);
  const weeks = toWeeks(days);
  const streak =
    stats.currentStreak > 0
      ? { label: "streak", value: stats.currentStreak }
      : { label: "best streak", value: stats.bestStreak };

  return (
    <section aria-label="GitHub activity" className={frame}>
      <dl className="grid grid-cols-3 gap-px border-b border-edge bg-edge">
        <Stat
          label="contributions"
          value={stats.total.toLocaleString("en-US")}
        />
        <Stat label="active days" value={stats.activeDays} />
        <Stat label={streak.label} value={unit(streak.value, "day")} />
      </dl>

      <div className="px-4 pt-4 pb-3 boxy:px-5">
        <Heatmap weeks={weeks} className="max-sm:hidden" />
        <Heatmap weeks={weeks.slice(-MOBILE_WEEKS)} className="sm:hidden" />

        <div className="mt-3 flex items-center justify-between gap-4 font-mono text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1.5" aria-hidden>
            less
            {LEVEL_FILL.map((fill) => (
              <svg key={fill} viewBox="0 0 10 10" className="size-2.5">
                <rect
                  width="10"
                  height="10"
                  className={cn(fill, "[rx:2px] boxy:[rx:0.5px]")}
                />
              </svg>
            ))}
            more
          </span>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
          >
            github.com/{GITHUB_USERNAME}
            <ArrowUpRightIcon className="size-3" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

function GitHubActivitySkeleton() {
  return (
    <div className={cn(frame, "h-52 animate-pulse bg-muted/30")} aria-hidden />
  );
}

/** Live contribution summary from GitHub, cached for a day. */
export function GitHubActivity() {
  return (
    <Suspense fallback={<GitHubActivitySkeleton />}>
      <GitHubActivityContent />
    </Suspense>
  );
}
