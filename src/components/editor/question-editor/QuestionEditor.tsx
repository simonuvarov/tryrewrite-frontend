import React, { useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import useEditor from '../../../hooks/useEditor';
import { Element } from '../body-editor/Element';

interface BodyEditorProps {
  className?: string;
  placeholder: string;
}

const QuestionEditor = (props: BodyEditorProps) => {
  const { question, setQuestion } = useEditor();

  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback(props => <Element {...props} />, []);

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
