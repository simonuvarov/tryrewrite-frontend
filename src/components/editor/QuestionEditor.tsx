import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { usePaperStore } from '../../stores/usePaperStore';
import { deserialize } from './deserialize';
import { Element } from './Element';
import { serialize } from './serialize';

interface BodyEditorProps {
  className?: string;
  placeholder: string;
}

const QuestionEditor = (props: BodyEditorProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  const { paper, setPaper } = usePaperStore();

  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback(props => <Element {...props} />, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

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
