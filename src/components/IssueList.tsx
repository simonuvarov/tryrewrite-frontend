import React from 'react';
import useEditor from '../hooks/useEditor';
import { IssueCard, IssueCardSkeleton } from './issue-card/IssueCard';

interface IssueListProps {
  className?: string;
}

export const IssueList = (props: IssueListProps) => {
  const { issues, checking } = useEditor();

  const skeletons = new Array(10).fill(null).map((_, i) => {
    return <IssueCardSkeleton key={i} />;
  });

  const containerRef = React.useRef<HTMLUListElement>(null);

  return (
    <ul className={`space-y-8 ${props.className || ''}`} ref={containerRef}>
      {checking || !issues
        ? skeletons
        : issues.map((issue, index) => (
            <IssueCard issue={issue} key={issue.id} />
          ))}
    </ul>
  );
};
