import React, { useEffect, useMemo } from 'react';
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

  const cardRefs: React.RefObject<HTMLLIElement>[] = useMemo(
    () =>
      Array(issues?.length || 0)
        .fill(0)
        .map(_ => React.createRef<HTMLLIElement>()),
    [issues]
  );

  const containerRef = React.useRef<HTMLUListElement>(null);

  const scrollToElement = (index: number) => {
    const scrollToOffset = cardRefs[index].current?.offsetTop;
    containerRef.current?.scrollTo({
      top: scrollToOffset! - 200,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    scrollToElement(0);
  }, []);

  return (
    <ul className={`space-y-8 ${props.className || ''}`} ref={containerRef}>
      {checking || !issues
        ? skeletons
        : issues.map((issue, index) => (
            <IssueCard
              issue={issue}
              key={issue.id}
              ref={cardRefs[index]}
              scrollTo={() => scrollToElement(index)}
            />
          ))}
    </ul>
  );
};
