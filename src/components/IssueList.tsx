import useEditor from '../hooks/useEditor';
import { IssueCard, IssueCardSkeleton } from './issue-card/IssueCard';

interface IssueListProps {
  className?: string;
}

export const IssueList = (props: IssueListProps) => {
  const { issues, checking } = useEditor();
  console.log(issues);
  console.log(checking);

  const skeletons = new Array(10).fill(null).map((_, i) => {
    return <IssueCardSkeleton key={i} />;
  });

  return (
    <ul className={`space-y-8 mt-8 ${props.className || ''}`}>
      {checking || !issues
        ? skeletons
        : issues.map(i => <IssueCard issue={i} key={i.id} />)}
    </ul>
  );
};
