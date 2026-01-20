"use client";

import { Children, useState } from "react";

import { Button } from "@/components/ui/button";

export function ExpandableProjectList({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Ensure we have an array of children
  const items = Children.toArray(children);
  const visibleProjects = isExpanded ? items : items.slice(0, 3);

  return (
    <div className="flex flex-col">
      {visibleProjects.map((child, index) => (
        <div
          key={index}
          className="border-b border-border/50 py-8 first:pt-0 last:border-0"
        >
          {child}
        </div>
      ))}

      {!isExpanded && items.length > 3 && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(true)}
            className="w-full sm:w-auto"
          >
            Show All Projects ({items.length})
          </Button>
        </div>
      )}
    </div>
  );
}
