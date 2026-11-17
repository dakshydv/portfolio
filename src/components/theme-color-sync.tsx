"use client";

import { useEffect } from "react";

import { useMetaColor } from "@/hooks/use-meta-color";

/**
 * Keeps `<meta name="theme-color">` in step with the active theme, so the
 * browser chrome (e.g. the area behind the iPhone notch) follows every theme
 * change, including system-driven ones, not only clicks on the toggle.
 */
export function ThemeColorSync() {
  const { metaColor, setMetaColor } = useMetaColor();

  useEffect(() => {
    setMetaColor(metaColor);
  }, [metaColor, setMetaColor]);

  return null;
}
