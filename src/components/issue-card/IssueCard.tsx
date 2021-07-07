import React, { useEffect, useRef } from 'react';
import scrollIntoViewIfNeeded from 'smooth-scroll-into-view-if-needed';
import useEditor from '../../hooks/useEditor';
import { InlineIssue, Issue } from '../../services/paper.service';
import { CriteriaLabel } from './CriteriaLabel';
import { LearnMoreButton } from './LearnMoreButton';
import { Replacement } from './Replacement';

interface IssueCardProps {
  issue: Issue;
  expanded?: boolean;
}

export const IssueCardSkeleton = () => {
  return (
    <li className="w-[480px] px-12 py-8 border border-gray-100 bg-white shadow rounded-xl animate-pulse">
      <div className="mt-2 h-4 bg-gray-200 rounded w-2/3"></div>
      <div className="mt-5 space-y-3">
        <h3 className="h-6 bg-gray-200 rounded w-1/2"></h3>
        <p className="h-5 bg-gray-200 rounded w-full"></p>
      </div>
      <style jsx>{`
        .expanded-shadow {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px;
        }

        .collapsed-shadow {
          box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
        }
      `}</style>
    </li>
  );
};

export const IssueCard = (props: IssueCardProps) => {
  const { select, selected, replaceText } = useEditor();

  const ref = useRef<HTMLLIElement>(null);

  const expanded = props.expanded
    ? props.expanded
    : selected === props.issue.id;
  const setExpanded = () => select(props.issue.id);

  useEffect(() => {
    if (expanded && ref.current)
      scrollIntoViewIfNeeded(ref.current, {
        scrollMode: 'if-needed',
        behavior: 'smooth',
        block: 'center'
      });
  }, [expanded]);

  return (
    <li
      key={props.issue.id}
      className={`w-[480px] px-12 py-8 border border-gray-200 bg-white transition-shadow rounded-xl ${
        expanded ? 'shadow-lg' : 'shadow-sm cursor-pointer'
      }`}
      onClick={setExpanded}
      ref={ref}
    >
      <CriteriaLabel type={props.issue.affects} />
      <div className="mt-4 space-y-1">
        <h3
          className={`text-lg leading-7 font-medium text-gray-800 ${
            expanded ? '' : 'line-clamp-1'
          }`}
        >
          {props.issue.shortMessage}
        </h3>
        <p
          className={`text-base leading-7 font-normal text-gray-700 ${
            expanded ? '' : 'line-clamp-1'
          }`}
        >
          {props.issue.message}
        </p>
      </div>
      {props.issue.isInline && props.issue.replacements && expanded && (
        <ul className="flex space-x-2 mt-4">
          {props.issue.replacements.map(r => (
            <Replacement
              value={r}
              type={props.issue.affects}
              onClick={() => {
                const issue: InlineIssue = props.issue as InlineIssue; // for some reason TS does not perform type check correctly
                replaceText(issue.offset, issue.length, r);
              }}
            />
          ))}
        </ul>
      )}
      {props.issue.link && expanded && (
        <LearnMoreButton href={props.issue.link} />
      )}
    </li>
  );
};
