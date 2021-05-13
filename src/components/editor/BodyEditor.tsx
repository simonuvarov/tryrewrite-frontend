import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { useAssistantStore } from '../../stores/useAssistantStore';
import { usePaperStore } from '../../stores/usePaperStore';
import { deserialize } from './deserialize';
import { Element } from './Element';
import { Leaf } from './Leaf';
import { serialize } from './serialize';
import { useDecorate } from './useDecorate';

interface BodyEditorProps {
  className?: string;
}

const BodyEditor = (props: BodyEditorProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  const { issues, setIsResultFetching } = useAssistantStore();

  const { paper, setPaper } = usePaperStore();

  const editor = useMemo(() => withReact(createEditor()), []);

  const renderLeaf = useCallback(
    (props: any) => {
      return <Leaf {...props} />;
    },
    [issues]
  );

  const renderElement = useCallback(props => <Element {...props} />, []);

  // decorate function depends on the language selected
  const decorate = useDecorate();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Slate
      editor={editor}
      value={deserialize(paper.body)}
      onChange={value => {
        if (paper.body != serialize(value)) {
          setPaper({ question: paper.question, body: serialize(value) });
          setIsResultFetching(true);
        }
      }}
    >
      <Editable
        placeholder="Enter some plain text..."
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
