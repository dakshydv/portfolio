import dynamic from "next/dynamic";

import { SiteHeader } from "@/components/site-header";

const DesignDock = dynamic(() =>
  import("@/components/design-dock").then((mod) => mod.DesignDock)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden boxy:px-3">
        {children}
      </main>
      <DesignDock />
    </>
  );
}
