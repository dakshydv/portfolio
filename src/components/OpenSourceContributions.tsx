import { ContributionsItem } from "@/features/blog/components/contributions-item";
import {
  Panel,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel";
import { OSSContributions } from "@/features/portfolio/data/oss-contributions";

export function OpenSourceContributions() {
  return (
    <div>
      <Panel id="OSS">
        <PanelHeader>
          <PanelTitle>Open Source Contributions</PanelTitle>
        </PanelHeader>

        {/* <CollapsibleList
          items={OSSContributions}
          max={8}
          renderItem={(item) => <ContributionsItem contributions={OSSContributions[0]} />}
        /> */}
        {OSSContributions.map((contribution) => (
          <ContributionsItem
            key={contribution.url}
            contributions={contribution}
          />
        ))}

        {/* <PanelContent>
          <ProseMono>
            <Markdown>{USER.about}</Markdown>
          </ProseMono>
        </PanelContent> */}
      </Panel>
    </div>
  );
}
