import { BaseRange, NodeEntry, Text } from 'slate';
import { CRITERIA_TYPE, InlineIssue } from '../../services/paper.service';
import { useAssistantStore } from '../../stores/useAssistantStore';
import { usePaperStore } from '../../stores/usePaperStore';
import { splitTextIntoParagraphRanges } from './splitTextIntoParagraphRanges';

export interface IssueRange extends BaseRange {
  id: string;
  affects: CRITERIA_TYPE;
}

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

    for (const issue of issues.filter(h => {
      return (
        h.isInline &&
        h.offset < currentTextRange[1] &&
        h.offset >= currentTextRange[0]
      );
    }) as Array<InlineIssue>) {
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
