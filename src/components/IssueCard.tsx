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
      colors = `text-blue-600`;
      break;
    case CRITERIA_TYPE.CC:
      colors = `text-purple-600`;
      break;
    case CRITERIA_TYPE.LR:
      colors = `text-red-600`;
      break;
    case CRITERIA_TYPE.GR:
      colors = `text-yellow-600`;
      break;
  }

  return (
    <div className={`inline w-full rounded text-sm sfont-medium ${colors}`}>
      {type}
    </div>
  );
};

interface ReplacementProps {
  type: CRITERIA_TYPE;
  value: string;
}

const Replacement = ({ type, value }: ReplacementProps) => {
  let colors: string;

  switch (type) {
    case CRITERIA_TYPE.TA:
      colors = `bg-blue-500 text-white`;
      break;
    case CRITERIA_TYPE.CC:
      colors = `bg-purple-500 text-white`;
      break;
    case CRITERIA_TYPE.LR:
      colors = `bg-red-500 text-white`;
      break;
    case CRITERIA_TYPE.GR:
      colors = `bg-yellow-500 text-white`;
      break;
  }

  return (
    <li
      className={`inline rounded py-2 px-3 cursor-pointer text-base lieading-6 font-medium transition-shadow duration-75 hover:shadow-md ${colors}`}
    >
      {value}
    </li>
  );
};

export const IssueCard = (props: IssueCardProps) => {
  return (
    <li
      key={props.issue.message + props.issue.shortMessage}
      className="px-12 py-8 border border-gray-200 bg-white shadow-sm rounded-lg"
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
      {props.issue.isInline && props.issue.replacements && (
        <ul className=" space-x-2 mt-4">
          {props.issue.replacements.map(r => (
            <Replacement value={r} type={props.issue.affects} />
          ))}
        </ul>
      )}
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
