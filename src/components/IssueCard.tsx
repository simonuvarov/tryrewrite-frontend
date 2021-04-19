import {
  ExternalLinkIcon,
  MinusIcon,
  SelectorIcon
} from '@heroicons/react/solid';
import { useState } from 'react';
import { CRITERIA_TYPE, Issue } from '../services/paper.service';

interface IssueCardProps {
  issue: Issue;
}

const mapCriteriaToTWColor = (criteria: CRITERIA_TYPE): string => {
  switch (criteria) {
    case CRITERIA_TYPE.TA:
      return `bg-green-600`;
    case CRITERIA_TYPE.CC:
      return `bg-blue-600`;
    case CRITERIA_TYPE.LR:
      return `bg-red-600`;
    case CRITERIA_TYPE.GR:
      return `bg-yellow-600`;
  }
};

export const IssueCard = (props: IssueCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-start py-4 px-6 border rounded-lg shadow-sm mt-5">
      <div
        className="flex justify-between items-center mb-2 cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center">
          <span
            className={`h-2 w-2 shadow-sm ${mapCriteriaToTWColor(
              props.issue.affects
            )} rounded-full`}
          />
          <span className="ml-3 text-xs leading-5 text-gray-400 font-medium uppercase">
            {props.issue.affects}
          </span>
        </div>
        {open ? (
          <MinusIcon className="h-5 text-gray-400" />
        ) : (
          <SelectorIcon className="h-5 text-gray-400" />
        )}
      </div>
      <div>
        <span
          className={`ml-5 text-sm leading-5 text-gray-800 ${
            open ? 'font-medium' : ''
          }`}
        >
          {props.issue.shortMessage.length === 0
            ? 'Some temp message'
            : props.issue.shortMessage}
        </span>
      </div>
      {open && (
        <div className="mt-2">
          <div className="ml-5 block text-sm leading-6 text-gray-700">
            {props.issue.message}
          </div>
          {props.issue.link && (
            <div className="ml-5 block text-sm font-medium leading-6 text-gray-500 hover:text-gray-700 mt-3">
              <a
                href={props.issue.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <span>More information</span>
                <ExternalLinkIcon className="h-4 ml-1" />
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
