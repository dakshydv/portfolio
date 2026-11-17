import dynamic from "next/dynamic";

import { SiteHeader } from "@/components/site-header";

// Design switcher hidden for now; boxy is the only design shown.
// const DesignDock = dynamic(() =>
//   import("@/components/design-dock").then((mod) => mod.DesignDock)
// );

const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((mod) => mod.ScrollToTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden boxy:px-3">
        {children}
      </main>
      {/* <DesignDock /> */}
      <ScrollToTop className="boxy:rounded-sm boxy:border boxy:border-edge" />
    </>
  );
}
