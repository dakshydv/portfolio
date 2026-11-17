import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { TECH_STACK } from "@/features/portfolio/data/tech-stack";
import { USER } from "@/features/portfolio/data/user";

export const alt = `${USER.displayName} – ${USER.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COLORS = {
  background: "#09090b",
  foreground: "#fafafa",
  muted: "#a1a1aa",
  faint: "#52525b",
  edge: "#27272a",
  dots: "#1f1f23",
  success: "#22c55e",
};

/** Box geometry; hairlines and corner marks are drawn from these. */
const BOX = { left: 96, top: 84, width: 1008, height: 462 };
const PHOTO = 300;

const STACK_KEYS = ["typescript", "rust", "next", "postgresql"];

function Hairline(props: { horizontal?: boolean; at: number }) {
  return (
    <div
      style={{
        position: "absolute",
        background: COLORS.edge,
        ...(props.horizontal
          ? { left: 0, right: 0, top: props.at, height: 1 }
          : { top: 0, bottom: 0, left: props.at, width: 1 }),
      }}
    />
  );
}

function Cross({ x, y }: { x: number; y: number }) {
  const arm = 7;
  return (
    <div
      style={{
        position: "absolute",
        left: x - arm,
        top: y - arm,
        width: arm * 2 + 1,
        height: arm * 2 + 1,
        display: "flex",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: arm,
          top: 0,
          width: 1,
          height: arm * 2 + 1,
          background: COLORS.muted,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: arm,
          left: 0,
          height: 1,
          width: arm * 2 + 1,
          background: COLORS.muted,
        }}
      />
    </div>
  );
}

export default async function OpenGraphImage() {
  const assets = path.join(process.cwd(), "src/assets/og");
  const [sansMedium, sansSemibold, mono, avatar] = await Promise.all([
    readFile(path.join(assets, "IBMPlexSans-500.ttf")),
    readFile(path.join(assets, "IBMPlexSans-600.ttf")),
    readFile(path.join(assets, "IBMPlexMono-400.ttf")),
    readFile(path.join(assets, "avatar.jpg")),
  ]);

  const [current] = USER.jobs;
  const stack = STACK_KEYS.map(
    (key) => TECH_STACK.find((tech) => tech.key === key)?.title
  ).filter(Boolean);
  const host = new URL(USER.website).host;

  const right = BOX.left + BOX.width;
  const bottom = BOX.top + BOX.height;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: COLORS.background,
        backgroundImage: `radial-gradient(${COLORS.dots} 1.5px, transparent 0)`,
        backgroundSize: "22px 22px",
        fontFamily: "Plex Sans",
        color: COLORS.foreground,
      }}
    >
      <Hairline horizontal at={BOX.top} />
      <Hairline horizontal at={bottom} />
      <Hairline at={BOX.left} />
      <Hairline at={right} />

      <div
        style={{
          position: "absolute",
          left: BOX.left + 1,
          top: BOX.top + 1,
          width: BOX.width - 1,
          height: BOX.height - 1,
          display: "flex",
          flexDirection: "column",
          background: COLORS.background,
        }}
      >
        {/* Status bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
            padding: "0 32px",
            borderBottom: `1px solid ${COLORS.edge}`,
            fontFamily: "Plex Mono",
            fontSize: 20,
            color: COLORS.muted,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: COLORS.success,
                marginRight: 14,
              }}
            />
            {current ? `${current.title} ${current.company}` : USER.jobTitle}
          </div>
          <div style={{ display: "flex", letterSpacing: 3 }}>00 / PROFILE</div>
        </div>

        {/* Identity */}
        <div style={{ display: "flex", flex: 1 }}>
          <div
            style={{
              display: "flex",
              width: PHOTO + 24,
              padding: 12,
              borderRight: `1px solid ${COLORS.edge}`,
            }}
          >
            <img
              src={`data:image/jpeg;base64,${avatar.toString("base64")}`}
              alt=""
              width={PHOTO}
              height={PHOTO - 52}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 4,
                filter: "grayscale(100%)",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "22px 40px 26px",
                borderTop: `1px solid ${COLORS.edge}`,
                fontSize: 92,
                fontWeight: 600,
                letterSpacing: -3.5,
                lineHeight: 1,
              }}
            >
              {USER.displayName}
            </div>
            <div
              style={{
                display: "flex",
                padding: "18px 40px",
                borderTop: `1px solid ${COLORS.edge}`,
                fontFamily: "Plex Mono",
                fontSize: 26,
                color: COLORS.muted,
              }}
            >
              {USER.jobTitle}
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
            padding: "0 32px",
            borderTop: `1px solid ${COLORS.edge}`,
            fontFamily: "Plex Mono",
            fontSize: 20,
            color: COLORS.muted,
          }}
        >
          <div style={{ display: "flex", color: COLORS.foreground }}>
            {host}
          </div>
          <div style={{ display: "flex", color: COLORS.faint }}>
            {stack.join("  ·  ")}
          </div>
        </div>
      </div>

      <Cross x={BOX.left} y={BOX.top} />
      <Cross x={right} y={BOX.top} />
      <Cross x={BOX.left} y={bottom} />
      <Cross x={right} y={bottom} />
    </div>,
    {
      ...size,
      fonts: [
        { name: "Plex Sans", data: sansMedium, weight: 500, style: "normal" },
        {
          name: "Plex Sans",
          data: sansSemibold,
          weight: 600,
          style: "normal",
        },
        { name: "Plex Mono", data: mono, weight: 400, style: "normal" },
      ],
    }
  );
}
