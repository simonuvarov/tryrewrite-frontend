import { CRITERIA_TYPE } from '../../services/paper.service';

interface ReplacementProps {
  type: CRITERIA_TYPE;
  value: string;
}
export const Replacement = ({ type, value }: ReplacementProps) => {
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
