import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { Contact } from "@/features/portfolio/components/home/contact";
import { Hero } from "@/features/portfolio/components/home/hero";
import { SelectedProjects } from "@/features/portfolio/components/home/selected-projects";
import { Toolbox } from "@/features/portfolio/components/home/toolbox";
import { WorkHistory } from "@/features/portfolio/components/home/work-history";
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

      <div className="mx-auto max-w-2xl px-4 boxy:max-w-3xl boxy:border-x boxy:border-dashed boxy:border-edge boxy:px-0 boxy:pb-16 *:[[id]]:scroll-mt-14">
        <Hero />
        <WorkHistory />
        <SelectedProjects />
        <Toolbox />
        <Contact />
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
