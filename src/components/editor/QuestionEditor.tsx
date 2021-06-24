import React, { useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { useEditorStore } from '../../stores/useEditorStore';
import { deserialize } from './deserialize';
import { Element } from './Element';
import { serialize } from './serialize';

interface BodyEditorProps {
  className?: string;
  placeholder: string;
}

const QuestionSkeleton = (
  <div className="space-y-2 animate-pulse">
    <div className="h-5 bg-gray-100 rounded w-2/3"></div>
    <div className="h-5 bg-gray-100 rounded w-1/2"></div>
  </div>
);

const QuestionEditor = (props: BodyEditorProps) => {
  const { paper, setPaper, loading: isLoading } = useEditorStore();

  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback(props => <Element {...props} />, []);

  if (isLoading) return QuestionSkeleton;

  return (
    <Slate
      editor={editor}
      value={deserialize(paper.question)}
      onChange={value => {
        if (paper.question != serialize(value)) {
          setPaper({ question: serialize(value), body: paper.body });
        }
      }}
    >
      <Editable
        placeholder={props.placeholder}
        spellCheck={false}
        className={props.className}
        renderElement={renderElement}
      />
    </Slate>
  );
};

export default QuestionEditor;
