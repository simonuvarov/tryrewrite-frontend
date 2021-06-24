import { BaseRange, NodeEntry, Text } from 'slate';
import {
  CRITERIA_TYPE,
  InlineIssue,
  Issue
} from '../../services/paper.service';
import { useAssistantStore } from '../../stores/useAssistantStore';
import { usePaperStore } from '../../stores/usePaperStore';

export interface IssueRange extends BaseRange {
  id: string;
  affects: CRITERIA_TYPE;
}

export const splitTextIntoParagraphRanges = (text: string) => {
  const paragraphRanges: Array<[number, number]> = [];
  let offset = 0;
  text.split('\n').map((p: string) => {
    const start = offset;
    const end = offset + p.length + '\n'.length;
    paragraphRanges.push([start, end]);
    offset = offset + p.length + '\n'.length;
  });

  return paragraphRanges;
};

const isPartOfParagraph = (issue: Issue, paragraphRange: [number, number]) => {
  return (
    issue.isInline &&
    issue.offset < paragraphRange[1] &&
    issue.offset >= paragraphRange[0]
  );
};

const extractParagraphIssues = (
  issues: Array<Issue>,
  paragraphRange: [number, number]
) => {
  return issues.filter(h =>
    isPartOfParagraph(h, paragraphRange)
  ) as Array<InlineIssue>;
};

export const useDecorate = () => {
  const { issues } = useAssistantStore();
  const { paper } = usePaperStore();

  return ([node, path]: NodeEntry) => {
    const ranges: IssueRange[] = [];

    if (!Text.isText(node) || !issues) {
      return ranges;
    }

    const paragraphRanges: Array<[number, number]> =
      splitTextIntoParagraphRanges(paper.body);
    const currentTextRange = paragraphRanges[path[0]];

    const relatedIssues = extractParagraphIssues(issues, currentTextRange);

    for (const issue of relatedIssues) {
      const length = issue.length;
      const start = issue.offset - currentTextRange[0];
      const end = start + length;

      ranges.push({
        id: issue.id,
        anchor: { path, offset: start },
        focus: { path, offset: end },
        affects: issue.affects
      });
    }

    return ranges;
  };
};
