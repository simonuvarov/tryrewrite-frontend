import React, { useEffect } from 'react';
import { RenderLeafProps } from 'slate-react';
import { CRITERIA_TYPE } from '../../services/paper.service';
import { useAssistantStore } from '../../stores/useAssistantStore';

export interface LeafProps extends RenderLeafProps {
  leaf: { id: string; affects: CRITERIA_TYPE; text: string };
}

const getBorderColorFromCriteria = (criteria: CRITERIA_TYPE): string => {
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

const getBackgroundColorFromCriteria = (criteria: CRITERIA_TYPE): string => {
  switch (criteria) {
    case CRITERIA_TYPE.TA:
      return `bg-blue-100`;
    case CRITERIA_TYPE.CC:
      return `bg-purple-100`;
    case CRITERIA_TYPE.LR:
      return `bg-red-100`;
    case CRITERIA_TYPE.GR:
      return `bg-yellow-100`;
  }
};

export const Leaf = ({ children, leaf, attributes }: LeafProps) => {
  const { isVisible, isChecking } = useAssistantStore();
  const { selected, select } = useAssistantStore();

  const shouldBeHighlighted = isVisible && !isChecking;

  const expanded = selected === leaf.id;

  const ref = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (expanded) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [expanded]);

  if (leaf.affects)
    return (
      <span
        ref={ref}
        onClick={() => {
          select(leaf.id as string);
        }}
        {...attributes}
        className={`transition-colors duration-500 ${
          shouldBeHighlighted
            ? 'border-b-4' +
              ' ' +
              getBorderColorFromCriteria(
                leaf.affects! as CRITERIA_TYPE // TODO: fix types
              )
            : ''
        } ${
          expanded && shouldBeHighlighted
            ? getBackgroundColorFromCriteria(leaf.affects as CRITERIA_TYPE)
            : 'bg-white'
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
