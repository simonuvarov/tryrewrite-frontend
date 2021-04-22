import { ChevronRightIcon } from '@heroicons/react/solid';
import { CRITERIA_TYPE, Issue } from '../services/paper.service';

interface IssueCardProps {
  issue: Issue;
}

interface LabelProps {
  type: CRITERIA_TYPE;
}

const Label = ({ type }: LabelProps) => {
  let colors: string;

  switch (type) {
    case CRITERIA_TYPE.TA:
      colors = `bg-blue-100 text-blue-700`;
      break;
    case CRITERIA_TYPE.CC:
      colors = `bg-indigo-100 text-indigo-700`;
      break;
    case CRITERIA_TYPE.LR:
      colors = `bg-red-100 text-red-700`;
      break;
    case CRITERIA_TYPE.GR:
      colors = `bg-yellow-100 text-yellow-700`;
      break;
  }

  return (
    <div
      className={`inline w-full rounded text-xs py-1 px-2 uppercase font-semibold tracking-wide ${colors}`}
    >
      {type}
    </div>
  );
};

interface SuggestionButtonProps {
  type: CRITERIA_TYPE;
  value: string;
}

const SuggestionButton = ({ type }: SuggestionButtonProps) => {
  let colors: string;

  switch (type) {
    case CRITERIA_TYPE.TA:
      colors = `bg-blue-100 text-blue-700`;
      break;
    case CRITERIA_TYPE.CC:
      colors = `bg-indigo-100 text-indigo-700`;
      break;
    case CRITERIA_TYPE.LR:
      colors = `bg-red-100 text-red-700`;
      break;
    case CRITERIA_TYPE.GR:
      colors = `bg-yellow-100 text-yellow-700`;
      break;
  }

  return (
    <div className={`inline w-full rounded text-xs py-1 px-2 ${colors}`}>
      {type}
    </div>
  );
};

export const IssueCard = (props: IssueCardProps) => {
  return (
    <li
      key={props.issue.message + props.issue.shortMessage}
      className="px-12 py-8 border border-gray-100 shadow-sm rounded-lg"
    >
      <Label type={props.issue.affects} />
      <div className="mt-4 space-y-1">
        <h3 className="text-lg leading-6 font-medium text-gray-800">
          {props.issue.shortMessage}
        </h3>
        <p className=" w-96 text-base leading-7 font-normal text-gray-700">
          {props.issue.message}
        </p>
      </div>
      {props.issue.link && (
        <a
          href={props.issue.link}
          className="flex items-center mt-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-sm leading-4 font-medium text-gray-400">
            Learn more
          </span>
          <ChevronRightIcon className="h-5 w-5 text-gray-400" />
        </a>
      )}
    </li>
  );
};
