import React, { useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import useEditor from '../../../hooks/useEditor';
import { Element } from './Element';
import { renderLeaf } from './renderLeaf';
import { useDecorate } from './useDecorate';

interface BodyEditorProps {
  className?: string;
  placeholder: string;
}

const BodyEditor = (props: BodyEditorProps) => {
  const { body, setBody } = useEditor();

  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback(props => <Element {...props} />, []);

  const decorate = useDecorate();

  return (
    <Slate editor={editor} value={body} onChange={setBody}>
      <Editable
        placeholder={props.placeholder}
        spellCheck={false}
        className={props.className}
        decorate={decorate}
        renderLeaf={renderLeaf}
        renderElement={renderElement}
      />
    </Slate>
  );
};

export default BodyEditor;
