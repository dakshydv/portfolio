import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { About } from "@/features/portfolio/components/about";
import { Experiences } from "@/features/portfolio/components/experiences";
import { Sidebar } from "@/features/portfolio/components/layout/sidebar";
import { Overview } from "@/features/portfolio/components/overview";
// import { ProfileHeader } from "@/features/portfolio/components/profile-header"; // Moved to Sidebar
import { Projects } from "@/features/portfolio/components/projects";
// import { SocialLinks } from "@/features/portfolio/components/social-links"; // Moved to Sidebar
import { TeckStack } from "@/features/portfolio/components/teck-stack";
import { USER } from "@/features/portfolio/data/user";
import { cn } from "@/lib/utils";

function Separator() {
  return <div className="my-8 border-t border-border/40 lg:my-12" />; // Using explicit border instead of hr for better control
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="min-h-screen lg:flex">
        {/* Left Column: Fixed Sidebar */}
        <div className="z-50 border-r border-border bg-background/50 backdrop-blur-xl lg:fixed lg:inset-y-0 lg:w-96 xl:w-[28rem]">
          <Sidebar />
        </div>

        {/* Right Column: Scrollable Content */}
        <main className="min-w-0 flex-1 lg:pl-96 xl:pl-[28rem]">
          <div className="mx-auto max-w-4xl space-y-12 px-6 py-12 lg:px-12">
            <section id="about" className="scroll-mt-24">
              <h3 className="mb-6 text-xl font-semibold">About</h3>
              <About />
            </section>

            <Separator />

            <section id="experiences" className="scroll-mt-24">
              <h3 className="mb-6 text-xl font-semibold">Experience</h3>
              <Experiences />
            </section>

            <Separator />

            <section id="projects" className="scroll-mt-24">
              <h3 className="mb-6 text-xl font-semibold">Featured Projects</h3>
              <Projects />
            </section>

            <Separator />

            <section id="stack" className="scroll-mt-24">
              <h3 className="mb-6 text-xl font-semibold">Tech Stack</h3>
              <TeckStack />
            </section>
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 text-center text-sm text-balance text-muted-foreground lg:px-12 lg:text-left">
      <p className="mb-2">
        © {new Date().getFullYear()} {USER.displayName}. All rights reserved.
      </p>
      <p className="font-mono text-xs opacity-70">Inspired by chanhdai.com</p>
    </footer>
  );
}
