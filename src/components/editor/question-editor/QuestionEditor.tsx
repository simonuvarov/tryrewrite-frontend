import React, { useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import useEditor from '../../../hooks/useEditor';
import { Element } from '../body-editor/Element';

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
  const { question, setQuestion, initializingPaper } = useEditor();

  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback(props => <Element {...props} />, []);

  if (initializingPaper) return QuestionSkeleton;

  return (
    <Slate editor={editor} value={question} onChange={setQuestion}>
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
