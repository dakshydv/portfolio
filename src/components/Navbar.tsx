"use client";
import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const navItems = [
    {
      title: "Experience",
      href: "/experience",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["100%", "40%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        className="flex fixed top-0 inset-x-0 w-full max-w-4xl bg-white dark:bg-[#171717] z-70 mx-auto rounded-full items-center justify-between py-2 px-3"
      >
        <Link href={"/"}>
          <Image
            src={"/daksh.png"}
            height={"100"}
            width={"100"}
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
        </Link>

        <div className="flex items-center gap-2">
          {navItems.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className="text-sm relative px-2 py-2"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10 text-gray-900 dark:text-gray-100">
                {item.title}
              </span>
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </motion.nav>
    </Container>
  );
};
