import { Markdown } from "@/components/markdown";
import { ProseMono } from "@/components/ui/typography";
import { USER } from "@/features/portfolio/data/user";

export function About() {
  return (
    <div className="text-lg leading-relaxed text-muted-foreground">
      <ProseMono>
        <Markdown>{USER.about}</Markdown>
      </ProseMono>
    </div>
  );
}
