import React, { useEffect } from 'react';
import { RenderLeafProps } from 'slate-react';
import scrollIntoViewIfNeeded from 'smooth-scroll-into-view-if-needed';
import useEditor from '../../../hooks/useEditor';
import { CRITERIA_TYPE } from '../../../services/paper.service';
import { useAssistantVisibilityStore } from '../../../stores/useAssistantVisibilityStore';

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
  const { checking, selected, select } = useEditor();
  const { isVisible } = useAssistantVisibilityStore();
  const shouldBeHighlighted = !checking && isVisible;
  const expanded =
    selected !== undefined && leaf.id !== undefined && selected === leaf.id;

  const ref = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (expanded && ref.current) {
      const topOffset = ref.current.offsetTop;

      scrollIntoViewIfNeeded(ref.current, {
        scrollMode: 'if-needed',
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [expanded]);

  let styles = ['transition-colors', 'duration-250'];

  if (shouldBeHighlighted) {
    styles.push(
      'border-b-4',
      getBorderColorFromCriteria(
        leaf.affects! as CRITERIA_TYPE // TODO: fix types
      )
    );
    if (expanded)
      styles.push(
        getBackgroundColorFromCriteria(leaf.affects as CRITERIA_TYPE)
      );
    else styles.push('bg-white');
  }

  if (leaf.affects)
    return (
      <span
        ref={ref}
        onClick={() => {
          select(leaf.id as string);
        }}
        {...attributes}
        className={styles.join(' ')}
      >
        {children}
      </span>
    );

  return (
    <span {...attributes} className="bg-white">
      {children}
    </span>
  );
};
