import { RenderLeafProps } from 'slate-react';
import { CRITERIA_TYPE } from '../../services/paper.service';

const mapCriteriaToTWColor = (criteria: CRITERIA_TYPE): string => {
  switch (criteria) {
    case CRITERIA_TYPE.TA:
      return `border-green-600`;
    case CRITERIA_TYPE.CC:
      return `border-blue-500`;
    case CRITERIA_TYPE.LR:
      return `border-red-500`;
    case CRITERIA_TYPE.GR:
      return `border-yellow-500`;
  }
};

export const Leaf = ({ children, leaf, attributes }: RenderLeafProps) => {
  if (leaf.affects)
    return (
      <span
        {...attributes}
        className={`border-b-2 ${mapCriteriaToTWColor(
          leaf.affects! as CRITERIA_TYPE // TODO: fix types
        )}`}
      >
        {children}
      </span>
    );

  return (
    <span {...attributes} className="">
      {children}
    </span>
  );
};
