import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { ThemeToggle } from "@/components/theme-toggle";
import { ExperienceSection } from "@/features/portfolio/components/layout/experience-section";
import { HeroSection } from "@/features/portfolio/components/layout/hero-section";
import { ProjectsSection } from "@/features/portfolio/components/layout/projects-section";
import { TechSection } from "@/features/portfolio/components/layout/tech-section";
import { USER } from "@/features/portfolio/data/user";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Minimal Header */}
        <header className="fixed top-0 right-0 left-0 z-50 bg-background/90 backdrop-blur-sm">
          <div className="mx-auto flex h-12 max-w-2xl items-center justify-between border-b border-border/40 px-5">
            <span className="text-sm font-medium tracking-tight">
              {/* {USER.firstName.toLowerCase()} */}
              Daksh
              {/* <span className="text-muted-foreground">.dev</span> */}
            </span>
            <div className="flex items-center gap-5">
              <nav className="hidden items-center gap-5 sm:flex">
                {["Work", "Projects", "Skills"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-2xl px-5 pt-20 pb-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Divider */}
          <hr className="my-10 border-border/50" />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Divider */}
          <hr className="my-10 border-border/50" />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Divider */}
          <hr className="my-10 border-border/50" />

          {/* Tech Stack Section */}
          <TechSection />
        </main>

        {/* Footer */}
        <footer className="border-t border-border/40">
          <div className="mx-auto max-w-2xl px-5 py-8">
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} {USER.displayName}
            </p>
          </div>
        </footer>
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
