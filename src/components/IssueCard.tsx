import { useState } from 'react';
import { CRITERIA_TYPE } from '../services/paper.service';

export interface Issue {
  message: string;
  shortMessage: string;
  offset: number;
  length: number;
  replacements?: Array<string>;
  affects: CRITERIA_TYPE;
  isInline: boolean;
}

interface IssueCardProps {
  issue: Issue;
}

const mapCriteriaToTWColor = (criteria: CRITERIA_TYPE): string => {
  switch (criteria) {
    case CRITERIA_TYPE.TA:
      return `green-600`;
    case CRITERIA_TYPE.CC:
      return `blue-600`;
    case CRITERIA_TYPE.LR:
      return `indigo-600`;
    case CRITERIA_TYPE.GR:
      return `yellow-600`;
  }
};

export const IssueCard = (props: IssueCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col justify-start py-4 px-6 border rounded-lg shadow-sm mt-5 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-start items-center mb-2">
        <span
          className={`h-2 w-2 bg-${mapCriteriaToTWColor(
            props.issue.affects
          )} rounded-full`}
        />
        <span className="ml-3 text-xs leading-5 text-gray-400 font-medium uppercase">
          {props.issue.affects}
        </span>
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
          <span className="ml-5 block text-sm leading-6 text-gray-700">
            {props.issue.message}
          </span>
        </div>
      )}
    </div>
  );
};
