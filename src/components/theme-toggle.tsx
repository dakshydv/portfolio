"use client";

import { useTheme } from "next-themes";
import { useCallback } from "react";

import { META_THEME_COLORS } from "@/config/site";
import { useMetaColor } from "@/hooks/use-meta-color";
import { useSound } from "@/hooks/use-sound";

import { MoonIcon } from "./animated-icons/moon";
import { SunMediumIcon } from "./animated-icons/sun-medium";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const { setMetaColor } = useMetaColor();

  const playClick = useSound("/audio/ui-sounds/click.wav");

  const switchTheme = useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
    setMetaColor(META_THEME_COLORS[next]);

    // The click sound is decorative; never let audio errors (e.g. Safari's
    // autoplay rules) block the theme change.
    try {
      playClick();
    } catch {
      // ignore
    }
  }, [resolvedTheme, setTheme, setMetaColor, playClick]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={switchTheme}
      // onClick={() => {
      //   if (!document.startViewTransition) switchTheme();
      //   document.startViewTransition(switchTheme);
      // }}
    >
      <MoonIcon className="relative hidden after:absolute after:-inset-2 dark:block" />
      <SunMediumIcon className="relative block after:absolute after:-inset-2 dark:hidden" />
      <span className="sr-only">Theme Toggle</span>
    </Button>
  );
}
