import { useAssistantStore } from '../stores/useAssistantStore';
import { IssueCard, IssueCardSkeleton } from './issue-card/IssueCard';

interface IssueListProps {
  className?: string;
}

export const IssueList = (props: IssueListProps) => {
  const { issues, isResultFetching } = useAssistantStore();

  const skeletons = new Array(10).fill(null).map((_, i) => {
    return <IssueCardSkeleton key={i} />;
  });

  return (
    <ul className={`space-y-8 mt-8 ${props.className || ''}`}>
      {isResultFetching
        ? skeletons
        : issues.map(i => <IssueCard issue={i} key={i.id} />)}
    </ul>
  );
};
