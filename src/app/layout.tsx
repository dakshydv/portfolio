import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { Container } from "@/components/Container";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daksh Yadav",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-[#f6f6f6] dark:bg-black`}
      >
        <ThemeProvider>
          <Toaster position="top-center" />
          <div className="relative grid min-h-screen grid-cols-1 md:grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[auto_1fr_auto] [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10">
            <div className="hidden md:block relative -right-px col-start-2 row-span-full row-start-1 bg-white dark:bg-[#171717] border-x border-gray-300 dark:border-neutral-800 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>

            <div className="hidden md:block relative -left-px col-start-4 row-span-full row-start-1 bg-white dark:bg-[#171717] border-x border-gray-300 dark:border-neutral-800 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>

            <div className="col-start-1 md:col-start-3 row-start-1">
              <Navbar />
            </div>

            <div className="col-start-1 md:col-start-3 bg-[#ececec] md:border-x border-gray-300 dark:border-gray-700 row-start-2">
              <Container>{children}</Container>
            </div>

            <div className="col-start-1 md:col-start-3 row-start-3">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
