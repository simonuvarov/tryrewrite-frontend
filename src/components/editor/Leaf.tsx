import { RenderLeafProps } from 'slate-react';
import { CRITERIA_TYPE } from '../../services/paper.service';
import { useAssistantStore } from '../../stores/useAssistantStore';

const mapCriteriaToTWColor = (criteria: CRITERIA_TYPE): string => {
  switch (criteria) {
    case CRITERIA_TYPE.TA:
      return `border-blue-300`;
    case CRITERIA_TYPE.CC:
      return `border-purple-300`;
    case CRITERIA_TYPE.LR:
      return `border-red-300`;
    case CRITERIA_TYPE.GR:
      return `border-yellow-300`;
  }
};

export const Leaf = ({ children, leaf, attributes }: RenderLeafProps) => {
  const { isShowing } = useAssistantStore();
  if (leaf.affects)
    return (
      <span
        {...attributes}
        className={`${
          isShowing
            ? 'border-b-4' +
              ' ' +
              mapCriteriaToTWColor(
                leaf.affects! as CRITERIA_TYPE // TODO: fix types
              )
            : ''
        }`}
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
