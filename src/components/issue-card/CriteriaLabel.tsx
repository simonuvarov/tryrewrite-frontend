import { CRITERIA_TYPE } from '../../services/paper.service';

interface CriteriaLabelProps {
  type: CRITERIA_TYPE;
}
export const CriteriaLabel = ({ type }: CriteriaLabelProps) => {
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
